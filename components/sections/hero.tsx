import Image from "next/image";
import { buttonStyles, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowDown, ArrowUpRight, GitHubMark } from "@/components/ui/icons";
import { ResumeButton } from "@/components/ui/resume-button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/data/site";

/**
 * Hero (PRD 10.1).
 *
 * Nama dan role sengaja diletakkan di elemen paling atas dan berukuran paling
 * besar, karena satu-satunya tugas hero adalah menjawab "siapa ini dan apa
 * posisinya" sebelum recruiter melakukan scroll.
 *
 * Tidak ada animasi yang menunda tampilnya teks: seluruh isi hero ada di HTML
 * awal dan terbaca walaupun CSS animasi tidak berjalan.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container>
        <div className="grid items-start gap-y-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-x-12 lg:pb-28">
          <div className="lg:col-span-9">
            {/* Baris status: label + availability */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="label">Portfolio · {site.role}</span>

              <span className="border-rule-strong text-ink-soft inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.6875rem] tracking-[0.12em] uppercase">
                {/* Titik status dibarengi teks, bukan berdiri sendiri, supaya
                    maknanya tidak bergantung pada warna. */}
                <span
                  aria-hidden="true"
                  className={
                    site.availability.available
                      ? "bg-ink h-1.5 w-1.5 rounded-full"
                      : "border-ink-faint h-1.5 w-1.5 rounded-full border"
                  }
                />
                {site.availability.available
                  ? site.availability.label
                  : "Sedang tidak mencari peluang"}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-8 text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.98]"
            >
              {site.name}
              <span className="text-ink-soft block">
                <span aria-hidden="true">— </span>
                {site.role}
              </span>
            </h1>

            <p className="text-ink-soft mt-8 max-w-2xl text-lg sm:text-xl">
              {site.tagline}
            </p>

            {/* CTA. Primary lebih dulu di urutan DOM sekaligus di urutan tab. */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#work" variant="primary">
                Lihat Karya Pilihan
                <ArrowDown />
              </ButtonLink>

              <ResumeButton variant="secondary" label="Unduh CV" />

              <TrackedLink
                href={`https://github.com/${site.githubUsername}`}
                event="click_github_profile"
                external
                className={buttonStyles("secondary")}
              >
                <GitHubMark />
                GitHub
                <ArrowUpRight />
              </TrackedLink>

              <TrackedLink
                href={`mailto:${site.email}`}
                event="click_email"
                className={buttonStyles("secondary")}
              >
                Hubungi Saya
              </TrackedLink>
            </div>

            {/* Meta baris bawah */}
            <dl className="border-rule mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 sm:grid-cols-3">
              <div>
                <dt className="label">Lokasi</dt>
                <dd className="mt-2 text-sm">{site.location}</dd>
              </div>
              <div>
                <dt className="label">Preferensi</dt>
                <dd className="mt-2 text-sm">{site.workPreference}</dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-2 text-sm">{site.availability.detail}</dd>
              </div>
            </dl>
          </div>

          {/* Foto profil — muncul di semua ukuran layar. Di mobile tampil di
              atas (order-first), di desktop mengisi kolom kanan. Foto memberi
              wajah pada nama, bikin portfolio terasa personal.

              Treatment: grayscale penuh + sedikit contrast/brightness supaya
              nyatu dengan tema editorial monokrom (kertas + tinta). Hover
              mengembalikan warna asli — detail interaktif yang halus. */}
          <div className="order-first lg:order-none lg:col-span-3">
            <div className="group relative mx-auto aspect-[3/4] w-full max-w-[16rem] lg:ml-auto lg:mr-0">
              {/* Offset frame: garis tinta di belakang foto, khas editorial */}
              <div
                aria-hidden="true"
                className="border-ink absolute -inset-2 -z-10 rounded-[1.25rem] border opacity-15"
              />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-rule shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <Image
                  src="/images/abni-photo.jpg"
                  alt="Foto Abni Basit"
                  fill
                  priority
                  sizes="(min-width: 1024px) 13rem, 16rem"
                  className="object-cover object-top grayscale contrast-[1.05] brightness-[1.03] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
