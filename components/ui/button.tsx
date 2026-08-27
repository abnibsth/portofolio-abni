import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Gaya tombol dibagikan sebagai string className.
 *
 * "primary" = blok hitam solid.
 * "inverted" = blok putih solid untuk container berlatar hitam.
 * "inverted-secondary" = outline putih transparan untuk container berlatar hitam.
 */
export type ButtonVariant = "primary" | "secondary" | "quiet" | "inverted" | "inverted-secondary";

const shared =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "h-12 rounded-full bg-ink px-6 text-paper hover:bg-ink-soft active:bg-ink",
  secondary:
    "h-12 rounded-full border border-rule-strong px-6 text-ink hover:border-ink hover:bg-surface",
  quiet: "text-ink hover:text-ink-soft",
  inverted:
    "h-12 rounded-full bg-paper px-6 text-ink font-semibold hover:bg-paper/90 active:bg-paper",
  "inverted-secondary":
    "h-12 rounded-full border border-paper/40 px-6 text-paper hover:border-paper hover:bg-paper/10 active:bg-paper/20",
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
