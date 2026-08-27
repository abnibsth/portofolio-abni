import React from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiArrowLeft,
  FiArrowDown,
  FiExternalLink,
  FiGithub,
  FiStar,
  FiMenu,
  FiX,
  FiMail,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

/**
 * UI Icons powered by react-icons (https://react-icons.github.io/).
 */

type IconProps = { className?: string };

const base = "h-4 w-4 shrink-0 inline-block align-middle";

/** ArrowUpRight Icon from react-icons/fi */
export function ArrowUpRight({ className }: IconProps) {
  return <FiArrowUpRight className={cn(base, className)} aria-hidden="true" />;
}

/** ArrowRight Icon from react-icons/fi */
export function ArrowRight({ className }: IconProps) {
  return <FiArrowRight className={cn(base, className)} aria-hidden="true" />;
}

/** ArrowLeft Icon from react-icons/fi */
export function ArrowLeft({ className }: IconProps) {
  return <FiArrowLeft className={cn(base, className)} aria-hidden="true" />;
}

/** ArrowDown Icon from react-icons/fi */
export function ArrowDown({ className }: IconProps) {
  return <FiArrowDown className={cn(base, className)} aria-hidden="true" />;
}

/** ExternalLink Icon from react-icons/fi */
export function ExternalLinkIcon({ className }: IconProps) {
  return <FiExternalLink className={cn(base, className)} aria-hidden="true" />;
}

/** Github Icon from react-icons/fi */
export function GitHubMark({ className }: IconProps) {
  return <FiGithub className={cn(base, className)} aria-hidden="true" />;
}

/** Star Icon from react-icons/fi */
export function Star({ className }: IconProps) {
  return <FiStar className={cn(base, className)} aria-hidden="true" />;
}

/** Fork Icon */
export function Fork({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(base, className)}
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
    </svg>
  );
}

/** Menu Icon from react-icons/fi */
export function Menu({ className }: IconProps) {
  return <FiMenu className={cn(base, className)} aria-hidden="true" />;
}

/** Close Icon from react-icons/fi */
export function Close({ className }: IconProps) {
  return <FiX className={cn(base, className)} aria-hidden="true" />;
}

/** Mail Icon from react-icons/fi */
export function MailIcon({ className }: IconProps) {
  return <FiMail className={cn(base, className)} aria-hidden="true" />;
}

/** Official Blue Verified Checkmark Badge Icon */
export function VerifiedBadge({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label="Verified Profile"
      className={cn("h-7 w-7 text-[#1D9BF0] shrink-0 inline-block align-middle", className)}
    >
      <path
        fill="#1D9BF0"
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.19.46-1.39.12-2.96-.94-4-1.05-1.06-2.62-1.4-4-.94C14.67 2.56 13.43 1.68 12 1.68s-2.67.88-3.19 2.19c-1.39-.46-2.96-.12-4 .94-1.06 1.05-1.4 2.62-.94 4C2.56 9.33 1.68 10.57 1.68 12s.88 2.67 2.19 3.19c-.46 1.39-.12 2.96.94 4 1.05 1.06 2.62 1.4 4 .94 1.05 1.76 2.53 2.19 3.19 2.19s2.67-.88 3.19-2.19c1.39.46 2.96.12 4-.94 1.06-1.05 1.4-2.62.94-4 1.31-.52 2.19-1.76 2.19-3.19z"
      />
      <path
        fill="#FFFFFF"
        d="M10.2 16.25l-3.5-3.5 1.4-1.4 2.1 2.1 5.6-5.6 1.4 1.4-7 7z"
      />
    </svg>
  );
}
