import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = ({
  bgMain = "#0c3e3e",
  bgIcon = "#144a4a",
  bgPage = "#f9fafa",
  textColor = "#ffffff",
  focusColor = "#ADFF1C",
  buttonBg = "#ADFF1C",
  buttonHover = "#a2f012",
  buttonText = "#000000",
}) => {
  const hoverColor = "#ADFF1C";

  return (
    <div
      className="flex flex-col lg:flex-row justify-center gap-20 px-6 lg:px-20 py-12"
      style={{ backgroundColor: bgPage }}
    >
      {/* Left: Contact Info */}
      <div
        className="rounded-lg p-8 w-full lg:w-1/2 shadow-lg"
        style={{ backgroundColor: bgMain, color: textColor }}
      >
        <h2 className="text-2xl font-bold mb-8">Contact Info</h2>

        <div className="flex items-start gap-5 mb-16">
          <div
            className="p-4 rounded-full transition-colors duration-300"
            style={{ backgroundColor: bgIcon }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = hoverColor)
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgIcon)}
          >
            <FaMapMarkerAlt size={30} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Location</h3>
            <p className="text-sm">
              <a
                href="https://maps.google.com/?q=Delhi, India"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delhi, <br />
                India
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div
            className="p-4 rounded-full transition-colors duration-300"
            style={{ backgroundColor: bgIcon }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = hoverColor)
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgIcon)}
          >
            <FaEnvelope size={25} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email Address</h3>
            <p className="text-sm">
              <a href="mailto:info@tepnoTech.com">info@tepnoTech.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-sm text-gray-600 mb-6">
          *All fields are mandatory. Kindly fill the correct data
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2`}
            style={{ "--tw-ring-color": focusColor }}
          />
          <input
            type="email"
            placeholder="Email"
            className={`w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2`}
            style={{ "--tw-ring-color": focusColor }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className={`w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2`}
            style={{ "--tw-ring-color": focusColor }}
          />
          <select
            className={`w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2`}
            style={{ "--tw-ring-color": focusColor }}
          >
            <option>Select Service</option>
            <option>Web Development</option>
            <option>SEO</option>
            <option>Digital Marketing</option>
          </select>
          <button
            type="submit"
            className="px-6 py-3 rounded-md font-semibold transition duration-300"
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHover)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonBg)}
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
