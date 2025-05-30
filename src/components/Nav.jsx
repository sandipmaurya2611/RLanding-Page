import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ scrollToSection, aboutRef, techRef, testimonialsRef, contactRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo - always visible on left */}
        <div className="flex items-center">
          <img
            src="/path-to-your-logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-purple-400">
            About Us
          </button>
          <button onClick={() => scrollToSection(techRef)} className="hover:text-purple-400">
            Technologies
          </button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-purple-400">
            Testimonials
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-purple-400">
            Contact
          </button>
        </div>

        {/* Desktop "Get More Services" button */}
        <div className="hidden md:flex">
          <a
            href="/"
            className="bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold"
          >
            Get More Services
          </a>
        </div>

        {/* Mobile hamburger menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-4">
          <button onClick={() => { scrollToSection(aboutRef); setMenuOpen(false); }} className="hover:text-purple-400 text-left">
            About Us
          </button>
          <button onClick={() => { scrollToSection(techRef); setMenuOpen(false); }} className="hover:text-purple-400 text-left">
            Technologies
          </button>
          <button onClick={() => { scrollToSection(testimonialsRef); setMenuOpen(false); }} className="hover:text-purple-400 text-left">
            Testimonials
          </button>
          <button onClick={() => { scrollToSection(contactRef); setMenuOpen(false); }} className="hover:text-purple-400 text-left">
            Contact
          </button>
          <a
            href="/"
            className="mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 px-4 py-2 rounded-full text-center text-white font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Get More Services
          </a>
        </div>
      )}
    </nav>
  );
}
