// Connections.js
import React from 'react';
import Image from 'next/image';
import { FiUsers } from 'react-icons/fi';

const Connections = () => {
    return (
        <div className="Connections">
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
        </div>
    );
};

export default Connections;
