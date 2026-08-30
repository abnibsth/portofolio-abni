"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

/**
 * ThemeToggle — Tombol saklar mode Terang/Gelap dengan animasi "Circular Reveal"
 * berbasis View Transitions API (document.startViewTransition).
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark";

    // 1. Fallback jika browser tidak mendukung View Transitions API
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    // 2. Hitung titik pusat geometris persis dari tombol ThemeToggle (Sun/Moon icon center)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 3. Hitung radius lingkaran maksimal untuk menutupi seluruh layar
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 4. Eksekusi View Transition dengan circular clip-path animation (Material Ripple Effect)
    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule-strong/40 bg-surface/60 text-ink transition-colors hover:bg-surface",
          className
        )}
        aria-label="Toggle Theme"
      >
        <span className="h-4 w-4 rounded-full bg-ink/20" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule-strong/40 bg-surface/60 text-ink transition-all hover:border-ink hover:bg-surface active:scale-95",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Sun Icon (Mode Terang) */}
      <svg
        className={cn(
          "h-4 w-4 shrink-0 transition-all duration-300",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* Moon Icon (Mode Gelap) */}
      <svg
        className={cn(
          "absolute h-4 w-4 shrink-0 transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100 text-yellow-400" : "-rotate-90 scale-0 opacity-0"
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
