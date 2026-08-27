import { TechIcon } from "@/components/ui/tech-icons";
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
  name,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
  className?: string;
  name?: string;
}) {
  let iconName = name;
  if (!iconName) {
    if (typeof children === "string") {
      iconName = children;
    } else if (Array.isArray(children)) {
      const firstStr = children.find((c) => typeof c === "string");
      if (typeof firstStr === "string") {
        iconName = firstStr;
      }
    }
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs transition-colors",
        emphasis
          ? "border-ink bg-ink text-paper border"
          : "border-rule-strong text-ink-soft hover:border-ink hover:text-ink border bg-surface/50",
        className,
      )}
    >
      {iconName ? <TechIcon name={iconName} className="h-3.5 w-3.5 shrink-0 inline-block align-middle" /> : null}
      <span>{children}</span>
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
