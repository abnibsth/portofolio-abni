import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/data/site";

import "./globals.css";

/**
 * Font dimuat lewat next/font sehingga di-self-host, otomatis di-preload, dan
 * tidak menimbulkan layout shift (PRD 19: "Gunakan font optimization").
 *
 * Instrument Serif untuk heading, Geist untuk body — kombinasi serif display +
 * sans-serif yang direkomendasikan PRD 8.3.
 */
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase membuat semua URL relatif (OG image, canonical) otomatis
  // menjadi absolut. Tanpa ini, preview di media sosial akan rusak.
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    // Halaman lain cukup menulis judulnya sendiri, sisanya ditambahkan di sini.
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.lang}
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        {/* Skip link: target keyboard pertama di halaman, tersembunyi sampai
            mendapat fokus (PRD 18: navigasi dapat digunakan dengan keyboard). */}
        <a
          href="#main"
          className="focus:bg-ink focus:text-paper sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:px-5 focus:py-3 focus:text-sm"
        >
          Lompat ke konten utama
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />

        {/* Analytics hanya mengirim data setelah di-deploy ke Vercel.
            Di lokal, script ini tidak melakukan apa pun. */}
        <Analytics />
      </body>
    </html>
  );
}
