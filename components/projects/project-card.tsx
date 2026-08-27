import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ExternalLinkIcon, GitHubMark } from "@/components/ui/icons";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TagList } from "@/components/ui/tag";
import { TrackedLink } from "@/components/ui/tracked-link";
import type { Project } from "@/types";

/**
 * Kartu project ringkas 2 kolom (PRD 10.2).
 *
 * Desain kartu boks bermargin halus dengan visual cover, status, role,
 * daftar ikon teknologi, serta tombol aksi Visit Site & Case Study.
 */
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const detailHref = `/projects/${project.slug}`;

  return (
    <SpotlightCard className="reveal">
      <div>
        {/* Cover Image Container */}
        <TrackedLink
          href={project.demoUrl || detailHref}
          event="click_project_demo"
          eventProperties={{ project: project.slug }}
          external={!!project.demoUrl}
          tabIndex={-1}
          aria-hidden="true"
          className="bg-surface relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-rule/60 mb-5"
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt || project.title}
            fill
            priority={priority}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </TrackedLink>

        {/* Title & Role */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-ink">
              <Link
                href={detailHref}
                className="hover:underline focus:outline-none"
              >
                {project.title}
              </Link>
            </h3>
            <p className="font-mono text-xs text-ink-faint mt-1">
              {project.role}
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-rule-strong px-2.5 py-0.5 font-mono text-[0.6875rem] text-ink-soft uppercase tracking-wider shrink-0">
            {project.status}
          </span>
        </div>

        {/* Summary */}
        <p className="text-ink-soft mt-3 text-sm line-clamp-2 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Stack Icons */}
        <div className="mt-4">
          <TagList items={project.stack} label={`Teknologi pada ${project.title}`} />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-rule/60 flex items-center justify-between gap-3 text-xs font-mono tracking-wider uppercase">
        <div className="flex items-center gap-3">
          {project.repoUrl ? (
            <TrackedLink
              href={project.repoUrl}
              event="click_github_repository"
              eventProperties={{ project: project.slug }}
              external
              className="text-ink-soft hover:text-ink inline-flex items-center gap-1.5 transition-colors font-medium"
            >
              <GitHubMark className="h-3.5 w-3.5" />
              Repo
            </TrackedLink>
          ) : null}
        </div>

        <div className="flex items-center gap-4">
          {project.demoUrl ? (
            <TrackedLink
              href={project.demoUrl}
              event="click_project_demo"
              eventProperties={{ project: project.slug }}
              external
              className="text-ink hover:underline inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              Visit Site <ExternalLinkIcon className="h-3.5 w-3.5" />
            </TrackedLink>
          ) : null}
          <Link
            href={detailHref}
            className="text-ink-soft hover:text-ink link-underline inline-flex items-center gap-1.5 transition-colors font-medium"
          >
            Case Study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
}
