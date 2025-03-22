import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ButtomBar from "../ButtomBar/ButtomBar";
import CreditPage from "../Credit/CreditPage";
import FooterPage from "../Footer/FooterPage";
function EmbedPage() {
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
              ✓ ទំរង់ embed style sheet
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              <span className=" text-rose-700 font-semibold">
                Embed Style Sheet
              </span>{" "}
              គឺជាប្រភេទStyle Sheet ដែលគេអាចយក Tag HTML ណាមួយ មក បន្ថែម Style
              Sheet ឬ គេអាចបង្កើត Sub Tag ចេញពី Tag ណាមួយក៏បានដែរ។ Style Sheet
              ប្រភេទនេះគេអាចបង្កើតវាជាទំរង់ Internal Style Sheet ក៏ បាន ឬ
              External Style Sheet ក៏បានដែរ។ ក្នុង Embed Style Sheet គេបែងចែកជា
              ៣ប្រភេទ គឺ Selector, Selector ID, Selector with Class ។
            </p>
            <p className=" hanuman capitalize py-2 pl-2">
              <span className=" text-rose-700 font-semibold">
                selector style
              </span>{" "}
              គឺជាប្រភេទ Style Sheet ដែលគ្រាន់តែយក Tag HTML ណាមួយមក បន្ថែម
              Property Sheet របស់ Css ជាការស្រេច។ Style Sheet ប្រភេទនេះ អ្នកអាច
              សរសេរនៅចំន្លោះ Tag Style ជាការស្រេច។
            </p>

            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2 ">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="embed.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Selector ID */}
        <div className=" lg:w-full md:w-[59%] w-full h-full p-[15px]">
          <p className=" hanuman capitalize py-2 pl-2 text-2xl">
            <span className=" text-rose-700 font-semibold">
              selector ID style
            </span>{" "}
            គឺជាប្រភេទ Selector ដែលគេគ្រាន់តែយក Tag របស់ HTML ណា មួយ មកបង្កើត
            Sub Tag ឬ វាអាចបង្កើត Sub Tag ដោយខ្លួនឯងបាន ដោយ គ្រាន់
            តែប្រើប្រាស់នូវសញ្ញាណ (#) ដាក់នៅពីមុខ Sub Tag ណាមួយក៏បាន។ ចំពោះ
            ការហៅទៅប្រើប្រាស់គឺត្រូវ ហៅតាមរយះ Attribute (id) ។
          </p>

          <div className=" w-full h-full shadow p-[15px] my-3">
            <div className=" flex space-x-2 ">
              <img
                className=" w-full h-full object-cover rounded"
                src="id.png"
                alt="404"
              />
            </div>
          </div>
        </div>
        {/* Selector CLASS */}
        <div className=" lg:w-full md:w-[59%] w-full h-full p-[15px]">
          <p className=" hanuman capitalize py-2 pl-2 text-2xl">
            <span className=" text-rose-700 font-semibold">
              Selector With Class
            </span>{" "}
            គឺជាប្រភេទ Selector ដែលគេអាចបង្កើតបានស្រដៀងនិង Selector with ID
            ដែរតែគ្រាន់តែវាបង្កើតឡើងដោយប្រើប្រាស់នូវសញ្ញាណ).) ជាការ ស្រេច ។
            ដើម្បីអាចហៅទំរង់ Selector with class បានអ្នកអាចប្រើប្រាស់នូវ
            Attribute Class។
          </p>

          <div className=" w-full h-full shadow p-[15px] my-3">
            <div className=" flex space-x-2 ">
              <img
                className=" w-full h-full object-cover rounded"
                src="class.png"
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

export default EmbedPage;
