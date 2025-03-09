import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function HightliagePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: "false",
    });
  }, []);
  return (
    <div data-aos="fade-right" className="my-10 p-[2%]">
      <h1 className=" lg:text-center lg:text-2xl lg:font-serif lg:font-semibold text-xl text-center font-semibold md:text-3xl">
        Hightlight source code of each lanuages
      </h1>
      <div className=" lg:flex lg:flex-wrap lg:justify-between md:flex md:flex-wrap-reverse md:justify-between ">
        {/* card1 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img1.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C++
          </p>
        </div>
        {/* card2 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className=" h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img2.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C++
          </p>
        </div>
        {/* card3 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img3.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C++
          </p>
        </div>
        {/* card4 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img4.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            Python
          </p>
        </div>
        {/* card5 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img5.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            React JS
          </p>
        </div>
        {/* card6 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img6.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            React JS
          </p>
        </div>
        {/* card7 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img8.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            JavaScript
          </p>
        </div>
        {/* card8 */}
        <div className=" lg:w-[32%] md:hidden lg:block h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img9.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C or C++
          </p>
        </div>
        {/* card9 */}
        <div className=" lg:w-[32%] md:w-[48%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="img7.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            React JS
          </p>
        </div>
        {/* card10 */}
      </div>
    </div>
  );
}

export default HightliagePage;
