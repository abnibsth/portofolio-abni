/**
 * Navigasi utama (PRD 11).
 *
 * Semua href diawali "/" supaya link tetap benar dari halaman mana pun,
 * termasuk dari /projects/[slug]. Anchor "/#work" berarti: buka homepage,
 * lalu scroll ke section work.
 */
export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "GitHub", href: "/#github" },
  { label: "Contact", href: "/#contact" },
] as const;
