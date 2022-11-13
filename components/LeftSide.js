import React from "react";
import Image from "next/image";
import Twitter from "../assets/twitter.png";
import { RiHome7Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { HiCheckBadge } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

import Tweet from "../assets/tweet.svg";
import Profile from "../assets/dona.jpg";

const LeftSide = () => {
  return (
    <div>
      <div className="fixed w-20 pt-8 border-r h-screen flex flex-col items-center justify-between lg:w-60 lg:pl-8 lg:items-start md:w-40 md:items-end md:pr-6">
        <div className="">
          <ul className="w-full space-y-6 flex flex-col items-center justify-center lg:items-start lg:space-y-8">
            <li>
              <div className="h-8 w-8 lg:h-10 lg:w-10">
                <Image src={Twitter} />
              </div>
            </li>
            <li>
              <div className="lg:flex">
                <div>
                  <RiHome7Fill className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-bold">Home</p>
                </div>
              </div>
            </li>
            <li>
              <div className="lg:flex">
                <div>
                  <BsSearch className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light">Search</p>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:flex">
                <div>
                  <RiNotification3Line className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light">Notification</p>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:flex">
                <div>
                  <HiOutlineMail className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light ">Messages</p>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:flex">
                <div>
                  <BiBookmark className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light ">Bookmarks</p>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:flex">
                <div>
                  <RiFileList3Line className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light ">List</p>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:flex">
                <div>
                  <HiOutlineUser className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light ">Profile</p>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:flex">
                <div>
                  <AiOutlineMessage className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                <div className="hidden lg:flex">
                  <p className="pl-4 text-[20px] font-light ">More</p>
                </div>
              </div>
            </li>

            <li>
              <div className="h-11 w-11 bg-[#17b2f0] p-2 rounded-full lg:hidden">
                <Image src={Tweet} />
              </div>
              <div className="bg-[#17b2f0] w-[190px] py-3 font-bold text-white text-center rounded-3xl hidden lg:block">
                Tweet
              </div>
            </li>
          </ul>
        </div>
        <div className="pb-8 lg:flex lg:items-center lg:justify-between lg:w-full">
          <div className="lg:flex lg:items-center lg:space-x-3 shrink-0">
            <div className="">
              <Image
                src={Profile}
                className="rounded-full object-cover w-12 h-12 "
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="font-bold flex items-center gap-3">
                Thy Madona{" "}
                <span>
                  <AiFillCheckCircle className="text-sky-400 w-4 h-4" />
                </span>
              </h1>
              <p className="text-gray-500">@thymadonakh</p>
            </div>
          </div>
          <div className="hidden ">
            <BsThreeDots className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
