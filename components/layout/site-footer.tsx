import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "@/components/ui/icons";
import { TrackedLink } from "@/components/ui/tracked-link";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social-links";

export function SiteFooter() {
  return (
    <footer className="border-rule border-t">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl sm:text-4xl">
              {site.name}
              <span aria-hidden="true" className="text-ink-faint">
                .
              </span>
            </p>
            <p className="text-ink-soft mt-3 max-w-sm">{site.tagline}</p>
            <p className="label mt-6">
              {site.location} · {site.workPreference}
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="lg:col-span-3">
            <p className="label">Halaman</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/projects"
                  className="link-underline text-ink-soft hover:text-ink text-sm transition-colors"
                >
                  Semua Project
                </Link>
              </li>
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

          <div className="lg:col-span-4">
            <p className="label">Terhubung</p>
            <ul className="mt-5 space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    href={link.href}
                    event={link.event}
                    external={!link.href.startsWith("mailto:")}
                    className="link-underline text-ink-soft hover:text-ink inline-flex items-center gap-1.5 text-sm transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-rule flex flex-col gap-3 border-t py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-faint font-mono text-xs">
            © {site.copyrightYear} {site.name}
          </p>
          <p className="text-ink-faint font-mono text-xs">
            Dibangun dengan Next.js dan Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
