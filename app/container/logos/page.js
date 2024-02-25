import React from "react";

const Logos = () => {
  return (
    <div className="bg-gray-900 text-white py-6 px-6 relative z-0">
      {/* White line above logos */}
      <div className="h-px bg-white mb-4"></div>

      {/* Logos container */}
      <div className="flex justify-center lg:justify-between items-center flex-wrap lg:mb-4 max-w-7xl mx-auto gap-4">
        <img
          src="/assets/kaizen 1.png"
          alt="Logo 1"
          className="w-45 h-20 mb-4 lg:mr-4"
        />
        <img
          src="/assets/logo-black 1.png"
          alt="Logo 2"
          className="w-60 h-20 mb-4 lg:mr-4"
        />
        <img
          src="/assets/polygon 1.png"
          alt="Logo 3"
          className="w-60 h-20 mb-4 lg:mr-4"
        />
        <img
          src="/assets/unicorn 1.png"
          alt="Logo 4"
          className="w-50 h-30 mb-4 lg:mr-4"
        />
      </div>

      {/* White line below logos */}
      <div className="h-px bg-white"></div>
    </div>
  );
};

export default Logos;
