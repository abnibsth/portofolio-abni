import { AbstractHatch } from "@/components/ui/abstract-mark";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, MailIcon } from "@/components/ui/icons";
import { ResumeButton } from "@/components/ui/resume-button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social-links";

/**
 * Contact (PRD 10.8) — Tema Terang (Light Paper Theme).
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-rule bg-paper text-ink relative overflow-hidden border-t"
    >
      <AbstractHatch className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 opacity-5 text-ink" />

      <Container>
        <div className="grid gap-y-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-x-12">
          <div className="min-w-0 lg:col-span-7">
            <span className="text-ink-soft font-mono text-[0.6875rem] tracking-[0.16em] uppercase">
              Kontak
            </span>

            <h2 id="contact-heading" className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
              Ada posisi, proyek, atau kolaborasi? Mari bicara.
            </h2>

            <p className="text-ink-soft mt-6 max-w-xl">
              Cara paling cepat adalah lewat email — biasanya saya balas dalam satu hari
              kerja. Kalau ingin melihat riwayat kerja lebih dulu, LinkedIn dan CV ada
              di sebelah.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <TrackedLink
                href={`mailto:${site.email}`}
                event="click_email"
                className={buttonStyles("primary")}
              >
                <MailIcon className="h-4 w-4 shrink-0 text-paper" />
                <span className="break-all">{site.email}</span>
              </TrackedLink>

              <ResumeButton
                variant="secondary"
                label="Unduh CV"
              />
            </div>

            {site.resume.isAvailable ? (
              <p className="text-ink-faint mt-4 font-mono text-xs">
                CV diperbarui {site.resume.updatedAt} · PDF
              </p>
            ) : null}
          </div>

          <div className="min-w-0 lg:col-span-5 lg:pl-6">
            <span className="text-ink-soft font-mono text-[0.6875rem] tracking-[0.16em] uppercase">
              Semua tautan
            </span>

            <ul className="divide-rule border-rule mt-5 divide-y border-t">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    href={link.href}
                    event={link.event}
                    external={!link.href.startsWith("mailto:")}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors text-ink"
                  >
                    <span>
                      <span className="font-display block text-2xl font-semibold text-ink group-hover:underline">
                        {link.label}
                      </span>
                      <span className="text-ink-soft mt-0.5 block font-mono text-xs">
                        {link.hint}
                      </span>
                    </span>
                    <ArrowUpRight className="text-ink-soft group-hover:text-ink h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
