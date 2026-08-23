import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/data/site";

/**
 * robots.txt (PRD FR-09). Otomatis tersedia di /robots.txt.
 *
 * Seluruh situs boleh diindeks — memang itu tujuannya. Yang dikecualikan hanya
 * route API, karena tidak ada isi yang berguna bagi mesin pencari di sana.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
