import React from "react";
import { FaSearch } from "react-icons/fa";
import "animate.css";

function HeaderPage() {
  return (
    <div className="animate__animated animate__fadeInTopLeft">
      <nav className="mt-6 ">
        <ul className="flex justify-center space-x-20 my-4 text-xl font-bold">
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
      <div className="flex justify-center p-4 my-6 mt-32">
        <div className="w-1/2">
          <h1 className="text-xl mt-8 uppercase font-serif font-medium text-center p-4">
            Learn Code in Khmer Language with Vy
          </h1>
          <h3 className="text-xl text-center font-serif text-cyan-500 animate-bounce">
            With the world's largest web developer site.
          </h3>
          <div className="flex justify-center my-10 animate-pulse">
            <input
              type="text"
              id="input"
              placeholder="Enter your searching..."
              className="px-4 py-2 border rounded-l focus:outline-none"
            />
            <button className="bg-green-700 px-4 py-2 text-white hover:text-gray-700 transition-colors">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
          <h3 className="capitalize text-rose-700 text-2xl text-center hover:text-orange-500 hover:underline duration-200">
            Not sure where to begin?
          </h3>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            className="w-[500px] h-[300px] object-cover rounded animate-pulse"
            src="vy.jpg"
            alt="Coding Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
