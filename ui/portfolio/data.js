import bexit from "@/public/assets/images/Dashboard1.png";
import optilinko from "@/public/assets/images/optilinko.png";
import characterAi from "@/public/assets/images/characterAi.png";
import csnovels from "@/public/assets/images/csnovels.png";
import marqee from "@/public/assets/images/marqee.png";
import spicey from "@/public/assets/images/spicey.png";

import {
  MonitorSmartphone,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  GaugeCircle,
  RefreshCw,
} from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "Optilinko Website",
    description:
      "Developed Bexit – Business Management Admin Panel using Node.js, Express and JWT authentication. Built a centralized dashboard with user/business approvals, role‑based access control for admins and owners, real‑time revenue and user analytics, automated CSV/PDF reporting, and a responsive Tailwind CSS UI.",
    image: optilinko,
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "Mongo DB",
      "Tailwind CSS",
    ],
    liveUrl: "https://optilinko-website.vercel.app/",
    date: "2024",
    featured: false,
    status: "Complete",
  },
  {
    id: 2,
    title: "Bexit Admin Panel",
    description:
      "Developed Bexit – Business Management Admin Panel using Node.js, Express and JWT authentication. Built a centralized dashboard with user/business approvals, role‑based access control for admins and owners, real‑time revenue and user analytics, automated CSV/PDF reporting, and a responsive Tailwind CSS UI.",
    image: bexit,
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "Mongo DB",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    date: "2024",
    featured: false,
    status: "In Process",
  },
  {
    id: 3,
    title: "Character AI",
    description:
      "Developed a full-stack AI chatbot platform using Next.js , Node.js , Express , Mongo DB , and Tailwind CSS. Features include JWT authentication , real-time chat , AI character customization , and an admin dashboard for user and content management. Built a scalable REST API with optimized database queries for performance.",
    image: characterAi,
    technologies: [
      "Next.js",
      "Express.js",
      "Node.js",
      "Mongo DB",
      "Tailwind CSS",
    ],
    liveUrl: "https://character-ai-project.vercel.app/",
    date: "2023",
    featured: true,
    status: "Complete",
  },
  {
    id: 4,
    title: "Spicey",
    description:
      "Developed the backend for the Spicey website using Node.js and Express, creating secure and efficient APIs. Integrated MongoDB for data storage and retrieval and also implements user authentication and authorization for secure access and collaborated with the team using Git for version control to maintain a streamlined development workflow",
    image: spicey,
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "Mongo DB",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    date: "2023",
    featured: false,
    status: "In Process",
  },
  {
    id: 5,
    title: "CS Novel",
    description:
      "Contributed as a MERN Stack Developer in CS Novels, developed the backend using Node.js and Express to deliver efficient APIs. Designed MongoDB databases and ensured secure data management for efficient handling of dynamic content and for frontend use Tailwind CSS with React.js to build responsive and visually appealing user interfaces.",
    image: csnovels,
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "Mongo DB",
      "Tailwind CSS",
    ],
    liveUrl: "https://csnovels.com",
    date: "2023",
    featured: false,
    status: "Complete",
  },
  {
    id: 6,
    title: "Marquee booking system",
    description:
      "Designed the Frontend building interactive and user-friendly interfaces using Next.js and TypeScript. Utilized Tailwind CSS to create responsive and visually appealing designs. Managed state effectively with Zustand for a smooth user experience. Integrated Firebase for real-time data handling and seamless backend connectivity.",
    image: marqee,
    technologies: ["Next.js", "Typescrit", "Tailwind", "Firebase", "Zustand"],
    liveUrl: "#",
    date: "2022",
    featured: true,
    status: "In Process",
  },
];

export const services = [
  { icon: MonitorSmartphone, title: "Web Sites", subtitle: "and Platforms" },
  { icon: Smartphone, title: "Mobile", subtitle: "Applications" },
  {
    icon: LayoutDashboard,
    title: "Admin ",
    subtitle: "Panel and CMS",
  },
  {
    icon: ShieldCheck,
    title: "Authentication ",
    subtitle: "and Authorization",
  },
  {
    icon: GaugeCircle,
    title: "Performance",
    subtitle: "Optimization",
  },
  {
    icon: RefreshCw,
    title: "Website ",
    subtitle: "Maintenance & Support",
  },
];

export const frontendSkills = [
  { name: "React", level: 92 },
  { name: "Next.js", level: 94 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "State Management", level: 90 },
];

export const backendSkills = [
  { name: "Node.js", level: 90 },
  { name: "MySql", level: 91 },
  { name: "PostgreSQL", level: 88 },
  { name: "MongoDB", level: 82 },
  { name: "GraphQL", level: 85 },
];

export const toolSkills = [
  { name: "Git", level: 95 },
  { name: "AWS", level: 80 },
  { name: "Figma", level: 88 },
  { name: "Jest", level: 85 },
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
