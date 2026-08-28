import { cn } from "@/lib/utils";

/**
 * Satu blok bernomor di halaman studi kasus.
 *
 * Layoutnya dua kolom: nomor + judul di kiri, isi di kanan. Pola ini membuat
 * halaman panjang tetap bisa dipindai — pembaca bisa melompati bagian teknis
 * dan langsung menuju bagian yang dia cari.
 */
export function CaseStudyBlock({
  index,
  title,
  className,
  children,
}: {
  index: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `case-${index}`;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("reveal border-rule border-t py-12 sm:py-14", className)}
    >
      <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-12">
        <div className="min-w-0 lg:col-span-4">
          <div className="flex items-baseline gap-4">
            <span
              aria-hidden="true"
              className="text-ink-faint font-mono text-xs tabular-nums"
            >
              {index}
            </span>
            <h2 id={headingId} className="text-2xl sm:text-3xl">
              {title}
            </h2>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

/** Kumpulan paragraf dengan ukuran teks dan jarak baris yang konsisten. */
export function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-ink-soft">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/** Daftar berpoin dengan penanda garis, bukan bullet bulat. */
export function DashList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="text-ink-soft flex gap-4">
          <span aria-hidden="true" className="bg-rule-strong mt-3 h-px w-5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
