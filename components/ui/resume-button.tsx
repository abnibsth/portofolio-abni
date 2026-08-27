import { site } from "@/data/site";
import { buttonStyles, type ButtonVariant } from "./button";
import { ArrowUpRight } from "./icons";
import { TrackedLink } from "./tracked-link";

/**
 * Tombol resume (PRD 10.9).
 *
 * Mengembalikan null selama `site.resume.isAvailable` masih false. Ini disengaja:
 * lebih baik tombolnya tidak ada daripada mengarah ke PDF yang belum diunggah —
 * PRD 28 menetapkan "tidak ada broken link" sebagai syarat selesai.
 *
 * PDF dibuka di tab baru (memenuhi "file dapat dibuka di tab baru") dan
 * atribut `download` menyediakan jalur unduh langsung sebagai fallback.
 */
export function ResumeButton({
  variant = "secondary",
  className,
  label = "View Resume",
}: {
  variant?: ButtonVariant;
  className?: string;
  label?: string;
}) {
  if (!site.resume.isAvailable) return null;

  return (
    <TrackedLink
      href={site.resume.path}
      event="download_resume"
      external
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles(variant, className)}
    >
      {label}
      <ArrowUpRight />
    </TrackedLink>
  );
}

/** True bila resume siap ditautkan. Dipakai untuk menyusun teks di sekitarnya. */
export const isResumeAvailable = site.resume.isAvailable;
