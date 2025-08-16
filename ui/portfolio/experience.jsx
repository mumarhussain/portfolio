"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiencesData } from "./data";

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

  const itemVariants = (isLeft) => ({
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
    },
  });

  return (
    <section
      id="experience"
      className="relative px-6 sm:px-8 md:px-16 py-16 border-b border-white/10"
    >
      <div className="hidden md:block absolute left-1/2 top-25 h-[62%] w-px bg-limeYellow -translate-x-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView={isInView ? "visible" : "hidden"}
        viewport={{ once: true }}
        className="space-y-8 md:-space-y-12 max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants(true)}
          viewport={{ once: true }}
          className="text-lg text-center mb-12"
        >
          <span className="mt-5 px-6 py-3 cursor-pointer bg-white text-black rounded-full hover:bg-[#d4e600] transition-colors duration-200 shadow-lg">
            👨‍💻 Works Experience
          </span>
        </motion.h2>

        {experiencesData.map((exp, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              variants={itemVariants(isLeft)}
              viewport={{ once: true }}
              className={`relative flex w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              {/* Timeline dot (hidden on mobile, visible from md) */}
              <div className="hidden md:block absolute left-1/2 top-17 w-4 h-4 bg-limeYellow rounded-full border-4 border-black -translate-x-1/2" />

              {/* Card */}
              <div
                className={`
                  relative bg-white/5 border border-white/10 rounded-2xl p-6
                  w-full sm:w-[90%] md:w-[47%]
                  ${isLeft ? "md:pr-8 md:mr-5" : "md:pl-8 md:ml-5"}
                `}
              >
                {/* Pointer triangle (hidden on mobile, visible from md) */}
                <div
                  className={`hidden md:block absolute top-15 z-20 ${
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
