# Product Requirements Document

## Personal Portfolio Website

**Document Version:** 1.0
**Product Type:** Personal Portfolio Website
**Primary Goal:** Mendukung proses pencarian kerja
**Platform:** Web
**Framework:** Next.js
**Target Launch:** Menyesuaikan jadwal development

---

## 1. Product Overview

Website ini merupakan portfolio pribadi yang digunakan untuk memperkenalkan profil profesional, kemampuan teknis, pengalaman, dan proyek kepada recruiter, hiring manager, serta calon pemberi kerja.

Website akan menggunakan pendekatan visual **Editorial Personal Portfolio** dengan sentuhan modern developer. Desain akan mengutamakan tipografi besar, narasi personal, layout editorial, visual proyek yang kuat, serta integrasi GitHub untuk menunjukkan aktivitas pengembangan secara aktual.

Portfolio tidak hanya berfungsi sebagai kumpulan proyek, tetapi sebagai representasi profesional yang menjelaskan cara berpikir, proses kerja, kemampuan teknis, dan arah karier pemilik portfolio.

---

## 2. Background

Recruiter biasanya hanya memiliki waktu singkat untuk meninjau sebuah portfolio. Karena itu, website harus membantu pengunjung memahami informasi utama dengan cepat, yaitu:

* Siapa pemilik portfolio.
* Posisi atau bidang pekerjaan yang dituju.
* Kemampuan utama yang dimiliki.
* Proyek terbaik yang pernah dikerjakan.
* Kontribusi teknis dan aktivitas GitHub.
* Cara menghubungi pemilik portfolio.
* Cara mengunduh atau melihat CV.

Website harus terlihat personal dan berbeda dari template portfolio developer yang umum, tetapi tetap profesional, mudah dibaca, dan tidak membingungkan recruiter.

---

## 3. Product Goals

### 3.1 Primary Goals

1. Meningkatkan kredibilitas profesional pemilik portfolio.
2. Membantu recruiter memahami profil dan kemampuan dalam waktu kurang dari satu menit.
3. Menampilkan proyek terbaik dalam bentuk studi kasus singkat.
4. Menunjukkan konsistensi aktivitas coding melalui integrasi GitHub.
5. Mempermudah recruiter mengakses CV, LinkedIn, GitHub, dan kontak.
6. Memberikan pengalaman yang baik di desktop maupun perangkat mobile.

### 3.2 Secondary Goals

1. Membangun personal branding sebagai developer.
2. Menjadi pusat informasi profesional yang dapat dibagikan melalui satu tautan.
3. Menjadi dokumentasi perkembangan kemampuan dan proyek.
4. Mendukung peluang kerja, freelance, kolaborasi, dan networking.

---

## 4. Non-Goals

Website ini tidak ditujukan untuk:

* Menjadi platform blog kompleks pada versi pertama.
* Menjadi dashboard pengelolaan konten lengkap.
* Menjadi media sosial atau komunitas.
* Menampilkan seluruh repository GitHub tanpa kurasi.
* Menampilkan statistik yang tidak relevan bagi recruiter.
* Menjadi aplikasi dengan sistem login pengguna.
* Menyediakan fitur rekrutmen atau applicant tracking system.

---

## 5. Target Audience

### 5.1 Primary Audience

**Recruiter dan Talent Acquisition**

Kebutuhan utama:

* Memahami profil kandidat secara cepat.
* Melihat pengalaman dan proyek relevan.
* Mengakses CV dan LinkedIn.
* Menilai kesesuaian kandidat dengan posisi yang tersedia.

### 5.2 Secondary Audience

**Hiring Manager dan Engineering Manager**

Kebutuhan utama:

* Menilai kualitas implementasi proyek.
* Memahami keputusan teknis.
* Melihat struktur dan kualitas repository.
* Menilai teknologi yang dikuasai.
* Melihat aktivitas pengembangan terbaru.

### 5.3 Additional Audience

* Founder startup.
* Potential client.
* Developer lain.
* Rekan kolaborasi.
* Komunitas teknologi.

---

## 6. User Persona

### Persona 1: Recruiter

**Nama:** Recruitment Specialist
**Tujuan:** Menemukan kandidat developer yang sesuai dengan posisi terbuka.
**Perilaku:** Membuka portfolio selama sekitar 30–60 detik pada peninjauan awal.
**Kebutuhan:** Informasi cepat, CV, pengalaman, proyek, dan kontak.
**Pain Points:** Portfolio terlalu penuh animasi, sulit dinavigasi, atau tidak menjelaskan peran kandidat.

