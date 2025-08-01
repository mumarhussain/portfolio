"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Smartphone,
  Camera,
  BarChart2,
  ActivitySquare,
  Users,
} from "lucide-react";

const services = [
  { icon: MonitorSmartphone, title: "Web Sites", subtitle: "and Platforms" },
  { icon: Smartphone, title: "Mobile", subtitle: "Applications" },
  { icon: ActivitySquare, title: "Strategy", subtitle: "and Branding" },
  { icon: Camera, title: "Product", subtitle: "Photography" },
  { icon: BarChart2, title: "SEO", subtitle: "Optimization" },
  { icon: Users, title: "Social Media", subtitle: "Management" },
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="relative px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-limeYellow text-start    text-3xl md:text-4xl font-semibold mb-4"
          >
            What i do
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-8 flex flex-col items-center text-center shadow-md hover:shadow-lime-500/20 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-limeYellow mb-4" />
                <h3 className="text-white font-medium text-lg">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { WhatIDo };
