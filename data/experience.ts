import type { Experience } from "@/types";

/**
 * ATURAN PENGISIAN (PRD 10.6):
 * - Urutkan dari yang TERBARU di atas. Urutan array = urutan tampil.
 * - `achievements` lebih penting daripada daftar tugas. Tulis hasilnya:
 *   "Menurunkan waktu load 2.4s → 0.9s", bukan "Bertanggung jawab atas performa".
 * - Kalau pengalaman kerja formal masih sedikit, itu wajar. Isi dengan
 *   bootcamp, organisasi, freelance, atau proyek mandiri — judul section
 *   sudah memakai "Pengalaman & Pembelajaran" supaya jujur dan tetap kuat.
 *
 * ISI DI BAWAH INI MASIH CONTOH. Ganti seluruhnya dengan pengalamanmu.
 */
export const experiences: Experience[] = [
  {
    organization: "SMKN 20 Jakarta",
    role: "IT Instructor",
    kind: "Kontrak",
    period: "Okt 2025 — Jan 2026",
    location: "Jakarta, Indonesia",
    summary:
      "Mengajar dasar pemrograman dan pengembangan aplikasi web kepada siswa SMK selama satu semester penuh, dari teori algoritma sampai praktik membangun aplikasi utuh.",
    achievements: [
      "Membimbing siswa membangun aplikasi web fungsional menggunakan Laravel 11, mencakup fitur CRUD, autentikasi, routing, migrasi, dan relasi database — seluruhnya mengikuti standar industri.",
      "Menyusun kurikulum dan materi ajar dari nol yang memadukan teori (algoritma, logika, percabangan, perulangan, fungsi) dengan praktik langsung dalam satu alur belajar terstruktur.",
      "Mendampingi sesi debugging intensif yang membantu siswa menyelesaikan kendala teknis secara mandiri — membiasakan pola pikir problem-solving, bukan sekadar menghafal kode.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  {
    organization: "PT Achivon Prestasi Abadi",
    role: "Web Developer",
    kind: "Kontrak",
    period: "Jul — Okt 2025",
    location: "Jakarta, Indonesia",
    summary:
      "Mengembangkan sistem absensi dan manajemen data karyawan dari nol, mentransformasi proses HR yang sebelumnya serba manual menjadi otomatis dan terpusat.",
    achievements: [
      "Merancang dan membangun sistem absensi HR berbasis web (CodeIgniter 3 + MySQL + jQuery) yang dipakai karyawan untuk pencatatan kehadiran dan pengisian data diri secara digital.",
      "Mengotomatisasi rekapitulasi laporan absensi bulanan yang sebelumnya dikerjakan manual — menghemat waktu kerja tim HR hingga 80% setiap bulannya (dari hitungan jam menjadi hitungan menit).",
      "Mengimplementasikan modul manajemen data karyawan, form pendaftaran pegawai baru, dan dashboard rekapitulasi yang langsung bisa digunakan tanpa perlu pelatihan terpisah.",
    ],
    stack: ["CodeIgniter 3", "PHP", "MySQL", "jQuery", "Bootstrap"],
  },
];
