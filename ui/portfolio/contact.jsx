"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      value: "mumarhussain126@gmail.com",
      href: "mailto:mumarhussain126@gmail.com",
    },
    {
      icon: Phone,
      value: "+92 300-6619281",
      href: "tel:+92 300-6619281",
    },
    {
      icon: MapPin,
      value: "Faisalabad Punjab, Pakistan",
      href: "https://www.google.com/maps/place/Green+Dots+High+School/@31.4323436,73.0955718,17z/data=!3m1!4b1!4m6!3m5!1s0x3922699695f95145:0x1145e18700e36590!8m2!3d31.432339!4d73.0981521!16s%2Fg%2F11l8ghsbq_?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mumarhussain", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mumarhussain",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/umarhussain230",
      label: "Facebook",
    },
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="contact" className="px-8 md:px-16 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-start mb-14"
        >
          <span className="text-limeYellow">Get In Touch</span>
          <motion.div
            variants={itemVariants}
            className="w-60 mt-1 h-0.5 rounded-r-full bg-gradient-to-r from-limeYellow via-white/60 to-transparent"
          />
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold text-white mb-6"
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-4 border-b border-white/10 hover:bg-white/10 hover:rounded-t-2xl transition-colors duration-200"
                  >
                    <info.icon className="w-6 h-6 text-[#D1ED5D] mr-4" />
                    <div>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-white mb-4"
              >
                Connect with me:
              </motion.h3>
              <motion.div variants={itemVariants} className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200"
                  >
                    <social.icon className="w-6 h-6 text-limeYellow" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              Send Message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={formItemVariants}
                className="grid md:grid-cols-1 gap-4"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 border-b border-white/20 text-white placeholder-white/50 focus:outline-none"
                  placeholder="Enter name here"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 border-b border-white/20 text-white placeholder-white/50 focus:outline-none"
                  placeholder="Enter email here"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3 border-b border-white/20 text-white placeholder-white/50 focus:outline-none"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="message"
                  className="block text-white/70 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-limeYellow focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.button
                variants={formItemVariants}
                type="submit"
                whileHover={{ scale: 1.01, backgroundColor: "#d4e600" }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer flex items-center justify-center space-x-2 px-6 py-3 bg-limeYellow rounded-xl text-black font-semibold transition-colors duration-500"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white">
            Made with ❤️ by{" "}
            <span className="text-limeYellow">Muhammad Umar Hussain</span>{" "}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Contact };
