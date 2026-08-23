import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  // Halaman 404 tidak perlu diindeks mesin pencari.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-20">
        <span className="label">Error 404</span>
        <h1 className="mt-5 text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.02]">
          Halaman ini tidak ada
        </h1>
        <p className="text-ink-soft mt-6 max-w-lg text-lg">
          Tautannya mungkin salah tulis, atau halamannya sudah dipindahkan. Semua
          project bisa diakses dari halaman arsip.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="primary">
            Kembali ke halaman utama
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            Lihat semua project
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
