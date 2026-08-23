import Image from "next/image";

import { RepoCard } from "@/components/github/repo-card";
import { buttonStyles } from "@/components/ui/button";
import { ArrowUpRight, GitHubMark } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/data/site";
import { getGitHubData } from "@/lib/github";
import { compactNumber, formatMonthYear } from "@/lib/utils";

/**
 * Section GitHub Activity, bertema "Building in Public" (PRD 10.7 & 30).
 *
 * Komponennya async dan memanggil `getGitHubData()`, yang hasilnya di-cache
 * lewat `use cache` selama sekitar satu jam. Artinya section ini masuk ke static
 * shell — pengunjung tidak pernah menunggu GitHub API saat membuka halaman.
 *
 * `getGitHubData()` tidak pernah melempar error. Kalau API gagal, ia
 * mengembalikan data fallback lokal dan section tetap tampil utuh. Tidak ada
 * pesan error teknis yang sampai ke recruiter.
 */
export async function GitHubSection() {
  const { profile, featured, recent, source } = await getGitHubData();

  const profileUrl = profile.url;
  const displayName = profile.name ?? profile.login;
  const hasStats = profile.publicRepos > 0 || profile.followers > 0;

  return (
    <Section
      id="github"
      index="05"
      label="Building in Public"
      title="Aktivitas GitHub"
      intro={
        source === "live"
          ? "Diambil langsung dari GitHub dan disegarkan otomatis setiap beberapa jam."
          : "Repository pilihan yang paling menggambarkan cara saya bekerja."
      }
    >
      {/* --- Ringkasan profil --- */}
      <div className="reveal border-rule flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={`Foto profil GitHub ${displayName}`}
            width={64}
            height={64}
            className="bg-surface h-16 w-16 rounded-full object-cover"
          />
        ) : (
          // Tanpa avatar, tampilkan monogram — bukan gambar rusak.
          <div
            aria-hidden="true"
            className="bg-ink font-display text-paper flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl"
          >
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="flex-1">
          <p className="font-mono text-sm">@{profile.login}</p>
          {profile.bio ? (
            <p className="text-ink-soft mt-1.5 max-w-xl text-sm">{profile.bio}</p>
          ) : null}
        </div>

        <TrackedLink
          href={profileUrl}
          event="click_github_profile"
          external
          className={buttonStyles("secondary", "h-11 shrink-0 px-5 text-xs")}
        >
          <GitHubMark />
          Buka profil
          <ArrowUpRight className="h-3.5 w-3.5" />
        </TrackedLink>
      </div>

      {/* --- Statistik profil. Ditaruh paling bawah prioritasnya sesuai PRD:
              featured repositories jauh lebih relevan daripada jumlah follower. */}
      {hasStats ? (
        <dl className="reveal mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="label">Repository publik</dt>
            <dd className="font-display mt-1 text-3xl tabular-nums">
              {compactNumber(profile.publicRepos)}
            </dd>
          </div>
          <div>
            <dt className="label">Followers</dt>
            <dd className="font-display mt-1 text-3xl tabular-nums">
              {compactNumber(profile.followers)}
            </dd>
          </div>
          <div>
            <dt className="label">Following</dt>
            <dd className="font-display mt-1 text-3xl tabular-nums">
              {compactNumber(profile.following)}
            </dd>
          </div>
        </dl>
      ) : null}

      {/* --- Grafik kontribusi realtime (dari ghchart) --- */}
      <div className="reveal mt-10">
        <h3 className="label">Kontribusi setahun terakhir</h3>
        <div className="border-rule bg-surface overflow-hidden rounded-xl border p-4 sm:p-6">
          <div className="github-arcade">
            {/* Overlay dekoratif Snake arcade */}
            <div className="github-arcade__overlay" aria-hidden="true">
              {/* Snake Head (Mata menghadap depan) */}
              <div className="github-arcade__snake-head">
                <div className="github-arcade__snake-eyes">
                  <span className="github-arcade__snake-eye" />
                  <span className="github-arcade__snake-eye" />
                </div>
              </div>

              {/* Badannya mengekor di belakang kepala secara urut */}
              <div className="github-arcade__snake-body github-arcade__snake-body--1" />
              <div className="github-arcade__snake-body github-arcade__snake-body--2" />
              <div className="github-arcade__snake-body github-arcade__snake-body--3" />
              <div className="github-arcade__snake-body github-arcade__snake-body--4" />
              <div className="github-arcade__snake-body github-arcade__snake-body--5" />
              <div className="github-arcade__snake-body github-arcade__snake-body--6" />

              {/* Makanan Uler (Apple / Green Dot) */}
              <span className="github-arcade__snake-food github-arcade__snake-food--1" />
              <span className="github-arcade__snake-food github-arcade__snake-food--2" />
              <span className="github-arcade__snake-food github-arcade__snake-food--3" />
              <span className="github-arcade__snake-food github-arcade__snake-food--4" />
            </div>

            <Image
              src={`https://ghchart.rshah.org/0b0b0b/${site.githubUsername}`}
              alt={`Grafik kontribusi GitHub ${site.githubUsername} selama 12 bulan terakhir`}
              width={860}
              height={128}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* --- Repository unggulan (prioritas 1 di PRD 10.7) --- */}
      {featured.length > 0 ? (
        <div className="mt-14">
          <h3 className="label">Repository unggulan</h3>
          <div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((repository) => (
              <RepoCard key={repository.name} repository={repository} />
            ))}
          </div>
        </div>
      ) : null}

      {/* --- Repository yang baru diperbarui (prioritas 2) ---
              Kalau kosong, blok ini hilang begitu saja. Tidak ada tulisan
              "No activity" — PRD 10.7 melarang pesan negatif seperti itu. */}
      {recent.length > 0 ? (
        <div className="reveal mt-14">
          <h3 className="label">Baru diperbarui</h3>
          <ul className="divide-rule border-rule mt-4 divide-y border-t">
            {recent.map((repository) => (
              <li key={repository.name}>
                <TrackedLink
                  href={repository.url}
                  event="click_github_repository"
                  eventProperties={{ repository: repository.name }}
                  external
                  className="group hover:bg-surface/60 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 transition-colors"
                >
                  <span className="flex items-center gap-2 font-mono text-sm">
                    {repository.name}
                    <ArrowUpRight className="text-ink-faint group-hover:text-ink h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="sr-only">(terbuka di tab baru)</span>
                  </span>
                  <span className="text-ink-faint font-mono text-[0.6875rem]">
                    {repository.language ? `${repository.language} · ` : ""}
                    {formatMonthYear(repository.updatedAt)}
                  </span>
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="border-rule text-ink-faint mt-10 border-t pt-6 font-mono text-xs">
        Kontribusi pada repository privat tidak ditampilkan di sini. Yang terlihat hanya
        aktivitas publik di{" "}
        <TrackedLink
          href={profileUrl}
          event="click_github_profile"
          external
          className="link-underline text-ink-soft hover:text-ink transition-colors"
        >
          github.com/{site.githubUsername}
        </TrackedLink>
        .
      </p>
    </Section>
  );
}
