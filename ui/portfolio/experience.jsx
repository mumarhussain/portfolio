"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines",
        "Reduced deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Palo Alto, CA",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications. Collaborated with design team to implement pixel-perfect UI components.",
      achievements: [
        "Built 3 major product features",
        "Improved code coverage to 85%",
        "Optimized database queries",
        "Mentored 2 junior developers",
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Kubernetes"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Los Angeles, CA",
      period: "2018 - 2020",
      description:
        "Created responsive web applications and interactive user interfaces for various clients across different industries.",
      achievements: [
        "Delivered 15+ client projects",
        "Improved user engagement by 35%",
        "Implemented responsive designs",
        "Collaborated with UX team",
      ],
      technologies: ["JavaScript", "React", "Sass", "Webpack", "Git"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="experience"
      className="px-8 md:px-16 py-16 border-b border-white/10"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-limeYellow to-[#b8cc00] bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-8 w-4 h-4 bg-gradient-to-r from-limeYellow to-[#b8cc00] rounded-full border-4 border-black"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-6 h-6 text-limeYellow mr-3" />
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <h4 className="text-lg text-limeYellow font-medium mb-2">
                    {exp.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-white/60 mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h5 className="text-white font-medium mb-3">
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-center text-white/70"
                    >
                      <div className="w-2 h-2 bg-limeYellow rounded-full mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-white font-medium mb-3">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-limeYellow/20 rounded-full text-sm text-limeYellow border border-limeYellow/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export { Experience };
