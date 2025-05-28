import React from "react";
import {
  FaMobileAlt,
  FaGlobe,
  FaAndroid,
  FaCode,
  FaBrain,
  FaShieldAlt,
  FaCloud,
  FaProjectDiagram,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

// Services Array
const services = [
  {
    icon: <FaMobileAlt className="text-purple-400 text-3xl mb-4" />,
    title: "App Development",
    desc: "We build high-performance, user-friendly mobile applications tailored for both iOS and Android platforms. Our solutions are crafted to deliver seamless user experiences, robust functionality, and scalability—whether you're launching a new product, digitizing services, or engaging customers through mobile technology.",
  },
  {
    icon: <FaGlobe className="text-purple-400 text-3xl mb-4" />,
    title: "Web Development",
    desc: "We design and develop responsive, fast, and secure websites and web applications using the latest technologies and frameworks. From corporate sites to complex web platforms, our solutions are tailored to meet your business goals while delivering exceptional performance across all devices and browsers.",
  },
  {
    icon: <FaAndroid className="text-cyan-400 text-3xl mb-4" />,
    title: "Android Development",
    desc: "We create high-performance native Android applications designed for speed, responsiveness, and a seamless user experience. From consumer apps to enterprise solutions, we ensure compatibility across a wide range of devices and Android versions.",
  },
  {
    icon: <FaCode className="text-cyan-400 text-3xl mb-4" />,
    title: "Software Development",
    desc: "We develop robust and scalable software tailored to your business's unique needs. Whether it's a desktop solution, enterprise tool, or automation system, we turn your ideas into powerful, custom-built applications.",
  },
  {
    icon: <FaBrain className="text-purple-400 text-3xl mb-4" />,
    title: "AI / ML Services",
    desc: "Leverage advanced artificial intelligence and machine learning models to automate decision-making, extract insights from data, and enhance operational efficiency. From predictive analytics to intelligent automation, we build smart systems that evolve with your business.",
  },
  {
    icon: <FaShieldAlt className="text-cyan-400 text-3xl mb-4" />,
    title: "Security Software",
    desc: "Protect your digital infrastructure with our cutting-edge cybersecurity solutions. We design and implement software that defends against threats, secures sensitive data, and ensures compliance with industry standards.",
  },
  {
    icon: <FaCloud className="text-purple-400 text-3xl mb-4" />,
    title: "Cloud Computing",
    desc: "We deliver scalable, secure, and cost-effective cloud solutions to support your digital operations. From cloud migration to infrastructure setup and DevOps, our services ensure high availability and performance for your applications.",
  },
  {
    icon: <FaProjectDiagram className="text-cyan-400 text-3xl mb-4" />,
    title: "API Development",
    desc: "We build robust and well-documented APIs that enable seamless integration between software systems, mobile apps, and third-party services—ensuring scalability, security, and smooth data exchange.",
  },
  {
    icon: <FaSearch className="text-purple-400 text-3xl mb-4" />,
    title: "SEO",
    desc: "Boost your online visibility with our targeted SEO strategies. We optimize your website content, structure, and performance to improve search engine rankings and drive organic traffic to your business.",
  },
  {
    icon: <FaBullhorn className="text-cyan-400 text-3xl mb-4" />,
    title: "Digital Marketing",
    desc: "Grow your brand online with our comprehensive digital marketing services, including social media marketing, PPC campaigns, email automation, and content strategy—all designed to reach your audience and deliver measurable results.",
  },
];

// Technologies Array
const technologies = [
  { name: "JavaScript", icon: "assets/icons8-javascript-96.png" },
  { name: "Python", icon: "assets/icons8-aws-96.png" },
  { name: "React", icon: "assets/icons8-react-80.png" },
  { name: "Node.js", icon: "assets/icons8-nodejs-48.png" },
  { name: "AWS", icon: "assets/icons8-aws-96.png" },
  { name: "Docker", icon: "assets/icons8-docker-96.png" },
  { name: "MongoDB", icon: "assets/icons8-mongodb-96.png" },
  { name: "TypeScript", icon: "assets/icons8-typescript-96.png" },
  { name: "Git", icon: "assets/icons8-github-logo-96.png" },
  { name: "Flutter", icon: "assets/icons8-flutter-logo-96.png" },
  { name: "Kotlin", icon: "assets/icons8-kotlin-96.png" },
  { name: "Swift", icon: "assets/icons8-swift-96.png" },
  { name: "TensorFlow", icon: "assets/icons8-tensorflow-96.png" },
  { name: "Firebase", icon: "assets/icons8-firebase-96.png" },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0e0e0e] flex flex-col items-center justify-center text-white px-4 pt-[100px] text-center relative overflow-hidden mt-12">
        {/* Background Glow Effects */}
        <div className="absolute -z-10 w-full h-full top-0 left-0">
          <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full top-0 left-1/3 transform -translate-x-1/2"></div>
          <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 blur-2xl rounded-full bottom-0 right-1/4"></div>
        </div>
        <div className="overflow-visible ">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.3] bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm">
            Rbrickks Technology
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 max-w-2xl text-lg md:text-xl">
          Rbrickks Technology is a modern IT solutions provider delivering
          cutting-edge digital services to transform businesses.
        </p>

        {/* Subheading Glow Box with Animation */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-1 rounded-full inline-block mb-6 shadow-lg animate-pulse">
          <p className="bg-[#0e0e0e] px-6 py-2 rounded-full text-sm md:text-base text-white font-medium">
            Let’s Connect with the Digital Future
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/ContactPage">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
              Get Started
            </button>
          </a>
          <a href="/Portfolio">
            <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black font-semibold transition shadow-lg">
              View Our Work
            </button>
          </a>
        </div>

        {/* Floating Call & WhatsApp Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
          <a
            href="tel:+917249400874"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
            title="Call Us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-1 1H5v1a12 12 0 0012 12h1v-2a1 1 0 011-1h3a1 1 0 011 1v2a2 2 0 01-2 2h-2c-9.941 0-18-8.059-18-18V5z"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/917249400874"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
            title="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M380.9 97.1C339 55.3 283.4 32 224.8 32 118.7 32 32 118.3 32 224.2c0 39.4 10.3 77.9 29.9 111.6L32 480l147.6-38.6c31.6 17.3 67.3 26.4 104.9 26.4 106.1 0 192.8-86.2 192.8-192.3 0-58.2-22.8-113-64.4-155.4zM224.8 426.8c-30.2 0-59.7-8.1-85.5-23.4l-6.1-3.6-87.5 22.9 23.4-85-3.9-6.3c-18.8-30.4-28.8-65.5-28.8-101.2 0-105.4 86-191.2 192.1-191.2 51.2 0 99.3 19.9 135.4 56.1 36.1 36.3 55.8 84.5 55.8 135.8 0 105.3-86 191.2-192.1 191.2zm104.6-138.7c-5.7-2.9-33.8-16.7-39-18.6-5.2-1.9-9-2.9-12.8 2.9s-14.6 18.6-17.9 22.4c-3.3 3.8-6.6 4.3-12.3 1.4-33.6-16.8-55.7-30.1-77.8-68-5.9-10.1 5.9-9.4 16.8-31.2 1.9-3.8.9-7.2-.5-10.1s-12.8-30.8-17.5-42.2c-4.6-11.1-9.3-9.5-12.8-9.7-3.3-.2-7.2-.2-11.1-.2s-10.1 1.4-15.3 7.2c-5.2 5.7-19.9 19.4-19.9 47.3s20.4 54.9 23.2 58.6c2.8 3.8 39.8 60.6 96.4 85 13.5 5.9 24.1 9.4 32.3 12 13.5 4.3 25.8 3.7 35.5 2.2 10.9-1.6 33.8-13.8 38.6-27.1 4.8-13.3 4.8-24.8 3.3-27.1-1.4-2.4-5.2-3.8-10.9-6.7z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Our Services Section */}
    <section className="bg-[#0e0e0e] text-white py-16 px-4 sm:px-6 lg:px-8" id="services">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
      Our Services
    </h2>
    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
      We offer a comprehensive range of technology services to help your
      business thrive in the digital landscape.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:z-20 hover:scale-105"
        >
          <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
            {service.icon}
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              {service.title}
            </h3>
            <p className="
              text-sm text-gray-400 text-center 
              mt-2 
              md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-hover:mt-2 
              max-h-fit opacity-100 
              transition-all duration-300 ease-in-out overflow-hidden">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Technologies Section */}
      <section className="bg-[#0e0e0e] text-white py-20 px-4">
        <div className="overflow-visible pb-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.3] bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-sm">
            Technologies We Use
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            We leverage the latest technologies to deliver high-quality
            solutions for our clients.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#151515] rounded-full py-6 px-4 transition hover:scale-105"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black mb-3 shadow-md">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
