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

  const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga, enim sunt nobis, iste quidem nam mollitia placeat optio sapiente, quam explicabo distinctio reprehenderit excepturi aliquam! Rem at cum neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, odio eget luctus sodales, turpis ligula volutpat urna, nec efficitur dolor libero non erat. Aenean sit amet quam facilisis, commodo nisi ut, convallis erat.
  `;

  // Determine the trimmed text version (visible in collapsed state)
  const trimmedText = text.substring(0, 250); // Show first 180 characters

  return (
    <div className="flex justify-center min-h-screen mt-12 space-x-14">
      {/* Left Section */}
      <div className="flex flex-col mb-8 w-[850px]"> {/* Set the width here */}
        {/* New Post Section */}
        <div className="bg-white h-[135px] p-5 my-4">
          <div className="flex items-center space-x-4">
            <p className="text-[12px] pl-3 font-semibold font-[Gotham] text-[#181818] uppercase">NEW POST</p>
          </div>
          <hr className=" w-[790px] h-[1px] mx-auto mt-4 bg-[#D7D7D7] mb-4" />
          <div className="flex items-center px-2 justify-between text-[18px]">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="flex-grow mt-[-11px] p-1 text-[18px] rounded-md focus:outline-none placeholder:text-[#18181833] placeholder:text-[18px]"
            />
            <div className="flex space-x-4 items-center">
              {/* Link */}
              <Image width={100} height={100} src='/assets/feedPage/link.png' className='w-[24px] h-[24px]' alt='link' />
              {/* Image */}
              <Image width={100} height={100} src='/assets/feedPage/image.png' className='w-[24px] h-[24px]' alt='image' />
              {/* Video */}
              <Image width={100} height={100} src='/assets/feedPage/video.png' className='w-[24px] h-[24px]' alt='video' />
              <div className="flex items-center  justify-center w-[32px] h-[32px] bg-[#bb679c] rounded-lg">
                <BsFillSendFill className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sort By Section */}
        <div className="flex justify-center items-center my-4 space-x-4">
          <hr className="flex-grow border-gray-300" />
          <p className="text-center text-[12px] font-[Gotham] font-[600] uppercase">
            SORT BY: <span className="font-semibold text-[#A45286]">Trending</span>
          </p>
          <hr className="flex-grow border-gray-300" />
        </div>


        {/* Post Text Section */}
        <div className="bg-white w-[850px] h-auto my-4">
          {/* Header Post */}
          <div className="flex justify-between items-center px-4 py-2">
            <p className="text-[10px] font-[Gotham] leading-[15px]">
              <span className="text-[#A45286]">Ted Bell, Annette Nguyen</span> and
              <span className="text-[#A45286]"> Cody Hawkins</span> liked this
            </p>

            {/* Share Pointers */}
            <FaEllipsisH className="text-[#181818] cursor-pointer hover:text-primary w-[20px] h-[24px]" />
          </div>

          {/* Border Top of Post */}
          <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3"></div>

          {/* User Info */}
          <div className="flex items-center mt-3 space-x-4 px-8">
            <Image
              src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full w-[52px] h-[52px]"
              onError={() => setSrc("/Images/Images1.png")}
            />
            <div className='flex flex-col'>
              <h1 className="text-[14px] font-[Arial] font-[700]">Aditya Kumar</h1>
              <span className="text-[10px] font-[Arial] font-[400]">Illustration Designer</span>
            </div>
          </div>

          {/* Desciption Post */}
          <div className="mt-1 text-gray-600 relative">
            <div className="relative">
              <div
                className={`px-8 mt-4 text-[14px] transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-[100px]'
                  }`}
              >
                {/* Show full or trimmed content based on the expanded state */}
                {expanded ? text : trimmedText + '...'}
              </div>

              <button
                className="px-8 my-2 mt-4 text-[#A45286] text-[12px] font-[Gotham] font-semibold uppercase cursor-pointer transition-all duration-300"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Border Bottom of Post */}
          <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-1 mb-3"></div>

          {/* Stats Post */}
          <div className="flex justify-between items-center px-9 mb-4 mt-4">
            {/* Stats */}
            <div className="relative flex gap-[4rem]"> {/* Increased spacing */}
              {/* Likes */}
              <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                <Image
                  height={100}
                  width={100}
                  alt='like'
                  src='/assets/feedPage/like.png'
                  className='w-[13.12px] h-[13.12px]'
                />
                <span className="text-[14px] font-semibold font-[Gotham]">28</span>
              </div>
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[4.4rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
              {/* Comments */}
              <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                <Image
                  height={100}
                  width={100}
                  alt='like'
                  src='/assets/feedPage/comment.png'
                  className='w-[13.12px] h-[13.12px]'
                />
                <span className="text-[14px] font-semibold font-[Gotham]">79</span>
              </div>
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[11rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
            </div>
            {/* Share Btn */}
            <div className="relative flex items-center space-x-2">
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[-1.5rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
              <FaShareAlt className="text-primary text-[20px]" />
              <span className="text-[14px] font-semibold font-[Gotham]">SHARE</span>
            </div>
          </div>
        </div>

        {/* Post Text Section with Photo */}
        <div className="bg-white w-[850px] h-auto my-4">
          {/* Header Post */}
          <div className="flex justify-between items-center px-4 py-2">
            <p className="text-[10px] font-[Gotham] leading-[15px]">
              <span className="text-[#A45286]">Audrey Alexander </span>
              comment this
            </p>

            {/* Share Pointers */}
            <FaEllipsisH className="text-[#181818] cursor-pointer hover:text-primary w-[20px] h-[24px]" />
          </div>

          {/* Border Top of Post */}
          <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3"></div>

          {/* User Info */}
          <div className="flex items-center mt-3 space-x-4 px-8">
            <Image
              src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full w-[52px] h-[52px]"
              onError={() => setSrc("/Images/Images1.png")}
            />
            <div className='flex flex-col'>
              <h1 className="text-[14px] font-[Arial] font-[700]">Aditya Kumar</h1>
              <span className="text-[10px] font-[Arial] font-[400]">Illustration Designer</span>
            </div>
          </div>

          {/* Desciption Post */}
          <div className="mt-1 text-gray-600 relative">
            <div className="relative">
              <div
                className={`px-8 mt-4 text-[14px] transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-[100px]'
                  }`}
              >
                {/* Show full or trimmed content based on the expanded state */}
                {expanded ? text : trimmedText + '...'}
              </div>

              <button
                className="px-8 my-2 mt-4 text-[#A45286] text-[12px] font-[Gotham] font-semibold uppercase cursor-pointer transition-all duration-300"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="mt-3">
            <Image
              src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
              alt="Post Image"
              width={790}
              height={300}
              className="object-cover mx-auto w-[790px] mb-6 h-[300px]"
            />
          </div>

          {/* Border Bottom of Post */}
          <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-1 mb-3"></div>

          {/* Stats Post */}
          <div className="flex justify-between items-center px-9 mb-4 mt-4">
            {/* Stats */}
            <div className="relative flex gap-[4rem]"> {/* Increased spacing */}
              {/* Likes */}
              <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                <Image
                  height={100}
                  width={100}
                  alt='like'
                  src='/assets/feedPage/like.png'
                  className='w-[13.12px] h-[13.12px]'
                />
                <span className="text-[14px] font-semibold font-[Gotham]">28</span>
              </div>
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[4.4rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
              {/* Comments */}
              <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                <Image
                  height={100}
                  width={100}
                  alt='like'
                  src='/assets/feedPage/comment.png'
                  className='w-[13.12px] h-[13.12px]'
                />
                <span className="text-[14px] font-semibold font-[Gotham]">79</span>
              </div>
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[11rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
            </div>
            {/* Share Btn */}
            <div className="relative flex items-center space-x-2">
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[-1.5rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
              <FaShareAlt className="text-primary text-[20px]" />
              <span className="text-[14px] font-semibold font-[Gotham]">SHARE</span>
            </div>
          </div>
        </div>

        {/* Post Text Section with Content */}
        <div className="bg-white h-[402px] my-4">
          <div className="flex justify-between items-center px-4 py-2">
            <p className="leading-[15px] text-[10px] font-[Gotham] text-[#181818]">
              High rated post from your feed
            </p>
            {/* Share Pointers */}
            <FaEllipsisH className="text-[#181818] hover:text-primary cursor-pointer w-[20px] h-[24px]" />
          </div>

          {/* Border Top of Post */}
          <div className="w-[850px] h-[1px] bg-[#F4F4F4] mb-3"></div>

          {/* User Info */}
          <div className="flex items-center mt-3 space-x-4 px-8">
            <Image
              src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full w-[52px] h-[52px]"
              onError={() => setSrc("/Images/Images1.png")}
            />
            <div className='flex flex-col'>
              <h1 className="text-[14px] font-[Arial] font-[700]">Aditya Kumar</h1>
              <span className="text-[10px] font-[Arial] font-[400]">Illustration Designer</span>
            </div>
          </div>

          <div className=" text-gray-600 mt-4 px-8">
            <p className='text-[14px] font-[400] leading-[21px] font-[Arial]'>There is some new guidelines for Fashion Designers</p>
            <div className="mt-3 space-y-4">
              <div className="w-[790px] h-[80px] bg-[#FFE3EF] flex items-center p-[1.3rem] rounded-lg">
                {/* Documnet Image */}
                <Image
                  width={100}
                  height={100}
                  src="/assets/feedPage/document.png"
                  alt="Circular"
                  className="w-[42px] h-[42px] rounded-full object-cover position-center"
                />

                {/* Text */}
                <div className=" space-y-3 px-[0.5rem]">
                  <p className="ml-4 text-base text-[14px] font-[Arial] font-[400] text-[#181818]">Fashion guidelines for Illustration designers</p>
                  <span className="pl-4 text-[#181818] text-[10px] leading-[15px] font-[Gotham]">PDF file, 324 kb</span>
                </div>

                {/* Icon in the Right */}
                <div className="ml-auto  mr-[1rem]">
                  <Image
                    width={100}
                    height={100}
                    src='/assets/feedPage/download.png'
                    className='w-[24px] h-[24px]'
                    alt="download" />
                </div>
              </div>
              <div className="w-[790px] h-[80px] bg-[#FFE3EF] flex items-center p-[1.3rem] rounded-lg">
                {/* Documnet Image */}
                <Image
                  width={100}
                  height={100}
                  src="/assets/feedPage/document.png"
                  alt="Circular"
                  className="w-[42px] h-[42px] rounded-full object-cover position-center"
                />

                {/* Text */}
                <div className=" space-y-3 px-[0.5rem]">
                  <p className="ml-4 text-base text-[14px] font-[Arial] font-[400] text-[#181818]">fashion guidelines for Graphic Designer </p>
                  <span className="pl-4 text-[#181818] text-[10px] leading-[15px] font-[Gotham]">PDF file, 245 kb</span>
                </div>

                {/* Icon in the Right */}
                <div className="ml-auto  mr-[1rem]">
                  <Image
                    width={100}
                    height={100}
                    src='/assets/feedPage/download.png'
                    className='w-[24px] h-[24px]'
                    alt="download" />
                </div>
              </div>
            </div>
          </div>

          {/* Border Bottom of Post */}
          <div className="w-[850px] h-[1px] bg-[#F4F4F4] mt-4 mb-3"></div>

          {/* Stats Post */}
          <div className="flex justify-between items-center px-9 mb-4 mt-4">
            {/* Stats */}
            <div className="relative flex gap-[4rem]"> {/* Increased spacing */}
              {/* Likes */}
              <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                <Image
                  height={100}
                  width={100}
                  alt='like'
                  src='/assets/feedPage/like.png'
                  className='w-[13.12px] h-[13.12px]'
                />
                <span className="text-[14px] font-semibold font-[Gotham]">28</span>
              </div>
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[4.4rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
              {/* Comments */}
              <div className="flex items-center space-x-2"> {/* Adjusted icon-text spacing */}
                <Image
                  height={100}
                  width={100}
                  alt='like'
                  src='/assets/feedPage/comment.png'
                  className='w-[13.12px] h-[13.12px]'
                />
                <span className="text-[14px] font-semibold font-[Gotham]">79</span>
              </div>
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[11rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
            </div>
            {/* Share Btn */}
            <div className="relative flex items-center space-x-2">
              {/* Stats Border */}
              <div className="absolute w-[1px] left-[-1.5rem] bottom-[-16px] h-[54px] bg-[#F4F4F4]"></div>
              <FaShareAlt className="text-primary text-[20px]" />
              <span className="text-[14px] font-semibold font-[Gotham]">SHARE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-5 w-[290px]">
        {/* Profile Section */}
        <div className="bg-white w-[290px] h-[280px] text-center mb-3">
          <Image
            src="/assets/feedPage/cover.png"
            alt="Cover"
            width={290}
            height={120}
            className="object-cover mb-4 w-[290px] h-[120px]"
          />
          <div className="relative w-[100px] h-[100px] mx-auto">
            <Image
              src="/assets/feedPage/profile.png"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 w-[100px] h-[100px] border-white object-cover -mt-16"
            />
          </div>
          <div className="mt-1 mb-2 text-[14px] font-[700] font-[Arial]">Aditya Kumar Kanaujiya</div>
          <p className="text-[#181818] text-[12px] px-7 h-[45px] text-center font-[400] font-[Arial] leading-[18px]">
            Freelance Fashion designer, 80+ projects in graphic design, textile design and creative projects. Open to offers.
          </p>
        </div>

        {/* Write an Article */}
        <div className="bg-white w-[290px] h-[75px] text-center mb-3">
          <div className="flex justify-center w-[290px] h-[75px] mb-3">
            <button
              className="rounded-md px-4 w-[269px] my-auto text-[12px] h-[32px] font-[700] font-[Arial] leading-[13.8px] text-white uppercase"
              style={{ background: 'linear-gradient(0deg, #A45286 0%, #DC85BC 100%)' }}
            >
              Write new article
            </button>
          </div>
        </div>

        {/* My Groups Section */}
        <div className="bg-white h-[400px] flex flex-col justify-start items-center mb-3">
          <div className='flex justify-between'>
            <div className="font-[600] px-8 pt-4 text-[12px] pb-2 uppercase font-[Gotham] text-[#181818] leading-[11.48px]">My Groups</div>
            <div className="font-[600] px-8 pt-4 text-[12px] pb-2 uppercase font-[Gotham] text-[#A45286] leading-[13.8px]">Edit list</div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#F4F4F4] w-[230px] mx-auto mt-2" />
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex w-[231px] h-[80px] mt-4 items-center justify-center p-3 gap-[0.5rem]">
              <Image
                src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                alt="Group"
                width={100}
                height={100}
                className="rounded-full w-[52px] h-[52px]"
              />
              <div>
                <p className="font-medium text-[14px]">Fashion Designing</p>
                <p className="text-[14px]">University, Lucknow</p>
              </div>
            </div>
          ))}
        </div>

        {/* Followed Hashtags Section */}
        <div className="bg-white h-[265px] p-4 mb-3">
          <p className="font-[600] text-[12px] uppercase leading-[11.48px] font-[Gotham]">Followed hashtags</p>

          {/* Divider */}
          <hr className="border-t border-[#F4F4F4] mt-4" />

          <div className="flex flex-wrap items-center w-[240px] mt-4 gap-[0.5rem]">
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#work</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#business</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#hr</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#userinterface</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#digital</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#userexperience</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#ux</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#ui</div>
            <div className="bg-[#FFE3EF] min-w-[64px] h-[32px] flex justify-center rounded-[4px] items-center my-[0.1rem] text-[12px] px-2 font-[Gotham] leading-[18px]">#freelance</div>
          </div>
        </div>

        {/* Trending Articles Section */}
        <div className="bg-white h-[300px] p-4">
          <p className="font-[600] text-[12px] uppercase leading-[11.48px] font-[Gotham]">Trending Articles</p>

          {/* Divider */}
          <hr className="border-t border-gray-300 mt-4" />

          <div className="w-[227px] h-[198px] mt-2">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center space-x-3 my-6">
                <Image
                  src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                  alt="Trending Article"
                  width={100}
                  height={100}
                  className="w-[80px] h-[52px]"
                />
                <div className="flex flex-col">
                  <p className="font-semibold font-[Gotham] text-[14px] text-[#181818] leading-[17.5px] w-[132px]">How I make cool designs?</p>
                  <span className="font-[Gotham] text-[10px] leading-[15px]">6,340 viewers</span>
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
