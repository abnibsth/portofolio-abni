# Dokumentasi Portfolio

Panduan lengkap untuk mengisi, menjalankan, dan men-deploy website portfolio ini.
Dibangun mengikuti `prd.md` dengan Next.js 16 (App Router), TypeScript, dan
Tailwind CSS v4.

---

## Daftar Isi

1. [Mulai Cepat](#1-mulai-cepat)
2. [Isi Data Pribadi](#2-isi-data-pribadi) ← **kerjakan ini dulu**
3. [Menambah & Mengedit Project](#3-menambah--mengedit-project)
4. [Mengisi Pengalaman & Keahlian](#4-mengisi-pengalaman--keahlian)
5. [Menyiapkan CV](#5-menyiapkan-cv)
6. [Integrasi GitHub](#6-integrasi-github)
7. [Gambar Project](#7-gambar-project)
8. [Deploy ke Vercel](#8-deploy-ke-vercel)
9. [Struktur Folder](#9-struktur-folder)
10. [Keputusan Teknis & Alasannya](#10-keputusan-teknis--alasannya)
11. [Checklist Sebelum Launch](#11-checklist-sebelum-launch)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Mulai Cepat

```bash
# Jalankan development server
npm run dev
```

Buka http://localhost:3000.

Perintah lain yang tersedia:

| Perintah               | Fungsi                                                  |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Development server dengan hot reload                    |
| `npm run build`        | Production build — jalankan ini sebelum deploy           |
| `npm start`            | Menjalankan hasil build secara lokal                    |
| `npm run typecheck`    | Cek error TypeScript tanpa build                        |
| `npm run lint`         | Cek masalah kode dengan ESLint                          |
| `npm run format`       | Rapikan format semua file dengan Prettier               |
| `npm run format:check` | Cek format tanpa mengubah file                          |

> Sebelum commit, biasakan menjalankan `npm run typecheck` lalu `npm run build`.
> Kalau keduanya lolos, hampir pasti tidak akan gagal di Vercel.

---

## 2. Isi Data Pribadi

**Semua identitas ada di satu file: [`data/site.ts`](data/site.ts).**

Cari komentar bertanda `[GANTI]` di file itu. Berikut yang wajib diisi:

| Field                    | Contoh                              | Catatan                                                    |
| ------------------------ | ----------------------------------- | ---------------------------------------------------------- |
| `name`                   | `"Abni Basit"`                      | Nama yang tampil di hero dan header                        |
| `role`                   | `"Frontend Developer"`              | Role yang kamu **targetkan**, bukan role saat ini          |
| `tagline`                | satu kalimat                        | Maks ~20 kata. Jelaskan apa yang kamu bangun               |
| `location`               | `"Jakarta, Indonesia"`              | Kota, Negara                                               |
| `workPreference`         | `"Remote / Hybrid"`                 | Preferensi kerja                                           |
| `email`                  | `"nama@gmail.com"`                  | Dipakai semua tombol email                                 |
| `githubUsername`         | `"abnibasit"`                       | **Tanpa** `@` dan tanpa URL                                |
| `linkedinUrl`            | URL lengkap                         | Termasuk `https://`                                        |
| `url`                    | `"https://namamu.vercel.app"`       | URL produksi, **tanpa** trailing slash                     |
| `title`                  | `"Nama — Portfolio ..."`            | Judul di tab browser & hasil pencarian                     |
| `description`            | 1–2 kalimat                         | Muncul di hasil Google                                     |
| `copyrightYear`          | `"2026"`                            | Update sekali setahun                                      |

Field opsional: `twitterUrl` dan `whatsappUrl`. Biarkan `null` kalau tidak punya —
link-nya otomatis tidak tampil, tidak perlu mengedit komponen apa pun.

### Status ketersediaan

```ts
availability: {
  available: true,                              // false = sedang tidak mencari
  label: "Terbuka untuk peluang kerja",
  detail: "Full-time · Junior sampai Mid-level",
}
```

Kalau kamu sudah dapat kerja, cukup ubah `available` menjadi `false`. Badge di
hero otomatis berubah menjadi "Sedang tidak mencari peluang".

### Isi teks About

Ada di [`data/about.ts`](data/about.ts) — 4 paragraf dan 4 poin highlight.

Aturan menulis yang saya sarankan:

- **Jangan** tulis "passionate about technology" atau "expert in React". Kalimat
  seperti itu tidak memberi informasi apa pun ke recruiter.
- Tulis apa yang kamu **kerjakan** dan apa yang kamu **perhatikan** saat bekerja.
- 3–4 paragraf pendek sudah cukup. Section ini bukan pengganti CV.

---

## 3. Menambah & Mengedit Project

Semua project ada di [`data/projects.ts`](data/projects.ts). File ini adalah
sumber tunggal untuk homepage, halaman `/projects`, halaman detail, dan sitemap —
menambah satu project otomatis muncul di keempatnya.

### Cara menambah project baru

Tambahkan satu objek ke dalam array `projects`. TypeScript akan memberi error
kalau ada field yang terlewat, jadi kamu tidak bisa lupa mengisi sesuatu.

```ts
{
  slug: "nama-project",              // jadi URL: /projects/nama-project
  title: "Nama Project",
  summary: "Satu kalimat penjelasan.",
  year: "2025",
  type: "Web App",                   // atau "Dashboard", "Landing Page", dll
  role: "Frontend Developer · Solo",
  timeline: "Mar – Mei 2025",
  status: "Live",                    // "Live" | "Selesai" | "Dalam pengembangan" | "Arsip"
  stack: ["Next.js", "TypeScript"],
  demoUrl: "https://...",            // hapus baris ini kalau belum ada demo
  repoUrl: "https://github.com/...", // hapus baris ini kalau repo private
  featured: true,                    // true = tampil di homepage
  cover: {
    src: "/images/projects/nama-project-cover.png",
    alt: "Deskripsi jelas isi gambarnya",   // WAJIB, dibaca screen reader
    width: 1600,
    height: 1000,
  },

  // --- Isi studi kasus ---
  context: ["Kenapa project ini dibuat, siapa penggunanya."],
  problem: ["Masalah utama yang mau diselesaikan."],
  solution: ["Solusi dan fitur utamanya."],
  contribution: ["Bagian mana yang KAMU kerjakan sendiri."],
  technicalDecisions: [
    { heading: "Kenapa memilih X", body: ["Alasannya.", "Konsekuensinya."] },
  ],
  challenges: [
    { heading: "Nama tantangan", body: ["Apa yang gagal, lalu bagaimana diselesaikan."] },
  ],
  results: ["Hasil terukur, atau learning outcome yang jujur."],
  gallery: [
    { src: "/images/projects/nama-project-detail.png", alt: "...", width: 1600, height: 1000,
      caption: "Caption opsional." },
  ],
}
```

Setelah disimpan, halaman `/projects/nama-project` langsung ada. Tidak perlu
membuat file baru dan tidak perlu mendaftarkan apa pun di sitemap.

### Aturan jumlah project

- Homepage: **3–5** project dengan `featured: true`. Lebih dari itu, halaman utama
  jadi terlalu panjang dan recruiter kehilangan fokus.
- Halaman `/projects`: semua project, tanpa batas. Tombol "Lihat semua project"
  otomatis muncul di homepage begitu ada project yang tidak featured.

### Bagian yang paling menentukan

Dari pengalaman membaca PRD ini, dua field ini yang paling dicari hiring manager:

1. **`contribution`** — apa yang benar-benar KAMU kerjakan. Kalau project
   berkelompok, sebutkan juga apa yang **bukan** bagianmu. Kejujuran di sini
   justru menaikkan kredibilitas.
2. **`technicalDecisions`** — bukan daftar teknologi, tapi **alasan** memilihnya
   dan **konsekuensinya**. Contoh yang bagus: "Saya ganti library grafik dengan
   SVG manual karena library-nya menambah 100 KB untuk dua grafik sederhana;
   konsekuensinya saya harus menangani sendiri label sumbu."

`results` boleh tanpa angka. Kalau belum ada angka, learning outcome yang jujur
jauh lebih baik daripada klaim kosong.

### Urutan tampil

Urutan array = urutan tampil. Taruh yang terbaru/terbaik di atas.

---

## 4. Mengisi Pengalaman & Keahlian

### Pengalaman — [`data/experience.ts`](data/experience.ts)

Urutkan dari yang **terbaru** di atas. Isi `achievements` dengan hasil, bukan
tugas:

- Kurang baik: "Bertanggung jawab atas performa website."
- Lebih baik: "Menurunkan waktu load dari 2.4s ke 0.9s dengan mengoptimasi gambar."

Kalau pengalaman kerja formal masih sedikit, itu wajar dan tidak perlu ditutupi.
Judul section-nya sudah "Pengalaman & pembelajaran", jadi bootcamp, organisasi,
freelance, dan proyek mandiri semuanya pas di situ. Pilihan `kind` yang tersedia:
`Full-time`, `Internship`, `Freelance`, `Kontrak`, `Organisasi`, `Bootcamp`,
`Kursus`, `Proyek Mandiri`.

### Keahlian — [`data/skills.ts`](data/skills.ts)

```ts
{ name: "React", core: true }   // pil hitam solid = keahlian inti
{ name: "Express" }             // pil outline = pernah dipakai
```

Aturan penting:

- **Tidak ada progress bar dan tidak ada persentase.** Angka seperti "React 85%"
  tidak bisa diverifikasi dan justru menurunkan kredibilitas.
- `core: true` hanya untuk yang siap kamu bahas mendalam saat interview.
- Jangan isi teknologi yang cuma pernah kamu tonton di tutorial. Kalau ditanya
  dan tidak bisa jawab, kerugiannya jauh lebih besar daripada daftar yang pendek.
- Hapus grup yang tidak relevan. Grup kosong lebih baik dihapus daripada diisi asal.

---

## 5. Menyiapkan CV

1. Ekspor CV sebagai PDF, usahakan di bawah 1 MB.
2. Beri nama file profesional, misalnya `abni-basit-frontend-developer.pdf`.
   Nama file ini terlihat recruiter saat mengunduh.
3. Taruh di folder `public/resume/`.
4. Buka `data/site.ts` dan ubah:

```ts
resume: {
  path: "/resume/abni-basit-frontend-developer.pdf",
  downloadName: "abni-basit-frontend-developer.pdf",
  isAvailable: true,        // ← WAJIB diubah ke true
  updatedAt: "Juli 2026",
}
```

### Kenapa `isAvailable` harus diubah manual

Selama `isAvailable: false`, **semua tombol CV di website otomatis disembunyikan**
— di header, hero, dan section kontak.

Ini disengaja. Tombol CV yang mengarah ke file yang belum diunggah akan
menghasilkan 404 tepat di depan recruiter, dan itu jauh lebih merugikan daripada
tidak ada tombol CV. Dengan cara ini, kalau kamu lupa mengunggah PDF-nya,
website tetap tampil rapi.

---

## 6. Integrasi GitHub

### Cara kerjanya

```
Server Next.js  →  GitHub API  →  filter & normalisasi  →  komponen UI
                        ↓ gagal?
                   data/github-fallback.ts
```

Semuanya berjalan di **server**, di [`lib/github.ts`](lib/github.ts). Browser
pengunjung tidak pernah memanggil GitHub API sama sekali.

### Setup token (opsional tapi disarankan)

Tanpa token, GitHub membatasi 60 request/jam per IP. Dengan token, 5.000/jam.

```bash
cp .env.example .env.local
```

Lalu isi `GITHUB_TOKEN`:

1. Buka https://github.com/settings/tokens?type=beta
2. **Generate new token** → Fine-grained token
3. Repository access: **Public repositories (read-only)**
4. **Jangan centang permission tambahan apa pun** — website ini hanya membaca
   data publik
5. Copy token, tempel ke `.env.local`

Variabel ini **tidak** memakai prefix `NEXT_PUBLIC_`, jadi hanya bisa dibaca di
server dan tidak pernah ikut ke bundle browser. Tambahan pengaman: `lib/github.ts`
diawali `import "server-only"` — kalau ada komponen client yang tidak sengaja
mengimpornya, build akan **gagal**, bukan diam-diam membocorkan token.

### Repository mana yang tampil

Filter otomatis di `lib/github.ts` membuang repo yang:

- private, fork, atau archived
- **tidak punya deskripsi** — recruiter tidak bisa menilai repo yang tidak
  menjelaskan dirinya sendiri

Artinya: **isi deskripsi di semua repo yang ingin kamu tampilkan.** Itu satu
kalimat di GitHub, dan efeknya langsung terlihat di portfolio.

### Mengatur urutan

Buka [`data/github-fallback.ts`](data/github-fallback.ts) dan isi
`pinnedRepositoryNames` dengan nama repo yang ingin selalu tampil paling depan:

```ts
export const pinnedRepositoryNames: string[] = [
  "repo-terbaik",
  "repo-kedua",
];
```

Repo yang tidak ada di daftar ini diurutkan dari yang terakhir di-push.
Kosongkan array kalau ingin murni urutan terbaru.

### Fallback saat API gagal

Isi `fallbackRepositories` di file yang sama dengan 3 repo pilihanmu. Data ini
dipakai kalau:

- GitHub API sedang down atau lambat (timeout 6 detik)
- Rate limit habis
- `githubUsername` belum diisi atau salah

Section GitHub **tidak pernah hilang** dan **tidak pernah menampilkan pesan error
teknis** ke recruiter. Sudah diuji: dengan username yang tidak ada, build tetap
sukses dan section tetap tampil utuh dengan data lokal.

### Seberapa sering data diperbarui

Diatur oleh `cacheLife("hours")` di `lib/github.ts` → sekitar 1 jam.
Pilihan lain: `"minutes"`, `"days"`, `"weeks"`, `"max"`.

Untuk portfolio, `"hours"` sudah tepat: data cukup aktual, halaman tetap cepat,
dan rate limit tidak terkuras.

### Loading state

Saat ini **tidak ada** skeleton yang tampil, dan itu memang benar: karena
`getGitHubData()` memakai `use cache`, datanya sudah ikut ter-render ke HTML
statis saat build. Tidak ada jeda yang perlu ditutupi.

Komponen [`components/github/github-skeleton.tsx`](components/github/github-skeleton.tsx)
tetap disediakan untuk kasus kamu mengubah strategi caching menjadi dinamis
(misalnya `cacheLife("seconds")` atau menghapus `use cache`). Cara memakainya ada
di komentar di dalam file itu.

> Catatan dari proses pengerjaan: versi pertama memasang `<Suspense>` di sekitar
> section ini. Hasilnya justru merusak — HTML statis berisi skeleton **dan**
> konten sekaligus, sehingga `id="github"` muncul dua kali (anchor `#github` di
> navigasi mendarat di skeleton) dan pengunjung tanpa JavaScript terjebak melihat
> skeleton. Suspense-nya dihapus. Kalau kamu memasangnya kembali, pastikan
> `<Section>` berada **di luar** `<Suspense>`.

---

## 7. Gambar Project

Gambar yang ada sekarang di `public/images/projects/` adalah **placeholder
wireframe SVG**. Ganti dengan screenshot asli.

### Cara mengganti

1. Ambil screenshot project dengan lebar sekitar **1600px**.
2. Simpan sebagai `.png`, `.jpg`, atau `.webp` di `public/images/projects/`.
3. Update `cover` dan `gallery` di `data/projects.ts` — jangan lupa ubah `width`
   dan `height` agar sesuai ukuran asli:

```ts
cover: {
  src: "/images/projects/nama-project-cover.png",
  alt: "Halaman transaksi dengan daftar produk di kiri dan ringkasan di kanan",
  width: 1600,
  height: 1000,
}
```

`width` dan `height` **wajib akurat**. Next.js memakai keduanya untuk mencadangkan
ruang sebelum gambar dimuat, sehingga halaman tidak "melompat" saat loading.

### Menulis alt text

Alt text yang baik menjelaskan **apa yang terlihat**, bukan nama filenya:

- Kurang baik: `alt="Screenshot project"`
- Lebih baik: `alt="Halaman rekap harian menampilkan total penjualan dan daftar produk terlaris"`

Rasio yang dipakai layout adalah **8:5**. Gambar dengan rasio lain tetap aman —
akan di-crop rapi lewat `object-cover`, tapi hasil terbaik kalau kamu
menyesuaikan rasionya.

Next.js otomatis mengonversi ke WebP/AVIF dan membuat beberapa ukuran, jadi kamu
tidak perlu mengompres manual.

---

## 8. Deploy ke Vercel

### Langkah

1. **Push ke GitHub**

   ```bash
   git add .
   git commit -m "Portfolio website"
   git push
   ```

2. **Import di Vercel**
   - Buka https://vercel.com/new
   - Pilih repository ini
   - Framework otomatis terdeteksi sebagai Next.js — biarkan semua setting default

3. **Isi Environment Variables** (Settings → Environment Variables)

   | Name                   | Value                          | Wajib?    |
   | ---------------------- | ------------------------------ | --------- |
   | `NEXT_PUBLIC_SITE_URL` | `https://namamu.vercel.app`    | Ya        |
   | `GITHUB_TOKEN`         | token dari langkah 6           | Disarankan |

   > `NEXT_PUBLIC_SITE_URL` penting. Tanpa ini, canonical URL, sitemap, dan
   > preview Open Graph akan memakai URL fallback yang salah.

4. **Deploy**, lalu setelah URL produksinya keluar, kembali update
   `NEXT_PUBLIC_SITE_URL` dengan URL yang sebenarnya dan redeploy sekali.

### Analytics

Vercel Analytics sudah terpasang (`@vercel/analytics`). Aktifkan di dashboard
Vercel → tab **Analytics** → Enable. Tidak ada kode yang perlu diubah.

Event yang sudah dilacak: `view_project`, `click_project_demo`,
`click_github_repository`, `click_github_profile`, `download_resume`,
`click_linkedin`, `click_email`. Daftar lengkapnya sebagai union type di
[`types/index.ts`](types/index.ts) — salah tulis nama event akan jadi error
TypeScript, bukan data kotor yang baru ketahuan berbulan-bulan kemudian.

Analytics ini tidak memakai cookie dan tidak mengumpulkan data yang bisa
mengidentifikasi orang.

### Custom domain

Vercel → Settings → Domains → Add. Setelah aktif, update
`NEXT_PUBLIC_SITE_URL` ke domain baru dan redeploy.

---

## 9. Struktur Folder

```
app/
  layout.tsx              Root layout: font, metadata global, header, footer, skip link
  page.tsx                Homepage (semua section dirangkai di sini)
  globals.css             Design token + utility + animasi reveal
  not-found.tsx           Halaman 404
  sitemap.ts              /sitemap.xml (otomatis dari data/projects.ts)
  robots.ts               /robots.txt
  opengraph-image.tsx     Gambar preview media sosial (dibuat otomatis)
  projects/
    page.tsx              Daftar semua project
    [slug]/page.tsx       Halaman studi kasus

components/
  layout/                 site-header, site-footer
  navigation/             mobile-nav (satu-satunya menu interaktif)
  sections/               hero, about, skills, experience, selected-work, contact
  projects/               project-card, case-study-block, project-view-tracker
  github/                 github-section, repo-card, github-skeleton
  ui/                     container, section, button, tag, icons, abstract-mark,
                          resume-button, tracked-link

data/                     ← SEMUA KONTEN ADA DI SINI
  site.ts                 Identitas, kontak, SEO, resume  ← mulai dari sini
  about.ts                Teks section About
  projects.ts             Semua project + studi kasus
  experience.ts           Riwayat pengalaman
  skills.ts               Daftar keahlian
  social-links.ts         Link kontak (otomatis dari site.ts)
  navigation.ts           Item menu
  github-fallback.ts      Data cadangan saat GitHub API gagal

lib/
  github.ts               Fetch + cache + filter GitHub (server-only)
  metadata.ts             Pembuat metadata & JSON-LD
  analytics.ts            Wrapper Vercel Analytics
  utils.ts                Helper kecil (format tanggal, cn)

types/index.ts            Semua tipe data
public/
  images/projects/        Gambar project
  resume/                 CV PDF
```

**Aturan sederhana:** untuk mengubah **isi**, edit folder `data/`. Untuk mengubah
**tampilan**, edit `components/` atau `app/globals.css`.

---

## 10. Keputusan Teknis & Alasannya

### Kenapa data lokal TypeScript, bukan MDX

PRD memperbolehkan keduanya. Saya memilih TypeScript object karena:

- Nol dependency tambahan (MDX butuh `@next/mdx` + plugin remark/rehype).
- Struktur studi kasus jadi **dipaksa lengkap** oleh tipe — kamu tidak bisa lupa
  mengisi `contribution` atau `technicalDecisions`, yang justru bagian paling
  penting bagi hiring manager.
- Salah tulis field langsung jadi error saat `npm run typecheck`, bukan halaman
  rusak di produksi.

Kalau nanti kamu ingin menulis case study dengan formatting bebas (heading, kode,
tabel), MDX baru layak dipertimbangkan.

### Kenapa Cache Components (`cacheComponents: true`)

Ini fitur Next.js 16 yang menggantikan `experimental.ppr`, `dynamicIO`, dan
`useCache`. Yang kita dapat:

- `use cache` + `cacheLife("hours")` di `lib/github.ts` — caching dan revalidasi
  berkala persis seperti yang diminta PRD, dalam 3 baris kode.
- Homepage ter-prerender penuh sebagai HTML statis (terlihat di build output
  sebagai `○ /` dengan `Revalidate 1h`).

Konsekuensi yang perlu kamu tahu: nilai non-deterministik seperti `new Date()`
atau `Math.random()` akan **menggagalkan build** kalau dipakai di luar scope
`use cache`. Itu sebabnya tahun copyright disimpan sebagai konstanta
`site.copyrightYear`, bukan dihitung dari `new Date()`.

### Kenapa tanpa contact form

Kamu memilih ini, dan saya setuju. Form menambah titik kegagalan (backend, spam,
deliverability) untuk sesuatu yang tetap berujung di inbox yang sama. Recruiter
umumnya juga lebih suka membalas dari email mereka sendiri supaya riwayat
percakapannya tersimpan.

Kalau nanti berubah pikiran: buat `app/actions/contact.ts` dengan Server Action,
validasi input dengan Zod, tambahkan honeypot field untuk anti-spam, dan kirim
lewat Resend. Sisipkan komponen form-nya di `components/sections/contact.tsx`.
Pertahankan link email sebagai fallback.

### Kenapa animasi pakai CSS, bukan Framer Motion

Animasi reveal saat scroll memakai `animation-timeline: view()` — CSS
scroll-driven animation. Keuntungannya:

- **Nol JavaScript.** Framer Motion menambah sekitar 40 KB.
- Otomatis non-aktif di browser yang belum mendukung, dan konten tetap terbaca
  penuh — sesuai syarat PRD "konten utama tetap terbaca tanpa animasi".
- Menghormati `prefers-reduced-motion` lewat media query biasa.

Kelasnya `.reveal`, didefinisikan di `app/globals.css`.

### Kenapa menu mobile pakai `<dialog>` native

Bukan div dengan state. Dengan `<dialog>` + `showModal()`, browser memberikan
gratis: fokus keyboard terkunci di dalam menu, Escape menutup menu, dan konten
di belakang menjadi inert. Yang tetap ditangani manual hanya lock scroll dan
memulihkan fokus ke tombol pembuka.

### Pola aksesibilitas kartu project

Kartu project **tidak** dibungkus satu `<a>` besar, karena di dalamnya ada link
demo dan repository — link di dalam link adalah HTML tidak valid.

Yang dipakai: judulnya menjadi link, lalu pseudo-element `::after` miliknya
dibentangkan menutupi seluruh kartu. Hasilnya seluruh area bisa diklik mouse,
sementara pengguna keyboard hanya menemukan satu tab stop untuk kartu itu. Link
demo/repo diangkat dengan `z-10` supaya tetap bisa diklik terpisah.

### Kenapa tema monokrom

Kamu memilih hitam-putih dengan elemen abstrak. Implementasinya: tidak ada
accent color berwarna sama sekali — yang membedakan aksi utama adalah **inversi
warna** (blok hitam solid), bukan hue. Karakter visual dibangun dari bentuk
geometris SVG di `components/ui/abstract-mark.tsx`.

Efek sampingnya menguntungkan: karena tidak ada informasi yang disampaikan lewat
warna, syarat WCAG "tidak bergantung pada warna" terpenuhi secara otomatis.

---

## 11. Checklist Sebelum Launch

### Konten

- [ ] Semua `[GANTI]` di `data/site.ts` sudah diisi
- [ ] Nama, role, dan email sudah benar (cek ulang typo di email!)
- [ ] `githubUsername` sudah benar — coba buka `github.com/<username>` di browser
- [ ] `linkedinUrl` bisa dibuka
- [ ] Teks About di `data/about.ts` sudah ditulis sendiri
- [ ] Minimal 3 project di `data/projects.ts` dengan konten asli
- [ ] Semua `demoUrl` dan `repoUrl` bisa dibuka (hapus field-nya kalau belum ada)
- [ ] Screenshot asli sudah mengganti placeholder SVG
- [ ] Semua `alt` gambar deskriptif, bukan "screenshot project"
- [ ] Pengalaman di `data/experience.ts` sudah diisi, urutan terbaru di atas
- [ ] Keahlian di `data/skills.ts` sudah dipangkas — hanya yang benar-benar dipakai
- [ ] CV PDF sudah ada di `public/resume/` dan `isAvailable: true`
- [ ] Deskripsi semua repo GitHub yang ingin tampil sudah diisi

### Teknis

- [ ] `npm run typecheck` lolos tanpa error
- [ ] `npm run lint` lolos tanpa error
- [ ] `npm run build` sukses
- [ ] `NEXT_PUBLIC_SITE_URL` sudah di-set di Vercel dan cocok dengan domain asli
- [ ] `GITHUB_TOKEN` sudah di-set di Vercel
- [ ] Analytics sudah di-enable di dashboard Vercel

### Yang perlu dicek manual di browser

Ini belum bisa diverifikasi otomatis, jadi luangkan 10 menit:

- [ ] Buka di ponsel sungguhan. Buka menu hamburger, pastikan bisa ditutup dengan
      tombol Tutup, tombol back, dan tap di luar menu
- [ ] Saat menu terbuka, coba scroll — background harus tidak bergerak
- [ ] Tekan Tab dari atas halaman. Link "Lompat ke konten utama" harus muncul
      lebih dulu, dan setiap elemen yang difokus harus punya garis fokus terlihat
- [ ] Navigasi seluruh halaman **hanya dengan keyboard**, tanpa mouse
- [ ] Jalankan Lighthouse di Chrome DevTools (mode Incognito, profil Mobile).
      Target: Performance, Accessibility, Best Practices, dan SEO minimal 90
- [ ] Tempel URL produksi ke WhatsApp atau LinkedIn, pastikan preview Open Graph
      muncul dengan nama dan role yang benar
- [ ] Klik setiap link eksternal, pastikan tidak ada yang 404
- [ ] Unduh CV dari tombolnya, pastikan file yang turun benar dan bisa dibuka
- [ ] Cek tampilan di Chrome, Firefox, dan Safari

---

## 12. Troubleshooting

### Build gagal: "Uncached data was accessed outside of `<Suspense>`"

Ada kode yang mengambil data eksternal atau memakai runtime API tanpa `use cache`
dan tanpa dibungkus `<Suspense>`. Solusinya salah satu:

- Tambahkan `"use cache"` di baris pertama fungsi tersebut, atau
- Bungkus komponen pemanggilnya dengan `<Suspense fallback={...}>`

### Build gagal: "Only plain objects can be passed to Client Components"

Biasanya karena mencoba `use cache` pada sesuatu yang tidak serializable.
Contoh nyata di project ini: `ImageResponse` di `app/opengraph-image.tsx` tidak
bisa di-cache. Route itu memang sengaja dibiarkan dynamic.

### Section GitHub menampilkan data yang salah / tidak update

1. Cek `githubUsername` di `data/site.ts` — tanpa `@`, tanpa URL.
2. Jalankan `npm run build` dan perhatikan log. Kalau muncul
   `[github] /users/xxx → HTTP 404`, username-nya salah.
3. Data di-cache 1 jam. Untuk melihat perubahan segera saat development, hentikan
   server, hapus folder `.next`, lalu `npm run dev` lagi.
4. Kalau `HTTP 403`, rate limit habis — isi `GITHUB_TOKEN`.

### Repo tertentu tidak muncul di section GitHub

Filter otomatis membuang repo yang private, fork, archived, atau **tanpa
deskripsi**. Penyebab paling sering: deskripsi repo di GitHub masih kosong.

### Tombol CV tidak muncul

`site.resume.isAvailable` masih `false`. Ini memang perilaku yang diinginkan
sampai PDF-nya benar-benar ada. Lihat [bagian 5](#5-menyiapkan-cv).

### Gambar tidak tampil

- Path harus diawali `/` dan relatif dari folder `public`. File di
  `public/images/projects/a.png` diakses sebagai `/images/projects/a.png`.
- Untuk gambar dari domain luar, host-nya harus ditambahkan ke
  `images.remotePatterns` di `next.config.ts`.

### Animasi reveal tidak jalan

Wajar. `animation-timeline: view()` belum didukung semua browser (Firefox belum).
Konten tetap tampil penuh — itu memang perilaku yang dirancang, bukan bug.

### Halaman "melompat" saat gambar dimuat

`width` dan `height` di `data/projects.ts` tidak cocok dengan ukuran asli gambar.
Perbaiki angkanya sesuai dimensi file yang sebenarnya.

---

## Ringkasan: Urutan Kerja yang Saya Sarankan

1. Isi `data/site.ts` — 10 menit, dan seluruh website langsung terasa jadi milikmu.
2. Isi `data/about.ts` — tulis sendiri, jangan pakai template.
3. Ganti satu project di `data/projects.ts` dengan project asli terbaikmu.
   Kerjakan yang paling bagus dulu, lengkap. Satu studi kasus yang dalam lebih
   berharga daripada tiga yang setengah jadi.
4. Isi dua project sisanya.
5. Isi `data/experience.ts` dan pangkas `data/skills.ts`.
6. Ganti screenshot placeholder.
7. Isi deskripsi semua repo GitHub-mu.
8. Unggah CV, set `isAvailable: true`.
9. `npm run build`, deploy ke Vercel, isi environment variables.
10. Kerjakan checklist manual di browser.
