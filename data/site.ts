/**
 * ============================================================================
 * KONFIGURASI UTAMA — MULAI EDIT DARI SINI
 * ============================================================================
 * Satu file ini mengendalikan nama, role, kontak, SEO, dan username GitHub
 * di seluruh website. Ganti semua nilai bertanda [GANTI] dengan data aslimu.
 *
 * Checklist lengkap ada di DOCS.md bagian "1. Isi Data Pribadi".
 */

export const site = {
  /* --- Identitas ---------------------------------------------------------- */

  /** [GANTI] Nama yang tampil di hero, header, dan metadata. */
  name: "Abni Basit",

  /** [GANTI] Role yang kamu targetkan. Muncul persis di sebelah nama. */
  role: "Full Stack Developer",

  /**
   * [GANTI] Positioning statement. Satu kalimat, maksimal ~20 kata.
   * Ini yang dibaca recruiter dalam 5 detik pertama — jelaskan APA yang kamu
   * bangun dan UNTUK SIAPA, bukan daftar teknologi.
   */
  tagline:
    "Saya membangun antarmuka web yang rapi, cepat, dan mudah diakses dengan React dan Next.js.",

  /** [GANTI] Kota, Negara. */
  location: "Jakarta, Indonesia",

  /** [GANTI] Preferensi kerja: "Remote", "Hybrid", "Onsite", atau kombinasi. */
  workPreference: "Remote / Hybrid",

  /**
   * Status ketersediaan. Set `available: false` kalau sedang tidak mencari
   * kerja — badge di hero otomatis berubah, tidak perlu ubah komponen.
   */
  availability: {
    available: true,
    /** [GANTI] Teks singkat status. */
    label: "Terbuka untuk peluang kerja",
    /** [GANTI] Detail, contoh: "Full-time · Mulai Agustus 2026". */
    detail: "Full-time · Junior sampai Mid-level",
  },

  /* --- Kontak ------------------------------------------------------------- */

  /** [GANTI] Email profesional. Dipakai untuk semua tombol mailto. */
  email: "abni4250@gmail.com",

  /** [GANTI] Username GitHub — dipakai untuk memanggil GitHub API. */
  githubUsername: "abnibsth",

  /** [GANTI] URL profil LinkedIn lengkap. */
  linkedinUrl: "https://www.linkedin.com/in/abni-basit-munawar-47210a286/",

  /**
   * [OPSIONAL] Isi kalau punya. Set ke null untuk menyembunyikan link-nya.
   */
  twitterUrl: null as string | null,
  whatsappUrl: null as string | null,

  /* --- Resume ------------------------------------------------------------- */

  resume: {
    /**
     * [WAJIB] Taruh file PDF-mu di `public/resume/` dengan nama persis ini.
     * Selama file belum ada, tombol Resume otomatis disembunyikan supaya
     * tidak ada broken link (PRD 28: "Tidak ada broken link").
     */
    path: "/resume/abni-basit-frontend-developer.pdf",
    /** Nama file saat diunduh visitor. */
    downloadName: "abni-basit-frontend-developer.pdf",
    /**
     * Set `true` setelah kamu benar-benar menaruh PDF di public/resume/.
     * Selama `false`, semua tombol Resume disembunyikan.
     */
    isAvailable: false,
    /** [GANTI] Bulan/tahun terakhir resume diperbarui. */
    updatedAt: "Juli 2026",
  },

  /* --- SEO ---------------------------------------------------------------- */

  /**
   * [GANTI] URL produksi tanpa trailing slash. Dipakai untuk canonical URL,
   * sitemap, robots.txt, dan Open Graph.
   * Di Vercel, set environment variable NEXT_PUBLIC_SITE_URL supaya nilai ini
   * ikut berubah tanpa mengedit kode.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abnibasit.vercel.app",

  /** Judul default. Halaman lain menambahkan prefix sendiri. */
  title: "Abni Basit — Portfolio Full Stack Developer",

  description:
    "Portfolio full stack developer berisi proyek pilihan, studi kasus teknis, dan aktivitas GitHub terbaru.",

  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
  ],

  /** Bahasa konten. Dipakai untuk atribut <html lang> dan Open Graph locale. */
  locale: "id_ID",
  lang: "id",

  /**
   * Tahun untuk copyright di footer. Sengaja konstanta, bukan `new Date()`:
   * dengan Cache Components, nilai non-deterministik di luar scope `use cache`
   * akan menggagalkan prerender. Update sekali setahun.
   */
  copyrightYear: "2026",
} as const;

/** Helper: URL absolut untuk canonical & Open Graph. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
