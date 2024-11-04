'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Connections from '../../components/Network/connection';
import Invitations from '../../components/Network/invitation';
import Pages from '../../components/Network/pages';
import Groups from '../../components/Network/groups';
import Teammates from '../../components/Network/teammates';
import Hashtags from '../../components/Network/hashtag';

export default function Network() {
    const [activeSection, setActiveSection] = useState('connections');
    const scrollerRef = useRef(null);

    // References for each link item
    const connectionsRef = useRef(null);
    const invitationsRef = useRef(null);
    const teammatesRef = useRef(null);
    const groupsRef = useRef(null);
    const pagesRef = useRef(null);
    const hashtagsRef = useRef(null);

    // Mapping active section to corresponding ref
    const sectionRefs = {
        connections: connectionsRef,
        invitations: invitationsRef,
        teammates: teammatesRef,
        groups: groupsRef,
        pages: pagesRef,
        hashtags: hashtagsRef,
    };

    // Move scroller to selected link
    useEffect(() => {
        const activeRef = sectionRefs[activeSection];
        if (activeRef.current && scrollerRef.current) {
            const topPosition = activeRef.current.offsetTop;
            scrollerRef.current.style.top = `${topPosition + 0.6}px`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSection]);

    return (
        <div className="mt-[45px] ml-[134px] flex">
            {/* Left Sidebar */}
            <div className="w-[290px] h-[306px] bg-[#FFFFFF] relative">
                <ul className="relative space-y-0">
                    {/* Scroller */}
                    <div
                        ref={scrollerRef}
                        className="absolute w-[5px] h-[48px] rounded-r-[50px] bg-[#A45286] shadow-lg transition-all duration-300 ease-in-out"
                    ></div>

                    {/* Connections Link */}
                    <li
                        ref={connectionsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('connections')}
                    >
                        <Image width={16} height={16} src="/assets/network/connection.png" alt='connection' />
                        <span className="ml-[0.4rem]">Connections</span>
                    </li>

                    {/* Invitations Link */}
                    <li
                        ref={invitationsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('invitations')}
                    >
                        <Image width={16} height={16} src="/assets/network/invitation.png" alt='invitation' />
                        <span className="ml-[0.4rem]">Invitations</span>
                    </li>

                    {/* Teammates Link */}
                    <li
                        ref={teammatesRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('teammates')}
                    >
                        <Image width={16} height={16} src="/assets/network/teammate.png" alt='teammate' />
                        <span className="ml-[0.4rem]">Teammates</span>
                    </li>

                    {/* Groups Link */}
                    <li
                        ref={groupsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('groups')}
                    >
                        <Image width={16} height={16} src="/assets/network/group.png" alt='group' />
                        <span className="ml-[0.4rem]">Groups</span>
                    </li>

                    {/* Pages Link */}
                    <li
                        ref={pagesRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('pages')}
                    >
                        <Image width={16} height={16} src="/assets/network/page.png" alt='page' />
                        <span className="ml-[0.4rem]">Pages</span>
                    </li>

                    {/* Hashtags Link */}
                    <li
                        ref={hashtagsRef}
                        className={`flex items-center p-[1rem] border-b-2 border-slate-300 w-full h-[51px] cursor-pointer`}
                        onClick={() => setActiveSection('hashtags')}
                    >
                        <Image width={16} height={16} src="/assets/network/hashtag.png" alt='hashtag' />
                        <span className="ml-[0.4rem]">Hashtags</span>
                    </li>
                </ul>
            </div>

            {/* Right Content */}
            <div className="ml-16 mb-10 space-y-8">
                {activeSection === 'connections' && <Connections />}
                {activeSection === 'invitations' && <Invitations />}
                {activeSection === 'pages' && <Pages />}
                {activeSection === 'groups' && <Groups />}
                {activeSection === 'teammates' && <Teammates />}
                {activeSection === 'hashtags' && <Hashtags />}
            </div>
        </div>
    );
}
