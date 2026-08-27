"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PixelAvatarProps {
  /** Gambar A: Tampilan default (misal: jousting knight / avatar) */
  srcInitial: string;
  /** Gambar B: Tampilan hover (misal: foto asli Abni) */
  srcHover: string;
  altInitial?: string;
  altHover?: string;
  /** Resolusi matriks piksel (default: 10 untuk grid 10x10 = 100 blok) */
  gridResolution?: number;
  className?: string;
}

export function PixelAvatar({
  srcInitial,
  srcHover,
  altInitial = "Avatar Initial",
  altHover = "Avatar Hover",
  gridResolution = 10,
  className,
}: PixelAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-kalkulasi grid sel dengan overlap mikro (0.25%) untuk mencegah garis sub-pixel
  const tiles = useMemo(() => {
    const totalTiles = gridResolution * gridResolution;
    const step = 100 / gridResolution;
    const overlap = 0.25; // Overlap 0.25% menghilangkan celah garis antar sel
    const items = [];

    for (let r = 0; r < gridResolution; r++) {
      for (let c = 0; c < gridResolution; c++) {
        const index = r * gridResolution + c;
        // Pseudo-random delay (0ms - 280ms) deterministik
        const pseudoRandom = ((index * 37 + 17) % totalTiles) / totalTiles;
        const delayMs = Math.round(pseudoRandom * 280);

        // Clip-path inset persentase dengan overlap mikro
        const top = Math.max(0, r * step - overlap);
        const right = Math.max(0, 100 - (c + 1) * step - overlap);
        const bottom = Math.max(0, 100 - (r + 1) * step - overlap);
        const left = Math.max(0, c * step - overlap);

        const clipPath = `inset(${top.toFixed(2)}% ${right.toFixed(2)}% ${bottom.toFixed(2)}% ${left.toFixed(2)}%)`;

        items.push({
          id: `${r}-${c}`,
          clipPath,
          delayMs,
        });
      }
    }
    return items;
  }, [gridResolution]);

  return (
    <div
      className={cn(
        "group relative mx-auto aspect-square w-full max-w-[14rem] cursor-pointer sm:max-w-[16rem] lg:ml-auto lg:mr-0 select-none",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-label="Toggle profile view"
    >
      {/* Outer Ring Ambient Glow */}
      <div
        aria-hidden="true"
        className={cn(
          "border-ink absolute -inset-2.5 -z-10 rounded-full border transition-all duration-500",
          isHovered ? "scale-105 opacity-40 shadow-lg" : "opacity-20"
        )}
      />

      {/* Circle Container dengan Mask Round Full */}
      <div className="relative h-full w-full overflow-hidden rounded-full border border-rule shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-surface">
        {/* Layer 1 (Bawah): Gambar A (Initial / Default) */}
        <Image
          src={srcInitial}
          alt={altInitial}
          fill
          priority
          sizes="(min-width: 1024px) 13rem, 16rem"
          className={cn(
            "object-cover object-center grayscale contrast-[1.05] brightness-[1.03] transition-transform duration-500 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />

        {/* Layer 2 (Tengah): Pixel Grid Matrix Overlay Staggered Transition */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="absolute inset-0 transition-all duration-200 ease-in-out"
              style={{
                clipPath: tile.clipPath,
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scale(1)" : "scale(0.9)",
                transitionDelay: `${tile.delayMs}ms`,
              }}
            >
              <Image
                src={srcHover}
                alt={altHover}
                fill
                priority
                sizes="(min-width: 1024px) 13rem, 16rem"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Layer 3 (Atas): Full Solid Overlay Seamless Image */}
        <Image
          src={srcHover}
          alt={altHover}
          fill
          priority
          sizes="(min-width: 1024px) 13rem, 16rem"
          className={cn(
            "object-cover object-center transition-opacity duration-300 ease-in-out pointer-events-none",
            isHovered ? "opacity-100 delay-300" : "opacity-0 delay-0"
          )}
        />
      </div>
    </div>
  );
}
