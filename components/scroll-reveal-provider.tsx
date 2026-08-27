"use client";

import { useEffect } from "react";

/**
 * ScrollRevealProvider — Sistem Staggered Scroll Reveal (Fade-up Berjenjang).
 *
 * Mengamati semua elemen dengan kelas `.reveal` menggunakan IntersectionObserver,
 * lalu memberikan kelas `.is-visible` dan indeks stagger otomatis (`--stagger-index`)
 * sehingga kartu & elemen pada grid akan muncul berurutan secara berjenjang saat di-scroll.
 */
export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Inisialisasi indeks stagger per parent container
    const setupStaggerIndexes = () => {
      const parentContainers = document.querySelectorAll(".grid, .flex, dl, ul, section");
      parentContainers.forEach((parent) => {
        const reveals = parent.querySelectorAll(":scope > .reveal, :scope > * > .reveal");
        reveals.forEach((el, index) => {
          (el as HTMLElement).style.setProperty("--stagger-index", index.toString());
        });
      });

      // Berikan fallback index 0 untuk reveal mandiri
      document.querySelectorAll(".reveal").forEach((el, index) => {
        if (!(el as HTMLElement).style.getPropertyValue("--stagger-index")) {
          (el as HTMLElement).style.setProperty("--stagger-index", "0");
        }
      });
    };

    setupStaggerIndexes();

    // 2. Setup IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Unobserve jika sudah muncul agar performa tetap ringan
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Cleanup saat unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
}
