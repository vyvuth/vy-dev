import React from "react";
import { FaSearch } from "react-icons/fa";
import "animate.css";

function HeaderPage() {
  return (
    <div className="animate__animated animate__fadeInTopLeft">
      <nav className="lg:block hidden lg:mt-6 md:block  ">
        <ul
          className="lg:flex lg:justify-center lg:space-x-20 lg:my-4 lg:text-xl font-bold md:flex md:justify-center md:space-x-20 md:my-10
        md:text-2xl "
        >
          <li className="hover:text-red-500 hover:underline transition-all duration-200 animate-pulse">
            Home
          </li>
          <li className="hover:text-green-700 hover:underline transition-all duration-200 animate-pulse">
            About Content
          </li>
          <li className="hover:text-blue-700 hover:underline transition-all duration-200 animate-pulse">
            Contact Us
          </li>
        </ul>
      </nav>
      <div className="lg:flex lg:justify-center lg:p-4 lg:my-6 lg:mt-32">
        <div className="lg:w-1/2 p-[10px]">
          <h1 className="lg:text-xl lg:mt-8 lg:uppercase lg:font-serif lg:font-medium lg:text-center lg:p-4 text-xl text-center my-3 md:text-4xl">
            Learn Code in Khmer Language with Vy
          </h1>
          <h3 className="lg:text-xl lg:text-center lg:font-serif lg:text-cyan-500 lg:animate-bounce text-center text-x md:text-2xl">
            With the world's largest web developer site.
          </h3>
          <div
            className="lg:flex lg:justify-center lg:my-10 lg:animate-pulse lg:text-xl
          flex justify-center  my-10 md:text-4xl "
          >
            <input
              type="text"
              id="input"
              placeholder="Enter your searching..."
              className="lg:px-4 lg:py-2 lg:border lg:rounded-l lg:focus:outline-none focus:outline-none border p-[5px]"
            />
            <button className="bg-green-700 px-4 py-2 text-white hover:text-gray-700 transition-colors">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
          <h3 className="capitalize text-rose-700 lg:text-2xl lg:text-center hover:text-orange-500 hover:underline duration-200 lg:block hidden">
            Not sure where to begin?
          </h3>
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-center p-[15px]">
          <img
            className="w-[500px] h-[300px] md:w-4/5 md:m-auto object-cover rounded animate-pulse"
            src="vy.jpg"
            alt="Coding Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
