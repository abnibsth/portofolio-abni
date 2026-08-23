"use client";

import { track } from "@/lib/analytics";
import type { AnalyticsEvent } from "@/types";

/**
 * Anchor biasa yang mengirim satu event analytics saat diklik.
 *
 * Ini satu-satunya alasan komponennya Client Component. Semua link lain di
 * website memakai <a> atau <Link> biasa dari Server Component (PRD 19:
 * "Client component hanya digunakan jika dibutuhkan").
 *
 * Link eksternal otomatis mendapat target="_blank" + rel="noopener noreferrer"
 * (PRD 20: "External link menggunakan konfigurasi aman").
 */
export function TrackedLink({
  href,
  event,
  eventProperties,
  external,
  className,
  children,
  download,
  ...rest
}: {
  href: string;
  event: AnalyticsEvent;
  eventProperties?: Record<string, string | number | boolean | null>;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  download?: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href" | "className" | "children">) {
  return (
    <a
      href={href}
      className={className}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => track(event, eventProperties)}
      {...rest}
    >
      {children}
    </a>
  );
}
