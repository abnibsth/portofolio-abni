import { GitHubSection } from "@/components/github/github-section";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";
import { personJsonLd } from "@/lib/metadata";

/**
 * Homepage — single page dengan halaman detail terpisah untuk project
 * (PRD 9: "Versi awal dapat menggunakan format single-page").
 *
 * Urutan section dipilih mengikuti pertanyaan yang muncul di kepala recruiter:
 * siapa ini (Hero) → apa buktinya (Work) → latar belakangnya (About) →
 * teknologinya (Skills) → jam terbangnya (Experience) → masih aktif?
 * (GitHub) → cara menghubungi (Contact).
 */
export default function HomePage() {
  return (
    <>
      {/* Structured data Person (PRD 17). Dirender di server, tidak menambah
          JavaScript apa pun ke browser. */}
      <script
        type="application/ld+json"
        // JSON.stringify atas objek yang kita susun sendiri — tidak ada input
        // dari luar yang masuk ke sini.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <ExperienceSection />

      {/* GitHubSection memanggil data eksternal, tapi TIDAK dibungkus <Suspense>.
          Itu keputusan sadar: `getGitHubData()` memakai `use cache`, jadi hasilnya
          sudah ikut ter-render ke dalam HTML statis saat build — tidak ada
          penantian yang perlu ditutupi.

          Sempat dibungkus Suspense, dan hasilnya justru merugikan: HTML statis
          berisi skeleton DAN konten sekaligus, sehingga `id="github"` muncul dua
          kali (anchor #github mendarat di skeleton) dan pengunjung tanpa
          JavaScript terjebak melihat skeleton. Lihat DOCS.md bagian
          "Loading state" kalau kamu mengubah strategi caching-nya. */}
      <GitHubSection />

      <Contact />
    </>
  );
}
