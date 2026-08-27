import Image from "next/image";

import { Container } from "@/components/ui/container";
import { VisitorCounter } from "@/components/ui/visitor-counter";
import { site } from "@/data/site";

/**
 * SiteFooter — Footer versi kustom monokrom (PRD 10.8).
 *
 * Menampilkan kutipan personal, identitas ringkas, stacked avatars, dan pill badge
 * jumlah pengunjung ("Visited by 1.922 people").
 */
export function SiteFooter() {
  const avatars = [
    { src: "/images/jousting1.png", alt: "Jousting Avatar 1" },
    { src: "/images/jousting2.png", alt: "Jousting Avatar 2" },
    { src: "/images/jousting3.png", alt: "Jousting Avatar 3" },
    { src: "/images/jousting4.png", alt: "Jousting Avatar 4" },
  ];

  return (
    <footer className="mt-16">
      <Container>
        {/* Top dashed divider & main footer content */}
        <div className="border-t border-dashed border-rule-strong/40 pt-8 pb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left Column: Quote & Identity */}
            <div className="space-y-2">
              <p className="font-sans italic text-ink-soft text-base sm:text-lg tracking-wide">
                Pengulangan sampai menjadi teknik.
              </p>
              <p className="font-mono text-xs sm:text-sm text-ink-soft flex flex-wrap items-center gap-2">
                <span className="font-semibold text-ink">{site.name}</span>
                <span className="text-ink-faint">/</span>
                <span>{site.role}</span>
                <span className="text-ink-faint">/</span>
                <span>{site.location}</span>
              </p>
            </div>

            {/* Right Column: Stacked Avatars & Visited Counter Pill */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {/* Stacked overlapping avatars */}
              <div className="flex items-center -space-x-3 overflow-hidden p-1">
                {avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative h-10 w-10 rounded-full border-2 border-paper overflow-hidden bg-surface shadow-sm transition-transform hover:z-10 hover:scale-110"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Real-time Visited by counter pill badge */}
              <VisitorCounter />
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-rule flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between text-ink-faint font-mono text-xs">
          <p>© {site.copyrightYear} {site.name}</p>
          <p>Dibangun dengan Next.js dan Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