### Persona 2: Engineering Manager

**Nama:** Technical Hiring Manager
**Tujuan:** Menilai kompetensi teknis kandidat.
**Perilaku:** Membuka detail proyek dan repository GitHub.
**Kebutuhan:** Penjelasan kontribusi, teknologi, tantangan, dan keputusan teknis.
**Pain Points:** Proyek hanya berisi screenshot tanpa konteks atau repository tanpa dokumentasi.

---

## 7. Product Positioning

Portfolio akan diposisikan sebagai:

> An editorial developer portfolio that presents selected work, technical capabilities, and continuous GitHub activity in a personal and professional format.

Karakter produk:

* Personal.
* Editorial.
* Profesional.
* Modern.
* Technical.
* Recruiter-friendly.
* Tidak terasa seperti template generik.

---

## 8. Visual Direction

### 8.1 Design Style

Gaya desain utama adalah **Editorial Personal** dengan elemen visual developer modern.

Karakter visual:

* Tipografi besar dan dominan.
* Komposisi editorial.
* Layout asimetris yang tetap terstruktur.
* Penggunaan whitespace yang luas.
* Visual proyek berukuran besar.
* Navigasi sederhana.
* Animasi halus.
* Kontras warna yang kuat.
* Tampilan premium tetapi tetap fungsional.

### 8.2 Color Direction

Palet dasar:

* Off-white sebagai background utama.
* Hitam atau charcoal sebagai warna teks.
* Abu-abu lembut sebagai secondary surface.
* Satu accent color.

Pilihan accent color yang disarankan:

* Deep blue.
* Electric blue.
* Muted purple.
* Emerald green.
* Burnt orange.

Accent color hanya digunakan pada:

* Link aktif.
* Tombol utama.
* Hover state.
* Label.
* Highlight teks.
* Elemen dekoratif tertentu.

### 8.3 Typography

Rekomendasi kombinasi:

* Display atau serif font untuk heading.
* Sans-serif font untuk body dan interface.

Contoh:

* Heading: Instrument Serif, Playfair Display, atau Cormorant.
* Body: Geist, Inter, atau Manrope.

Tipografi harus tetap mudah dibaca dan tidak mengorbankan aksesibilitas.

### 8.4 Layout

* Maksimal content width sekitar 1.200–1.400 piksel.
* Section memiliki spacing besar.
* Mobile menggunakan single-column layout.
* Desktop dapat memakai grid editorial dua atau tiga kolom.
* Project section menggunakan visual yang dominan.
* Tidak menggunakan card secara berlebihan.

### 8.5 Animation

Animasi harus meningkatkan pengalaman, bukan mengganggu.

Animasi yang diperbolehkan:

* Fade-in.
* Text reveal.
* Image reveal.
* Hover transition.
* Smooth scrolling.
* Subtle parallax.
* Page transition ringan.

Animasi yang harus dihindari:

* Loading intro terlalu panjang.
* Cursor custom yang mengganggu.
* Animasi berulang tanpa tujuan.
* Parallax ekstrem.
* Scroll hijacking.
* Efek berat yang menurunkan performa.

---

## 9. Information Architecture

Struktur utama website:

1. Home.
2. Projects.
3. Project Detail.
4. About.
5. Experience.
6. GitHub Activity.
7. Contact.
8. Resume.

Versi awal dapat menggunakan format single-page dengan halaman detail terpisah untuk proyek.

---

## 10. Page Requirements

## 10.1 Home Page

### Objective

Memberikan gambaran utama mengenai profil pemilik portfolio dan mengarahkan recruiter ke proyek, CV, atau kontak.

### Content

* Nama.
* Professional title.
* Short positioning statement.
* Availability status.
* Lokasi.
* Primary call-to-action.
* Secondary call-to-action.
* Featured projects.
* Short about section.
* GitHub activity preview.
* Contact CTA.

### Hero Content Example

**Heading:**

Lala — Frontend Developer

**Supporting Text:**

I build thoughtful, accessible, and responsive digital experiences using modern web technologies.

### Primary CTA

* View Selected Work.

### Secondary CTA

* Download Resume.
* View GitHub.
* Contact Me.

### Acceptance Criteria

