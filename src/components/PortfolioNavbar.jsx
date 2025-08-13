import React from "react";
import icon from "../assets/icon.webp"
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";

const PortfolioNavbar = () => {
  return (
    <nav
      className="w-full "
      style={{ backgroundColor: "#f2f2f2" }} 
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-24">
        
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={icon} 
            alt="SARC Technology Logo"
            className="h-14 w-auto"
          />
          <span className="text-black font-medium text-xl hover:text-orange-600">SARC Technology</span>
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-6 ml-60">
          {/* Button */}
          <a
            href="/"
            className="px-7 py-2 rounded-full text-white font-semibold bg-blue-950 hover:bg-orange-600"
           
          >
            Visit Main Website
          </a>

          {/* Contact */}
          <div className="flex flex-row text-base font-semibold">
            <a
              href="mailto:info@sarcTechnology.com"
              className="text-blue-500  hover:text-orange-600"
            >
              info@sarcTechnology.com
            </a>
            <span className="text-blue-500 hover:text-orange-600">+91- 88991 69539</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white bg-orange-600 rounded-sm hover:bg-blue-800"><FaInstagram size={25} /></a>
          <a href="#" className=" text-white bg-orange-600 rounded-sm hover:bg-blue-800"><FaFacebookF size={25} /></a>
          <a href="#" className="text-orange-600 hover:bg-blue-800"><FaGoogle size={25} /></a>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
