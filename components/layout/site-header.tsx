import Link from "next/link";

import { MobileNav } from "@/components/navigation/mobile-nav";
import { Container } from "@/components/ui/container";
import { ResumeButton } from "@/components/ui/resume-button";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * Header sticky (PRD 11).
 *
 * Tingginya dijaga tetap rendah (56px) supaya tidak memakan ruang, dan memakai
 * background semi-transparan + blur agar teks di belakangnya tidak menembus.
 * Blur di sini murni CSS, tanpa listener scroll — nol JavaScript di header
 * kecuali menu mobile.
 */
export function SiteHeader() {
  return (
    <header className="border-rule bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-xl tracking-tight"
            aria-label={`${site.name} — kembali ke halaman utama`}
          >
            {site.name}
            <span aria-hidden="true" className="text-ink-faint">
              .
            </span>
          </Link>

          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-ink-soft hover:text-ink text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ResumeButton
              variant="secondary"
              label="CV"
              className="hidden h-9 px-4 text-xs md:inline-flex"
            />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
