import React from "react";
import { 
  FaClipboardList, 
  FaBullseye, 
  FaPaintBrush, 
  FaCog, 
  FaChartLine, 
  FaHeadset 
} from "react-icons/fa";

const features = [
  {
    icon: <FaClipboardList size={50} />,
    title: "Planning",
    desc: "Some researchers regard the evolution of forethought - the capacity to think ahead - as a prime mover in human evolution."
  },
  {
    icon: <FaBullseye size={50} />,
    title: "Strategy",
    desc: "Crafting innovative pathways to success, our agency strategizes with precision, foresight, and a winning mindset. Let's conquer together."
  },
  {
    icon: <FaPaintBrush size={50} />,
    title: "Designing",
    desc: "Elevate your brand with stunning designs that captivate, inspire, and leave a lasting impression. Welcome to our design agency."
  },
  {
    icon: <FaCog size={50} />,
    title: "Development",
    desc: "Unlocking potential, shaping innovation, and driving growth. Experience transformative development with our agency's expert guidance."
  },
  {
    icon: <FaChartLine size={50} />,
    title: "Reporting",
    desc: "Delivering accurate, timely, and insightful reports that empower your agency with actionable intelligence and strategic advantage."
  },
  {
    icon: <FaHeadset size={50} />,
    title: "Support",
    desc: "Discover the power of support. Let our agency be your guiding light towards success and growth. We are happy to support you."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">WHY CHOOSE US</h2>
        <div className="flex items-center justify-center space-x-2 mb-10">
          <div className="w-28 h-[2px] bg-black"></div>
          <span className="text-xl text-red-600">▼</span>
          <div className="w-28 h-[2px] bg-black"></div>
        </div>

        {/* Top row: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.slice(0, 4).map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-8 flex flex-col items-center text-center">
              <div className="text-black mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom row: centered 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-1">
          {/* We create 4 columns at lg but only fill center two to match layout */}
          <div className="hidden lg:block" /> {/* empty left spacer on large screens */}
          {features.slice(4).map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-8 flex flex-col items-center text-center">
              <div className="text-black mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="hidden lg:block" /> {/* empty right spacer on large screens */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
