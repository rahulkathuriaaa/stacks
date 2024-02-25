import React from "react";

const portfolioItems = [
  {
    id: 1,
    title: "IKnowSpots",
    description:
      "IKnowSpots is a ticketing platform for Web3 for event and NFT and event staking",
    image: "/assets/Frame10.png", // Replace with actual image path
    category: "UI, UX, Development",
  },
  {
    id: 2,
    title: "IKnowSpots",
    description:
      "IKnowSpots is a ticketing platform for Web3 for event and NFT and event staking",
    image: "/assets/Frame11.png", // Replace with actual image path
    category: "UI, Marketing",
  },
  {
    id: 3,
    title: "IKnowSpots",
    description:
      "IKnowSpots is a ticketing platform for Web3 for event and NFT and event staking",
    image: "/assets/Frame 10.png", // Replace with actual image path
    category: "UI, UX, Development",
  },
  {
    id: 3,
    title: "IKnowSpots",
    description:
      "IKnowSpots is a ticketing platform for Web3 for event and NFT and event staking",
    image: "/assets/Frame 12.png", // Replace with actual image path
    category: "UI, UX, Development",
  },
  // ... other portfolio items
];

const PortfolioComponent = () => {
  return (
    <div className="bg-gray-900 text-white z-0 relative">
      <div className="text-center py-10">
        <span className="text-2xl font-bold font-hero text-[#7975FE]">
          Portfolio
        </span>
        <br />
        <h2 className="text-5xl font-bold">Our work in Web3</h2>
      </div>
      <div className="grid md:grid-cols-1 gap-4 relative">
        {portfolioItems.map((item, index) => (
          <div key={item.id} className="group sticky top-0 bg-[#111827]">
            {/* Desktop view */}
            <div
              className={`hidden md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="overflow-hidden w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="transform group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4 w-1/2 flex flex-col justify-between pt-12">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] flex-1 bg-white"></span>
                  <span className="text-sm text-white font-semibold">
                    {item.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-6xl font-bold my-2">{item.title}</h3>
                  <p className="text-4xl  my-2">{item.description}</p>
                  <button className="mt-4 inline-block bg-[#00DAC6] hover:bg-[#00DAC6] rounded-full px-6 py-2 transition duration-300 text-black">
                    View work
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            {/* Mobile view */}
            <div className="md:hidden">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full transform group-hover:scale-110 transition duration-300 object-cover"
                  style={{ maxHeight: "50vh" }}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] flex-1 bg-white"></span>
                  <span className="text-sm text-white font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold my-2">{item.title}</h3>
                <p>{item.description}</p>
                <button className="mt-4 bg-[#00DAC6] hover:bg-[#019082] rounded-full px-6 py-2 transition duration-300">
                  View work
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="md:hidden bg-gray-700 h-px w-3/4 mx-auto my-8"></div>{" "}
        {/* Gray line */}
      </div>
    </div>
  );
};

export default PortfolioComponent;
