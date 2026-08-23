import { ArrowUpRight, Fork, Star } from "@/components/ui/icons";
import { TrackedLink } from "@/components/ui/tracked-link";
import { compactNumber, formatMonthYear } from "@/lib/utils";
import type { GitHubRepository } from "@/types";

/**
 * Kartu repository unggulan (PRD 10.7 "Featured Repository Fields").
 *
 * Semua tautan ke GitHub dibuka di tab baru dengan rel yang aman, dan tanggal
 * "terakhir diperbarui" selalu ditampilkan supaya recruiter bisa menilai
 * apakah repo-nya masih aktif.
 *
 * Angka stars dan forks hanya dirender kalau nilainya di atas nol. Menampilkan
 * "0 stars" tidak memberi informasi apa pun dan justru terlihat lemah.
 */
export function RepoCard({ repository }: { repository: GitHubRepository }) {
  const lastUpdated = formatMonthYear(repository.updatedAt);

  return (
    <article className="reveal group border-rule relative isolate flex h-full flex-col border-t pt-6">
      <h4 className="font-mono text-sm">
        <TrackedLink
          href={repository.url}
          event="click_github_repository"
          eventProperties={{ repository: repository.name }}
          external
          className="link-underline inline-flex items-start gap-1.5 after:absolute after:inset-0 after:content-['']"
        >
          {repository.name}
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">(terbuka di tab baru)</span>
        </TrackedLink>
      </h4>

      {repository.description ? (
        <p className="text-ink-soft mt-3 flex-1 text-sm">{repository.description}</p>
      ) : (
        <div className="flex-1" />
      )}

      {repository.topics.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
          {repository.topics.slice(0, 3).map((topic) => (
            <li
              key={topic}
              className="text-ink-faint font-mono text-[0.6875rem] before:mr-1 before:content-['#']"
            >
              {topic}
            </li>
          ))}
        </ul>
      ) : null}

      <dl className="text-ink-faint mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.6875rem]">
        {repository.language ? (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Bahasa utama</dt>
            <dd>{repository.language}</dd>
          </div>
        ) : null}

        {repository.stars > 0 ? (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Stars</dt>
            <dd className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" />
              {compactNumber(repository.stars)}
            </dd>
          </div>
        ) : null}

        {repository.forks > 0 ? (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Forks</dt>
            <dd className="flex items-center gap-1.5">
              <Fork className="h-3.5 w-3.5" />
              {compactNumber(repository.forks)}
            </dd>
          </div>
        ) : null}

        {lastUpdated ? (
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Terakhir diperbarui</dt>
            <dd>Diperbarui {lastUpdated}</dd>
          </div>
        ) : null}
      </dl>

      {/* Demo langsung dari field homepage repo. z-10 supaya tetap bisa diklik
          terpisah dari area klik kartu. */}
      {repository.homepage ? (
        <TrackedLink
          href={repository.homepage}
          event="click_project_demo"
          eventProperties={{ repository: repository.name }}
          external
          className="link-underline text-ink-soft hover:text-ink relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 text-xs transition-colors"
        >
          Demo langsung
          <ArrowUpRight className="h-3 w-3" />
          <span className="sr-only">(terbuka di tab baru)</span>
        </TrackedLink>
      ) : null}
    </article>
  );
}
