import React from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiJquery,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiFlutter,
  SiDart,
  SiAndroidstudio,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNpm,
  SiLaragon,
  SiPrettier,
  SiNodemon,
  SiFfmpeg,
  SiNetlify,
  SiCloudflare,
  SiVercel,
  SiCpanel,
} from "react-icons/si";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const baseClass = "h-4 w-4 shrink-0 inline-block align-middle";

/** Safe icon renderer preventing any runtime error if an icon export is undefined */
function renderIcon(
  Comp: React.ComponentType<IconProps> | undefined,
  c: string,
  colorClass?: string,
  FallbackComp?: React.ComponentType<IconProps>
) {
  const finalClass = cn(c, colorClass);
  if (Comp) {
    return <Comp className={finalClass} />;
  }
  if (FallbackComp) {
    return <FallbackComp className={finalClass} />;
  }
  return <DefaultCodeIcon className={finalClass} />;
}

/**
 * TechIcon — maps a skill name string to the correct icon component.
 * All icons use their official brand colors safely.
 */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const lower = name.toLowerCase().trim();
  const c = className || baseClass;

  // Frontend
  if (lower === "html" || lower === "html5") return renderIcon(SiHtml5, c, "text-[#E34F26]");
  if (lower === "css" || lower === "css3") return renderIcon(SiCss, c, "text-[#1572B6]");
  if (lower.includes("javascript") || lower === "js") return renderIcon(SiJavascript, c, "text-[#F7DF1E]");
  if (lower.includes("typescript") || lower === "ts") return renderIcon(SiTypescript, c, "text-[#3178C6]");
  if (lower === "react" || lower === "react.js") return renderIcon(SiReact, c, "text-[#61DAFB]");
  if (lower.includes("next")) return renderIcon(SiNextdotjs, c);
  if (lower === "vite") return renderIcon(SiVite, c, "text-[#646CFF]");
  if (lower.includes("tailwind")) return renderIcon(SiTailwindcss, c, "text-[#06B6D4]");
  if (lower.includes("jquery")) return renderIcon(SiJquery, c, "text-[#0769AD]");
  if (lower.includes("bootstrap")) return renderIcon(SiBootstrap, c, "text-[#7952B3]");

  // Backend
  if (lower === "php") return renderIcon(SiPhp, c, "text-[#777BB4]");
  if (lower.includes("laravel")) return renderIcon(SiLaravel, c, "text-[#FF2D20]");
  if (lower.includes("codeigniter") || lower === "ci 3" || lower === "ci") return renderIcon(SiCodeigniter, c, "text-[#EF4223]");
  if (lower.includes("node")) return renderIcon(SiNodedotjs, c, "text-[#339933]");
  if (lower.includes("express")) return renderIcon(SiExpress, c);
  if (lower.includes("rest api") || lower.includes("api")) return <RestApiIcon className={cn(c, "text-[#00D8FF]")} />;

  // Database & Cloud
  if (lower.includes("mysql")) return renderIcon(SiMysql, c, "text-[#4479A1]");
  if (lower.includes("postgres")) return renderIcon(SiPostgresql, c, "text-[#4169E1]");
  if (lower.includes("sqlite")) return renderIcon(SiSqlite, c, "text-[#003B57]");
  if (lower.includes("firebase")) return renderIcon(SiFirebase, c, "text-[#FFCA28]");
  if (lower.includes("supabase")) return renderIcon(SiSupabase, c, "text-[#3FCF8E]");
  if (lower.includes("migration") || lower.includes("seeding")) return <MigrationIcon className={cn(c, "text-[#10B981]")} />;
  if (lower.includes("query") || lower.includes("optimization")) return <OptimizationIcon className={cn(c, "text-[#F59E0B]")} />;

  // Mobile
  if (lower.includes("flutter")) return renderIcon(SiFlutter, c, "text-[#02569B]");
  if (lower.includes("dart")) return renderIcon(SiDart, c, "text-[#0175C2]");
  if (lower.includes("android")) return renderIcon(SiAndroidstudio, c, "text-[#3DDC84]");

  // Tools & Ecosystem
  if (lower === "github") return renderIcon(SiGithub, c);
  if (lower === "git") return renderIcon(SiGit, c, "text-[#F05032]");
  if (lower.includes("postman")) return renderIcon(SiPostman, c, "text-[#FF6C37]");
  if (lower.includes("figma")) return renderIcon(SiFigma, c, "text-[#F24E1E]");
  if (lower.includes("canva")) return <CanvaIcon className={cn(c, "text-[#00C4CC]")} />;
  if (lower.includes("vs code") || lower.includes("vscode") || lower.includes("code")) return <VsCodeIcon className={cn(c, "text-[#007ACC]")} />;
  if (lower.includes("npm")) return renderIcon(SiNpm, c, "text-[#CB3837]");
  if (lower.includes("laragon")) return renderIcon(SiLaragon, c, "text-[#007ACC]");
  if (lower.includes("powershell")) return <PowershellIcon className={cn(c, "text-[#5391FE]")} />;
  if (lower.includes("prettier")) return renderIcon(SiPrettier, c, "text-[#F7B93E]");
  if (lower.includes("nodemon")) return renderIcon(SiNodemon, c, "text-[#76D04B]");
  if (lower.includes("ffmpeg")) return renderIcon(SiFfmpeg, c, "text-[#007808]");
  if (lower.includes("netlify")) return renderIcon(SiNetlify, c, "text-[#00C7B7]");
  if (lower.includes("cloudflare")) return renderIcon(SiCloudflare, c, "text-[#F38020]");
  if (lower.includes("vercel")) return renderIcon(SiVercel, c);
  if (lower.includes("cpanel") || lower.includes("hosting")) return renderIcon(SiCpanel, c, "text-[#FF6C2C]");
  if (lower.includes("mentor") || lower.includes("teach")) return <MentoringIcon className={cn(c, "text-[#8B5CF6]")} />;
  if (lower.includes("problem") || lower.includes("solving")) return <ProblemSolvingIcon className={cn(c, "text-[#EC4899]")} />;

  return <DefaultCodeIcon className={cn(c)} />;
}

