"use client";

import { motion } from "framer-motion";
import { services } from "./data";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhatIDo = () => {
  return (
    <section
      id="what-i-do"
      className="relative px-6 md:px-16 py-20 border-b border-limeYellow/10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-start text-3xl md:text-4xl mb-4"
          >
            What i do
            <motion.div
              variants={itemVariants}
              className="w-44 mt-0.5 h-0.5 rounded-r-full bg-gradient-to-r from-limeYellow via-white/60 to-transparent"
            />
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className=" flex flex-col space-y- p-5 rounded-xl items-center text-center shadow-md hover:shadow-lime-500/20 transition duration-500 cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-limeYellow mb-4" />
                <h3 className="text-white font-medium text-lg">
                  {service.title}
                </h3>
                <p className="text-white font-medium text-lg">
                  {service.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { WhatIDo };
