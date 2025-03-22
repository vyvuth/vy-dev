import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ButtomBar from "../ButtomBar/ButtomBar";
import CreditPage from "../Credit/CreditPage";
import FooterPage from "../Footer/FooterPage";
function OrganizeTextPage() {
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
                  to="/css"
                  className="uppercase text-xl font-serif hover:underline hover:text-blue-800"
                >
                  1. Introduction to CSS
                </Link>
                <div className="pl-4">
                  <Link
                    to="/external"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.1 External Style
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/inline"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.2 inline style
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/embed"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.3 embed style sheet
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/organize"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.4 organize text in CSS
                  </Link>
                </div>
                <div className="pl-4">
                  <Link
                    to="/formcss"
                    className="capitalize text-xl font-serif hover:underline hover:text-blue-800"
                  >
                    1.5 create form in CSS
                  </Link>
                </div>
              </div>
            </div>

            <div className=" mx-2  my-2">
              <Link
                to="/excss"
                className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
              >
                3. exercises
              </Link>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px]">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ការរៀបចំ text របស់ CSS
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              ការរៀបចំនូវ Text តាមរយះ CSS ដើម្បីអោយភាពស្រល់ស្អាតតំរូវ
              អោយប្អូនៗត្រូវយល់ពី property CSS អោយបានល្អប្រសើរ។
            </p>

            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="pro.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
        </div>
        {/* layout css */}
        <div className=" lg:w-full md:w-[59%] w-full h-full p-[15px]">
          <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
            របៀបបង្កើតនូវ Layout តាម CSS
          </h1>
          <p className=" hanuman capitalize py-2 pl-2">
            <span className=" text-rose-700 font-semibold">Layout</span>{" "}
            គឺសំដៅលើការរៀបចំនូវការខ័ណ្ឌចែកទីតាំងបង្ហាញ ទិន្នន័យ របស់ CSS។
            ធម្មតានៅក្នុងការប្រើប្រាស់ Web គេក៏អាចប្រើប្រាស់នូវ Table ដើម្បី ខ័
            ណ្ឌ ចែក ទិន្ន័យលើ Website បានផង់ដែរតែគ្រាន់តែវាមិន មានភាពស្រល់ស្អាត
            និង ទាក់ ទាញ ដូច្នេះអ្នកអាចបង្កើតនូវ Layout តាម CSS ទើបជាចំនុចមួយ
            ល្អ ប្រសើរ។
          </p>

          <div className=" w-full h-full shadow p-[15px] my-3">
            <div className=" flex space-x-2">
              <img
                className=" w-full h-full object-cover rounded"
                src="layout.png"
                alt="404"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtomBar />
      <CreditPage />
      <FooterPage />
    </>
  );
}

export default OrganizeTextPage;
