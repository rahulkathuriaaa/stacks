import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Stacks Text */}
        <div className="text-white text-3xl md:text-6xl font-bold md:mr-auto mb-4 md:mb-0 md:order-1">
          Stacks
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-2xl md:text-5xl md:order-3">
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="max-w-7xl mx-auto mt-4 md:mt-0 md:order-2">
          <div className="flex justify-center space-x-6 text-xl md:text-2xl flex-wrap">
            <a href="#why-us" className="text-white hover:text-gray-300">
              Why us?
            </a>
            <a href="#portfolio" className="text-white hover:text-gray-300">
              Portfolio
            </a>
            <a href="#services" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#faqs" className="text-white hover:text-gray-300">
              FAQs
            </a>
          </div>
          <div className="flex justify-center space-x-6 text-xl md:text-2xl mt-4 px-6">
            <a
              href="#privacy-policy"
              className="text-white hover:text-gray-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms-and-conditions"
              className="text-white hover:text-gray-300"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>

      {/* White Line */}
      <hr className="border-white mt-8" />

      {/* Footer Text */}
      <div className="text-center mt-8">
        <p>© All rights reserved by Stacks</p>
      </div>
    </footer>
  );
};

export default Footer;
