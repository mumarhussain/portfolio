"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Education } from "./education";
import { Experience } from "./experience";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";

const PortfolioView = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat font-['Poppins']"
      style={{
        backgroundImage: "url('/assets/images/greenLeaf.avif')",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-limeYellow to-[#b8cc00] transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Main Glass Container with 80px spacing */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-20 py-20">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-black/30 border border-black/50 rounded-3xl shadow-2xl overflow-hidden"
          >
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Testimonials />
            <Contact />
          </motion.div>
        </div>
      </main>
    </div>
  );
};
export default PortfolioView;
