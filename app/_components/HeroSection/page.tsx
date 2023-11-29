import React from 'react'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import heroImg from "../../assets/images/photo1.png"
import Image from 'next/image';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <div
            className='py-5 px-3 md:py-0 md:px-0'
            style={
                {
                    backgroundImage: `url('https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }
            }>
            <div className='md:container mx-auto flex flex-col lg:flex-row justify-center border-borderColor border-[3px] rounded-md md:rounded-none'>
                <div className='md:p-20 md:h-[85vh]'>
                        <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='bg-animationColor m-4 md:m-0 md:w-64 px-3 py-3 rounded-md text-lg text-white font-semibold'>
                            WELCOME TO MY <br />
                            WORLD
                        </p>
                        <p className='text-5xl font-bold text-center md:text-start  text-white mt-8'>
                            I'm Umar Hussain
                        </p>
                        <div className='text-2xl font-bold text-center md:text-start text-animationColor my-6 '>
                            <TypeAnimation
                                sequence={[
                                    1000,
                                    'Developer',
                                    1000,
                                    'Designer',
                                    1000,
                                    'Freelancer',
                                    1000,
                                    () => {
                                    },
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </div>
                    </motion.div>
                    <div className='flex justify-center text-center md:text-start mb-8'>
                        <p className='text-white text-xl font-bold'>
                            Designing softwares that effortlessly connects with users and exceeds their expectations.
                        </p>
                    </div>
                    <div className='text-white flex flex-col md:flex-row space-x-14 items-center' >
                        <div className='text-white flex space-x-4'>
                            <FontAwesomeIcon icon={faFacebookF} className='bg-boxesBgColor px-3 py-2 text-lg rounded border-2 border-borderColor' />
                            <FontAwesomeIcon icon={faTwitter} className='bg-boxesBgColor px-3 py-2 text-lg rounded border-2 border-borderColor' />
                            <FontAwesomeIcon icon={faInstagram} className='bg-boxesBgColor px-3 py-2 text-lg rounded border-2 border-borderColor' />
                            <FontAwesomeIcon icon={faLinkedin} className='bg-boxesBgColor px-3 py-2 text-lg rounded border-2 border-borderColor' />
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-2 space-x-3'>
                            <div>
                                <FontAwesomeIcon icon={faPhone} className='bg-boxesBgColor px-3 py-2 text-lg rounded border-2 border-borderColor' />
                            </div>
                            <div>
                                <p>
                                    HOT LINE 24/7
                                </p>
                                <p>
                                    +123 1234 234

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Image
                        src={heroImg}
                        width={600}
                        height={600}
                        alt='Image' />
                </div>
            </div>

        </div>
    )
}
export default Hero