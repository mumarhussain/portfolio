"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Education() {
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
        duration: 1500,
        once: true,
        easing: 'ease',
    });
    return (
        <div className='md:container mx-auto'>
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
                        Education
                    </p>
                </div>
                <div
                    className='flex justify-center mx-auto w-48 md:w-3/4'>
                    <p className='text-4xl md:text-6xl text-center font-semibold text-white'>
                        My History of <span className='text-animationColor'>Success</span> .
                    </p>
                </div>
            </motion.div>
            <div className='text-center text-white mt-10 mb-24 md:text-xl px-5 md:px-0'>
                <p>
                    14+ Years Dedication of Education.
                </p>
                <div className='flex justify-center w-full mt-6 text-sm md:text-base'>
                    <p className='md:w-[55%]' >
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Convallis a cras semper auctor neque vitae. Viverra accumsan in nisl nisi scelerisque eu ultrices. Dignissim enim sit amet venenatis urna cursus eget.
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <div data-aos="fade-right" className='flex flex-col md:flex-row items-center text-textColor mb-14'>
                        <div className='ml-auto md:ml-0 mx-5 md:mx-0 mb-3 md:mb-0'>
                            <p className='font-bold text-right text-white'>
                                2007 - 2013
                            </p>
                            <p>
                                UNIVERSITY INDONESIA
                            </p>
                        </div>
                        <div className='hidden md:block h-4 w-4 bg-circle rounded-full mx-4 shadow-xl'></div>
                        <div className='bg-border mx-5 md:mx-0 h-56 md:h-48 md:w-1/2 rounded px-4'>
                            <h1 className='text-white text-2xl text-start py-4 font-semibold'>
                                UI / UX DESIGN COURSE
                            </h1>
                            <p className='text-textColor text-sm text-left '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='flex flex-col md:flex-row items-center text-textColor mb-14'>
                    <div className='ml-auto md:ml-0 mx-5 md:mx-0 mb-3 md:mb-0'>
                            <p className='font-bold text-right text-white'>

                                2013 - 2017
                            </p>
                            <p>
                                UNIVERSITY INDONESIA
                            </p>
                        </div>
                         <div className='hidden md:block h-4 w-4 bg-circle rounded-full mx-4 shadow-xl'>

                        </div>
                        <div className='bg-border mx-5 md:mx-0 h-56 md:h-48 md:w-1/2 rounded px-4'>
                            <h1 className='text-white text-2xl text-start py-4 font-semibold'>
                                MAGISTER ART VISUAL

                            </h1>
                            <p className='text-textColor text-sm text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='flex flex-col md:flex-row items-center text-textColor mb-14'>
                    <div className='ml-auto md:ml-0 mx-5 md:mx-0 mb-3 md:mb-0'>
                            <p className='font-bold text-right text-white'>

                                2017 - 2018
                            </p>
                            <p>
                                UNIVERSITY INDONESIA


                            </p>
                        </div>
                         <div className='hidden md:block h-4 w-4 bg-circle rounded-full mx-4 shadow-xl'>

                        </div>
                        <div className='bg-border mx-5 md:mx-0 md:h-56 h-64 md:w-1/2 rounded px-4'>
                            <h1 className='text-white text-2xl text-start py-4 font-semibold'>
                                COURSE WEB DEVELOPMENT
                            </h1>
                            <p className='text-textColor text-sm text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div  data-aos="fade-left" className='flex flex-col md:flex-row items-center text-textColor mb-14'>
                    <div className='ml-auto md:ml-0 mx-5 md:mx-0 mb-3 md:mb-0'>
                            <p className='font-bold text-right text-white'>

                                2018 - 2019
                            </p>
                            <p>
                                UNIVERSITY INDONESIA


                            </p>
                        </div>
                         <div className='hidden md:block h-4 w-4 bg-circle rounded-full mx-4 shadow-xl'>

                        </div>
                        <div className='bg-border mx-5 md:mx-0 md:h-56 h-64 md:w-1/2 rounded px-4'>
                            <h1 className='text-white text-2xl text-start py-4 font-semibold'>
                                TRAINING GRAPHIC DESIGN
                            </h1>
                            <p className='text-textColor text-sm text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='flex flex-col md:flex-row items-center text-textColor mb-14'>
                    <div className='ml-auto md:ml-0 mx-5 md:mx-0 mb-3 md:mb-0'>
                            <p className='font-bold text-right text-white'>

                                2019 - 2020
                            </p>
                            <p>
                                UNIVERSITY INDONESIA


                            </p>
                        </div>
                         <div className='hidden md:block h-4 w-4 bg-circle rounded-full mx-4 shadow-xl'>

                        </div>
                        <div className='bg-border mx-5 md:mx-0 h-64 md:h-56 md:w-1/2 rounded px-4'>
                            <h1 className='text-white text-2xl text-start py-4 font-semibold'>
                                ILLUSTRATION ART DIGITAL
                            </h1>
                            <p className='text-textColor text-sm text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='flex flex-col md:flex-row items-center text-textColor mb-14'>
                    <div className='ml-auto md:ml-0 mx-5 md:mx-0 mb-3 md:mb-0'>
                            <p className='font-bold text-right text-white'>

                                2020 - 2021
                            </p>
                            <p>
                                UNIVERSITY INDONESIA


                            </p>
                        </div>
                         <div className='hidden md:block h-4 w-4 bg-circle rounded-full mx-4 shadow-xl'>

                        </div>
                        <div className='bg-border mx-5 md:mx-0 md:h-56 h-64 md:w-1/2 rounded px-4'>
                            <h1 className='text-white text-2xl text-start py-4 font-semibold'>
                                MAJOR WEB DEVELOPMENT
                            </h1>
                            <p className='text-textColor text-sm text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education