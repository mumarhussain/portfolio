import img from "@/public/assets/images/darkGreenlead.avif";
import bexit from "@/public/assets/images/Dashboard1.png";
import optilinko from "@/public/assets/images/optilinko.png";
import characterAi from "@/public/assets/images/characterAi.png";
import csnovels from "@/public/assets/images/csnovels.png";
import marqee from "@/public/assets/images/marqee.png";

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
    image: img,
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
