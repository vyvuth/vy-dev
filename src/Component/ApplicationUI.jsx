import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function ApplicationUI() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: "false",
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div data-aos="fade-down">
        <h3
          className=" lg:text-xl capitalize lg:font-serif lg:font-semibold  lg:mx-8  opacity-50  text-purple-500 
        lg:text-left text-center text-2xl font-serif md:text-5xl"
        >
          lesson and skill development
        </h3>
        {/* card */}
        <div className="lg:p-[50px] lg:w-full lg:flex lg:flex-wrap lg:gap-5 lg:justify-between p-4 flex flex-wrap gap-3 md:flex md:gap-4 md:justify-between md:w-full">
          {/* card1 */}
          <div className=" lg:w-[30%] md:w-[48%] md:h-[395px] w-full lg:h-[25%] h-auto p-5 rounded border border-rose-500">
            <div className=" w-full h-44 ">
              <img
                width={100}
                height={100}
                className=" w-full h-44 object-cover overflow-hidden rounded"
                src="html.png"
                alt="HTML not found.."
              />
            </div>
            <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
              HTML Lesson
            </h4>
            <p className="p-0 m-0 text-sm font-serif text-start my-2">
              HTML (HyperText Markup Language) is the foundation of all web
              pages. It is used to structure and display content on the web.
            </p>
            <hr />
            <p className="mt-3 capitalize font-serif font-semibold text-orange-400">
              Free Course -
              <Link
                to="/HTML"
                className="ml-3 text-blue-600 underline hover:text-blue-800 transition-all"
              >
                Start your learning
              </Link>
            </p>

            <span className=" font-serif text-sm text-red-600 font-bold underline">
              Alumni &copy;ETEC CENTER
            </span>
          </div>
          {/* card2 */}
          <div className=" lg:w-[30%] md:w-[48%] md:h-[395px] w-full lg:h-[25%] h-[25%] p-5 rounded border border-rose-500">
            <div className=" w-full h-40 ">
              <img
                width={100}
                height={100}
                className=" w-full h-44 object-cover overflow-hidden rounded"
                src="css.png"
                alt="CSS not found.."
              />
            </div>
            <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
              CSS Lesson
            </h4>
            <p className="p-0 m-0 text-sm font-serif text-start my-2">
              CSS (Cascading Style Sheets) is used to style and design web pages
              by controlling the layout, colors, fonts, spacing, and
              responsiveness of HTML elements.
            </p>
            <hr />
            <p className=" mt-2 capitalize font-serif font-semibold text-orange-400 ">
              free course -{" "}
              <Link
                to="/CSS"
                className="ml-3 text-blue-600 underline hover:text-blue-800 transition-all"
              >
                Start your learning
              </Link>
            </p>
            <span className=" font-serif text-sm text-red-600 font-bold underline">
              Alumni &copy;ETEC CENTER
            </span>
          </div>
          {/* card3 */}
          <div className=" lg:w-[30%] md:w-[48%] md:h-[430px] w-full lg:h-[25%] h-[25%] p-5 rounded border border-rose-500">
            <div className=" w-full h-40 ">
              <img
                width={100}
                height={100}
                className=" w-full h-44 object-cover overflow-hidden rounded"
                src="js.png"
                alt="JS not found.."
              />
            </div>
            <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
              JAVASCRIPT Lesson
            </h4>
            <p className="p-0 m-0 text-sm font-serif text-start my-2">
              JavaScript (JS) is one of the most popular programming languages
              in the world, mainly used for web development, but it has many
              other applications as well.
            </p>
            <hr />
            <p className=" mt-2 capitalize font-serif font-semibold text-orange-400 ">
              free course -{" "}
              <Link
                to="/js"
                className="ml-3 text-blue-600 underline hover:text-blue-800 transition-all"
              >
                Start your learning
              </Link>
            </p>
            <span className=" font-serif text-sm text-red-600 font-bold underline">
              Alumni &copy;ETEC CENTER
            </span>
          </div>
          {/* card4 */}
          <div className=" lg:w-[30%] md:w-[48%] md:h-[430px] w-full lg:h-[25%] h-[464px] p-5 rounded border border-rose-500">
            <div className=" w-full h-40 ">
              <img
                width={100}
                height={100}
                className=" w-full h-44 object-cover overflow-hidden rounded"
                src="jquery.png"
                alt="JQUERY not found.."
              />
            </div>
            <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
              JQUERY Lesson
            </h4>
            <p className="p-0 m-0 text-sm font-serif text-start my-2">
              jQuery is a fast, lightweight, and feature-rich JavaScript library
              that simplifies tasks such as HTML document traversal, event
              handling, animations, and AJAX requests. It was widely used in web
              development before modern JavaScript frameworks like React, Vue,
              and Angular became popular.
            </p>
            <hr />
            <p className=" mt-2 capitalize font-serif font-semibold text-orange-400 ">
              free course -{" "}
              <Link
                to="/jq"
                className="ml-3 text-blue-600 underline hover:text-blue-800 transition-all"
              >
                Start your learning
              </Link>
            </p>
            <span className=" font-serif text-sm text-red-600 font-bold underline">
              Alumni &copy;ETEC CENTER
            </span>
          </div>
          {/* card5 */}
          <div className=" lg:w-[30%] md:w-[48%] md:h-[435px] w-full lg:h-[464px] h-[464px] p-5 rounded border border-rose-500">
            <div className=" w-full h-44 ">
              <img
                width={100}
                height={100}
                className=" w-full h-44 object-cover overflow-hidden rounded"
                src="react.png"
                alt="REACT JS not found.."
              />
            </div>
            <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
              REACT JS Lesson
            </h4>
            <p className="p-0 m-0 text-sm font-serif text-start my-2">
              React.js is a popular JavaScript library for building user
              interfaces (UI), mainly for single-page applications (SPA). It
              allows developers to create dynamic and interactive web
              applications efficiently.
            </p>
            <hr />
            <p className=" mt-2 capitalize font-serif font-semibold text-orange-400 ">
              free course -{" "}
              <Link
                to="/react"
                className="ml-3 text-blue-600 underline hover:text-blue-800 transition-all"
              >
                Start your learning
              </Link>
            </p>
            <span className=" font-serif text-sm text-red-600 font-bold underline">
              Alumni &copy;ETEC CENTER
            </span>
          </div>
          {/* card6 */}
          <div className=" lg:w-[30%] md:w-[48%] md:h-[435px] w-full lg:h-[25%] h-[25%] p-5 rounded border border-rose-500">
            <div className=" w-full h-40 ">
              <img
                width={100}
                height={100}
                className=" w-full h-44 object-cover overflow-hidden rounded"
                src="next.png"
                alt="NEXT JS not found.."
              />
            </div>
            <h4 className=" text-xl mt-5 text-center font-semibold font-serif hover:transition-transform">
              Next JS Lesson
            </h4>
            <p className="p-0 m-0 text-sm font-serif text-start my-2">
              Next.js is a React framework used for building modern web
              applications with server-side rendering (SSR), static site
              generation (SSG), and client-side rendering (CSR). It provides a
              great developer experience with powerful features like API routes,
              automatic image optimization, and built-in SEO enhancements.
            </p>
            <hr />
            <p className=" mt-2 capitalize font-serif font-semibold text-orange-400 ">
              free course -{" "}
              <Link
                to="/next "
                className="ml-3 text-blue-600 underline hover:text-blue-800 transition-all"
              >
                Start your learning
              </Link>
            </p>
            <span className=" font-serif text-sm text-red-600 font-bold underline">
              Alumni &copy;ETEC CENTER
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationUI;
