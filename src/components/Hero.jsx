import React from "react";
import { useState, useEffect } from "react";
import hero_img from "../assets/popular_1.svg";

import "../style/style.css";

export default function Hero() {
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(true);

  useEffect(() => {
    const fadeLoopInterval = setInterval(() => {
      setDisplay1((prevVisible) => !prevVisible);
    }, 5000);

    return () => {
      clearInterval(fadeLoopInterval);
    };
  }, []);

  return (
    <div className="h-[90vh] bg-black text-white p-56">
      {/* display 1 */}
      <div
        className={`box absolute ${
          display1 ? "fade-in translate-in" : "fade-out translate-out"
        }`}
      >
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">Welcome to Pizzarita</h1>
          <h2 className="text-7xl font-bold">
            TASTE QUALITY <br /> PIZZA WITH US
          </h2>
          <button className="text-xl text-white font-mono font-semibold bg-red-600 p-4 rounded-md hover:bg-white hover:text-black">
            GO TO MENU
          </button>
        </div>
      </div>

      {/* display 2 */}
      <div
        className={`box absolute ${
          display1 ? "fade-out translate-out" : "fade-in translate-in"
        }`}
      >
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">Welcome to Pizzarita</h1>
          <h2 className="text-7xl font-bold">
            ENJOY WITH <br /> FAMILY AND <br /> FRIENDS
          </h2>
          <button className="text-xl text-white font-mono font-semibold bg-red-600 p-4 rounded-md hover:bg-white hover:text-black">
            GO TO MENU
          </button>
        </div>
      </div>
      <img
        className="absolute right-24 top-0 h-full p-40"
        src={hero_img}
        alt=""
      />
    </div>
  );
}
