/**
 * Loading state untuk section GitHub (PRD 10.7 "Loading State").
 *
 * Skeleton sederhana, bukan spinner besar, dan tinggi setiap blok dibuat
 * menyerupai konten sebenarnya supaya layout tidak bergeser saat data masuk.
 *
 * `aria-hidden` dipasang karena skeleton tidak membawa informasi; status
 * pemuatan disampaikan lewat teks di dalam `sr-only`.
 *
 * ---------------------------------------------------------------------------
 * KOMPONEN INI SENGAJA TIDAK DIPAKAI PADA KONFIGURASI SAAT INI.
 *
 * Selama `getGitHubData()` memakai `use cache`, data GitHub sudah masuk ke HTML
 * statis saat build — tidak ada jeda pemuatan yang perlu ditutupi, dan memasang
 * <Suspense> justru membuat skeleton ikut terkirim ke setiap pengunjung.
 *
 * Skeleton ini menjadi relevan kalau kamu mengubah strategi caching menjadi
 * dinamis, misalnya `cacheLife('seconds')` atau menghapus `use cache`. Saat itu,
 * bungkus <GitHubSection /> di app/page.tsx seperti ini:
 *
 *     <Section id="github" index="05" label="Building in Public" title="Aktivitas GitHub">
 *       <Suspense fallback={<GitHubSkeleton />}>
 *         <GitHubContent />
 *       </Suspense>
 *     </Section>
 *
 * Catatan penting: <Section> harus berada DI LUAR <Suspense>. Kalau ikut masuk,
 * `id="github"` akan muncul dua kali di HTML dan anchor #github mendarat di
 * skeleton, bukan di kontennya.
 * ---------------------------------------------------------------------------
 */
function Block({ className }: { className: string }) {
  return <div className={`bg-surface animate-pulse rounded ${className}`} />;
}

export function GitHubSkeleton() {
  return (
    <div>
      <p className="sr-only" role="status">
        Memuat aktivitas GitHub.
      </p>

      <div aria-hidden="true">
        {/* Ringkasan profil */}
        <div className="border-rule flex items-center gap-5 border-t pt-6">
          <Block className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Block className="h-4 w-40" />
            <Block className="h-3 w-64 max-w-full" />
          </div>
        </div>

        {/* Repository unggulan */}
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div key={index} className="border-rule space-y-3 border-t pt-6">
              <Block className="h-4 w-32" />
              <Block className="h-3 w-full" />
              <Block className="h-3 w-4/5" />
              <Block className="h-3 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
