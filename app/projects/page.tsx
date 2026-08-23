import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Semua Project",
  description:
    "Kumpulan project web yang saya kerjakan, lengkap dengan studi kasus berisi masalah, keputusan teknis, dan hasilnya.",
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
        <header className="max-w-3xl">
          <span className="label">Arsip Karya</span>
          <h1 className="mt-5 text-[clamp(2.5rem,7vw,5rem)] leading-[1.02]">
            Semua project
          </h1>
          <p className="text-ink-soft mt-6 text-lg">
            {projects.length} project, diurutkan dari yang terbaru. Setiap judul
            mengarah ke studi kasus yang menjelaskan alasan di balik keputusan
            teknisnya.
          </p>
        </header>

        <div className="mt-16 space-y-8">
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
