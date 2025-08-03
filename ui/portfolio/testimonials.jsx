import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RightArrow from "@/public/assets/images/RightArrow.svg";
import TestimonialCard from "./testimonialCard";
import Image from "next/image";

const testimonials = [
  {
    text: "I love how easy it is to integrate these lessons into my daily life. Highly recommend to anyone looking for a change!",
    author: "James K, Denver",
  },

  {
    text: "I love how easy it is to integrate these lessons into my daily life. Highly recommend to anyone looking for a change!",
    author: "Sarah L, Austin",
  },
  {
    text: "I love how easy it is to integrate these lessons into my daily life. Highly recommend to anyone looking for a change!",
    author: "James K, Denver",
  },

  {
    text: "I love how easy it is to integrate these lessons into my daily life. Highly recommend to anyone looking for a change!",
    author: "Sarah L, Austin",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const totalSlides = testimonials.length;

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const calculateProgress = () => {
    return ((currentIndex + 1) / (totalSlides - slidesPerView + 1)) * 100;
  };

  const updateIndex = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex > totalSlides - slidesPerView) {
      newIndex = totalSlides - slidesPerView;
    } else if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    direction > 0
      ? swiperRef.current.swiper.slideNext()
      : swiperRef.current.swiper.slidePrev();
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="testimonials"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-8 md:px-16 py-16"
    >
      <div className=" container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          {/* <p className="text-limeYellow italic">- Testimonials</p> */}
          <h2 className="text-2xl md:text-4xl font-semibold  text-limeYellow">
            Real people, real results.
          </h2>
          <motion.div
            variants={itemVariants}
            className="w-[470px] mt-1 h-0.5 rounded-r-full bg-gradient-to-r from-limeYellow via-white/60 to-transparent"
          />
        </motion.div>

        <Swiper ref={swiperRef} spaceBetween={10} slidesPerView={slidesPerView}>
          {testimonials.map(({ text, author }, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.9, delay: index * 0.2 }}
              >
                <TestimonialCard text={text} author={author} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:flex justify-between items-center mt-8 space-y-3 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-4/5 mx-auto"
          >
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-limeYellow rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${calculateProgress()}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex space-x-3 md:w-1/5 justify-end">
            <motion.div>
              <Image
                src={RightArrow}
                alt="Previous"
                className={`cursor-pointer -rotate-180 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => updateIndex(-1)}
              />
            </motion.div>
            <motion.div>
              <Image
                src={RightArrow}
                alt="Next"
                className={`cursor-pointer ${
                  currentIndex >= totalSlides - slidesPerView
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => updateIndex(1)}
              />
            </motion.div>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { Testimonials };
