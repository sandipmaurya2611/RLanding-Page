import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  FaReact, FaNodeJs, FaAws, FaBug, FaDatabase, FaJava, FaJs, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiJest, SiPostman, SiRedux, SiMysql,
} from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const techItems = [
  { title: "Programming Languages Used", icons: [<FaJava />, <FaJs />, <SiMysql />] },
  { title: "Frameworks & Libraries", icons: [<FaReact />, <SiRedux />, <SiTailwindcss />] },
  { title: "Backend Development Tools", icons: [<FaNodeJs />, <SiExpress />, <SiPostman />] },
  { title: "Database Technologies", icons: [<SiMongodb />, <FaDatabase />] },
  { title: "Cloud and Hosting Solutions", icons: [<FaAws />, <SiFirebase />] },
  { title: "Testing & Debugging Tools", icons: [<SiJest />, <FaBug />, <SiPostman />] },
];

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
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const form = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_085m2ou', 'template_rynn9n8', form.current, {
        publicKey: 'k0NV7Z33eCv9HO8Nv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans relative">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"></div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-purple-400">About</button>
            <button onClick={() => scrollToSection(techRef)} className="hover:text-purple-400">Technologies</button>
            <button onClick={() => scrollToSection(projectsRef)} className="hover:text-purple-400">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-purple-400">Contact</button>
          </div>

          <div className="hidden md:flex">
            <a href="/" className="bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold">Get More Services</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-white">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3">
            <button onClick={() => scrollToSection(aboutRef)} className="block w-full text-middle hover:text-purple-400">About</button>
            <button onClick={() => scrollToSection(techRef)} className="block w-full text-middle hover:text-purple-400">Technologies</button>
            <button onClick={() => scrollToSection(projectsRef)} className="block w-full text-middle hover:text-purple-400">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="block w-full text-middle hover:text-purple-400">Contact</button>
            <a href="/" className="inline-block bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold w-full text-center">Get More Services</a>
          </div>
        )}
      </nav>

      <div className="pt-24">
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4">Websites</h2>
          <p className="text-gray-400 max-w-xl">Explore our collection of high-performing websites developed by the Rbrickks team using modern technologies and sleek designs.</p>
          <div className="mt-8 bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold">Let’s Connect with the Digital Future</div>
        </div>

        <section ref={aboutRef} className="px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <strong>Rbrickks Technology Pvt. Ltd.</strong>, founded on 13th September 2022 by Mr. Rohan Prashant Kolhe, is a Pune-based IT company committed to connecting people with the digital future. With the tagline <span className="text-purple-400 font-semibold">"Let’s Connect With Digital Future,"</span> we specialize in custom software, cloud solutions, AI/ML integration, and IT services.
            <br /><br />
            Our mission is to build innovative, user-focused solutions that solve real-world challenges and empower businesses to thrive in the digital era.
          </p>
        </section>

        <section ref={techRef} className="px-6 py-20 bg-gradient-to-b from-black to-gray-900">
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

        <section ref={projectsRef} className="px-6 py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Projects We Did!!</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition hover:scale-105">
                <h4 className="text-xl font-semibold text-lime-300 mb-2">{project.name}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 text-sm rounded-full font-medium text-white hover:opacity-90 transition">Visit Site</a>
              </div>
            ))}
          </div>
        </section>

        <section ref={contactRef} className="px-6 py-20 bg-gray-900">
          <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
          <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Name</label>
                <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input type="email" name="user_email" placeholder="you@example.com" className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                <input type="tel" name="user_phone" placeholder="e.g. 9876543210" className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 py-3 rounded-md text-white font-semibold hover:opacity-90 transition">Send Message</button>
            </form>
          </div>
        </section>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="tel:+91 7249400874" className="bg-green-600 p-5 rounded-full shadow-lg">
          <FiPhoneCall className="text-white text-xl" />
        </a>
        <a href="https://wa.me/7249400874" target="_blank" rel="noopener noreferrer" className="bg-purple-600 p-5 rounded-full shadow-lg">
          <BsWhatsapp className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
}
