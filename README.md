# Portfolio Website

Portfolio pribadi dengan pendekatan **editorial monokrom**, dibangun sesuai
[`prd.md`](prd.md).

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4

---

## Mulai

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Langkah pertama

Edit **[`data/site.ts`](data/site.ts)** — semua identitas, kontak, dan SEO ada di
satu file itu. Cari komentar bertanda `[GANTI]`.

## Dokumentasi lengkap

Semua panduan ada di **[DOCS.md](DOCS.md)**:

- Cara mengisi data pribadi, project, pengalaman, dan keahlian
- Cara menambah project baru
- Setup token GitHub dan cara kerja fallback-nya
- Cara deploy ke Vercel
- Checklist sebelum launch
- Troubleshooting

## Perintah

| Perintah            | Fungsi                       |
| ------------------- | ---------------------------- |
| `npm run dev`       | Development server           |
| `npm run build`     | Production build             |
| `npm start`         | Menjalankan hasil build      |
| `npm run typecheck` | Cek error TypeScript         |
| `npm run lint`      | ESLint                       |
| `npm run format`    | Rapikan format dengan Prettier |

## Fitur

- Homepage single-page: hero, karya pilihan, tentang, keahlian, pengalaman,
  aktivitas GitHub, kontak
- Halaman studi kasus per project (`/projects/[slug]`)
- Integrasi GitHub API di sisi server, dengan caching 1 jam dan fallback data
  lokal saat API gagal
- SEO: metadata per halaman, canonical URL, Open Graph image otomatis,
  JSON-LD Person & CreativeWork, sitemap, robots
- Aksesibilitas: skip link, navigasi keyboard penuh, menu mobile berbasis
  `<dialog>` native, `prefers-reduced-motion`
- Vercel Analytics dengan daftar event bertipe

## Catatan arsitektur

- **Konten** ada di `data/`. **Tampilan** ada di `components/` dan `app/globals.css`.
- Semua komponen adalah Server Component kecuali tiga: menu mobile, pelacak
  analytics, dan link yang mengirim event.
- `lib/github.ts` ditandai `server-only`, jadi `GITHUB_TOKEN` tidak mungkin bocor
  ke bundle browser — build akan gagal kalau ada client component yang
  mengimpornya.

Penjelasan lengkap tiap keputusan teknis ada di
[DOCS.md § Keputusan Teknis](DOCS.md#10-keputusan-teknis--alasannya).
