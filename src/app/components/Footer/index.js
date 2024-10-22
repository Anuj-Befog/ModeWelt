"use client";
import Link from "next/link";
import React from "react";
// import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
import { FaQuestionCircle } from 'react-icons/fa';
import { CiSettings } from "react-icons/ci";

const Footer = () => {
    // const dispatch = useDispatch();
    const use_case = [
        { title: "About", link: "/", id: "about" },
        { title: "Career", link: "/career", id: "career" },
        { title: "Advertising", link: "/advertising", id: "advertising" },
        { title: "Small Business", link: "/business", id: "business" },
    ];

    const services = [
        { title: "Talent Solutions", link: "/talent", id: "talent" },
        { title: "Marketing Solutions", link: "/marketing", id: "marketing" },
        { title: "Sales Solutions", link: "/sales", id: "sales" },
        { title: "Safety Center", link: "/safety", id: "safety" },
    ];

    const explore = [
        { title: "Community Guidelines", link: "/comunity", id: "community" },
        { title: "Privacy & Terms", link: "/terms", id: "terms" },
        { title: "Mobile App", link: "/app", id: "app" },
    ];

    return (
        <>
            <footer className="bg-[#E7E7E7] text-[#934276] mt-auto relative">
                <div className="line w-full mx-auto h-px bg-[#A45286]" />
                <div className="footer-container max-w-[100rem] mx-auto px-[3%] py-12 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
                    <div className="md:col-span-1 sm:col-span-2 block lg:mb-0 md:mb-5 mb-3">
                        <div className="logo-cont w-fit flex justify-center mt-16">
                            <Link href="/">
                                <h1 className="uppercase text-xl font-[100] text-primary font-[Bungee]">Fashionista</h1>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
                        <h1 className="font-bold text-[#333333] mb-5">Navigation</h1>
                        <ul>
                            {use_case.map((link, index) => (
                                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                                    <Link
                                        href={link.link}
                                        className="py-0.5 text-black block w-full hover:text-[#A45286] duration-200 ease-in-out transition-all"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
                        <h1 className="font-bold text-[#333333] mb-5">Services</h1>
                        <ul>
                            {services.map((link, index) => (
                                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                                    <Link
                                        href={link.link}
                                        className="py-0.5 text-black block w-full hover:text-[#A45286] duration-200 ease-in-out transition-all"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
                        <h1 className="font-bold text-[#333333] mb-5">Explore</h1>
                        <ul>
                            {explore.map((link, index) => (
                                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                                    <Link
                                        href={link.link}
                                        className="py-0.5 text-black block w-full hover:text-[#A45286] duration-200 ease-in-out transition-all"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fast Access Section */}
                    <div className="md:col-span-1 sm:col-span-2">
                        <h1 className="font-bold text-[#333333] mb-5">Fast Access</h1>
                        <ul>
                            <li className="md:my-1.5 my-0 md:text-base text-sm relative">
                                <Link href="/quick-access-1" className="py-0.5 block w-full duration-200 ease-in-out transition-all">
                                    <button
                                        type="button"
                                        className="text-[#FFFFFF] bg-[#934276]  border border-[#934276] w-[10rem] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                                    >
                                        Questions?
                                        <FaQuestionCircle className="ml-24 absolute text-xl" /> {/* Add icon with margin */}
                                    </button>                               
                                     </Link>
                            </li>
                            <li className="md:my-1.5 my-0 md:text-base text-sm relative">
                                <Link href="/quick-access-1" className="py-0.5 block w-full  duration-200 ease-in-out transition-all">
                                    <button
                                        type="button"
                                        className="text-[#934276] bg-white border border-[#934276] focus:ring-4 focus:outline-none w-[10rem] focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                                    >
                                        Settings
                                        <CiSettings className=" ml-24 text-3xl absolute text-[#934276] "/>
                                        </button>                               
                                     </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Language Section */}
                    <div className="md:col-span-1 sm:col-span-2">
                        <h1 className="font-bold text-[#333333] mb-5">Language</h1>
                        <ul>
                            <li>
                                <select
                                    className="border-2 border-black rounded-md py-1 px-2"
                                >
                                    <option value="">Select Language</option>
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    {/* Add more languages as needed */}
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
