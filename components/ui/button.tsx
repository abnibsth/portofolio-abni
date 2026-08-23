import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Gaya tombol dibagikan sebagai string className, bukan sebagai komponen
 * pembungkus. Alasannya: tombol di website ini bisa berupa <Link>, <a>, atau
 * <a> yang mengirim analytics — memakai string membuat satu gaya dipakai
 * ketiganya tanpa duplikasi dan tanpa memaksa apa pun jadi Client Component.
 *
 * "primary" = blok hitam solid. Ini pengganti accent color pada tema monokrom:
 * yang membedakan aksi utama adalah inversi warna, bukan hue.
 */
export type ButtonVariant = "primary" | "secondary" | "quiet";

const shared =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "h-12 rounded-full bg-ink px-6 text-paper hover:bg-ink-soft active:bg-ink",
  secondary:
    "h-12 rounded-full border border-rule-strong px-6 text-ink hover:border-ink hover:bg-surface",
  quiet: "text-ink hover:text-ink-soft",
};

export function buttonStyles(variant: ButtonVariant = "primary", className?: string) {
  return cn(shared, variants[variant], className);
}

/** Tombol untuk navigasi internal. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={buttonStyles(variant, className)}>
      {children}
    </Link>
  );
}
