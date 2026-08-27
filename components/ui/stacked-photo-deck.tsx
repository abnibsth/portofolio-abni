"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StackedPhotoDeckProps {
  images: string[];
  alt?: string;
  className?: string;
}

export function StackedPhotoDeck({
  images,
  alt = "Event Photo",
  className,
}: StackedPhotoDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 180);
  };

  const rotations = ["rotate-0", "rotate-3", "rotate-6", "-rotate-3"];
  const translateXs = ["translate-x-0", "translate-x-2.5", "translate-x-5", "-translate-x-2"];
  const translateYs = ["translate-y-0", "translate-y-1.5", "translate-y-3", "translate-y-4"];

  return (
    <div
      className={cn("relative aspect-[4/3] w-full select-none cursor-pointer group", className)}
      onClick={handleNext}
      role="button"
      tabIndex={0}
      aria-label="Klik untuk ganti foto"
    >
      {/* Cards stack */}
      <div className="relative h-full w-full">
        {images.map((src, i) => {
          // Relative position from current active index
          const relIndex = (i - currentIndex + images.length) % images.length;
          if (relIndex > 3) return null;

          const isFront = relIndex === 0;

          return (
            <div
              key={src}
              className={cn(
                "absolute inset-0 rounded-2xl overflow-hidden border border-rule/80 bg-paper transition-all duration-300 ease-out shadow-lg",
                rotations[relIndex % rotations.length],
                translateXs[relIndex % translateXs.length],
                translateYs[relIndex % translateYs.length],
                isFront && isAnimating && "-translate-x-12 -rotate-12 opacity-0 scale-95",
                isFront ? "z-30 shadow-2xl group-hover:scale-[1.02]" : "",
                relIndex === 1 ? "z-20 opacity-95 scale-[0.97]" : "",
                relIndex === 2 ? "z-10 opacity-80 scale-[0.94]" : "",
                relIndex === 3 ? "z-0 opacity-60 scale-[0.91]" : ""
              )}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
