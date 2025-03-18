import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtomBar from "../ButtomBar/ButtomBar";
import FooterPage from "../Footer/FooterPage";
import CreditPage from "../Credit/CreditPage";
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
        <div className="w-full h-full lg:p-0 md:p-0 p-[20px] lg:flex lg:justify-between md:flex md:justify-between  ">
          <div className=" lg:w-[39%] md:w-[39%] lg:h-full md:h-full lg:border-r-2 md:border-r-2 lg:rounded md:rounded lg:py-[15px] md:py-[15px] h-40 overflow-scroll overflow-y-scroll md:overflow-hidden lg:overflow-hidden ">
            <h1 className=" capitalize font-serif font-semibold lg:text-center md:text-center lg:text-2xl md:text-2xl my-3 lg:my-0 md:my-0 ">
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
                  to="/order"
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
                  2.3 What is te underorderList?
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
              <Link
                to="/ex"
                className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
              >
                3. exercises
              </Link>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full lg:p-[15px]">
            <h1 className=" hanuman capitalize text-x text-center font-serif py-2">
              សម្រាប់បងប្អូនចង់ដើរលើផ្លូវ{""} web development{""}{" "}
              ពេញតែម្ដងបងប្អូនត្រូវដើរ៣ជំហានធំៗ៖{" "}
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              ១.{""} web frontend ឬ web design frontend
              ថ្នាក់នេះបងប្អូននិងរៀនពីការរចនា000 website កម្រិតដំបូង ឬ
              កម្រិតអត់ចេះអីសោះ ដែលមាន HTML, CSS, Bootstrap, Javascript, Jquery
              និងរៀនធ្វើ project ផ្សេងៗ
            </p>
            <p className=" hanuman capitalize py-2 pl-2">
              ២. Web Backend ឬ Web Detabase មកដល់ពេលនេះរៀនពីការ Store
              ទុកទិន្នន័យ លើ File និង Database ពោលគឺរៀនពី ការធ្វើ Page Admin និង
              ការផ្ទុកទិន្នន័យ ឬ Filter ឬ Query ទិន្នន័យ មករៀបចំជា Contents
              ផ្សេងៗ បង្ហាញខាង Frontend ឬ គ្រប់គ្រង់ ឬ
              រៀបចំទិន្នន័យដាក់ដោយផ្នែកៗ ជាដើម
            </p>
            <p className=" hanuman capitalize py-2 pl-2">
              ៣. Web Framework សំដៅលើ Framework ឬ Library ផ្សេងៗ ដែលត្រូវ embed
              ជាមួយនិង Website បន្ថែមទៀតដើម្បីអោយ Website កាន់តែទាក់ទាញ និង
              Standard ឡើង ។ រឿង Web framework រាល់ថ្ងៃនេះបានចែកជាពីររឿងគឺ Web
              Framework ខាង Frontend និង Web Framework ខាង backend។
            </p>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" overflow-scroll overflow-y-auto flex justify-between w-full space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="front.png"
                  alt="404"
                />
                <img
                  className=" w-full lg:h-[335px] md:h-[335px] h-[167px] object-cover rounded"
                  src="back.png"
                  alt="404"
                />
                <img
                  className=" w-full lg:h-[339px] md:h-[339px] h-[167px] object-cover rounded"
                  src="road.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreditPage />
      <ButtomBar />
      <FooterPage />
    </>
  );
}

export default HTMLPage;
