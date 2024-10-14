"use client";

import Image from 'next/image';
import { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { SlFeed } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { FiBriefcase } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

import { FaSearch, FaHome, FaUsers, FaBriefcase, FaComments, FaBell, FaStore, FaEllipsisH } from 'react-icons/fa'; // Import icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState("Search");
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isPostShare, setIsPostShare] = useState(false);

    // Function to toggle modal visibility

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const togglePostShare = () => {
        setIsPostShare(!isPostShare);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setIsSearchOpen(false);
        setIsPostShare(false);
    };
    return (
        <>
            <nav className="bg-white shadow-md w-full relative top-[2px] text-[20px] h-[80px] py-4">
                <div className="container mx-auto flex justify-between items-center  px-4">
                    {/* Logo Section */}
                    <div className="flex items-center  space-x-4">
                        <div className="relative">
                            <h1 className="text-xl font-[100] text-primary font-[Bungee] mr-[1.6rem]">MODEWELT</h1>
                            {/* border box */}
                            <div className="absolute border-r-2 h-[89px] border-[#DDDDDD] top-[-2.2rem] left-[8rem]"></div>
                        </div>
                        <ul className="hidden w-[519px] md:flex space-x-6 justify-around mt-[-10px]">
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col">
                                <SlFeed className=" my-2" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" /> Feed {/* Icon for Feed */}
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px]  uppercase cursor-pointer flex items-center flex-col ">
                                <GoPeople className="my-2 " /> Network {/* Icon for Network */}
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col ">
                                <FiBriefcase className="my-2 " style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" /> Jobs {/* Icon for Jobs */}
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col ">
                                <IoChatbubbleEllipsesOutline className="my-2 " /> Chat {/* Icon for Chat */}
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center flex-col ">
                                <IoNotificationsOutline className="my-2" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" /> Notices {/* Icon for Notices */}
                            </li>
                            <li className="text-[#181818] hover:text-primary text-[15px] uppercase cursor-pointer flex items-center  flex-col">
                                <AiOutlineShop className="my-2" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" /> Shop {/* Icon for Shop */}
                            </li>
                            {/* border box */}
                            <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0] left-[44rem]"></div>
                        </ul>
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex items-center"> {/* Wrapper for input and icon */}
                        {/* <FaSearch className="absolute text-[#A45286]" /> */}
                        <input
                            type="text"
                            className=" relative nav-searchbar right-[35.4%] w-[14rem] h-[38px] text-lg font-[100] text-center" // Add padding-left for the icon
                            placeholder={placeholder}
                            onFocus={() => setPlaceholder('')}
                            onBlur={() => setPlaceholder('Search')}
                            onClick={toggleSearch}
                        />
                        {/* Search Icon */}
                    </div>

                    {/* border box */}
                    <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0rem] left-[62rem]"></div>
                    <div className="flex ">
                        {/* Profile Section */}
                        <div className=" relative left-[-170px] flex items-center  ">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                                    width={100}
                                    height={100}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <div className=''>
                                    <p className="text-gray-700 font-medium cursor-pointer " onClick={togglePostShare}>Befog</p>
                                    <p className="text-green-500 text-xs flex "> <span className='text-[#747474]' >375</span>+32 views today < MdArrowOutward /> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Other Option */}
                    <div className="absolute border-r-2 h-[80px] border-[#DDDDDD] top-[0rem] left-[88rem]"></div>
                    <div className='flex flex-col items-center space-x-3'
                        onClick={toggleModal} // Trigger modal on click

                    >
                        <FaEllipsisH
                            className="text-gray-700 hover:text-primary text-[20px] cursor-pointer"
                            onClick={toggleModal} // Trigger modal on click
                        />
                        <button
                            className="text-gray-700 relative right-[5%] text-[14px] font-semibold hover:text-primary"
                        >
                            OTHER
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col space-y-2 px-4 py-2">
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center ">
                            <FaHome className="mr-2" /> Feed
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center ">
                            <FaUsers className="mr-2" /> Network
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center ">
                            <FaBriefcase className="mr-2" /> Jobs
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center ">
                            <FaComments className="mr-2" /> Chat
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center ">
                            <FaBell className="mr-2" /> Notices
                        </li>
                        <li className="text-gray-700 hover:text-primary cursor-pointer flex items-center ">
                            <FaStore className="mr-2" /> Shop
                        </li>
                    </ul>
                </div>
            </nav>

            {/*Other Modal content */}
            <div
                id="popup-modal"
                tabIndex="-1"
                className={`${isModalOpen ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={closeModal} // Close modal on click
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 text-center space-y-6">
                            {/* Profile Section */}
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/profile.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="text-left">
                                    <h1 className="text-xl font-semibold">Befog</h1>
                                    <span>Illustration Designer</span>
                                </div>
                            </div>

                            {/* View Profile Button */}
                            <button
                                onClick={closeModal} // Close modal on button click
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                            >
                                View your profile
                            </button>

                            {/* Settings and Management Section */}
                            <div className="space-y-4 text-left">
                                <div className="space-y-2">
                                    <p>Settings and Privacy</p>
                                    <p>Help</p>
                                    <p>Language</p>
                                </div>
                                <hr />
                                <div className="space-y-2">
                                    <h1 className="font-medium">Manage</h1>
                                    <div className="space-y-1">
                                        <p>Past Activities</p>
                                        <p>Job and Account</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            {/* Sign Out Button */}
                            <div>
                                <button
                                    onClick={closeModal} // Close modal on button click
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* search modal content */}
            <div
                id="popup-modal"
                tabIndex="-1"
                className={`${isSearchOpen ? 'flex' : 'hidden'} overflow-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow z-50">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute top-3 right-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={closeModal} // Close modal on click
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Content */}
                        <div className="flex flex-col items-center justify-start p-4 w-[370px] h-full text-center space-y-3">
                            <h2 className="text-xl font-semibold mb-4">Related Search</h2>

                            <div className="w-full space-y-3 flex-1 p-2 overflow-hidden">
                                {/* Jobs Section */}
                                <div className="space-y-1">
                                    <p className="font-medium text-left p-2">Jobs</p>
                                    <div className="p-2 space-y-2">
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">Job Title</span>
                                                <span className="text-gray-500">Company Name</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">Job Title</span>
                                                <span className="text-gray-500">Company Name</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-blue-500 text-left">See all <span>(20)</span></p>
                                </div>

                                {/* User Section */}
                                <div className="space-y-1">
                                    <p className="font-medium text-left p-2">Users</p>
                                    <div className="p-2 space-y-2">
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">User Name</span>
                                                <span className="text-gray-500">User Description</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full h-[78px] shadow-lg">
                                            <Image src='' alt='img' />
                                            <div className="ml-2">
                                                <span className="font-semibold">User Name</span>
                                                <span className="text-gray-500">User Description</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-blue-500 text-left">See all <span>(20)</span></p>
                                </div>

                                {/* Articles Section */}
                                <div className="space-y-1">
                                    <p className="font-medium text-left">Articles</p>
                                    <div className="flex items-center">
                                        <Image src='' alt='articles' />
                                        <div className="ml-2">
                                            <span className="font-semibold">Article Title</span>
                                            <span className="text-gray-500">Author Name</span>
                                        </div>
                                    </div>
                                    <p className="text-blue-500">See all <span>(20)</span></p>
                                </div>
                            </div>

                            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md">All Results <span>(120+ results)</span></button>
                        </div>
                    </div>
                </div>
            </div>


            {/* post share */}
            <div
                id="popup-modal"
                tabIndex="-1"
                className={`${isPostShare ? 'flex' : 'hidden'} overflow-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-lg">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={closeModal} // Close modal on click
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 text-center space-y-6">
                            <h3 className="text-lg font-semibold">YOU SHARE BEFOG POST</h3>
                            <hr className="my-2" />

                            {/* Search Bar */}
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                placeholder="Search for posts..."
                            />

                            {/* Image and Text Section */}
                            <div className="flex items-center justify-center space-x-4 p-4 border rounded-lg">
                                <Image src="" alt="Post Image" className="w-16 h-16 object-cover rounded" />
                                <div className="text-left">
                                    <p className="font-semibold">Befog</p>
                                    <span className="text-gray-500">Description or additional text goes here.</span>
                                </div>
                            </div>
                            <hr className="my-2" />

                            {/* Checkbox Section */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                />
                                <label className="text-gray-700">I agree to share this post</label>
                            </div>
                        </div>
                        <div className="">

                            <button
                                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition duration-300 transform hover:bg-blue-600 hover:scale-105 active:scale-95"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Navbar;