* Nama dan role terlihat tanpa melakukan scroll.
* Tombol proyek dan CV mudah ditemukan.
* Hero tampil baik di desktop dan mobile.
* Konten utama tetap terbaca tanpa animasi.
* CTA dapat digunakan dengan keyboard.

---

## 10.2 Selected Projects Section

### Objective

Menampilkan proyek terbaik yang paling relevan dengan posisi pekerjaan yang dituju.

### Requirements

Jumlah proyek unggulan pada halaman utama:

* Minimal 3 proyek.
* Maksimal 5 proyek.

Setiap proyek harus memiliki:

* Nama proyek.
* Cover image atau screenshot.
* Ringkasan singkat.
* Tahun pengerjaan.
* Role atau kontribusi.
* Technology stack.
* Project type.
* Live demo link jika tersedia.
* GitHub repository link jika tersedia.
* Link menuju halaman detail.

### Project Selection Criteria

Proyek yang dipilih sebaiknya:

* Memiliki kualitas visual atau teknis yang baik.
* Relevan dengan posisi yang dituju.
* Menunjukkan kemampuan berbeda.
* Memiliki repository yang cukup rapi.
* Dapat dijelaskan secara jelas.
* Tidak seluruhnya berupa tutorial clone.

### Acceptance Criteria

* Setiap project memiliki deskripsi kontribusi personal.
* Project card dapat dibuka dengan mouse dan keyboard.
* Screenshot menggunakan ukuran yang optimal.
* Link eksternal memiliki indikator yang jelas.
* Project tetap dapat dipahami tanpa membuka repository.

---

## 10.3 Project Detail Page

### Objective

Menjelaskan proyek sebagai studi kasus, bukan hanya sebagai galeri visual.

### Required Sections

#### Project Overview

* Nama.
* Tahun.
* Status.
* Role.
* Timeline.
* Technology stack.
* Repository.
* Live website.

#### Context

Menjelaskan alasan proyek dibuat dan target penggunanya.

#### Problem

Menjelaskan masalah utama yang ingin diselesaikan.

#### Solution

Menjelaskan solusi dan fitur utama yang dibuat.

#### Contribution

Menjelaskan bagian yang dikerjakan secara personal.

#### Technical Decisions

Menjelaskan keputusan teknis penting, seperti:

* Pemilihan framework.
* Struktur komponen.
* Data fetching.
* State management.
* Authentication.
* Database.
* Performance optimization.
* Deployment.

#### Challenges

Menjelaskan tantangan yang ditemukan.

#### Results

Menjelaskan hasil yang dicapai.

Hasil dapat berupa:

* Peningkatan performa.
* Lighthouse score.
* Jumlah pengguna.
* Penyelesaian masalah tertentu.
* Feedback.
* Learning outcome.

#### Gallery

Menampilkan beberapa screenshot utama.

#### Next Project Navigation

Link menuju proyek berikutnya atau proyek sebelumnya.

### Acceptance Criteria

* Halaman menjelaskan kontribusi pemilik portfolio.
* Tidak hanya menampilkan daftar teknologi.
* Screenshot memiliki alt text.
* Link demo dan GitHub berfungsi.
* Layout tetap terbaca di layar kecil.
* Informasi penting muncul sebelum bagian teknis yang panjang.

---

## 10.4 About Section

### Objective

Memberikan konteks personal dan profesional.

### Content

* Personal introduction.
* Fokus atau bidang utama.
* Cara kerja.
* Nilai profesional.
* Minat teknis.
* Jenis kesempatan kerja yang dicari.
* Lokasi dan preferensi kerja.
* Foto profesional atau ilustrasi opsional.

### Tone

* Personal.
* Jujur.
* Profesional.
* Tidak terlalu formal.
* Tidak menggunakan klaim berlebihan.

### Acceptance Criteria

* About section tidak lebih panjang dari yang diperlukan.
* Pengunjung dapat memahami tujuan karier.
* Tidak menduplikasi seluruh isi CV.
* Konten mudah dipindai.

---

## 10.5 Skills Section

### Objective

Menampilkan kompetensi teknis dengan struktur yang jelas.

### Categories

#### Frontend

* HTML.
* CSS.
* JavaScript.
* TypeScript.
* React.
* Next.js.
* Tailwind CSS.

#### Backend

* Node.js.
* REST API.
* Framework backend jika relevan.

#### Database

* PostgreSQL.
* MySQL.
* MongoDB.
* Database lain jika relevan.

#### Tools

