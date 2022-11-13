import React from "react";
import Image from "next/image";
import { RiMessage3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Moon from "../assets/moon.jpg";
import { BsThreeDots } from "react-icons/bs";
import MoonPost from "../assets/moon-post.jpg";
import { BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdIosShare } from "react-icons/md";

const Post = () => {
  return (
    <div className="pb-8 hover:bg-gray-100 ease-in-out duration-150 rounded-md border-r">
      {/* Topic Mentioned */}
      <div className="flex">
        <div className=" w-full flex justify-between items-center pt-4 pl-12">
          <div className="flex items-center ">
            <RiMessage3Fill className="text-gray-600" />
            <p className="font-semibold text-gray-600 pl-4">Popular Images</p>
            <span className="text-gray-800 pl-2">&#8226;</span>
            <p className="font-bold text-sky-500 pl-4">See More</p>
          </div>
          <div className="flex items-center mr-4 hover:bg-gray-200 rounded-full p-1 ease-out duration-700 cursor-pointer">
            <AiOutlineClose />
          </div>
        </div>
      </div>
      {/* Post Header */}
      <div className="">
        <div className="flex pl-4 pt-3 ">
          {/* post profile */}
          <div className="w-12 h-12 flex shrink-0 ">
            <Image src={Moon} className="object-cover rounded-full" />
          </div>
          {/* post identity */}
          <div className="pl-4 w-full pr-4">
            <div className="flex justify-between ">
              <div className="flex">
                <p className="font-bold ">MOON LOVER</p>
                <p className="pl-2">@moonloverpic</p>
                <span className="text-gray-600 pl-2">&#8226;</span>
                <p className=" text-gray-400 pl-2">11h</p>
              </div>
              <div className="">
                <BsThreeDots className="hover:bg-gray-200 rounded-full p-1 ease-out duration-700 cursor-pointer w-6 h-6" />
              </div>
            </div>
            {/* captions */}
            <p>Full Moon.</p>
            {/* photos */}
            <div className="pt-2 max-w-[80%]">
              <Image className="rounded-2xl" src={MoonPost} />
            </div>
            {/* like, comments section */}
            <div className="">
              <ul className="flex justify-between px-12 pl-0 pt-4">
                <li className="flex items-center">
                  <BiComment className="lg:w-6 lg:h-6 w-4 h-4" />
                  <p className="pl-2 text-md md:text-xl">40</p>
                </li>
                <li className="flex items-center">
                  <AiOutlineRetweet className="lg:w-6 lg:h-6 w-4 h-4" />
                  <p className="pl-2 text-md md:text-xl">20</p>
                </li>
                <li className="flex items-center">
                  <FiHeart className="lg:w-6 lg:h-6 w-4 h-4" />
                  <p className="pl-2 text-md md:text-xl">1808</p>
                </li>
                <li className="flex items-center">
                  <MdIosShare className="lg:w-6 lg:h-6 w-4 h-4" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Post;
