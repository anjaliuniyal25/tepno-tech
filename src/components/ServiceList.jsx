import React from "react";
import {
  FaLaptopCode,
  FaEnvelope,
  FaUsers,
  FaWhatsapp,
  FaSearch,
  FaMagnet,
} from "react-icons/fa";
import bgImage from "../assets/pbg.webp";

const services = [
  {
    icon: <FaLaptopCode size={60} />,
    title: "Website Designing",
    desc: "Transform your online presence with our professional website designing service. Sleek , modern designs that engage,impress, and drive results.",
  },
  {
    icon: <FaEnvelope size={60} />,
    title: "Digital Marketing",
    desc: "Empowering your brand with innovative digital strategies and creativity-let's grow your online presence together.",
  },
  {
    icon: <FaUsers size={60} />,
    title: "Social Media Marketing",
    desc: "Transform your online presence with our professional website designing service. Sleek , modern designs that engage,impress, and drive results. ",
  },
  {
    icon: <FaWhatsapp size={60} />,
    title: "WhatsApp Marketing",
    desc: "Boost your business with our professional Whatsapp marketing service. Reach your target audience and drive sales with effective messaging strategies.",
  },
  {
    icon: <FaSearch size={60} />,
    title: "Search Engine Marketing",
    desc: "Transform your online presence with our professional website designing service. Sleek , modern designs that engage,impress, and drive results.",
  },
  {
    icon: <FaMagnet size={60} />,
    title: "Lead Generation",
    desc: "Unlock your business's potential with our expert lead generation services. Drive growth,increase sales, and maximize ROI with targeted leads.",
  },
];

export default function ServicesList() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12 drop-shadow-lg tracking-widest">
        SERVICES LIST
         <div className="flex justify-center items-center mt-2">
              <span className="w-28 h-[2px] bg-white mx-2"></span>
              <span className="text-xl text-red-600">▼</span>
              <span className="w-28 h-[2px] bg-white mx-2"></span>
            </div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-10 mx-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-4 border-blue-400 rounded-lg p-6 sm:p-8 bg-transparent shadow-[0_0_15px_rgba(0,123,255,0.8)]"
          >
            {service.icon}
            <h3 className="mt-4 text-lg sm:text-xl font-bold text-center">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm mt-2 text-center font-bold">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
