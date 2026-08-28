"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { navItems } from "@/data/navigation";
import { Close, Menu } from "@/components/ui/icons";

/**
 * Menu navigasi mobile.
 *
 * Dibangun di atas elemen <dialog> native dan `showModal()`, bukan div biasa.
 * Alasannya, semua syarat aksesibilitas di PRD 11 langsung didapat dari browser:
 *   - Fokus keyboard terkunci di dalam menu selama terbuka.
 *   - Tombol Escape menutup menu.
 *   - Konten di belakang menjadi inert, tidak bisa di-tab maupun diklik.
 * Yang tetap perlu kita tangani manual: mengunci scroll background dan
 * memulihkan fokus ke tombol pembuka setelah menu ditutup.
 */
export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function close() {
    dialogRef.current?.close();
  }

  // Scroll background dikunci selama menu terbuka (PRD 11).
  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previous;
    };
  }, [isOpen]);

  // Menutup menu bisa terjadi dari Escape, backdrop, atau tombol — event
  // "close" milik <dialog> menangkap semuanya, jadi state dan pemulihan fokus
  // cukup ditangani di satu tempat.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      setIsOpen(false);
      openButtonRef.current?.focus();
    }

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <>
      <button
        ref={openButtonRef}
        type="button"
        onClick={open}
        aria-expanded={isOpen}
        className="border-rule-strong hover:border-ink inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors lg:hidden"
      >
        <Menu />
        Menu
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu navigasi"
        // Klik pada backdrop mengenai elemen <dialog> itu sendiri, sedangkan
        // klik pada isi menu mengenai anak-anaknya — jadi cukup bandingkan
        // target dengan currentTarget untuk membedakan keduanya.
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="bg-paper text-ink backdrop:bg-ink/40 m-0 h-dvh max-h-none w-full max-w-none p-0 lg:hidden"
      >
        <div className="flex h-full flex-col px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="label">Navigasi</span>
            <button
              type="button"
              onClick={close}
              className="border-rule-strong hover:border-ink inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors"
            >
              <Close />
              Close
            </button>
          </div>

          <nav className="mt-10 flex-1">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <li key={item.href} className="border-rule border-b">
                  <Link
                    href={item.href}
                    // Menu harus ikut tertutup saat pindah halaman. Dengan
                    // Cache Components, komponen tetap mounted setelah
                    // navigasi, jadi ini tidak terjadi sendiri.
                    onClick={close}
                    className="font-display flex items-baseline gap-4 py-4 text-3xl"
                  >
                    <span
                      aria-hidden="true"
                      className="text-ink-faint font-mono text-xs tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  );
}
