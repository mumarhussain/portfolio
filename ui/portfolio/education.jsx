"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const education = [
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

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="relative px-8 md:px-16 py-16">
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-25 h-[45%] w-px bg-limeYellow -translate-x-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="-space-y-24 max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-lg text-center mb-12"
        >
          <span className="mt-5 px-6 py-3 cursor-pointer bg-white text-black  rounded-full hover:bg-[#d4e600] transition-colors duration-200 shadow-lg">
            🎓 Education
          </span>
        </motion.h2>

        {education.map((edu, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative flex w-full justify-${
                isLeft ? "start" : "end"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-17 w-4 h-4 bg-limeYellow rounded-full border-4 border-black -translate-x-1/2" />

              {/* Card */}
              <div
                className={`
                  relative bg-white/5 border border-white/10 rounded-2xl p-6
                  w-full md:w-[47%] 
                  ${isLeft ? "pr-8 md:mr-5" : "pl-8 md: ml-5"}
                `}
              >
                {/* Pointer triangle */}
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
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export { Education };
