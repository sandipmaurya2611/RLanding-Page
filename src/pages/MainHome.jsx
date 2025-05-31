import React from "react";
import { motion } from "framer-motion";
import teamImage from "/assets/modern-equipped-computer-lab.jpg"; // ✅ Make sure this path is correct based on your file structure
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import companyLogo from "/assets/Company logo .gif";
<img src={companyLogo} alt="Rbrickks Technology Company Logo" className="h-12 w-auto" />;

const services = [
  {
    id: "01",
    title: "Software Development",
    description: "If you are looking for a trustworthy technology partner...",
    image:
      "/assets/call-center-operator-coworkers-dealing-with-upset-customers.jpg", // Replace with your image path
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually stunning user experiences...",
    image: "/assets/16683353_5757453.jpg",
  },
  {
    id: "03",
    title: "App Development",
    description: "Trustworthy and reputable company for mobile solutions...",
    image: "/assets/7504541_3684396.jpg",
  },
  {
    id: "04",
    title: "Web Development",
    description:
      "Full-stack web development services to bring your ideas to life...",
    image: "/assets/7118756_3426526.jpg",
  },
];

const techCards = [
  {
    title: "MERN Stack",
    logo: "/assets/MERN.jpg",
    desc: "At Rbrickks Technology, we leverage the MERN Stack to develop robust, end-to-end web solutions — combining modern frontend experiences with powerful backend systems."
  },
  {
    title: "Kotlin",
    logo: "/assets/pngwing.com.png",
    desc: "Kotlin offers modern syntax and full Java interoperability, making it ideal for Android and server-side development."
  },
  {
    title: "Python",
    logo: "/assets/pngwing.com (1)Python.png",
    desc: "A high-level language known for simplicity, used in web development, AI, automation, and data science."
  },
  {
    title: "Java",
    logo: "/assets/pngwing.com (1)Java.png",
    desc: "Crucian carp fathead sculpin, mon carp lined sole ghost fish burrowing goby pelagic beachsalmon Atlantic"
  },
  {
    title: "SQL",
    logo: "/assets/pngwing.com (2)SQL.png",
    desc: "Structured Query Language (SQL) enables efficient access and manipulation of data in relational database systems."
  }
];

const testimonials = [
  {
    name: "Tom Ostin",
    role: "CLIENT OF COMPANY",
    image: "/images/client1.jpg",
    feedback:
      "Zander swamp-eel beardfish dragonet black dragonfish eelpout Old World knifefish mustard eel porbeagle shark. Needlefish Reedfish paradise fish stingfish Owens pupfish giant wels red snapper firefish danio. Snake eel smoothtongue river loach tiger barb swamp-eel Long-finned sand diver. Blue shark blue shark European chub wolffish tilapia, grunion frigate"
  },
  // Add more testimonials here if needed
     {
    name: "Sarah Jones",
    role: "CUSTOMER",
    image: "/images/client2.jpg",
    feedback:
      "Amazing service and support. The team really went above and beyond to help us succeed with our project. Highly recommended!"
  },
  
];



