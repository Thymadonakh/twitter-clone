import React from "react";
import { WiStars } from "react-icons/wi";

const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center w-[calc(100vw-6rem)] max-w-[40rem] md:w-[40rem] p-4 bg-opacity-90 bg-white h-14 border-r">
      <p className="font-bold text-xl">Home</p>
      <WiStars className="w-8 h-8" />
    </div>
  );
};

export default Navbar;
