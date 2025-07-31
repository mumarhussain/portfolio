"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.",
      name: "Louis L. Marin",
      title: "Founder",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      text: "Working with David has been an absolute game-changer for our company. His attention to detail and creative solutions have exceeded all our expectations. Highly recommended!",
      name: "Sarah Johnson",
      title: "CEO",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      text: "The level of professionalism and expertise David brings to every project is outstanding. Our website performance improved by 300% after his optimization work.",
      name: "Michael Chen",
      title: "CTO",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      text: "David's innovative approach to problem-solving and his ability to deliver on time has made him our go-to developer. The results speak for themselves.",
      name: "Emily Rodriguez",
      title: "Product Manager",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      text: "I've worked with many developers, but David's combination of technical skills and creative vision is unmatched. He truly understands what clients need.",
      name: "James Wilson",
      title: "Marketing Director",
      image: "/placeholder.svg?height=60&width=60",
    },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section
      id="testimonials"
      className="px-8 md:px-16 py-16 border-b border-white/10"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What The People Saying
          </h2>
          <div className="w-24 h-1 bg-limeYellow mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 lg:block hidden"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 lg:block hidden"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            key={currentSlide}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 left-4">
                  <Quote className="w-8 h-8 text-limeYellow fill-current" />
                </div>

                {/* Testimonial Text */}
                <div className="pt-8 pb-6">
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {testimonial.text}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-4"></div>

                {/* Profile Section */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600 flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/60 text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-2"
          >
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index
                      ? "bg-limeYellow"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              )
            )}
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-6 lg:hidden">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { Testimonials };
