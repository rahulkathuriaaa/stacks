"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style.css";
import faqs from "./faq";

export default function FAQ() {
  const [openedQues, setOpenedQues] = useState(null);

  return (
    <div id="faqs" className="p-6 mt-10 mx-4">
      <h1 className="text-3xl text-center font-bold text-white py-2">
        <span className="text-2xl text-[#7975FE]">FAQs</span>
        <br />
        <span className="text-5xl text-white">Stuff people usually ask</span>
        <hr className="mt-20 mx-4 border-t border-white" />
      </h1>

      <div className="m-4 ">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={` ${
              openedQues === index ? "text-white" : "text-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2
                className={`text-lg sm:text-base md:text-lg lg:text-2xl xl:text-3xl ${
                  openedQues === index ? "font-bold" : "font-semibold"
                }`}
              >
                {faq.question}
              </h2>
              <button
                className={`w-12 h-12 transition-transform ${
                  openedQues === index ? "text-white rotate-45" : "text-white"
                }`}
                onClick={() =>
                  setOpenedQues((prev) => {
                    if (prev === index) return null;
                    return index;
                  })
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            {openedQues === index && (
              <p className="text-white  text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl animate-showup">
                {faq.answer}
              </p>
            )}
            {/* Add a white line dividing questions */}
            <hr className="my-8 border-t border-white" />
          </div>
          
        ))}
      </div>
    </div>
  );
}
