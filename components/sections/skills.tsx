"use client";

import { useLanguage } from "@/components/language-provider";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { skillGroups } from "@/data/skills";

export function Skills() {
  const { t } = useLanguage();

  const getGroupNote = (title: string, defaultNote: string) => {
    const key = title.toLowerCase();
    if (key.includes("frontend")) return t.skills.groups.frontend;
    if (key.includes("backend")) return t.skills.groups.backend;
    if (key.includes("database")) return t.skills.groups.database;
    if (key.includes("mobile")) return t.skills.groups.mobile;
    if (key.includes("tools")) return t.skills.groups.tools;
    return defaultNote;
  };

  return (
    <Section
      id="skills"
      index="04"
      label={t.skills.label}
      title={t.skills.heading}
      intro={t.skills.intro}
    >
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
            <p className="text-ink-soft mt-2 text-sm">
              {getGroupNote(group.title, group.note)}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <Tag emphasis={skill.core}>
                    {skill.name}
                    {skill.core ? (
                      <span className="sr-only"> (core skill)</span>
                    ) : null}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="border-rule text-ink-faint mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-6 font-mono text-xs">
        <Tag emphasis>{t.skills.example}</Tag>
        <span>{t.skills.legend}</span>
      </p>
    </Section>
  );
}
