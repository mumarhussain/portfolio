"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
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

  return (
    <div ref={ref} className='border-2 border-border mt-3 border-l-0 border-r-0'>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
        animate={controls}
      >
        <div className='flex justify-center mx-auto mt-20 md:mt-32 mb-6 md:mb-16 text-center'>
          <p className='bg-animationColor text-xl m-4 md:m-0 md:w-64 px-7 py-2 rounded-md text-white font-semibold'>
            PROFESSIONAL  <br />
            SKILL
          </p>
        </div>
        <div className='flex justify-center mx-auto w-48'>
          <p className='text-4xl md:text-6xl text-center font-semibold text-white'>
            Innovative Solution to <span className='text-animationColor'>Enhance</span> .
          </p>
        </div>
      </motion.div>
      <div className='text-center text-white mt-10 md:text-xl px-5 md:px-0'>
        <p>
          Innovative Solution to Boost your Creative Project.
        </p>
        <div className='flex justify-center w-full mt-6 text-sm md:text-base'>
          <p className='md:w-[55%]' >
            Nunc aliquet bibendum enim facilisis gravida. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ipsum dolor sit amet consectetur adipiscing elit. Dis parturient montes nascetur ridiculus mus mauris. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
          </p>
        </div>
      </div>
      <div className='bg-border md:w-3/4 mx-3 md:mx-auto flex flex-col md:flex-row  justify-between p-5 md:p-10 text-textColor rounded-lg shadow-lg mt-14 md:mb-14 mb-8'>
        <div>
        <div className='flex flex-col'>
            <label htmlFor="range">HTML</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96' 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="range">CSS</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="range">JAVASCRIPT</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96' 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="range">PYTHON</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96' 
            />
          </div>
        </div>
        <div>
          <div className='flex flex-col'>
            <label htmlFor="range">FIMGA</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96' 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="range">ADOBE XD</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96' 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="range">ADOBE ILLUSTRATOR</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="range">LIGHTROOM</label>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="100"
              disabled
              className='customSliderColor my-3 md:w-96'
              style={{ backgroundColor: '#FF014F' }}
            />
          </div>
        </div>
      </div>
        <div className='flex justify-center mx-auto mb-20'>
          <button className='bg-animationColor text-xl m-4 md:m-0 md:w-56 px-3 py-3 rounded-md text-white font-semibold'>
            Download Cv
          </button>
        </div>
    </div>
  );
}

export default Skills;
