import React from "react";
import "../style/menu.css";
import menu_food from "../assets/menu_food.png";
import menu_line from "../assets/menu_line.svg";

export default function Menu() {
  const menuItem = (
    <li className="menu-items">
      <div className="h-full w-1/6 flex items-center">
        <img
          className="hover:border-2 border-red-500 rounded-full cursor-pointer"
          src={menu_food}
          alt=""
        />
      </div>

      <div className="flex h-full w-4/6 p-5 space-x-2">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <p className="menu-item-name hover:text-red-500 cursor-pointer">
            Hawaian Pizza
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <img className="w-1/2" src={menu_line} alt="" />
      </div>
      <div className="h-full w-1/6 flex justify-center items-center">
        <div className="menu-item-price">$27.00</div>
      </div>
    </li>
  );

  return (
    <div className="h-screen p-16 space-y-5">
      <div className="menu-h1">BEST FOOD MENU</div>
      <div className="menu-h2">Our Best Foods Menus</div>
      <div className="menu-h3 flex w-1/2 mx-auto justify-around">
        <div>Pizza</div>
        <div>Pasta</div>
        <div>Drinks and Juice</div>
      </div>
      <div className="flex justify-center space-x-12">
        <div className="menu-box border-dashed border-2 border-black  p-6">
          <ul>
            {menuItem}
            {menuItem}
            {menuItem}
            {menuItem}
          </ul>
        </div>
        <div className="menu-box border-dashed border-2 border-black  p-5">
          <ul>
            {menuItem}
            {menuItem}
            {menuItem}
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
}
