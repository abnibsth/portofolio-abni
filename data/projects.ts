import type { Project } from "@/types";

/**
 * ============================================================================
 * PROJECTS (100% Full English Content)
 * ============================================================================
 */
export const projects: Project[] = [
  {
    slug: "kulkas-berisi",
    title: "Kulkas Berisi",
    summary:
      "Zero-Waste AI web application that transforms leftover fridge ingredients into delicious recipes before expiry.",
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
      alt: "Kulkas Berisi landing page featuring AI Recipe Generator",
      width: 1600,
      height: 900,
    },
    context: [
      "Many households and students discard leftover fridge ingredients simply because they don't know what dish to cook with them.",
      "Kulkas Berisi was built as a smart Zero-Waste AI platform recommending step-by-step recipes tailored directly to available fridge items.",
    ],
    problem: [
      "Household food waste reaches tons every month due to a lack of quick and practical recipe ideas.",
      "Traditional recipe apps require manual search and rarely accommodate limited or random ingredient combinations.",
    ],
    solution: [
      "Engineered an AI-powered recipe generator that takes a list of fridge ingredients and instantly outputs structured step-by-step cooking instructions.",
      "Designed a modern, intuitive, and fully responsive landing page & app interface with zero-waste impact metrics.",
    ],
    contribution: [
      "Built the full application architecture from UI/UX design, AI prompt engineering, to cloud edge deployment.",
      "Implemented real-time API integrations for recipe generation and usage statistics.",
    ],
    technicalDecisions: [
      {
        heading: "Next.js App Router & Prompt Engineering",
        body: [
          "Leveraged Next.js Server Actions to securely process AI prompts on the server without exposing API keys to the client.",
          "Enforced strict JSON schema output formatting on LLM responses to ensure reliable client-side parsing.",
        ],
      },
      {
        heading: "Editorial & Responsive UI with Tailwind CSS",
        body: [
          "Crafted an aesthetic light-theme landing page with interactive preview cards demonstrating recipe generation (e.g., Egg - Chicken - Carrot).",
        ],
      },
    ],
    challenges: [
      {
        heading: "Minimizing AI Recipe Generation Latency",
        body: [
          "Initial LLM response times took several seconds. I implemented loading states and popularity caching for near-instant responses.",
        ],
      },
    ],
    results: [
      "10.4K+ Active Users and 51K+ Recipes Generated.",
      "Estimated 1.9 Tons of Food Waste Prevented with 4.8/5.0 User Rating.",
      "Open Source Repository on GitHub: github.com/abnibsth/kulkasberisi.",
    ],
    gallery: [
      {
        src: "/images/kulkasberisi.png",
        alt: "Kulkas Berisi Landing Page & AI Recipe Generator",
        width: 1600,
        height: 900,
        caption: "Main interface of Kulkas Berisi — Zero-Waste AI application for leftover ingredients.",
      },
    ],
  },
  {
    slug: "ngopi-go",
    title: "NgopiGo",
    summary:
      "Intuitive online coffee ordering platform eliminating long queues during peak coffee shop hours.",
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
      alt: "NgopiGo web ordering interface preview",
      width: 1600,
      height: 900,
    },
    context: [
      "Long coffee shop queues discourage customers from ordering during rush hours.",
      "NgopiGo provides a fast online ordering portal allowing customers to pick items and order before arriving at the venue.",
    ],
    problem: [
      "Manual ordering at POS counters causes delay and queue uncertainty.",
      "Physical menus often fail to present customization options clearly.",
    ],
    solution: [
      "Developed a web-based coffee ordering platform with structured product categories (Coffee, Non-Coffee, Pastry).",
      "Built custom order options (sweetness level, ice, size) and an interactive cart with real-time price calculations.",
    ],
    contribution: [
      "Developed the entire application independently from backend architecture, MySQL database, to frontend UI.",
      "Designed a responsive, mobile-first ordering flow optimized for smartphone viewports.",
    ],
    technicalDecisions: [
      {
        heading: "Shopping Cart State Management",
        body: [
          "Implemented local state management for instant cart item tracking and real-time variation calculations without server latency.",
        ],
      },
      {
        heading: "Mobile-First Design with Tailwind CSS",
        body: [
          "Utilized Tailwind CSS to build a clean mobile ordering UI with large touch targets and category navigation.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Handling Flexible Beverage Customizations",
        body: [
          "Different beverages required different option sets. I designed flexible database table schemas to store custom options without corrupting price calculations.",
        ],
      },
    ],
    results: [
      "Streamlined digital coffee ordering workflow.",
      "Instant checkout experience with user-friendly navigation.",
      "Open Source Repository on GitHub: github.com/abnibsth/ngopi-go.",
    ],
    gallery: [
      {
        src: "/images/ngopigo.png",
        alt: "NgopiGo web application interface",
        width: 1600,
        height: 900,
        caption: "Product menu ordering interface on the NgopiGo web application.",
      },
    ],
  },
  {
    slug: "cek-api",
    title: "Cek API — API Key Monitor",
    summary:
      "Utility web application for validating status, quota usage, rate limits, and latency of API keys instantly.",
    year: "2025",
    type: "Developer Tool / Web App",
    role: "Full-Stack Developer · Solo",
    timeline: "2025",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
    demoUrl: "https://cek-api.vercel.app/",
    repoUrl: "https://github.com/abnibsth/cek-api",
    featured: true,
    cover: {
      src: "/images/cekapi.png",
      alt: "Cek API dashboard interface — API Key Monitor",
      width: 1600,
      height: 900,
    },
    context: [
      "Developers frequently face sudden runtime errors when API keys expire or run out of quota during application execution.",
      "Cek API was built as a practical tool to inspect API Key health (OpenAI, Anthropic, Google, etc.) without opening individual provider dashboards.",
    ],
    problem: [
      "Checking remaining credits across multiple providers requires separate logins and time-consuming manual requests.",
      "High risk of production runtime failures if API keys expire unexpectedly.",
    ],
    solution: [
      "Engineered a high-speed web app that tests API keys securely, returning quota, rate limit, and status.",
      "Designed a modern UI with status indicators, latency tracking, and instant verification logs.",
    ],
    contribution: [
      "Built the web application and API endpoint testing mechanisms from scratch and deployed on Vercel.",
      "Ensured API key verification is executed securely at serverless edge locations without storing sensitive user credentials.",
    ],
    technicalDecisions: [
      {
        heading: "Edge Serverless Credential Security",
        body: [
          "Processed API Key checks through transient Next.js API Routes, ensuring credentials are never stored in databases or server logs.",
        ],
      },
      {
        heading: "CORS & Timeout Management",
        body: [
          "Implemented serverless proxy mechanisms to bypass CORS restrictions when pinging provider verification endpoints.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Normalizing Diverse API Provider Responses",
        body: [
          "Different API providers use completely different error structures and rate-limit headers. I built a response normalization layer to output unified status payloads.",
        ],
      },
    ],
    results: [
      "Live deployment on https://cek-api.vercel.app/ available for free use.",
      "Instant API key verification with sub-300ms latency.",
      "Open Source Repository on GitHub: github.com/abnibsth/cek-api.",
    ],
    gallery: [
      {
        src: "/images/cekapi.png",
        alt: "Cek API main interface",
        width: 1600,
        height: 900,
        caption: "Status monitoring and API key validation interface on Cek API.",
      },
    ],
  },
  {
    slug: "pelita-hati",
    title: "Pelita Hati — Digital Posyandu",
    summary:
      "Integrated healthcare platform and digitized healthcare data management system for child growth monitoring & stunting prevention.",
    year: "2025",
    type: "HealthTech / Web Application",
    role: "Full-Stack Developer · Solo",
    timeline: "2025",
    status: "Live",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    repoUrl: "https://github.com/abnibsth/pelita-hati",
    featured: true,
    cover: {
      src: "/images/pelita-hati.png",
      alt: "Pelita Hati landing page — Digital Posyandu Infrastructure",
      width: 1600,
      height: 900,
    },
    context: [
      "Local community health centers (Posyandu) often rely on physical paper health books (KMS) for immunization records and growth charts, which are prone to damage or loss.",
      "Pelita Hati was built as a digital infrastructure platform to digitize toddler health records, immunization schedules, and early stunting risk detection.",
    ],
    problem: [
      "Manual paper-based nutrition & immunization logging is time-consuming for health workers and difficult to analyze accurately.",
      "Parents lack a digital self-service portal to monitor child growth charts in real time.",
    ],
    solution: [
      "Developed an integrated web platform featuring child medical record modules, WHO/Ministry of Health standard growth curves, and a public portal.",
      "Designed a modern, accessible UI/UX with data visualizations for health workers and parents.",
    ],
    contribution: [
      "Engineered the complete system infrastructure from MySQL database architecture, Z-Score calculation logic, to frontend interfaces.",
      "Implemented automated PDF exports for health summaries and immunization schedules.",
    ],
    technicalDecisions: [
      {
        heading: "Laravel Backend & MySQL Database Architecture",
        body: [
          "Utilized Laravel to handle multi-role authentication (Posyandu Admin, Health Cadres, Parents) securely.",
          "Designed structured MySQL schemas optimized for query speed across immunization records and growth metrics.",
        ],
      },
      {
        heading: "Inclusive & Responsive Interface Design",
        body: [
          "Used Tailwind CSS to build a clean health-themed UI responsive across mobile devices and desktop workstations.",
        ],
      },
    ],
    challenges: [
      {
        heading: "Automated Child Growth Index Calculation",
        body: [
          "Implemented WHO/Ministry of Health anthropometric standard formulas so nutritional status indicators are computed instantly upon data entry.",
        ],
      },
    ],
    results: [
      "Complete digitization of Posyandu records replacing physical logbooks.",
      "Real-time access to immunization schedules and growth curves.",
      "Open Source Repository on GitHub: github.com/abnibsth/pelita-hati.",
    ],
    gallery: [
      {
        src: "/images/pelita-hati.png",
        alt: "Pelita Hati main interface — Digital Posyandu System",
        width: 1600,
        height: 900,
        caption: "Landing page and digital Posyandu infrastructure portal on Pelita Hati.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
