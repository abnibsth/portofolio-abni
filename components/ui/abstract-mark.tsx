/**
 * Elemen dekoratif abstrak monokrom.
 *
 * Ini pengganti "accent color" pada tema hitam-putih: karakter visual dibangun
 * dari bentuk geometris dan garis, bukan dari warna. Murni SVG inline, jadi nol
 * request tambahan dan nol JavaScript.
 *
 * Sepenuhnya dekoratif, karena itu `aria-hidden` — tidak ada informasi yang
 * hilang bila tidak terlihat (PRD 18: "Tidak bergantung pada warna untuk
 * menyampaikan informasi").
 */
export function AbstractMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      aria-hidden="true"
      className={className}
      role="presentation"
    >
      {/* Garis grid tipis */}
      <g stroke="var(--color-rule)" strokeWidth="1">
        {[0, 40, 80, 120, 160, 200].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="260" />
        ))}
        {[0, 52, 104, 156, 208, 260].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="200" y2={y} />
        ))}
      </g>

      {/* Blok hitam solid — titik berat komposisi */}
      <rect x="40" y="52" width="80" height="104" fill="var(--color-ink)" />

      {/* Setengah lingkaran outline yang memotong blok */}
      <path
        d="M120 156a52 52 0 1 0 0-104"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
      />

      {/* Lingkaran kecil sebagai penyeimbang */}
      <circle cx="160" cy="208" r="18" fill="var(--color-ink)" />
      <circle cx="40" cy="208" r="18" stroke="var(--color-ink)" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Varian garis-garis diagonal untuk mengisi ruang kosong di section besar.
 * Memakai <pattern> supaya ukurannya bisa dibesarkan tanpa menambah node SVG.
 */
export function AbstractHatch({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" role="presentation" className={className}>
      <defs>
        <pattern
          id="abstract-hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="var(--color-rule-strong)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#abstract-hatch)" />
    </svg>
  );
}
