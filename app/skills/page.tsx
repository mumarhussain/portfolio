"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedValue from '../_components/Animation/page';
function Skills() {
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


  return (
    <div ref={ref} className='border-2 border-border mt-3 border-l-0 border-r-0'>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
        // animate={controls}
      >
        <div className='flex justify-center mx-auto mt-20 md:mt-32 mb-6 md:mb-10 text-center'>
          <p className='bg-animationColor text-xl m-4 md:m-0 md:w-64 px-7 py-2 rounded-md text-white font-semibold'>
            PROFESSIONAL  <br />
            SKILL
          </p>
        </div>
        <div className='flex justify-center mx-auto w-48 md:w-3/4'>
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
      <div className='bg-border lg:w-3/4 mx-3 lg:mx-auto flex flex-col lg:flex-row  justify-between p-5 lg:p-10 text-textColor rounded-lg shadow-lg mt-14 lg:mb-14 mb-8 lg:space-x-4'>
        <div className='space-y-4'>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={80} duration={1500} />%
            </p>
            <div className='w-[70%]'>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                HTML
              </p>
              <p className='md:text-lg'>
                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={85} duration={1500} />%
            </p>
            <div className='w-[70%] '>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                CSS
              </p>
              <p className='md:text-lg'>
                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={70} duration={1300} />%

            </p>
            <div className='w-[70%] '>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                JAVASCRIPT
              </p>
              <p className='md:text-lg '>

                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center '>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={55} duration={1300} />%

            </p>
            <div className='w-[70%] '>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                PYTHON
              </p>
              <p className='md:text-lg '>

                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
        </div>
        <div className='mt-4 lg:mt-0 space-y-4'>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={75} duration={1000} />%

            </p>
            <div className='w-[70%]'>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                FIGMA
              </p>
              <p className='md:text-lg '>

                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={80} duration={1000} />%

            </p>
            <div className='w-[70%] '>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                ADOBE XD
              </p>
              <p className='md:text-lg '>

                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={70} duration={1000} />%

            </p>
            <div className='w-[70%] '>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                ADOBE ILLUSTRATOR
              </p>
              <p className='md:text-lg '>

                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
          <div className='bg-black rounded-lg h-32 text-white flex justify-evenly items-center'>
            <p className='w-[30%] text-xl md:text-5xl flex justify-center mx-auto text-textColor'>
              <AnimatedValue start={0} end={85} duration={1000} />%
            </p>
            <div className='w-[70%] '>
              <p className='font-semibold md:text-2xl mb-2 text-animationColor'>
                LIGHTROOM
              </p>
              <p className='md:text-lg '>

                Empowering businesses through innovative solutions
              </p>
            </div>
          </div>
        </div>      </div>
      <div className='flex justify-center mx-auto mb-28'>
        <button className='bg-animationColor text-xl m-4 md:m-0 md:w-56 px-3 py-3 rounded-md text-white font-semibold'>
          Download Cv
        </button>
      </div>
    </div>
  );
}

export default Skills;
