import React from "react";
import Input from "./Input";
import Navbar from "./Navbar";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="w-screen h-screen mb-12 max-w-[40rem] lg:min-w-[40rem]  border-r ml-20 md:ml-40 lg:ml-60">
      {/* Navbar */}
      <Navbar />
      {/* Input */}
      <div className="mt-14">
        <Input />
      </div>
      {/* Post */}
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
