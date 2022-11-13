import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Profile from "../assets/dona.jpg";
import Reactjs from "../assets/react.png";
import Vuejs from "../assets/vuejs.jpg";

const RightSide = () => {
  return (
    <div className="w-[25%] hidden lg:block ">
      <div className="w-[90%] min-w-[18rem] mx-auto ml-6">
        {/* Search Box */}
        <div className=" flex bg-gray-200 p-2 rounded-3xl items-center space-x-4 mt-3">
          <BsSearch className="ml-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="text-md outline-none bg-transparent placeholder-gray-600"
          />
        </div>
        <div className="pt-4 p-6 bg-gray-100 my-4 rounded-3xl">
          <div className="">
            <h1 className="font-bold text-xl">Trending for you</h1>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politics <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">China</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Economics <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">USA</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politics <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">Cambodia</p>
              <p className="text-gray-600 text-sm">100k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politic <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">China</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politic <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">China</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politic <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">China</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politic <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">China</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* Trending Topics */}
          <div className="flex justify-between items-center my-6">
            <div className="">
              <p className="text-gray-600 text-sm">
                Politic <span>&#8226; </span>Trending
              </p>
              <p className="font-bold text-xl">China</p>
              <p className="text-gray-600 text-sm">200k tweets</p>
            </div>
            <div className="">
              <BsThreeDots />
            </div>
          </div>
          {/* See More */}
          <div className="flex justify-between items-center">
            <p className="text-sky-500 ">See more</p>
          </div>
        </div>
        {/* Who to follow */}
        <div className="bg-gray-100 rounded-2xl flex flex-col p-6">
          <h2 className="font-bold text-xl ">Who to follow</h2>
          {/* profile */}
          <div className="lg:flex lg:items-center lg:justify-between lg:w-full my-6">
            <div className="lg:flex lg:items-center lg:space-x-3 shrink-0">
              <div className="">
                <Image
                  src={Reactjs}
                  className="rounded-full object-cover w-10 h-10 "
                />
              </div>
              <div className="hidden lg:block">
                <h1 className="font-bold flex items-center gap-3 text-sm">
                  React
                </h1>
                <p className="text-gray-500 text-sm">@reactjs</p>
              </div>
            </div>
            <div className="">
              <p className="bg-black text-white font-bold p-1 rounded-2xl px-4 hover:bg-slate-900 cursor-pointer">
                Follow
              </p>
            </div>
          </div>
          {/* profile */}
          <div className="lg:flex lg:items-center lg:justify-between lg:w-full my-6">
            <div className="lg:flex lg:items-center lg:space-x-3 shrink-0">
              <div className="">
                <Image
                  src={Vuejs}
                  className="rounded-full object-cover w-10 h-10 "
                />
              </div>
              <div className="hidden lg:block">
                <h1 className="font-bold flex items-center gap-3 text-sm">
                  Vue.js
                </h1>
                <p className="text-gray-500 text-sm">@vuejs</p>
              </div>
            </div>
            <div className="">
              <p className="bg-black text-white font-bold p-1 rounded-2xl px-4 hover:bg-slate-900 cursor-pointer">
                Follow
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sky-500 ">See more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
