"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowDown,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [options, setOptions] = useState(false);
  return (
    <nav className="bg-[#7975fe] md:p-4 fixed top-6 left-6 right-6 md:top-12 md:left-12 md:right-12 z-50 rounded-2xl h-20">
      <div className="flex justify-between items-center h-full px-4">
        {/* Logo */}
        <div className="text-white md:text-2xl font-navbar font-light">
          Stacks
        </div>
        <button
          type="button"
          onClick={() => setOptions((prev) => !prev)}
          className="flex flex-col gap-[4px] relative md:hidden z-50"
        >
          <div className="bg-white h-[2px] w-6" />
          <div className="bg-white h-[2px] w-6" />
          <div className="bg-white h-[2px] w-6" />
        </button>
        <div
          className={`fixed top-0 transition-[left] w-full h-screen bg-gray-950 bg-opacity-95 text-white rounded-xl flex justify-center text-center flex-col p-4 gap-2 md:hidden z-40 ${
            options ? "left-0" : "left-full"
          }`}
        >
          <a href="#why-us" className="font-medium hover:text-gray-600 text-xl">
            Why us?
          </a>
          <a
            href="#portfolio"
            className="font-medium hover:text-gray-600 text-xl"
          >
            Portfolio
          </a>
          <a
            href="#services"
            className="font-medium hover:text-gray-600 text-xl"
          >
            Services
          </a>
          <a href="#faqs" className="font-medium hover:text-gray-600 text-xl">
            FAQs
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 items-center hidden md:flex">
          <a
            href="#why-us"
            className="text-white font-medium hover:text-gray-300 text-xl"
          >
            Why us?
          </a>
          <a
            href="#portfolio"
            className="text-white font-medium hover:text-gray-300 text-xl"
          >
            Portfolio
          </a>
          <a
            href="#services"
            className="text-white font-medium hover:text-gray-300 text-xl"
          >
            Services
          </a>
          <a
            href="#faqs"
            className="text-white font-medium hover:text-gray-300 text-xl"
          >
            FAQs
          </a>
        </div>

        {/* Button */}
        <button className="bg-[#00DAC6] text-black px-6 py-3 text-xl rounded-full hover:bg-gray-200 relative font-semibold hidden md:flex items-center">
          <span className="whitespace-nowrap">Contact Us</span>{" "}
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
