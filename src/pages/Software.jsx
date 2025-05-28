import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaReact, FaNodeJs, FaAws, FaBug, FaDatabase, FaJava, FaJs, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiJest, SiPostman, SiRedux, SiMysql,
} from "react-icons/si";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

// EmailJS Contact Form
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m8hoob3', 'template_i4fc57k', form.current, {
        publicKey: '1m5aPROiv77M3j6XU',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Message failed to send. Try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4 text-purple-400">Send a Message</h2>

      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
        required
      />
      <input
        type="text"
        name="user_phone"
        placeholder="Phone"
        className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="Your message..."
        rows="4"
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
  );
};

const techItems = [
  { title: "Programming Languages", icons: [FaJava, FaJs, SiMysql] },
  { title: "Frameworks & Libraries", icons: [FaReact, SiRedux, SiTailwindcss] },
  { title: "Backend Tools", icons: [FaNodeJs, SiExpress, SiPostman] },
  { title: "Database Tech", icons: [SiMongodb, FaDatabase] },
  { title: "Cloud & Hosting", icons: [FaAws, SiFirebase] },
  { title: "Testing Tools", icons: [SiJest, FaBug, SiPostman] },
];

const testimonials = [
  {
    title: "Automation in Building Security",
    description: "Smart automation for safety and security with IoT and alerts.",
    tech: [FaReact, FaNodeJs, SiMongodb],
  },
  {
    title: "Table Booking Software",
    description: "Book tables in real-time, manage capacity, improve UX.",
    tech: [FaReact, FaJs, SiFirebase],
  },
  {
    title: "Fraud Detection System",
    description: "ML-based fraud detection using patterns and rule-based logic.",
    tech: [FaJava, FaDatabase, FaBug],
  },
  {
    title: "Class Attendance Software",
    description: "Biometric/manual system to track and report student attendance.",
    tech: [FaReact, SiRedux, FaNodeJs],
  },
  {
    title: "Hotel App Billing",
    description: "Billing & invoicing for hotels, room service integration.",
    tech: [FaJs, FaFigma, SiPostman],
  },
];

export default function SoftwarePage() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="hidden md:flex w-full items-center">
            <div className="flex justify-center gap-10 flex-1">
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-purple-400">About Us</button>
              <button onClick={() => scrollToSection(techRef)} className="hover:text-purple-400">Technologies</button>
              <button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-purple-400">Testimonials</button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-purple-400">Contact</button>
            </div>
            <a href="/" className="ml-auto bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold">
              Get More Services
            </a>
          </div>
          <div className="md:hidden flex justify-end w-full">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-purple-400">About Us</button>
            <button onClick={() => scrollToSection(techRef)} className="hover:text-purple-400">Technologies</button>
            <button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-purple-400">Testimonials</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-purple-400">Contact</button>
            <a href="/" className="mt-2 bg-gradient-to-r from-purple-400 to-cyan-400 px-4 py-2 rounded-full text-center text-white font-semibold">
              Get More Services
            </a>
          </div>
        )}
      </nav>

      <div className="pt-24">
       <section className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4">Software's</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Rbrickks Technology is a modern IT solutions provider delivering cutting-edge digital services to transform businesses.</p>
          <div className="mt-6 bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold inline-block">Let’s Connect with the Digital Future</div>
        </section>

         <section ref={aboutRef} className="px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <strong>Rbrickks Technology Pvt. Ltd.</strong>, founded on 13th September 2022 by Mr. Rohan Prashant Kolhe, is a Pune-based IT company committed to connecting people with the digital future. With the tagline <span className="text-purple-400 font-semibold">"Let’s Connect With Digital Future,"</span> we specialize in custom software, cloud solutions, AI/ML integration, and IT services.
            <br /><br />
            Our mission is to build innovative, user-focused solutions that solve real-world challenges and empower businesses to thrive in the digital era.
          </p>
        </section>

        <section ref={techRef} className="px-6 py-18">
          <h3 className="text-3xl font-bold text-center mb-10">Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techItems.map((item) => (
              <div key={item.title} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <h4 className="text-xl font-semibold mb-4 text-lime-300">{item.title}</h4>
                <div className="flex gap-4 text-3xl text-purple-400 flex-wrap">
                  {item.icons.map((Icon, i) => <Icon key={i} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section ref={testimonialsRef} className="px-6 py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((project, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-xl text-lime-300 font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex gap-3 text-xl text-purple-400">
                  {project.tech.map((Icon, j) => <Icon key={j} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section ref={contactRef} className="px-6 py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
          <div className="max-w-2xl mx-auto">
            <ContactUs />
          </div>
        </section>
      </div>

      {/* Floating contact icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="tel:+7249400874" className="bg-green-600 p-5 rounded-full shadow-lg">
          <FiPhoneCall className="text-white text-xl" />
        </a>
        <a href="https://wa.me/7249400874" target="_blank" rel="noopener noreferrer" className="bg-purple-600 p-5 rounded-full shadow-lg">
          <BsWhatsapp className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
}
