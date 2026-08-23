import type { SkillGroup } from "@/types";

/**
 * ATURAN PENGISIAN (PRD 10.5):
 * - Jangan pakai persentase atau progress bar. Tidak ada angka subjektif.
 * - Hanya tulis teknologi yang benar-benar pernah kamu pakai di proyek nyata.
 * - `core: true` untuk yang kamu kuasai dan siap ditanya saat interview.
 *   Sisanya (tanpa `core`) = pernah dipakai, masih belajar.
 * - Hapus grup yang tidak relevan, jangan diisi asal supaya terlihat penuh.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Nyaman membangun UI dari nol maupun dengan framework — fokus pada hasil yang rapi dan responsif.",
    items: [
      { name: "HTML", core: true },
      { name: "CSS", core: true },
      { name: "JavaScript", core: true },
      { name: "TypeScript", core: true },
      { name: "React.js", core: true },
      { name: "Next.js", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "jQuery" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    note: "Punya pengalaman produksi di ekosistem PHP maupun Node.js — terbiasa membangun API dan sistem server-side dari nol.",
    items: [
      { name: "PHP", core: true },
      { name: "Laravel", core: true },
      { name: "CodeIgniter 3", core: true },
      { name: "Node.js" },
      { name: "REST API", core: true },
      { name: "Express" },
    ],
  },
  {
    title: "Database",
    note: "Punya pengalaman merancang skema relasional dan query kompleks di lingkungan produksi.",
    items: [
      { name: "MySQL", core: true },
      { name: "PostgreSQL" },
      { name: "Migration & Seeding", core: true },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "Mobile",
    note: "Mulai merambah pengembangan aplikasi mobile — pernah membangun UI dan fitur sederhana dengan Flutter.",
    items: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Android Studio" },
    ],
  },
  {
    title: "Tools & Lainnya",
    note: "Alat sehari-hari untuk versioning, deploy, mengajar, dan kolaborasi tim.",
    items: [
      { name: "Git & GitHub", core: true },
      { name: "Vercel", core: true },
      { name: "Figma" },
      { name: "cPanel / Hosting" },
      { name: "Mentoring & Teaching", core: true },
      { name: "Problem Solving", core: true },
    ],
  },
];
