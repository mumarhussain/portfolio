"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };


  AOS.init({
    duration: 650,
    once: true,
    easing: 'ease',
  });
  return (
    <div className='border-b-2 border-border md:container mx-auto'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
        animate={controls}
      >
        <div className='flex justify-center mx-auto mt-20 md:mt-28 mb-6 md:mb-10 text-center'>
          <p className='bg-animationColor text-xl m-4 md:m-0 md:w-44 py-2 px-5 md:px-0  rounded-md text-white font-semibold'>
            What I Do
          </p>
        </div>
        <div
          className='flex justify-center mx-auto w-48 md:w-3/4'>
          <p className='text-4xl md:text-6xl text-center font-semibold text-white'>
            I will Help you Build <span className='text-animationColor'>Business</span> .
          </p>
        </div>
      </motion.div>
      <div className='text-center text-white mt-10 mb-14 md:text-xl px-5 md:px-0'>
        <p>
          I am Offer Fully Experience & Expertise.
        </p>
        <div className='flex justify-center w-full mt-6 text-sm md:text-base'>
          <p className='md:w-[55%]' >
            Aliquam ut porttitor leo a diam sollicitudin. Vivamus arcu felis bibendum ut tristique et. Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Auctor urna nunc id cursus metus. Lobortis mattis aliquam faucibus purus.</p>
        </div>
      </div>
      <div className='flex flex-col mx-auto space-y-7 mb-16 '>
        <div className='flex flex-col md:flex-row  justify-center md:space-x-7 space-y-3 md:space-y-0 mt-3 md:mt-0 px-3 md:px-0'>
          <div
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                COPYWRITING
              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                WEB DESIGN
              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                UI/UX DESIGN

              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                CLOUD SYSTEM

              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row  justify-center md:space-x-7 space-y-3 md:space-y-0 mt-3 md:mt-0 px-3 md:px-0'>

          <div
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                CREATIVE DESIGN

              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                BRAND IDENTITY

              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                PHOTOGRAPHY
              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-delay="100"
            className='bg-border shadow-2xl h-72 rounded-lg py-10' >
            <div className='flex flex-col'>
              <div className='h-14 w-[72px] bg-border border-2 border-boxesBgColor shadow-2xl rounded-full flex justify-center items-center mx-auto' >
                <div className='w-10 h-8 bg-border shadow-[0px 0px 15px 0px rgba(0, 0, 0, 0.65)] rounded-full flex justify-center items-center mx-auto'>
                  <FontAwesomeIcon icon={faStar} className='text-animationColor' />
                </div>
              </div>
              <h1 className='text-white text-2xl font-bold text-center mt-6 mb-4'>
                SOCIAL MEDIA
              </h1>
              <p className='text-white text-center'>
                Quis risus sed vulputate odio. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center md:space-x-7 space-y-5 md:space-y-0 mb-32'>
        <motion.button
          whileHover={{ scale: 0.8, transition: { duration: 0.4 } }}
          whileTap={{ scale: 0.9 }}
          className='text-white font-bold bg-animationColor hover:text-black py-2 px-12 rounded-md'>
          Hire Me
        </motion.button>
        <motion.button
          whileHover={{ scale: 0.8, transition: { duration: 0.4 } }}
          whileTap={{ scale: 0.9 }}
          className='text-white font-bold bg-transparent border border-animationColor hover:bg-animationColor hover:bg-btnBorder hover:text-black py-2 px-6 rounded-md'>
          More Projects
        </motion.button>
      </div>

    </div>
  )
}

export default Services