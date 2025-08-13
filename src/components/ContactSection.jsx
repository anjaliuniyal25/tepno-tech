import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 px-6 py-16 max-w-7xl mx-auto">
      {/* Left: Contact Info */}
      <div>
        <h3 className="text-purple-600 font-semibold mb-2">Contact Us</h3>
        <h2 className="text-3xl font-bold mb-8">
          Get in Touch with TEPNO TECH
        </h2>

        <div className="space-y-8">
          {/* Phone */}
          {/* <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-purple-600 p-4 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone Number</p>
              <p className="font-semibold text-lg">+91-8899169539</p>
            </div>
          </div> */}

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-purple-600 p-4 rounded-full">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email Address</p>
              <p className="font-semibold text-lg">info@tepnoTech.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 text-purple-600 p-4 rounded-full">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Delhi,India
              </p>
            </div>
          </div>

        </div>
        
      </div>

      {/* Right: Contact Form */}
      <div className="bg-white p-8 shadow-xl rounded-2xl">
        <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
        <p className="text-sm text-gray-500 mb-6">
          *All fields are mandatory. Kindly fill the correct data
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-purple-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md focus:outline-purple-500"
          />
          <select className="w-full p-3 border rounded-md text-gray-500">
            <option>Select Service</option>
            <option>Digital Marketing</option>
            <option>Web Development</option>
            <option>SEO</option>
          </select>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Submit <FiArrowUpRight/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
