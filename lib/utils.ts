/**
 * Helper kecil tanpa dependency. Sengaja tidak memakai clsx/tailwind-merge
 * supaya bundle tetap ramping (PRD 13.2: "Penggunaan library harus dibatasi").
 */

/** Gabungkan className, membuang nilai falsy. */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

const MONTHS_ID = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

/**
 * Format tanggal ISO menjadi "12 Agustus 2025".
 *
 * Sengaja memformat manual, bukan lewat Intl.DateTimeFormat, karena locale data
 * di server build dan di browser bisa berbeda dan memicu hydration mismatch.
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return `${date.getUTCDate()} ${MONTHS_ID[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/**
 * Format tanggal ISO menjadi "Agustus 2025" — dipakai untuk label
 * "Terakhir diperbarui" pada kartu repository, di mana tanggal persisnya
 * tidak penting.
 */
export function formatMonthYear(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return `${MONTHS_ID[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** Ubah angka besar menjadi ringkas: 1200 → "1,2k". */
export function compactNumber(value: number): string {
  if (value < 1000) return String(value);
  return `${(value / 1000).toFixed(1).replace(".", ",").replace(",0", "")}k`;
}
