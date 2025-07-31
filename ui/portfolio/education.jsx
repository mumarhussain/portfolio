"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description:
        "Specialized in Machine Learning and Software Engineering. Graduated Magna Cum Laude.",
      achievements: ["GPA: 3.9/4.0", "Research Assistant", "Dean's List"],
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      description:
        "Focused on full-stack development and computer systems. Active in coding competitions.",
      achievements: [
        "GPA: 3.8/4.0",
        "ACM Programming Team",
        "Hackathon Winner",
      ],
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
      id="education"
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
            Education
          </span>
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="w-6 h-6 text-limeYellow mr-3" />
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <h4 className="text-lg text-limeYellow font-medium mb-2">
                    {edu.school}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-white/60 mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, achievementIndex) => (
                  <span
                    key={achievementIndex}
                    className="px-3 py-1 bg-limeYellow/20 rounded-full text-sm text-limeYellow border border-limeYellow/30"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export { Education };
