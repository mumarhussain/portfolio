"use client";
import RoleRotator from "@/components/typeWriter";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Github,
  Linkedin,
  Instagram,
  Dribbble,
  Download,
} from "lucide-react";
import Image from "next/image";

const premiumEase = [0.25, 0.46, 0.45, 0.94];

const socialLinks = [
  {
    href: "https://www.facebook.com/umarhussain230",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://github.com/mumarhussain",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mumarhussain",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/umarhussain_230/",
    icon: Instagram,
    label: "Instagram",
  },
  { href: "#", icon: Dribbble, label: "Dribbble" },
];

const contactInfo = [
  { icon: Calendar, value: "10.01.2004" },
  { icon: Phone, value: "+92 300-6619281" },
  { icon: Mail, value: "mumarhussain126@gmail.com" },
  { icon: MapPin, value: "Faisalabad Punjab, Pakistan" },
];

const Hero = () => {
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

  const leftVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: premiumEase },
    },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: premiumEase },
    },
  };

  return (
    <section
      id="home"
      className="hero-section relative px-6 lg:px-16 py-16 lg:py-24 border-b border-white/10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[18%] -translate-x-1/2 -translate-y-1/2 w-[min(520px,80vw)] h-[min(520px,80vw)] rounded-full bg-limeYellow/[0.05] blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-20">
            {/* Left — Profile Image (~40%) */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center md:justify-start w-full md:w-[40%] shrink-0"
            >
              <div className="relative">
                <motion.div
                  aria-hidden="true"
                  className="absolute -top-8 -right-10 w-28 h-28 rounded-full border border-limeYellow/20 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="absolute -bottom-12 -left-8 w-10 h-10 border border-limeYellow/30 rotate-45 pointer-events-none"
                  animate={{ y: [0, -10, 0], rotate: [45, 50, 45] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute left-0 top-[20%] z-20 w-1 h-[60%] bg-limeYellow" />

                <div className="relative ring-2 ring-limeYellow/40 ring-offset-4 ring-offset-black rounded-tl-[100px] rounded-br-[100px] overflow-hidden w-full max-w-[280px] md:w-[280px] h-[400px] md:h-[420px] bg-gradient-to-b from-gray-800 to-gray-900">
                  <Image
                    src="/assets/images/profile1.png"
                    alt="Profile"
                    height={400}
                    width={350}
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, ease: premiumEase, duration: 0.6 }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={label}
                        whileHover={{ y: -2, scale: 1.1 }}
                        className="text-white hover:text-limeYellow transition-colors duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — Content (~60%) */}
            <motion.div
              variants={rightContainerVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-[60%] space-y-8 md:pt-4"
            >
              <motion.div variants={itemVariants} className="space-y-4 lg:space-y-5">
                <p className="text-xs tracking-[0.3em] uppercase text-limeYellow/70 font-medium">
                  Hello Everyone 👋
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                    I&apos;m Muhammad Umar Hussain
                  </h1>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/30 bg-green-400/5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 tracking-widest uppercase">
                      Available for work
                    </span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-white/90">I am a</span>
                  <span
                    style={{ textShadow: "0 0 30px rgba(203,239,9,0.4)" }}
                  >
                    <RoleRotator className="text-limeYellow" />
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-[2px] bg-limeYellow shrink-0" />
                <span className="text-limeYellow text-sm leading-none">✦</span>
                <div className="flex-1 h-px bg-white/10" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
              >
                {contactInfo.map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="p-2 border border-limeYellow/30 rounded-md bg-limeYellow/5 hover:bg-limeYellow/10 transition-colors duration-300 shrink-0">
                      <Icon className="w-4 h-4 text-limeYellow" />
                    </div>
                    <span className="text-white/70 text-sm">{value}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="max-w-xl text-white/60 text-sm leading-relaxed"
              >
                MERN Stack Developer with 3+ years of experience building
                production-grade full-stack web applications. Specializes in
                scalable REST API architecture, reusable React component systems,
                and database design across MongoDB, MySQL, and PostgreSQL. Proven
                track record of delivering measurable performance improvements —
                including 30% system performance gains and reductions in UI
                development time. Hands-on experience with AIpowered platforms,
                real-time applications, and CI/CD pipelines. Currently pursuing a
                BSCS in Computer Science while working full-time in the industry
              </motion.p>

              <motion.a
                href="/Muhammad Umar Hussain Resume.pdf"
                download="Muhammad_Umar_Hussain_Resume.pdf"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3 bg-limeYellow text-black font-bold text-sm tracking-widest uppercase overflow-hidden rounded-sm cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                />
                <span className="relative z-10">Download Resume</span>
                <Download className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
