

import React from "react";



import { FaReact, FaNodeJs, FaAws, FaBug, FaDatabase, FaJava, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiJest, SiPostman, SiRedux, SiMysql } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

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

const testimonials = [
  {
    title: "Automation in Building Safety and Security",
    description: "A smart automation system designed to enhance building safety and security through IoT-enabled surveillance, real-time alerts, and access control.",
    tech: [<FaReact />, <FaNodeJs />, <SiMongodb />],
  },
  {
    title: "Table Booking Software",
    description: "A restaurant reservation system allowing users to book tables in real-time, manage capacity, and optimize customer experience.",
    tech: [<FaReact />, <FaJs />, <SiFirebase />],
  },
  {
    title: "Fraud Detection System",
    description: "An intelligent system for identifying fraudulent patterns using machine learning and rule-based algorithms.",
    tech: [<FaJava />, <FaDatabase />, <FaBug />],
  },
  {
    title: "Attendance Software for Classes",
    description: "A biometric and manual attendance tracking platform for academic institutions to streamline student records.",
    tech: [<FaReact />, <SiRedux />, <FaNodeJs />],
  },
  {
    title: "Hotel App Billing",
    description: "Comprehensive hotel billing and invoicing app for seamless check-in/check-out and real-time room service billing.",
    tech: [<FaJs />, <FaFigma />, <SiPostman />],
  },
];

export default function SoftwarePage() {
  return (

<>
 <div className="bg-black min-h-screen text-white font-sans">
  

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4">Software's</h2>
        <p className="text-gray-400 max-w-xl">
          Rbrickks Technology is a modern IT solutions provider delivering cutting-edge digital services to transform businesses.
        </p>
        <div className="mt-8 bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold">
          Let’s Connect with the Digital Future
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <strong>Rbrickks Technology Pvt. Ltd.</strong>, founded on 13th September 2022 by Mr. Rohan Prashant Kolhe, is a Pune-based IT company committed to connecting people with the digital future. With the tagline
          <span className="text-purple-400 font-semibold"> "Let’s Connect With Digital Future,"</span>
          we specialize in custom software, cloud solutions, AI/ML integration, and IT services.<br /><br />
          Our mission is to build innovative, user-focused solutions that solve real-world challenges and empower businesses to thrive in the digital era.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12 bg-gradient-to-b from-black to-gray-900">
        <h3 className="text-3xl font-bold text-center mb-10">Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((item) => (
            <div key={item.title} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold mb-4 text-lime-300">{item.title}</h4>
              <div className="flex gap-4 text-3xl text-purple-400">
                {item.icons.map((icon, i) => (<div key={i}>{icon}</div>))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-10">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl text-lime-300 font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex gap-3 text-xl text-purple-400">
                {project.tech.map((icon, i) => (<div key={i}>{icon}</div>))}
              </div>
            </div>
          ))}

          {/* More Services Box */}
          <a
            href="/services"
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-lime-300 hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/40 transition-all flex flex-col justify-between"
          >
            <h4 className="text-xl text-white font-semibold mb-2">More Services</h4>
            <p className="text-gray-400 text-sm mb-4">
              Discover additional services including AI/ML, DevOps, cloud transformation and more to accelerate your business.
            </p>
            <span className="text-cyan-400 font-semibold mt-auto hover:underline">
              Explore More →
            </span>
          </a>
        </div>
      </section>

      {/* Floating Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a href="tel:+1234567890" className="bg-green-600 p-3 rounded-full shadow-lg">
          <FiPhoneCall className="text-white text-xl" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" className="bg-purple-600 p-3 rounded-full shadow-lg" rel="noopener noreferrer">
          <BsWhatsapp className="text-white text-xl" />
        </a>
      </div>
    </div>


</>
   
  );
}
