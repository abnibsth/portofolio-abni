"use client";

import { useLanguage } from "@/components/language-provider";
import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "@/components/ui/icons";
import { featuredProjects, projects } from "@/data/projects";

export function SelectedWork() {
  const { t } = useLanguage();
  const hiddenCount = projects.length - featuredProjects.length;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-rule border-t py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="reveal">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="text-ink-faint font-mono text-xs">
                01
              </span>
              <span className="label">{t.selectedWork.label}</span>
            </div>
            <h2
              id="work-heading"
              className="mt-5 max-w-2xl text-4xl sm:text-5xl lg:text-6xl"
            >
              {t.selectedWork.heading}
            </h2>
          </div>

          <p className="text-ink-soft max-w-sm">
            {t.selectedWork.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </div>

        {hiddenCount > 0 ? (
          <div className="border-rule mt-6 border-t pt-10">
            <ButtonLink href="/projects" variant="secondary">
              {t.selectedWork.viewAll} ({projects.length})
              <ArrowRight />
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
