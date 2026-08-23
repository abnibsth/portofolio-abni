import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { experiences } from "@/data/experience";

/**
 * Experience (PRD 10.6).
 *
 * Judulnya "Pengalaman & Pembelajaran", salah satu alternatif yang disarankan
 * PRD, karena judul itu tetap jujur ketika pengalaman kerja formal masih
 * terbatas — dan tetap memberi ruang untuk bootcamp, organisasi, serta proyek
 * mandiri tanpa terlihat seperti mengisi kekosongan.
 *
 * Setiap entri diurutkan dari yang terbaru dan menonjolkan pencapaian di atas
 * daftar tanggung jawab.
 */
export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="04"
      label="Pengalaman"
      title="Pengalaman & pembelajaran"
      intro="Diurutkan dari yang terbaru. Yang saya tulis adalah hasilnya, bukan daftar tugas harian."
    >
      <ol className="border-rule border-t">
        {experiences.map((item, index) => (
          <li
            key={`${item.organization}-${item.period}`}
            className="reveal border-rule grid gap-x-8 gap-y-4 border-b py-8 sm:grid-cols-[9rem_1fr]"
          >
            {/* Kolom periode — bertindak sebagai timeline tanpa perlu garis
                dekoratif tambahan. */}
            <div className="sm:pt-1">
              <p className="text-ink-soft font-mono text-xs tabular-nums">
                {item.period}
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="text-ink-faint font-mono text-xs tabular-nums"
                >
                  {String(experiences.length - index).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl sm:text-[1.75rem]">{item.role}</h3>
              </div>

              <p className="text-ink-soft mt-1 text-sm">
                {item.organization} · {item.location}
              </p>

              <p className="text-ink-soft mt-4">{item.summary}</p>

              <ul className="mt-4 space-y-2">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="text-ink-soft flex gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="bg-rule-strong mt-2.5 h-px w-4 shrink-0"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <TagList
                items={item.stack}
                className="mt-5"
                label={`Teknologi di ${item.organization}`}
              />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
