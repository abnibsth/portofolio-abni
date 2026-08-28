import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/navigation/mobile-nav";
import { Container } from "@/components/ui/container";
import { VerifiedBadge } from "@/components/ui/icons";
import { ResumeButton } from "@/components/ui/resume-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * Header sticky (PRD 11).
 */
export function SiteHeader() {
  return (
    <header className="border-rule bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-sans text-xl font-bold tracking-tight flex items-center gap-2 group"
            aria-label={`${site.name} — kembali ke halaman utama`}
          >
            <Image
              src="/images/abni-jousting1.png"
              alt={`${site.name} Logo`}
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover border border-rule-strong shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="flex items-center gap-1.5">
              <span>{site.name}</span>
              <VerifiedBadge className="h-4 w-4 shrink-0" />
              <span aria-hidden="true" className="text-ink-faint font-normal">
                .
              </span>
            </span>
          </Link>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
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

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden lg:block">
              <ResumeButton
                variant="secondary"
                label="CV"
                className="h-9 px-4 text-xs"
              />
            </div>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
