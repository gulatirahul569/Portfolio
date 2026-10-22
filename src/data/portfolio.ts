export const profile = {
  name: "Rahul Gulati",
  role: "Full Stack Developer",
  tagline: "I build responsive, scalable web applications with the MERN stack and Next.js.",
  location: "Chandigarh, India",
  phone: "+91 7888581685",
  email: "rahulgulati425@gmail.com",
  github: "https://github.com/gulatirahul569",
  linkedin: "https://www.linkedin.com/in/gulatirahul/",
  summary:
    "Passionate and results-driven Full Stack Developer with hands-on experience building responsive and scalable web applications using MongoDB, Express.js, React.js and Node.js. Proficient in developing RESTful APIs, implementing authentication, managing databases, and crafting intuitive interfaces with HTML, CSS, JavaScript and Tailwind CSS. Strong problem-solving skills and practical experience gained through internships and real-world projects.",
};

export const skills = [
  { name: "JavaScript", note: "ES6+" },
  { name: "React", note: "Hooks, Router, Vite" },
  { name: "Node.js", note: "Runtime" },
  { name: "Express.js", note: "REST APIs" },
  { name: "MongoDB", note: "Atlas, Mongoose" },
  { name: "Tailwind CSS", note: "Utility-first UI" },
  { name: "HTML", note: "Semantic markup" },
  { name: "CSS", note: "Flex, Grid" },
  { name: "Next.js", note: "React framework" },
  { name: "GitHub", note: "Git Actions" },
];

export const focusAreas = [
  "REST API design & JWT authentication",
  "Role-based access control middleware",
  "MongoDB schema modelling",
  "Responsive React interfaces",
  "Admin dashboards & data visualisation",
  "Cloud deployment on Vercel",
];

export type Project = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
  title: "Kairobuy",
  subtitle: "Everyday Carry — Full-Stack E-Commerce Platform",
  problem:
    "Small retailers need a complete online storefront and the tools to manage products, inventory and orders in one place.",
  solution:
    "A full-stack e-commerce platform built with Next.js, featuring a customer-facing storefront and e-commerce functionality, deployed on a custom domain.",
  highlights: [
    "Browse products and explore detailed product pages",
    "Shopping cart management and order placement",
    "Modern, responsive storefront built with Next.js",
    "Custom domain deployment at kairobuy.com",
  ],
  stack: ["Next.js", "React", "JavaScript"],
  live: "https://kairobuy.com/",
  repo: "https://github.com/shubamKPIT/Kairobuy",
},
  {
    title: "School ERP",
    subtitle: "Full-Stack School Management System",
    problem:
      "Schools juggle attendance, timetables, results and fees across disconnected tools with no shared source of truth.",
    solution:
      "A role-based MERN management system with distinct Admin, Teacher and Student portals secured by JWT authentication and bcrypt-hashed credentials.",
    highlights: [
      "Core modules: class management, attendance, timetable, announcements, results and fees",
      "Role-based middleware restricting admin-only actions from teacher/student read access",
      "Protected, role-aware routing with an Axios-based API layer",
      "Recharts-powered admin dashboard for attendance and class statistics",
    ],
    stack: ["React (Vite)", "Node.js", "Express", "MongoDB", "JWT", "Recharts"],
    live: "https://school-erp-eta-lilac.vercel.app",
    repo: "https://github.com/gulatirahul569/School-ERP",
  },
  {
    title: "CodeForge",
    subtitle: "Open-Source Online Compiler Platform",
    problem:
      "Learners and interviewers need a fast place to run code in multiple languages without local setup.",
    solution:
      "An open-source online compiler platform delivering a seamless coding experience with multi-language support, real-time execution and developer-friendly tooling.",
    highlights: [
      "Support for multiple programming languages",
      "Real-time code execution",
      "Developer-friendly editor tooling",
      "Open source and community contributable",
    ],
    stack: ["JavaScript", "Node.js", "React"],
    live: "https://code-forge-omega-eight.vercel.app/",
    repo: "https://github.com/gulatirahul569/CodeForge",
  },
  {
    title: "Zorestia",
    subtitle: "AI-Powered Business Growth & Strategy Platform",
    problem:
      "Businesses looking to scale globally need a single partner for automation, technology and go-to-market strategy, rather than piecing together AI tools, developers and consultants separately.",
    solution:
      "A marketing and client-facing platform for Zorestia, a consultancy that helps businesses grow, automate and scale through AI, technology, sales and business development, built as a fast, database-backed React application.",
    highlights: [
      "Marketing site presenting AI, technology and strategy service offerings",
      "Supabase-backed data layer for content and client interactions",
      "Type-safe React front end built with Vite for fast builds and hot reloads",
      "Deployed as a production build to a custom domain (zorestia.com)",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase"],
    live: "https://zorestia.com",
    repo: "https://github.com/gulatirahul569/Zorestia",
  },
  {
  title: "FitPro",
  subtitle: "Fitness Training, Trainer Booking & Gym Discovery Platform",
  problem:
    "Finding the right trainer, accessing quality workout content and booking personal training sessions can be fragmented across different platforms, while gyms and trainers need a dedicated place to showcase their services.",
  solution:
    "A fitness platform built with Next.js and JSX that connects users with trainers and gyms. Users can discover trainers, watch free demo workout videos, explore gym listings and book training sessions, while trainers can showcase their expertise and upload workout content.",
  highlights: [
    "Trainer profiles with the ability to showcase services and training expertise",
    "Trainers can upload workout and fitness videos for users to explore",
    "Free demo videos allow users to preview training content before booking",
    "Users can discover trainers and book personal training sessions",
    "Gym listings allow users to discover gyms and explore trainers available at each gym",
    "Gyms can list their facilities and associated trainers on the platform",
    "Responsive Next.js application designed for a smooth experience across devices",
  ],
  stack: ["Next.js", "React", "JSX"],
  live: "https://fit-pro-six-dusky.vercel.app/",
  repo: "https://github.com/gulatirahul569/FitPro",
},
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  detail?: string;
  current?: boolean;
};