* Git.
* GitHub.
* Figma.
* Vercel.
* Testing tools.
* Package manager.

### Requirements

* Tidak menggunakan skill progress bar.
* Tidak menggunakan persentase kemampuan.
* Skill hanya ditampilkan jika benar-benar pernah digunakan.
* Skill utama dapat dibedakan secara visual dari skill tambahan.

### Acceptance Criteria

* Skill dikelompokkan berdasarkan kategori.
* Tidak ada angka persentase subjektif.
* Nama teknologi konsisten.
* Layout dapat dipindai dengan cepat.

---

## 10.6 Experience Section

### Objective

Menjelaskan pengalaman profesional dan perjalanan pengembangan kemampuan.

### Content Types

* Full-time role.
* Internship.
* Freelance.
* Contract work.
* Organization.
* Bootcamp.
* Relevant course.
* Independent project.

### Required Fields

* Nama organisasi atau perusahaan.
* Role.
* Periode.
* Lokasi atau remote.
* Ringkasan tanggung jawab.
* Pencapaian.
* Teknologi relevan.

### Alternative Title

Jika pengalaman profesional masih terbatas, judul dapat menggunakan:

* Experience & Learning.
* My Journey.
* Professional Journey.
* Selected Experience.

### Acceptance Criteria

* Pengalaman ditampilkan dari yang terbaru.
* Pencapaian lebih diutamakan daripada daftar tugas.
* Informasi relevan dengan pekerjaan target.
* Timeline mudah dibaca.

---

## 10.7 GitHub Activity Section

### Objective

Menampilkan aktivitas pengembangan publik sebagai bukti bahwa pemilik portfolio aktif membangun dan mempelajari teknologi.

### Data Requirements

Section dapat menampilkan:

* GitHub username.
* Profile avatar.
* GitHub bio.
* Public repository count.
* Followers.
* Following.
* Featured repositories.
* Recently updated repositories.
* Primary language.
* Last updated date.
* Repository stars.
* Repository forks.
* Recent public activity.
* Contribution calendar jika tersedia.

### Recommended Content

Prioritas tampilan:

1. Featured repositories.
2. Recently updated repositories.
3. Recent activity.
4. Contribution calendar.
5. Profile statistics.

Contribution calendar bukan indikator utama kemampuan dan hanya digunakan sebagai informasi tambahan.

### Featured Repository Fields

* Repository name.
* Repository description.
* Main language.
* Stars.
* Forks.
* Last updated.
* GitHub URL.
* Live demo URL jika tersedia.
* Repository topic.

### Data Fetching Strategy

Data GitHub diambil menggunakan GitHub API.

Strategi yang disarankan:

* Server-side fetching.
* Static generation atau incremental revalidation.
* Caching.
* Revalidation berkala.
* Tidak melakukan fetch langsung pada setiap render browser.

### Refresh Strategy

Data GitHub diperbarui secara berkala, misalnya setiap beberapa jam, agar:

* Data cukup aktual.
* Website tetap cepat.
* API rate limit tidak cepat habis.
* Website tetap berfungsi ketika GitHub sedang lambat.

### Error Handling

Jika GitHub API gagal:

* Tampilkan featured repositories dari fallback data lokal.
* Jangan menghilangkan seluruh section.
* Tampilkan link langsung ke profil GitHub.
* Jangan tampilkan pesan error teknis kepada recruiter.
* Gunakan last successfully fetched data jika tersedia.

### Loading State

Jika data diambil secara dinamis:

* Gunakan skeleton sederhana.
* Hindari loading spinner besar.
* Pastikan layout tidak bergeser secara signifikan.

### Empty State

Jika tidak ada aktivitas terbaru:

* Tampilkan repository unggulan.
* Tampilkan link menuju GitHub.
* Jangan menampilkan pesan negatif seperti “No activity”.

### Privacy Considerations

* Hanya data publik yang ditampilkan.
* Private contribution tidak ditampilkan kecuali tersedia secara publik.
* Token GitHub tidak boleh dikirim ke browser.
* Secret token disimpan di environment variable.
* Data sensitif tidak ditampilkan.

### Acceptance Criteria

* Username dan repository link benar.
* Data GitHub tidak membuat halaman gagal dimuat.
* Website memiliki fallback ketika API gagal.
* Token API tidak terekspos.
* Repository dapat dibuka di tab baru.
* Informasi last updated ditampilkan secara jelas.
* Hanya repository yang relevan ditampilkan.

