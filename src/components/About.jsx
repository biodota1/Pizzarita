import React from "react";

import "../style/about.css";
import about_img from "../assets/about_company.svg";
import fastfood_1_img from "../assets/fastfood_1.svg";
import fastfood_2_img from "../assets/fastfood_2.svg";

export default function About() {
  return (
    <div className="flex relative h-screen">
      <div className="w-1/2 px-20">
        <img src={about_img} alt="" />
      </div>
      <div className="w-1/2 px-20 space-y-5">
        <h1 className="about-h1">About Company</h1>
        <h2 className="about-h2">
          Where Quality Pizza <br /> Excellent Service
        </h2>
        <h3 className="about-h3">
          Our restaurant strives to become our
          <br /> customers favorite place to eat and drink
        </h3>
        <div className="flex space-x-10">
          <div className="shadow-lg w-1/2 p-10">
            <img src={fastfood_1_img} alt="" />
            <h4 className="about-h4">Fast Foods</h4>
            <h5 className="about-h5">
              If you're out, and straving and need a
              <br />
              bite to eat, then you need fast food.
            </h5>
          </div>
          <div className="shadow-lg w-1/2 p-10">
            <img src={fastfood_2_img} alt="" />
            <h4 className="about-h4">Fast Foods</h4>
            <h5 className="about-h5">
              Feast your eye on this delicious <br />
              dinner spread
            </h5>
          </div>
        </div>
        <div className="flex p-5 space-x-20">
          <button className="about-button h-16 w-40 p-3 rounded-lg">
            About More
          </button>
        </div>
      </div>
    </div>
  );
}
