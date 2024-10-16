"use client"

import React, { useState } from 'react';
import '../css/Authentication.css';

const Authentication = () => {
    const [active, setActive] = useState(false); // Manage form state

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 relative">
            <div className={`auth-container relative z-10 h-[524px] w-[957px] border-primary border-2 flex bg-background shadow-lg rounded-2xl max-w-4xl ${active ? 'active' : ''}`}>
                <div className="curved-shape"></div>
                <div className="curved-shape2"></div>

                {/* LOGIN FORM */}
                <div className="form-box Login">
                    <div className="relative">
                        <h2 className="animation text-center text-[2.5rem] font-[800] text-primary mb-8 uppercase" style={{ '--D': 0, '--S': 21 }}>Login</h2>
                        {/* Login heading underline */}
                        <div class="animation h-[0.4rem] w-[6rem] top-[3.7rem] md:top-[3.5rem] rounded-[10px] left-[6.15rem] md:left-[8.3rem] bg-primary absolute"></div>
                    </div>
                    <form action="#">
                        <div className="input-box animation" style={{ '--D': 1, '--S': 22 }}>
                            <input id="login_username" type="text" required />
                            <label htmlFor="login_username">Username</label>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box animation" style={{ '--D': 2, '--S': 23 }}>
                            <input id="login_password" type="password" required />
                            <label htmlFor="login_password">Password</label>
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        {/* Links and buttons */}
                        <div className="animation flex justify-between text-sm mt-2 text-blue-500 uppercase">
                            <a href="#">Forgot Password</a>
                            <a href="/signup">Create Account</a>
                        </div>

                        <div className="mt-6">
                            <button className="input-box animation w-full bg-primarybtn text-white py-2 px-4 rounded-full hover:bg-primary transition duration-300 btn" style={{ '--D': 3, '--S': 24 }} type="submit">Login</button>
                        </div>

                        {/* Registration link */}
                        <div className="regi-link animation mt-6 text-center text-sm text-gray-600 uppercase" style={{ '--D': 4, '--S': 25 }}>
                            <p>Don&apos;t have an account? <a href="#" className="SignUpLink text-primary font-bold" onClick={() => setActive(true)}>Sign Up</a></p>
                        </div>
                    </form>
                </div>

                {/* INFO CONTENT */}
                <div className="info-content Login text-white uppercase">
                    <h2 className="animation text-6xl font-bold mb-2" style={{ '--D': 0, '--S': 20 }}>WELCOME BACK</h2>
                    <p className="animation text-sm" style={{ '--D': 1, '--S': 21 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                        industry&apos;s standard dummy.</p>
                </div>

                {/* REGISTRATION FORM */}
                <div className="form-box Register">
                    <div className='relative'>
                        <h2 className="animation text-center text-[2.5rem] font-[800] text-primary uppercase" style={{ '--li': 17, '--S': 0 }}>Sign Up</h2>
                        {/* Signup heading underline */}
                        <div class="animation h-[0.4rem] w-[6rem] top-[3.5rem] rounded-[10px] left-[7.25rem] bg-primary absolute"></div>
                    </div>
                    <form action="#">
                        <div className="input-box animation" style={{ '--li': 18, '--S': 1 }}>
                            <input id="register_username" type="text" required />
                            <label htmlFor="register_username">Full Name</label>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 18, '--S': 1 }}>
                            <input id="register_email" type="email" required />
                            <label htmlFor="register_email">Email</label>
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 18, '--S': 1 }}>
                            <input id="register_phone" type="number" required />
                            <label htmlFor="register_phone">Phone</label>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19, '--S': 2 }}>
                            <input id="register_password" type="password" required />
                            <label htmlFor="register_password">Password</label>
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 19, '--S': 2 }}>
                            <input id="register_confirm_password" type="password" required />
                            <label htmlFor="register_confirm_password">Confirm Password</label>
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className="input-box animation" style={{ '--li': 20, '--S': 3 }}>
                            <button type="submit" className="uppercase w-full bg-primarybtn hover:bg-primary text-white py-3 px-4 rounded-full transition duration-300">
                                SUBMIT
                            </button>
                        </div>
            
                        {/* Registration link */}
                        <div className="regi-link animation mt-6 text-center text-sm text-gray-600 uppercase" style={{ '--li': 21, '--S': 4 }}>
                            <p>Already have an account?{" "} <a href="#" className="SignInLink text-primary font-bold hover:underline" onClick={() => setActive(false)}>Login</a></p>
                        </div>
                    </form>
                </div>
                <div className="info-content Register">
                    <h2 className="animation text-white text-6xl font-bold mb-6" style={{ '--li': 17, '--S': 0 }}>WELCOME BACK</h2>
                    <p className="animation text-white text-sm mb-10 uppercase" style={{ '--li': 18, '--S': 1 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, temporibus!</p>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
