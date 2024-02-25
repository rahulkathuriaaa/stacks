"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Placeholder data array
const testimonials = [
  {
    description:
      "Don't need our services yet but know someone who might? Just refer our services to someone who needs them. You'll get 8% of the monthly revenue as long as they stay on board. Easy, right?",
    author: "Rina Penber",
    authorTitle: "CTO",
    companyLogo: "/assets/polygon.png", // Replace with actual path
    avatar: "/assets/net2.png", // Replace with actual path
  },
  {
    description:
      " our services yet but know someone who might? Just refer our services to someone who needs them. You'll get 8% of the monthly revenue as long as they stay on board. Easy, right?",
    author: " Penber",
    authorTitle: "CTO",
    companyLogo: "/assets/polygon.png", // Replace with actual path
    avatar: "/assets/net2.png", // Replace with actual path
  },
  // ... more testimonials
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="p-10 text-center text-white">
      <span className="text-xl font-bold text-[#7975FE]">Testimonials</span>
      <br />
      <span className="text-5xl text-white ">Good things people said</span>
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 p-7 md:text- md:items-start">
        <div className="md:w-1/5 relative">
          <div className="flex flex-col items-center text-center md:text-start md:items-start mb-2">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].author}
              className="rounded-full w-20 h-20 mb-2"
            />
            <div>
              <p className="font-semibold text-lg">
                {testimonials[current].author}
              </p>
              <p className="text-center md:text-start">
                {testimonials[current].authorTitle}
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <img
            src={testimonials[current].companyLogo}
            alt="Company Logo"
            className="h-8 mt-4"
          />
        </div>
        <div className="p-5 md:w-2/4 md:ml-4 text-left font-InriaSans">
          <p className="mb-6 text-lg leading-7 overflow-hidden overflow-ellipsis line-clamp-3 italic">
            {testimonials[current].description}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="text-white mr-2" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="text-white ml-2" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
