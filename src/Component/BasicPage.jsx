import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function BasicPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: "false",
    });
  }, []);
  return (
    <>
      <div data-aos="fade-left" className=" my-10 p-[2%]">
        <h1
          className=" lg:text-3xl lg:text-center lg:my-3 capitalize lg:font-semibold lg:font-serif text-rose-500 decoration-slice *:
        text-xl text-center md:text-4xl"
        >
          Basic programming good for beginner 👇
        </h1>
        {/* card */}
        <div className=" lg:flex lg:flex-wrap lg:justify-between md:flex md:w-full md:justify-between">
          {/* card1 */}
          <div className=" lg:w-[49%] md:w-[48%] h-[30%] border border-green-700  rounded my-5 overflow-hidden  ">
            <div className=" w-full h-72 hover:p-[15px] transition-all hover:bg-rose-300 hover:text-white">
              <img
                src="c.png"
                alt="404"
                className=" w-full h-full object-cover hover:rounded"
              />
            </div>
            <div className="p-[5px] my-3">
              <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
                C Lesson
              </h4>
              <p className="p-0 m-0 text-sm font-serif text-start my-2">
                The C programming language is widely used for various purposes
                due to its efficiency, performance, and low-level capabilities.
                Here are some key uses of C.
              </p>
              <p className=" mt-3 capitalize font-serif font-semibold text-orange-600 ">
                free course
              </p>
              <span className=" font-serif text-sm text-red-600 font-bold underline">
                Alumni &copy;ETEC CENTER
              </span>
            </div>
          </div>
          {/* card2 */}
          <div className=" lg:w-[49%] md:w-[48%] md:h-[500px] lg:h-[30%] h-[30%] border border-green-700  rounded my-5 overflow-hidden  ">
            <div className=" w-full h-72 hover:p-[15px] transition-all hover:bg-rose-300 hover:text-white">
              <img
                src="c++.png"
                alt="404"
                className=" w-full h-full object-cover hover:rounded"
              />
            </div>
            <div className="p-[5px] my-3">
              <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
                C++ Lesson
              </h4>
              <p className="p-0 m-0 text-sm font-serif text-start my-2">
                C++ is a powerful, high-performance programming language used
                for a variety of applications.
              </p>
              <p className=" mt-3 capitalize font-serif font-semibold text-orange-600 ">
                free course
              </p>
              <span className=" font-serif text-sm text-red-600 font-bold underline">
                Alumni &copy;ETEC CENTER
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicPage;
