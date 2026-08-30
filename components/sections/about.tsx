"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { StackedPhotoDeck } from "@/components/ui/stacked-photo-deck";
import { about } from "@/data/about";
import { cn } from "@/lib/utils";

export function About() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const EVENTS_PER_PAGE = 4;
  const totalPages = Math.ceil(about.events.length / EVENTS_PER_PAGE);

  const displayedEvents = about.events.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  const paragraphs = [t.about.p1, t.about.p2, t.about.p3];
  const highlights = [
    t.about.highlights.h1,
    t.about.highlights.h2,
    t.about.highlights.h3,
    t.about.highlights.h4,
  ];

  return (
    <>
      <Section
        id="about"
        index="02"
        label={t.about.label}
        title={t.about.heading}
        intro={t.about.intro}
      >
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-x-12">
          <div className="reveal space-y-5 lg:col-span-3">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-ink-soft leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="reveal lg:col-span-2">
            <dl className="divide-rule border-rule divide-y border-t">
              {highlights.map((item) => (
                <div key={item.label} className="py-4 sm:py-5">
                  <dt className="label">{item.label}</dt>
                  <dd className="mt-1.5">
                    <span className="font-sans font-bold block text-xl sm:text-2xl">{item.value}</span>
                    <span className="text-ink-soft mt-1 block text-sm">
                      {item.detail}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-ink-faint mt-6 font-mono text-xs">
              {t.site.location} · {t.site.workPreference}
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="events"
        index="03"
        label={t.about.eventsLabel}
        title={t.about.eventsHeading}
        intro={t.about.eventsIntro}
      >
        <div key={currentPage} className="event-page-transition grid grid-cols-1 sm:grid-cols-2 gap-8">
          {displayedEvents.map((event) => (
            <SpotlightCard key={event.title}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="rounded-full bg-surface px-3 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-wider text-ink border border-rule">
                    {event.category}
                  </span>
                  <span className="text-ink-faint font-mono text-xs">
                    {event.location}
                  </span>
                </div>

                <div className="mb-6">
                  <StackedPhotoDeck
                    images={event.images}
                    alt={event.title}
                    className="aspect-[4/3] w-full"
                  />
                </div>

                <h4 className="font-sans font-bold text-xl text-ink group-hover:text-ink-soft transition-colors leading-snug">
                  {event.title}
                </h4>
              </div>

              <p className="text-ink-soft text-sm mt-3 leading-relaxed">
                {event.caption}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "h-9 w-9 rounded-xl font-mono text-xs font-medium transition-all duration-200 border cursor-pointer",
                  currentPage === page
                    ? "bg-ink text-paper border-ink shadow-md"
                    : "bg-paper text-ink-soft border-rule hover:border-ink hover:text-ink"
                )}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={cn(
                "h-9 px-3.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 border flex items-center gap-1",
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed border-rule bg-paper text-ink-faint"
                  : "bg-paper text-ink-soft border-rule hover:border-ink hover:text-ink cursor-pointer"
              )}
            >
              {t.about.next} <span aria-hidden="true">›</span>
            </button>
          </div>
        ) : null}
      </Section>
    </>
  );
}
