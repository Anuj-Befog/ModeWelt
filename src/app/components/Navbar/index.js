"use client";

import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { MdArrowOutward } from "react-icons/md";

// Lazy load icons
const SlFeed = dynamic(() => import("react-icons/sl").then(mod => mod.SlFeed));
const GoPeople = dynamic(() => import("react-icons/go").then(mod => mod.GoPeople));
const FiBriefcase = dynamic(() => import("react-icons/fi").then(mod => mod.FiBriefcase));
const IoChatbubbleEllipsesOutline = dynamic(() => import("react-icons/io5").then(mod => mod.IoChatbubbleEllipsesOutline));
const IoNotificationsOutline = dynamic(() => import("react-icons/io5").then(mod => mod.IoNotificationsOutline));
const AiOutlineShop = dynamic(() => import("react-icons/ai").then(mod => mod.AiOutlineShop));
const FaSearch = dynamic(() => import("react-icons/fa").then(mod => mod.FaSearch));
const FaHome = dynamic(() => import("react-icons/fa").then(mod => mod.FaHome));
const FaUsers = dynamic(() => import("react-icons/fa").then(mod => mod.FaUsers));
const FaBriefcase = dynamic(() => import("react-icons/fa").then(mod => mod.FaBriefcase));
const FaComments = dynamic(() => import("react-icons/fa").then(mod => mod.FaComments));
const FaBell = dynamic(() => import("react-icons/fa").then(mod => mod.FaBell));
const FaStore = dynamic(() => import("react-icons/fa").then(mod => mod.FaStore));
const FaEllipsisH = dynamic(() => import("react-icons/fa").then(mod => mod.FaEllipsisH));

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState("Search");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isPostShare, setIsPostShare] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const togglePostShare = () => {
        setIsPostShare(!isPostShare);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSearchOpen(false);
        setIsPostShare(false);
    };

    // Debounce search input
    useEffect(() => {
        const handler = setTimeout(() => {
            // Execute search logic here
            console.log(searchQuery); // Placeholder for search functionality
        }, 300); // Adjust debounce time as needed

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    return (
        <>
            <nav className="bg-white shadow-md w-full relative top-[2px] text-[20px] h-[80px] py-4">
                <div className="container mx-auto flex justify-between items-center ">
                    <div className="flex items-center  space-x-4">
                        <div className="relative w-[130px] ">
                            <h1 className="text-xl font-[100] text-primary font-[Bungee] mr-[1.6rem]">MODEWELT</h1>
                            <div className="absolute border-r-2 h-[89px] border-[#DDDDDD] top-[-2.2rem] left-[8rem]"></div>
                        </div>
                        <ul className="hidden w-[519px] ml-1 md:flex space-x-6 justify-around mt-[-10px]">
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/feed" className="flex flex-col items-center">
                                    <SlFeed className="my-2 h-[16px] w-[16px] " />
                                    Feed
                                </Link>
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/network" className="flex flex-col items-center">
                                    <GoPeople className="my-2 h-[16px] w-[16px]" />
                                    Network
                                </Link>
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/jobs" className="flex flex-col items-center">
                                    <FiBriefcase className="my-2 h-[16px] w-[16px]" />
                                    Jobs
                                </Link>
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/chat" className="flex flex-col items-center">
                                    <IoChatbubbleEllipsesOutline className="my-2 h-[16px] w-[16px]" />
                                    Chat
                                </Link>
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/notifications" className="flex flex-col items-center">
                                    <IoNotificationsOutline className="my-2 h-[16px] w-[16px]" />
                                    Notices
                                </Link>
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/shop" className="flex flex-col items-center">
                                    <AiOutlineShop className="my-2 h-[16px] w-[16px]" />
                                    Shop
                                </Link>
                            </li>
                            <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0] left-[44rem]"></div>
                        </ul>
                    </div>

                    <div className="relative ml-12 flex w-[270px]">
                        <input
                            type="text"
                            className=" h-[38px] text-lg right-10 font-[100] text-center " // Added padding to the left for the icon
                            placeholder={placeholder}
                            onFocus={() => setPlaceholder('')}
                            onBlur={() => setPlaceholder('Search')}
                            onClick={toggleSearch}
                            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        />
                        <FaSearch className="absolute left-1 top-1/2 transform -translate-y-1/2 text-[#EBA5D1]" /> {/* Positioned Search Icon */}
                    </div>


                    <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] left-[62rem]"></div>
                    <div className="flex w-[330px] mr-32 ">
                        <div className="relative flex items-center ">
                            <Link href="/profile" className="flex items-center space-x-2">
                                <Image
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    width={100}
                                    height={100}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <div>
                                    <p className="text-gray-700 font-medium cursor-pointer">Befog</p>
                                    <p className="text-green-500 text-xs flex">
                                        <span className='text-[#747474]'>375</span>+32 views today <MdArrowOutward />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0rem] left-[88rem]"></div>
                    <div className='flex flex-col items-center w-[90px]  justify-center' onClick={toggleModal}>
                        <FaEllipsisH className="text-gray-700 hover:text-primary text-[20px] cursor-pointer" />
                        <button className="text-gray-700 text-[14px] font-semibold hover:text-primary">
                            OTHER
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col space-y-2 px-4 py-2">
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/feed" className="flex items-center" prefetch>
                                <FaHome className="mr-2" /> Feed
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/network" className="flex items-center" prefetch>
                                <FaUsers className="mr-2" /> Network
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/jobs" className="flex items-center" prefetch>
                                <FaBriefcase className="mr-2" /> Jobs
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/chat" className="flex items-center" prefetch>
                                <FaComments className="mr-2" /> Chat
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/notifications" className="flex items-center" prefetch>
                                <FaBell className="mr-2" /> Notices
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/shop" className="flex items-center" prefetch>
                                <FaStore className="mr-2" /> Shop
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
