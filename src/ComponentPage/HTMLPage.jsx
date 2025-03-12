import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtomBar from "../ButtomBar/ButtomBar";
import FooterPage from "../Footer/FooterPage";
function HTMLPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" overflow-hidden">
        <nav className="lg:block hidden lg:mt-6 md:block  ">
          <ul
            className="lg:flex lg:justify-center lg:space-x-20 lg:my-4 lg:text-xl font-bold md:flex md:justify-center md:space-x-20 md:my-10
        md:text-2xl "
          >
            <Link
              to="/"
              className="hover:text-red-500 hover:underline transition-all duration-200 animate-pulse"
            >
              Home
            </Link>
            <Link
              to="/content"
              className="hover:text-green-700 hover:underline transition-all duration-200 animate-pulse"
            >
              About Content
            </Link>
            <Link
              to="us"
              className="hover:text-blue-700 hover:underline transition-all duration-200 animate-pulse"
            >
              Contact Us
            </Link>
          </ul>
        </nav>
        <div className="w-full h-full p-[20px] flex justify-between">
          <div className=" w-[39%] h-[100%] border rounded py-[15px]">
            <h1 className=" capitalize font-serif font-semibold text-center text-2xl">
              content page
            </h1>
            {/* Introduction of HTML */}
            <div className="pl-5 my-5">
              <div className="pl-2">
                <Link className="uppercase text-xl font-serif hover:underline hover:text-blue-800">
                  1. Introduction to HTML5
                </Link>
                <div className="pl-4">
                  <Link className="capitalize text-xl font-serif hover:underline hover:text-blue-800">
                    1.1 What is the Internet?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link className="capitalize text-xl font-serif hover:underline hover:text-blue-800">
                    1.2 What is the website?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link className="capitalize text-xl font-serif hover:underline hover:text-blue-800">
                    1.3 What is the hosting?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link className="capitalize text-xl font-serif hover:underline hover:text-blue-800">
                    1.4 What is the domain?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link className="capitalize text-xl font-serif hover:underline hover:text-blue-800">
                    1.5 What is the HTML?
                  </Link>
                </div>
              </div>
            </div>

            <div className=" pl-5 my-5">
              <div className=" mx-2">
                <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
                  2. list html
                </Link>
              </div>
              <div className=" mx-2 pl-4 ">
                <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
                  2.1 What is the list?
                </Link>
              </div>
              <div className=" mx-2 pl-4">
                <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
                  2.2 What is the orderList?
                </Link>
              </div>
              <div className=" mx-2 pl-4">
                <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
                  2.3 What is te underorderList?
                </Link>
              </div>
              <div className=" mx-2 pl-4">
                <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
                  2.4 What is te definition List?
                </Link>
              </div>
            </div>
            <div className=" mx-2  my-2">
              <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
                3. exercises
              </Link>
            </div>
          </div>
          <div className=" w-[59%] h-auto bg-black p-[15px]"></div>
        </div>
      </div>
      <ButtomBar />
      <FooterPage />
    </>
  );
}

export default HTMLPage;
