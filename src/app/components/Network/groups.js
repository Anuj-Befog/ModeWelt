import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import Image from 'next/image';
function groups() {

    const [activeGroup, setActiveGroup] = useState('your group');


    const handleYourGroup = () => {
        setActiveGroup('your group');
    };

    const handleGroup = () => {
        setActiveGroup('group');
    };
    return (
        <div>
            <div>
                <div className="space-x-4 flex items-center">
                    <FiUsers className="text-[#A45286] w-6 h-6" />
                    <h2 className="text-3xl font-bold text-[#A45286]">Groups</h2>
                </div>
                <div className="mt-8">
                    <div className="w-[480px] h-[50px] border-2 border-slate-400 rounded-md flex justify-between items-center bg-white">
                        {/* Your group Button */}
                        <button
                            className={`w-1/2 h-full ${activeGroup === 'Your group' ? 'bg-[#A45286] text-white' : 'bg-[#c88bb2] text-white'} font-semibold hover:bg-[#A45286] transition-all duration-200 rounded-l-md`}
                            onClick={handleYourGroup}
                        >
                            Your Group
                        </button>

                        {/* Sent Button */}
                        <button
                            className={`w-1/2 h-full ${activeGroup === 'group' ? 'bg-[#A45286] text-white' : 'bg-[#c88bb2] text-white'} font-semibold hover:bg-[#A45286]  transition-all duration-200 rounded-r-md`}
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
        </div>
    )
}

export default groups
