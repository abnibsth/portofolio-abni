"use client";

import { useLanguage } from "@/components/language-provider";
import { buttonStyles, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowDown, ArrowUpRight, GitHubMark, MailIcon, VerifiedBadge } from "@/components/ui/icons";
import { Magnetic } from "@/components/ui/magnetic";
import { PixelAvatar } from "@/components/ui/pixel-avatar";
import { ResumeButton } from "@/components/ui/resume-button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/data/site";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container>
        <div className="grid items-start gap-y-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-x-12 lg:pb-28">
          <div className="min-w-0 lg:col-span-9">
            {/* Baris status: label + availability */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="label">{t.hero.badge}</span>

              <span className="border-rule-strong text-ink-soft inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.6875rem] tracking-[0.12em] uppercase">
                <span
                  aria-hidden="true"
                  className={
                    site.availability.available
                      ? "bg-ink h-1.5 w-1.5 rounded-full"
                      : "border-ink-faint h-1.5 w-1.5 rounded-full border"
                  }
                />
                {site.availability.available
                  ? t.site.availabilityLabel
                  : "Not currently looking for opportunities"}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-8 text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.98]"
            >
              <span className="inline-flex items-center gap-2.5 sm:gap-3">
                <span>{site.name}</span>
                <VerifiedBadge className="h-[0.65em] w-[0.65em] shrink-0 inline-block align-middle" />
              </span>
              <span className="text-ink-soft block">
                <span aria-hidden="true">— </span>
                {t.site.role}
              </span>
            </h1>

            <p className="text-ink-soft mt-8 max-w-2xl text-lg sm:text-xl">
              {t.site.tagline}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <ButtonLink href="#work" variant="primary">
                  {t.hero.viewWork}
                  <ArrowDown />
                </ButtonLink>
              </Magnetic>

              <Magnetic>
                <ResumeButton variant="secondary" label={t.hero.viewResume} />
              </Magnetic>

              <Magnetic>
                <TrackedLink
                  href={`https://github.com/${site.githubUsername}`}
                  event="click_github_profile"
                  external
                  className={buttonStyles("secondary")}
                >
                  <GitHubMark />
                  {t.hero.github}
                  <ArrowUpRight />
                </TrackedLink>
              </Magnetic>

              <Magnetic>
                <TrackedLink
                  href={`mailto:${site.email}`}
                  event="click_email"
                  className={buttonStyles("secondary")}
                >
                  <MailIcon />
                  {t.hero.contactMe}
                </TrackedLink>
              </Magnetic>
            </div>

            {/* Meta baris bawah */}
            <dl className="border-rule mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 sm:grid-cols-3">
              <div>
                <dt className="label">{t.hero.locationLabel}</dt>
                <dd className="mt-2 text-sm">{t.site.location}</dd>
              </div>
              <div>
                <dt className="label">{t.hero.preferenceLabel}</dt>
                <dd className="mt-2 text-sm">{t.site.workPreference}</dd>
              </div>
              <div>
                <dt className="label">{t.hero.statusLabel}</dt>
                <dd className="mt-2 text-sm">{t.site.availabilityDetail}</dd>
              </div>
            </dl>
          </div>

          {/* Foto profil — Lingkaran Avatar Interaktif dengan efek Pixel Matrix Dissolve */}
          <div className="order-first min-w-0 lg:order-none lg:col-span-3 lg:pt-10">
            <PixelAvatar
              srcInitial="/images/abni-jousting1.png"
              srcHover="/images/abni-photo.jpg"
              altInitial="Jousting Knight Avatar"
              altHover="Foto Abni Basit"
              gridResolution={10}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
