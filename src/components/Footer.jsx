import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaPinterestP,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = ({ sarcColor = "text-lime-400" }) => {
  return (
    <footer className="bg-white text-gray-800 px-8 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-3xl font-bold">
            <span className={`${sarcColor}`}>TEPNO</span> TECH
          </h2>
          <ul className="mt-4 space-y-2 text-base text-gray-600 ">
            <li>Digital Marketing agency</li>
            <li>SEO Company in Delhi</li>
            <li>Website Development</li>
            <li>Web Hosting</li>
          </ul>
          {/* <div className="flex flex-wrap gap-3 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaInstagram />} /></a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaGoogle />} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaFacebookF />} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaTwitter />} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaLinkedinIn />} /></a>
            <a href="https://wa.me/918899169539" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaWhatsapp />} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaYoutube />} /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><IconWrapper icon={<FaPinterestP />} /></a>
          </div> */}
        </div>

        {/* Column 2 - More Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">More Services</h3>
          <ul className="space-y-2 text-base text-gray-600">
            <li>Ads Management Services</li>
            <li>Social Media Marketing</li>
            <li>ONLINE Marketing</li>
            <li>Best Digital Marketing Company</li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base text-gray-600">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            {/* <li><Link to="/career">Career</Link></li>
            <li><Link to="/blogs">Our Blogs</Link></li> */}
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Have a Questions?</h3>
          <ul className="space-y-3 text-base text-gray-600">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-xl" />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delhi,India
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <a href="mailto:info@technoTech.com">info@tepnoTech.com</a>
            </li>
            {/* <li className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+918899169539">+91-8899169539</a>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t mt-10 pt-4 text-center text-base text-gray-500">
        © Copyright 2012 - 2025. All rights reserved{" "}
        <strong>TEPNO TECH</strong>
      </div>
    </footer>
  );
};

const IconWrapper = ({ icon }) => (
  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
    <span className="text-lg text-black">{icon}</span>
  </div>
);

export default Footer;
