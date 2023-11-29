"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Navbar() {
    const [isShow, setIsShow] = useState<boolean>(false);
    const handleButtonClick = (item: string) => {
        setIsShow(false);
    }
    return (
        <div>
            <nav className="bg-bgColor border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="https://flowbite.com/docs/images/logo.svg" className="h-10" height={80} width={80} alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Portfolio</span>
                    </a>
                    <button
                        onClick={() => setIsShow((prev) => !prev)}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isShow ? 'true' : 'false'}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className={`w-full md:block md:w-auto navbar-default   ${isShow ? 'block' : 'hidden'}`}>
                        <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-bgColor dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${true ? 'block' : 'hidden'}`}>
                            <li onClick={() => handleButtonClick('Home')}>
                                <Link href="/" className={`block py-2 px-3 hover:text-white text-textColor  md:p-0 dark:text-textColor " aria-current="page`}>
                                    Home
                                </Link>
                            </li>
                            <li onClick={() => handleButtonClick('About')}>
                                <Link href="/about" className={`block py-2 px-3 hover:text-white text-textColor  md:p-0 dark:text-textColor " aria-current="page`}>
                                    About
                                </Link>
                            </li>
                            <li onClick={() => handleButtonClick('Services')}>
                                <Link href="/" className={`block py-2 px-3 hover:text-white text-textColor  md:p-0 dark:text-textColor " aria-current="page`}>
                                    Services
                                </Link>
                            </li>
                            <li onClick={() => handleButtonClick('Pricing')}>
                                <Link href="/" className={`block py-2 px-3 hover:text-white text-textColor  md:p-0 dark:text-textColor " aria-current="page`}>
                                    Pricing
                                </Link>
                            </li>
                            <li onClick={() => handleButtonClick('Contact')}>
                                <Link href="/" className={`block py-2 px-3 hover:text-white text-textColor  md:p-0 dark:text-textColor " aria-current="page`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <motion.button
                            whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                            whileTap={{ scale: 0.9 }}
                            className='text-white font-bold bg-boxesBgColor hover:bg-white hover:text-black py-2 px-6 rounded-lg'>
                            Let's Talk
                        </motion.button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

