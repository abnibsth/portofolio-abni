import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components (Next.js 16) menggantikan experimental.ppr / dynamicIO / useCache.
  // Ini yang membuat `use cache` + cacheLife() di lib/github.ts berfungsi, dan
  // membuat halaman ter-prerender sebagai static shell dengan streaming untuk
  // bagian yang belum siap. Lihat DOCS.md bagian "GitHub Integration".
  cacheComponents: true,

  images: {
    // Avatar GitHub di-render lewat next/image, jadi host-nya harus di-allowlist.
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
