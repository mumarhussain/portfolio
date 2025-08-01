"use client";

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="relative px-8 md:px-16 py-20 border-b border-white/10"
    >
      {/* Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 w-12 h-12 bg-limeYellow rounded-full flex items-center justify-center hover:bg-[#d4e600] transition-colors duration-200"
      >
        <Menu className="w-6 h-6 text-black" />
      </motion.button>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between items-center">
            {/* Left Side - Profile Image */}
            <motion.div
              variants={leftVariants}
              className="flex justify-center lg:justify-start md:w-1/4"
            >
              <div className="relative">
                <div className="w-60 h-96 rounded-tr-[170px]  rounded-bl-[170px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 ">
                  {/* <Image
                    src="/assets/images/IMG_5112.JPEG"
                    alt="Profile"
                    height={300}
                    width={250}
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                {/* Social Links Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg"
                >
                  <div className="flex space-x-4 text-black font-medium">
                    <span className="hover:text-limeYellow cursor-pointer transition-colors">
                      Fb.
                    </span>
                    <span className="hover:text-limeYellow cursor-pointer transition-colors">
                      Tw.
                    </span>
                    <span className="hover:text-limeYellow cursor-pointer transition-colors">
                      Ins.
                    </span>
                    <span className="hover:text-limeYellow cursor-pointer transition-colors">
                      Drb.
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div variants={rightVariants} className="space-y-8 md:w-3/4">
              {/* Greeting */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-white/80 text-lg flex items-center">
                  Hello Everyone <span className="ml-2 text-2xl">👋</span>
                </p>

                <h1 className="lg:text-4xl font-medium text-white leading-tight">
                  I'm Muhammad Umar Hussain
                </h1>

                <h2 className="text-4xl font-medium">
                  <span className="text-white">I am a </span>
                  <span className="text-limeYellow">MERN Stack Developer</span>
                  <span className="text-white">.</span>
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
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                  <span className="text-white/80">
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

              {/* Description */}
            </motion.div>
          </div>
          <div
            className="mt-10
          "
          >
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg leading-relaxed"
            >
              Bringing over 2+ year of experience, I'm a skilled MERN Stack
              Developer with hands-on experience in developing and deploying
              full-stack applications. Skilled in building interactive front-end
              interfaces with React.js, creating secure backends with Node.js
              and Express, and efficiently managing databases using MongoDB.
              Expert in user authentication, real-time data interaction, and
              responsive design.Committed to delivering high-quality and
              user-focused solutions manipulating the MERN stack.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 px-8 py-4 cursor-pointer bg-limeYellow text-black font-semibold rounded-full hover:bg-[#d4e600] transition-colors duration-200 shadow-lg"
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
