import React from "react";
import {
  FaReact, FaNodeJs, FaAws, FaBug, FaDatabase, FaJava, FaJs, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiJest, SiPostman, SiRedux, SiMysql,
} from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

// Technologies Section
const techItems = [
  {
    title: "Programming Languages Used",
    icons: [<FaJava />, <FaJs />, <SiMysql />],
  },
  {
    title: "Frameworks & Libraries",
    icons: [<FaReact />, <SiRedux />, <SiTailwindcss />],
  },
  {
    title: "Backend Development Tools",
    icons: [<FaNodeJs />, <SiExpress />, <SiPostman />],
  },
  {
    title: "Database Technologies",
    icons: [<SiMongodb />, <FaDatabase />],
  },
  {
    title: "Cloud and Hosting Solutions",
    icons: [<FaAws />, <SiFirebase />],
  },
  {
    title: "Testing & Debugging Tools",
    icons: [<SiJest />, <FaBug />, <SiPostman />],
  },
];

// Project Testimonials
const projects = [
  {
    name: "Lokhandesai Dental",
    description: "A professional dental clinic website for appointment bookings and showcasing services.",
    link: "https://lokhandesaidental.com/",
  },
  {
    name: "Practo - Bharuch Doctor",
    description: "Doctor profile on Practo platform for easy discovery and appointment scheduling.",
    link: "https://www.practo.com/Bharuch/doctor",
  },
  {
    name: "Aakash Institute",
    description: "A leading education website offering online and offline test preparation services.",
    link: "https://www.Aakash.ac.in/",
  },
  {
    name: "Ritz Carlton",
    description: "Luxury hotel website showcasing resorts, bookings, events, and premium services.",
    link: "https://www.ritzcarlton.com/",
  },
  {
    name: "Coursera",
    description: "Global online learning platform with thousands of courses from top universities.",
    link: "https://www.coursera.org/",
  },
  {
    name: "Demech India",
    description: "Industrial website presenting engineering services and product capabilities.",
    link: "https://demechindia.com/",
  },
  {
    name: "Business Class",
    description: "Travel service website for booking premium flight experiences worldwide.",
    link: "https://www.businessclass.com/",
  },
  {
    name: "SE Associates",
    description: "Professional consultancy website for CA services, finance, and legal solutions.",
    link: "https://www.seassociates.in/",
  },
  {
    name: "Phoenix Mecano",
    description: "Website for global industrial components supplier with product catalog and tech specs.",
    link: "https://www.phoenixmecano.co.in",
  },
];

export default function Websites() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src="/rbrickks-logo.jpg" alt="Rbrickks Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-xl font-bold text-lime-300">Rbrickks</h1>
        </div>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="text-purple-400 font-semibold">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-purple-400 to-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold">Get Started</button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4">Websites</h2>
        <p className="text-gray-400 max-w-xl">
          Explore our collection of high-performing websites developed by the Rbrickks team using modern technologies and sleek designs.
        </p>
        <div className="mt-8 bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold">
          Let’s Connect with the Digital Future
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-3xl font-bold mb-6">About</h3>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <strong>Rbrickks Technology Pvt. Ltd.</strong> is a Pune-based IT company committed to building digital-first businesses. Founded on <strong>13th September 2022</strong> by <strong>Mr. Rohan Prashant Kolhe</strong>, our mission is to build sleek, functional, and scalable digital products, with a strong focus on websites and cloud applications.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="px-6 py-12 bg-gradient-to-b from-black to-gray-900">
        <h3 className="text-3xl font-bold text-center mb-10">Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((item) => (
            <div key={item.title} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold mb-4 text-lime-300">{item.title}</h4>
              <div className="flex gap-4 text-3xl text-purple-400 flex-wrap">
                {item.icons.map((icon, i) => (<div key={i}>{icon}</div>))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-10">Projects We Did!!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition hover:scale-105">
              <h4 className="text-xl font-semibold text-lime-300 mb-2">{project.name}</h4>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 text-sm rounded-full font-medium text-white hover:opacity-90 transition"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="tel:+1234567890" className="bg-green-600 p-3 rounded-full shadow-lg">
          <FiPhoneCall className="text-white text-xl" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" className="bg-purple-600 p-3 rounded-full shadow-lg">
          <BsWhatsapp className="text-white text-xl" />
        </a>
      </div>

      
    </div>
  );
}
