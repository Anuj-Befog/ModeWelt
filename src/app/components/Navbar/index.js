"use client";

import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { MdArrowOutward } from "react-icons/md";
import OtherModal from '../Other/index'
import SearchModal from '../Search/index'

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
    const [activeLink, setActiveLink] = useState('/feed'); // Track the active link
    const [scrollerStyle, setScrollerStyle] = useState({});

    // Refs for each link to track position
    const feedRef = useRef(null);
    const networkRef = useRef(null);
    const jobsRef = useRef(null);
    const chatRef = useRef(null);
    const notificationsRef = useRef(null);
    const shopRef = useRef(null);

    const handleLinkClick = (link, ref) => {
        setActiveLink(link); // Set the active link
        const offsetLeft = ref.current.offsetLeft;
        const width = ref.current.offsetWidth;
        setScrollerStyle({
            left: `${offsetLeft}px`, // Move the scroller to the clicked link
            width: `${width}px`      // Adjust the width of the scroller
        });
    };

    useEffect(() => {
        // Set initial scroller position when the component mounts
        const activeRefMap = {
            '/feed': feedRef,
            '/network': networkRef,
            '/jobs': jobsRef,
            '/chat': chatRef,
            '/notifications': notificationsRef,
            '/shop': shopRef,
        };

        const activeRef = activeRefMap[activeLink];
        if (activeRef && activeRef.current) {
            const { offsetLeft, offsetWidth } = activeRef.current;
            setScrollerStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
            });
        }
    }, [activeLink]);


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
                            <div
                                className="absolute bottom-0 h-[2px] bg-gradient-to-r bg-[#A45286] shadow-lg rounded-full transition-all duration-300 ease-in-out"
                                style={scrollerStyle}
                            ></div>


                            <li
                                ref={feedRef}
                                onClick={() => handleLinkClick('/feed', feedRef)}
                                className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/feed" className="flex flex-col items-center">
                                    <SlFeed className="my-2 w-[24px] h-[24px] " />
                                    Feed
                                </Link>
                            </li>
                            <li
                                ref={networkRef}
                                onClick={() => handleLinkClick('/network', networkRef)}
                                className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/network" className="flex flex-col items-center">
                                    <GoPeople className="my-2 w-[24px] h-[24px]" />
                                    Network
                                </Link>
                            </li>
                            <li
                                ref={jobsRef}
                                onClick={() => handleLinkClick('/jobs', jobsRef)}
                                className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/jobs" className="flex flex-col items-center">
                                    <FiBriefcase className="my-2 w-[24px] h-[24px]" />
                                    Jobs
                                </Link>
                            </li>
                            <li
                                ref={chatRef}
                                onClick={() => handleLinkClick('/chat', chatRef)}
                                className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/chat" className="flex flex-col items-center">
                                    <IoChatbubbleEllipsesOutline className="my-2 w-[24px] h-[24px]" />
                                    Chat
                                </Link>
                            </li>
                            <li
                                ref={notificationsRef}
                                onClick={() => handleLinkClick('/notifications', notificationsRef)}
                                className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/notifications" className="flex flex-col items-center">
                                    <IoNotificationsOutline className="my-2 w-[24px] h-[24px]" />
                                    Notices
                                </Link>
                            </li>
                            <li
                                ref={shopRef}
                                onClick={() => handleLinkClick('/shop', shopRef)}
                                className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <Link href="/shop" className="flex flex-col items-center">
                                    <AiOutlineShop className="my-2 w-[24px] h-[24px]" />
                                    Shop
                                </Link>
                            </li>
                            <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0] left-[44rem]"></div>
                        </ul>
                    </div>

                    <div className="relative ml-12 flex w-[270px]">
                        <input
                            type="text"
                            className=" h-[24px] text-lg text-[#CECECE] right-10 font-[100] text-center " // Added padding to the left for the icon
                            placeholder={placeholder}
                            onFocus={() => setPlaceholder('')}
                            onBlur={() => setPlaceholder('Search')}
                            onClick={toggleSearch}
                            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        />
                        <SearchModal isSearchOpen={isSearchOpen} closeModal={closeModal} />
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
                                    <p className="text-[#181818] font-medium cursor-pointer">Befog <span className="text-[#A4528633] text-xs ">You</span> </p>
                                    <p className="text-green-500 text-xs flex">
                                        <span className='text-[#747474] text-[12px] '>375  views today</span>+32 <MdArrowOutward />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0rem] left-[88rem]"></div>
                    <div className='flex flex-col items-center w-[90px]  justify-center' onClick={toggleModal}>
                        <OtherModal isModalOpen={isModalOpen} closeModal={closeModal} />
                        <FaEllipsisH className="text-gray-700 hover:text-primary text-[20px] cursor-pointer w-[24px] h-[24px] " />
                        <button className="text-[#181818] text-[16px] w-[44px] h-[11px] hover:text-primary">
                            OTHER
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col space-y-2 px-4 py-2">
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/feed" className="flex items-center" prefetch>
                                <FaHome className="mr-2 w-[24px] h-[24px]" /> Feed
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/network" className="flex items-center" prefetch>
                                <FaUsers className="mr-2 w-[24px] h-[24px]" /> Network
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/jobs" className="flex items-center" prefetch>
                                <FaBriefcase className="mr-2 w-[24px] h-[24px]" /> Jobs
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/chat" className="flex items-center" prefetch>
                                <FaComments className="mr-2 w-[24px] h-[24px]" /> Chat
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/notifications" className="flex items-center" prefetch>
                                <FaBell className="mr-2 w-[24px] h-[24px]" /> Notices
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center">
                            <Link href="/shop" className="flex items-center" prefetch>
                                <FaStore className="mr-2 w-[24px] h-[24px] " /> Shop
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
