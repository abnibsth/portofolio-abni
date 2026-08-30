import type { SkillGroup } from "@/types";

/**
 * ATURAN PENGISIAN (PRD 10.5):
 * - Hanya tulis teknologi yang benar-benar pernah kamu pakai di proyek nyata.
 * - `core: true` untuk yang kamu kuasai dan siap ditanya saat interview.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Crafting clean, responsive, and high-performance UI from scratch and modern frameworks.",
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
    note: "Production experience across PHP and Node.js ecosystems—building REST APIs and server-side architectures.",
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
    note: "Designing relational schemas, complex queries, and integrating cloud BaaS solutions.",
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
    note: "Building cross-platform and native mobile applications.",
    items: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Android Studio" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    note: "Daily toolkit for version control, API testing, dev environments, deployment, and workflow automation.",
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
