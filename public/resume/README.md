# Folder Resume

Taruh file CV PDF-mu di folder ini.

## Langkah

1. Ekspor CV sebagai PDF.
2. Beri nama file yang profesional — nama file ini ikut terlihat saat recruiter
   mengunduhnya. Nama yang dipakai kode saat ini:

   ```
   abni-basit-frontend-developer.pdf
   ```

3. Taruh file itu di folder ini (`public/resume/`).
4. Buka `data/site.ts` dan ubah dua hal:

   ```ts
   resume: {
     path: "/resume/abni-basit-frontend-developer.pdf",  // sesuaikan nama file
     downloadName: "abni-basit-frontend-developer.pdf",  // sesuaikan nama file
     isAvailable: true,                                   // ← ubah jadi true
     updatedAt: "Juli 2026",                              // ← bulan/tahun update
   }
   ```

## Kenapa harus set `isAvailable: true` manual

Selama `isAvailable` masih `false`, semua tombol CV di website otomatis
disembunyikan — di header, hero, maupun section kontak.

Ini disengaja. Tombol yang mengarah ke PDF yang belum ada akan menghasilkan
error 404 di depan recruiter, dan itu jauh lebih merugikan daripada tidak ada
tombol CV sama sekali. Kalau nanti kamu lupa mengunggah file-nya, website tetap
tampil rapi.

## Ukuran file

Usahakan di bawah 1 MB. CV satu–dua halaman dengan teks saja biasanya di bawah
200 KB. Kalau ukurannya membengkak, biasanya penyebabnya foto yang belum
dikompres atau font yang di-embed penuh.

> File README ini boleh dihapus setelah PDF-mu masuk.
