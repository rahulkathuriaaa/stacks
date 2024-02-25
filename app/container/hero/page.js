"use client";
import React, { useRef } from "react";

const Hero = () => {
  // const ref = useRef();
  // const handleMouseMove = (e) => {
  //   // console.log(e.clientX - 48, e.clientY - 48);
  //   console.log(
  //     ((e.clientX - 96) / (ref.current.offsetHeight - 96)) * 20,
  //     ((e.clientY - 96) / (ref.current.offsetWidth - 96)) * 20
  //   );
  //   // console.log(ref.current.offsetHeight, ref.current.offsetWidth);
  // };

  return (
    <div className="h-screen p-6 md:p-12 relative z-0">
      <div
        // ref={ref}
        // onMouseMove={handleMouseMove}
        className="bg-[#7975fe] flex justify-center items-center relative h-full rounded-2xl flex-col text-center gap-8 group overflow-hidden"
      >
        <div className="bg-white h-[1px] w-full absolute top-20 left-0"></div>
        {/* Image 1 */}
        <img
          src="/assets/image 2.png"
          alt="Image 1"
          className="absolute left-0 bottom-0 h-4/5 md:z-10 opacity-70 md:opacity-100 group-hover:scale-110 transition-transform"
        />
        {/* Image 2 */}
        <img
          src="/assets/image 1.png"
          alt="Image 2"
          className="absolute right-0 bottom-0 h-4/5 md:z-10 opacity-70 md:opacity-100 group-hover:scale-110 transition-transform"
        />
        <div className="text-white text-4xl md:text-8xl font-bold z-0 ">
          {/* Added mt-32 for larger screens */}
          <h2 className="font-hero font-light">
            A web3 studio that
            <br /> actually brings results!
          </h2>
          {/* Adjusted text */}
        </div>
        <p className="text-white text-xl md:text-4xl z-0">
          Unlimited design, marketing, and development
          <br /> requests for a fixed monthly plan. <br />
          Pause or cancel at any time!
        </p>
      </div>
    </div>
  );
};

export default Hero;
