"use client"

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Login = () => {
    // const [removeBackground, setBackground] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setBackground(true);
    //     }, 1000);
    // })
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 relative overflow-hidden">
            {/* Animation Background */}
            <AnimatePresence>
                <motion.div
                    animate={{ backgroundColor: '#A45286' }}
                    transition={{ duration: 1 }}
                    className="relative z-10 h-[524px] w-[957px] border-primary border-2 flex bg-background shadow-lg rounded-2xl overflow-hidden max-w-4xl">
                    <motion.div
                        initial={{ x: '100%', opacity: 0, rotate: 180 }}
                        animate={{ x: '0%', opacity: 1, backgroundColor: '#fff' }}
                        transition={{ duration: 0.05, delay: 0.5 }}
                        className="absolute bg-primary z-0 clip-login-triangle w-full h-full">
                    </motion.div>

                    {/* Left section (form) */}
                    <motion.div
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="w-[60%] p-8 relative top-[10%] left-[5%]">
                        <div className="relative">
                            <h2 className="text-center text-[2.5rem] font-[800] text-primary mb-8">LOGIN</h2>
                            {/* Login heading underline */}
                            <div class="h-[0.4rem] w-[6rem] top-[3.5rem] rounded-[10px] left-[7rem] bg-primary absolute"></div>
                        </div>
                        <form>
                            {/* Username */}
                            <div class="space-y-3">
                                <div class="relative w-[20rem]">
                                    <input type="email" class="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="USER NAME" />
                                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg class="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                </div>

                                <div class="relative">
                                    <input type="password" class="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="PASSWORD" />
                                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg class="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Links and buttons */}
                            <div className="flex justify-between text-sm mt-2 text-blue-500 uppercase">
                                <a href="#">Forgot Password</a>
                                <a href="/signup">Create Account</a>
                            </div>

                            {/* Login Button */}
                            <div className="mt-6">
                                <button className="w-full bg-primarybtn text-white py-2 px-4 rounded-full hover:bg-primary transition duration-300">
                                    LOGIN
                                </button>
                            </div>

                            {/* Sign-up text */}
                            <div className="mt-6 text-center text-sm text-gray-600 uppercase">
                                Don&apos;t have an account?{' '}
                                <a href="/signup" className="text-primary font-bold">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right section (welcome text) */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-black z-10 flex items-center justify-end p-8">
                        <div className="text-white flex flex-col items-end uppercase text-end">
                            <h2 className="text-6xl w-min ml-[-1.5rem] font-bold mb-2">WELCOME BACK !</h2>
                            <p className="text-sm w-[47%] text-end">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                                industry&apos;s standard dummy.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Login;