---

## 10.8 Contact Section

### Objective

Mempermudah recruiter atau hiring manager menghubungi pemilik portfolio.

### Required Contact Methods

* Email.
* LinkedIn.
* GitHub.
* Resume download.

### Optional Contact Methods

* Contact form.
* WhatsApp.
* Calendly.
* Twitter atau X.

### CTA Example

Have a role, project, or collaboration in mind? Let’s talk.

### Contact Form Fields

Jika menggunakan contact form:

* Name.
* Email.
* Company.
* Message.

### Form Requirements

* Validasi input.
* Success state.
* Error state.
* Spam protection.
* Accessible labels.
* Tidak meminta informasi yang tidak diperlukan.

### Acceptance Criteria

* Email dapat diklik.
* LinkedIn dan GitHub dapat dibuka.
* Form memberikan feedback setelah dikirim.
* Pesan error mudah dimengerti.
* Tombol submit tidak dapat dikirim berulang kali saat proses berlangsung.

---

## 10.9 Resume

### Objective

Mempermudah recruiter melihat atau mengunduh CV.

### Requirements

* Tombol resume tersedia di navigation atau hero.
* Resume berbentuk PDF.
* Nama file profesional.
* File dapat dibuka di tab baru.
* Tersedia fallback download.
* Resume menggunakan versi terbaru.

### Suggested Filename

`lala-frontend-developer-resume.pdf`

### Acceptance Criteria

* Resume dapat diakses maksimal dua klik.
* Link tidak rusak.
* File tidak terlalu besar.
* Resume dapat dibaca di mobile.

---

## 11. Navigation

### Desktop Navigation

* Home.
* Work.
* About.
* Experience.
* GitHub.
* Contact.
* Resume.

### Mobile Navigation

* Hamburger menu atau compact navigation.
* Menu harus mudah ditutup.
* Fokus keyboard harus dikelola dengan baik.
* Background content tidak dapat di-scroll saat menu terbuka.

### Sticky Navigation

Navigation dapat bersifat sticky dengan ketentuan:

* Tidak mengambil ruang terlalu besar.
* Tidak menutupi heading.
* Memiliki background atau blur ringan.
* Tetap memiliki kontras yang cukup.

---

## 12. Functional Requirements

### FR-01: Responsive Layout

Website harus berfungsi pada:

* Mobile.
* Tablet.
* Laptop.
* Desktop widescreen.

### FR-02: Project Data

Project data harus dapat dikelola melalui data lokal, Markdown, MDX, atau headless CMS.

Untuk versi pertama, MDX atau data lokal lebih disarankan.

### FR-03: GitHub Integration

Website harus dapat mengambil data publik dari GitHub dan menampilkan fallback ketika data gagal dimuat.

### FR-04: Resume Download

Pengunjung dapat melihat dan mengunduh resume.

### FR-05: External Links

Semua link LinkedIn, GitHub, repository, dan demo harus memiliki state yang jelas.

### FR-06: Contact

Pengunjung dapat menghubungi melalui email atau contact form.

### FR-07: SEO Metadata

Setiap halaman memiliki:

* Title.
* Description.
* Canonical URL.
* Open Graph metadata.
* Social preview image.

### FR-08: Sitemap

Website memiliki sitemap yang dapat diakses mesin pencari.

### FR-09: Robots

Website memiliki konfigurasi robots yang sesuai.

### FR-10: Analytics

Website dapat menggunakan analytics untuk memantau:

* Page views.
* Project views.
* Resume clicks.
* Contact clicks.
* GitHub clicks.

Analytics harus menghormati privasi pengunjung.

---

## 13. Technical Requirements

### 13.1 Core Stack

* Next.js.
* App Router.
* TypeScript.
* Tailwind CSS.
* ESLint.
* Prettier.

### 13.2 Recommended Supporting Libraries

* Framer Motion untuk animasi jika diperlukan.
* Zod untuk validasi.
* React Hook Form untuk contact form.
* MDX untuk project case study.
* Icon library yang konsisten.
* Image optimization bawaan Next.js.

Penggunaan library harus dibatasi agar bundle tidak terlalu besar.

### 13.3 Deployment

Platform deployment yang disarankan:

* Vercel.

### 13.4 Environment Variables

Contoh environment variable:

* GitHub API token.
* Contact form endpoint.
* Analytics key.
* Site URL.

