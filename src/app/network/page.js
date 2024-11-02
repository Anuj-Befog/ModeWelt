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
        <div className="mt-[45px] ml-[134px] flex">
            {/* Left Sidebar */}
            <div className="w-[290px] h-[306px] bg-[#FFFFFF]">
                <div
                    className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                    onClick={() => setActiveSection('connections')}
                >
                    <div className={`flex ${activeSection === 'connections' && 'opacity-[0.6]'}`} >
                        <Image
                            width={100}
                            height={100}
                            className='w-[16px] h-[16px]'
                            src="/assets/network/connection.png"
                            alt='connection'
                        />
                        <span className="font-[Arial] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">Connections</span>
                    </div>
                    <span className="ml-auto text-[#FBAE4A]" > <span className=" text-xl ">.</span>1,038</span>
                </div>
                <ul className="space-y-0">
                    <li
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'invitations' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('invitations')}
                    >
                        <Image
                            width={100}
                            height={100}
                            className='w-[16px] h-[16px]'
                            src="/assets/network/invitation.png"
                            alt='invitation'
                        />
                        <span className="font-[Arial] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">INVITATIONS</span>
                        <span className="ml-auto font-[Gotham] text-[#000000] leading-[11.48px]">2</span>
                    </li>
                    <li
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'teammates' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('teammates')}
                    >
                        <Image
                            width={100}
                            height={100}
                            className='w-[16px] h-[16px]'
                            src="/assets/network/teammate.png"
                            alt='teammate'
                        />
                        <span className="font-[Gotham] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">TEAMMATES</span>
                        <span className="ml-auto font-[Gotham] text-[#000000] leading-[11.48px]">6</span>
                    </li>
                    <li
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'groups' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('groups')}
                    >
                        <Image
                            width={100}
                            height={100}
                            className='w-[16px] h-[16px]'
                            src="/assets/network/group.png"
                            alt='group'
                        />
                        <span className="font-[Gotham] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">GROUPS</span>
                        <span className="ml-auto font-[Gotham] text-[#000000] leading-[11.48px]">6</span>
                    </li>
                    <li
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'pages' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('pages')}
                    >
                        <Image
                            width={100}
                            height={100}
                            className='w-[16px] h-[16px]'
                            src="/assets/network/page.png"
                            alt='page'
                        />
                        <span className="font-[Gotham] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">PAGES</span>
                        <span className="ml-auto font-[Gotham] text-[#000000] leading-[11.48px]">28</span>
                    </li>
                    <li
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer ${activeSection === 'hashtags' && 'opacity-[0.6]'}`}
                        onClick={() => setActiveSection('hashtags')}
                    >
                        <Image
                            width={100}
                            height={100}
                            className='w-[16px] h-[16px]'
                            src="/assets/network/hashtag.png"
                            alt='hashtag'
                        />
                        <span className="font-[Arial] text-[#181818] text-[12px] font-[700] leading-[13.8px] uppercase ml-[0.4rem]">HASHTAGS</span>
                        <span className="ml-auto font-[Gotham] text-[#000000] leading-[11.48px]">8</span>
                    </li>
                </ul>
            </div>

            {/* Right Content */}
            <div className="ml-16 mb-10 space-y-8">
                {activeSection === 'connections' && (
                    <Connections />
                )}

                {activeSection === 'invitations' && (
                    <Invitations />
                )}

                {activeSection === 'pages' && (
                    <Pages />
                )}

                {activeSection === 'groups' && (
                    <Groups />
                )}

                {activeSection === 'teammates' && (
                    <Teammates />
                )}

                {activeSection === 'hashtags' && (
                    <Hashtags />
                )}
            </div>
        </div>
    );
}

export default Page;
