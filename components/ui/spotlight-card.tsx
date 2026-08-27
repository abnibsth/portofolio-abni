"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * SpotlightCard — Komponen kartu interaktif dengan efek "Hover Spotlight"
 * ala Vercel & Linear. Cahaya radial lembut & border glow akan mengikuti kursor.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(180, 180, 180, 0.12)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-rule bg-paper p-5 sm:p-6 transition-all duration-300 hover:border-ink/60 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {/* 1. Background Spotlight Glow (Cahaya Lingkaran di Dalam Card) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--color-ink-soft, rgba(120,120,120,0.15)), transparent 40%)`,
        }}
      />

      {/* 2. Border Spotlight Mask (Gaya Vercel / Linear Glow Border Trace) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, var(--color-ink, rgba(0,0,0,0.3)), transparent 40%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Konten Utama Card */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
}
