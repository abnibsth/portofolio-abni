import { cn } from "@/lib/utils";

/**
 * Pil kecil untuk nama teknologi.
 *
 * `emphasis` membedakan skill inti dari skill pendukung lewat bobot huruf dan
 * ketebalan garis — bukan lewat warna, dan bukan lewat angka persentase
 * (PRD 10.5).
 */
export function Tag({
  children,
  emphasis = false,
  className,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs",
        emphasis
          ? "border-ink bg-ink text-paper border"
          : "border-rule-strong text-ink-soft border",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Daftar tag horizontal yang membungkus ke baris berikutnya. */
export function TagList({
  items,
  className,
  emphasis = false,
  label,
}: {
  items: string[];
  className?: string;
  emphasis?: boolean;
  /** Label untuk screen reader, contoh: "Teknologi yang dipakai". */
  label?: string;
}) {
  if (items.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag emphasis={emphasis}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
