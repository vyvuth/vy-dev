import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ButtomBar from "../ButtomBar/ButtomBar";
import CreditPage from "../Credit/CreditPage";
import FooterPage from "../Footer/FooterPage";
function HTMLPages() {
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
              <div to="/unlist" className=" mx-2 pl-4">
                <Link className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 ">
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
              <Link
                to="/ex"
                className=" uppercase  text-xl font-serif hover:underline hover:text-blue-800 "
              >
                3. exercises
              </Link>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px]">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              អ្វីទៅជា HTML?
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              HTML ឈរលើពាក្យថា Hyper Text Markup Language គឺជាភាសារ សំរាប់
              បង្កើតនូវ Website ជាទំរង់ Web Static ដំណើរការខាងផ្នែក Client។ HTML
              គេអាចប្រើ ប្រាស់ វាសម្រាប់ដាក់ Text, Video, Sound, Images...។
            </p>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="html.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:my-14 md:my-14">
          <div className=" p-[50px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="syn.png"
              alt="404"
            />
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px] m-auto">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ដូចម្តេចទៅ ដែលហៅថា Attribute?
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              Attribute គឺជារបស់ដែលមានស្រាប់លក្នុង HTML ដែលគេប្រើប្រាស់សំរាប់
              ជំនួយអោយ Tag អាចធ្វើអ្វីបន្ថែមទៀត។ Attribute មិនមានសម្រាប់គ្រប់
              Tag នោះទេគឺវាសំ រាប់តែ Tag មួយចំនួនប៉ុណ្ណឹង។
            </p>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="ab.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px] m-auto">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ការដាក់រូបភាពលើ Webpage
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              ដើម្បីយករូបភាពមកដាក់លើគេហទំព័រអ្នកត្រូវកែលំហរូបភាពទាំងទំហំ និង
              សោភណ្ឌភាពរូបភាពអោយហើយដោយប្រើប្រាស់នូវ Tool Design ណាមួយដូចជា
              Photoshop, Corel, Illustrator,...។
              រូបភាពដែលដែលអាចដាក់បានគួរប្រើប្រាស់ជាប្រភេទ file ដូចជា *.jpg,
              *.png, *.gif, *.bmp....។
            </p>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="img.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px] m-auto">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ការទាញយកវីដេអូពី Youtube មកដាក់លើ Wensite របស់យើង
            </h1>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="vdo.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px] m-auto">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ការទាញយកវីដេអូពី Sound មកដាក់លើ Wensite របស់យើង
            </h1>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="aio.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-[59%] md:w-[59%] w-full h-full p-[15px] m-auto">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ការ Link ភ្ជាប់ Web Site
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              សំដៅលើការតភ្ជាប់គេហទំព័រពី page មួយទៅកាន់ page មួយទៀត
              ឬពីចំនុចមួយទៅ ចំនុចមួយទៀតក្នុង Page ផ្សេងទៀត ។
            </p>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div className=" flex space-x-2">
                <img
                  className=" w-full h-full object-cover rounded"
                  src="link.png"
                  alt="404"
                />
              </div>
            </div>
          </div>
          <div className=" p-[15px]">
            <p className=" pl-12 hanuman lg:text-2xl md:text-2xl font-bold my-3">
              ឧទាហរណ៍ទី1:
            </p>
            <img
              className=" w-full h-full object-cover rounded"
              src="exhtml.png"
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

export default HTMLPages;
