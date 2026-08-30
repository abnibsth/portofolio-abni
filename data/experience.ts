import type { Experience } from "@/types";

/**
 * ATURAN PENGISIAN (PRD 10.6):
 * - Urutkan dari yang TERBARU di atas. Urutan array = urutan tampil.
 * - `achievements` lebih penting daripada daftar tugas. Tulis hasilnya:
 *   "Menurunkan waktu load 2.4s → 0.9s", bukan "Bertanggung jawab atas performa".
 * - Kalau pengalaman kerja formal masih sedikit, itu wajar. Isi dengan
 *   bootcamp, organisasi, freelance, atau proyek mandiri — judul section
 *   sudah memakai "Pengalaman & Pembelajaran" supaya jujur dan tetap kuat.
 *
 * ISI DI BAWAH INI MASIH CONTOH. Ganti seluruhnya dengan pengalamanmu.
 */
export const experiences: Experience[] = [
  {
    organization: "SMKN 20 Jakarta",
    role: "IT Instructor",
    kind: "Contract",
    period: "Oct 2025 — Jan 2026",
    location: "Jakarta, Indonesia",
    summary:
      "Taught core computer science concepts and web development to vocational high school students for a full semester—from algorithm fundamentals to building end-to-end applications.",
    achievements: [
      "Mentored students in building functional web applications with Laravel 11, covering CRUD, authentication, routing, migrations, and relational database design following industry standards.",
      "Designed a structured curriculum and learning path from scratch combining fundamental logic, data structures, and hands-on coding exercises.",
      "Facilitated intensive debugging & pair programming sessions to cultivate algorithmic problem-solving mindsets.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  {
    organization: "PT Achivon Prestasi Abadi",
    role: "Web Developer",
    kind: "Contract",
    period: "Jul — Oct 2025",
    location: "Jakarta, Indonesia",
    summary:
      "Developed a production HR attendance and employee management system from scratch, transforming manual administrative processes into an automated, centralized digital platform.",
    achievements: [
      "Architected and deployed a web-based HR system (CodeIgniter 3 + MySQL + jQuery) for daily attendance tracking and employee records.",
      "Automated monthly attendance report generation previously handled manually—reducing HR administrative workload by 80% (from hours to minutes).",
      "Implemented onboarding modules, employee profiles, and real-time reporting dashboards with zero downtime.",
    ],
    stack: ["CodeIgniter 3", "PHP", "MySQL", "jQuery", "Bootstrap"],
  },
];
