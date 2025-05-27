// import React, { useState } from "react";
// import logo from '/assets/Company logo .gif'; 
// import { Link } from "react-router-dom";

// const Navbar2 = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(" ");

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setIsOpen(false); // Close mobile menu on click
//   };

//   const getLinkClass = (link) =>
//     `text-sm transition ${
//       activeLink === link ? "text-purple-400 font-semibold" : "text-white hover:text-purple-400"
//     }`;

//   return (
//     <nav className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="w-8 h-8" />
//           <span className="text-lg font-bold text-yellow-300">Rbrickks Technology</span>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Links - Desktop */}
//         <div className="hidden md:flex items-center space-x-6">
//           <a href="/Home" onClick={() => handleLinkClick("About")} className={getLinkClass("Home")}>Home</a>
//           <a href="/Technologies" onClick={() => handleLinkClick("Technologies")} className={getLinkClass("Technologies")}>Technologies</a>
//           <a href="/Testimonials" onClick={() => handleLinkClick("Testimonials")} className={getLinkClass("Testimonials")}>Testimonials</a>
//           {/* <a href="/ContactPage" onClick={() => handleLinkClick("ContactPage")} className={getLinkClass("ContactPage")}>Contact</a> */}

//           {/* ✅ More Services Button */}
//           <Link
//             to="/Home"
//             onClick={() => handleLinkClick("MoreServices")}
//             className="text-white text-sm font-medium bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
//           >
//             More Services
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar2;
