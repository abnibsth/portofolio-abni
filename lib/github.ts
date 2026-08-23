import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import {
  fallbackProfile,
  fallbackRepositories,
  pinnedRepositoryNames,
} from "@/data/github-fallback";
import { site } from "@/data/site";
import type { GitHubData, GitHubProfile, GitHubRepository } from "@/types";

/**
 * ============================================================================
 * GITHUB INTEGRATION
 * ============================================================================
 * Alur (PRD 15 "Server Flow"):
 *   1. Server memanggil GitHub API — TIDAK PERNAH dari browser.
 *   2. Hasilnya di-cache lewat `use cache` + cacheLife('hours').
 *   3. Respons mentah dibersihkan menjadi bentuk internal yang sempit.
 *   4. Komponen UI hanya menerima data yang sudah bersih.
 *   5. Kalau request gagal, seluruhnya jatuh ke data lokal di
 *      data/github-fallback.ts — section tidak pernah hilang.
 *
 * KEAMANAN:
 *   - File ini ditandai "server-only". Kalau ada Client Component yang tidak
 *     sengaja mengimpornya, build akan GAGAL, bukan diam-diam membocorkan token.
 *   - GITHUB_TOKEN dibaca tanpa prefix NEXT_PUBLIC_, jadi tidak pernah ikut
 *     masuk ke bundle browser (PRD 20).
 */

const GITHUB_API = "https://api.github.com";

/** Berapa repository yang ditampilkan di tiap kolom. */
const FEATURED_LIMIT = 3;
const RECENT_LIMIT = 4;

/** Timeout supaya GitHub yang lambat tidak menahan render halaman. */
const REQUEST_TIMEOUT_MS = 6000;

/* -------------------------------------------------------------------------- */
/* Bentuk mentah dari GitHub API — hanya field yang kita pakai                 */
/* -------------------------------------------------------------------------- */

type RawUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type RawRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  updated_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
};

/* -------------------------------------------------------------------------- */
/* Request                                                                     */
/* -------------------------------------------------------------------------- */

function buildHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-website",
  };

  // Tanpa token: 60 request/jam per IP. Dengan token: 5.000 request/jam.
  // Token cukup Personal Access Token tanpa scope apa pun (data publik saja).
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  return headers;
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${GITHUB_API}${path}`, {
      headers: buildHeaders(),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      // Dicatat di log server saja. Recruiter tidak pernah melihat ini.
      console.warn(`[github] ${path} → HTTP ${response.status}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[github] ${path} gagal:`, error);
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/* Normalisasi & filter                                                        */
/* -------------------------------------------------------------------------- */

function toProfile(raw: RawUser): GitHubProfile {
  return {
    login: raw.login,
    name: raw.name,
    bio: raw.bio,
    avatarUrl: raw.avatar_url,
    url: raw.html_url,
    publicRepos: raw.public_repos,
    followers: raw.followers,
    following: raw.following,
  };
}

function toRepository(raw: RawRepo): GitHubRepository {
  return {
    name: raw.name,
    description: raw.description,
    url: raw.html_url,
    homepage: raw.homepage && raw.homepage.trim() !== "" ? raw.homepage : null,
    language: raw.language,
    stars: raw.stargazers_count,
    forks: raw.forks_count,
    // pushed_at lebih jujur daripada updated_at: updated_at ikut berubah
    // hanya karena mengganti deskripsi repo.
    updatedAt: raw.pushed_at ?? raw.updated_at,
    topics: raw.topics ?? [],
  };
}

/**
 * Kurasi repository (PRD 15 "Repository Filtering").
 * Repo tanpa deskripsi sengaja dibuang: recruiter tidak bisa menilai repo yang
 * tidak menjelaskan dirinya sendiri, dan PRD melarang menampilkan semua repo
 * tanpa kurasi.
 */
function isPresentable(raw: RawRepo): boolean {
  if (raw.private) return false;
  if (raw.fork) return false;
  if (raw.archived) return false;
  if (!raw.description || raw.description.trim() === "") return false;
  return true;
}

function sortByRecency(a: GitHubRepository, b: GitHubRepository): number {
  return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
}

/**
 * Urutan tampil: repo yang kamu tandai di `pinnedRepositoryNames` lebih dulu
 * (mengikuti urutan yang kamu tulis), sisanya dari yang terbaru.
 */
function orderForDisplay(repositories: GitHubRepository[]): GitHubRepository[] {
  const pinnedRank = new Map(
    pinnedRepositoryNames.map((name, index) => [name.toLowerCase(), index]),
  );

  return [...repositories].sort((a, b) => {
    const rankA = pinnedRank.get(a.name.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
    const rankB = pinnedRank.get(b.name.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
    if (rankA !== rankB) return rankA - rankB;
    return sortByRecency(a, b);
  });
}

/* -------------------------------------------------------------------------- */
/* Public API                                                                  */
/* -------------------------------------------------------------------------- */

function fallbackData(): GitHubData {
  const ordered = orderForDisplay(fallbackRepositories);
  return {
    profile: fallbackProfile,
    featured: ordered.slice(0, FEATURED_LIMIT),
    recent: [...fallbackRepositories].sort(sortByRecency).slice(0, RECENT_LIMIT),
    source: "fallback",
  };
}

/**
 * Ambil data GitHub yang siap dirender.
 *
 * `use cache` membuat hasilnya disimpan dan dipakai ulang, `cacheLife('hours')`
 * memperbaruinya sekitar sejam sekali. Efeknya persis yang diminta PRD 10.7:
 * data cukup aktual, halaman tetap cepat, dan rate limit API tidak terkuras.
 *
 * Fungsi ini TIDAK PERNAH melempar error. Kegagalan apa pun berakhir di
 * fallback data lokal.
 */
export async function getGitHubData(): Promise<GitHubData> {
  "use cache";
  cacheLife("hours");
  cacheTag("github");

  const username = site.githubUsername.trim();
  if (!username || username === "username") return fallbackData();

  const [rawUser, rawRepos] = await Promise.all([
    fetchJson<RawUser>(`/users/${username}`),
    fetchJson<RawRepo[]>(
      `/users/${username}/repos?per_page=100&sort=pushed&direction=desc`,
    ),
  ]);

  if (!rawUser || !Array.isArray(rawRepos)) return fallbackData();

  const repositories = rawRepos.filter(isPresentable).map(toRepository);

  // Profil berhasil diambil tapi tidak ada repo yang lolos kurasi:
  // tampilkan profil live + repo pilihan manual, bukan "No activity" (PRD 10.7).
  if (repositories.length === 0) {
    return {
      profile: toProfile(rawUser),
      featured: orderForDisplay(fallbackRepositories).slice(0, FEATURED_LIMIT),
      recent: [],
      source: "fallback",
    };
  }

  const ordered = orderForDisplay(repositories);
  const featured = ordered.slice(0, FEATURED_LIMIT);
  const featuredNames = new Set(featured.map((repo) => repo.name));

  return {
    profile: toProfile(rawUser),
    featured,
    recent: [...repositories]
      .sort(sortByRecency)
      .filter((repo) => !featuredNames.has(repo.name))
      .slice(0, RECENT_LIMIT),
    source: "live",
  };
}
