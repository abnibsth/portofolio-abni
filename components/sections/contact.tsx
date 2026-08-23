import { AbstractHatch } from "@/components/ui/abstract-mark";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "@/components/ui/icons";
import { ResumeButton } from "@/components/ui/resume-button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social-links";

/**
 * Contact (PRD 10.8).
 *
 * Tanpa contact form: yang tersedia adalah email, LinkedIn, GitHub, dan resume.
 * Ini keputusan sadar, bukan penyederhanaan — form menambah titik kegagalan
 * (backend, spam, deliverability) untuk sesuatu yang tetap berujung di inbox
 * yang sama, sementara recruiter umumnya lebih suka membalas dari email
 * mereka sendiri agar riwayat percakapannya tersimpan.
 *
 * Cara menambahkan contact form kalau nanti dibutuhkan ada di DOCS.md.
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-rule bg-ink text-paper relative overflow-hidden border-t"
    >
      {/* Blok inverted: ini "accent" pada tema monokrom — perhatian dibangun
          dari pembalikan warna, bukan dari hue. */}
      <AbstractHatch className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 opacity-20" />

      <Container>
        <div className="grid gap-y-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <span className="text-paper/60 font-mono text-[0.6875rem] tracking-[0.16em] uppercase">
              Kontak
            </span>

            <h2 id="contact-heading" className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Ada posisi, proyek, atau kolaborasi? Mari bicara.
            </h2>

            <p className="text-paper/70 mt-6 max-w-xl">
              Cara paling cepat adalah lewat email — biasanya saya balas dalam satu hari
              kerja. Kalau ingin melihat riwayat kerja lebih dulu, LinkedIn dan CV ada
              di sebelah.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <TrackedLink
                href={`mailto:${site.email}`}
                event="click_email"
                className={buttonStyles(
                  "primary",
                  "bg-paper text-ink hover:bg-paper/85",
                )}
              >
                <span className="break-all">{site.email}</span>
              </TrackedLink>

              <ResumeButton
                variant="secondary"
                label="Unduh CV"
                className="border-paper/30 text-paper hover:border-paper hover:bg-paper/10"
              />
            </div>

            {site.resume.isAvailable ? (
              <p className="text-paper/50 mt-4 font-mono text-xs">
                CV diperbarui {site.resume.updatedAt} · PDF
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-paper/60 font-mono text-[0.6875rem] tracking-[0.16em] uppercase">
              Semua tautan
            </p>

            <ul className="divide-paper/15 border-paper/15 mt-5 divide-y border-t">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    href={link.href}
                    event={link.event}
                    external={!link.href.startsWith("mailto:")}
                    className="group hover:text-paper flex items-center justify-between gap-4 py-5 transition-colors"
                  >
                    <span>
                      <span className="font-display block text-2xl">{link.label}</span>
                      <span className="text-paper/50 mt-0.5 block font-mono text-xs">
                        {link.hint}
                      </span>
                    </span>
                    <ArrowUpRight className="text-paper/50 group-hover:text-paper h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
