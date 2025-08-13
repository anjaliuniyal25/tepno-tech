import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/header-bg5.webp";
import girl from '../assets/girl.avif'
import img from "../assets/header-img8.webp";
import bulb from "../assets/lite-icons2.svg";
import sound from "../assets/sound-icons3.svg";
import imgbg from "../assets/header-bg6.webp";
import whatsapp from "../assets/whatsapp.webp";
import telephone from "../assets/telephone.webp";
import element from "../assets/auhtor-img1.webp";
import arrow from "../assets/elements11.svg";
import ScrollAnimate from "./ScrollAnimate";
import image from '../assets/gg-removebg-preview.png'

const Homecontent = () => {
   const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <>
      <section
        className=" text-white w-full md:h-[700px] h-[900px] pt-24 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start">
            {/* Tag Line */}
            <p className="mb-4 px-4 py-1 text-lg font-semibold text-[#ADFF1C] border border-[#ADFF1C] bg-transparent text-center rounded-2xl">
              Top #1 SEO & Marketing Agency
            </p>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-[1.3] mb-4 ">
              Best Company For Digital <br />
              Marketing & Website <br />
              Development.
            </h1>

            {/* Subheading */}
            <ScrollAnimate animation="slideleft">
              <p className="mb-8 text-base font-medium text-gray-200 delay-200">
                PPC Ads, Social Media Marketing & SEO Company
              </p>
            </ScrollAnimate>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <button className="relative overflow-hidden z-0 group px-6 py-3 text-lg font-semibold text-black bg-[#ADFF1C] border border-[#ADFF1C] rounded transition duration-300   hover:-translate-y-2">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Call Now<i className="bx bxs-phone text-lg"></i>
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-0"></span>
              </button>

              <button className="relative overflow-hidden z-0 group px-6 py-3 text-lg font-semibold text-[#ADFF1C] bg-transparent border border-[#ADFF1C] rounded transition duration-300  hover:-translate-y-2 ">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  <Link
                    to="/services"
                    onClick={toggleMenu}
                    className="text-xl font-medium hover:text-lime-400"
                  >
                    Explore More
                  </Link>
                  <i className="bx bx-right-arrow-alt text-lg -rotate-45"></i>
                </span>
                <span className="absolute inset-0 bg-[#ADFF1C] scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-0"></span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex justify-center items-center ">
            {/* Background Image Behind Girl */}
            <img
              src={imgbg}
              alt="Background Shape"
              className="absolute w-[600px] top-[12px] md:w-[650px] z-0 md:top-20"
            />

            {/* Girl Image */}
            <img
              src={image}
              alt="Girl"
              className=" relative w-[600px] md:w-[600px] z-10 top-[25px] md:top-[105px]"
            />
          </div>
          <img
            src={sound}
            className="hidden lg:block absolute top-40 right-[600px] w-50 animate-wiggle"
            alt="sound"
          />
          <img
            src={bulb}
            className=" hidden lg:block absolute bottom-100 right-20 w-30 animate-wiggle"
            alt="bulb"
          />
          <img
            src={element}
            className="  hidden lg:block absolute bottom-10 right-[630px] w-50 animate-float"
            alt="seo"
          />
          <img
            src={arrow}
            className=" hidden lg:block absolute  bottom-[220px] right-[650px] w-50 "
            alt="arrow"
          />
        </div>
      </section>

      {/* <div className="fixed bottom-20 left-6 flex flex-col items-end gap-4 z-50">
        
          <a href="https://www.whatsapp.com/">
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-16 h-16 hover:scale-110 transition duration-300"
          />
        </a>
        
        <a href="#">
          <img
            src={telephone}
            alt="Call"
            className="w-16 h-16 hover:scale-110 transition duration-300"
          />
        </a>
      </div> */}
    </>
  );
};

export default Homecontent;
