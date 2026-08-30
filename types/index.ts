/**
 * Semua tipe data konten portfolio.
 * Data aslinya ada di folder `data/`. Kalau kamu menambah field baru,
 * tambahkan di sini dulu supaya TypeScript memandu pengisiannya.
 */

/* -------------------------------------------------------------------------- */
/* Project                                                                     */
/* -------------------------------------------------------------------------- */

export type ProjectStatus = "Live" | "Selesai" | "Dalam pengembangan" | "Arsip";

export type ProjectImage = {
  /** Path relatif dari /public, contoh: "/images/projects/nama.svg" */
  src: string;
  /** Wajib diisi deskriptif — dibaca screen reader (PRD 18). */
  alt: string;
  width: number;
  height: number;
  /** Caption opsional di bawah gambar pada galeri. */
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  /** Tiap item = satu paragraf. */
  body: string[];
};

export type Project = {
  /** Dipakai sebagai URL: /projects/<slug> */
  slug: string;
  title: string;
  /** Satu kalimat. Muncul di kartu project dan meta description. */
  summary: string;
  /** Tahun pengerjaan, contoh: "2025". */
  year: string;
  /** Contoh: "Web App", "Landing Page", "Dashboard". */
  type: string;
  /** Peran kamu, contoh: "Frontend Developer · Solo". */
  role: string;
  /** Rentang waktu, contoh: "Mar – Mei 2025". */
  timeline: string;
  status: ProjectStatus;
  /** Teknologi utama. Tampil sebagai daftar, bukan progress bar (PRD 10.5). */
  stack: string[];
  /** URL demo publik. Kosongkan (undefined) kalau belum ada. */
  demoUrl?: string;
  /** URL repository GitHub. Kosongkan kalau private. */
  repoUrl?: string;
  cover: ProjectImage;
  /** Tampil di homepage bila true. Batas 3–5 project (PRD 10.2). */
  featured: boolean;

  /* --- Isi case study (PRD 10.3) --- */
  context: string[];
  problem: string[];
  solution: string[];
  contribution: string[];
  technicalDecisions: ProjectSection[];
  challenges: ProjectSection[];
  /** Hasil terukur atau learning outcome. */
  results: string[];
  gallery: ProjectImage[];
};

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export type ExperienceKind =
  | "Full-time"
  | "Internship"
  | "Freelance"
  | "Kontrak"
  | "Contract"
  | "Organisasi"
  | "Bootcamp"
  | "Kursus"
  | "Proyek Mandiri";

export type Experience = {
  organization: string;
  role: string;
  kind: ExperienceKind;
  /** Contoh: "2024 — Sekarang". Ditampilkan apa adanya. */
  period: string;
  /** Contoh: "Jakarta, Indonesia" atau "Remote". */
  location: string;
  summary: string;
  /** Utamakan pencapaian, bukan daftar tugas (PRD 10.6). */
  achievements: string[];
  stack: string[];
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                      */
/* -------------------------------------------------------------------------- */

export type Skill = {
  name: string;
  /** true = skill inti, dibedakan secara visual dari skill pendukung. */
  core?: boolean;
};

export type SkillGroup = {
  title: string;
  /** Satu kalimat konteks: kamu pakai ini untuk apa. */
  note: string;
  items: Skill[];
};

/* -------------------------------------------------------------------------- */
/* GitHub                                                                      */
/* -------------------------------------------------------------------------- */

export type GitHubRepository = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  /** ISO 8601 string dari GitHub API. */
  updatedAt: string;
  topics: string[];
};

export type GitHubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string | null;
  url: string;
  publicRepos: number;
  followers: number;
  following: number;
};

export type GitHubData = {
  profile: GitHubProfile;
  featured: GitHubRepository[];
  recent: GitHubRepository[];
  /**
   * "live"     = data segar dari GitHub API.
   * "fallback" = API gagal / tidak dikonfigurasi, memakai data lokal.
   * Dipakai untuk menyesuaikan copy, bukan untuk menampilkan error teknis.
   */
  source: "live" | "fallback";
};

/* -------------------------------------------------------------------------- */
/* Analytics                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Daftar tetap event analytics (PRD 21).
 *
 * Tipenya union, bukan string, supaya salah tulis nama event menjadi error
 * TypeScript — bukan data kotor yang baru ketahuan berbulan-bulan kemudian.
 * Tipe ini tinggal di sini (bukan di lib/analytics.ts) supaya Server Component
 * bisa memakainya tanpa mengimpor modul client.
 */
export type AnalyticsEvent =
  | "view_project"
  | "click_project_demo"
  | "click_github_repository"
  | "click_github_profile"
  | "download_resume"
  | "click_linkedin"
  | "click_email"
  | "click_twitter"
  | "click_whatsapp";

/* -------------------------------------------------------------------------- */
/* Social                                                                      */
/* -------------------------------------------------------------------------- */

export type SocialLink = {
  label: string;
  href: string;
  /** Teks pendek yang tampil di bawah label pada section Contact. */
  hint: string;
  /** Event analytics yang dikirim saat diklik. */
  event: AnalyticsEvent;
};
