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
    slug: "sistem-kasir-umkm",
    title: "Sistem Kasir UMKM",
    summary:
      "Aplikasi kasir berbasis web untuk warung kecil, dipakai offline-first di perangkat murah.",
    year: "2025",
    type: "Web App",
    role: "Frontend Developer · Solo",
    timeline: "Mar – Mei 2025",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/sistem-kasir-umkm",
    featured: true,
    cover: {
      src: "/images/projects/project-01-cover.svg",
      alt: "Tampilan halaman transaksi Sistem Kasir UMKM dengan daftar produk di kiri dan ringkasan pembayaran di kanan",
      width: 1600,
      height: 1000,
    },
    context: [
      "Pemilik warung di sekitar tempat tinggal saya masih mencatat transaksi di buku tulis. Rekap harian memakan waktu dan sering selisih.",
      "Target penggunanya bukan orang teknis, dan perangkat yang dipakai rata-rata ponsel Android kelas bawah dengan koneksi tidak stabil.",
    ],
    problem: [
      "Aplikasi kasir yang ada di pasaran terasa berat, butuh koneksi stabil, dan penuh fitur yang tidak dipakai warung kecil.",
      "Kesalahan hitung manual terjadi hampir setiap hari, terutama saat jam ramai.",
    ],
    solution: [
      "Saya membuat antarmuka transaksi satu layar: pilih produk, jumlah otomatis terhitung, selesai dalam tiga ketukan.",
      "Data transaksi disimpan lebih dulu di perangkat, lalu disinkronkan ke server saat koneksi tersedia, sehingga kasir tidak pernah terhenti.",
      "Rekap harian dibuat otomatis dan bisa diekspor, menggantikan proses pencatatan manual.",
    ],
    contribution: [
      "Saya mengerjakan proyek ini sendirian, dari riset ke dua pemilik warung, wireframe di Figma, sampai deploy.",
      "Bagian yang paling banyak menyita waktu adalah logika sinkronisasi offline dan memastikan antarmuka tetap terbaca di layar 5 inci.",
      "Saya juga menulis panduan pemakaian satu halaman karena penggunanya tidak terbiasa dengan istilah teknis.",
    ],
    technicalDecisions: [
      {
        heading: "Kenapa Next.js App Router",
        body: [
          "Sebagian besar halaman hanya perlu dirender sekali dan jarang berubah, jadi Server Component sebagai default memangkas JavaScript yang dikirim ke perangkat kelas bawah.",
          "Halaman transaksi yang butuh interaksi cepat saya isolasi sebagai Client Component supaya sisanya tetap statis.",
        ],
      },
      {
        heading: "Penyimpanan lokal sebelum server",
        body: [
          "Transaksi ditulis ke IndexedDB terlebih dahulu dan diberi status pending, baru dikirim ke server lewat antrean.",
          "Keputusan ini membuat kasir tetap bisa bekerja tanpa sinyal, dengan konsekuensi saya harus menangani konflik data saat sinkronisasi. Saya memilih strategi last-write-wins karena satu warung hanya punya satu kasir aktif.",
        ],
      },
      {
        heading: "Struktur komponen",
        body: [
          "Komponen dipisah berdasarkan fitur, bukan berdasarkan tipe, supaya menambah fitur baru tidak menyentuh banyak folder.",
          "Semua komponen kecil dibuat tanpa state internal dan menerima data lewat props, sehingga mudah diuji.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Sinkronisasi yang tidak boleh menggandakan transaksi",
        body: [
          "Percobaan pertama saya mengirim ulang antrean setiap kali koneksi pulih, dan itu menyebabkan transaksi ganda.",
          "Saya menyelesaikannya dengan memberi setiap transaksi ID yang dibuat di sisi klien, lalu server menolak ID yang sudah pernah masuk.",
        ],
      },
      {
        heading: "Antarmuka untuk pengguna non-teknis",
        body: [
          "Uji coba pertama gagal: pemilik warung tidak menemukan tombol simpan karena ikonnya terlalu abstrak.",
          "Saya mengganti semua ikon dengan label teks berbahasa Indonesia dan memperbesar target sentuh menjadi minimal 48 piksel.",
        ],
      },
    ],
    results: [
      "Dipakai harian oleh dua warung sejak Mei 2025.",
      "Rekap harian yang tadinya sekitar 20 menit menjadi langsung jadi.",
      "Lighthouse Performance 96 dan Accessibility 100 pada halaman transaksi.",
      "Pelajaran terbesar: keputusan teknis paling berdampak di proyek ini justru soal ukuran tombol, bukan soal framework.",
    ],
    gallery: [
      {
        src: "/images/projects/project-01-detail.svg",
        alt: "Layar rekap harian yang menampilkan total penjualan, jumlah transaksi, dan daftar produk terlaris",
        width: 1600,
        height: 1000,
        caption: "Rekap harian dibuat otomatis, menggantikan pencatatan di buku tulis.",
      },
    ],
  },

  {
    slug: "dashboard-analitik-konten",
    title: "Dashboard Analitik Konten",
    summary:
      "Dashboard yang merangkum performa artikel dari beberapa sumber data ke dalam satu tampilan.",
    year: "2025",
    type: "Dashboard",
    role: "Frontend Developer",
    timeline: "Jun – Agu 2025",
    status: "Selesai",
    stack: ["React", "TypeScript", "Node.js", "REST API", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/dashboard-analitik-konten",
    featured: true,
    cover: {
      src: "/images/projects/project-02-cover.svg",
      alt: "Dashboard analitik konten dengan grafik tren pembaca dan tabel peringkat artikel",
      width: 1600,
      height: 1000,
    },
    context: [
      "Tim konten harus membuka tiga tool berbeda setiap pagi hanya untuk tahu artikel mana yang perlu diperbaiki.",
      "Penggunanya adalah editor, bukan analis data, jadi tampilannya harus menjawab satu pertanyaan: apa yang harus dikerjakan hari ini.",
    ],
    problem: [
      "Data tersebar dan formatnya berbeda-beda, sehingga perbandingan antar sumber selalu manual lewat spreadsheet.",
      "Laporan mingguan sering telat karena proses penyalinan datanya panjang.",
    ],
    solution: [
      "Saya menyatukan seluruh sumber ke dalam satu bentuk data internal, lalu menampilkannya sebagai satu daftar prioritas.",
      "Setiap baris artikel langsung menunjukkan tren dan saran tindakan, bukan sekadar angka mentah.",
    ],
    contribution: [
      "Saya menangani seluruh sisi frontend dan merancang bentuk data internal yang dipakai bersama backend.",
      "Saya mengusulkan mengganti tampilan awal dari kumpulan grafik menjadi satu tabel prioritas, karena hasil wawancara menunjukkan editor tidak membaca grafik.",
      "Saya tidak mengerjakan pipeline pengambilan data dari sumber eksternal — itu dikerjakan rekan backend.",
    ],
    technicalDecisions: [
      {
        heading: "Normalisasi data di satu tempat",
        body: [
          "Setiap sumber punya nama field yang berbeda. Saya membuat satu lapisan adapter yang mengubah semuanya menjadi satu tipe TypeScript.",
          "Akibatnya, menambah sumber data baru hanya perlu satu file adapter dan tidak menyentuh komponen mana pun.",
        ],
      },
      {
        heading: "State management tanpa library tambahan",
        body: [
          "Kebutuhan state-nya sebenarnya server state, bukan client state, jadi saya menyimpannya di URL search params.",
          "Konsekuensinya bagus: filter jadi bisa dibagikan lewat link dan tombol back browser bekerja seperti yang diharapkan.",
        ],
      },
      {
        heading: "Grafik dibuat dengan SVG langsung",
        body: [
          "Library grafik yang saya coba menambah lebih dari 100 KB untuk dua jenis grafik sederhana.",
          "Saya menggantinya dengan SVG yang digambar manual. Bundle jauh lebih kecil, dengan konsekuensi saya harus menangani sendiri label sumbu dan tooltip.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Tabel dengan ribuan baris terasa berat",
        body: [
          "Render awal memakan waktu lebih dari dua detik saat data penuh.",
          "Saya menerapkan paginasi di sisi server dan hanya mengambil kolom yang benar-benar ditampilkan, sehingga waktu render turun ke bawah 300 milidetik.",
        ],
      },
      {
        heading: "Aksesibilitas tabel data",
        body: [
          "Versi awal memakai div dan tidak terbaca screen reader.",
          "Saya menulis ulang memakai elemen tabel semantik lengkap dengan scope pada header, dan menambahkan navigasi keyboard untuk kontrol sortir.",
        ],
      },
    ],
    results: [
      "Waktu penyusunan laporan mingguan turun dari sekitar dua jam menjadi di bawah 15 menit.",
      "Bundle JavaScript halaman utama tetap di bawah 120 KB setelah kompresi.",
      "Pelajaran terbesar: memahami cara kerja pengguna lebih menentukan hasil daripada memilih library grafik yang tepat.",
    ],
    gallery: [
      {
        src: "/images/projects/project-02-detail.svg",
        alt: "Tampilan tabel prioritas artikel dengan indikator tren naik dan turun di setiap baris",
        width: 1600,
        height: 1000,
        caption: "Tabel prioritas menggantikan kumpulan grafik di tampilan awal.",
      },
    ],
  },

  {
    slug: "katalog-produk-headless",
    title: "Katalog Produk Headless",
    summary:
      "Etalase produk yang dirender statis dengan revalidasi berkala, dipakai untuk katalog yang jarang berubah.",
    year: "2024",
    type: "Website",
    role: "Frontend Developer · Solo",
    timeline: "Okt – Des 2024",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/katalog-produk-headless",
    featured: true,
    cover: {
      src: "/images/projects/project-03-cover.svg",
      alt: "Halaman katalog produk dengan grid gambar besar dan panel filter di sisi kiri",
      width: 1600,
      height: 1000,
    },
    context: [
      "Sebuah brand lokal butuh katalog online yang cepat dibuka dari ponsel, tanpa keranjang belanja karena transaksinya lewat WhatsApp.",
      "Katalog hanya diperbarui beberapa kali sebulan, jadi rendering dinamis penuh tidak diperlukan.",
    ],
    problem: [
      "Situs sebelumnya dibangun di atas platform serbaguna dan butuh lebih dari lima detik untuk terbuka di jaringan 4G.",
      "Gambar produk diunggah tanpa kompresi, sehingga satu halaman bisa melebihi 8 MB.",
    ],
    solution: [
      "Semua halaman produk dirender saat build dan diperbarui berkala, jadi kunjungan pertama sudah menerima HTML jadi.",
      "Gambar diproses lewat pipeline optimasi bawaan dan disajikan dalam format modern dengan ukuran menyesuaikan layar.",
    ],
    contribution: [
      "Saya mengerjakan seluruh implementasi frontend dan integrasi ke API konten milik klien.",
      "Saya menyusun panduan ukuran gambar untuk tim klien supaya masalah gambar berat tidak berulang setelah serah terima.",
    ],
    technicalDecisions: [
      {
        heading: "Static generation dengan revalidasi",
        body: [
          "Karena data jarang berubah, halaman dibuat statis dan divalidasi ulang secara berkala.",
          "Ini membuat biaya hosting mendekati nol dan situs tetap hidup walaupun API konten sedang bermasalah.",
        ],
      },
      {
        heading: "Strategi gambar",
        body: [
          "Semua gambar melewati komponen Image bawaan dengan ukuran eksplisit untuk mencegah pergeseran layout.",
          "Gambar di paruh atas halaman diberi prioritas muat, sisanya lazy load.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Filter tanpa mengorbankan halaman statis",
        body: [
          "Filter kategori awalnya membuat halaman menjadi dinamis dan kehilangan keuntungan statis.",
          "Saya memindahkan filter ke sisi klien di atas data yang sudah dimuat, karena jumlah produknya masih di bawah dua ratus.",
        ],
      },
    ],
    results: [
      "Waktu muat di jaringan 4G turun dari sekitar lima detik menjadi di bawah satu setengah detik.",
      "Berat halaman katalog turun dari 8 MB ke sekitar 900 KB.",
      "Lighthouse Performance 98 pada halaman katalog.",
    ],
    gallery: [
      {
        src: "/images/projects/project-03-detail.svg",
        alt: "Halaman detail produk dengan foto besar di kiri dan informasi ukuran serta harga di kanan",
        width: 1600,
        height: 1000,
        caption:
          "Halaman detail produk dengan gambar dominan, sesuai arah visual editorial.",
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
