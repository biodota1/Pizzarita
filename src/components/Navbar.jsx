import React from "react";

import home_logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="h-[10vh] flex bg-red-600 shadow-xl">
      <div className="w-1/5 flex justify-center items-center">
        <img className="h-40 hover:cursor-pointer" src={home_logo} alt="" />
      </div>
      <div className="w-3/5 hidden font-semibold justify-evenly items-center space-x-10 md:flex lg:text-lg xl:text-2xl ">
        <div>HOME</div>
        <div>MENU</div>
        <div>SHOP</div>
        <div>PAGES</div>
        <div>BLOG</div>
        <div>CONTACT US</div>
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <div className="text-2xl font-bold">CALL @ 555-555</div>
      </div>
    </div>
  );
}
