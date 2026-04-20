import rockPaperScissorsImage from "../assets/images/rock-paper-scissors.svg";
import unirideImage from "../assets/images/Uniride.webp";
import pizzaPalaceImage from "../assets/images/Pizza-Palace.webp";
import profileImage from "../assets/images/Profile-Picture.jpg";
import ecommerceImage from "../assets/images/E-commerce.webp";

export const heroContent = {
  name: "Muhammad Sajid",
  role: "Frontend Dev",
  tagline: "Solving complex problems with elegant digital solutions.",
  summary:
    "I craft responsive, user-centered experiences using modern frontend tooling, clean architecture, and motion that feels intentional.",
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
  "I'm a Frontend Developer passionate about building clean, responsive, and user-centered web interfaces.",
  "I specialize in JavaScript, React, EJS, and modern styling frameworks like Tailwind CSS to create fast, accessible, and visually engaging websites.",
  "I also have strong fundamentals in Java, C++, Data Structures and Algorithms, and relational databases with MySQL.",
  "Whether building from scratch or refining an existing interface, I focus on performance, accessibility, and code clarity.",
];

export const aboutFeatureCards = [
  {
    title: "Modern Tooling",
    description:
      "Building with React, Tailwind CSS, and modular component architecture for scalable frontends.",
  },
  {
    title: "Precision Design",
    description:
      "Converting static concepts into responsive, polished interfaces with strong visual hierarchy.",
  },
  {
    title: "Agile Mindset",
    description:
      "Rapid iteration, clean code, and collaborative execution from planning to delivery.",
  },
];

export const aboutStats = [
  {
    value: "3+",
    label: "Years Learning & Building",
    tone: "text-app-tertiary",
  },
  { value: "20+", label: "Projects Delivered", tone: "text-app-secondary" },
];

export const skills = [
  { name: "HTML", icon: "devicon:html5" },
  { name: "CSS", icon: "devicon:css3" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React.js", icon: "logos:react" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs" },
  { name: "Express.js", icon: "devicon:express" },
  { name: "MongoDB", icon: "devicon:mongodb" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "EJS", icon: "devicon:ejs" },
  { name: "Socket.IO", icon: "simple-icons:socketdotio" },
  { name: "JWT", icon: "simple-icons:jwt" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "Framer Motion", icon: "simple-icons:framer" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Java", icon: "devicon:java" },
  { name: "C++", icon: "devicon:cplusplus" },
];

export const projects = [
  {
    title: "Uni Ride - Ride Sharing Website",
    dateRange: "Jan 2025 – Feb 2025",
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
    title: "Pizza Palace",
    dateRange: "Mar 2026 – Apr 2026",
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
    title: "Full-Stack E-Commerce Application (Amazon Clone)",
    dateRange: "Apr 2026",
    description:
      "A production-ready full-stack e-commerce platform inspired by Amazon. Features include product browsing and search, shopping cart management, seamless checkout flow, order tracking, and responsive UI. Built with a modern React frontend and a robust Express.js backend using Sequelize ORM and SQLite database.",
    image: ecommerceImage, // add your banner/image import
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
    range: "2022 - 2026",
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
    range: "Jan - Feb 2025",
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
    value: "sajidrajp5@gmail.com",
    href: "mailto:sajidrajp5@gmail.com",
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
