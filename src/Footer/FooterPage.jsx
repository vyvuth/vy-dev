import React from "react";
import { FaFacebook, FaTelegram, FaTiktok } from "react-icons/fa";

function FooterPage() {
  return (
    <div className=" w-full h-[25%] p-[3%] bg-gray-700 mt-14">
      <div className=" lg:flex lg:justify-between lg:align-items-center font-serif md:flex md:w-full md:justify-between md:align-items-center">
        <div className=" text-white text-start text-xl">
          <p className=" my-5 ">Tel:+85593200503</p>
          <p className=" my-5 ">Telegram: t.me/Webfront_developer</p>
          <a className=" my-5 hover:text-blue-600 hover:underline">
            navy5867@gmail.com
          </a>
        </div>
        <div className=" text-white capitalize text-xl lg:my-5 my-10 md:my-5 ">
          <a
            href="https://www.tiktok.com/@uservydev"
            className=" p-0 m-0 flex lg:justify-around "
          >
            tik tok{" "}
            <FaTiktok className=" lg:mt-1 mx-6 hover:text-red-500 transition-all duration-300 size-6 transform-cpu animate-pulse" />
          </a>
          <a
            href="https://web.facebook.com/agency007V"
            className=" p-0 m-0 flex lg:justify-around my-5"
          >
            facebook{" "}
            <FaFacebook className=" lg:mt-1 mx-2 hover:text-blue-500 transition-all duration-300 size-6 transform-cpu animate-pulse" />
          </a>
          <a
            href="https://t.me/Webfront_developer"
            className=" p-0 m-0 flex lg:justify-around my-5"
          >
            telegram
            <FaTelegram className=" lg:mt-1 mx-2 hover:text-cyan-300 transition-all duration-300 size-6 transform-cpu animate-pulse" />
          </a>
        </div>
      </div>
      <hr />
      <div className=" lg:mt-10 text-white my-3 md:my-4">
        <h1 className=" uppercase font-bold text-center hover:text-rose-600 decoration-clone active:roboto font-serif lg:text-2xl md:text-xl">
          design & developed by: vuth vy 🥰
        </h1>
        <p className="lg:text-center me-12 mt-5 lg:font-serif lg:hover:text-pink-600 text-center lg:hover:font-bold lg:hover:underline md:text-center">
          &copy;CopyRight forward on @08/March/2025
        </p>
      </div>
    </div>
  );
}

export default FooterPage;
