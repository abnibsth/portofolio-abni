import type { CSSProperties } from "react";

/**
 * Marquee — baris item yang berjalan terus tanpa henti (infinite loop).
 *
 * Cara kerja: konten di-render DUA KALI di dalam satu track, lalu track
 * digeser -50% lewat CSS animation (lihat globals.css → @keyframes marquee).
 * Karena lebar track pas dua kali konten, saat animasi selesai posisinya
 * identik dengan awal — loop-nya mulus, tanpa lompatan.
 *
 * Set kedua diberi aria-hidden supaya screen reader tidak membacanya dua kali.
 */
export function Marquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: string[];
  /** true = baris jalan ke arah sebaliknya (kanan→kiri jadi kiri→kanan). */
  reverse?: boolean;
  /** Durasi satu putaran penuh, dalam detik. Makin besar makin pelan. */
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
          className="border-rule bg-surface text-ink-soft inline-flex items-center rounded-full border px-4 py-2 font-mono text-sm whitespace-nowrap"
        >
          {item}
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
