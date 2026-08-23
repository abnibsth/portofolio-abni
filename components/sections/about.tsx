import { Section } from "@/components/ui/section";
import { about } from "@/data/about";
import { site } from "@/data/site";

/**
 * About (PRD 10.4).
 *
 * Kolom kiri berisi judul + intro (dari komponen Section), kolom kanan dibagi
 * dua: paragraf naratif dan daftar highlight yang bisa dipindai. Recruiter yang
 * hanya punya 30 detik membaca highlight-nya; hiring manager membaca paragrafnya.
 */
export function About() {
  return (
    <Section
      id="about"
      index="02"
      label="Tentang"
      title="Sedikit konteks soal saya"
      intro={about.intro}
    >
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-x-12">
        <div className="reveal space-y-5 lg:col-span-3">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="reveal lg:col-span-2">
          <dl className="divide-rule border-rule divide-y border-t">
            {about.highlights.map((item) => (
              <div key={item.label} className="py-5">
                <dt className="label">{item.label}</dt>
                <dd className="mt-2">
                  <span className="font-display block text-2xl">{item.value}</span>
                  <span className="text-ink-soft mt-1 block text-sm">
                    {item.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-ink-faint mt-6 font-mono text-xs">
            {site.location} · {site.workPreference}
          </p>
        </div>
      </div>
    </Section>
  );
}
