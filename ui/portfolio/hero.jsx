"use client";
import RoleRotator from "@/components/typeWriter";
import { motion } from "framer-motion";
import { Calendar, Phone, Mail, MapPin, Menu } from "lucide-react";
import Image from "next/image";

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
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  const rightContainerVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        ease: "easeOut",
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative px-6  lg:px-16 py-10 md:pb-20 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side - Profile Image */}
            <motion.div
              variants={leftVariants}
              className="flex justify-center lg:justify-start w-full md:w-1/3 lg:w-1/4"
            >
              <div className="relative">
                <div className="w-auto max-w-60 md:w-60 h-[400px] md:h-96 rounded-full md:rounded-tr-[170px] md:rounded-bl-[170px] md:rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 ">
                  <Image
                    src="/assets/images/umar.jpg"
                    alt="Profile"
                    height={400}
                    width={350}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Social Links Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, ease: "easeOut", duration: 0.6 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg"
                >
                  <div className="flex space-x-4 text-black font-medium">
                    <span className="hover:text-gray-500 cursor-pointer transition-colors">
                      Fb.
                    </span>
                    <span className="hover:text-gray-500 cursor-pointer transition-colors">
                      Gh.
                    </span>
                    <span className="hover:text-gray-500 cursor-pointer transition-colors">
                      Ln.
                    </span>
                    <span className="hover:text-gray-500 cursor-pointer transition-colors">
                      Ins.
                    </span>
                    <span className="hover:text-gray-500 cursor-pointer transition-colors">
                      Drb.
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}

            <motion.div
              variants={rightContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 mt-10 md:mt-0 w-full md:pl-5 lg:pl-10 xl:pl-0  md:w-2/3 lg:w-3/4"
            >
              {/* Greeting */}
              <motion.div
                variants={itemVariants}
                className="space-y-2 lg:space-y-4"
              >
                <p className="text-white/80 text-lg flex items-center">
                  Hello Everyone <span className="ml-2 text-2xl">👋</span>
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight md:tracking-tight lg:tracking-normal">
                  I'm Muhammad Umar Hussain
                </h1>

                <h2 className="text-lg sm:text-3xl lg:text-4xl font-medium sm:inline-flex sm:items-baseline gap-2 sm:whitespace-nowrap">
                  <span className="text-white">I am a </span>
                  <RoleRotator className="text-limeYellow" />
                </h2>
              </motion.div>

              {/* Divider Line */}
              <motion.div
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-limeYellow via-white/30 to-transparent"
              />

              {/* Contact Info Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-limeYellow" />
                  <span className="text-white/80">10.01.2004</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-limeYellow" />
                  <span className="text-white/80">+92 300-6619281</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-limeYellow" />
                  <span className="text-white/80 text-[15px] sm:text-base">
                    mumarhussain126@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-limeYellow" />
                  <span className="text-white/80">
                    Faisalabad Punjab, Pakistan
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Text & CTA */}
          <div className="">
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-flui leading-relaxed my-10"
            >
              With over 2 years of experience, I am a skilled MERN Stack
              Developer proficient in developing and deploying full-stack
              applications. I excel at building interactive front-end interfaces
              using React.js, creating secure backends with Node.js and Express,
              and efficiently managing databases with MongoDB. I have expertise
              in user authentication, real-time data interaction, and responsive
              design. I am committed to delivering high-quality, user-focused
              solutions while effectively utilizing the MERN stack.
            </motion.p>
            <motion.a
              href="/Muhammad_Umar_Hussain_Resume.pdf"
              download="Muhammad_Umar_Hussain_Resume.pdf"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 cursor-pointer bg-limeYellow text-black font-semibold rounded-full hover:bg-[#d4e600] transition-colors duration-500 shadow-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
