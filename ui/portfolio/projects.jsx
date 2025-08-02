"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye, Calendar, Tag } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400&text=Task+Management+App",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      featured: false,
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description:
        "An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business data.",
      image: "/placeholder.svg?height=300&width=400&text=Analytics+Dashboard",
      category: "web",
      technologies: [
        "Next.js",
        "Python",
        "TensorFlow",
        "PostgreSQL",
        "Chart.js",
      ],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media Mobile App",
      description:
        "A social networking mobile application with photo sharing, real-time messaging, and social features.",
      image: "/placeholder.svg?height=300&width=400&text=Social+Media+App",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false,
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description:
        "A real-time cryptocurrency tracking application with portfolio management and price alerts.",
      image: "/placeholder.svg?height=300&width=400&text=Crypto+Tracker",
      category: "web",
      technologies: ["Vue.js", "Express.js", "WebSocket", "CoinGecko API"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false,
    },
    {
      id: 6,
      title: "Restaurant Management System",
      description:
        "A comprehensive restaurant management system with POS, inventory management, and customer relationship features.",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+System",
      category: "desktop",
      technologies: ["Electron", "React", "SQLite", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2022",
      featured: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "desktop", name: "Desktop Apps" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="projects"
      className="px-8 md:px-16 py-16 border-b border-white/10"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My Professional Projects
          </h2>
          <div className="w-24 h-1 bg-[#e6ff00] mx-auto mb-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in web development, mobile apps, and desktop applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? "bg-[#e6ff00] text-black"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white/5 rounded-2xl border border-white/10 overflow-hidden group relative ${
                project.featured ? "ring-2 ring-[#e6ff00]/50" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-[#e6ff00] text-black px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-[#e6ff00] text-black rounded-full hover:bg-[#d4e600] transition-colors duration-200"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#e6ff00] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Tag className="w-4 h-4 text-[#e6ff00] mr-2" />
                    <span className="text-white/80 text-sm font-medium">
                      Technologies:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#e6ff00]/20 text-[#e6ff00] text-xs rounded-full border border-[#e6ff00]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-[#e6ff00] text-black rounded-lg hover:bg-[#d4e600] transition-colors duration-200 text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-[#e6ff00] to-[#b8cc00] text-black font-semibold rounded-full hover:shadow-lg transition-shadow duration-200">
            View All Projects on GitHub
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Projects };
