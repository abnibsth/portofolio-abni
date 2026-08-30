/**
 * Helper kecil tanpa dependency. Sengaja tidak memakai clsx/tailwind-merge
 * supaya bundle tetap ramping (PRD 13.2: "Penggunaan library harus dibatasi").
 */

/** Gabungkan className, membuang nilai falsy. */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Format tanggal ISO menjadi "August 12, 2025".
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return `${MONTHS_EN[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

/**
 * Format tanggal ISO menjadi "August 2025".
 */
export function formatMonthYear(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return `${MONTHS_EN[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** Ubah angka besar menjadi ringkas: 1200 → "1,2k". */
export function compactNumber(value: number): string {
  if (value < 1000) return String(value);
  return `${(value / 1000).toFixed(1).replace(".", ",").replace(",0", "")}k`;
}