export const experience: TimelineItem[] = [
  {
    period: "Feb 2026 — Present",
    title: "Full Stack Developer",
    org: "KP IT Experts, Sector 74, Mohali",
    current: true,
  },
  {
    period: "Jul 2025 — Dec 2025",
    title: "Full Stack Developer Intern",
    org: "BONNTECH Solutions, K&B Tower, Phase 8B, Mohali",
  },
  {
    period: "Jan 2025 — May 2025",
    title: "MERN Stack Industrial Training",
    org: "Future Finders, Sector 74, Mohali",
  },
  {
    period: "Jan 2025 — May 2025",
    title: "Operating Systems Certification",
    org: "SWAYAM Online Course",
  },
  {
    period: "4 weeks",
    title: "Python with Data Science Training",
    org: "NIELIT, Sector 30, Chandigarh",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2021 — 2025",
    title: "B.Tech, Artificial Intelligence & Data Science",
    org: "Chandigarh Group of Colleges, Landran, Mohali",
    detail: "CGPA 7.5 / 10",
  },
  {
    period: "2020 — 2021",
    title: "CBSE Class 12th",
    org: "Govt. Model Sr. Sec. School – 8, Chandigarh",
    detail: "83% aggregate",
  },
  {
    period: "2018 — 2019",
    title: "CBSE Class 10th",
    org: "Hansraj Public School, Panchkula, Haryana",
    detail: "84% aggregate",
  },
];

export const achievements = [
  {
    title: "1st Prize — Mind Hacker",
    org: "Phoenix Club",
  },
  {
    title: "1st Prize — Code Jam",
    org: "Excelsior Club",
  },
  {
    title: "Workshop Coordinator — Cyber Security",
    org: "Session by Mr. Rajeev Kumar",
  },
];