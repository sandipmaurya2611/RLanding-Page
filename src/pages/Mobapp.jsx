import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaReact,
  FaDatabase,
  FaTools,
  FaStar,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const appTechStack = [
  {
    icon: <FaMobileAlt className="text-purple-400 text-3xl mb-4" />,
    title: "Cross-Platform Development",
    technologies: ["React Native", "Flutter", "Ionic", "Cordova"],
    desc: "Build high-performance apps for both Android and iOS using shared codebases.",
  },
  {
    icon: <FaAndroid className="text-green-500 text-3xl mb-4" />,
    title: "Android Development",
    technologies: ["Java", "Kotlin", "Jetpack", "Firebase"],
    desc: "Modern tools and native Android SDKs for fast and responsive apps.",
  },
  {
    icon: <FaApple className="text-gray-300 text-3xl mb-4" />,
    title: "iOS Development",
    technologies: ["Swift", "SwiftUI", "Objective-C", "Core Data"],
    desc: "Beautifully crafted iOS apps with smooth animations and great UX.",
  },
  {
    icon: <FaDatabase className="text-cyan-400 text-3xl mb-4" />,
    title: "Backend & Database",
    technologies: ["Firebase", "Supabase", "Node.js", "MongoDB", "SQLite"],
    desc: "Secure and scalable backend solutions for real-time sync and data storage.",
  },
  {
    icon: <FaTools className="text-yellow-300 text-3xl mb-4" />,
    title: "Tools & Deployment",
    technologies: ["Play Store", "App Store", "TestFlight", "Fastlane", "Expo"],
    desc: "Seamless app testing, CI/CD, and publishing across multiple platforms.",
  },
];

const apps = [
  {
    name: "Clothy Cart",
    url: "https://play.google.com/store/apps/details?id=com.clothycart",
    category: "E-Commerce",
    rating: 5,
    testimonial:
      "Smart clothing e-commerce app with smooth user experience and fast checkout.",
    tech: ["Flutter", "Firebase", "Stripe"],
  },
  {
    name: "Angi Clothing",
    url: "https://play.google.com/store/apps/details?id=app.evlop.angionline",
    category: "Fashion",
    rating: 5,
    testimonial: "Custom clothing store app tailored for fashion lovers.",
    tech: ["React Native", "Node.js", "MongoDB"],
  },
  {
    name: "Real Estate Investment Office (REIO)",
    url: "https://play.google.com/store/apps/details?id=com.PropTechCompany.reio",
    category: "Real Estate",
    rating: 5,
    testimonial:
      "Investment-focused real estate platform with real-time property insights.",
    tech: ["Kotlin", "Firebase", "Map APIs"],
  },
];

export default function AppsPage() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const appsRef = useRef(null);
  const contactRef = useRef(null);
  const form = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_085m2ou", "template_rynn9n8", form.current, {
        publicKey: "k0NV7Z33eCv9HO8Nv",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 shadow-md px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-white md:hidden"></div>
          <div className="hidden md:flex flex-1 justify-center gap-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-white hover:text-purple-400 transition"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(techRef)}
              className="text-white hover:text-purple-400 transition"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection(appsRef)}
              className="text-white hover:text-purple-400 transition"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-white hover:text-purple-400 transition"
            >
              Contact
            </button>
          </div>
          <div className="hidden md:block">
            <a
              href="/"
              className="bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold"
            >
              Get More Services
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
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
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="block w-full text-middle text-white hover:text-purple-400 transition"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(techRef)}
              className="block w-full text-middle text-white hover:text-purple-400 transition"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection(appsRef)}
              className="block w-full text-middle text-white hover:text-purple-400 transition"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="block w-full text-middle text-white hover:text-purple-400 transition"
            >
              Contact
            </button>
            <a
              href="/"
              className="block text-middle w-full bg-gradient-to-r from-purple-400 to-cyan-400 px-4 py-2 rounded-full text-white font-semibold mt-2 text-center"
            >
              Get More Services
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        {/* Header */}
        <section className="overflow-visible pb-6 text-center mb-12">
          <h2 className="text-5xl md:text-5xl font-extrabold leading-[1.3] bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm bg-clip-text mb-4">
            Mobile App's
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Rbrickks Technology is a modern IT solutions provider delivering
            cutting-edge digital services to transform businesses. <strong> Mobile App's , Computer App's</strong>
          </p>
          <div className="mt-6 bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold inline-block">
            Let’s Connect with the Digital Future
          </div>
        </section>

        {/* About Section */}
       <section ref={aboutRef} className="px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <strong>Rbrickks Technology Pvt. Ltd.</strong>, founded on 13th September 2022 by Mr. Rohan Prashant Kolhe, is a Pune-based IT company committed to connecting people with the digital future. With the tagline <span className="text-purple-400 font-semibold">"Let’s Connect With Digital Future,"</span> we specialize in custom software, cloud solutions, AI/ML integration, and IT services.
            <br /><br />
            Our mission is to build innovative, user-focused solutions that solve real-world challenges and empower businesses to thrive in the digital era.
          </p>
        </section>

        {/* Tech Stack */}
        <section ref={techRef} className="py-20 px-4 md:px-10">
          <h3 className="text-3xl font-bold text-center mb-12">
            App Tech Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {appTechStack.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex flex-col h-full"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-lime-300 text-center mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-purple-400 mt-auto">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Apps Section */}
        <section ref={appsRef} className="py-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Apps We Built!!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {apps.map((app, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition hover:scale-105"
              >
                <h4 className="text-xl font-semibold text-lime-300 mb-1">
                  {app.name}
                </h4>
                <p className="text-sm text-gray-400 italic mb-1">
                  {app.category}
                </p>
                <p className="text-gray-300 text-sm mb-3">{app.testimonial}</p>
                <div className="flex items-center gap-1 mb-3 text-yellow-400">
                  {[...Array(app.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-purple-400 mb-4">
                  {app.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 text-sm rounded-full font-medium text-white hover:opacity-90 transition"
                >
                  View on Play Store
                </a>
              </div>
            ))}
          </div>
        </section>

\
        <section ref={contactRef} className="px-4 py-20 bg-gray-900">
          <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 h-32 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Floating Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="tel:+91 7249400874" className="bg-green-600 p-5 rounded-full shadow-lg">
       </a>
        <a href="https://wa.me/7249400874" target="_blank" rel="noopener noreferrer" className="bg-purple-600 p-5 rounded-full shadow-lg">
          <BsWhatsapp className="text-white text-xl" />
        </a>
      </div>     <FiPhoneCall className="text-white text-xl" />
      
    </div>
  );
}
