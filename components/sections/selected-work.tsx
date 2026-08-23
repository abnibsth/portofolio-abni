import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "@/components/ui/icons";
import { featuredProjects, projects } from "@/data/projects";

/**
 * Selected Work di homepage (PRD 10.2).
 *
 * Hanya menampilkan project yang ditandai `featured: true` — batasnya 3 sampai 5.
 * Sisanya dipindahkan ke /projects supaya halaman utama tetap fokus.
 *
 * Section ini memakai lebar penuh, bukan grid dua kolom seperti section lain,
 * karena visual project harus dominan.
 */
export function SelectedWork() {
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
              <span className="label">Karya Pilihan</span>
            </div>
            <h2
              id="work-heading"
              className="mt-5 max-w-2xl text-4xl sm:text-5xl lg:text-6xl"
            >
              Beberapa hal yang saya bangun
            </h2>
          </div>

          <p className="text-ink-soft max-w-sm">
            Setiap project punya halaman studi kasus yang menjelaskan masalahnya,
            keputusan teknisnya, dan bagian mana yang saya kerjakan sendiri.
          </p>
        </div>

        <div className="mt-16 space-y-8">
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
              Lihat semua project ({projects.length})
              <ArrowRight />
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
