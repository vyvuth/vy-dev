import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ButtomBar from "../ButtomBar/ButtomBar";
import CreditPage from "../Credit/CreditPage";
import FooterPage from "../Footer/FooterPage";
function CSSPage() {
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
                    1.2 Inline style
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
                2. exercises
              </Link>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px]">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ដូចម្ដេចដែលហៅថា CSS?
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              CSS ឈរលើពាក្យថា Cascading Style Sheet ដែលត្រូវបានគេ ប្រើ ប្រាស់
              សំរាប់តុបតែងគេហទំព័រអោយមានភាពទាក់ទាញ និងស្រល់ស្អាត និង ទាក់ ទាញ
              ពីសំណាក់អ្នកទស្សនាវា។
            </p>
            <p className=" hanuman capitalize py-2 pl-2">
              ដើម្បីសរសេរ Style sheet អ្នកអាចសរសេរបាន ២របៀប៖
            </p>
            <p className=" hanuman capitalize py-2 pl-2">
              1.1. Internal Style sheet: ទំរង់ Style ដែលសរសេរជាមួយនិង file HTML
              ពោលគឺអ្នកអាចសរសេរនៅចំលោះ header របស់ HTML
            </p>

            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="css1.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-full md:w-full w-full h-full p-[15px]">
          <p className=" hanuman capitalize py-2 pl-2">
            12. External style sheet : គឺជាការសរសេរ Style ផ្តាច់ពី file រវាង
            HTML និង CSS។ទំរង់នេះគេប្រើប្រាស់ក្នុងករណីដែល CSS style មានច្រើន
            line ឬ គេមិនចង់អោយវានៅជាមួយនិង file html។
          </p>
          <div className=" w-full h-full shadow p-[15px] my-3">
            <div className=" flex space-x-2">
              <img
                className=" w-full h-full object-cover rounded"
                src="external.png"
                alt="404"
              />
            </div>
            <p className="underline py-2 pl-2 font-bold">Save file: * .css</p>
          </div>
          <div className=" w-full h-full shadow p-[15px] my-3">
            <div className=" flex space-x-2 size-auto">
              <img
                className=" w-full h-full object-cover rounded"
                src="external1.png"
                alt="404"
              />
            </div>
            <p className="underline py-2 pl-2 font-bold">Save file: * .html</p>
          </div>
          {/* divide css */}
          <div className=" w-full h-full hanuman my-[20px]">
            <p className=" hanuman text-2xl pl-10 font-semibold">
              CSS ត្រូវបានគេចែកជា២ប្រភេទ:
            </p>
            <ol className=" pl-20 my-[20px]">
              <li className=" my-1 capitalize font-semibold text-xl">
                * ទម្រង់ inline style
              </li>
              <li className=" my-1 capitalize font-semibold text-xl">
                * ទម្រង់ embed style(external style sheet)
              </li>
            </ol>
            <p className=" capitalize font-bold pl-[100px] text-rose-600 underline my-2">
              + selector style
            </p>
            <p className=" capitalize font-bold pl-[100px] text-rose-600 underline my-2">
              + selector with ID style
            </p>
            <p className=" capitalize font-bold pl-[100px] text-rose-600 underline my-2">
              + selector with Class style
            </p>
          </div>
        </div>
      </div>
      <ButtomBar />
      <CreditPage />
      <FooterPage />
    </>
  );
}

export default CSSPage;
