/**
 * Isi section About (PRD 10.4).
 *
 * Konteks personal, preferensi kerja, dan dokumentasi event teknologi.
 */

export const about = {
  /** Ringkasan satu baris yang tampil sebagai intro di kolom kiri. */
  intro:
    "Latar belakang singkat, antusiasme pada komunitas developer, serta kegiatan menghadiri event & konferensi teknologi.",

  /** Paragraf utama. Tiap string = satu paragraf. */
  paragraphs: [
    "Saya adalah seorang Full-Stack Web Developer yang tidak hanya aktif menulis kode, tetapi juga bersemangat untuk terus berkembang lewat komunitas dan event teknologi.",
    "Saya rutin mengikuti berbagai tech conference, seminar, dan workshop pengembang—seperti Qwen x buildclub.ai Summit, OpenClaw Meetup JKT #1, TiDB x Buildclub.ai Meetup, mem9 Build Night, Build with TRAE @Jakarta, dan Claude Indonesia Community Launch—untuk memperluas wawasan mengenai AI, arsitektur data terdistribusi, performa web modern, dan tren rekayasa perangkat lunak terbaru.",
    "Bagi saya, menghadiri event teknologi adalah cara terbaik untuk berdiskusi dengan praktisi industri, bertukar pikiran tentang problem-solving, serta menyerap praktik terbaik yang langsung saya terapkan pada proyek-proyek yang saya bangun.",
  ],

  /** Foto & dokumentasi event teknologi */
  events: [
    {
      title: "Qwen x buildclub.ai (Getting started with Qwen 2.5)",
      location: "Jakarta, Indonesia",
      category: "AI & LLM Workshop",
      images: [
        "/images/events/qwen/qwen1.png",
        "/images/events/qwen/qwen2.png",
        "/images/events/qwen/qwen3.png",
        "/images/events/qwen/qwen4.png",
      ],
      caption: "Workshop penjelajahan dan integrasi model Qwen 2.5 bersama komunitas buildclub.ai.",
    },
    {
      title: "OpenClaw Meetup JKT #1 🦞",
      location: "Jakarta, Indonesia",
      category: "Developer Meetup",
      images: [
        "/images/abni-photo.jpg",
        "/images/events/openclaw1/opencalw1.png",
        "/images/events/openclaw1/openclaw2.png",
        "/images/events/openclaw1/openclaw3.png",
        "/images/events/openclaw1/openclaw4.png",
      ],
      caption: "Dokumentasi & sesi meetup pengembang OpenClaw Meetup JKT #1 di Jakarta.",
    },
    {
      title: "TiDB x Buildclub.ai Meetup : Mastering Best Practices in Data & AI",
      location: "Jakarta, Indonesia",
      category: "Data & AI Meetup",
      images: [
        "/images/events/TIDB/tidb1.png",
        "/images/events/TIDB/tidb2.png",
        "/images/events/TIDB/tidb3.png",
        "/images/events/TIDB/tidb4.png",
        "/images/events/TIDB/tidb5.png",
        "/images/events/TIDB/tidb6.png",
      ],
      caption: "Meetup pembelajaran praktik terbaik arsitektur data terdistribusi TiDB & integrasi AI bersama Buildclub.ai.",
    },
    {
      title: "Give Your AI a Forever Memory: mem9 Setup & Build Night",
      location: "Jakarta, Indonesia",
      category: "AI Build Night",
      images: [
        "/images/events/mem9/mem1.png",
        "/images/events/mem9/mem2.png",
        "/images/events/mem9/mem3.png",
        "/images/events/mem9/mem4.png",
      ],
      caption: "Sesi hands-on setup dan eksplorasi memori AI jangka panjang pada event mem9 Setup & Build Night.",
    },
    {
      title: "Build with TRAE @Jakarta",
      location: "Jakarta, Indonesia",
      category: "AI IDE Workshop",
      images: [
        "/images/events/trae/trae1.png",
        "/images/events/trae/trae2.png",
        "/images/events/trae/trae3.png",
        "/images/events/trae/trae4.png",
      ],
      caption: "Sesi workshop dan eksplorasi fitur rekayasa perangkat lunak bertenaga AI pada event Build with TRAE @Jakarta.",
    },
    {
      title: "Indonesia AI Community x Claude Indonesia Community: LAUNCH + AI Workshop",
      location: "Jakarta, Indonesia",
      category: "Claude AI Launch",
      images: [
        "/images/events/claude/claude1.png",
        "/images/events/claude/claude2.png",
        "/images/events/claude/claude3.png",
        "/images/events/claude/claude4.png",
        "/images/events/claude/claude5.png",
        "/images/events/claude/claude6.png",
        "/images/events/claude/claude7.png",
      ],
      caption: "Peluncuran resmi & workshop integrasi Claude AI bersama Indonesia AI Community dan Claude Indonesia Community.",
    },
  ],

  /** Poin ringkas yang bisa dipindai cepat. */
  highlights: [
    {
      label: "Fokus Utama",
      value: "Full-Stack Web Dev",
      detail: "Laravel, Next.js, React, TypeScript, PHP & MySQL.",
    },
    {
      label: "Komunitas & Event",
      value: "Tech Events & Summit",
      detail: "Rutin menghadiri konferensi & workshop AI / Web.",
    },
    {
      label: "Prinsip Kerja",
      value: "Kode Bersih & Performa",
      detail: "Struktur arsitektur modular dan UI/UX presisi.",
    },
    {
      label: "Status Ketersediaan",
      value: "Peran Full-Time",
      detail: "Terbuka untuk posisi On-site / Hybrid di Jakarta.",
    },
  ],
};