Environment variable sensitif hanya boleh digunakan pada server.

### 13.5 Content Management

Versi pertama:

* Project disimpan menggunakan MDX atau TypeScript object.
* Experience disimpan menggunakan file data lokal.
* Skills disimpan menggunakan file data lokal.
* Personal information disimpan melalui configuration file.

CMS dapat ditambahkan pada fase berikutnya jika diperlukan.

---

## 14. Suggested Project Structure

```text
app/
  page.tsx
  about/
    page.tsx
  projects/
    page.tsx
    [slug]/
      page.tsx
  api/
components/
  layout/
  navigation/
  sections/
  projects/
  github/
  contact/
content/
  projects/
data/
  experience.ts
  skills.ts
  social-links.ts
lib/
  github.ts
  metadata.ts
  utils.ts
public/
  images/
  resume/
styles/
types/
```

---

## 15. GitHub Integration Architecture

### Server Flow

1. Next.js server meminta data dari GitHub API.
2. Server menyimpan respons melalui caching.
3. Data diproses menjadi format internal.
4. Komponen UI menerima data yang sudah dibersihkan.
5. Jika request gagal, sistem memakai fallback data lokal.

### Recommended Internal Data Shape

```ts
type GitHubRepository = {
  name: string
  description: string | null
  url: string
  homepage: string | null
  language: string | null
  stars: number
  forks: number
  updatedAt: string
  topics: string[]
}
```

### Repository Filtering

Repository yang ditampilkan harus:

* Bukan fork, kecuali memiliki kontribusi signifikan.
* Memiliki deskripsi.
* Relevan dengan profil profesional.
* Tidak berupa repository latihan dasar yang tidak selesai.
* Tidak mengandung informasi sensitif.
* Memiliki dokumentasi yang cukup.

### Sorting Priority

Repository dapat diurutkan berdasarkan:

1. Repository yang ditandai sebagai featured.
2. Relevansi terhadap role target.
3. Last updated.
4. Stars.
5. Kualitas dokumentasi.

---

## 16. Content Requirements

### Writing Language

Bahasa utama yang disarankan adalah Inggris karena lebih umum digunakan dalam proses rekrutmen teknologi.

Bahasa Indonesia dapat digunakan jika:

* Target utama adalah perusahaan lokal.
* Pengguna lebih nyaman menjelaskan proyek dalam bahasa Indonesia.
* Website dirancang bilingual.

### Tone of Voice

* Confident.
* Clear.
* Personal.
* Direct.
* Professional.
* Tidak berlebihan.
* Tidak menggunakan jargon tanpa konteks.

### Content Principles

* Gunakan kalimat pendek.
* Hindari deskripsi generik.
* Jelaskan kontribusi personal.
* Gunakan hasil atau impact bila tersedia.
* Jangan menyalin deskripsi README mentah.
* Hindari klaim seperti “expert” tanpa bukti.
* Fokus pada keputusan dan hasil.

---

## 17. SEO Requirements

### Homepage Keywords

* Frontend Developer.
* Next.js Developer.
* React Developer.
* Web Developer.
* Personal Portfolio.
* Software Engineer, jika relevan.

### Requirements

* Unique page title.
* Meta description.
* Semantic heading structure.
* Structured data untuk Person.
* Structured data untuk Project jika sesuai.
* Open Graph image.
* Twitter card metadata.
* Sitemap.
* Robots file.
* Clean URL.
* Canonical URL.

### Example Homepage Title

Lala — Frontend Developer Portfolio

### Example Meta Description

Frontend developer portfolio featuring selected web projects, technical case studies, and recent GitHub activity.

---

## 18. Accessibility Requirements

Website minimal mengikuti prinsip WCAG AA.

Requirements:

* Kontras teks memadai.
* Semua gambar memiliki alt text.
* Semua tombol memiliki label.
* Navigasi dapat digunakan dengan keyboard.
* Focus state terlihat.
* Heading menggunakan urutan semantik.
* Form memiliki label yang jelas.
* Animasi menghormati prefers-reduced-motion.
* Tidak bergantung pada warna untuk menyampaikan informasi.
* Link dapat dibedakan dari teks biasa.
* Font body tidak terlalu kecil.

---

## 19. Performance Requirements

Target awal:

* Lighthouse Performance minimal 90.
* Accessibility minimal 90.
* Best Practices minimal 90.
* SEO minimal 90.

Performance considerations:

