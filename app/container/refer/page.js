import React from 'react';

const Refer = () => {
  return (
    <div id="services" className="flex gap-8 md:gap-8 justify-center max-w-9xl p-4 mx-auto items-center my-12">
      <div className="max-w-9xl mx-auto p-6 bg-[#7975FE] text-white rounded-2xl shadow-md font-serif">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-xl md:text-7xl font-semibold font-display text-center mb-4">Know someone who might<br/> find our services useful?</h2>
        </div>
        <p className="mb-8 text-lg md:text-4xl font-display text-center p-6">
          Don't need our services yet but know someone who might? Just<br/> refer our services to someone who needs them. You'll get 8% of<br/> the monthly revenue as long as they stay on board. Easy, right?
        </p>
        <div className="flex justify-center p-4">
  <button className="flex items-center justify-center px-6 py-3 bg-[#00DAC6] text-black rounded-full hover:bg-[#00DAC6] transition-colors text-xl">
    <span>Join as referrer</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

      </div>
    </div>
  );
}

export default Refer;

