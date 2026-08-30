export type Language = "en" | "id";

export interface TranslationSchema {
  site: {
    role: string;
    tagline: string;
    location: string;
    workPreference: string;
    availabilityLabel: string;
    availabilityDetail: string;
    resumeUpdatedAt: string;
  };
  nav: {
    work: string;
    about: string;
    skills: string;
    experience: string;
    github: string;
    contact: string;
  };
  hero: {
    badge: string;
    viewWork: string;
    viewResume: string;
    github: string;
    contactMe: string;
    locationLabel: string;
    preferenceLabel: string;
    statusLabel: string;
  };
  selectedWork: {
    label: string;
    heading: string;
    intro: string;
    viewAll: string;
  };
  about: {
    label: string;
    heading: string;
    intro: string;
    p1: string;
    p2: string;
    p3: string;
    eventsLabel: string;
    eventsHeading: string;
    eventsIntro: string;
    next: string;
    highlights: {
      h1: { label: string; value: string; detail: string };
      h2: { label: string; value: string; detail: string };
      h3: { label: string; value: string; detail: string };
      h4: { label: string; value: string; detail: string };
    };
  };
  skills: {
    label: string;
    heading: string;
    intro: string;
    example: string;
    legend: string;
    groups: {
      frontend: string;
      backend: string;
      database: string;
      mobile: string;
      tools: string;
    };
  };
  experience: {
    label: string;
    heading: string;
    intro: string;
    items: Array<{
      role: string;
      kind: string;
      period: string;
      summary: string;
      achievements: string[];
    }>;
  };
  github: {
    label: string;
    heading: string;
    introLive: string;
    introStatic: string;
    openProfile: string;
    publicRepos: string;
    followers: string;
    following: string;
    featured: string;
    recent: string;
    notice: string;
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    downloadCv: string;
    cvUpdated: string;
    allLinks: string;
  };
  footer: {
    quote: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    site: {
      role: "Full-Stack Web Developer",
      tagline:
        "I'm a full-stack web developer building web applications and backend systems with Laravel, Next.js, CodeIgniter, and MySQL, with practical experience in building production HR systems and mentoring student developers.",
      location: "Jakarta, Indonesia",
      workPreference: "On-site / Hybrid",
      availabilityLabel: "Available for opportunities",
      availabilityDetail: "Full-time · Junior to Mid-level",
      resumeUpdatedAt: "August 2026",
    },
    nav: {
      work: "Work",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      github: "GitHub",
      contact: "Contact",
    },
    hero: {
      badge: "Portfolio · Full-Stack Web Developer",
      viewWork: "View Selected Work",
      viewResume: "View Resume",
      github: "GitHub",
      contactMe: "Contact Me",
      locationLabel: "Location",
      preferenceLabel: "Preference",
      statusLabel: "Status",
    },
    selectedWork: {
      label: "Selected Work",
      heading: "Selected projects I've built",
      intro: "Each project features a detailed case study explaining the context, engineering decisions, and technical implementation details.",
      viewAll: "View all projects",
    },
    about: {
      label: "About Me",
      heading: "Background & Engineering Focus",
      intro: "Brief background, developer community engagement, and tech conference & workshop documentation.",
      p1: "I am a Full-Stack Web Developer who not only loves crafting clean code, but is also passionate about continuous learning through tech communities and developer summits.",
      p2: "I actively attend various tech conferences, seminars, and developer workshops—such as Qwen x buildclub.ai Summit, OpenClaw Meetup JKT #1, TiDB x Buildclub.ai Meetup, mem9 Build Night, Build with TRAE @Jakarta, and Claude Indonesia Community Launch—to stay at the forefront of AI, distributed data architecture, modern web performance, and software engineering best practices.",
      p3: "For me, attending tech events is the best way to connect with industry practitioners, exchange ideas on problem-solving, and absorb best practices that I directly apply to production-grade applications.",
      eventsLabel: "Tech Events",
      eventsHeading: "Tech Conferences & Summits",
      eventsIntro: "Expanding software engineering perspectives through active presence at tech summits, AI workshops, and developer meetups. Click the photo deck to cycle through photos.",
      next: "Next",
      highlights: {
        h1: { label: "Core Focus", value: "Full-Stack Web Dev", detail: "Laravel, Next.js, React, TypeScript, PHP & MySQL." },
        h2: { label: "Community & Events", value: "Tech Summits & Meetups", detail: "Regular attendee at AI & web developer conferences." },
        h3: { label: "Engineering Standards", value: "Clean Code & Performance", detail: "Modular system design and precision UI/UX." },
        h4: { label: "Availability", value: "Full-Time Roles", detail: "Open for On-site / Hybrid positions in Jakarta." },
      },
    },
    skills: {
      label: "Skills & Stack",
      heading: "Technologies & Engineering Tools",
      intro: "Technologies used across production systems and real-world applications.",
      example: "Example",
      legend: "= core skills & primary tech stack.",
      groups: {
        frontend: "Crafting clean, responsive, and high-performance UI from scratch and modern frameworks.",
        backend: "Production experience across PHP and Node.js ecosystems—building REST APIs and server-side architectures.",
        database: "Designing relational schemas, complex queries, and integrating cloud BaaS solutions.",
        mobile: "Building cross-platform and native mobile applications.",
        tools: "Daily toolkit for version control, API testing, dev environments, deployment, and workflow automation.",
      },
    },
    experience: {
      label: "Experience",
      heading: "Work & Engineering History",
      intro: "Ordered chronologically. Demonstrating measurable impact, production delivery, and technical growth.",
      items: [
        {
          role: "IT Instructor",
          kind: "Contract",
          period: "Oct 2025 — Jan 2026",
          summary: "Taught core computer science concepts and web development to vocational high school students for a full semester—from algorithm fundamentals to building end-to-end applications.",
          achievements: [
            "Mentored students in building functional web applications with Laravel 11, covering CRUD, authentication, routing, migrations, and relational database design following industry standards.",
            "Designed a structured curriculum and learning path from scratch combining fundamental logic, data structures, and hands-on coding exercises.",
            "Facilitated intensive debugging & pair programming sessions to cultivate algorithmic problem-solving mindsets.",
          ],
        },
        {
          role: "Web Developer",
          kind: "Contract",
          period: "Jul — Oct 2025",
          summary: "Developed a production HR attendance and employee management system from scratch, transforming manual administrative processes into an automated, centralized digital platform.",
          achievements: [
            "Architected and deployed a web-based HR system (CodeIgniter 3 + MySQL + jQuery) for daily attendance tracking and employee records.",
            "Automated monthly attendance report generation previously handled manually—reducing HR administrative workload by 80% (from hours to minutes).",
            "Implemented onboarding modules, employee profiles, and real-time reporting dashboards with zero downtime.",
          ],
        },
      ],
    },
    github: {
      label: "Building in Public",
      heading: "GitHub Activity",
      introLive: "Fetched directly from GitHub API and refreshed automatically every few hours.",
      introStatic: "Featured open source repositories showcasing development practices.",
      openProfile: "Open Profile",
      publicRepos: "Public Repositories",
      followers: "Followers",
      following: "Following",
      featured: "Featured Repositories",
      recent: "Recently Updated",
      notice: "Private repository contributions are excluded. Showing public activity on ",
    },
    contact: {
      label: "Contact",
      heading: "Have an open role, project, or collaboration? Let's talk.",
      intro: "The fastest way to reach me is via email—I usually reply within 24 hours. Feel free to check out my LinkedIn and CV for background details.",
      downloadCv: "Download CV",
      cvUpdated: "CV updated",
      allLinks: "All Links",
    },
    footer: {
      quote: "Repetition until it becomes technique.",
      copyright: "Built with Next.js & Tailwind CSS",
    },
  },
  id: {
    site: {
      role: "Full-Stack Web Developer",
      tagline:
        "Saya seorang full-stack web developer yang membangun aplikasi web dan sistem backend dengan Laravel, Next.js, CodeIgniter, dan MySQL, dengan pengalaman praktis membangun sistem HR produksi dan membimbing siswa pengembang.",
      location: "Jakarta, Indonesia",
      workPreference: "On-site / Hybrid",
      availabilityLabel: "Tersedia untuk peluang kerja",
      availabilityDetail: "Full-time · Junior hingga Mid-level",
      resumeUpdatedAt: "Agustus 2026",
    },
    nav: {
      work: "Karya",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      github: "GitHub",
      contact: "Kontak",
    },
    hero: {
      badge: "Portfolio · Full-Stack Web Developer",
      viewWork: "Lihat Karya Pilihan",
      viewResume: "Lihat Resume",
      github: "GitHub",
      contactMe: "Hubungi Saya",
      locationLabel: "Lokasi",
      preferenceLabel: "Preferensi",
      statusLabel: "Status",
    },
    selectedWork: {
      label: "Karya Pilihan",
      heading: "Beberapa hal yang saya bangun",
      intro: "Setiap proyek memiliki halaman studi kasus lengkap yang menjelaskan konteks, keputusan teknis, dan detail implementasinya.",
      viewAll: "Lihat semua proyek",
    },
    about: {
      label: "Tentang Saya",
      heading: "Latar Belakang & Fokus Rekayasa",
      intro: "Latar belakang singkat, keterlibatan komunitas pengembang, dan dokumentasi konferensi & workshop teknologi.",
      p1: "Saya adalah seorang Full-Stack Web Developer yang tidak hanya aktif menulis kode bersih, tetapi juga bersemangat untuk terus berkembang lewat komunitas dan event teknologi.",
      p2: "Saya rutin mengikuti berbagai tech conference, seminar, dan workshop pengembang—seperti Qwen x buildclub.ai Summit, OpenClaw Meetup JKT #1, TiDB x Buildclub.ai Meetup, mem9 Build Night, Build with TRAE @Jakarta, dan Claude Indonesia Community Launch—untuk memperluas wawasan mengenai AI, arsitektur data terdistribusi, performa web modern, dan tren rekayasa perangkat lunak terbaru.",
      p3: "Bagi saya, menghadiri event teknologi adalah cara terbaik untuk berdiskusi dengan praktisi industri, bertukar pikiran tentang problem-solving, serta menyerap praktik terbaik yang langsung saya terapkan pada proyek-proyek produksi yang saya bangun.",
      eventsLabel: "Dokumentasi Event",
      eventsHeading: "Konferensi & Summit Teknologi",
      eventsIntro: "Meningkatkan keterampilan rekayasa perangkat lunak melalui kehadiran di berbagai tech summit, workshop AI, dan meetup developer. Klik tumpukan foto untuk melihat foto selanjutnya.",
      next: "Lanjut",
      highlights: {
        h1: { label: "Fokus Utama", value: "Full-Stack Web Dev", detail: "Laravel, Next.js, React, TypeScript, PHP & MySQL." },
        h2: { label: "Komunitas & Event", value: "Tech Summits & Meetups", detail: "Rutin menghadiri konferensi AI & web developer." },
        h3: { label: "Prinsip Kerja", value: "Kode Bersih & Performa", detail: "Struktur arsitektur modular dan UI/UX presisi." },
        h4: { label: "Status Ketersediaan", value: "Peran Full-Time", detail: "Terbuka untuk posisi On-site / Hybrid di Jakarta." },
      },
    },
    skills: {
      label: "Keahlian & Stack",
      heading: "Teknologi & Alat Rekayasa",
      intro: "Teknologi yang benar-benar pernah saya pakai di proyek nyata dan sistem produksi.",
      example: "Contoh",
      legend: "= keahlian inti & stack utama.",
      groups: {
        frontend: "Nyaman membangun UI yang rapi, responsif, dan performan dari nol maupun dengan framework.",
        backend: "Pengalaman produksi di ekosistem PHP maupun Node.js—membangun REST API dan arsitektur server-side.",
        database: "Merancang skema relasional, query kompleks, serta integrasi layanan cloud BaaS.",
        mobile: "Membangun aplikasi mobile cross-platform dan native.",
        tools: "Alat sehari-hari untuk versioning, pengujian API, lingkungan pengembangan, deployment, dan otomatisasi.",
      },
    },
    experience: {
      label: "Pengalaman",
      heading: "Riwayat Kerja & Rekayasa",
      intro: "Diurutkan dari yang terbaru. Menunjukkan dampak terukur, pengiriman sistem produksi, dan pertumbuhan teknis.",
      items: [
        {
          role: "IT Instructor",
          kind: "Kontrak",
          period: "Okt 2025 — Jan 2026",
          summary: "Mengajar dasar ilmu komputer dan pengembangan aplikasi web kepada siswa SMK selama satu semester penuh—dari teori algoritma hingga praktik membangun aplikasi utuh.",
          achievements: [
            "Membimbing siswa membangun aplikasi web fungsional menggunakan Laravel 11, mencakup CRUD, autentikasi, routing, migrasi, dan relasi database sesuai standar industri.",
            "Menyusun kurikulum dan materi ajar dari nol yang memadukan logika dasar, struktur data, dan latihan koding praktis.",
            "Mendampingi sesi debugging intensif & pair programming untuk membiasakan pola pikir problem-solving.",
          ],
        },
        {
          role: "Web Developer",
          kind: "Kontrak",
          period: "Jul — Okt 2025",
          summary: "Mengembangkan sistem absensi HR dan manajemen data karyawan dari nol, mentransformasi proses administratif manual menjadi platform digital terpusat dan otomatis.",
          achievements: [
            "Merancang dan membangun sistem absensi HR berbasis web (CodeIgniter 3 + MySQL + jQuery) untuk pencatatan kehadiran dan data karyawan.",
            "Mengotomatisasi rekapitulasi laporan absensi bulanan manual—menghemat waktu kerja tim HR hingga 80% (dari hitungan jam menjadi hitungan menit).",
            "Mengimplementasikan modul onboarding, profil karyawan, dan dashboard rekapitulasi tanpa downtime.",
          ],
        },
      ],
    },
    github: {
      label: "Building in Public",
      heading: "Aktivitas GitHub",
      introLive: "Diambil langsung dari GitHub API dan disegarkan otomatis setiap beberapa jam.",
      introStatic: "Repository pilihan yang paling menggambarkan cara saya bekerja.",
      openProfile: "Buka Profil",
      publicRepos: "Repository Publik",
      followers: "Pengikut",
      following: "Mengikuti",
      featured: "Repository Unggulan",
      recent: "Baru Diperbarui",
      notice: "Kontribusi pada repository privat tidak ditampilkan di sini. Yang terlihat hanya aktivitas publik di ",
    },
    contact: {
      label: "Kontak",
      heading: "Ada posisi, proyek, atau kolaborasi? Mari bicara.",
      intro: "Cara paling cepat adalah lewat email—biasanya saya balas dalam 24 jam. Jangan ragu melihat LinkedIn dan CV saya untuk detail riwayat.",
      downloadCv: "Unduh CV",
      cvUpdated: "CV diperbarui",
      allLinks: "Semua Tautan",
    },
    footer: {
      quote: "Pengulangan sampai menjadi teknik.",
      copyright: "Dibangun dengan Next.js & Tailwind CSS",
    },
  },
};
