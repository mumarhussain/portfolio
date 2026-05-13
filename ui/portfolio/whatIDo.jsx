"use client";
import { services } from "./data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhatIDo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 16,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.9, rotate: -6, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 18 },
    },
  };

  const textVariants = {
    hidden: { y: 8, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.28, ease: "easeOut" },
    },
  };

  const gridColSpans = [
    "lg:col-span-5",
    "lg:col-span-3",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-5",
    "lg:col-span-3",
  ];

  return (
    <section
      id="what-i-do"
      className="relative px-6 lg:px-16 py-20 lg:py-28 border-b border-limeYellow/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-limeYellow/[0.025] rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={textVariants}>
          <p className="text-xs uppercase tracking-[0.3em] text-limeYellow/60 font-semibold mb-3">
            My Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white text-start">
            What i do
          </h2>
          <div className="flex items-center gap-4 mt-3 mb-16">
            <div className="w-10 h-[2px] bg-limeYellow shrink-0" />
            <span className="text-limeYellow text-xs leading-none">✦</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                whileTap={{ scale: 0.99 }}
                className={`group relative overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-limeYellow/20 hover:bg-white/[0.05] rounded-2xl p-7 lg:p-8 transition-colors duration-300 cursor-pointer text-start ${gridColSpans[index] ?? ""}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-limeYellow/[0.05] rounded-full blur-2xl" />
                </div>

                {index === 0 ? (
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6 h-full">
                    <motion.div
                      variants={iconVariants}
                      className="flex-shrink-0"
                      transition={{ type: "spring" }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-limeYellow/10 border border-limeYellow/20 flex items-center justify-center group-hover:bg-limeYellow/15 transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-limeYellow" />
                      </div>
                    </motion.div>

                    <div className="flex flex-col gap-3">
                      <motion.span
                        variants={textVariants}
                        className="text-4xl font-black text-white/[0.04] select-none leading-none"
                      >
                        01
                      </motion.span>
                      <motion.h3
                        variants={textVariants}
                        className="text-white font-bold text-xl tracking-tight"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        variants={textVariants}
                        className="text-white/50 text-sm leading-relaxed max-w-md"
                      >
                        {service.subtitle}
                      </motion.p>
                      <motion.div
                        variants={textVariants}
                        className="mt-2 flex items-center gap-2 text-limeYellow/70 text-xs font-semibold uppercase tracking-widest group-hover:text-limeYellow transition-colors duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10">
                    <span className="absolute top-0 right-0 text-4xl font-black text-white/[0.04] select-none leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 rounded-xl bg-limeYellow/10 border border-limeYellow/20 flex items-center justify-center mb-5 group-hover:bg-limeYellow/15 transition-colors duration-300"
                      transition={{ type: "spring" }}
                    >
                      <service.icon className="w-5 h-5 text-limeYellow" />
                    </motion.div>

                    <motion.h3
                      variants={textVariants}
                      className="text-white font-bold text-lg tracking-tight mb-2"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      variants={textVariants}
                      className="text-white/50 text-sm leading-relaxed"
                    >
                      {service.subtitle}
                    </motion.p>

                    <motion.div
                      variants={textVariants}
                      className="mt-6 flex items-center gap-2 text-limeYellow/70 text-xs font-semibold uppercase tracking-widest group-hover:text-limeYellow transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { WhatIDo };
