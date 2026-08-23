"use client";

import { track as vercelTrack } from "@vercel/analytics";

import type { AnalyticsEvent } from "@/types";

/**
 * ============================================================================
 * ANALYTICS
 * ============================================================================
 * Daftar event-nya didefinisikan sebagai union `AnalyticsEvent` di types/index.ts.
 *
 * Privasi (PRD FR-10 & 20): Vercel Analytics tidak memakai cookie dan tidak
 * mengumpulkan data yang bisa mengidentifikasi orang. Kita hanya mengirim nama
 * event dan properti non-personal seperti slug project.
 */
export function track(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | null>,
): void {
  // Di development, Vercel Analytics hanya mencatat ke console — itu wajar.
  vercelTrack(event, properties);
}

export type { AnalyticsEvent };
