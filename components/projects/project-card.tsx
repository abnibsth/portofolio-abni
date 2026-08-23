import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, GitHubMark } from "@/components/ui/icons";
import { TagList } from "@/components/ui/tag";
import { TrackedLink } from "@/components/ui/tracked-link";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

/**
 * Kartu project (PRD 10.2).
 *
 * Pola aksesibilitas yang dipakai di sini: kartu TIDAK dibungkus satu <a> besar.
 * Yang menjadi link adalah judulnya, lalu pseudo-element ::after miliknya
 * dibentangkan menutupi seluruh kartu — jadi seluruh area tetap bisa diklik
 * mouse, sementara pengguna keyboard hanya menemukan satu tab stop untuk kartu
 * ini, bukan satu untuk setiap elemen di dalamnya.
 *
 * Link demo dan repository diangkat dengan z-index supaya tetap bisa diklik
 * sendiri, dan keduanya berada setelah judul dalam urutan DOM sehingga urutan
 * tab-nya masuk akal.
 *
 * `priority` hanya untuk kartu pertama: gambar itu berada di paruh atas halaman
 * dan menjadi kandidat Largest Contentful Paint (PRD 19).
 */
export function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const detailHref = `/projects/${project.slug}`;

  return (
    <article className="reveal group border-rule relative isolate border-t pt-8">
      <div className="flex items-baseline justify-between gap-4">
        <span
          aria-hidden="true"
          className="text-ink-faint font-mono text-xs tabular-nums"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-ink-faint font-mono text-[0.6875rem] tracking-[0.12em] uppercase">
          {project.type} · {project.year}
        </span>
      </div>

      {/* Visual dominan, sesuai arah editorial PRD 8.4. Rasio dipatok lewat
          aspect-ratio + fill supaya tidak ada pergeseran layout saat memuat. */}
      <Link
        href={detailHref}
        tabIndex={-1}
        aria-hidden="true"
        className="bg-surface mt-6 block overflow-hidden"
      >
        <div className="relative aspect-[8/5] w-full">
          <Image
            src={project.cover.src}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="mt-7 grid gap-x-10 gap-y-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="text-3xl sm:text-4xl">
            <Link
              href={detailHref}
              className={cn(
                "link-underline",
                // Bentangkan area klik ke seluruh kartu.
                "after:absolute after:inset-0 after:z-0 after:content-['']",
              )}
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-ink-soft mt-3 max-w-xl">{project.summary}</p>

          <TagList
            items={project.stack}
            className="mt-5"
            label={`Teknologi pada ${project.title}`}
          />
        </div>

        <dl className="space-y-4 lg:col-span-1">
          <div>
            <dt className="label">Peran</dt>
            <dd className="text-ink-soft mt-1.5 text-sm">{project.role}</dd>
          </div>
          <div>
            <dt className="label">Status</dt>
            <dd className="text-ink-soft mt-1.5 text-sm">{project.status}</dd>
          </div>
        </dl>
      </div>

      {/* Link sekunder. z-10 mengangkatnya di atas area klik kartu. */}
      <div className="relative z-10 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 pb-10">
        <Link
          href={detailHref}
          className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
        >
          Baca studi kasus
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {project.demoUrl ? (
          <TrackedLink
            href={project.demoUrl}
            event="click_project_demo"
            eventProperties={{ project: project.slug }}
            external
            className="link-underline text-ink-soft hover:text-ink inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            Demo langsung
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span className="sr-only">(terbuka di tab baru)</span>
          </TrackedLink>
        ) : null}

        {project.repoUrl ? (
          <TrackedLink
            href={project.repoUrl}
            event="click_github_repository"
            eventProperties={{ project: project.slug }}
            external
            className="link-underline text-ink-soft hover:text-ink inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <GitHubMark className="h-3.5 w-3.5" />
            Repository
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span className="sr-only">(terbuka di tab baru)</span>
          </TrackedLink>
        ) : null}
      </div>
    </article>
  );
}
