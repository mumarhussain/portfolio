"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frontendSkills = [
    { name: "React", level: 92 },
    { name: "Next.js", level: 94 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "State Management", level: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 90 },
    { name: "MySql", level: 85 },
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "GraphQL", level: 80 },
  ];

  const toolSkills = [
    { name: "Git", level: 95 },
    { name: "AWS", level: 80 },
    { name: "Figma", level: 88 },
    { name: "Jest", level: 85 },
  ];

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

  return (
    <section
      id="skills"
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
          className="text-3xl md:text-4xl text-start mb-12"
        >
          <span className="text-white">Skills & Technologies</span>

          <motion.div
            variants={itemVariants}
            className="w-96 mt-1 h-0.5 rounded-r-full bg-gradient-to-r from-limeYellow via-white/60 to-transparent"
          />
        </motion.h2>
        
        <div className="flex items-center justify-center">
          <p className="uppercase text-white/20 inline-flex font-bold text-4xl mb-5 tracking-[2px]">
            Tools and other
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mb-16 border-b-4 pb-10 border-limeYellow/10 ">
          {toolSkills.map((tool, index) => {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const progress = circumference - (tool.level / 100) * circumference;

            return (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                className="flex flex-col items-center justify-center"
              >
                <svg width="160" height="160" className="rotate-[-90deg]">
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="#000000"
                    strokeWidth="6"
                    fill="none"
                    opacity="0.2"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="#D1ED5D"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    strokeLinecap="square"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="18"
                    fontWeight="bold"
                    transform="rotate(90, 80, 80)"
                  >
                    {tool.level}%
                  </text>
                </svg>
                <p className="mt-2 text-white text-sm font-medium text-center">
                  {tool.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Frontend Skills */}
        <motion.div variants={itemVariants}>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center w-[10%]">
              <p className="uppercase text-white/20 font-bold text-4xl rotate-90 tracking-[12px]">
                Frontend
              </p>
            </div>

            {/* Skill Bars */}
            <div className="space-y-4 w-[90%]">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-white text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="bg-limeYellow h-1 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={itemVariants}>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center w-[10%]">
              <p className="uppercase text-white/20 font-bold text-4xl rotate-90 tracking-[12px]">
                Backend
              </p>
            </div>

            {/* Skill Bars */}
            <div className="space-y-4 w-[90%]">
              {backendSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-white text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="bg-limeYellow h-1 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Skills };
