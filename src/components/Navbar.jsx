import { useState } from "react";
import { Link } from "react-router-dom";
import tt from "../assets/tt.png"
import bg from "../assets/header-bg5.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 left-0 z-50 text-white w-full p-5 md:p-3 bg-green-950 md:bg-transparent"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}{" "}
        <div className="flex items-center space-x-3 ml-20">
        <img src={tt} alt="SARC Technology Logo" className="h-12 w-auto" />
        <Link to="/" className="text-2xl md:text-3xl font-bold ">
          <span className="text-[#ADFF1C]">TEPNO</span> TECH
        </Link>
        </div>
        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col justify-center items-end gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-white rounded" />
          <div className="w-6 h-1 bg-white rounded" />
          <div className="w-6 h-1 bg-white rounded" />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 mx-1 text-lg">
          <li className="text-xl font-normal hover:text-lime-400">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-normal hover:text-lime-400">
            <Link to="/about">About</Link>
          </li>
          <li className="text-xl font-normal hover:text-lime-400">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-xl font-normal hover:text-lime-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="text-xl font-normal hover:text-lime-400 text-center">
            <Link to="/marketing">Best Digital Marketing Company</Link>
          </li> */}
          <div>
            <Link to="#">
              <button className="relative overflow-hidden group bg-[#ADFF1C] text-black px-6 py-3 rounded font-bold transition-all duration-300 hover:-translate-y-1 mx-20">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Get Started <i className="bx bx-right-arrow-alt text-2xl"></i>
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-0 rounded"></span>
              </button>
            </Link>
          </div>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-center">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-xl font-medium hover:text-lime-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-xl font-medium hover:text-lime-400"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="text-xl font-medium hover:text-lime-400"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-xl font-medium hover:text-lime-400"
          >
            Contact Us
          </Link>
          {/* <Link
            to="/marketing"
            onClick={toggleMenu}
            className="text-xl font-medium hover:text-lime-400"
          >
            Best Digital Marketing Company
          </Link> */}
          <Link to="#" onClick={toggleMenu}>
            <button className="bg-[#ADFF1C] text-black px-4 py-2 rounded-xl font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
