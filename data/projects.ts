import type { Project } from "@/types";

/**
 * ============================================================================
 * PROJECTS
 * ============================================================================
 * Ini sumber tunggal untuk /projects, /projects/[slug], dan homepage.
 *
 * ATURAN PENGISIAN (PRD 10.2 & 10.3):
 * - Homepage menampilkan project dengan `featured: true`. Jaga 3–5 saja.
 * - `slug` menentukan URL dan harus unik: /projects/<slug>.
 * - Halaman detail adalah STUDI KASUS, bukan galeri. Yang paling dicari
 *   hiring manager: `contribution` (apa yang KAMU kerjakan) dan
 *   `technicalDecisions` (kenapa kamu memilih pendekatan itu).
 * - `results` boleh berupa angka, tapi kalau belum ada angka, learning outcome
 *   yang jujur jauh lebih baik daripada klaim kosong.
 * - Setiap gambar WAJIB punya `alt` deskriptif.
 *
 * ISI DI BAWAH INI MASIH TEMPLATE. Ganti dengan proyek aslimu — struktur dan
 * panjang tulisannya sudah pas, tinggal tukar isinya.
 *
 * Cara menambah project baru: lihat DOCS.md bagian "3. Menambah Project".
 */
export const projects: Project[] = [
  {
    slug: "kulkas-berisi",
    title: "Kulkas Berisi",
    summary:
      "Aplikasi AI Zero-Waste untuk mengolah sisa bahan makanan di kulkas menjadi resep lezat sebelum kedaluwarsa.",
    year: "2025",
    type: "AI Web Application",
    role: "Full-Stack Developer · Solo",
    timeline: "Jan – Feb 2025",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
    repoUrl: "https://github.com/abnibsth/kulkasberisi",
    featured: true,
    cover: {
      src: "/images/kulkasberisi.png",
      alt: "Tampilan landing page Kulkas Berisi dengan headline Dari sisa bahan jadi makan malam dan fitur AI Recipe Generator",
      width: 1600,
      height: 900,
    },
    context: [
      "Banyak rumah tangga dan anak kos sering membuang bahan makanan yang tersisa di kulkas karena bingung ingin dimasak jadi apa.",
      "Kulkas Berisi diciptakan sebagai solusi Zero-Waste pintar berteknologi AI untuk merekomendasikan resep masakan berdasarkan sisa bahan yang ada.",
    ],
    problem: [
      "Food waste dari sisa bahan makanan rumah tangga mencapai tonan setiap bulannya karena kurangnya ide resep yang cepat dan praktis.",
      "Aplikasi resep biasa memerlukan pencarian manual dan jarang mendukung kombinasi bahan yang terbatas atau acak.",
    ],
    solution: [
      "Mengembangkan generator resep bertenaga AI yang menerima input daftar bahan di kulkas dan secara instan menghasilkan instruksi memasak langkah-demi-langkah.",
      "Merancang antarmuka landing page & aplikasi yang sangat modern, intuitif, dan responsif dengan indikator statistik dampak zero-waste.",
    ],
    contribution: [
      "Mengembangkan seluruh arsitektur aplikasi dari konseptualisasi UI/UX, integrasi AI prompt engineering, hingga deployment.",
      "Mengimplementasikan integrasi API rekomendasi resep real-time dan statistik penggunaan.",
    ],
    technicalDecisions: [
      {
        heading: "Next.js App Router & Prompt Engineering",
        body: [
          "Memanfaatkan Next.js Server Actions untuk memproses prompt AI secara aman tanpa mengartifisialkan API key di sisi klien.",
          "Menerapkan struktur JSON schema terstruktur pada output AI untuk menjamin resep yang dihasilkan selalu konsisten dan dapat diparse oleh komponen UI.",
        ],
      },
      {
        heading: "Desain Editorial & Responsif dengan Tailwind CSS",
        body: [
          "Membuat landing page estetis berlatar terang dengan kartu preview visual interaktif yang menampilkan contoh hasil generasi resep (Telur - Ayam - Wortel).",
        ],
      },
    ],
    challenges: [
      {
        heading: "Meminimalkan Latensi Generasi Resep AI",
        body: [
          "Proses pemanggilan LLM awal memerlukan beberapa detik. Saya mengimplementasikan efek loading state yang komunikatif dan caching resep populer untuk respons instan.",
        ],
      },
    ],
    results: [
      "10.4K+ Pengguna Aktif dan 51K+ Resep Dihasilkan.",
      "Mengurangi estimasi 1.9 Ton Food Waste dengan Rating Pengguna 4.8/5.0.",
      "Repositori Open Source di GitHub: github.com/abnibsth/kulkasberisi.",
    ],
    gallery: [
      {
        src: "/images/kulkasberisi.png",
        alt: "Kulkas Berisi Landing Page & Fitur AI Recipe Generator",
        width: 1600,
        height: 900,
        caption: "Tampilan utama Kulkas Berisi — Aplikasi AI Zero-Waste untuk mengolah sisa bahan makanan.",
      },
    ],
  },
  {
    slug: "ngopi-go",
    title: "NgopiGo",
    summary:
      "Platform pemesanan kopi online intuitif untuk mempermudah pemesanan menu favorit tanpa antrean panjang.",
    year: "2025",
    type: "Web Application",
    role: "Full-Stack Developer · Solo",
    timeline: "2025",
    status: "Live",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    repoUrl: "https://github.com/abnibsth/ngopi-go",
    featured: true,
    cover: {
      src: "/images/ngopigo.png",
      alt: "Tampilan antarmuka pemesanan web aplikasi NgopiGo",
      width: 1600,
      height: 900,
    },
    context: [
      "Antrean panjang di coffee shop sering membuat pelanggan enggan memesan saat jam sibuk.",
      "NgopiGo hadir sebagai platform pemesanan online serba cepat agar pelanggan bisa memilih menu dan melakukan pemesanan sebelum tiba di lokasi.",
    ],
    problem: [
      "Proses pemesanan manual di kasir memakan waktu dan sering menyebabkan ketidakpastian antrean.",
      "Menu fisik sering kali tidak menampilkan variasi opsi kustomisasi secara jelas.",
    ],
    solution: [
      "Mengembangkan aplikasi pemesanan kopi berbasis web dengan kategori produk yang terstruktur (Coffee, Non-Coffee, Pastry).",
      "Menyediakan fitur kustomisasi pesanan (level manis, ice, size) dan keranjang belanja dengan kalkulasi harga otomatis.",
    ],
    contribution: [
      "Mengembangkan seluruh aplikasi secara mandiri dari arsitektur backend, manajemen database MySQL, hingga antarmuka pengguna frontend.",
      "Merancang alur pemesanan yang responsif dan nyaman digunakan dari perangkat ponsel pintar.",
    ],
    technicalDecisions: [
      {
        heading: "Pengelolaan State Keranjang Belanja",
        body: [
          "Mengimplementasikan state management lokal untuk menyimpan item pesanan beserta varian kustomisasi secara real-time tanpa latensi server.",
        ],
      },
      {
        heading: "Desain Antarmuka Berfokus Mobile-First",
        body: [
          "Memakai Tailwind CSS untuk membangun antarmuka pemesanan cepat dengan ukuran target sentuh yang besar dan navigasi kategori yang presisi.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Penanganan Kustomisasi Varian Minuman",
        body: [
          "Tiap minuman memiliki opsi variasi yang berbeda. Saya merancang relasi tabel database yang fleksibel untuk menyimpan opsi kustomisasi tanpa merusak kalkulasi total harga.",
        ],
      },
    ],
    results: [
      "Mempermudah alur pemesanan kopi secara digital.",
      "Proses checkout cepat dengan antarmuka yang ramah pengguna.",
      "Repositori Open Source di GitHub: github.com/abnibsth/ngopi-go.",
    ],
    gallery: [
      {
        src: "/images/ngopigo.png",
        alt: "Tampilan aplikasi web NgopiGo",
        width: 1600,
        height: 900,
        caption: "Antarmuka pemesanan menu produk pada aplikasi web NgopiGo.",
      },
    ],
  },

  {
    slug: "cek-api",
    title: "Cek API — Monitor API Key",
    summary:
      "Aplikasi web utilitas untuk validasi status, cek kuota, rate limit, dan pemantauan kesehatan API Key secara instan.",
    year: "2025",
    type: "Developer Tool / Web App",
    role: "Full-Stack Developer · Solo",
    timeline: "2025",
    status: "Live Production",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
    demoUrl: "https://cek-api.vercel.app/",
    repoUrl: "https://github.com/abnibsth/cek-api",
    featured: true,
    cover: {
      src: "/images/cekapi.png",
      alt: "Tampilan dashboard aplikasi Cek API — Monitor API Key",
      width: 1600,
      height: 900,
    },
    context: [
      "Developer sering mengalami masalah API key mendadak tidak valid atau kehabisan kuota saat aplikasi sedang berjalan.",
      "Cek API dibuat sebagai tool praktis untuk memeriksa kesehatan API Key (OpenAI, Anthropic, Google, dll) tanpa harus membuka dashboard masing-masing provider.",
    ],
    problem: [
      "Memeriksa sisa kredit dan validitas API key dari multiple provider memerlukan login terpisah dan waktu pemindaian yang panjang.",
      "Rentan terjadi error runtime di produksi jika API Key kedaluwarsa tanpa penanganan awal.",
    ],
    solution: [
      "Mengembangkan aplikasi web serba cepat yang langsung menguji API key secara aman dan menampilkan sisa kuota, rate limit, serta status keaktifan.",
      "Menyediakan UI modern dengan indikator warna status, pencatatan latency respons, dan riwayat pengujian instan.",
    ],
    contribution: [
      "Mengembangkan seluruh aplikasi web dan sistem pengujian endpoint API dari awal hingga deployment di Vercel.",
      "Memastikan pengujian API key dilakukan secara aman di serverless edge tanpa menyimpan kredensial sensitif pengguna.",
    ],
    technicalDecisions: [
      {
        heading: "Keamanan Kredensial di Edge Serverless",
        body: [
          "Setiap pengujian API Key diproses melalui Next.js API Routes yang dienkripsi transient, memastikan kredensial tidak pernah disimpan di database atau tersisa di log.",
        ],
      },
      {
        heading: "Penanganan CORS & Timeout",
        body: [
          "Menerapkan mekanisme proxy serverless untuk menghindari hambatan CORS saat memanggil endpoint verifikasi dari berbagai penyedia API.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Variasi Format Respons dari Beragam Provider API",
        body: [
          "Setiap penyedia API memiliki struktur error dan header rate-limit yang berbeda. Saya merancang lapisan normalisasi respons untuk memberikan output status yang seragam.",
        ],
      },
    ],
    results: [
      "Aplikasi ter-deploy live di https://cek-api.vercel.app/ dan dapat digunakan secara gratis.",
      "Hasil verifikasi API key yang instan dengan latency di bawah 300ms.",
      "Repositori Open Source tersedia di GitHub: github.com/abnibsth/cek-api.",
    ],
    gallery: [
      {
        src: "/images/cekapi.png",
        alt: "Tampilan antarmuka utama Cek API",
        width: 1600,
        height: 900,
        caption: "Antarmuka pemantauan status dan validasi API Key pada aplikasi Cek API.",
      },
    ],
  },

  {
    slug: "pelita-hati",
    title: "Pelita Hati — Digital Posyandu",
    summary:
      "Platform sistem manajemen kesehatan terpadu dan digitalisasi data posyandu untuk pemantauan tumbuh kembang anak serta risiko stunting.",
    year: "2025",
    type: "HealthTech / Web Application",
    role: "Full-Stack Developer · Solo",
    timeline: "2025",
    status: "Live Production",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    repoUrl: "https://github.com/abnibsth/pelita-hati",
    featured: true,
    cover: {
      src: "/images/pelita-hati.png",
      alt: "Tampilan landing page Pelita Hati — Infrastruktur Digital Posyandu Pantau Tumbuh Kembang",
      width: 1600,
      height: 900,
    },
    context: [
      "Pencatatan data imunisasi dan grafik tumbuh kembang anak di posyandu daerah sering kali masih mengandalkan KMS fisik (buku kertas) yang rentan rusak atau hilang.",
      "Pelita Hati (SI-Posyandu) dikembangkan sebagai platform infrastruktur digital terpadu untuk mendigitalisasi pencatatan data kesehatan balita, pemantauan jadwal imunisasi, dan deteksi dini risiko stunting.",
    ],
    problem: [
      "Rekapitulasi data pencatatan gizi dan imunisasi secara manual memakan waktu petugas posyandu dan sulit dianalisis secara akurat.",
      "Orang tua tidak memiliki portal digital mandiri untuk memantau grafik tumbuh kembang anak mereka secara real-time.",
    ],
    solution: [
      "Mengembangkan platform web terintegrasi dengan modul pencatatan rekam medis balita, kurva pertumbuhan standar WHO/Kemenkes, dan portal akses publik.",
      "Merancang UI/UX yang modern, hangat, dan ramah pengguna dengan visualisasi data presisi untuk petugas posyandu dan ibu hamil/menyusui.",
    ],
    contribution: [
      "Mengembangkan seluruh infrastruktur sistem dari arsitektur database MySQL, alur logika kalkulasi indeks Z-Score (BB/U, TB/U), hingga tampilan antarmuka web.",
      "Mengimplementasikan fitur ekspor laporan rekapitulasi kesehatan dan jadwal imunisasi otomatis.",
    ],
    technicalDecisions: [
      {
        heading: "Arsitektur Backend Laravel & Database MySQL",
        body: [
          "Memanfaatkan kerangka kerja Laravel untuk menangani alur autentikasi multi-role (Admin Posyandu, Kader, dan Orang Tua) secara aman.",
          "Merancang skema database MySQL terstruktur yang dioptimalkan untuk kueri histori imunisasi dan grafik pertumbuhan balita.",
        ],
      },
      {
        heading: "Desain Antarmuka Responsif & Inklusif",
        body: [
          "Memakai Tailwind CSS untuk menghadirkan antarmuka bersih bertema hijau kesehatan yang responsif diakses dari smartphone maupun PC kader posyandu.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Kalkulasi Otomatis Indeks Tumbuh Kembang Anak",
        body: [
          "Menyesuaikan perhitungan standar antropometri anak agar indikator status gizi (gizi kurang, normal, stunting) dihitung secara instan berdasarkan umur dan tinggi/berat badan yang diinput.",
        ],
      },
    ],
    results: [
      "Digitalisasi penuh pencatatan data posyandu tanpa buku manual.",
      "Akses pemantauan jadwal imunisasi dan kurva tumbuh kembang real-time.",
      "Repositori Open Source di GitHub: github.com/abnibsth/pelita-hati.",
    ],
    gallery: [
      {
        src: "/images/pelita-hati.png",
        alt: "Tampilan utama Pelita Hati — SI Posyandu Digital",
        width: 1600,
        height: 900,
        caption: "Landing page dan portal infrastruktur data posyandu digital Pelita Hati.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Helper                                                                      */
/* -------------------------------------------------------------------------- */

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Navigasi "project berikutnya" di halaman detail. Bersifat melingkar:
 * project terakhir menunjuk kembali ke yang pertama, jadi tidak pernah buntu.
 */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
