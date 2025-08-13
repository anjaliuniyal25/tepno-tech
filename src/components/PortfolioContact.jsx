import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const PortfolioContact = () => {
  return (
    <>
    <section className="bg-white py-12 px-6 md:px-20 relative">
      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Contact Details */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Contact Details
          </h2>
          <div className="flex justify-center items-center mb-6">
            <span className="w-20 h-[2px] bg-black mx-2"></span>
            <span className="text-xl text-red-600">▼</span>
            <span className="w-20 h-[2px] bg-black mx-2"></span>
          </div>

          {/* Details List */}
          <div className="space-y-5 text-gray-700">
            <p className="flex items-start gap-3">
              <FaPaperPlane className="text-orange-500 text-2xl" />
              75/11, Rajpur Road, Ravindrapuri, Near Raj Plaza, Dilaram Chowk,
              Dehradun, Uttarakhand
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500 text-2xl" /> +91-88991
              69539
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-orange-500 text-2xl" /> +91-7037234808
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500 text-2xl" />{" "}
              info@sarcTechnology.com
            </p>
            <p className="flex items-center gap-3">
              <FaClock className="text-orange-500 text-2xl" /> Monday -
              Saturday: 9:30 - 6:30
            </p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4951747374325!2d78.05001307540246!3d30.33687407477769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390928dd82494539%3A0x560bf2bedb5ee33a!2sSARC%20TECHNOLOGY-%7C%7C%20Best%20digital%20marketing%20company%20in%20Uttarakhand%20%7C%7C%20Best%20digital%20marketing%20company%20in%20Dehradun%20%7C%7C!5e0!3m2!1sen!2sin!4v1754632945187!5m2!1sen!2sin"
              allowFullScreen
              referrerPolicy="no-referrer"
              style={{ border: 0, width: "100%", height: "300px" }}
              title="Contact Map"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Submit Your Query
          </h2>
          <div className="flex justify-center items-center mb-6">
            <span className="w-20 h-[2px] bg-black mx-2"></span>
            <span className="text-xl text-red-600">▼</span>
            <span className="w-20 h-[2px] bg-black mx-2"></span>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <a
          href="tel:+918899169539"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaPhoneAlt className="text-white text-xl" />
        </a>
        <a
          href="https://wa.me/917037234808"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 p-3 rounded-full shadow-lg hover:bg-green-500 transition"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
      </div>
      
    </section>
    <div className="text-base text-center py-12 text-white w-full h-20 bg-blue-950">Copyright © 2025 | All Rights Reserve SARC Technology</div>
    </>
  );
};

export default PortfolioContact;
