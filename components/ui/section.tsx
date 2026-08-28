import { Container } from "./container";
import { cn } from "@/lib/utils";

/**
 * Kerangka section homepage.
 *
 * Layout editorial asimetris: judul menempati kolom kiri yang sempit, isi
 * menempati kolom kanan yang lebar (PRD 8.4). Di mobile otomatis menjadi satu
 * kolom.
 *
 * `index` dipakai untuk nomor urut besar sebagai elemen dekoratif — ini bagian
 * dari arah visual "abstrak monokrom", bukan informasi, jadi disembunyikan dari
 * screen reader.
 */
export function Section({
  id,
  label,
  title,
  index,
  intro,
  className,
  children,
}: {
  id: string;
  label: string;
  title: string;
  index?: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-rule border-t py-20 sm:py-28", className)}
    >
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <header className="reveal min-w-0 lg:col-span-4">
            <div className="flex items-baseline gap-4">
              {index ? (
                <span
                  aria-hidden="true"
                  className="text-ink-faint font-mono text-xs tabular-nums"
                >
                  {index}
                </span>
              ) : null}
              <span className="label">{label}</span>
            </div>

            <h2
              id={headingId}
              className="mt-5 text-4xl sm:text-5xl lg:text-[3.25rem] lg:leading-[1.02]"
            >
              {title}
            </h2>

            {intro ? (
              <p className="text-ink-soft mt-5 max-w-sm lg:pr-6">{intro}</p>
            ) : null}
          </header>

          <div className="min-w-0 lg:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
