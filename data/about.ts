/**
 * Isi section About (PRD 10.4).
 *
 * NADA TULISAN: personal, jujur, profesional, tidak formal berlebihan.
 * Hindari klaim seperti "expert" atau "passionate about technology" — itu tidak
 * memberi informasi apa pun ke recruiter.
 *
 * PANJANG: 3–4 paragraf pendek sudah cukup. Jangan menyalin seluruh isi CV;
 * tugas section ini hanya memberi konteks, bukan menggantikan CV.
 *
 * [GANTI] Semua teks di bawah ini dengan versimu sendiri.
 */

export const about = {
  /** Ringkasan satu baris yang tampil sebagai intro di kolom kiri. */
  intro:
    "Latar belakang singkat, cara saya bekerja, dan jenis peluang yang sedang saya cari.",

  /** Paragraf utama. Tiap string = satu paragraf. */
  paragraphs: [
    "Saya mulai menulis kode karena penasaran bagaimana sebuah halaman web bisa berubah saat diklik. Rasa penasaran itu berlanjut menjadi kebiasaan membangun: sekarang sebagian besar waktu saya habis untuk mengubah desain menjadi antarmuka yang benar-benar bisa dipakai orang.",
    "Fokus saya di frontend, khususnya React dan Next.js. Yang paling saya perhatikan bukan tampilannya saja, tapi apakah halamannya cepat dibuka di ponsel biasa, apakah bisa dipakai lewat keyboard, dan apakah orang yang tidak terbiasa dengan teknologi tetap paham cara memakainya.",
    "Cara saya bekerja cenderung berurutan: memahami masalahnya dulu, membuat versi paling sederhana yang jalan, baru menambah detail. Saya lebih suka menulis kode yang mudah dibaca orang lain daripada kode yang pintar tapi sulit diubah. Kalau ada keputusan teknis yang tidak jelas alasannya, saya catat alasannya.",
    "Sekarang saya mencari tempat yang punya code review serius dan rekan yang bersedia menjelaskan alasan di balik keputusan mereka. Saya masih di tahap belajar cepat, dan lingkungan seperti itu jauh lebih berharga bagi saya daripada daftar teknologi yang panjang.",
  ],

  /** Poin ringkas yang bisa dipindai cepat. Maksimal 4 supaya tetap terbaca. */
  highlights: [
    {
      label: "Fokus",
      value: "Frontend engineering",
      detail: "React, Next.js, TypeScript, dan CSS modern.",
    },
    {
      label: "Yang saya jaga",
      value: "Performa & aksesibilitas",
      detail: "Target Lighthouse di atas 90 dan bisa dipakai lewat keyboard.",
    },
    {
      label: "Sedang dipelajari",
      value: "Arsitektur data & caching",
      detail: "Strategi rendering, revalidasi, dan batas server–client.",
    },
    {
      label: "Dicari",
      value: "Peran full-time",
      detail: "Tim yang punya budaya code review dan mentoring.",
    },
  ],
};
