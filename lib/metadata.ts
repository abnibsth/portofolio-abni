import type { Metadata } from "next";

import { absoluteUrl, site } from "@/data/site";

/**
 * Pembuat metadata terpusat supaya setiap halaman otomatis punya title,
 * description, canonical URL, Open Graph, dan Twitter card (PRD FR-07).
 */
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  /** Path relatif ke OG image. Default memakai app/opengraph-image.tsx. */
  ogImage,
}: {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: canonical,
      siteName: site.title,
      title,
      description,
      ...(ogImage ? { images: [{ url: absoluteUrl(ogImage) }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [absoluteUrl(ogImage)] } : {}),
    },
  };
}

/**
 * JSON-LD Person untuk homepage (PRD 17: "Structured data untuk Person").
 * Disuntikkan lewat <script type="application/ld+json">.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.tagline,
    url: site.url,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    sameAs: [
      `https://github.com/${site.githubUsername}`,
      site.linkedinUrl,
      ...(site.twitterUrl ? [site.twitterUrl] : []),
    ],
  };
}

/** JSON-LD CreativeWork untuk halaman detail project (PRD 17). */
export function projectJsonLd({
  title,
  description,
  path,
  year,
  stack,
}: {
  title: string;
  description: string;
  path: string;
  year: string;
  stack: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: absoluteUrl(path),
    dateCreated: year,
    keywords: stack.join(", "),
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };
}
