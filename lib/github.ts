import "server-only";

import {
  fallbackProfile,
  fallbackRepositories,
  pinnedRepositoryNames,
} from "@/data/github-fallback";
import { site } from "@/data/site";
import type { GitHubData, GitHubProfile, GitHubRepository } from "@/types";

const GITHUB_API = "https://api.github.com";
const FEATURED_LIMIT = 3;
const RECENT_LIMIT = 4;
const REQUEST_TIMEOUT_MS = 6000;

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

function buildHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-website",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  return headers;
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${GITHUB_API}${path}`, {
      headers: buildHeaders(),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`[github] ${path} → HTTP ${response.status}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[github] ${path} gagal:`, error);
    return null;
  }
}

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
    updatedAt: raw.pushed_at ?? raw.updated_at,
    topics: raw.topics ?? [],
  };
}

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

function fallbackData(): GitHubData {
  const ordered = orderForDisplay(fallbackRepositories);
  return {
    profile: fallbackProfile,
    featured: ordered.slice(0, FEATURED_LIMIT),
    recent: [...fallbackRepositories].sort(sortByRecency).slice(0, RECENT_LIMIT),
    source: "fallback",
  };
}

export async function getGitHubData(): Promise<GitHubData> {
  const username = site.githubUsername.trim();
  if (!username || username === "username") return fallbackData();

  try {
    const [rawUser, rawRepos] = await Promise.all([
      fetchJson<RawUser>(`/users/${username}`),
      fetchJson<RawRepo[]>(
        `/users/${username}/repos?per_page=100&sort=pushed&direction=desc`,
      ),
    ]);

    if (!rawUser || !Array.isArray(rawRepos)) return fallbackData();

    const repositories = rawRepos.filter(isPresentable).map(toRepository);

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
  } catch {
    return fallbackData();
  }
}