// Fallback & Standalone SVG Icons
function CanvaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.8 17.5c-3.1 0-4.7-2.1-4.7-4.7 0-3.3 2.5-5.8 5.7-5.8 2.2 0 3.8 1.2 3.8 2.9 0 1.6-1.1 2.6-2.5 2.6-.9 0-1.4-.4-1.4-1.1 0-.6.4-1.2.4-1.7 0-.5-.3-.8-.8-.8-.7 0-1.4.8-1.4 1.8 0 1.2.8 2 2.1 2 1.3 0 2.5-.7 3.1-1.7l1.1.7c-.8 1.4-2.4 2.3-4.3 2.3z" />
    </svg>
  );
}

function PowershellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.5 2h19a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5zm2.5 4.5v2.5l5.5 3.5-5.5 3.5v2.5l9.5-6-9.5-6zm7.5 11v2h6v-2h-6z" />
    </svg>
  );
}

function VsCodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261a1 1 0 0 0-.033 1.449l4.52 4.316-4.52 4.315a1 1 0 0 0 .033 1.45l1.322 1.201a.998.998 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 22.38V4.223a1.5 1.5 0 0 0-.85-1.636zM18.5 16.541l-6.147-4.54L18.5 7.46v9.081z" />
    </svg>
  );
}

function RestApiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

function MigrationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.34-6-2v-2.13c1.5.83 3.65 1.33 6 1.33s4.5-.5 6-1.33V17c0 .66-2.13 2-6 2z" />
    </svg>
  );
}

function OptimizationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function MentoringIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

function ProblemSolvingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
}

function DefaultCodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 4L1 8l4 4M11 4l4 4-4 4" />
    </svg>
  );
}
