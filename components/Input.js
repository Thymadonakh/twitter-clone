import React from "react";
import Image from "next/image";
import Profile from "../assets/dona.jpg";
import { BsImage } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { FiMapPin } from "react-icons/fi";
import { BiPoll } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";

const Input = () => {
  return (
    <div className="border-r ">
      <div className="flex items-center p-4 pt-4 ">
        <div className="">
          <Image
            src={Profile}
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div className="pl-4">
          <input
            type="text"
            placeholder="What's happening?"
            className="outline-0 text-lg md:text-xl lg:2xl"
          />
        </div>
      </div>
      <div className="flex items-center  pl-20 justify-between pr-4 pb-4 border-b">
        <ul className="flex space-x-4">
          <li>
            <div className="">
              <BsImage className="text-sky-400 w-5 h-5" />
            </div>
          </li>
          <li>
            <div className="">
              <AiOutlineFileGif className="text-sky-400 w-5 h-5" />
            </div>
          </li>
          <li className="hidden md:block">
            <div className="">
              <BiPoll className="text-sky-400 w-5 h-5" />
            </div>
          </li>
          <li>
            <div className="">
              <VscSmiley className="text-sky-400 w-5 h-5" />
            </div>
          </li>
          <li className="hidden md:block">
            <div className="">
              <TbCalendarTime className="text-sky-400 w-5 h-5" />
            </div>
          </li>
          <li>
            <div className="">
              <FiMapPin className="text-sky-400 w-5 h-5" />
            </div>
          </li>
        </ul>
        <div className="">
          <button className="bg-sky-400 hover:bg-sky-600 text-white font-semibold p-1 px-4 rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
