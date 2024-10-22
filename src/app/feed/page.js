'use client'

import React from 'react';
import { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { CiImageOn, CiVideoOn } from 'react-icons/ci';
import { BsFillSendFill } from 'react-icons/bs';
import { FaEllipsisH, FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';
import { LuDownloadCloud } from "react-icons/lu";

const Post = () => {
  const [src, setSrc] = useState('/profile.png'); // Default image path
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex justify-center min-h-screen mt-12 space-x-14">
      {/* Left Section */}
      <div className="flex flex-col mb-8 w-[850px]"> {/* Set the width here */}
        {/* New Post Section */}
        <div className="bg-white h-[135px] p-5 my-4">
          <div className="flex items-center space-x-4">
            <p className="text-[12px] pl-3 font-semibold font-[Gotham] text-[#181818]">NEW POST</p>
          </div>
          <hr className=" w-[790px] mx-auto mt-4 bg-gray-300 mb-4" />
          <div className=" flex items-center px-2 justify-between text-gray-600">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="flex-grow mt-[-11px] p-1 text-[18px] rounded-md focus:outline-none"
            />
            <div className="flex space-x-4 mt-1">
              <GrAttachment className="text-xl w-[24px] h-[24px] " />
              <CiImageOn className="text-xl  w-[24px] h-[24px]" />
              <CiVideoOn className="text-xl w-[24px] h-[24px]" />
              <div className="flex items-center  justify-center w-[32px] h-[32px] bg-[#E188C1] rounded-lg">
                <BsFillSendFill className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sort By Section */}
        <div className="flex justify-center items-center my-4 space-x-4">
          <hr className="flex-grow border-gray-300" />
          <p className="text-center text-[12px]">
            SORT BY <span className="font-semibold text-[#A45286]">Trending</span>
          </p>
          <hr className="flex-grow border-gray-300" />
        </div>


        {/* Post Section */}
        {[1, 2].map((_, index) => (
          <div key={index} className="bg-white w-[850px] h-auto my-4">
            <div className="flex justify-between items-center px-4 py-2">
              <p className="leading-[15px] text-[10px]">
                <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
                <span className="text-[#A45286]"> Cody Hawkins</span> liked this
              </p>
              <FaEllipsisH className="text-[#181818] hover:text-primary w-[24px] h-[24px]" />
            </div>
            <hr className="w-[850px] bg-gray-300 mb-3" />

            <div className="flex items-center mt-3 space-x-4 px-8">
              <Image
                src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full w-[52px] h-[52px]"
                onError={() => setSrc("/Images/Images1.png")}
              />
              <div>
                <h1 className="text-[14px] font-bold">Adity Kumar</h1>
                <span className="text-[10px]">Illustration Designer</span>
              </div>
            </div>

            <div className="mt-1 text-gray-600">
              <p className="px-8 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
                {expanded && (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga nihil autem, rem ratione dolorum quis quidem mollitia recusandae iusto.
                  </span>
                )}
              </p>
              {!expanded ? (
                <span
                  className="text-[#A45286] pl-7 text-[12px] cursor-pointer"
                  onClick={() => setExpanded(true)}
                >
                  Read more
                </span>
              ) : (
                <span
                  className="text-[#A45286] pl-7 text-[12px] cursor-pointer"
                  onClick={() => setExpanded(false)}
                >
                  Show less
                </span>
              )}
              <div className="mt-3">
                <Image
                  src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                  alt="Post Image"
                  width={790}
                  height={300}
                  className="object-cover mx-auto w-[790px] h-[300px]"
                />
              </div>
            </div>

            <div className="flex justify-between items-center px-9 mb-4 mt-4">
              <div className="flex space-x-6"> {/* Increased spacing */}
                <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                  <FaThumbsUp className="text-primary text-[20px]" />
                  <span className="text-[14px]">28</span>
                </div>
                <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                  <FaComment className="text-primary text-[20px]" />
                  <span className="text-[14px]">79</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaShareAlt className="text-primary text-[20px]" />
                <span className="text-[14px]">SHARE</span>
              </div>
            </div>
          </div>
        ))}


        <div className="bg-white h-[402px] my-4">
          <div className="flex justify-between items-center px-4 py-2">
              <p className="leading-[15px] text-[10px]">
                <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
                <span className="text-[#A45286]"> Cody Hawkins</span> liked this
              </p>
              <FaEllipsisH className="text-[#181818] hover:text-primary w-[24px] h-[24px]" />
            </div>
          <hr className=" w-[850px] bg-gray-300 mb-1" />
          <div className="flex items-center mt-4 px-8 space-x-4">
            <Image
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full w-[52px] h-[52px] "
            />
            <div>
              <h1 className="text-[14px] font-semibold">Adity Kumar</h1>
              <span className='text-[10px]' >Illustration Designer</span>
            </div>
          </div>
          <div className=" text-gray-600 px-8">
            <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat aperiam odio sapiente voluptates est...</p>
            <div className="mt-3 space-y-4">
              <div className="w-[790px] h-[80px] bg-[#FFE3EF] flex items-center p-4 rounded-lg">
                {/* Image in Circle */}
                <img
                  src="/path-to-image.jpg"
                  alt="Circular"
                  className="w-42 h-42 rounded-full object-cover"
                />

                {/* Text */}
                <div className=" space-y-3 px-4">
                  <p className="ml-4 text-base font-semibold text-gray-700">Text Content Here</p>
                  <span className=" pl-6">PDF file, 324 kb</span>
                </div>

                {/* Icon in the Right */}
                <div className="ml-auto">
                  <LuDownloadCloud className='w-[22.2px] h-[15.1px] ' />
                </div>
              </div>
              <div className="w-[790px] h-[80px] bg-[#FFE3EF] flex items-center p-4 rounded-lg">
                {/* Image in Circle */}
                <img
                  src="/path-to-image.jpg"
                  alt="Circular"
                  className="w-42 h-42 rounded-full object-cover"
                />

                {/* Text */}
                <div className=" space-y-3 px-4">
                  <p className="ml-4 text-base font-semibold text-gray-700">Text Content Here</p>
                  <span className=" pl-6">PDF file, 324 kb</span>
                </div>

                {/* Icon in the Right */}
                <div className="ml-auto">
                  <LuDownloadCloud className='w-[22.2px] h-[15.1px] ' />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-5 px-8">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-3">
                <FaThumbsUp className="text-primary text-[20px]" />
                <span>28</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaComment className="text-primary text-[20px]" />
                <span>79</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaShareAlt className="text-primary text-[20px]" />
              <span>SHARE</span>
            </div>
          </div>
        </div>


      </div>

      {/* Right Section */}
      <div className=" mt-5 w-[290px]">
        {/* Profile Section */}
        <div className="bg-white w-[290px] h-[280px] text-center mb-3">
          <Image
            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
            alt="Cover"
            width={290}
            height={120}
            className="object-cover mb-4 w-[290px] h-[120px] "
          />
          <div className="relative w-[100px] h-[100px] mx-auto">
            <Image
              src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 w-[100px] h-[100px] border-white object-cover -mt-16"
            />
          </div>
          <div className="mt-2 text-[14px] font-bold">Befog website</div>
          <p className="text-[#181818] text-[10px] px-7 h-[45px] ">Description Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore modi excepturi illum id fuga tenetur .</p>
        </div>

        {/* Write an Article */}
        <div className="flex justify-center w-[290px] h-[75px] mb-3">
          <button
            className="rounded-md px-4 w-[269px] my-auto text-[12px] h-[32px] font-bold text-white"
            style={{ background: 'linear-gradient(0deg, #A45286 0%, #DC85BC 100%)' }}
          >
            Write an article
          </button>
        </div>

        {/* My Groups Section */}
        <div className="bg-white h-[400px] mb-3">
          <p className="font-bold px-8 pt-4 text-[12px] pb-2 ">My Groups</p>
          <hr className="border-t border-gray-300 w-[230px] mx-auto mt-2" />
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex w-[231px] h-[80px] mx-auto my-auto mt-4 items-center p-3 space-y-4 space-x-3">
              <Image
                src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                alt="Group"
                width={48}
                height={48}
                className="rounded-full w-[48px] h-[48px]"
              />
              <div className=" ">

                <p className="font-medium text-[14px]  ">Fashion Designing </p>
                <p className='text-[14px]' >University, Lucknow</p>
              </div>
            </div>
          ))}
        </div>

        {/* Followed Hashtags Section */}
        <div className="bg-white h-[265px] p-4 mb-3">
          <p className="font-semibold text-[12px]">Followed Hashtags</p>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="flex flex-wrap items-center w-[259px] mt-4 space-x-3">
            <p className="bg-[#FFE3EF] font-semibold rounded-md text-[12px] ">#Fashion</p>
            <p className="bg-[#FFE3EF] font-semibold rounded-lg text-[12px] ">#Fashion</p>

          </div>
        </div>

        {/* Trending Articles Section */}
        <div className="bg-white h-[300px] p-4">
          <p className="font-bold text-[12px] ">Trending Articles</p>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="w-[227px] h-[198px] mt-2 flex-wrap ">

            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center space-y-4 space-x-3">
                <img
                  src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                  alt="Trending Article"
                  className="w-[80px] h-[52px]"
                />
                <div className=" flex  flex-col ">
                  <p className="text-semibold text-[14px] ">Fashion Designing</p>
                  <p className="text-semibold text-[14px] ">Fashion Designing</p>
                  <span className='text-[10px]'>jhbgvfc</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
