import React, { useState } from 'react';
import Image from 'next/image';

export default function Invitation() {

    const [activeTab, setActiveTab] = useState('received');

    // Handle switching between Received and Sent
    const handleReceived = () => {
        setActiveTab('received');
    };

    // Handle switching between Received and Sent
    const handleSent = () => {
        setActiveTab('sent');
    };

    return (
        <div>
            <div>
                {/* Invitation Heading */}
                <div className="space-x-4 flex items-center">
                    <h2 className="font-[Arial] text-[#A45286] text-[20px] font-[700] uppercase leading-[23px]">
                        Invitations
                    </h2>
                </div>
                {/* Buttons Received and Sent */}
                <div className="mt-8">
                    <div className="flex items-end border-b-[1px] border-[#E7E7E7]">
                        {/* Received Button */}
                        <button
                            className={`w-[240px] font-[Arial] font-[400] text-[12px] ${activeTab === 'received' ? 'bg-[#fff] text-[#000] h-[40px]' : 'h-[50px] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] text-white'} font-semibold transition-all duration-300 leading-[13.8px] uppercase`}
                            onClick={handleReceived}
                        >
                            Received
                        </button>

                        {/* Sent Button */}
                        <button
                            className={`w-[240px] font-[Arial] font-[400] text-[12px] ${activeTab === 'sent' ? 'bg-[#fff] text-[#000] h-[40px]' : 'h-[50px] bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0] text-white'} font-semibold transition-all duration-300 leading-[13.8px] uppercase`}
                            onClick={handleSent}
                        >
                            Sent
                        </button>
                    </div>

                    {/* Content for Received or Sent */}
                    <div className="mt-4">
                        {activeTab === 'received' ? (
                            <div>
                                {/* Divider */}
                                <div className="flex items-center space-x-4 mt-8">
                                    {/* Left Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />

                                    {/* Text */}
                                    <div className="font-[Gotham] font-[700] text-[12px] text-[#181818] whitespace-nowrap leading-[11.48px] uppercase">
                                        YOU HAVE <span className='text-[#A45286]'>2 NEW CONNECTION</span>
                                    </div>

                                    {/* Right Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />
                                </div>

                                {/* Image Section */}
                                <div className="space-y-6 mt-7 w-[850px]">
                                    {/* Image Connection Card 1 */}
                                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white">
                                        {/* Image and Text Section */}
                                        <div className="flex items-center space-x-4">
                                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                                            <div className="flex flex-col">
                                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Brandon Wilson</p>
                                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-15px">Senior graphic designer</p>
                                                <span className="font-[Gotham] mt-1 text-[#A45286] text-[10px] leading-[15px]">623 connections</span>
                                            </div>
                                        </div>
                                        <div className="w-[2px] h-[42px] bg-[#A45286]"></div>
                                        {/* Message Section */}
                                        <div className="flex-1 w-[317px]">
                                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                                            </p>
                                        </div>

                                        {/* Buttons Section */}
                                        <div className="flex space-x-2">
                                            <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                                                <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>Accept</span>
                                            </button>
                                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                                <span className='font-[Arial] font-medium text-[#B7B7B7] text-[12px] leading-[13.8px]'>Decline</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Connection Card 2 */}
                                    <div className="w-full h-[95px] flex items-center justify-between px-6 space-x-6 bg-white">
                                        {/* Image and Text Section */}
                                        <div className="flex items-center space-x-4">
                                            <Image src='/assets/sample/connection-profile.png' height={100} width={100} alt='connection image' className="w-[52px] h-[52px] rounded-full" />
                                            <div className="flex flex-col">
                                                <p className="font-[Gotham] text-[#181818] font-bold text-[14px] leading-[13.4px]">Theresa Steward</p>
                                                <p className="font-[Arial] mt-2 text-[#181818] text-[10px] font-[400] leading-15px">Fashion Designer</p>
                                                <span className="font-[Gotham] mt-1 text-[#A45286] text-[10px] leading-[15px]">481 connections</span>
                                            </div>
                                        </div>
                                        <div className="w-[2px] h-[42px] bg-[#A45286]"></div>
                                        {/* Message Section */}
                                        <div className="flex-1 w-[317px]">
                                            <p className="w-[317px] h-[45px] flex justify-center items-center font-[Gotham] text-[10px] text-[#181818bb] leading-[15px]">
                                                Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                                            </p>
                                        </div>

                                        {/* Buttons Section */}
                                        <div className="flex space-x-2">
                                            <button className="w-[91px] h-[32px] flex justify-center items-center rounded-[4px] uppercase bg-gradient-to-r from-[#c166a0] via-[#A45286] to-[#c166a0]">
                                                <span className='font-[Arial] font-[700] text-[#FFFFFF] text-[12px] leading-[13.8px]'>Accept</span>
                                            </button>
                                            <button className="w-[91px] h-[32px] flex justify-center items-center border-[#E7E7E7] border-[1px] rounded-[4px] uppercase">
                                                <span className='font-[Arial] font-medium text-[#B7B7B7] text-[12px] leading-[13.8px]'>Decline</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center space-x-4 mt-8">
                                    {/* Left Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />

                                    {/* Text */}
                                    <div className="font-[Gotham] font-[700] text-[12px] text-[#181818] whitespace-nowrap leading-[11.48px] uppercase">
                                        RECENT CONNECTIONS
                                    </div>

                                    {/* Right Line (HR) */}
                                    <hr className="flex-grow border-[#E7E7E7]" />
                                </div>

                                {/* Recent Connection Profile */}
                                <div className="w-[850px] mt-7 flex flex-col">
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
                        ) : (
                            <div>
                                <div className="">
                                    <div className="Connections">
                                        <div className="mb-24 space-y-8">
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

                                                <div className="flex items-center justify-between w-full h-[95px] px-4 space-x-6 bg-white">
                                                    {/* Image and Text Section */}
                                                    <div className="flex items-center space-x-4">
                                                        <Image width={100} height={100} alt='' className="w-12 h-12 rounded-full" />
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
                                                <div className="flex items-center justify-between w-full h-[95px] px-4 space-x-6 bg-white">
                                                    {/* Image and Text Section */}
                                                    <div className="flex items-center space-x-4">
                                                        <Image width={100} height={100} alt='' className="w-12 h-12 rounded-full" />
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
                                            {/* Recent Connection Profile */}
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