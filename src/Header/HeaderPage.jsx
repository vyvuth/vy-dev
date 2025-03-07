import React from "react";
import { FaSearch } from "react-icons/fa";

function HeaderPage() {
  return (
    <>
      <div>
        <nav className=" mt-[25px]">
          <ul className=" flex justify-center space-x-[5rem] my-[15px] text-xl font-bold">
            <li className="hover:text-red-500 hover:underline hover:text-2xl duration-150 transition-all animate-spin">
              Home
            </li>
            <li className="hover:text-green-700 hover:underline hover:text-2xl duration-150 transition-all animate-spin">
              About Content
            </li>
            <li className="hover:text-blue-700 hover:underline hover:text-2xl duration-150 transition-all animate-spin">
              Contect us
            </li>
          </ul>
        </nav>
        <div
          className="  flex justify-center p-[15px] 
        my-[25px]"
        >
          <div className=" w-[49%] h-[50%">
            <h1 className=" text-xl mt-[30px] uppercase font-serif font-medium text-center p-[10px]">
              learn code in khmer language with vy
            </h1>
            <h3 className=" text-xl text-center font-serif text-cyan-500 animate-bounce">
              With the world's largest web developer site.
            </h3>
            <div className=" flex justify-center my-[10%]">
              <input
                type="text"
                id="input"
                placeholder="Enter your name..."
                className="w-50 px-4 py-2 border rounded-l focus:outline-none"
              />
              <button className=" bg-green-700 w-[50px] p-[15px] text-white  hover:text-gray-700 transition-colors ">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
            <h3 className=" capitalize text-rose-700 text-2xl text-center hover:text-orange-500 hover:underline duration-200 animate-ping">
              notsure where to begin?
            </h3>
          </div>
          <div className=" w-[49%] h-[50%]">
            <div className=" w-full my-[8%]">
              <img
                className="w-[1000px] h-[420px] object-cover rounded animate-bounce "
                src="vy.jpg"
                alt="404"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPage;
