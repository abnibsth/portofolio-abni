import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { absoluteUrl } from "@/data/site";

/**
 * Sitemap (PRD FR-08). Otomatis tersedia di /sitemap.xml.
 *
 * Menambah project di data/projects.ts otomatis menambahkan URL-nya di sini —
 * tidak ada daftar terpisah yang bisa tertinggal.
 *
 * Sengaja tanpa `lastModified`: nilainya harus berasal dari `new Date()`, dan
 * dengan Cache Components nilai non-deterministik akan menggagalkan prerender.
 * Field ini opsional dan tidak mempengaruhi pengindeksan situs sekecil ini.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
