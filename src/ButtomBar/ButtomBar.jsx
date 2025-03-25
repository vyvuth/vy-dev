import React from "react";
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <div className=" fixed bottom-0 left-0 z-50 p-5 w-full lg:hidden md:hidden bg-rose-700 bg-opacity-100 flex justify-evenly ">
      <div className=" text-green-700">
        <Link to="/">
          <FaHome className=" text-2xl mx-2" />
          <p className=" uppercase font-serif text-sm font-semibold">home</p>
        </Link>
      </div>
      <div className=" text-green-700">
        <Link to="/content">
          <RiFileList2Fill className=" text-2xl mx-7" />
          <p className=" uppercase font-serif text-sm font-semibold">content</p>
        </Link>
      </div>
    </div>
  );
}

export default BottomBar;