const Home = () => {
  return (
    <>
     <section className="bg-gradient-to-r from-[#f9fafb] to-[#eef3f9] min-h-screen flex items-center justify-center px-4">
  <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
    {/* Left Text Content */}
    <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
        Powerful digital Solution with <br />
        <span className="text-[#00bfa6]">Rbrickks Technology</span>
      </h1>
      <p className="text-gray-600 max-w-md">
        At Rbrickks Technology, our creative team thrives on innovation — delivering powerful digital solutions that empower businesses to thrive in the digital age.
      </p>
      <button className="bg-[#ff6b61] hover:bg-[#ff3b2e] transition text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
        DISCOVER
      </button>
    </div>

    {/* Right Image & Floating Cards */}
    <div className="relative md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
      {/* Floating Man Image */}
      <motion.img
        src="/assets/pngwing.com (1)Man.png" // ✅ New image URL
        alt="Rbrickks Technology Company Logo"
        className="w-[270px] md:w-[330px] z-10"
        initial={{ y: 0 }}
        // animate={{ y: [0, -15, 0] }}
        // transition={{
        //   duration: 4,
        //   repeat: Infinity,
        //   repeatType: "loop",
        //   ease: "easeInOut",
        // }}
      />

      {/* Floating Card 1 - Cost */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
        }}
        className="absolute top-6 left-6 bg-white p-3 rounded-xl shadow-lg text-sm"
      >
        <p className="text-gray-600 text-xs font-medium">Cost</p>
        <p className="font-bold text-black text-md">PLN 2,223.4k</p>
      </motion.div>

      {/* Floating Card 2 - Audit Score */}
      <motion.div
        initial={{ x: 10 }}
        animate={{ x: -10 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
        }}
        className="absolute top-[30%] right-6 bg-white p-4 rounded-xl shadow-lg text-center text-sm"
      >
        <p className="text-gray-600 text-xs mb-1 font-medium">
          Account Audit Score
        </p>
        <div className="text-green-600 font-bold text-xl">76%</div>
      </motion.div>

      {/* Floating Card 3 - Revenue */}
      <motion.div
        initial={{ y: 12 }}
        animate={{ y: -12 }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          repeatType: "reverse",
        }}
        className="absolute bottom-6 right-[60%] bg-white p-4 rounded-xl shadow-lg text-sm"
      >
        <p className="text-gray-600 font-semibold mb-2">Revenue</p>
        <img
          src="/assets/pngwing.com (1) Revenue.png"
          alt="Rbrickks Technology Company Logo"
          className="w-32 h-auto"
        />
      </motion.div>
    </div>
  </div>
      </section>

      {/* Creative Team Section */}
   



       <section className="bg-white py-16 px-6 md:px-20 lg:px-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={teamImage}
              alt="Rbrickks Technology Company Logo"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-[-20px] left-[-20px] bg-white p-6 rounded-lg shadow-xl text-center w-32">
              <h3 className="text-3xl font-bold text-gray-900">3</h3>
              <p className="text-sm font-medium text-gray-600">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Creative Team that Gets{" "}
              <span className="text-teal-600 underline">Excited About</span>
            </h2>
            <p className="text-gray-700 mb-4">
              At Rbrickks Technology, our creative team thrives on innovation — delivering powerful digital solutions across website development, 
              web & mobile apps, and customized software, turning your ideas into impactful realities.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Backed by a passionate and skilled team of developers, designers, and tech strategists, 
              Rbrickks Technology brings together creativity and technical expertise to craft digital experiences that inspire, engage, and perform.
            </p>

            <ul className="grid grid-cols-2 gap-4 text-gray-800 font-medium mb-6">
              <li className="flex items-center gap-2">✅ UI/UX Design</li>
              <li className="flex items-center gap-2">✅ Customized Software</li>
              <li className="flex items-center gap-2">✅ Website Development</li>
              <li className="flex items-center gap-2">✅ App Development</li>
            </ul>

            <a
              href="#"
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={89} duration={10} start={0} />
            </h3>
            <p className="text-gray-600">Business Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={130} duration={10} start={0} />
            </h3>
            <p className="text-gray-600">Finished Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={78} duration={10} start={0} />
            </h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp end={24} duration={10} start={0} />
            </h3>
            <p className="text-gray-600">Awards Winning</p>
          </div>
        </div>

     
      </section>


  <section className="px-4 sm:px-4 md:px-12 py-16 bg-[#1d3b85] text-white w-full">
  {/* Top Section */}
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Custom Software <br /> Development{" "}
      <span className="text-cyan-400 underline decoration-4">Services</span>
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      We provide end-to-end software development services to meet your business
      needs with the latest technology and design excellence.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
    {services.map((service) => (
      <div
        key={service.id}
        className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105 group"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-5xl font-bold text-white opacity-70">
            {service.id}
          </span>
          <h3 className="text-xl font-bold text-white mt-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-200">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
  </section>



        <section className="py-20  bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            {/* Left Pattern Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/Company logo .gif"
                alt="Color Pattern Rbrickks technology logo"
                className="max-w-full h-auto"
              />
            </div>


            

            {/* Features There is a changes */}
            <div className="w-full md:w-1/2">
              {/* Company Logo */}
           
              <h2 className="text-[64px] font-extrabold leading-none text-black relative">
                <span className="absolute text-gray-200 -z-10 -top-4 -left-4 font-extrabold text-[84px] opacity-20">
                  Feature
                </span>
                <div className="relative inline-block">
                  <span className="block">What We Promise for</span>
                  <span className="block relative">
                    Successful Company
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00c8b3] -z-10"></span>
                  </span>
                </div>
              </h2>

              <p className="text-gray-600 mt-4 text-base">
                We have developed a streamlined software delivery process,
                encompassing project planning, agile methodologies.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#00c8b3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Rbrickks Technology is a biggest concern when choosing a technology is how it
                    fits our customer's needs.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#00c8b3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Our customers' time is their money, so completing every
                    project on time is one of company’s biggest priorities.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#00c8b3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    We promise that we never have any commercial incentive while
                    choosing a technology or approach, we base our decision
                    only.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>




<section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

  <h1 className="text-[60px] sm:text-[80px] md:text-[100px] text-center text-gray-100 font-extrabold absolute w-full z-0 top-[40px] select-none pointer-events-none leading-none">
    Technology
  </h1>

  <div className="relative z-10 text-center px-2">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">Awesome Technology</h2>
    <p className="text-lg sm:text-xl md:text-2xl mt-2 font-bold text-gray-800">
      We Used for <span className="text-cyan-600 border-b-4 border-cyan-400">Work</span> in{" "}
      <span className="text-gray-800">Rbrickks Technology</span>
    </p>
  </div>

  <div className="mt-16 max-w-7xl mx-auto w-full overflow-hidden">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12" 
    >
      {techCards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl transition duration-300 h-full flex flex-col mx-4">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">{card.title}</h3>
            <div className="w-full h-40 flex items-center justify-center mb-4">
              <img
                src={card.logo}
                alt={card.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm">{card.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

{/* 
  Testimonials */}

<section className="bg-[#f7f9fc] py-16 px-4">
  <div className="max-w-4xl mx-auto">
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto h-[220px] flex items-center space-x-6">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-600 text-base leading-relaxed overflow-hidden line-clamp-4">
                {t.feedback}
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-gray-800">{t.name}</h4>
                <p className="text-cyan-600 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
    </>
  );
};

export default Home;
