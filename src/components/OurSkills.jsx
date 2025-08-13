import React from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import bg from '../assets/works72.webp';

const skills = [
  { name: "Website Development", percentage: 75 },
  { name: "Digital Media Marketing", percentage: 85 },
  { name: "SEO Services", percentage: 91 },
  { name: "Social Media Marketing", percentage: 67 },
];

const OurSkills = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
     style={{
  backgroundImage: `url(${bg})`,
}}

    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold">Our Skills</h2>
              <div className="flex justify-center items-center">
              <span className="w-28 h-[2px] bg-white mx-1"></span>
              <span className="text-xl text-red-600">▼</span>
              <span className="w-28 h-[2px] bg-white mx-2"></span>
            </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 my-20">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    textSize: "16px",
                    pathColor: "#f59e0b", // orange
                    trailColor: "#fff",
                    strokeLinecap: "round",
                  })}
                />
              </div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
