import React from "react";
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";

function BottomBar() {
  return (
    <div className=" fixed bottom-0 left-0 z-50 p-5 w-full lg:hidden md:hidden bg-rose-700 bg-opacity-40 flex justify-between ">
      <div className=" text-green-700">
        <FaHome className=" text-2xl mx-2" />
        <p className=" uppercase font-serif text-sm font-semibold">home</p>
      </div>
      <div className=" text-green-700">
        <RiFileList2Fill className=" text-2xl mx-7" />
        <p className=" uppercase font-serif text-sm font-semibold">content</p>
      </div>
      <div className=" text-green-700">
        <MdContactPage className=" text-2xl mx-6" />
        <p className=" uppercase font-serif text-sm font-semibold">contect</p>
      </div>
    </div>
  );
}

export default BottomBar;
