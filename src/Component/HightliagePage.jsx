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
    <div data-aos="zoom-in-up" className="my-10 p-[2%]">
      <h1 className=" text-center text-2xl font-serif font-semibold">
        Hightlight source code of each lanuages
      </h1>
      <div className=" flex flex-wrap justify-between ">
        {/* card1 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img1.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C++
          </p>
        </div>
        {/* card2 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className=" h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img2.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C++
          </p>
        </div>
        {/* card3 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img3.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C++
          </p>
        </div>
        {/* card4 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img4.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            Python
          </p>
        </div>
        {/* card5 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img5.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            React JS
          </p>
        </div>
        {/* card6 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img6.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            React JS
          </p>
        </div>
        {/* card7 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img8.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            JavaScript
          </p>
        </div>
        {/* card8 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img9.png"
              alt=""
            />
          </div>
          <hr className=" border-rose-700 my-3" />
          <p className="p-0 capitalize font-semibold text-2xl hover:text-rose-500 hover:underline  hover:block">
            C or C++
          </p>
        </div>
        {/* card9 */}
        <div className=" w-[32%] h-[20%] border border-purple-800  p-[5px] mt-10 rounded overflow-hidden">
          <div className="h-96 hover:bg-rose-700 hover:rounded hover:transition-all hover:p-[15px]">
            <img
              className=" w-full h-full object-cover rounded"
              src="/public/images/img7.png"
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
