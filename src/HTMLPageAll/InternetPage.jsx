import React from "react";
import { Link } from "react-router-dom";
import ButtomBar from "../ButtomBar/ButtomBar";
import FooterPage from "../Footer/FooterPage";
import "../App.css";
import CreditPage from "../Credit/CreditPage";
function InternetPage() {
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
        <div className=" lg:flex lg:justify-between lg:p-0 md:p-0 p-[20px] md:flex md:justify-between">
          <div className=" lg:w-[39%] md:w-[39%] md:h-full lg:h-full lg:border-r-2 md:border-r-2 lg:rounded lg:py-[15px] overflow-scroll overflow-x-scroll md:overflow-hidden lg:overflow-hidden w-full h-40">
            <h1 className=" capitalize font-serif font-semibold lg:text-center lg:text-2xl md:text-center md:text-2xl  my-3 lg:my-0 md:my-0 ">
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
          <div className=" lg:w-[59%] w-full lg:h-full p-[15px] md:w-[59%] md:h-full">
            <h1 className=" hanuman capitalize text-xl text-center font-serif py-2">
              ដូចម្ដេចទៅដែលហៅថា internet?
            </h1>
            <p className=" hanuman capitalize py-2 pl-2">
              Internet គឺជាបណ្តាញនៃការតភ្ជាប់ទំនាក់ទំនងពី Node មួយទៅកាន់ Nodes
              មួយទៀតពាសពេញពិភពលោក។ នៅក្នុងការតភ្ជាប់ Network គេអាចបែងចែកជា
              ៣ប្រភេទ ធំៗ ដូចជា៖
            </p>
            <p className=" hanuman capitalize py-2 lg:pl-10 md:pl-10 pl-4 ">
              1. LAN(Local Area Network): បណ្តាញដែរតភ្ជាប់មានលក្ខណះជិតៗ គ្នា ឬ
              អាចក្នុងបន្ទប់, អាគារតូចៗ ជាដើម ។
            </p>
            <p className=" hanuman capitalize py-2 lg:pl-10 md:pl-10 pl-4">
              2. MAN(Metropolitan Area Network): បណ្តាញនៃការតភ្ជាប់លក្ខណះ
              ប្រហាក់ប្រហែលនិង LAN ដែរតែទំហំនៃការតភ្ជាប់មានលក្ខណះធំជាង
              អាចទំហំប៉ុនទីក្រុងធំមួយ។
            </p>
            <p className=" hanuman capitalize py-2 lg:pl-10 md:pl-10 pl-4">
              3. WAN(Wide Area Network): បណ្តាញនៃការតភ្ជាប់មានលក្ខណះ
              ទ្រង់ទ្រាយធំអាចពេញពិភកលោកទាំងមូលតែម្តង់។
            </p>
            <div className=" w-full h-full shadow p-[15px] my-3">
              <div>
                <img
                  className=" w-full h-full object-cover rounded"
                  src="internet.png"
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

export default InternetPage;
