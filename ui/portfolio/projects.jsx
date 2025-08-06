"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Eye, Calendar, Tag } from "lucide-react";
import { projectsData } from "./data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
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
    hidden: { y: 120, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
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
          <h2 className="text-white text-3xl md:text-4xl text-start">
            {" "}
            My Projects
          </h2>
          <motion.div
            variants={itemVariants}
            className="w-52 mt-1 h-0.5 rounded-r-full bg-gradient-to-r from-limeYellow via-white/60 to-transparent"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer"
          layout
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.5,
                ease: "backOut",
              }}
              whileHover={{ y: -5 }}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden group relative "
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover bg-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project?.status === "Complete" ? (
                    <Link
                      href={project.liveUrl}
                      className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  ) : (
                    <p className="text-white font-medium text-lg">In Process</p>
                  )}
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

                <div className="mb-4">
                  <div className="flex items-center ">
                    <Tag className="w-4 h-4 text-[#e6ff00] mr-2" />
                    <span className="text-white/80 text-sm font-medium">
                      Technologies:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 py-3">
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
                  <Link
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-[#e6ff00] text-black rounded-lg hover:bg-[#d4e600] transition-colors duration-200 text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Projects };
