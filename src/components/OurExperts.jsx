import React from "react";
import amit from '../assets/amits.webp'
import himanshu from '../assets/hp.webp'
import manish from '../assets/mr.webp'
import sheetal from '../assets/sheetal.webp'
import akansha from '../assets/aksnha.webp'
import aditi from '../assets/aditi.webp'
import kamaksha from '../assets/team-8.webp'


const team = [
  {
    name: "AMIT SHARMA",
    role: "SENIOR EXECUTIVE",
    img: amit,
  },
  {
    name: "HIMANSHU PUNDIR",
    role: "WEB DEVELOPER",
    img:himanshu,
  },
  {
    name: "MANISH RAWAT",
    role: "WEB DEVELOPER",
    img: manish,
  },
  {
    name: "SHEETAL",
    role: "DIGITAL MARKETING",
    img: sheetal,
  },
  {
    name: "AKANSHA",
    role: "DIGITAL MARKETING",
    img: akansha,
  },
  {
    name: "ADITI",
    role: "DIGITAL MARKETING",
    img:aditi,
  },
  {
    name: "KAMAKSHA",
    role: "WEB DEVELOPER",
    img: kamaksha,
  },
];

const OurExperts = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-3xl font-bold text-gray-900">Our Experts</h2>
        <div className="flex items-center justify-center mt-2 mb-10 space-x-2">
          <div className="flex justify-center items-center">
              <span className="w-28 h-[2px] bg-black mx-2"></span>
              <span className="text-xl text-red-600">▼</span>
              <span className="w-28 h-[2px] bg-black mx-2"></span>
            </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-52 h-50 object-cover"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text- fsmont-medium text-gray-500 tracking-wide uppercase">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperts;
