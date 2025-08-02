"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "MERN Developer",
    company: "DGSol Marketing Agency",
    location: "Faisalabad, Pakistan",
    period: "2024 - Present",
    description:
      "I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.",
  },
  {
    title: "Frontend Developer",
    company: "Three Arrow Solutions",
    location: "Faisalabad, Pakistan",
    period: "2021 - 2022",
    description:
      "I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.",
  },
  {
    title: "Full Stack Developer",
    company: "TOPSOL Faisalabad",
    location: "Faisalabad, Pakistan",
    period: "2022 - 2024",
    description:
      "I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.",
  },
];

const Experience = () => {
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
      <div className="absolute left-1/2 top-25 h-3/5 w-px bg-limeYellow -translate-x-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="-space-y-12 max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-lg text-center mb-12"
        >
          <span
            className="mt-5 px-6 py-3 cursor-pointer bg-white text-black  rounded-full hover:bg-[#d4e600] transition-colors duration-200 shadow-lg"
            // className="bg-gradient-to-r from-limeYellow to-[#b8cc00] bg-clip-text text-transparent"
          >
            👨‍💻 Works Experience
          </span>
        </motion.h2>

        {experiences.map((exp, idx) => {
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
                <div
                  className={`absolute top-15 z-20 ${
                    isLeft
                      ? "right-0 -mr-3.5 border-l-[14px]"
                      : "left-0 -ml-3.5 border-r-[14px]"
                  } border-t-[14px] border-b-[14px] border-transparent ${
                    isLeft ? "border-l-white/5" : "border-r-white/5"
                  }`}
                />

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

                <p className="text-white/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export { Experience };
