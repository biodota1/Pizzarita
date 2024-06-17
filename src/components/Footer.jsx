import React from "react";

export default function Footer() {
  return (
    <div className="h-96 bg-slate-900 text-white p-24">
      <div className="flex justify-around font-semibold">
        <div>
          <h1 className="text-red-500 text-lg ">MENU</h1>
          <h2>Deals</h2>
          <h2>Pizza</h2>
          <h2>Pasta</h2>
        </div>
        <div>
          <h1 className="text-red-500 text-lg ">ABOUT US</h1>
          <h2>Website</h2>
        </div>
        <div>
          <h1 className="text-red-500 text-lg ">CONTACT US</h1>
          <h2>Email</h2>
        </div>
        <div>
          <h1 className="text-red-500 text-lg ">VISIT US</h1>
          <h2>FB</h2>
          <h2>TWITTER</h2>
          <h2>YOUTUBE</h2>
        </div>
      </div>
      <div className="flex space-x-10 justify-center p-16">
        <h1>Contact us</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms of Use</h1>
        <h1>Copyright © 2022 Pizzarita. Allright Reserved</h1>
      </div>
    </div>
  );
}
