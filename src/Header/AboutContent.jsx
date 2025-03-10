import React from "react";
import { Link } from "react-router-dom";
import ApplicationUI from "../Component/ApplicationUI";
import BasicPage from "../Component/BasicPage";
import FooterPage from "../Footer/FooterPage";
import ButtomBar from "../ButtomBar/ButtomBar";
function AboutContent() {
  return (
    <>
      <div className="animate__animated animate__bounceInRight">
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
        <ApplicationUI />
        <BasicPage />
        <FooterPage />
      </div>
      <ButtomBar />
    </>
  );
}

export default AboutContent;
