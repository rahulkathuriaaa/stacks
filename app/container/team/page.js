import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Adarsh",
    role: "Director & BDR",
    image: "/assets/img.png", // Replace with actual image path
    linkedInUrl: "https://www.linkedin.com", // Replace with actual LinkedIn URL
  },
  {
    name: "Rahul",
    role: "Director & CTO",
    image: "/assets/img.png", // Replace with actual image path
    linkedInUrl: "https://www.linkedin.com", // Replace with actual LinkedIn URL
  },
  {
    name: "Parry",
    role: "Designer",
    image: "/assets/img.png", // Replace with actual image path
    linkedInUrl: "https://www.linkedin.com", // Replace with actual LinkedIn URL
  },
  {
    name: "Ansh",
    role: "Blockchain developer",
    image: "/assets/img.png", // Replace with actual image path
    linkedInUrl: "https://www.linkedin.com", // Replace with actual LinkedIn URL
  },
];

const TeamComponent = () => {
  return (
    <div className="text-white p-10 max-w-90 mx-auto">
      <div className="text-center mb-10">
        <div className="text-xl font-bold text-[#7975FE]">Team</div>
        <h1 className="text-5xl font-bold">Meet the brains behind Stacks</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">
        {" "}
        {/* Adjust grid columns for desktop view */}
        {teamMembers.map((member) => (
          <div className="text-center text-white" key={member.name}>
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-2/3 md:w-full h-auto gap-5" // Set width to 2/3 on desktop and full width on mobile
            />
            <h2 className="text-3xl font-bold">{member.name}</h2>
            <p className="mb-2 text-xl">{member.role}</p>
            <a
              href={member.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-2xl"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p>& many others...</p>
      </div>
    </div>
  );
};

export default TeamComponent;
