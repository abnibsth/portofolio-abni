"use client";

import { useEffect, useState } from "react";

/**
 * Workspace & nama counter di CounterAPI v2 (https://counterapi.dev).
 *
 * PENTING: keduanya harus dibuat manual lewat dashboard CounterAPI setelah
 * signup — API v2 tidak auto-create counter. Pastikan counter-nya diset
 * "Public", supaya endpoint bisa dipanggil dari browser tanpa API key.
 *
 * Kalau kamu mengganti nama workspace/counter di dashboard, update dua
 * konstanta ini juga.
 */
const COUNTER_WORKSPACE = "andre-basits-team-5283";
const COUNTER_NAME = "first-counter-5283";

/**
 * VisitorCounter — Hitungan pengunjung real-time untuk footer.
 *
 * Memakai CounterAPI v2 (publik, tanpa API key untuk counter public).
 * API v1 yang dipakai sebelumnya sudah dihapus per Agustus 2026 (HTTP 410),
 * jadi versi ini migrasi ke v2 dengan format response yang berbeda
 * (`data.data.up_count`, bukan `data.count` seperti v1).
 */
export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Cek session untuk menghitung unique visit per sesi browser
    const hasVisitedSession =
      typeof window !== "undefined" && sessionStorage.getItem("abni_visited_session");

    // Jika belum pernah berkunjung di sesi ini, panggil endpoint /up (increment)
    // Jika sudah berkunjung di sesi ini, panggil endpoint baca angka saja
    const endpoint = hasVisitedSession
      ? `https://api.counterapi.dev/v2/${COUNTER_WORKSPACE}/${COUNTER_NAME}`
      : `https://api.counterapi.dev/v2/${COUNTER_WORKSPACE}/${COUNTER_NAME}/up`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const upCount = data?.data?.up_count;
        if (typeof upCount === "number") {
          // Hitungan murni real-time dari CounterAPI, tidak dimanipulasi.
          setCount(upCount);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("abni_visited_session", "true");
          }
        }
      })
      .catch(() => {
        // Fallback: biarkan tampil "..." daripada angka statis yang menyesatkan.
        setCount(null);
      });
  }, []);

  const formattedCount = count !== null ? count.toLocaleString("id-ID") : "...";

  return (
    <div className="inline-flex items-center rounded-full border border-dashed border-rule-strong/60 bg-surface/60 px-4 py-2 font-mono text-xs text-ink-soft shadow-xs transition-colors hover:border-ink hover:text-ink">
      <span>Visited by {formattedCount} people</span>
    </div>
  );
}
