import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Company logo .gif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const getLinkClass = (link) =>
    `text-sm font-medium transition duration-300 ${
      activeLink === link
        ? "text-purple-600 border-b-2 border-purple-600"
        : "text-gray-700 hover:text-purple-600"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-purple-700">
            Rbrickks Technology
          </span>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/Home" onClick={() => handleLinkClick("Home")} className={getLinkClass("Home")}>
            Home
          </Link>
          <Link to="/About" onClick={() => handleLinkClick("About")} className={getLinkClass("About")}>
            About
          </Link>
          <Link to="/Service" onClick={() => handleLinkClick("Service")} className={getLinkClass("Service")}>
            Service
          </Link>
          <Link to="/Portfolio" onClick={() => handleLinkClick("Portfolio")} className={getLinkClass("Portfolio")}>
            Portfolio
          </Link>
          <Link to="/Testimonials" onClick={() => handleLinkClick("Testimonials")} className={getLinkClass("Testimonials")}>
            Testimonials
          </Link>
          <Link to="/ContactPage" onClick={() => handleLinkClick("ContactPage")} className={getLinkClass("ContactPage")}>
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <Link to="/Home" onClick={() => handleLinkClick("Home")} className={getLinkClass("Home")}>
            Home
          </Link>
          <Link to="/About" onClick={() => handleLinkClick("About")} className={getLinkClass("About")}>
            About
          </Link>
          <Link to="/Service" onClick={() => handleLinkClick("Service")} className={getLinkClass("Service")}>
            Service
          </Link>
          <Link to="/Portfolio" onClick={() => handleLinkClick("Portfolio")} className={getLinkClass("Portfolio")}>
            Portfolio
          </Link>
          <Link to="/Testimonials" onClick={() => handleLinkClick("Testimonials")} className={getLinkClass("Testimonials")}>
            Testimonials
          </Link>
          <Link to="/ContactPage" onClick={() => handleLinkClick("ContactPage")} className={getLinkClass("ContactPage")}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
