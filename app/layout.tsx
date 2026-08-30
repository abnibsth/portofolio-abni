import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/data/site";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/abni-jousting1.png",
    shortcut: "/images/abni-jousting1.png",
    apple: "/images/abni-jousting1.png",
  },
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

import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { LanguageProvider } from "@/components/language-provider";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.lang}
      className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="public/images/abni-jousting1.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/abni-jousting1.png" />
        <link rel="apple-touch-icon" href="/images/abni-jousting1.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-paper text-ink transition-colors duration-200">
        <ThemeProvider defaultTheme="light" attribute="class">
          <LanguageProvider>
            <AnimatedCursor />
            <ScrollRevealProvider>
              {/* Skip link */}
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

              <Analytics />
            </ScrollRevealProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
