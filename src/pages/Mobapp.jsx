import React from "react";
import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaReact,
  FaDatabase,
  FaTools,
  FaStar,
} from "react-icons/fa";

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
    testimonial:
      "Custom clothing store app tailored for fashion lovers.",
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
  return (
    <div className="bg-black min-h-screen text-white font-sans px-4 pt-24">
      {/* Hero */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-4">Mobile Apps</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Discover the mobile applications built with modern cross-platform and native technologies.
        </p>
        <div className="mt-6 bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-2 rounded-full text-white font-semibold inline-block">
          Powering Mobility with Innovation
        </div>
      </div>

      {/* Tech Stack Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <h3 className="text-3xl font-bold text-center mb-10">App Tech Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appTechStack.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              {item.icon}
              <h4 className="text-xl font-semibold text-lime-300 mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              <div className="flex flex-wrap gap-2 text-sm text-purple-400">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-700 px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-12">
        <h3 className="text-3xl font-bold text-center mb-10">Apps We Built!!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition hover:scale-105">
              <h4 className="text-xl font-semibold text-lime-300 mb-1">{app.name}</h4>
              <p className="text-sm text-gray-400 italic mb-1">{app.category}</p>
              <p className="text-gray-300 text-sm mb-3">{app.testimonial}</p>
              <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {[...Array(app.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-purple-400 mb-4">
                {app.tech.map((t, i) => (
                  <span key={i} className="bg-gray-700 px-2 py-1 rounded-full">{t}</span>
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
    </div>
  );
}
