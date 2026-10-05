import { Code2, Server, Database, Globe, ShoppingBag, Plane, Building2, Receipt, Layout, MonitorPlay, Bot, Settings } from 'lucide-react';

export const experienceData = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Appverse Technologies",
    location: "Lahore, Pakistan",
    date: "June 2026 – August 2026",
    bullets: [
      "Developed responsive web interfaces using HTML5, CSS3, JavaScript and React",
      "Collaborated with UI/UX designers and backend developers on seamless integration",
      "Built reusable components with Tailwind CSS and REST API integration",
      "Translated design concepts into clean, well-structured code"
    ],
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML5 / CSS3", "REST APIs", "UI/UX Integration"]
  }
];

export const skillsData = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "jQuery", "Angular"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["PHP", "C#", "ASP.NET MVC", ".NET 10", "REST APIs", "Node.js"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["SQL Server", "MongoDB", "Entity Framework Core"]
  },
  {
    category: "Languages & Tools",
    icon: Globe,
    skills: ["English (Professional)", "Urdu (Native)", "Git & GitHub", "SEO", "MS Office"]
  }
];

export const projectsData = [
  {
    id: 1,
    icon: ShoppingBag,
    name: "LUXE — E-Commerce Store",
    desc: "Luxury shopping platform with live cart, category filters, and an animated gallery. Zero-dependency build for maximum performance.",
    bullets: ["Live cart & category filters", "Animated gallery experience", "Zero-dependency, fast build"],
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/uzair23-hub/e-commerce",
    live: null
  },
  {
    id: 2,
    icon: Plane,
    name: "Travel Agency Booking System",
    desc: "Full travel booking platform with destination browsing, online reservations, and a secure admin dashboard with role management.",
    bullets: ["Destination browsing & reservations", "User authentication system", "Role-based admin dashboard"],
    stack: ["C#", "ASP.NET MVC", "Bootstrap"],
    repo: "https://github.com/uzair23-hub/travel-agency",
    live: null
  },
  {
    id: 3,
    icon: Building2,
    name: "Symphony Ltd — IT Management",
    desc: "Enterprise application with 18 database tables, role-based access, student results, GSAP animations, and session-based authentication.",
    bullets: ["18 DB tables, role-based access", "Student results management", "GSAP animations & session auth"],
    stack: [".NET 10", "C#", "EF Core", "SQL Server"],
    repo: "https://github.com/uzair23-hub/it-managment-system",
    live: null
  },
  {
    id: 4,
    icon: Receipt,
    name: "POS Pro — Point of Sale System",
    desc: "Clean dashboard with product management, inventory tracking, bill generation, and full transaction history.",
    bullets: ["Product & inventory management", "Bill generation system", "Full transaction history"],
    stack: ["ASP.NET MVC", "Entity Framework", "SQL Server"],
    repo: "https://github.com/uzair23-hub/pos-pro",
    live: null
  },
  {
    id: 5,
    icon: Layout,
    name: "Full-Stack ASP.NET MVC App",
    desc: "Layered architecture application with a fully responsive UI and scalable, maintainable codebase.",
    bullets: ["Clean layered architecture", "Responsive UI", "Scalable codebase"],
    stack: ["ASP.NET MVC", "JavaScript", "Bootstrap"],
    repo: "https://github.com/uzair23-hub/project-23",
    live: null
  },
  {
    id: 6,
    icon: MonitorPlay,
    name: "Animated UI Frontend",
    desc: "A visually rich frontend project featuring animated components, jQuery interactivity, and a fully responsive layout.",
    bullets: ["Smooth GSAP-powered animations", "jQuery interactivity", "Fully responsive design"],
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    repo: "https://github.com/uzair23-hub/project24",
    live: null
  },
  {
    id: 7,
    icon: Bot,
    name: "Floerix AI — Lead Generator & CRM",
    desc: "AI-powered lead generation system & CRM that scrapes businesses, scores leads, qualifies buying intent, and manages sales pipelines with automation and AI chat assistance.",
    bullets: ["Automated lead scraping & scoring", "AI-driven buying-intent qualification", "Pipeline management with AI chat assistant"],
    stack: ["React", "TypeScript", "Vite", "Gemini API"],
    repo: "https://github.com/uzair23-hub/FLOREIX-AI",
    live: null // REMOVED LIVE LINK AS REQUESTED
  },
  {
    id: 8,
    icon: Settings,
    name: "Keystone Enterprises (Stitch IT Dashboard)",
    desc: "IT, Electronics, Electrical, and Mechanical Complaint Management System with a modern, glassmorphic UI, real-time analytics, and role-based access.",
    bullets: ["Complaint tracking across departments", "Real-time analytics and reporting", "Modern glassmorphism UI"],
    stack: ["React JS", "HTML", "CSS", "Tailwind CSS"],
    repo: "https://github.com/uzair23-hub/stitch_enterprise_it_complaint_management_dashboard",
    live: "https://uzair23-hub.github.io/stitch_enterprise_it_complaint_management_dashboard/#dashboard" // ADDED BOTH LINKS AS REQUESTED
  }
];

export const certsData = [
  { name: "Claude Code Certification", issuer: "Anthropic", year: "2026", color: "#58a6ff" },
  { name: "Web & App Development", issuer: "Aptech Learning Institute", year: "In Progress", color: "#7ee787" },
  { name: "AI for Everyone", issuer: "Bano Qabil Institute", year: "2 Months", color: "#58a6ff" },
  { name: "Certificate in IT (CIT)", issuer: "Engineers & Doctors Institute", year: "3 Months", color: "#bc8cff" },
  { name: "Gemini Mastery", issuer: "FreeAcademy.ai", year: "2026", color: "#ff8c00" }
];

export const educationData = [
  { degree: "Intermediate — Computer Science", school: "BIEK Karachi", year: "2026", border: "#bc8cff" },
  { degree: "Matriculation", school: "BSEK Karachi", year: "2022", border: "#bc8cff" }
];
