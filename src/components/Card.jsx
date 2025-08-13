import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import React, { useState } from "react";
import Btn from "./Btn";
import Form from "./Form";

const Card = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="w-full h-fit my-10 px-4 md:px-10 lg:px-28">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-green-950 mb-10 leading-snug">
        <span className="text-black">Best</span> Digital Marketing{" "}
        <span className="text-black">Company</span> in Delhi –{" "}
        <br className="hidden md:block" />
        TEPNO TECH
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-yellow-100 px-6 py-8 rounded-md transition-all duration-300 hover:-translate-y-2">
          <span className="text-2xl md:text-3xl font-semibold">01</span>
          <img
            src={img1}
            alt="Digital Marketing"
            className="w-full h-auto mt-4"
          />
          <a
            href="#"
            className="text-black text-xl md:text-2xl font-bold block mt-4"
          >
            Digital Marketing
          </a>
          <p className="text-sm md:text-base text-gray-700 mt-4">
            Grow your business, brand or website with Digital Marketing, that
            gives you an extraordinary result.
          </p>
          <Btn
            onClick={() => setShowPopup(true)}
            label="Buy Now"
            bgColor="bg-gray-100"
            textColor="text-black"
          />
        </div>

        <div className="bg-purple-200 px-6 py-8 rounded-md transition-all duration-300 hover:-translate-y-2">
          <span className="text-2xl md:text-3xl font-semibold">02</span>
          <img src={img2} alt="SEO" className="w-full h-auto mt-4" />
          <a
            href="#"
            className="text-black text-xl md:text-2xl font-bold block mt-4"
          >
            Search Engine Optimization
          </a>
          <p className="text-sm md:text-base text-gray-700 mt-4">
            If you appear first in search engines then you grow & succeed first!
          </p>
          <Btn
            onClick={() => setShowPopup(true)}
            label="Buy Now"
            bgColor="bg-gray-100"
            textColor="text-black"
          />
        </div>

        <div className="bg-green-200 px-6 py-8 rounded-md transition-all duration-300 hover:-translate-y-2">
          <span className="text-2xl md:text-3xl font-semibold">03</span>
          <img src={img3} alt="Web Dev" className="w-full h-auto mt-4" />
          <a
            href="#"
            className="text-black text-xl md:text-2xl font-bold block mt-4"
          >
            Web Development
          </a>
          <p className="text-sm md:text-base text-gray-700 mt-4">
            Our unique and responsive web design enables your website to attract
            more customers.
          </p>
          <Btn
            onClick={() => setShowPopup(true)}
            label="Buy Now"
            bgColor="bg-gray-100"
            textColor="text-black"
          />
        </div>

        <div className="bg-yellow-100 px-6 py-8 rounded-md transition-all duration-300 hover:-translate-y-2">
          <span className="text-2xl md:text-3xl font-semibold">04</span>
          <img
            src={img4}
            alt="Social Media"
            className="w-full h-auto mt-4 rounded-t-full"
          />
          <a
            href="#"
            className="text-black text-xl md:text-2xl font-bold block mt-4 text-center"
          >
            Social Media Marketing
          </a>
          <p className="text-sm md:text-base text-gray-700 mt-4">
            Social Media Marketing is one of the best platforms to target your
            desired audience with desired results.
          </p>
          <Btn
            onClick={() => setShowPopup(true)}
            label="Buy Now"
            bgColor="bg-gray-100"
            textColor="text-black"
          />
        </div>
      </div>

      {showPopup && <Form onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default Card;
