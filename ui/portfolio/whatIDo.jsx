"use client";
import { services } from "./data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const WhatIDo = () => {
  return (
    <section
      id="what-i-do"
      className="relative px-6 md:px-16 py-20 border-b border-limeYellow/10"
    >
      <motion.div
        variants={staggerContainer(0.15, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.div variants={fadeIn("right", "spring", 1)}>
          <h2 className="text-white text-start text-3xl md:text-4xl mb-4">
            What i do
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "176px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-0.5 h-0.5 rounded-r-full bg-gradient-to-r from-limeYellow via-white/60 to-transparent"
            />
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                whileHover={{ scale: 1.05, y: -10 }}
                className=" flex flex-col space-y- p-5 rounded-xl items-center text-center shadow-md hover:shadow-lime-500/20 transition duration-500 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-12 h-12 text-limeYellow mb-4" />
                </motion.div>
                <h3 className="text-white font-medium text-lg">
                  {service.title}
                </h3>
                <p className="text-white font-medium text-lg">
                  {service.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { WhatIDo };
