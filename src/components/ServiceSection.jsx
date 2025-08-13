import React, { useState } from "react";
import brand1 from "../assets/brand-img2.webp";
import brand2 from "../assets/brand-img3.webp";
import brand3 from "../assets/brand-img4.webp";
import brand4 from "../assets/brand-img5.webp";
import brand5 from "../assets/brand-img6.webp";
import brand6 from "../assets/brand-img8.webp";

function ServiceSection() {
  const [isRunningRow1, setIsRunningRow1] = useState(true);
  const [isRunningRow2, setIsRunningRow2] = useState(true);

  return (
    <section className="bg-gray-200 w-full h-fit overflow-hidden">
      {/* First Row */}
      <div
        onClick={() => setIsRunningRow1(!isRunningRow1)}
        className={`flex gap-10 items-center py-10  ${
          isRunningRow1 ? "animate-marquee" : ""
        }`}
      >
        {[1, 2].map((loop) => (
          <React.Fragment key={`row1-${loop}`}>
            <img src={brand1} alt="" className="h-12" />
            <p className="text-2xl font-bold">Branding Design</p>
            <img src={brand2} alt="" className="h-12" />
            <p className="text-2xl font-bold">Digital Marketing</p>
            <img src={brand1} alt="" className="h-12" />
            <p className="text-2xl font-bold">Branding Design</p>
            <img src={brand2} alt="" className="h-12" />
            <p className="text-2xl font-bold">Digital Marketing</p>
          </React.Fragment>
        ))}
      </div>

      {/* Second Row */}
      <div
        onClick={() => setIsRunningRow2(!isRunningRow2)}
        className={`flex gap-10 items-center py-10  ${
          isRunningRow2 ? "animate-marque" : ""
        }`}
      >
        {[1, 2].map((loop) => (
          <React.Fragment key={`row2-${loop}`}>
            <img src={brand3} alt="" className="h-12" />
            <p className="text-2xl font-bold">SEO Strategy</p>
            <img src={brand4} alt="" className="h-12" />
            <p className="text-2xl font-bold">Web Development</p>
            <img src={brand6} alt="" className="h-12" />
            <p className="text-2xl font-bold">Saas Landing</p>
            <img src={brand5} alt="" className="h-12" />
            <p className="text-2xl font-bold">Web Development</p>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
