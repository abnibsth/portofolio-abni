import Link from "next/link";
import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { ArrowLeft } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "All Projects",
  description:
    "Complete list of web applications and projects featuring technical case studies, decisions, and production metrics.",
  path: "/projects",
});

/**
 * Halaman daftar seluruh project.
 *
 * Homepage hanya memuat 3–5 project unggulan; halaman ini menampung semuanya
 * sehingga daftar di homepage tetap bisa dijaga tetap pendek.
 */
export default function ProjectsPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <Link
          href="/"
          className="link-underline text-ink-soft hover:text-ink mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <header className="max-w-3xl">
          <span className="label">Project Archive</span>
          <h1 className="mt-5 text-[clamp(2.5rem,7vw,5rem)] leading-[1.02]">
            All Projects
          </h1>
          <p className="text-ink-soft mt-6 text-lg">
            {projects.length} projects, ordered chronologically. Click any project to read the detailed technical case study.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
