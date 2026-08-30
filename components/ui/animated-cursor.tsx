"use client";

import React, { useEffect, useState } from "react";

/**
 * AnimatedCursor — Cursor animasi berbentuk lingkaran (ala react-animated-cursor).
 *
 * Menggunakan mix-blend-difference agar kursor tampil hitam di latar terang
 * dan putih di latar gelap secara otomatis, serta membesar saat mengarahkan
 * kursor ke tombol atau tautan interaktif.
 */
export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Matikan kursor kustom di perangkat layar sentuh/mobile
    if (typeof window !== "undefined") {
      const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (touchDevice || window.innerWidth < 768) {
        setIsMobile(true);
        return;
      }
      document.documentElement.classList.add("custom-cursor-active");
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Deteksi hover pada elemen interaktif
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "a, button, input, textarea, select, [role='button'], .clickable, .group, label, summary"
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [isVisible]);

  // Smooth lerp mengikuti gerakan kursor
  useEffect(() => {
    if (isMobile) return;
    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner Black/White Circular Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "#ffffff",
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${
            isClicked ? 2.5 : isHovered ? 1.5 : 1
          })`,
        }}
      />

      {/* Outer Black/White Circular Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[99998] rounded-full border border-white/80 mix-blend-difference transition-transform duration-200 ease-out"
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          transform: `translate3d(${trailingPosition.x - 18}px, ${
            trailingPosition.y - 18
          }px, 0) scale(${isClicked ? 2.2 : isHovered ? 1.5 : 1})`,
        }}
      />
    </>
  );
}
