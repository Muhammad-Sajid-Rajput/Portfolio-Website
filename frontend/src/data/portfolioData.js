import rockPaperScissorsImage from "../assets/images/rock-paper-scissors.webp";
import unirideImage from "../assets/images/Uniride.webp";
import pizzaPalaceImage from "../assets/images/Pizza-Palace.webp";
import profileImage from "../assets/images/Profile-Picture.webp";
import ecommerceImage from "../assets/images/E-commerce.webp";
import climateXImage from "../assets/images/climatex_banner.webp";
import novaMindImage from "../assets/images/NovaMind.webp";
import thermaXImage from "../assets/images/ThermaX.webp";
import prepMateImage from "../assets/images/PrepMate.webp";

export const heroContent = {
  name: "Muhammad Sajid",
  role: "Full-Stack Web Developer",
  tagline:
    "Building scalable web applications with clean architecture and exceptional user experiences.",
  summary:
    "Full-Stack Web Developer and Software Engineering student at MUET with hands-on experience architecting and shipping scalable MERN-stack applications. Delivered real-world projects spanning AI-powered platforms, real-time systems, and geospatial data intelligence — each featuring secure JWT authentication, RESTful APIs, RAG-based AI pipelines, and polished responsive UIs. Passionate about clean architecture, performance optimization, and user-centered design.",
  image: profileImage,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const aboutParagraphs = [
  "I'm a Full-Stack Web Developer and Software Engineering student at MUET, passionate about architecting and shipping scalable MERN-stack applications from idea to production.",
  "My expertise spans React, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, Socket.IO, Redis, BullMQ, and responsive frontend development with Tailwind CSS.",
  "I've built AI-powered platforms integrating Google Gemini API and RAG pipelines, real-time civic intelligence systems with geospatial clustering, and enterprise-grade chatbot infrastructure with streaming, telemetry, and Docker deployment.",
  "I enjoy designing clean architectures, solving real-world problems, and creating applications that balance performance, maintainability, and great user experience.",
];

export const skills = [
  // Frontend
  { name: "React.js", icon: "logos:react", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: "logos:javascript", category: "frontend" },
  { name: "HTML5", icon: "devicon:html5", category: "frontend" },
  { name: "CSS3", icon: "devicon:css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss", category: "frontend" },
  { name: "EJS", icon: "vscode-icons:file-type-ejs", category: "frontend" },
  { name: "Leaflet", icon: "simple-icons:leaflet", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "logos:nodejs", category: "backend" },
  { name: "Express.js", icon: "simple-icons:express", category: "backend" },
  { name: "RESTful API Design", icon: "mdi:api", category: "backend" },
  { name: "Socket.IO", icon: "simple-icons:socketdotio", category: "backend" },
  { name: "JWT Authentication", icon: "mdi:key-variant", category: "backend" },
  { name: "Redis (Upstash)", icon: "devicon:redis", category: "backend" },
  { name: "BullMQ", icon: "mdi:layers-triple", category: "backend" },
  { name: "Server-Sent Events", icon: "mdi:access-point", category: "backend" },

  // Databases
  { name: "MongoDB", icon: "devicon:mongodb", category: "database" },
  { name: "MySQL", icon: "logos:mysql", category: "database" },
  { name: "Mongoose", icon: "mdi:leaf", category: "database" },
  { name: "Pinecone (Vector DB)", icon: "mdi:database-search", category: "database" },

  // AI & Data
  { name: "Google Gemini API", icon: "simple-icons:googlegemini", category: "ai" },
  { name: "Groq SDK", icon: "mdi:lightning-bolt-circle", category: "ai" },
  { name: "RAG Pipelines", icon: "mdi:graph-outline", category: "ai" },
  { name: "DBSCAN Clustering", icon: "mdi:hexagon-multiple-outline", category: "ai" },

  // Tools & DevOps
  { name: "Git", icon: "logos:git-icon", category: "tools" },
  { name: "GitHub", icon: "mdi:github", category: "tools" },
  { name: "Vite", icon: "logos:vitejs", category: "tools" },
  { name: "VS Code", icon: "logos:visual-studio-code", category: "tools" },
  { name: "Docker", icon: "logos:docker-icon", category: "tools" },
  { name: "Cloudinary", icon: "simple-icons:cloudinary", category: "tools" },
  { name: "Resend", icon: "mdi:email-fast-outline", category: "tools" },
  { name: "Google Earth Engine", icon: "mdi:earth", category: "tools" },

  // Concepts
  { name: "MVC Architecture", icon: "mdi:sitemap", category: "concepts" },
  { name: "Role-Based Access Control", icon: "mdi:shield-account", category: "concepts" },
  { name: "Responsive Design", icon: "mdi:responsive", category: "concepts" },
  { name: "OOP", icon: "mdi:cube-outline", category: "concepts" },
];

export const projects = [
  {
    id: "novamind-ai",
    title: "NovaMind AI — Enterprise AI Chatbot Platform",
    dateRange: "June 2026",
    description:
      "Production-hardened AI chatbot with multi-model Gemini key rotation, real-time token streaming via SSE, and an async RAG pipeline (BullMQ + Pinecone) supporting PDF/DOCX/XLSX/PPTX ingestion. Features JWT dual-token auth, OTP verification, Prometheus telemetry, and Docker deployment.",
    image: novaMindImage,
    github: "https://novamind.muhammadsajid.dev",
    technologies: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis (Upstash)",
      "Google Gemini API",
      "Pinecone",
      "BullMQ",
      "Cloudinary",
      "Docker",
      "Prometheus",
      "JWT",
    ],
  },
  {
    id: "thermax",
    title: "ThermaX — Urban Heat Intelligence System",
    dateRange: "Jan 2026 – Present",
    description:
      "Civic intelligence platform fusing GPS-tagged citizen heat reports with NASA/MODIS satellite data via Google Earth Engine to detect Urban Heat Island hotspots. DBSCAN spatial clustering identifies high-risk zones, displayed on an interactive Leaflet heatmap with role-based access for reporters, analysts, and admins.",
    image: thermaXImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/ThermaX",
    technologies: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "DBSCAN",
      "Leaflet",
      "Google Earth Engine",
      "Recharts",
    ],
  },
  {
    id: "preparation-mate",
    title: "Preparation Mate — AI Study & Career Platform",
    dateRange: "July 2026 – Present",
    description:
      "Full-stack study platform that converts uploaded PDFs into summaries, quizzes, and a knowledge-gaps dashboard. Includes a Mock Interview Simulator with real-time scorecards, a Study Planner Wizard, an ATS Resume Reviewer with keyword scoring, and an Admin Console tracking API latency and LLM cost breakdowns.",
    image: prepMateImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/Preparation_Mate",
    technologies: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini SDK",
      "Groq SDK",
      "Cloudinary",
    ],
  },
  {
    id: "uniride",
    title: "UniRide — Student Ride-Pooling Platform",
    dateRange: "Jan 2025 – Feb 2025",
    description:
      "Real-time ride-pooling platform for university students built during a competitive hackathon. Uses Socket.IO for live ride-status updates and driver-rider matching. Earned 20th Place & Public Voting Award at Hack For Humanity 2025.",
    image: unirideImage,
    github: "https://uniride.sunjay.xyz/",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "EJS",
    ],
  },
  {
    id: "pizza-palace",
    title: "Pizza Palace — Pizza Ordering Platform",
    dateRange: "Mar 2026 – Apr 2026",
    description:
      "Full-stack pizza ordering app with JWT auth, a dynamic pizza builder, live order tracking, and a role-based admin dashboard. Includes automated inventory management with low-stock email alerts.",
    image: pizzaPalaceImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/Pizza-Palace",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce (Amazon Clone)",
    dateRange: "Apr 2026",
    description:
      "Production-ready e-commerce platform with product browsing, cart management, checkout flow, and order tracking. Built with a React frontend and an Express.js backend using Sequelize ORM and SQLite.",
    image: ecommerceImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/ecommerce-project",
    technologies: [
      "React",
      "Vite",
      "Axios",
      "Node.js",
      "Express.js",
      "Sequelize",
      "SQLite",
    ],
  },
  {
    id: "climatex",
    title: "ClimateX — Editorial Weather App",
    dateRange: "2026",
    description:
      "Premium weather app with a magazine-style editorial layout, live-ticking local clock, dynamic atmospheric backgrounds, geolocation, bookmarked favorites, hourly forecasts, air quality, UV index, and astronomy highlights. Backed by a Node.js/Express API gateway with Vitest unit tests.",
    image: climateXImage,
    github: "https://weather.muhammadsajid.dev",
    technologies: [
      "React (Vite)",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "Vitest",
    ],
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    dateRange: "Jan 2024",
    description:
      "DOM-driven game built with HTML, CSS, and JavaScript featuring real-time gameplay, score tracking, and UI animations.",
    image: rockPaperScissorsImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/Rock-Paper-Scissor",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const achievements = [
  {
    id: "bachelors-software-engineering",
    range: "Dec 2022 – Present",
    title: "B.E. Software Engineering",
    organization: "Mehran University of Engineering & Technology (MUET), Jamshoro",
    summary:
      "Pursuing a Bachelor's degree in Software Engineering with a focus on modern software development and practical full-stack projects.",
    keyAchievements: [
      "Core coursework: Data Structures & Algorithms, Web Development, Database Systems, OOP, Software Project Management, Human-Computer Interaction, and Artificial Intelligence.",
      "Built multiple production-grade full-stack applications showcasing MERN-stack, AI integration, real-time systems, and geospatial data intelligence.",
      "Developed strong foundations in software architecture, algorithms, system design, and collaborative engineering practices.",
    ],
  },
  {
    id: "hack-for-humanity-2025",
    range: "Feb 2025",
    title: "20th Place & Public Voting Winner — Hack For Humanity 2025",
    organization: "DevPost",
    summary:
      "Ranked 20th overall and won the Public Voting Award among 100+ participating teams in a competitive hackathon sprint.",
    keyAchievements: [
      "Co-built 'UniRide', a real-time student ride-pooling platform solving university inter-city commuting.",
      "Implemented bidirectional WebSocket communication via Socket.IO for live ride-status updates and driver-rider matching.",
      "Contributed across API design, EJS frontend templating, MongoDB data modelling, and deployment.",
      "Designed a responsive UI using Tailwind CSS and EJS templates under a tight hackathon deadline.",
    ],
  },
  {
    id: "java-cert",
    range: "Sep 2023",
    title: "Fundamentals of Java Programming",
    organization: "Coursera",
    summary:
      "Completed a certified course covering core Java programming concepts, OOP principles, and practical programming exercises.",
    keyAchievements: [
      "Gained hands-on experience with Java syntax, data types, control flow, and object-oriented design.",
      "Applied core programming fundamentals that strengthen algorithmic thinking across languages.",
    ],
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: "muhammadsajidrajput20@gmail.com",
    href: "mailto:muhammadsajidrajput20@gmail.com",
    icon: "mdi:email-outline",
    tone: "app-primary",
  },
  {
    label: "Phone",
    value: "+92 345 3696819",
    href: "tel:+923453696819",
    icon: "mdi:phone-outline",
    tone: "app-secondary",
  },
  {
    label: "Location",
    value: "Hyderabad, Sindh, Pakistan",
    href: null,
    icon: "mdi:map-marker-outline",
    tone: "app-tertiary",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-sajid-066248264/",
    icon: "cib:linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Muhammad-Sajid-Rajput",
    icon: "mdi:github",
  },
];
