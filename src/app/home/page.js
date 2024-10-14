import React from 'react';
import { GrAttachment } from 'react-icons/gr';
import { CiImageOn, CiVideoOn } from 'react-icons/ci';
import { BsFillSendFill } from 'react-icons/bs';
import { FaEllipsisH, FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';
import { LuDownloadCloud } from "react-icons/lu";

const Post = () => {
  return (
    <div className="flex justify-center min-h-screen mt-12 ml-[-6rem] space-x-14">
      {/* Left Section */}
      <div className="flex flex-col w-[850px]"> {/* Set the width here */}
        {/* New Post Section */}
        <div className="bg-white border h-[135px] shadow-lg p-6 my-4">
          <div className="flex items-center space-x-4">
            <p className="text-[15px] font-semibold font-gotham text-[#181818]">NEW POST</p>
          </div>
          <hr className=" w-[790px] mx-auto mt-2 bg-gray-300 mb-4" />
          <div className=" flex items-center justify-between text-gray-600">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="flex-grow mt-[-11px] p-1 rounded-md focus:outline-none"
            />
            <div className="flex space-x-4 mt-2">
              <GrAttachment className="text-xl h-10" />
              <CiImageOn className="text-xl h-10" />
              <CiVideoOn className="text-xl h-10" />
              <div className="flex items-center justify-center w-10 h-10 bg-[#E188C1] rounded-lg">
                <BsFillSendFill className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sort By Section */}
        <div className="flex justify-center items-center my-4">
          <p>
            SORT BY <span className="font-semibold text-[#A45286]">Trending</span>
          </p>
        </div>

        {/* Post Section */}
        {[1, 2].map((_, index) => (
          <div key={index} className="bg-white h-[532px] shadow-lg my-4">
            <div className="flex justify-between items-center p-4 ">
              <p className="text-xs">
                <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
                <span className="text-[#A45286]"> Cody Hawkins</span> liked this
              </p>
              <FaEllipsisH className="text-gray-700 hover:text-primary text-[20px]" />
            </div>
            <hr className=" w-[850px] bg-gray-300 mb-4" />

            <div className="flex items-center mt-6 space-x-4 px-8">
              <Image
                src="/profile.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold">Adity Kumar</h1>
                <span>Illustration Designer</span>
              </div>
            </div>

            <div className="mt-1 text-gray-600 ">
              <p className='px-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat aperiam odio sapiente voluptates est...</p>
              <div className="mt-3">
                <Image
                  src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                  alt="Post Image"
                  width={850}
                  height={240}
                  className="object-cover mx-auto w-[790px] h-[300px]"
                />
              </div>
            </div>

            <div className="flex justify-between items-center px-9 mt-4">
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
        ))}

        <div className="bg-white h-[402px] shadow-lg my-4">
          <div className="flex justify-between items-center p-4 ">
            <p className="text-xs">
              <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
              <span className="text-[#A45286]"> Cody Hawkins</span> liked this
            </p>
            <FaEllipsisH className="text-gray-700 hover:text-primary text-[20px]" />
          </div>
          <hr className=" w-[850px] bg-gray-300 mb-1" />
          <div className="flex items-center mt-4 px-8 space-x-4">
            <Image
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-semibold">Adity Kumar</h1>
              <span>Illustration Designer</span>
            </div>
          </div>
          <div className=" text-gray-600 px-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat aperiam odio sapiente voluptates est...</p>
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
        <div className="bg-white w-[290px] h-[280px] text-center shadow-lg mb-3">
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
          <div className="mt-2 font-bold">Befog website</div>
          <p className="text-gray-600 px-7 h-[45px] ">Description Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Write an Article */}
        <div className="flex justify-center  shadow-lg w-[290px] h-[75px] mb-3">
          <button
            className="rounded-md px-4 w-[269px] my-auto  h-[32px] font-bold text-white shadow-lg"
            style={{ background: 'linear-gradient(0deg, #A45286 0%, #DC85BC 100%)' }}
          >
            Write an article
          </button>
        </div>

        {/* My Groups Section */}
        <div className="bg-white h-[400px] shadow-lg mb-3">
          <p className="font-bold px-5 pt-4 pb-2 ">My Groups</p>
          <hr className="border-t border-gray-300 mt-2 " />
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex w-[231px] h-[80px] shadow-lg mx-auto my-auto mt-4 items-center p-3 space-y-4 space-x-3">
              <Image
                src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                alt="Group"
                width={48}
                height={48}
                className="rounded-full w-[48px] h-[48px]"
              />
              <div className=" ">

              <p className="font-medium  ">Fashion Designing </p>
              <p>University, Lucknow</p>
              </div>
            </div>
          ))}
        </div>

        {/* Followed Hashtags Section */}
        <div className="bg-white h-[265px] p-4 shadow-lg mb-3">
          <p className="font-semibold">Followed Hashtags</p>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="flex flex-wrap items-center w-[259px] mt-4 space-x-3">
            <p className="bg-[#FFE3EF] font-semibold rounded-md">#Fashion</p>
            <p className="bg-[#FFE3EF] font-semibold rounded-lg ">#Fashion</p>
          
          </div>
        </div>

         {/* Trending Articles Section */}
         <div className="bg-white h-[300px] p-4 shadow-lg">
          <p className="font-bold">Trending Articles</p>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="w-[227px] h-[198px] mt-2 flex-wrap ">

          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center space-y-10 space-x-3">
              <img
                src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                alt="Trending Article"
                className="w-[80px] h-[52px]"
              />
              <div className=" flex  flex-col ">
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
