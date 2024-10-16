'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiUsers } from 'react-icons/fi';
import Connections from '../components/Network/connection'
import Invitations from '../components/Network/invitation'
import Pages from '../components/Network/pages'
import Groups from '../components/Network/groups'
import Teammates from '../components/Network/teammates'
import Hashtags from '../components/Network/hashtag'
function Page() {
    // State to control which section is active
    const [activeSection, setActiveSection] = useState('connections');
    // State to control the active tab


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
            <div className="ml-16 mb-10 space-y-8">
                {activeSection === 'connections' && (
                    <Connections/>
                )}

                {activeSection === 'invitations' && (
                   <Invitations/>
                )}

                {activeSection === 'pages' && (
                   <Pages/>
                )}

                {activeSection === 'groups' && (
                   <Groups/>
                )}

                {activeSection === 'teammates' && (
                    <Teammates/>
                )}

                {activeSection === 'hashtags' && (
                   <Hashtags/>
                )}
            </div>
        </div>
    );
}

export default Page;
