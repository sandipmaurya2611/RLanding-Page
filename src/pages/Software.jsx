import React, { useRef, useState } from "react";
import {
  FaReact, FaNodeJs, FaAws, FaBug, FaDatabase, FaJava, FaJs, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiJest, SiPostman, SiRedux, SiMysql,
} from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

// Updated icon references
const techItems = [
  {
    title: "Programming Languages Used",
    icons: [FaJava, FaJs, SiMysql],
  },
  {
    title: "Frameworks & Libraries",
    icons: [FaReact, SiRedux, SiTailwindcss],
  },
  {
    title: "Backend Development Tools",
    icons: [FaNodeJs, SiExpress, SiPostman],
  },
  {
    title: "Database Technologies",
    icons: [SiMongodb, FaDatabase],
  },
  {
    title: "Cloud and Hosting Solutions",
    icons: [FaAws, SiFirebase],
  },
  {
    title: "Testing & Debugging Tools",
    icons: [SiJest, FaBug, SiPostman],
  },
];

const testimonials = [
  {
    title: "Automation in Building Safety and Security",
    description: "A smart automation system designed to enhance building safety and security through IoT-enabled surveillance, real-time alerts, and access control.",
    tech: [FaReact, FaNodeJs, SiMongodb],
  },
  {
    title: "Table Booking Software",
    description: "A restaurant reservation system allowing users to book tables in real-time, manage capacity, and optimize customer experience.",
    tech: [FaReact, FaJs, SiFirebase],
  },
  {
    title: "Fraud Detection System",
    description: "An intelligent system for identifying fraudulent patterns using machine learning and rule-based algorithms.",
    tech: [FaJava, FaDatabase, FaBug],
  },
  {
    title: "Attendance Software for Classes",
    description: "A biometric and manual attendance tracking platform for academic institutions to streamline student records.",
    tech: [FaReact, SiRedux, FaNodeJs],
  },
  {
    title: "Hotel App Billing",
    description: "Comprehensive hotel billing and invoicing app for seamless check-in/check-out and real-time room service billing.",
    tech: [FaJs, FaFigma, SiPostman],
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-6 text-purple-400">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {['name', 'phone', 'email'].map((field) => (
          <input
            key={field}
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        ))}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your message..."
          className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 rounded-md text-lg font-medium transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default function SoftwarePage() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ContactPage = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex-1"></div>
        <div className="flex justify-center gap-6">
          <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-purple-400 transition">About Us</button>
          <button onClick={() => scrollToSection(techRef)} className="text-white hover:text-purple-400 transition">Technologies</button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="text-white hover:text-purple-400 transition">Testimonials</button>
          <button onClick={() => scrollToSection(ContactPage)} className="text-white hover:text-purple-400 transition">Contact</button>
        </div>
        <div className="flex-1 flex justify-end">
          <a
            href="/"
            className="bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold"
          >
            Get More Services
          </a>
        </div>
      </nav>

      <div className="pt-24">
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
        <section ref={aboutRef} className="px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <strong>Rbrickks Technology Pvt. Ltd.</strong>, founded on 13th September 2022 by Mr. Rohan Prashant Kolhe, is a Pune-based IT company committed to connecting people with the digital future. With the tagline
            <span className="text-purple-400 font-semibold"> "Let’s Connect With Digital Future,"</span>
            we specialize in custom software, cloud solutions, AI/ML integration, and IT services.<br /><br />
            Our mission is to build innovative, user-focused solutions that solve real-world challenges and empower businesses to thrive in the digital era.
          </p>
        </section>

        {/* Technologies Section */}
        <section ref={techRef} className="px-6 py-20 bg-gradient-to-b from-black to-gray-900">
          <h3 className="text-3xl font-bold text-center mb-10">Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techItems.map((item) => (
              <div key={item.title} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <h4 className="text-xl font-semibold mb-4 text-lime-300">{item.title}</h4>
                <div className="flex gap-4 text-3xl text-purple-400 flex-wrap">
                  {item.icons.map((Icon, i) => (<Icon key={i} />))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="px-6 py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-xl text-lime-300 font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-3 text-xl text-purple-400">
                  {project.tech.map((Icon, i) => (<Icon key={i} />))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section ref={ContactPage} className="px-6 py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>


      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a href="tel:+1234567890" className="bg-green-600 p-3 rounded-full shadow-lg">
          <FiPhoneCall className="text-white text-xl" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-purple-600 p-3 rounded-full shadow-lg">
          <BsWhatsapp className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
}
