"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="group relative inline-flex h-9 items-center gap-1.5 rounded-full border border-rule-strong/40 bg-surface px-3 font-mono text-xs font-semibold text-ink transition-all hover:border-ink hover:bg-paper active:scale-95 cursor-pointer"
      title={`Switch to ${lang === "en" ? "Bahasa Indonesia" : "English"}`}
      aria-label={`Switch language. Current language is ${lang.toUpperCase()}`}
    >
      <svg
        className="h-3.5 w-3.5 text-ink-soft group-hover:text-ink transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z"
        />
      </svg>
      <span className="flex items-center gap-1">
        <span className={lang === "en" ? "text-ink font-bold" : "text-ink-faint font-normal"}>
          EN
        </span>
        <span className="text-ink-faint font-normal">/</span>
        <span className={lang === "id" ? "text-ink font-bold" : "text-ink-faint font-normal"}>
          ID
        </span>
      </span>
    </button>
  );
}
