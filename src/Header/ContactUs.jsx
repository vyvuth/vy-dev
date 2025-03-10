import React from "react";
import { Link } from "react-router-dom";
import ButtomBar from "../ButtomBar/ButtomBar";
import FooterPage from "../Footer/FooterPage";
function ContactUs() {
  return (
    <>
      <div className="animate__animated animate__fadeInLeftBig">
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
              to="/us"
              className="hover:text-blue-700 hover:underline transition-all duration-200 animate-pulse"
            >
              Contact Us
            </Link>
          </ul>
        </nav>
        <FooterPage />
      </div>
      <ButtomBar />
    </>
  );
}

export default ContactUs;
