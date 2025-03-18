import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ButtomBar from "../ButtomBar/ButtomBar";
import CreditPage from "../Credit/CreditPage";
import FooterPage from "../Footer/FooterPage";
function DefinPage() {
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
        <div className=" lg:flex lg:justify-between lg:p-0 md:p-0 p-[20px] md:flex md:justify-between ">
          <div className=" lg:w-[39%] md:w-[39%] w-full lg:h-full md:h-full lg:border-r-2 md:border-r-2 lg:rounded md:rounded lg:py-[15px] md:py-[15px] lg:overflow-hidden md:overflow-hidden overflow-scroll overflow-y-scroll h-40">
            <h1 className=" capitalize font-serif font-semibold lg:text-center md:text-center lg:text-2xl md:text-2xl my-3 lg:my-0 md:my-0">
              content page
            </h1>
            {/* Introduction of HTML */}
            <div className="pl-5 my-5">
              <div className="pl-2">
                <Link
                  to="/introduction"
                  className="uppercase text-xl font-serif hover:underline hover:text-blue-800"
                >
                  1. Introduction to HTML5
                </Link>
                <div className="pl-4">
                  <Link
                    to="/internet"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.1 What is the Internet?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/website"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.2 What is the website?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/hosting"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.3 What is the hosting?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/domain"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.4 What is the domain?
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/htmls"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.5 What is the HTML?
                  </Link>
                </div>
              </div>
            </div>

            <div className=" pl-5 my-5">
              <div className=" mx-2">
                <Link
                  to="/listHtml"
                  className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
                >
                  2. list html
                </Link>
              </div>
              <div className=" mx-2 pl-4 ">
                <Link
                  to="/listHtml"
                  className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
                >
                  2.1 What is the list?
                </Link>
              </div>
              <div className=" mx-2 pl-4">
                <Link
                  to="/unlist"
                  className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
                >
                  2.2 What is the orderList?
                </Link>
              </div>
              <div className=" mx-2 pl-4">
                <Link
                  to="/unlist"
                  className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
                >
                  2.3 What is the undorderList?
                </Link>
              </div>
              <div className=" mx-2 pl-4">
                <Link
                  to="/dlist"
                  className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
                >
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
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px]">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ដូចម្ដេចដែលហៅថា Definition List?
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              Definition List គឺជាប្រភេទ List ដែលបង្ហាញទិន្នន័យមានលក្ខណះ ជា
              Block មានន័យថាការបង្ហាញមកមានលក្ខណះជា Definition Title និង
              definition description។
            </p>

            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="dlist.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:my-14 md:my-14">
          <div className=" p-[15px]">
            <p className=" pl-12 hanuman text-2xl font-bold my-3">
              ឧទាហរណ៍ទី1:
            </p>
            <img
              className=" w-full h-full object-cover rounded"
              src="d1.png"
              alt="404"
            />
            <p className=" pl-12 hanuman text-2xl font-bold my-3 text-rose-700">
              លទ្ធផល:
            </p>
            <img
              className=" w-[50%] h-full object-cover rounded pl-[50px]"
              src="d1.1.png"
              alt="404"
            />
          </div>
          <div className=" p-[15px]">
            <p className=" pl-12 hanuman text-2xl font-bold my-3">
              ឧទាហរណ៍ទី2:
            </p>
            <img
              className=" w-full h-full object-cover rounded"
              src="d2.png"
              alt="404"
            />
            <p className=" pl-12 hanuman text-2xl font-bold my-3 text-rose-700">
              លទ្ធផល:
            </p>
            <img
              className=" w-[50%] h-full object-cover rounded pl-[50px]"
              src="d2.2.png"
              alt="404"
            />
          </div>
          <div className=" p-[15px]">
            <p className=" pl-12 hanuman text-2xl font-bold my-3">
              ឧទាហរណ៍ទី3:
            </p>
            <img
              className=" w-full h-full object-cover rounded"
              src="d3.png"
              alt="404"
            />
            <p className=" pl-12 hanuman text-2xl font-bold my-3 text-rose-700">
              លទ្ធផល:
            </p>
            <img
              className=" w-[50%] h-full object-cover rounded pl-[50px]"
              src="d3.3.png"
              alt="404"
            />
          </div>
        </div>
      </div>
      <ButtomBar />
      <CreditPage />
      <FooterPage />
    </>
  );
}

export default DefinPage;
