import React, { useState } from "react";

const services = [
  {
    id: "01",
    title: "IT Consulting",
    description:
      "If you are looking for a trustworthy and reputable company to build your",
    img: "https://storage.googleapis.com/a1aa/image/b5c53b43-579d-4aeb-29af-0bceeee872fd.jpg",
    gradientFrom: "#f9b233",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Crucian carp; flathead sculpin, beachsalmon Atlantic salmon",
    img: "https://storage.googleapis.com/a1aa/image/02be6b15-fe71-4b55-9716-aa995ff27e7a.jpg",
    gradientFrom: "#00d1d9",
  },
  {
    id: "03",
    title: "App Development",
    description:
      "Trustworthy and reputable company to build your operational software or",
    img: "https://storage.googleapis.com/a1aa/image/e0ccbc20-31d2-458f-763b-69f554d6bb41.jpg",
    gradientFrom: "#f76a4b",
  },
  {
    id: "04",
    title: "Web Development",
    description:
      "Cutlassfish springfish spinefoot beardfish bocaccio Pacific albacore",
    img: "https://storage.googleapis.com/a1aa/image/499b2f39-03d5-41ba-38cb-2aa7b949cf96.jpg",
    gradientFrom: "#00a9e0",
  },
];

const developmentData = [
  {
    title: "Bespoke Product Development",
    content:
      "We are able to take a brief, assist with establishing the detailed requirements and then deliver the solution you require on-time and on-budget. We have developed a streamlined software delivery process, encompassing project planning, agile methodologies.",
  },
  {
    title: "Bespoke Web & Mobile Apps",
    content:
      "We specialize in delivering cutting-edge mobile and web applications tailored to your business needs with optimal performance and intuitive UI.",
  },
  {
    title: "Enterprise IT Services & Outsourcing",
    content:
      "We offer scalable enterprise solutions and reliable outsourcing services to help you reduce costs and maximize productivity.",
  },
];

const CombinedServicesDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <>


      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px]">
  <img
    src="/assets/Career.jpg"
    alt="Office team working together in modern workspace with computers and documents"
    className="w-full h-full object-cover"
    draggable="false"
    width={1920}
    height={480}
  />
  {/* Softer black gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 flex flex-col justify-center items-start pb-8 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-44">
    <div className="relative max-w-7xl">
      {/* RBrickks Technology above */}
      <h2
        className="technum-text select-none pointer-events-none"
        style={{
          lineHeight: 1,
          fontFamily: 'Arial, sans-serif',
          fontWeight: 900,
          fontSize: '6rem',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255 255 255 / 0.3)',
          textStroke: '1px rgba(255 255 255 / 0.3)',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        RBrickks Technology
      </h2>
      
      {/* Careers below */}
      <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-md -mt-4">
        SERVICES
      </h1>
    </div>
  </div>
</section>

<section className="relative overflow-hidden scale-[1.3] sm:scale-100">
  <div className="absolute inset-0 -z-10">
    <div className="h-1/2 bg-[#2a4f8f]" />
    <div className="h-1/2 bg-white" />
  </div>

  <main className="max-w-[900px] mx-auto px-4 py-16 text-black">
    {/* Header */}
    <div className="text-center px-2">
      <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl leading-tight text-white max-w-[320px] mx-auto">
        Our Services
      </h2>
      <p className="text-[10px] sm:text-xs md:text-sm text-white mt-4 max-w-[600px] mx-auto leading-tight">
        Empowering your business with innovative, reliable software solutions —
        from expert IT consulting to cutting-edge web and mobile app development,
        we craft technology that drives growth and efficiency.
      </p>
    </div>

    {/* Service Cards */}
    <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
      {services.map(({ id, img, gradientFrom }) => (
        <div
          key={id}
          className="relative w-[120px] sm:w-[140px] md:w-[160px] h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden"
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div
            className="absolute bottom-0 left-0 w-full px-3 py-2 text-white font-extrabold text-3xl sm:text-4xl select-none"
            style={{
              background: `linear-gradient(to top, ${gradientFrom}, transparent)`,
              borderBottomLeftRadius: "0.75rem",
              borderBottomRightRadius: "0.75rem",
            }}
          >
            {id}
          </div>
        </div>
      ))}
    </div>

    {/* Descriptions */}
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-4 text-[9px] sm:text-xs text-black justify-center">
      {services.map(({ id, title, description }) => (
        <div key={id} className="w-[120px] sm:w-[140px] md:w-[160px]">
          <h3 className="font-bold text-[10px] sm:text-xs md:text-sm">{title}</h3>
          <p className="text-gray-400 mt-1 leading-tight">{description}</p>
        </div>
      ))}
    </div>

    {/* Footer */}
    <p className="mt-6 text-[10px] sm:text-xs font-bold text-black text-center">
      We have <span className="font-extrabold">all</span> the services to help your
      business.{" "}
      <a
        href="#"
        className="text-[#00a9b7] underline decoration-[#00a9b7] decoration-1 font-semibold"
      >
        See all services
      </a>
    </p>
  </main>
</section>


      <section className="bg-white py-12  md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="bg-[#1E429F] text-white rounded-xl p-8 relative">
            <h3 className="text-5xl font-bold text-white/10 absolute top-4 left-6 select-none z-0">
              What we do
            </h3>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                IT Development from <span className="text-white">Conception</span>{" "}
                to <span className="text-[#00F0FF]">Delivery</span>
              </h2>

              {developmentData.map((item, index) => (
                <div key={index} className="mb-3">
                  <button
                    className={`w-full text-left px-4 py-3 font-semibold rounded-md transition duration-300 ${
                      activeIndex === index
                        ? "bg-[#00C8FF] text-white"
                        : "bg-[#355CBA] text-white"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </button>
                  {activeIndex === index && (
                    <div className="mt-2 px-4 text-white text-sm">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Development Work"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#1E429F]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    


    </>

  );
};

export default CombinedServicesDevelopment;