* Gunakan Next.js Image.
* Optimalkan ukuran gambar.
* Gunakan format WebP atau AVIF.
* Hindari JavaScript yang tidak diperlukan.
* Gunakan server component secara default.
* Client component hanya digunakan jika dibutuhkan.
* Lazy load section berat.
* Batasi animation library.
* Hindari video autoplay.
* Cache data GitHub.
* Gunakan font optimization.

---

## 20. Security Requirements

* GitHub token tidak boleh berada di client bundle.
* Environment variable sensitif hanya tersedia pada server.
* Contact form harus memiliki validasi.
* Implementasikan spam prevention.
* Sanitasi input form.
* External link menggunakan konfigurasi aman.
* Dependency diperbarui secara berkala.
* Tidak menyimpan data pengunjung yang tidak diperlukan.

---

## 21. Analytics Events

Event yang dapat dipantau:

* `view_project`
* `click_project_demo`
* `click_github_repository`
* `click_github_profile`
* `download_resume`
* `click_linkedin`
* `click_email`
* `submit_contact_form`
* `contact_form_success`
* `contact_form_error`

Analytics digunakan untuk memahami interaksi, bukan untuk tracking berlebihan.

---

## 22. Success Metrics

### Primary Metrics

* Jumlah klik resume.
* Jumlah kunjungan ke project detail.
* Jumlah klik GitHub.
* Jumlah klik LinkedIn.
* Jumlah kontak dari recruiter.
* Jumlah interview atau opportunity yang berasal dari portfolio.

### Secondary Metrics

* Average engagement time.
* Project completion rate.
* Bounce rate.
* Mobile usability.
* Website performance score.

### Qualitative Metrics

* Recruiter dapat memahami role dalam waktu kurang dari satu menit.
* Pengunjung dapat menemukan CV dengan cepat.
* Project menjelaskan kontribusi secara jelas.
* Website terasa personal dan tidak generik.
* Integrasi GitHub terlihat relevan dan bukan sekadar dekorasi.

---

## 23. User Stories

### US-01

Sebagai recruiter, saya ingin mengetahui role kandidat dengan cepat agar dapat menentukan relevansinya dengan posisi terbuka.

### US-02

Sebagai recruiter, saya ingin mengunduh CV agar dapat melanjutkan proses screening.

### US-03

Sebagai hiring manager, saya ingin membaca detail proyek agar dapat memahami kemampuan problem-solving kandidat.

### US-04

Sebagai hiring manager, saya ingin membuka repository GitHub agar dapat meninjau implementasi teknis.

### US-05

Sebagai recruiter, saya ingin melihat pengalaman kandidat agar dapat menilai tingkat senioritas.

### US-06

Sebagai pengunjung mobile, saya ingin website mudah dibaca agar dapat meninjau portfolio tanpa menggunakan desktop.

### US-07

Sebagai pemilik portfolio, saya ingin data GitHub diperbarui otomatis agar tidak perlu memperbarui aktivitas secara manual.

### US-08

Sebagai pemilik portfolio, saya ingin GitHub section tetap tampil ketika API gagal agar website tidak terlihat rusak.

### US-09

Sebagai recruiter, saya ingin menghubungi kandidat dengan mudah agar dapat menawarkan kesempatan kerja.

---

## 24. MVP Scope

Fitur yang harus tersedia pada versi pertama:

* Responsive homepage.
* Editorial hero section.
* About section.
* Skills section.
* Experience section.
* Tiga project unggulan.
* Project detail pages.
* GitHub profile integration.
* Featured GitHub repositories.
* Recent repository activity.
* Resume download.
* LinkedIn link.
* Email contact.
* Basic SEO.
* Open Graph metadata.
* Sitemap.
* Analytics dasar.
* Loading, error, dan fallback state.
* Deployment ke Vercel.

---

## 25. Post-MVP Scope

Fitur yang dapat ditambahkan setelah MVP:

* Blog.
* Bilingual language switcher.
* Dark mode.
* CMS.
* Full contribution calendar.
* Testimonials.
* Recommendation section.
* Contact form dengan dashboard.
* Advanced analytics.
* Search.
* Project filtering.
* Guestbook.
* Newsletter.
* RSS feed.
* Custom domain email.
* Interactive playground.
* Detailed uses page.

---

## 26. Development Phases

### Phase 1: Foundation

