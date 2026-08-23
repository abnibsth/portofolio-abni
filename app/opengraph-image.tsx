import { ImageResponse } from "next/og";

import { site } from "@/data/site";

/**
 * Open Graph image yang dihasilkan otomatis (PRD FR-07).
 *
 * File ini menggantikan kebutuhan membuat gambar preview manual di Figma:
 * setiap kali kamu mengganti nama atau role di data/site.ts, gambar preview di
 * WhatsApp, LinkedIn, dan X ikut berubah sendiri.
 *
 * Catatan teknis: ImageResponse hanya mendukung flexbox dan sebagian properti
 * CSS. `display: grid` tidak bekerja di sini, dan setiap elemen dengan lebih
 * dari satu anak wajib punya `display: flex` eksplisit.
 */
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#faf9f6";
const INK = "#0b0b0b";
const INK_SOFT = "#5c5c58";
const RULE = "#dedcd4";

/**
 * Catatan: route ini sengaja dibiarkan dynamic. `ImageResponse` mengembalikan
 * objek Response yang tidak serializable, jadi tidak bisa dibungkus `use cache`
 * (build akan gagal dengan "Only plain objects ... can be passed"). Gambarnya
 * tetap murah karena di-cache di CDN setelah permintaan pertama.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: PAPER,
        padding: "72px 80px",
        position: "relative",
      }}
    >
      {/* Elemen abstrak: blok hitam + lingkaran outline, sejalan dengan
            arah visual monokrom di website. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 300,
          height: 300,
          backgroundColor: INK,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 240,
          right: 240,
          width: 160,
          height: 160,
          borderRadius: 9999,
          border: `2px solid ${INK}`,
        }}
      />

      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: INK_SOFT,
          }}
        >
          Portfolio
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 96, lineHeight: 1.05, color: INK }}>{site.name}</span>
        <span style={{ fontSize: 96, lineHeight: 1.05, color: INK_SOFT }}>
          {site.role}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${RULE}`,
          paddingTop: 28,
        }}
      >
        <span style={{ fontSize: 26, color: INK_SOFT }}>{site.location}</span>
        <span style={{ fontSize: 26, color: INK_SOFT }}>
          {site.url.replace(/^https?:\/\//, "")}
        </span>
      </div>
    </div>,
    size,
  );
}
