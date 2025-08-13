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
  className="relative bg-cover bg-center w-full min-h-[200px] sm:min-h-[300px]"
  style={{ backgroundImage: `url(${img})` }}
>
  {/* Navbar */}
  <nav
    className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-black"
    }`}
  >
    <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 relative z-10">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={tt} alt="Logo" className="h-8 sm:h-10 w-auto" />
        <Link
          to="/"
          className={`text-lg sm:text-2xl font-bold ${
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
        <div className="w-6 h-0.5 bg-black rounded" />
        <div className="w-6 h-0.5 bg-black rounded" />
        <div className="w-6 h-0.5 bg-black rounded" />
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
      <div className="md:hidden flex flex-col gap-4 items-center p-4 bg-white text-black">
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
  <div className="relative z-10 flex flex-col justify-center items-center text-center pt-24 sm:pt-32 pb-6 px-4">
    <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-black">
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

    </>
  );
}

export default Header;
