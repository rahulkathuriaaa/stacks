"use client";
import React, { useState, useEffect } from "react";

const WhyComponent = () => {
  const [visibleLines, setVisibleLines] = useState({
    line1: true,
    line2: true,
    line3: true,
  });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const lines = document.querySelectorAll(".text-line");
  //     lines.forEach((line, index) => {
  //       const rect = line.getBoundingClientRect();
  //       if (rect.top < window.innerHeight && rect.bottom > 0) {
  //         setVisibleLines((prevState) => ({
  //           ...prevState,
  //           [`line${index + 1}`]: true,
  //         }));
  //       } else {
  //         setVisibleLines((prevState) => ({
  //           ...prevState,
  //           [`line${index + 1}`]: false,
  //         }));
  //       }
  //     });
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="relative -z-10 hidden md:block">
      <div className="sticky h-0 w-full left-0 top-0">
        <div
          // style={{
          //   background: "linear-gradient(0deg, white, transparent, white);",
          // }}
          className="h-screen w-full top-0 left-0 absolute text-white flex items-center justify-center bg-gradient-to-b from-[#111827] via-transparent to-[#111827]"
        ></div>
      </div>
      <div className=" bg-gray-900 text-white py-10 px-6">
        <div className="mx-auto max-w-2xl flex justify-center">
          <div className="w-20%"></div>
          <div className="w-60%">
            <span className="text-xl font-bold text-[#7975FE] text-center block mb-4">
              Why us?
            </span>
            <h2 className="text-7xl font-bold mb-6 text-center">
              What we have that others don’t
            </h2>
            <div
              className={`text-3xl leading-relaxed text-center ${
                visibleLines.line1
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-0"
              }`}
              id="line1"
            >
              <p className="text-line">
                We’re not your typical run-of-the-mill freelancer or design
                agency. I'm a wild one, and I dare to be different. Let me
                introduce you to my fabulous subscription service that will make
                you shout "hallelujah"!
              </p>
            </div>
            <div
              className={`text-3xl leading-relaxed mt-4 text-center ${
                visibleLines.line2
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-0"
              }`}
              id="line2"
            >
              <p className="text-line">
                You sign up for our monthly retainer, and bam! You open the
                gates to a world of unlimited design requests. That's right,
                folks. Whether you need a jaw-dropping logo, attention-grabbing
                print designs, a website that converts like crazy, or a powerful
                Webflow site, I've got your back.
              </p>
            </div>
            <div
              className={`text-3xl leading-relaxed mt-4 text-center ${
                visibleLines.line3
                  ? "opacity-100 duration-1000"
                  : "opacity-0 duration-0"
              }`}
              id="line3"
            >
              <p className="text-line">
                Say goodbye to restrictions and fear of subpar artwork. The
                subscription service is all about setting your imagination free
                and letting me do the magic.
              </p>
            </div>
          </div>
          <div className="w-20%"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyComponent;
