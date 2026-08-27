import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { skillGroups } from "@/data/skills";

/**
 * Skills (PRD 10.5).
 *
 * Tanpa progress bar dan tanpa persentase — keduanya angka subjektif yang tidak
 * bisa diverifikasi dan justru menurunkan kredibilitas.
 *
 * Perbedaan skill inti dan skill pendukung disampaikan dua kali: lewat gaya
 * visual (pil hitam solid) DAN lewat keterangan tekstual di legenda bawah,
 * supaya tetap terbaca oleh screen reader dan tidak bergantung pada warna.
 */
export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Keahlian"
      title="Yang saya pakai untuk membangun"
      intro="Hanya teknologi yang benar-benar pernah saya pakai di proyek nyata, bukan yang baru saya tonton di tutorial."
    >
      {/* Ticker tech stack: dua baris jalan berlawanan arah, seperti kereta.
          Murni dekoratif — detail lengkapnya tetap di grid bawah. */}
      <div className="border-rule mb-12 space-y-3 border-y py-6">
        <Marquee
          items={skillGroups.flatMap((g) =>
            g.items.filter((s) => s.core).map((s) => s.name),
          )}
          duration={36}
        />
        <Marquee
          items={skillGroups.flatMap((g) =>
            g.items.filter((s) => !s.core).map((s) => s.name),
          )}
          reverse
          duration={44}
        />
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="reveal border-rule border-t pt-6">
            <h3 className="font-display text-2xl">{group.title}</h3>
            <p className="text-ink-soft mt-2 text-sm">{group.note}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <Tag emphasis={skill.core}>
                    {skill.name}
                    {skill.core ? (
                      <span className="sr-only"> (keahlian inti)</span>
                    ) : null}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="border-rule text-ink-faint mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-6 font-mono text-xs">
        <Tag emphasis>Contoh</Tag>
        <span>= keahlian inti, siap dibahas mendalam saat interview.</span>
      </p>
    </Section>
  );
}
