# 🌐 Abni Basit — Full-Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-abnibasit.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://protofolio-abni.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance, editorial full-stack developer portfolio built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS v4**. Features a bilingual internationalization system (EN/ID), Material View Transitions circular theme reveal, physics-based magnetic buttons, Vercel spotlight cursor cards, and real-time GitHub activity monitoring.

---

## ✨ Key Features

- **🌐 Multilingual i18n System (EN / ID)**: Instant real-time language toggling between English (Default) and Bahasa Indonesia with `localStorage` persistence.
- **🌓 View Transitions Circular Reveal (Ripple Effect)**: Smooth bidirectional theme toggle (Dark / Light mode) expanding from the exact geometric center of the Sun/Moon button using `document.startViewTransition`.
- **🎯 Animated Circular Cursor**: Smooth custom trailing circular cursor with `mix-blend-difference` (Auto-adapts to black on light mode and white on dark mode) with click/press expansion physics.
- **🧲 Physics Magnetic Buttons**: Spring physics pull effect on Hero CTAs responding to cursor proximity.
- **✨ Vercel & Linear Hover Spotlight Cards**: Cursor-following radial spotlight glow and masked border trace on Project Cards and Tech Event Cards.
- **📜 Staggered Scroll Reveal System**: Sequential 100ms fade-up reveal animations on scroll using `IntersectionObserver`.
- **🖼️ Interactive Stacked Photo Deck**: Clickable 3D photo deck for tech events & conferences with pagination controls.
- **📊 Real-Time Visitor Counter**: Persistent hit counter calling CounterAPI with formatted thousand separators (`Visited by X people`).
- **🐍 Live GitHub Activity & Snake Arcade Overlay**: Server-side fetching of 12-month GitHub contribution graphs and open-source stats with real-time fallback caching.
- **📱 100% Fully Responsive Layout**: Mobile-first architecture tested on viewports from 360px smartphones to 4K displays.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, Server Components) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Vanilla CSS Design Tokens |
| **Icons & Brands** | Simple Icons (`react-icons/si`), FontAwesome 6, Lucide Icons |
| **Animations** | View Transitions API, CSS Keyframes, Spring Physics |
| **Analytics & API** | Vercel Analytics, GitHub REST API, CounterAPI |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/abnibsth/Protofolio-abni.git
cd Protofolio-abni
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_SITE_URL=https://protofolio-abni.vercel.app
GITHUB_TOKEN=your_github_personal_access_token
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 📋 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server |
| `npm run build` | Builds production bundle |
| `npm start` | Runs production server |
| `npm run lint` | Runs ESLint checks |

---

## 👤 Author

**Abni Basit**
- Website: [abnibasit.vercel.app](https://protofolio-abni.vercel.app)
- GitHub: [@abnibsth](https://github.com/abnibsth)
- LinkedIn: [Abni Basit Munawar](https://www.linkedin.com/in/abni-basit-munawar-47210a286/)
- Email: [abni4250@gmail.com](mailto:abni4250@gmail.com)

---

⭐ **Star this repository if you find it inspiring!**
