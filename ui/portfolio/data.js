import bexit from "@/public/assets/images/Dashboard1.png";
import optilinko from "@/public/assets/images/optilinko.png";
import characterAi from "@/public/assets/images/characterAi.png";
import csnovels from "@/public/assets/images/csnovels.png";
import marqee from "@/public/assets/images/marqee.png";
import spicey from "@/public/assets/images/spicey.png";
import plagiarismGuard from "@/public/assets/images/plagarismGuard.png";

import {
  MonitorSmartphone,
  ServerCog,
  LayoutDashboard,
  ShieldCheck,
  GaugeCircle,
  Sparkles,
} from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "Optilinko",
    description:
      "Architected a full-stack application using MERN stack and MySQL, featuring scalable REST APIs and a responsive React UI with reusable components. Delivered ~30% performance improvement via frontend and backend optimizations and database query tuning. Built an Admin Dashboard for blog management, increasing content handling efficiency.",
    image: optilinko,
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://optilinko-website.vercel.app/",
    date: "2024",
    featured: true,
    status: "Complete",
  },
  {
    id: 2,
    title: "Bexit Admin Panel",
    description:
      "Architected a centralized business management dashboard using Node.js, Express, and JWT authentication. Features user and business approval flows, role-based access control for admins and owners, real-time revenue and user analytics, and automated CSV/PDF reporting with a responsive Tailwind CSS interface.",
    image: bexit,
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    date: "2024",
    featured: false,
    status: "In Process",
  },
  {
    id: 3,
    title: "PlagiarismGuard",
    description:
      "Implemented core detection services for duplicate and AI-generated text analysis, including real-time content similarity scoring via RESTful APIs. Created responsive React interfaces for document scanning, reporting, and review workflows with third-party detection tool integrations.",
    image: plagiarismGuard, // add your import at the top
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "REST API",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    date: "2024",
    featured: true,
    status: "Complete",
  },
  {
    id: 4,
    title: "Character AI",
    description:
      "Developed a full-stack AI chatbot platform with JWT authentication, real-time chat, AI character customization, and an admin dashboard for user and content management. Built a scalable REST API layer with optimized MongoDB queries for high-concurrency performance.",
    image: characterAi,
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://character-ai-project.vercel.app/",
    date: "2023",
    featured: true,
    status: "Complete",
  },
  {
    id: 5,
    title: "Spicey",
    description:
      "Engineered a secure RESTful backend using Node.js and Express with enhanced MongoDB integration for efficient data storage and retrieval. Implemented user authentication and authorization with role-based access control and protected API endpoints across the platform.",
    image: spicey,
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    date: "2023",
    featured: false,
    status: "In Process",
  },
  {
    id: 6,
    title: "CS Novels",
    description:
      "Contributed as a MERN Stack Developer building efficient REST APIs with Node.js and Express. Designed MongoDB schemas for secure and dynamic content management. Built responsive and visually appealing user interfaces using React.js and Tailwind CSS.",
    image: csnovels,
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://csnovels.com",
    date: "2023",
    featured: false,
    status: "Complete",
  },
  {
    id: 7,
    title: "Marquee Booking System",
    description:
      "Designed and built interactive, user-friendly booking interfaces using Next.js and TypeScript. Utilized Tailwind CSS for responsive design, Zustand for smooth state management, and Firebase for real-time data handling and seamless backend connectivity.",
    image: marqee,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
    ],
    liveUrl: "#",
    date: "2022",
    featured: false,
    status: "In Process",
  },
];

export const services = [
  {
    icon: MonitorSmartphone,
    title: "Full-Stack Web",
    subtitle: "Applications & Platforms",
  },
  {
    icon: GaugeCircle,
    title: "Performance",
    subtitle: "Optimization & Tuning",
  },
  
  {
    icon: ServerCog,        // or: Database
    title: "REST API",
    subtitle: "Design & Architecture",
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    subtitle: "JWT & Role-Based Access",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    subtitle: "& CMS Development",
  },
  {
    icon: Sparkles,     // or: Sparkles / Bot
    title: "AI-Powered",
    subtitle: "Platform Development",
  },
];

export const frontendSkills = [
  { name: "React", level: 92 },
  { name: "Next.js", level: 94 },
  { name: "TypeScript", level: 88 },
  { name: "JavaScript (ES6+)", level: 89 },
  { name: "Tailwind CSS", level: 95 }, 
];

export const backendSkills = [
  { name: "Node.js", level: 90 },
  { name: "Express.js,", level: 91 },
  { name: "REST API Design", level: 88 },
  { name: "JWT Authentication", level: 82 },
  { name: "Session Management", level: 85 },
];

export const toolSkills = [
  { name: "Git & GitHub", level: 95 },
  { name: "AWS", level: 80 },
  { name: "API Integration", level: 88 },
  { name: "DB Management", level: 85 },
];

export const experiencesData = [
  {
    title: "MERN Stack Developer",
    company: "DGSol Marketing Agency",
    location: "Faisalabad, Pakistan",
    period: "Feb 2025 - Present",
    description:
      "Designing and maintaining dynamic web applications using the MERN stack, focusing on seamless user experiences and optimized backend functionality. Integrating secure authentication systems and scalable architecture.",
  },
  {
    title: "MERN Stack Developer",
    company: "Three Arrow Tech",
    location: "Faisalabad, Pakistan",
    period: "June 2024 - Dec 2024",
    description:
      "Built and deployed full-stack applications using MongoDB, Express.js, Next.js, and Node.js. Implemented user authentication and role-based access control with JWT. Optimized database schemas and queries to reduce response time.",
  },
  {
    title: "Frontend Developer",
    company: "TOPSOL Faisalabad",
    location: "Faisalabad, Pakistan",
    period: "Feb 2023 - Apr 2024",
    description:
      "Developed responsive, high-performance web interfaces. Collaborated with UI/UX designers to implement pixel-perfect layouts with Tailwind CSS. Integrated RESTful APIs and real-time data feeds, optimizing requests to reduce page load time.",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Computer Science",
    school: "National University of Modern Languages",
    location: "Faisalabad, Pakistan",
    period: "2023 - Present",
    description:
      "Pursuing a BS in Computer Science with focus on Software Engineering and Machine Learning. Completed advanced coursework in algorithms, data structures, database systems, and AI, maintaining a 3.5+ GPA.",
  },
  {
    degree: "Intermediate in Computer Science",
    school: "Govt. Islamia College",
    location: "Faisalabad, Pakistan",
    period: "2020 - 2022",
    description:
      "Completed ICS with strong foundations in programming, data structures, and computer systems. Captained the college cricket team to the regional finals, delivering strategic leadership and teamwork.",
    achievements: ["GPA: 3.8/4.0", "ACM Programming Team", "Hackathon Winner"],
  },
];

export const testimonialsData = [
  {
    text: "From day one, Umar was pro active and communicative. He made the whole development process feel effortless for our team",
    author: "Mubashbar Nawaz",
  },

  {
    text: "Our platform is faster, smoother, and more user-friendly thanks to his work. He’s the kind of developer who actually cares about the end product.",
    author: "Ayesha Malik",
  },
  {
    text: "He didn’t just build our app — he made it better than we imagined. He understood exactly what we needed and added features we didn’t even think of.",
    author: "Michael Harris",
  },

  {
    text: "I was impressed with how Umar handled challenges. Every time a problem came up, he had a clean, simple solution ready within hours.",
    author: "Sarah Ahmed",
  },
];
