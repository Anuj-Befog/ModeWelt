'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiUsers } from 'react-icons/fi';


function Page() {
    // State to control which section is active
    const [activeSection, setActiveSection] = useState('connections');
    // State to control the active tab

    // State to control whether "Received" or "Sent" is active
    const [activeTab, setActiveTab] = useState('received');

    const [activeGroup, setActiveGroup] = useState('your group');


    const handleYourGroup = () => {
        setActiveGroup('your group');
    };

    const handleGroup = () => {
        setActiveGroup('group');
    };

    // Handle switching between Received and Sent
    const handleReceived = () => {
        setActiveTab('received');
    };

    const handleSent = () => {
        setActiveTab('sent');
    };
    return (
        <div className="mt-[120px] ml-[129px] flex">
            {/* Left Sidebar */}
            <div className="w-[290px] h-[309px] border-2 border-gray-950 rounded-md">
                <div className="px-0">
                    <div
                        className={`flex items-center p-2 border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'connections' && 'bg-gray-200'}`}
                        onClick={() => setActiveSection('connections')}
                    >
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.95 0-3.72-.51-5.26-1.35L10.5 16.85l-2.74 2.74-1.35-1.35L15.26 12.01C16.79 11.5 21 7.582 21 12z"></path>
                        </svg>
                        <span className="ml-2 text-gray-800">Connections</span>
                        <span className="ml-auto text-[#FBAE4A]" > <span className=" text-xl ">.</span> 1,242</span>
                    </div>
                    <ul className="space-y-0">
                        <li
                            className={`flex items-center p-2 border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'invitations' && 'bg-gray-200'}`}
                            onClick={() => setActiveSection('invitations')}
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.95 0-3.72-.51-5.26-1.35L10.5 16.85l-2.74 2.74-1.35-1.35L15.26 12.01C16.79 11.5 21 7.582 21 12z"></path>
                            </svg>
                            <span className="ml-2 text-gray-800">INVITATIONS</span>
                            <span className="ml-auto text-gray-600">2</span>
                        </li>
                        <li
                            className={`flex items-center p-2 border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'teammates' && 'bg-gray-200'}`}
                            onClick={() => setActiveSection('teammates')}
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v1m-10.996 4.87-5.504 3.846 3.846-5.504 5.504 3.846zM9 16h6v-6h-6v6z"></path>
                            </svg>
                            <span className="ml-2 text-gray-800">TEAMMATES</span>
                            <span className="ml-auto text-gray-600">6</span>
                        </li>
                        <li
                            className={`flex items-center p-2 border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'groups' && 'bg-gray-200'}`}
                            onClick={() => setActiveSection('groups')}
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10-7h-2m-2-2v2m2-5h-2m-2-2v2m2 5h-2m-2-2v2"></path>
                            </svg>
                            <span className="ml-2 text-gray-800">GROUPS</span>
                            <span className="ml-auto text-gray-600">6</span>
                        </li>
                        <li
                            className={`flex items-center p-2 border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'pages' && 'bg-gray-200'}`}
                            onClick={() => setActiveSection('pages')}
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"></path>
                            </svg>
                            <span className="ml-2 text-gray-800">PAGES</span>
                            <span className="ml-auto text-gray-600">28</span>
                        </li>
                        <li
                            className={`flex items-center p-2 border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'hashtags' && 'bg-gray-200'}`}
                            onClick={() => setActiveSection('hashtags')}
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l-8-6 8-6zM7 4l8 6-8 6z"></path>
                            </svg>
                            <span className="ml-2 text-gray-800">HASHTAGS</span>
                            <span className="ml-auto text-gray-600">8</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Content */}
            <div className="ml-16 space-y-8">
                {activeSection === 'connections' && (
                    <div className="">
                        <div className="Connections">
                            <div className=" ml-16 mb-24 space-y-8">
                                {/* Connections Section */}
                                <div className="text-center space-x-4 flex ">
                                    <FiUsers className="text-[#A45286] w-6 h-6" />

                                    <p className="font-semibold items-start text-start text-[#A45286] text-3xl">Connections</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Connection Card 1 */}
                                    <div className="bg-white p-1 shadow w-[251px] h-[136px] rounded-lg">
                                        {/* Today */}
                                        <div className="mt-0">
                                            <div className="flex px-2 justify-between items-center">
                                                <p className="text-gray-700  font-semibold">Today</p>
                                                <span className="text-blue-500">Icon</span>
                                            </div>
                                            <div className="flex mt-1 px-2 space-x-3">
                                                <p className="w[33px]  text-white h-[33px] bg-[#A45286] rounded-md">10+</p>
                                                <p className="w-[60px] text-[#A45286] ">New Connection</p>
                                            </div>

                                            <hr className="my-2" />
                                            <div className="flex px-2 justify-between">
                                                <p className="text-blue-500 cursor-pointer">See stats</p>
                                                <p className="text-blue-500 cursor-pointer">See all</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connection Card 2 */}
                                    <div className="bg-white p-1 shadow w-[251px] h-[136px] rounded-lg">
                                        {/* Today */}
                                        <div className="mt-0">
                                            <div className="flex px-2 justify-between items-center">
                                                <p className="text-gray-700  font-semibold">Today</p>
                                                <span className="text-blue-500">Icon</span>
                                            </div>
                                            <div className="flex mt-1 px-2 space-x-3">
                                                <p className="w[33px]  text-white h-[33px] bg-[#A45286] rounded-md">10+</p>
                                                <p className="w-[60px] text-[#A45286] ">New Connection</p>
                                            </div>

                                            <hr className="my-2" />
                                            <div className="flex px-2 justify-between">
                                                <p className="text-blue-500 cursor-pointer">See stats</p>
                                                <p className="text-blue-500 cursor-pointer">See all</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connection Card 3 */}
                                    <div className="bg-white p-1 shadow w-[251px] h-[136px] rounded-lg">
                                        {/* Today */}
                                        <div className="mt-0">
                                            <div className="flex px-2 justify-between items-center">
                                                <p className="text-gray-700  font-semibold ">Today</p>
                                                <span className="text-blue-500">Icon</span>
                                            </div>
                                            <div className="flex mt-1 px-2 space-x-3">
                                                <p className="w[33px]  text-white h-[33px] bg-[#A45286] rounded-md">10+</p>
                                                <p className="w-[60px] text-[#A45286] ">New Connection</p>
                                            </div>

                                            <hr className="my-2" />
                                            <div className="flex px-2 justify-between">
                                                <p className="text-blue-500 cursor-pointer">See stats</p>
                                                <p className="text-blue-500 cursor-pointer">See all</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    {/* Left Line (HR) */}
                                    <hr className="flex-grow border-gray-300" />

                                    {/* Text */}
                                    <span className="text-gray-700  whitespace-nowrap text-lg font-bold ">Recent Connections</span>

                                    {/* Right Line (HR) */}
                                    <hr className="flex-grow border-gray-300" />
                                </div>


                                {/* Image Section */}
                                <div className=" space-y-6 w-[850px]">

                                    <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                        {/* Image and Text Section */}
                                        <div className="flex items-center space-x-4">
                                            <Image className="w-12 h-12 rounded-full" />
                                            <div className="flex flex-col">
                                                <p className="text-gray-700">Some here</p>
                                                <p className="">ojdiv</p>
                                                <span className="">dijfv</span>
                                            </div>
                                        </div>
                                        <div className="h-12 border-l border-gray-300"></div>
                                        {/* Message Section */}
                                        <div className="flex-1 w-[317px]">
                                            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                        </div>

                                        {/* Buttons Section */}
                                        <div className="flex space-x-2">
                                            <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Accept</button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                        {/* Image and Text Section */}
                                        <div className="flex items-center space-x-4">
                                            <Image className="w-12 h-12 rounded-full" />
                                            <div className="flex flex-col">
                                                <p className="text-gray-700">Some here</p>
                                                <p className="">ojdiv</p>
                                                <span className="">dijfv</span>
                                            </div>
                                        </div>
                                        <div className="h-12 border-l border-gray-300"></div>
                                        {/* Message Section */}
                                        <div className="flex-1">
                                            <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                        </div>

                                        {/* Buttons Section */}
                                        <div className="flex space-x-2">
                                            <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Accept</button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'invitations' && (
                    <div>
                        <div className="space-x-4 flex items-center">
                            <FiUsers className="text-[#A45286] w-6 h-6" />
                            <h2 className="text-3xl font-bold text-[#A45286]">Invitations</h2>
                        </div>
                        <div className="mt-8">
                            <div className="w-[480px] h-[50px] border-2 border-slate-400 rounded-md flex justify-between items-center bg-white">
                                {/* Received Button */}
                                <button
                                    className={`w-1/2 h-full ${activeTab === 'received' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} font-semibold hover:bg-blue-600 focus:bg-blue-700 transition-all duration-300 rounded-l-md`}
                                    onClick={handleReceived}
                                >
                                    Received
                                </button>

                                {/* Sent Button */}
                                <button
                                    className={`w-1/2 h-full ${activeTab === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} font-semibold hover:bg-gray-300 focus:bg-gray-400 transition-all duration-300 rounded-r-md`}
                                    onClick={handleSent}
                                >
                                    Sent
                                </button>
                            </div>

                            {/* Content for Received or Sent */}
                            <div className="mt-4">
                                {activeTab === 'received' ? (
                                    <div>
                                        <div className=" space-y-6 w-[850px]">

                                            <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image className="w-12 h-12 rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="text-gray-700">Some here</p>
                                                        <p className="">ojdiv</p>
                                                        <span className="">dijfv</span>
                                                    </div>
                                                </div>
                                                <div className="h-12 border-l border-gray-300"></div>
                                                {/* Message Section */}
                                                <div className="flex-1 w-[317px]">
                                                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                </div>

                                                {/* Buttons Section */}
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image className="w-12 h-12 rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="text-gray-700">Some here</p>
                                                        <p className="">ojdiv</p>
                                                        <span className="">dijfv</span>
                                                    </div>
                                                </div>
                                                <div className="h-12 border-l border-gray-300"></div>
                                                {/* Message Section */}
                                                <div className="flex-1">
                                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                </div>

                                                {/* Buttons Section */}
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="">
                                            <div className="Connections">
                                                <div className=" ml-16 mb-24 space-y-8">
                                                    <div className="flex items-center space-x-4">
                                                        {/* Left Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />

                                                        {/* Text */}
                                                        <span className="text-gray-700  whitespace-nowrap text-lg font-bold ">you have <span className="">2</span> new  Connections</span>

                                                        {/* Right Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />
                                                    </div>
                                                    {/* Image Section */}
                                                    <div className=" space-y-6 w-[850px]">

                                                        <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                            {/* Image and Text Section */}
                                                            <div className="flex items-center space-x-4">
                                                                <Image className="w-12 h-12 rounded-full" />
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-700">Some here</p>
                                                                    <p className="">ojdiv</p>
                                                                    <span className="">dijfv</span>
                                                                </div>
                                                            </div>
                                                            <div className="h-12 border-l border-gray-300"></div>
                                                            {/* Message Section */}
                                                            <div className="flex-1 w-[317px]">
                                                                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                            </div>

                                                            {/* Buttons Section */}
                                                            <div className="flex space-x-2">
                                                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                            {/* Image and Text Section */}
                                                            <div className="flex items-center space-x-4">
                                                                <Image className="w-12 h-12 rounded-full" />
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-700">Some here</p>
                                                                    <p className="">ojdiv</p>
                                                                    <span className="">dijfv</span>
                                                                </div>
                                                            </div>
                                                            <div className="h-12 border-l border-gray-300"></div>
                                                            {/* Message Section */}
                                                            <div className="flex-1">
                                                                <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                            </div>

                                                            {/* Buttons Section */}
                                                            <div className="flex space-x-2">
                                                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        {/* Left Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />

                                                        {/* Text */}
                                                        <span className="text-gray-700  whitespace-nowrap text-lg font-bold ">Recent  Connections</span>

                                                        {/* Right Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />
                                                    </div>
                                                    <div className="">
                                                        <div className="w-[850px] m-2 flex flex-col">
                                                            {/* First Row */}
                                                            <div className="flex space-x-2">
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end ">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Second Row */}
                                                            <div className="flex space-x-2 mt-2">
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end ">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'pages' && (
                    <div>
                        <div className="space-x-4 flex items-center">
                            <FiUsers className="text-[#A45286] w-6 h-6" />
                            <h2 className="text-3xl font-bold text-[#A45286]">Pages</h2>
                        </div>
                        <div className="mb-16 mt-7 space-y-6 ">
                            <div className="flex items-center justify-between w-[823px] h-[95px] shadow-md px-4 space-x-6 bg-white">
                                {/* Image and Text Section */}
                                <div className="flex items-center space-x-4">
                                    <Image className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700">Some here</p>
                                        <p className="">ojdiv</p>
                                        <span className="">dijfv</span>
                                    </div>
                                </div>
                                <div className="h-12 border-l border-gray-300"></div>
                                {/* Message Section */}
                                <div className="flex-1">
                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                </div>

                                {/* Buttons Section */}
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Pending</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[823px] h-[95px] shadow-md px-4 space-x-6 bg-white">
                                {/* Image and Text Section */}
                                <div className="flex items-center space-x-4">
                                    <Image className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700">Some here</p>
                                        <p className="">ojdiv</p>
                                        <span className="">dijfv</span>
                                    </div>
                                </div>
                                <div className="h-12 border-l border-gray-300"></div>
                                {/* Message Section */}
                                <div className="flex-1">
                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                </div>

                                {/* Buttons Section */}
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Pending</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[823px] h-[95px] shadow-md px-4 space-x-6 bg-white">
                                {/* Image and Text Section */}
                                <div className="flex items-center space-x-4">
                                    <Image className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700">Some here</p>
                                        <p className="">ojdiv</p>
                                        <span className="">dijfv</span>
                                    </div>
                                </div>
                                <div className="h-12 border-l border-gray-300"></div>
                                {/* Message Section */}
                                <div className="flex-1">
                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                </div>

                                {/* Buttons Section */}
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Pending</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[823px] h-[95px] shadow-md px-4 space-x-6 bg-white">
                                {/* Image and Text Section */}
                                <div className="flex items-center space-x-4">
                                    <Image className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700">Some here</p>
                                        <p className="">ojdiv</p>
                                        <span className="">dijfv</span>
                                    </div>
                                </div>
                                <div className="h-12 border-l border-gray-300"></div>
                                {/* Message Section */}
                                <div className="flex-1">
                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                </div>

                                {/* Buttons Section */}
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Pending</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[823px] h-[95px] shadow-md px-4 space-x-6 bg-white">
                                {/* Image and Text Section */}
                                <div className="flex items-center space-x-4">
                                    <Image className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700">Some here</p>
                                        <p className="">ojdiv</p>
                                        <span className="">dijfv</span>
                                    </div>
                                </div>
                                <div className="h-12 border-l border-gray-300"></div>
                                {/* Message Section */}
                                <div className="flex-1">
                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                </div>

                                {/* Buttons Section */}
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-[#A45286] text-white rounded-lg">Pending</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'groups' && (
                    <div>
                        <div className="space-x-4 flex items-center">
                            <FiUsers className="text-[#A45286] w-6 h-6" />
                            <h2 className="text-3xl font-bold text-[#A45286]">Groups</h2>
                        </div>
                        <div className="mt-8">
                            <div className="w-[480px] h-[50px] border-2 border-slate-400 rounded-md flex justify-between items-center bg-white">
                                {/* Your group Button */}
                                <button
                                    className={`w-1/2 h-full ${activeGroup === 'Your group' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} font-semibold hover:bg-blue-600 focus:bg-blue-700 transition-all duration-300 rounded-l-md`}
                                    onClick={handleYourGroup}
                                >
                                    Your Group
                                </button>

                                {/* Sent Button */}
                                <button
                                    className={`w-1/2 h-full ${activeGroup === 'group' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} font-semibold hover:bg-gray-300 focus:bg-gray-400 transition-all duration-300 rounded-r-md`}
                                    onClick={handleGroup}
                                >
                                    Sent
                                </button>
                            </div>

                            {/* Content for Received or Sent */}
                            <div className="mt-4">
                                {activeGroup === 'your group' ? (
                                    <div>
                                        <div className=" space-y-6 w-[850px]">

                                            <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image className="w-12 h-12 rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="text-gray-700">Some here</p>
                                                        <p className="">ojdiv</p>
                                                        <span className="">dijfv</span>
                                                    </div>
                                                </div>
                                                <div className="h-12 border-l border-gray-300"></div>
                                                {/* Message Section */}
                                                <div className="flex-1 w-[317px]">
                                                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                </div>

                                                {/* Buttons Section */}
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                {/* Image and Text Section */}
                                                <div className="flex items-center space-x-4">
                                                    <Image className="w-12 h-12 rounded-full" />
                                                    <div className="flex flex-col">
                                                        <p className="text-gray-700">Some here</p>
                                                        <p className="">ojdiv</p>
                                                        <span className="">dijfv</span>
                                                    </div>
                                                </div>
                                                <div className="h-12 border-l border-gray-300"></div>
                                                {/* Message Section */}
                                                <div className="flex-1">
                                                    <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                </div>

                                                {/* Buttons Section */}
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="">
                                            <div className="Connections">
                                                <div className=" ml-16 mb-24 space-y-8">
                                                    <div className="flex items-center space-x-4">
                                                        {/* Left Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />

                                                        {/* Text */}
                                                        <span className="text-gray-700  whitespace-nowrap text-lg font-bold ">you have <span className="">2</span> new  Connections</span>

                                                        {/* Right Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />
                                                    </div>
                                                    {/* Image Section */}
                                                    <div className=" space-y-6 w-[850px]">

                                                        <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                            {/* Image and Text Section */}
                                                            <div className="flex items-center space-x-4">
                                                                <Image className="w-12 h-12 rounded-full" />
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-700">Some here</p>
                                                                    <p className="">ojdiv</p>
                                                                    <span className="">dijfv</span>
                                                                </div>
                                                            </div>
                                                            <div className="h-12 border-l border-gray-300"></div>
                                                            {/* Message Section */}
                                                            <div className="flex-1 w-[317px]">
                                                                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                            </div>

                                                            {/* Buttons Section */}
                                                            <div className="flex space-x-2">
                                                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                                                            {/* Image and Text Section */}
                                                            <div className="flex items-center space-x-4">
                                                                <Image className="w-12 h-12 rounded-full" />
                                                                <div className="flex flex-col">
                                                                    <p className="text-gray-700">Some here</p>
                                                                    <p className="">ojdiv</p>
                                                                    <span className="">dijfv</span>
                                                                </div>
                                                            </div>
                                                            <div className="h-12 border-l border-gray-300"></div>
                                                            {/* Message Section */}
                                                            <div className="flex-1">
                                                                <p className="text-gray-600 w-[317px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam,</p>
                                                            </div>

                                                            {/* Buttons Section */}
                                                            <div className="flex space-x-2">
                                                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Accept</button>
                                                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Decline</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        {/* Left Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />

                                                        {/* Text */}
                                                        <span className="text-gray-700  whitespace-nowrap text-lg font-bold ">Recent  Connections</span>

                                                        {/* Right Line (HR) */}
                                                        <hr className="flex-grow border-gray-300" />
                                                    </div>
                                                    <div className="">
                                                        <div className="w-[850px] m-2 flex flex-col">
                                                            {/* First Row */}
                                                            <div className="flex space-x-2">
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end ">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Second Row */}
                                                            <div className="flex space-x-2 mt-2">
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end ">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                                <div className="w-[420px] h-[95px] border-2 border-slate-400 flex flex-col">
                                                                    <Image
                                                                        src=""
                                                                        alt="img"
                                                                        className="w-full h-[70%] object-cover" // Fill width and height appropriately
                                                                    />
                                                                    <div className="flex flex-col p-2 flex-grow">
                                                                        <p className="text-sm font-semibold">hufhg</p>
                                                                        <span className="text-xs text-gray-500">dh</span>
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <span className="text-xs text-gray-500">right bottom corner</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'teammates' && (
                    <div>
                        <div className="space-x-4 flex items-center">
                            <FiUsers className="text-[#A45286] w-6 h-6" />
                            <h2 className="text-3xl font-bold text-[#A45286]">Teammates</h2>
                        </div>

                        <div className="mb-10 mt-6">
                            <div className="w-[847px] h-[440px] border-2 border-slate-400 flex justify-center items-center">
                                <section className="text-center">
                                    <div>
                                        <div className="text-3xl mb-2">Icon</div> {/* Adjusted size and spacing for the icon */}
                                        <p className="text-lg">No Teammates</p> {/* Adjusted font size */}
                                    </div>
                                </section>
                            </div>
                        </div>


                    </div>
                )}

                {activeSection === 'hashtags' && (
                    <div>
                        <div className="space-x-4 flex items-center">
                            <FiUsers className="text-[#A45286] w-6 h-6" />
                            <h2 className="text-3xl font-bold text-[#A45286]"> # Hashtags</h2>
                        </div>
                        <div className="mb-10 mt-6">
                            <div className="w-[847px] h-[440px] border-2 border-slate-400 flex">
                                <div className="p-3 space-x-4">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                                        All
                                    </button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-md hover:bg-gray-300 transition duration-200">
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
