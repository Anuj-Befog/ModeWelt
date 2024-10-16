"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";

export default function Demo() {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(".star", {
            duration: 0.4,
            transition: "all 0.5s",
            stagger: 0.2,
            opacity: 1,
            color: "#04AF31",
            ease: "elastic",
        })
            .to("#presuccess", {
                border: "4px solid #04AF31",
                duration: 0.3,
                ease: "linear",
            }, '>')
            .to('#stars-container', {
                border: "4px solid #04AF31",
                duration: 0.3,
                ease: "linear",
            }, '>')
            .to('#check', {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "elastic",
            }, '>')
            .to('check', {
                y: -100,
                transition: "all 0.2s",
            })
            .from('#welcome-heading', {
                delay: 0.2,
                y: 20,
            })
            .to('#welcome-heading', {
                y: 0,
                display: 'block',
                transition: "all 0.1s",
                opacity: 1,
                duration: 0.2,
                ease: "linear",
            })
            .from('#welcome-para', {
                delay: 0.3,
                y: 20,
            })
            .to('#welcome-para', {
                y: 0,
                display: 'block',
                transition: "all 0.1s",
                opacity: 1,
                duration: 0.2,
                ease: "linear",
            })
            .from('#welcome-btn', {
                delay: 0.5,
                y: 20,
            })
            .to('#welcome-btn', {
                y: 0,
                display: 'block',
                transition: "all 0.1s",
                opacity: 1,
                duration: 0.2,
                ease: "linear",
            })
            .from('#check-complete', {
                x: 100,
            })
            .to('#check-complete', {
                x: 0,
                display: 'block',
                transition: "all 0.1s",
                opacity: 1,
                duration: 0.2,
                ease: "power4",
            })

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="min-h-[88vh] flex flex-col justify-center items-center bg-gray-50">
            <div className="text-center">
                <div id="progress" className="flex flex-col items-center justify-center transition transition-300">
                    <div id="presuccess" className="h-24 w-24 rounded-full border-[4px] border-gray-500">
                        <div id="check" className="scale-[0.1] opacity-0 relative top-[1.5rem] left-[0.6rem]">
                            <Image className="w-[4rem]" src='/assets/check.png' width={100} height={100} alt="check" />
                        </div>
                    </div>

                    <div id="stars-container" className="relative mt-4 border-gray-600 border-[3px] w-[200px] h-[39px] text-white py-2 px-8 rounded-full font-semibold">
                        <div className="stars flex justify-around items-center text-[2.5rem] gap-[10px] text-gray-500 relative bottom-[1.1rem] right-[1.5rem]">
                            <div className="star">*</div>
                            <div className="star">*</div>
                            <div className="star">*</div>
                            <div className="star">*</div>
                            <div className="star">*</div>
                            <div className="star">*</div>
                            <div className="star">*</div>
                        </div>
                        <div id="check-complete" className="absolute mt-4 bottom-[-8%] right-[-2%] hidden bg-green-600 w-[200px] h-[39px] text-white py-2 px-8 rounded-full font-semibold">
                            COMPLETE
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 transition transition-300">
                <h1 id="welcome-heading" className="text-3xl md:text-5xl font-bold text-primary hidden transition transition-300">
                    WELCOME BACK! TO MODEWELT
                </h1>
                <p id="welcome-para" className="mt-4 uppercase text-sm w-[60%] mx-auto hidden transition transition-300">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
                    since the 1500s.
                </p>
            </div>

            <div className="mt-12">
                <Link href='/'>
                    <button id="welcome-btn" className="bg-primarybtn hover:bg-primary text-white py-3 px-8 rounded-full font-semibold hidden">
                        GO TO HOME PAGE
                    </button>
                </Link>
            </div>
        </div>
    );
}
