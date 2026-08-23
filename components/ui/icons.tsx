/**
 * Ikon inline sebagai SVG. Tidak memakai icon library supaya nol dependency
 * dan nol JavaScript tambahan (PRD 13.2).
 *
 * Semua ikon di sini murni dekoratif dan diberi aria-hidden — maknanya selalu
 * dibawa oleh teks di sebelahnya, tidak pernah oleh ikonnya (PRD 18).
 */

type IconProps = { className?: string };

const base = "h-4 w-4 shrink-0";

/** Panah diagonal — penanda link keluar (PRD 10.2: indikator link eksternal). */
export function ArrowUpRight({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

/** Panah ke kanan — navigasi internal. */
export function ArrowRight({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.5 8h11" />
      <path d="M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ArrowLeft({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 8h-11" />
      <path d="M7 3.5 2.5 8 7 12.5" />
    </svg>
  );
}

export function ArrowDown({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 2.5v11" />
      <path d="M3.5 9 8 13.5 12.5 9" />
    </svg>
  );
}

export function GitHubMark({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.07-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.15 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A7.995 7.995 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function Star({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 2l1.85 3.9 4.15.58-3.05 2.9.77 4.12L8 11.6l-3.72 1.9.77-4.12L2 6.48l4.15-.58L8 2Z" />
    </svg>
  );
}

export function Fork({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="4" cy="3.5" r="1.6" />
      <circle cx="12" cy="3.5" r="1.6" />
      <circle cx="8" cy="12.5" r="1.6" />
      <path d="M4 5.1v1.3a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 6.4V5.1M8 7.9v3" />
    </svg>
  );
}

export function Menu({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 4.5h12M2 11.5h12" />
    </svg>
  );
}

export function Close({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
    </svg>
  );
}