* Setup Next.js.
* Setup TypeScript.
* Setup Tailwind CSS.
* Setup linting dan formatting.
* Membuat design tokens.
* Membuat global layout.
* Membuat navigation dan footer.

### Phase 2: Core Content

* Hero.
* About.
* Skills.
* Experience.
* Contact.
* Resume.

### Phase 3: Projects

* Project listing.
* Project card.
* Project detail template.
* MDX integration.
* Project navigation.

### Phase 4: GitHub

* GitHub API integration.
* Repository filtering.
* Featured repository.
* Recent activity.
* Caching.
* Error fallback.
* Loading state.

### Phase 5: Polish

* Animation.
* Responsive refinement.
* Accessibility.
* SEO.
* Performance.
* Analytics.
* Testing.

### Phase 6: Launch

* Production deployment.
* Domain configuration.
* Final content review.
* Broken link check.
* Resume verification.
* Metadata verification.
* Analytics verification.

---

## 27. Testing Requirements

### Functional Testing

* Navigation.
* Project links.
* GitHub links.
* Resume link.
* Contact link.
* Contact form.
* API fallback.
* Loading state.
* Error state.

### Responsive Testing

Test pada:

* Small mobile.
* Large mobile.
* Tablet.
* Laptop.
* Desktop.

### Browser Testing

Minimal:

* Chrome.
* Firefox.
* Safari.
* Edge.

### Accessibility Testing

* Keyboard navigation.
* Screen reader basics.
* Focus states.
* Color contrast.
* Reduced motion.
* Form labels.

### Performance Testing

* Lighthouse.
* Image size.
* JavaScript bundle.
* Network throttling.
* Layout shift.
* Loading performance.

---

## 28. Definition of Done

Website dianggap selesai ketika:

* Semua MVP feature tersedia.
* Tidak ada broken link.
* Semua project memiliki konten lengkap.
* Resume dapat diakses.
* GitHub integration berfungsi.
* Fallback GitHub berfungsi.
* Website responsif.
* Website dapat digunakan dengan keyboard.
* Lighthouse memenuhi target.
* SEO metadata tersedia.
* Website berhasil di-deploy.
* Custom domain aktif jika tersedia.
* Tidak ada secret di client-side code.
* Konten telah diperiksa ulang.
* Contact information sudah benar.

---

## 29. Open Questions

Hal berikut perlu ditentukan sebelum implementasi final:

1. Nama lengkap yang akan ditampilkan.
2. Role utama yang ditargetkan.
3. GitHub username.
4. LinkedIn URL.
5. Email profesional.
6. Lokasi.
7. Preferensi kerja: onsite, hybrid, atau remote.
8. Daftar tiga sampai lima proyek terbaik.
9. Teknologi utama.
10. Pengalaman kerja atau pembelajaran.
11. Bahasa utama website.
12. Pilihan accent color.
13. Pilihan font heading.
14. Perlu contact form atau cukup email.
15. Perlu dark mode pada MVP atau post-MVP.
16. Domain yang akan digunakan.
17. Resume final.
18. Foto profil atau tanpa foto.

---

## 30. Recommended Final Direction

Rekomendasi implementasi awal:

* Next.js App Router.
* TypeScript.
* Tailwind CSS.
* MDX untuk project case study.
* Server component sebagai default.
* GitHub API melalui server-side utility.
* Revalidation berkala.
* Fallback data lokal.
* Vercel deployment.
* Editorial layout.
* Serif display heading.
* Geist untuk body.
* Off-white background.
* Charcoal typography.
* Satu accent color.
* Tiga featured projects.
* GitHub section bertema “Building in Public”.
* Bahasa Inggris sebagai bahasa utama.
* Tidak menggunakan CMS pada versi pertama.
* Tidak menggunakan dark mode pada MVP kecuali waktu development memungkinkan.

---

## 31. Product Summary

Portfolio ini harus memberikan kesan bahwa pemiliknya adalah developer yang mampu berpikir secara terstruktur, memiliki perhatian terhadap detail, aktif mengembangkan kemampuan, dan dapat menjelaskan pekerjaannya dengan jelas.

Desain editorial digunakan untuk membangun identitas personal, sedangkan struktur konten dan integrasi GitHub digunakan untuk memberikan bukti profesional dan teknis.

Prioritas utama website adalah:

1. Clarity.
2. Project quality.
3. Professional credibility.
4. GitHub activity.
5. Performance.
6. Accessibility.
7. Recruiter conversion.
