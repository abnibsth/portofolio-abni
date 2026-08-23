import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  CaseStudyBlock,
  DashList,
  Paragraphs,
} from "@/components/projects/case-study-block";
import { ProjectViewTracker } from "@/components/projects/project-view-tracker";
import { Container } from "@/components/ui/container";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHubMark } from "@/components/ui/icons";
import { TagList } from "@/components/ui/tag";
import { TrackedLink } from "@/components/ui/tracked-link";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata, projectJsonLd } from "@/lib/metadata";

/**
 * Semua slug dibuat saat build, jadi setiap halaman project menjadi statis dan
 * tidak pernah memanggil apa pun saat request (PRD 19).
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return buildMetadata({ title: "Project tidak ditemukan" });

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    ogImage: project.cover.src,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Slug yang tidak dikenal berakhir di app/not-found.tsx, bukan di halaman
  // kosong atau error runtime.
  if (!project) notFound();

  const { next } = getAdjacentProjects(project.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectJsonLd({
              title: project.title,
              description: project.summary,
              path: `/projects/${project.slug}`,
              year: project.year,
              stack: project.stack,
            }),
          ),
        }}
      />

      <ProjectViewTracker slug={project.slug} />

      <article className="py-12 sm:py-16">
        <Container>
          <Link
            href="/projects"
            className="link-underline text-ink-soft hover:text-ink inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Semua project
          </Link>

          {/* ---------- Header ---------- */}
          <header className="mt-10 grid gap-y-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-8">
              <span className="label">
                {project.type} · {project.year}
              </span>
              <h1 className="mt-5 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02]">
                {project.title}
              </h1>
              <p className="text-ink-soft mt-6 max-w-2xl text-lg sm:text-xl">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.demoUrl ? (
                  <TrackedLink
                    href={project.demoUrl}
                    event="click_project_demo"
                    eventProperties={{ project: project.slug }}
                    external
                    className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
                  >
                    Lihat demo langsung
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
            </div>

            {/* Project Overview — semua fakta ringkas dikumpulkan di satu tempat
                supaya hiring manager tidak perlu memindai seluruh artikel. */}
            <dl className="divide-rule border-rule divide-y border-t lg:col-span-4 lg:border-t-0">
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                <dt className="label">Peran</dt>
                <dd className="text-ink-soft text-sm">{project.role}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                <dt className="label">Waktu</dt>
                <dd className="text-ink-soft text-sm">{project.timeline}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                <dt className="label">Status</dt>
                <dd className="text-ink-soft text-sm">{project.status}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                <dt className="label">Stack</dt>
                <dd>
                  <TagList items={project.stack} label="Technology stack" />
                </dd>
              </div>
            </dl>
          </header>

          {/* ---------- Cover ---------- */}
          <div className="bg-surface mt-14 overflow-hidden">
            <div className="relative aspect-[8/5] w-full">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ---------- Studi kasus ----------
              Urutan sengaja menaruh Hasil sebelum Keputusan Teknis dan Tantangan.
              PRD 10.3 meminta "informasi penting muncul sebelum bagian teknis
              yang panjang", dan bagi recruiter non-teknis hasil jauh lebih
              berarti daripada alasan pemilihan framework. */}
          <div className="mt-16">
            <CaseStudyBlock index="01" title="Konteks">
              <Paragraphs items={project.context} />
            </CaseStudyBlock>

            <CaseStudyBlock index="02" title="Masalah">
              <Paragraphs items={project.problem} />
            </CaseStudyBlock>

            <CaseStudyBlock index="03" title="Solusi">
              <Paragraphs items={project.solution} />
            </CaseStudyBlock>

            <CaseStudyBlock index="04" title="Kontribusi saya">
              <Paragraphs items={project.contribution} />
            </CaseStudyBlock>

            {project.results.length > 0 ? (
              <CaseStudyBlock index="05" title="Hasil">
                <DashList items={project.results} />
              </CaseStudyBlock>
            ) : null}

            {project.technicalDecisions.length > 0 ? (
              <CaseStudyBlock index="06" title="Keputusan teknis">
                <div className="space-y-9">
                  {project.technicalDecisions.map((decision) => (
                    <div key={decision.heading}>
                      <h3 className="font-mono text-sm">{decision.heading}</h3>
                      <div className="mt-3">
                        <Paragraphs items={decision.body} />
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            ) : null}

            {project.challenges.length > 0 ? (
              <CaseStudyBlock index="07" title="Tantangan">
                <div className="space-y-9">
                  {project.challenges.map((challenge) => (
                    <div key={challenge.heading}>
                      <h3 className="font-mono text-sm">{challenge.heading}</h3>
                      <div className="mt-3">
                        <Paragraphs items={challenge.body} />
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            ) : null}

            {project.gallery.length > 0 ? (
              <CaseStudyBlock index="08" title="Tampilan">
                <div className="space-y-10">
                  {project.gallery.map((image) => (
                    <figure key={image.src}>
                      <div className="bg-surface overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(min-width: 1024px) 55vw, 100vw"
                          className="h-auto w-full"
                        />
                      </div>
                      {image.caption ? (
                        <figcaption className="text-ink-faint mt-3 font-mono text-xs">
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </CaseStudyBlock>
            ) : null}
          </div>
        </Container>
      </article>

      {/* ---------- Navigasi project berikutnya ---------- */}
      {next && next.slug !== project.slug ? (
        <nav
          aria-label="Project berikutnya"
          className="border-rule bg-ink text-paper border-t"
        >
          <Container>
            <Link href={`/projects/${next.slug}`} className="group block py-16">
              <span className="text-paper/60 font-mono text-[0.6875rem] tracking-[0.16em] uppercase">
                Project berikutnya
              </span>
              <span className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl">
                  {next.title}
                </span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
              <span className="text-paper/70 mt-4 block max-w-xl">{next.summary}</span>
            </Link>
          </Container>
        </nav>
      ) : null}
    </>
  );
}
