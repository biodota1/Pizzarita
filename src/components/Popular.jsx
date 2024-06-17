import React from "react";
import "../style/popular.css";
import popular_1 from "../assets/popular_1.svg";
import Onhovershow from "./onhover/PopularFood";

export default function Popular() {
  return (
    <div className="h-screen relative space-y-14 pt-10">
      <h1 className="best-food text-center">BEST FOOD MENU</h1>
      <h2 className="our-food-items text-center">Our Popular Food Items</h2>
      <div className="flex justify-center items-center  space-x-10">
        <Onhovershow
          item_img={popular_1}
          item_name="Hawaiian Pizza"
          item_info="Hawaiin Cuisine"
          item_prize="27.00"
        />
        <Onhovershow
          item_img={popular_1}
          item_name="Hawaiian Pizza"
          item_info="Hawaiin Cuisine"
          item_prize="27.00"
        />
        <Onhovershow
          item_img={popular_1}
          item_name="Hawaiian Pizza"
          item_info="Hawaiin Cuisine"
          item_prize="27.00"
        />
        <Onhovershow
          item_img={popular_1}
          item_name="Hawaiian Pizza"
          item_info="Hawaiin Cuisine"
          item_prize="27.00"
        />
      </div>
    </div>
  );
}
