import React from "react";
import "../App.css";
import { FaFacebook } from "react-icons/fa";
function CreditPage() {
  return (
    <div className=" w-full h-full p-[15px] my-5">
      <h1 className=" capitalize text-2xl font-serif font-semibold text-center">
        reference belong to:
      </h1>
      <div className=" my-5">
        <div className=" text-center">
          <h1 className=" hanuman uppercase text-xl text-red-600">
            លោកគ្រូសាស្រ្តាចារ្យៈ ហេង ភក្តិណា ជាស្ថាបនិករបស់{" "}
            <span className=" font-extrabold text-blue-700 underline">
              etect center
            </span>
          </h1>
          <p className=" uppercase font-extrabold">
            h/p: 096 226 888/ 077 35 88 84
          </p>
          <p className=" uppercase font-extrabold">
            facebook page : <span className=" hanuman">គ្រូអាយធី ចិត្តល្អ</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditPage;
