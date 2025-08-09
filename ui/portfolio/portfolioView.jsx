"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Education } from "./education";
import { Experience } from "./experience";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { WhatIDo } from "./whatIDo";
import { ArrowUp } from "lucide-react";
import { Projects } from "./projects";
import Stats from "./stats";

const PortfolioView = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const circleLength = 2 * Math.PI * 45; // 2πr for r=45
  const strokeDashoffset = useTransform(smoothProgress, (progress) => {
    return circleLength - progress * circleLength;
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat font-['Poppins']"
      style={{
        backgroundImage: "url('/assets/images/greenLeaf.avif')",
        backgroundColor: "#0a0a0a",
      }}
    >
      <div className="fixed bottom-5 right-5 z-50 w-12 h-12 ">
        <motion.svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          className="rotate-[-90deg]"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e6ff00"
            strokeWidth="5"
            fill="none"
            opacity="0.2"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e6ff00"
            strokeWidth="9"
            fill="none"
            strokeDasharray={circleLength}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </motion.svg>
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center  cursor-pointer"
        >
          <ArrowUp size={25} className="text-limeYellow" />
        </button>
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center xl:px-20 py-5 md:py-10 lg:py-20 backdrop-blur-xl bg-black/30">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-black/50 rounded-3xl shadow-2xl overflow-hidden"
          >
            <Hero />
            <WhatIDo />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Testimonials />
            <Contact />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioView;
