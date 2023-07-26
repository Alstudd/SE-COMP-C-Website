import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import menu from "../assets/Navbar/menu.svg";
import close from "../assets/Navbar/close.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  return (
    <div className="w-full h-[80px] z-10 bg-white drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          {/* <img src={logo} alt="logo" className="ml-10 md:ml-3 rounded-lg w-full h-16" /> */}
          <h1 className="ml-8 text-4xl font-bold text-blue-500">COMP-C</h1>
        </div>
        <div className="flex item-center">
          <ul className="hidden md:flex md:gap-10">
            <li><a href="/">Home</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="#">Opportunities</a></li>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <a href="#"><button className="border-none bg-transparent text-black mr-4 mt-3">Resources</button></a>
          <a href="/contact"><button className="bg-blue-500 rounded-lg text-white px-6 py-3">Contact Us</button></a>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain mr-10 cursor-pointer" />
        </div>
      </div>
      <ul className={toggle ? "absolute flex flex-col gap-8 text-lg bg-white w-full px-8 md:hidden" : "hidden"}>
        <li className="mt-8 ml-2"><a href="/">Home</a></li>
        <li className="ml-2"><a href="/achievements">Achievements</a></li>
        <li className="ml-2"><a href="/students">Students</a></li>
        <li className="ml-2"><a href="#">Opportunities</a></li>
        <div className="flex flex-col my-4">
          <a href="#"><button className="w-full border-2 border-solid rounded-lg border-blue-500 bg-transparent text-black mb-4 py-3 px-8">Resources</button></a>
          <a href="/contact"><button className="w-full bg-blue-500 hover:bg-transparent hover:text-black hover:border-2 hover:border-solid hover:border-blue-500 rounded-lg text-white px-8 py-3">Contact Us</button></a>
        </div>
      </ul>
    </div>
  );
}
