import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tt from "../assets/tt.png";
import img from "../assets/inner-header.webp";

function Header({
  title = "About Us",
  breadcrumb = "About Us",
  showBreadcrumb = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-[50vh] w-full"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white shadow-md text-black"
              : "bg-transparent text-black"
          }`}
        >
          <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={tt} alt="Logo" className="h-10 sm:h-12 w-auto" />
              <Link
                to="/"
                className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                  isScrolled ? "text-blue-900" : "text-black"
                }`}
              >
                <span className="text-blue-900">TEPNO</span> TECH
              </Link>
            </div>

            {/* Hamburger */}
           <div
          className="md:hidden flex flex-col justify-center items-end gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-black rounded" />
          <div className="w-6 h-1 bg-black rounded" />
          <div className="w-6 h-1 bg-black rounded" />
        </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-base lg:text-lg font-semibold">
              {["Home", "About", "Services", "Contact Us"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "")}`
                    }
                    className="hover:text-blue-700 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-700 text-sm lg:text-lg text-white px-4 lg:px-8 py-2 lg:py-3 rounded-3xl font-bold hover:bg-blue-800 transition-colors duration-200"
              >
                Get Started →
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className={`md:hidden flex flex-col gap-4 items-center p-4 ${
                isScrolled ? "bg-white text-black" : "bg-white text-black"
              }`}
            >
              {["Home", "About", "Services", "Contact Us"].map((item, idx) => (
                <Link
                  key={idx}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "")}`
                  }
                  className="hover:text-blue-700 transition-colors duration-200 text-lg"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition-colors duration-200"
              >
                Get Started →
              </button>
            </div>
          )}
        </nav>

        {/* Title & Breadcrumb */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center pt-28 sm:pt-32 px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black">
            {title}
          </h2>
          {showBreadcrumb && (
            <div className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-black flex flex-wrap justify-center">
              <Link
                to="/"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>
              <span className="mx-1 sm:mx-2">›</span>
              <span className="font-semibold">{breadcrumb}</span>
            </div>
          )}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md sm:max-w-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-xl font-semibold mb-6">
              Request Web Development
            </h2>
            <form className="space-y-4">
              {[
                { label: "Amount (₹) *", type: "number", placeholder: "Enter amount" },
                { label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                { label: "Email Address *", type: "email", placeholder: "Enter your email" },
                { label: "Phone Number", type: "text", placeholder: "Enter your phone number" }
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
