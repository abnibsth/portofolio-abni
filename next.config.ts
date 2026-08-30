import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
