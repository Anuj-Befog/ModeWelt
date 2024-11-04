// Connections.js
import React from 'react';
import Image from 'next/image';

const Connections = () => {
    return (
        <div className="Connections">
            <div className="mb-24 space-y-8">
                {/* Connections Section */}
                <div className="text-center space-x-4 flex ">
                    <p className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">Connections</p>
                </div>

                {/* Connection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
                    {/* Connection Card 1 */}
                    <div className="bg-[#fff] shadow w-[251px] h-[136px] rounded-[4px]">
                        {/* Top Card Container */}
                        <div className="p-2">
                            {/* Header Card */}
                            <div className="flex px-2 justify-between items-center">
                                <div className="font-[Arial] font-[700] text-[13px] leading-[14.95px] uppercase">Today</div>
                                <Image alt='three dots' height={100} width={100} src='/assets/network/connections/threedots.png' className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            {/* Card Description */}
                            <div className="flex my-[0.93rem] px-2 gap-[0.5rem]">
                                <div className="w-[33px] h-[33px] font-[Arial] text-[16px] flex justify-center items-center text-white bg-[#A45286] border-[1px] border-[#A45286] rounded-[4px] leading-[18.4px]">
                                    10+
                                </div>
                                <div className="w-min h-[28px] font-[Arial] text-[12px] font-[700] text-[#A45286] uppercase">New Connection</div>
                            </div>
                        </div>
                        {/* Bottom Card Container */}
                        <div className="flex justify-between">
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See stats</span>
                            </div>
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See all</span>
                            </div>
                        </div>
                    </div>

                    {/* Connection Card 2 */}
                    <div className="bg-[#fff] shadow w-[251px] h-[136px] rounded-[4px]">
                        {/* Top Card Container */}
                        <div className="p-2">
                            {/* Header Card */}
                            <div className="flex px-2 justify-between items-center">
                                <div className="font-[Arial] font-[700] text-[13px] leading-[14.95px] uppercase">Last Week</div>
                                <Image alt='three dots' height={100} width={100} src='/assets/network/connections/threedots.png' className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            {/* Card Description */}
                            <div className="flex my-[0.93rem] px-2 gap-[0.5rem]">
                                <div className="w-[33px] h-[33px] font-[Arial] text-[16px] flex justify-center items-center text-white bg-[#A45286] border-[1px] border-[#A45286] rounded-[4px] leading-[18.4px]">
                                    100
                                </div>
                                <div className="w-min h-[28px] font-[Arial] text-[12px] font-[700] text-[#A45286] uppercase">New Connection</div>
                            </div>
                        </div>
                        {/* Bottom Card Container */}
                        <div className="flex justify-between">
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See stats</span>
                            </div>
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See all</span>
                            </div>
                        </div>
                    </div>

                    {/* Connection Card 3 */}
                    <div className="bg-[#fff] shadow w-[251px] h-[136px] rounded-[4px]">
                        {/* Top Card Container */}
                        <div className="p-2">
                            {/* Header Card */}
                            <div className="flex px-2 justify-between items-center">
                                <div className="font-[Arial] font-[700] text-[13px] leading-[14.95px] uppercase">Last Month</div>
                                <Image alt='three dots' height={100} width={100} src='/assets/network/connections/threedots.png' className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            {/* Card Description */}
                            <div className="flex my-[0.93rem] px-2 gap-[0.5rem]">
                                <div className="w-[33px] h-[33px] font-[Arial] text-[16px] flex justify-center items-center text-white bg-[#A45286] border-[1px] border-[#A45286] rounded-[4px] leading-[18.4px]">
                                    10+
                                </div>
                                <div className="w-min h-[28px] font-[Arial] text-[12px] font-[700] text-[#A45286] uppercase">New Connection</div>
                            </div>
                        </div>
                        {/* Bottom Card Container */}
                        <div className="flex justify-between">
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See stats</span>
                            </div>
                            <div className="w-[126px] h-[33px] flex justify-center items-center font-[Arial] font-[600] text-[12px] text-[#717171] border-t leading-[13.8px]">
                                <span className='cursor-pointer'>See all</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Left Line (HR) */}
                    <hr className="flex-grow border-gray-300" />

                    {/* Text */}
                    <span className="text-gray-700 whitespace-nowrap text-lg font-bold">Recent Connections</span>

                    {/* Right Line (HR) */}
                    <hr className="flex-grow border-gray-300" />
                </div>


                {/* Image Section */}
                <div className="space-y-6 w-[850px]">

                    <div className="flex items-center justify-between w-full h-[95px] shadow-md px-4 space-x-6 bg-white">
                        {/* Image and Text Section */}
                        <div className="flex items-center space-x-4">
                            <Image height={100} width={100} alt='' className="w-12 h-12 rounded-full" />
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
                            <Image height={100} width={100} alt='' className="w-12 h-12 rounded-full" />
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
    );
};

export default Connections;
