import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Popular from "./Popular";
import About from "./About";
import Ads from "./Ads";
import Menu from "./Menu";
import Download from "./Download";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Popular />
      <About />
      <Ads />
      <Menu />
      <Download />
      <Footer />
    </div>
  );
}
