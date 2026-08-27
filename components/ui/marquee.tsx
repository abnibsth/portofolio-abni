import type { CSSProperties } from "react";
import { TechIcon } from "@/components/ui/tech-icons";

/**
 * Marquee — baris item yang berjalan terus tanpa henti (infinite loop).
 */
export function Marquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {items.map((item) => (
        <span
          key={item}
          className="border-rule bg-surface text-ink-soft inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm whitespace-nowrap"
        >
          <TechIcon name={item} className="h-4 w-4 shrink-0" />
          <span>{item}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee group relative overflow-hidden">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-track--reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>

      {/* Fade di tepi kiri-kanan supaya item muncul/hilang dengan halus */}
      <div
        aria-hidden="true"
        className="from-paper pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent"
      />
      <div
        aria-hidden="true"
        className="from-paper pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent"
      />
    </div>
  );
}
