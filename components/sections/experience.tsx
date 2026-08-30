"use client";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      index="05"
      label={t.experience.label}
      title={t.experience.heading}
      intro={t.experience.intro}
    >
      <ol className="border-rule border-t">
        {experiences.map((item, index) => {
          const transItem = t.experience.items[index] || item;
          return (
            <li
              key={`${item.organization}-${index}`}
              className="reveal border-rule grid gap-x-8 gap-y-4 border-b py-8 sm:grid-cols-[9rem_1fr]"
            >
              <div className="sm:pt-1">
                <p className="text-ink-soft font-mono text-xs tabular-nums">
                  {transItem.period}
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
                  <h3 className="font-display text-2xl sm:text-[1.75rem]">{transItem.role}</h3>
                </div>

                <p className="text-ink-soft mt-1 text-sm">
                  {item.organization} · {item.location}
                </p>

                <p className="text-ink-soft mt-4">{transItem.summary}</p>

                <ul className="mt-4 space-y-2">
                  {transItem.achievements.map((achievement) => (
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
                  label={`Technologies at ${item.organization}`}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
