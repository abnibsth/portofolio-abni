import type { GitHubProfile, GitHubRepository } from "@/types";
import { site } from "./site";

/**
 * ============================================================================
 * FALLBACK GITHUB
 * ============================================================================
 * Dipakai saat GitHub API gagal, kena rate limit, atau username belum diisi.
 * Tujuannya: section GitHub TIDAK PERNAH hilang dan TIDAK PERNAH menampilkan
 * pesan error teknis ke recruiter (PRD 10.7 "Error Handling").
 *
 * Isi daftar di bawah dengan repository yang benar-benar ingin kamu tonjolkan.
 * Angka stars/forks boleh 0 — recruiter tidak menilai dari situ.
 */

export const fallbackProfile: GitHubProfile = {
  login: site.githubUsername,
  name: site.name,
  bio: site.tagline,
  // null = komponen menampilkan monogram huruf, bukan gambar rusak.
  avatarUrl: null,
  url: `https://github.com/${site.githubUsername}`,
  publicRepos: 0,
  followers: 0,
  following: 0,
};

/**
 * [GANTI] Repository unggulan versi manual.
 * Urutan array = urutan tampil.
 */
export const fallbackRepositories: GitHubRepository[] = [
  {
    name: "sistem-kasir-umkm",
    description:
      "Aplikasi kasir offline-first untuk warung kecil. Next.js, TypeScript, PostgreSQL.",
    url: `https://github.com/${site.githubUsername}/sistem-kasir-umkm`,
    homepage: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updatedAt: "2025-05-20T00:00:00Z",
    topics: ["nextjs", "typescript", "offline-first"],
  },
  {
    name: "dashboard-analitik-konten",
    description:
      "Dashboard yang menyatukan performa artikel dari beberapa sumber data.",
    url: `https://github.com/${site.githubUsername}/dashboard-analitik-konten`,
    homepage: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updatedAt: "2025-08-12T00:00:00Z",
    topics: ["react", "dashboard", "typescript"],
  },
  {
    name: "katalog-produk-headless",
    description: "Etalase produk statis dengan revalidasi berkala dan optimasi gambar.",
    url: `https://github.com/${site.githubUsername}/katalog-produk-headless`,
    homepage: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updatedAt: "2024-12-02T00:00:00Z",
    topics: ["nextjs", "static-site", "performance"],
  },
];

/**
 * [OPSIONAL] Nama repository yang selalu ditampilkan lebih dulu saat data
 * live berhasil diambil, apa pun urutan aslinya dari GitHub.
 * Kosongkan array ini kalau ingin murni diurutkan dari yang terbaru.
 */
export const pinnedRepositoryNames: string[] = [
  "sistem-kasir-umkm",
  "dashboard-analitik-konten",
  "katalog-produk-headless",
];
