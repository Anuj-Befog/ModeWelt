"use client"

import Image from 'next/image';
import { useState } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState("Search");

    return (
        <nav className="bg-white shadow-md w-full relative top-[2px] text-[20px] h-[80px] py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <h1 className="text-xl font-[100] text-primary font-[Bungee] mr-[1.7rem]">MODEWELT</h1>
                        {/* border box */}
                        <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[-1.6rem] left-[8rem]"></div>
                    </div>
                    <ul className="hidden w-[519px] md:flex space-x-6 justify-around">
                        <li className="text-gray-700 hover:text-primary text-[15px] font-semibold uppercase cursor-pointer">Feed</li>
                        <li className="text-gray-700 hover:text-primary text-[15px] font-semibold uppercase cursor-pointer">Network</li>
                        <li className="text-gray-700 hover:text-primary text-[15px] font-semibold uppercase cursor-pointer">Jobs</li>
                        <li className="text-gray-700 hover:text-primary text-[15px] font-semibold uppercase cursor-pointer">Chat</li>
                        <li className="text-gray-700 hover:text-primary text-[15px] font-semibold uppercase cursor-pointer">Notices</li>
                        <li className="text-gray-700 hover:text-primary text-[15px] font-semibold uppercase cursor-pointer">Shop</li>
                        {/* border box */}
                        <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0] left-[44rem]"></div>
                    </ul>
                </div>

                {/* Search Bar */}
                <input
                    type="text"
                    className="absolute nav-searchbar right-[35.4%] w-[16.4rem] h-[82px] text-lg font-[100] text-center"
                    placeholder={placeholder}
                    onFocus={() => setPlaceholder('')}  // Remove placeholder on focus
                    onBlur={() => setPlaceholder('Search')}  // Restore placeholder on blur
                />

                {/* border box */}
                <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0rem] left-[62rem]"></div>

                <div className="flex items-center space-x-4">
                    {/* Profile Section */}
                    <div className="flex items-center space-x-3 gap-[14rem]">
                        <div className="flex items-center space-x-1">
                            <Image
                                src="/profile-placeholder.png"
                                width={100}
                                height={100}
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-gray-700 font-medium">ADITYA KUMAR</p>
                                <p className="text-green-500 text-xs">+32 views today</p>
                            </div>
                        </div>
                        <button className="text-gray-700 relative right-[5%] text-[14px] font-semibold hover:text-primary">OTHER</button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-2 px-4 py-2">
                    <li className="text-gray-700 hover:text-primary cursor-pointer">Feed</li>
                    <li className="text-gray-700 hover:text-primary cursor-pointer">Network</li>
                    <li className="text-gray-700 hover:text-primary cursor-pointer">Jobs</li>
                    <li className="text-gray-700 hover:text-primary cursor-pointer">Chat</li>
                    <li className="text-gray-700 hover:text-primary cursor-pointer">Notices</li>
                    <li className="text-gray-700 hover:text-primary cursor-pointer">Shop</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
