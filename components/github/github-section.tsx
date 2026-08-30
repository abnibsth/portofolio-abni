import Image from "next/image";

import { RepoCard } from "@/components/github/repo-card";
import { buttonStyles } from "@/components/ui/button";
import { ArrowUpRight, GitHubMark } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/data/site";
import { getGitHubData } from "@/lib/github";
import { compactNumber, formatMonthYear } from "@/lib/utils";

type ContributionData = {
  svg: string | null;
  totalContributions: number;
};

async function getContributionChartData(username: string): Promise<ContributionData> {
  try {
    const res = await fetch(`https://ghchart.rshah.org/216e39/${username}`, {
      signal: AbortSignal.timeout(6000),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { svg: null, totalContributions: 0 };
    let svg = await res.text();

    // Hitung total kontribusi dari data-count dalam SVG
    const matches = [...svg.matchAll(/data-count="(\d+)"/g)];
    const totalContributions = matches.reduce((sum, m) => sum + parseInt(m[1], 10), 0);

    // Ubah semua <rect> menjadi lingkaran bulat sempurna (rx="5" ry="5")
    svg = svg.replaceAll(/<rect\s/g, '<rect rx="5" ry="5" ');

    // Ganti warna 0-kontribusi menjadi kelas CSS .contrib-0 yang fleksibel di mode terang/gelap
    svg = svg.replaceAll(/fill="#0b0b0b"/gi, 'class="contrib-0"');
    svg = svg.replaceAll(/fill="#000000"/gi, 'class="contrib-0"');
    svg = svg.replaceAll(/fill="#161b22"/gi, 'class="contrib-0"');
    svg = svg.replaceAll(/fill="#ebedf0"/gi, 'class="contrib-0"');
    svg = svg.replaceAll(/fill="#ffffff"/gi, 'class="contrib-0"');

    // Rapikan warna teks bulan & hari di dalam SVG
    svg = svg.replaceAll(/fill="#767676"/gi, 'class="contrib-text"');

    return { svg, totalContributions };
  } catch {
    return { svg: null, totalContributions: 0 };
  }
}

export async function GitHubSection() {
  const { profile, featured, recent, source } = await getGitHubData();
  const chartData = await getContributionChartData(site.githubUsername);

  const profileUrl = profile.url;
  const displayName = profile.name ?? profile.login;
  const hasStats = profile.publicRepos > 0 || profile.followers > 0;

  return (
    <Section
      id="github"
      index="06"
      label="Building in Public"
      title="GitHub Activity"
      intro={
        source === "live"
          ? "Fetched directly from GitHub API and refreshed automatically every few hours."
          : "Featured open source repositories showcasing development practices."
      }
    >
      {/* --- Ringkasan profil --- */}
      <div className="reveal border-rule flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={`GitHub profile picture for ${displayName}`}
            width={64}
            height={64}
            className="bg-surface h-16 w-16 rounded-full object-cover"
          />
        ) : (
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
          className={buttonStyles("secondary", "h-11 w-full shrink-0 px-5 text-xs sm:w-auto")}
        >
          <GitHubMark />
          Open Profile
          <ArrowUpRight className="h-3.5 w-3.5" />
        </TrackedLink>
      </div>

      {/* --- Statistik profil --- */}
      {hasStats ? (
        <dl className="reveal mt-8 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10">
          <div>
            <dt className="label">Public Repositories</dt>
            <dd className="font-display mt-1 text-2xl sm:text-3xl tabular-nums">
              {compactNumber(profile.publicRepos)}
            </dd>
          </div>
          <div>
            <dt className="label">Followers</dt>
            <dd className="font-display mt-1 text-2xl sm:text-3xl tabular-nums">
              {compactNumber(profile.followers)}
            </dd>
          </div>
          <div>
            <dt className="label">Following</dt>
            <dd className="font-display mt-1 text-2xl sm:text-3xl tabular-nums">
              {compactNumber(profile.following)}
            </dd>
          </div>
        </dl>
      ) : null}

      {/* --- GitHub Activity Heatmap Tema Terang / Paper --- */}
      <div className="reveal mt-10">
        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-ink">
          GitHub Activity
        </h3>

        <div className="rounded-2xl border border-rule-strong/40 bg-surface p-4 sm:p-7 shadow-sm">
          <div className="github-arcade relative">
            {/* Overlay dekoratif Snake arcade */}
            <div className="github-arcade__overlay" aria-hidden="true">
              <div className="github-arcade__snake-head">
                <div className="github-arcade__snake-eyes">
                  <span className="github-arcade__snake-eye" />
                  <span className="github-arcade__snake-eye" />
                </div>
              </div>

              <div className="github-arcade__snake-body github-arcade__snake-body--1" />
              <div className="github-arcade__snake-body github-arcade__snake-body--2" />
              <div className="github-arcade__snake-body github-arcade__snake-body--3" />
              <div className="github-arcade__snake-body github-arcade__snake-body--4" />
              <div className="github-arcade__snake-body github-arcade__snake-body--5" />
              <div className="github-arcade__snake-body github-arcade__snake-body--6" />

              <span className="github-arcade__snake-food github-arcade__snake-food--1" />
              <span className="github-arcade__snake-food github-arcade__snake-food--2" />
              <span className="github-arcade__snake-food github-arcade__snake-food--3" />
              <span className="github-arcade__snake-food github-arcade__snake-food--4" />
            </div>

            {chartData.svg ? (
              <div
                className="w-full overflow-x-auto pb-2 [&_svg]:min-w-[650px] [&_svg]:w-full [&_svg]:h-auto scrollbar-thin"
                dangerouslySetInnerHTML={{ __html: chartData.svg }}
              />
            ) : (
              <Image
                src={`https://ghchart.rshah.org/216e39/${site.githubUsername}`}
                alt={`GitHub contribution graph for ${site.githubUsername} over the last 12 months`}
                width={860}
                height={128}
                className="w-full h-auto"
                unoptimized
              />
            )}
          </div>

          <p className="mt-5 font-mono text-xs sm:text-sm text-ink-soft break-words">
            {chartData.totalContributions > 0
              ? `${chartData.totalContributions} contributions in the last year`
              : `Contributions in the last year on github.com/${site.githubUsername}`}
          </p>
        </div>
      </div>

      {/* --- Repository unggulan --- */}
      {featured.length > 0 ? (
        <div className="mt-14">
          <h3 className="label">Featured Repositories</h3>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((repository) => (
              <RepoCard key={repository.name} repository={repository} />
            ))}
          </div>
        </div>
      ) : null}

      {/* --- Repository yang baru diperbarui --- */}
      {recent.length > 0 ? (
        <div className="reveal mt-14">
          <h3 className="label">Recently Updated</h3>
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
                    <span className="sr-only">(opens in new tab)</span>
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
        Private repository contributions are excluded. Showing public activity on{" "}
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
