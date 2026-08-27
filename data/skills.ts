import type { SkillGroup } from "@/types";

/**
 * ATURAN PENGISIAN (PRD 10.5):
 * - Hanya tulis teknologi yang benar-benar pernah kamu pakai di proyek nyata.
 * - `core: true` untuk yang kamu kuasai dan siap ditanya saat interview.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Nyaman membangun UI dari nol maupun dengan framework — fokus pada hasil yang rapi, responsif, dan performan.",
    items: [
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
      { name: "JavaScript", core: true },
      { name: "TypeScript", core: true },
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "Vite" },
      { name: "Tailwind", core: true },
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
      { name: "Express" },
      { name: "REST API", core: true },
    ],
  },
  {
    title: "Database & Cloud",
    note: "Punya pengalaman merancang skema relasional, query kompleks, serta integrasi layanan cloud/BaaS.",
    items: [
      { name: "MySQL", core: true },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Mobile",
    note: "Membangun aplikasi mobile cross-platform dan native.",
    items: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Android Studio" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    note: "Alat sehari-hari untuk versioning, pengujian API, lingkungan pengembangan, deployment, dan otomatisasi.",
    items: [
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Canva" },
      { name: "VS Code" },
      { name: "NPM" },
      { name: "Laragon" },
      { name: "PowerShell" },
      { name: "Prettier" },
      { name: "Nodemon" },
      { name: "FFmpeg" },
      { name: "Netlify" },
      { name: "Cloudflare" },
    ],
  },
];
