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
  role: "Full-Stack Web Developer",

  /**
   * [GANTI] Positioning statement. Satu kalimat, maksimal ~20 kata.
   * Ini yang dibaca recruiter dalam 5 detik pertama — jelaskan APA yang kamu
   * bangun dan UNTUK SIAPA, bukan daftar teknologi.
   */
  tagline:
    "I'm a full-stack web developer building web applications and backend systems with Laravel, Next.js, CodeIgniter, and MySQL, with practical experience in building production HR systems and mentoring student developers.",

  /** [GANTI] Kota, Negara. */
  location: "Jakarta, Indonesia",

  /** [GANTI] Preferensi kerja: "On-site", "Hybrid", atau kombinasi. */
  workPreference: "On-site / Hybrid",

  /**
   * Status ketersediaan. Set `available: false` kalau sedang tidak mencari
   * kerja — badge di hero otomatis berubah, tidak perlu ubah komponen.
   */
  availability: {
    available: true,
    /** [GANTI] Teks singkat status. */
    label: "Available for opportunities",
    /** [GANTI] Detail, contoh: "Full-time · Mulai Agustus 2026". */
    detail: "Full-time · Junior to Mid-level",
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
     * PDF ditaruh di `public/resume/abni-basit-cv.pdf`.
     */
    path: "/resume/abni-basit-cv.pdf",
    /** Nama file saat diunduh visitor. */
    downloadName: "abni-basit-cv.pdf",
    /**
     * Set `true` agar tombol Resume/CV tampil di hero dan header.
     */
    isAvailable: true,
    /** [GANTI] Bulan/tahun terakhir resume diperbarui. */
    updatedAt: "Agustus 2026",
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
  title: "Abni Basit — Portfolio Full-Stack Web Developer",

  description:
    "Portfolio full-stack web developer berisi proyek pilihan, studi kasus teknis, dan aktivitas GitHub terbaru.",

  keywords: [
    "Full-Stack Web Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer",
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
