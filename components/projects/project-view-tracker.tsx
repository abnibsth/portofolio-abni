"use client";

import { useEffect } from "react";

import { track } from "@/lib/analytics";

/**
 * Mengirim event `view_project` sekali saat halaman detail dibuka (PRD 21).
 *
 * Tidak merender apa pun. Sengaja dipisah menjadi komponen sendiri supaya
 * halaman detail bisa tetap menjadi Server Component sepenuhnya — satu-satunya
 * JavaScript yang dikirim ke browser untuk halaman itu adalah efek ini.
 */
export function ProjectViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track("view_project", { project: slug });
  }, [slug]);

  return null;
}
