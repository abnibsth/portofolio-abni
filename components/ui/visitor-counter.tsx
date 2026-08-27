"use client";

import { useEffect, useState } from "react";

/**
 * VisitorCounter — Hitungan pengunjung real-time untuk footer.
 *
 * Menggunakan CounterAPI publik yang persisten. Saat pengunjung baru membuka web,
 * angka akan bertambah 1 secara otomatis dan tersimpan secara real-time.
 */
export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Cek session untuk menghitung unique visit per sesi browser
    const hasVisitedSession = typeof window !== "undefined" && sessionStorage.getItem("abni_visited_session");
    
    // Jika belum pernah berkunjung di sesi ini, panggil endpoint /up (increment)
    // Jika sudah berkunjung di sesi ini, panggil endpoint baca angka saja
    const endpoint = hasVisitedSession
      ? "https://api.counterapi.dev/v1/abnibasit-portfolio/visits"
      : "https://api.counterapi.dev/v1/abnibasit-portfolio/visits/up";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          // Hitungan murni real-time dari awal
          setCount(data.count);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("abni_visited_session", "true");
          }
        }
      })
      .catch(() => {
        // Fallback jika jaringan offline
        setCount(1);
      });
  }, []);

  const formattedCount =
    count !== null
      ? count.toLocaleString("id-ID")
      : "...";

  return (
    <div className="inline-flex items-center rounded-full border border-dashed border-rule-strong/60 bg-surface/60 px-4 py-2 font-mono text-xs text-ink-soft shadow-xs transition-colors hover:border-ink hover:text-ink">
      <span>Visited by {formattedCount} people</span>
    </div>
  );
}
