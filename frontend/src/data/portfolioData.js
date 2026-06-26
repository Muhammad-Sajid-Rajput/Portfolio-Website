import rockPaperScissorsImage from "../assets/images/rock-paper-scissors.svg";
import unirideImage from "../assets/images/Uniride.webp";
import pizzaPalaceImage from "../assets/images/Pizza-Palace.webp";
import profileImage from "../assets/images/Profile-Picture.webp";
import ecommerceImage from "../assets/images/E-commerce.webp";

export const heroContent = {
  name: "Muhammad Sajid",
  role: "Full-Stack MERN Developer",
  tagline:
    "Building scalable web applications with clean architecture and exceptional user experiences.",
  summary:
    "Software Engineering student and Full-Stack MERN Developer passionate about creating production-ready web applications. I specialize in React, Node.js, Express, and MongoDB — building secure, responsive, and high-performance applications with modern development practices.",
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
  "I'm a Full-Stack MERN Developer and Software Engineering student passionate about building scalable, user-focused web applications from idea to deployment.",
  "My expertise includes React, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, and responsive frontend development using Tailwind CSS.",
  "I enjoy designing clean architectures, solving real-world problems, and creating applications that balance performance, maintainability, and great user experience.",
  "Through projects including an e-commerce platform, pizza ordering system, and real-time ride-sharing application, I've gained practical experience with authentication, WebSockets, role-based access control, database design, and modern software engineering practices.",
];

export const skills = [
  // Frontend
  { name: "React.js", icon: "logos:react", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: "logos:javascript", category: "frontend" },
  { name: "HTML5", icon: "devicon:html5", category: "frontend" },
  { name: "CSS3", icon: "devicon:css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss", category: "frontend" },
  { name: "EJS", icon: "devicon:ejs", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "logos:nodejs", category: "backend" },
  { name: "Express.js", icon: "devicon:express", category: "backend" },
  { name: "RESTful API Design", icon: "mdi:api", category: "backend" },
  { name: "Socket.IO", icon: "simple-icons:socketdotio", category: "backend" },
  { name: "JWT Authentication", icon: "simple-icons:jwt", category: "backend" },

  // Databases
  { name: "MongoDB", icon: "devicon:mongodb", category: "database" },
  { name: "MySQL", icon: "logos:mysql", category: "database" },

  // Tools
  { name: "Git", icon: "logos:git-icon", category: "tools" },
  { name: "GitHub", icon: "mdi:github", category: "tools" },
  { name: "Vite", icon: "logos:vitejs", category: "tools" },
  { name: "VS Code", icon: "logos:visual-studio-code", category: "tools" },

  // Concepts
  { name: "MVC Architecture", icon: "mdi:sitemap", category: "concepts" },
  { name: "Role-Based Access Control", icon: "mdi:shield-account", category: "concepts" },
  { name: "Responsive Design", icon: "mdi:responsive", category: "concepts" },
  { name: "OOP", icon: "mdi:cube-outline", category: "concepts" },
];

export const projects = [
  {
    id: "uniride",
    title: "Uni Ride - Ride Sharing Website",
    dateRange: "Jan 2025 - Feb 2025",
    description:
      "UniRide is a university-based carpooling website that connects students for shared rides. Users can create, join, or cancel rides in real-time, view ride history, and receive instant updates.",
    image: unirideImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/Ride-sharing-website",
    technologies: [
      "MongoDB",
      "Passport.js",
      "Resend",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
  },
  {
    id: "pizza-palace",
    title: "Pizza Palace",
    dateRange: "Mar 2026 - Apr 2026",
    description:
      "A full-stack pizza ordering platform built with React and Node.js, featuring secure JWT authentication, a dynamic pizza builder, live order tracking, and a role-based admin dashboard. Includes automated inventory management with low-stock email alerts and a structured order lifecycle system.",
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
    title: "Full-Stack E-Commerce Application (Amazon Clone)",
    dateRange: "Apr 2026",
    description:
      "A production-ready full-stack e-commerce platform inspired by Amazon. Features include product browsing and search, shopping cart management, seamless checkout flow, order tracking, and responsive UI. Built with a modern React frontend and a robust Express.js backend using Sequelize ORM and SQLite database.",
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
    id: "rock-paper-scissors",
    title: "Rock Paper Scissor",
    dateRange: "Jan 2024",
    description:
      "A DOM-driven game built with HTML, CSS, and JavaScript featuring real-time gameplay, score tracking, and lightweight UI animations.",
    image: rockPaperScissorsImage,
    github: "https://github.com/Muhammad-Sajid-Rajput/Rock-Paper-Scissor",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const achievements = [
  {
    id: "bachelors-software-engineering",
    range: "2022-2026",
    title: "Bachelor's in Software Engineering",
    organization: "Mehran University of Engineering and Technology, Jamshoro",
    summary:
      "Currently pursuing a Bachelor's degree in Software Engineering with focus on modern software development and practical projects.",
    keyAchievements: [
      "Studying core subjects including Data Structures, Web Development, Databases, OOP, and Artificial Intelligence.",
      "Completed multiple practical projects focused on full-stack web development and real-world software solutions.",
      "Developed a strong foundation in software design, algorithms, system architecture, and collaborative team projects.",
    ],
  },
  {
    id: "hack-for-humanity-2025",
    range: "Jan-Feb 2025",
    title: "Hack for Humanity - 2025",
    organization: "DevPost",
    summary:
      "Ranked 20th overall and won the Public Voting Award among 100+ participating teams.",
    keyAchievements: [
      "Built 'UniRide', a real-time student ride pooling platform to solve university commuting issues.",
      "Developed backend using Node.js, Express.js, and MongoDB.",
      "Implemented real-time ride updates using WebSockets with Socket.IO.",
      "Designed responsive UI using Tailwind CSS and EJS templates.",
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
