/**
 * Navigasi utama (PRD 11).
 *
 * Semua href diawali "/" supaya link tetap benar dari halaman mana pun,
 * termasuk dari /projects/[slug]. Anchor "/#work" berarti: buka homepage,
 * lalu scroll ke section work.
 */
export const navItems = [
  { label: "Karya", href: "/#work" },
  { label: "Tentang", href: "/#about" },
  { label: "Keahlian", href: "/#skills" },
  { label: "Pengalaman", href: "/#experience" },
  { label: "GitHub", href: "/#github" },
  { label: "Kontak", href: "/#contact" },
] as const;
