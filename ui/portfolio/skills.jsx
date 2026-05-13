"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server } from "lucide-react";
import { frontendSkills, backendSkills, toolSkills } from "./data";

const premiumEase = [0.25, 0.46, 0.45, 0.94];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      transition: { ease: premiumEase, duration: 0.6 },
    },
  };

  const circleVariants = (level) => ({
    hidden: { strokeDashoffset: 440 },
    visible: {
      strokeDashoffset: 440 - (440 * level) / 100,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  });

  const renderSkillBar = (skill, index) => (
    <div key={skill.name}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-white/80 tracking-wide">
          {skill.name}
        </span>
        <span className="text-[10px] font-bold bg-limeYellow/10 text-limeYellow border border-limeYellow/20 px-2 py-0.5 rounded-full">
          {skill.level}%
        </span>
      </div>
      <div className="relative w-full bg-white/[0.06] rounded-full h-[3px]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
          className="relative bg-limeYellow h-[3px] rounded-full"
          style={{ boxShadow: "0 0 8px rgba(203,239,9,0.6)" }}
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-limeYellow shadow-[0_0_6px_rgba(203,239,9,0.8)]" />
        </motion.div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="relative px-6 lg:px-16 py-20 lg:py-28 border-b border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-limeYellow/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-limeYellow/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-10 lg:mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-limeYellow/70 font-medium mb-3">
              What I Work With
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
              Skills & Technologies
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-limeYellow shrink-0" />
              <span className="text-limeYellow text-sm leading-none">✦</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </motion.div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-limeYellow/40 shrink-0" />
            <p className="text-xs uppercase tracking-[0.25em] text-white/30 font-semibold shrink-0">
              Tools and other
            </p>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="flex flex-wrap items-stretch justify-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 pb-16 border-b border-white/[0.06]">
            {toolSkills.map((tool) => {
              const radius = 70;
              const circumference = 2 * Math.PI * radius;

              return (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-limeYellow/20 hover:bg-white/[0.05] transition-all duration-300 w-full"
                >
                  <svg
                    viewBox="0 0 160 160"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rotate-[-90deg]"
                  >
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      stroke="#000"
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
                      strokeDashoffset={
                        circumference - (tool.level / 100) * circumference
                      }
                      initial="hidden"
                      whileInView={isInView ? "visible" : "hidden"}
                      viewport={{ once: true }}
                      variants={circleVariants(tool.level)}
                      strokeLinecap="round"
                    />

                    <text
                      x="80"
                      y="72"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="18"
                      fontWeight="700"
                      transform="rotate(90, 80, 72)"
                    >
                      {tool.level}%
                    </text>
                    <text
                      x="80"
                      y="92"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.4)"
                      fontSize="9"
                      transform="rotate(90, 80, 92)"
                    >
                      {tool.name}
                    </text>
                  </svg>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: premiumEase }}
            viewport={{ once: true }}
            className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="pointer-events-none select-none absolute left-2 top-1/2 -translate-y-1/2 uppercase text-white/[0.06] font-black text-5xl lg:text-6xl rotate-90 tracking-[16px] whitespace-nowrap"
            >
              Frontend
            </motion.p>

            <div className="relative z-10 flex items-center gap-2 mb-6">
              <Code2 className="w-4 h-4 text-limeYellow" />
              <span className="text-xs uppercase tracking-[0.2em] text-limeYellow font-semibold">
                Frontend
              </span>
            </div>

            <div className="relative z-10 space-y-4 pl-4 sm:pl-6">
              {frontendSkills.map((skill, index) =>
                renderSkillBar(skill, index)
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: premiumEase }}
            viewport={{ once: true }}
            className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 sm:p-8 overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="pointer-events-none select-none absolute left-2 top-1/2 -translate-y-1/2 uppercase text-white/[0.06] font-black text-5xl lg:text-6xl rotate-90 tracking-[16px] whitespace-nowrap"
            >
              Backend
            </motion.p>

            <div className="relative z-10 flex items-center gap-2 mb-6">
              <Server className="w-4 h-4 text-limeYellow" />
              <span className="text-xs uppercase tracking-[0.2em] text-limeYellow font-semibold">
                Backend
              </span>
            </div>

            <div className="relative z-10 space-y-4 pl-4 sm:pl-6">
              {backendSkills.map((skill, index) =>
                renderSkillBar(skill, index)
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
