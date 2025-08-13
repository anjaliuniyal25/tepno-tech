import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import c1 from '../assets/c1.webp';
import c2 from '../assets/c2.webp';
import c3 from '../assets/c3.webp';
import c4 from '../assets/c4.webp';

const Career = () => {
  const jobs = [
    { title: "Digital Marketing Executive", img: c1 },
    { title: "SEO Executive", img: c2 },
    { title: "Web Developer", img: c3 },
    { title: "Sales Executive", img: c4 },
  ];

  return (
    <>
      <Header
        title="Join The Leading Digital Marketing & Web Development Company in Dehradun"
        breadcrumb="Career"
      />

      <div className="px-4 sm:px-8 md:px-12 lg:mx-20 py-12">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-snug">
          We are hiring! <br className="hidden sm:block" />
          On the following positions:
        </h2>

        {/* Job List */}
        <div className="divide-y divide-gray-200">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 py-6 hover:bg-blue-700 transition-colors rounded-md"
            >
              <img
                src={job.img}
                alt={job.title}
                className="w-full sm:w-60 h-40 sm:h-20 object-cover rounded"
              />
              <span className="text-xl sm:text-2xl md:text-4xl font-semibold text-center sm:text-left">
                {job.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-500 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6">
          
          {/* Address */}
          <div className="flex items-center gap-4 bg-blue-500 bg-opacity-50 p-6 sm:p-8 rounded-xl">
            <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
            </div>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              75/11, Rajpur Road, Ravindrapuri, Dehradun, Uttarakhand
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-blue-400 bg-opacity-50 p-6 rounded-xl">
            <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 
                  2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                  4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold break-all">
              hr@sarctechnology.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-blue-400 bg-opacity-50 p-6 rounded-xl">
            <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 
                  1.2-.3 1.3.4 2.7.7 4.1.7.7 0 1.3.6 
                  1.3 1.3V20c0 .7-.6 1.3-1.3 
                  1.3C10.4 21.3 2.7 13.6 2.7 4.3 
                  2.7 3.6 3.3 3 4 3h3.5c.7 0 1.3.6 
                  1.3 1.3 0 1.4.2 2.8.7 4.1.1.4 0 
                  .9-.3 1.2l-2.6 2.2z"/>
              </svg>
            </div>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              +91 7037234808
            </p>
          </div>

          {/* Live Chat */}
          <div className="flex items-center gap-4 bg-blue-400 bg-opacity-50 p-6 rounded-xl">
            <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 
                  2v20l4-4h14c1.1 0 2-.9 
                  2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              Live Chat
            </p>
          </div>
        </div>
      </div>

      <Contact
        bgMain="#0A0B0C"
        bgIcon="#161718"
        bgPage="#ffffff"
        textColor="#ffffff"
        focusColor="#6C4DF7"
        buttonBg="#6C4DF7"
        buttonHover="#5A3FE0"
        buttonText="#ffffff"
      />

      <Footer sarcColor="text-blue-700" />
    </>
  );
};

export default Career;
