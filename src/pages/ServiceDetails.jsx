import React, { useState } from "react";

const serviceDetailsData = {
  heading: "Web Development",
  description: [
    `Support and streamline your operations with comprehensive custom web development solutions. Whether you're a startup looking to establish a digital footprint or an enterprise aiming to modernize your web infrastructure, our team provides full-cycle web development tailored to your needs.`,
    `We specialize in crafting dynamic, responsive, and scalable websites that align seamlessly with your business goals. Our websites not only look great but also deliver performance, security, and user satisfaction. Each solution is built with a strategic approach to ensure optimal functionality, usability, and aesthetics.`,
    `We specialize in crafting dynamic, responsive, and scalable websites that align seamlessly with your business goals. Our websites not only look great but also deliver performance, security, and user satisfaction. Each solution is built with a strategic approach to ensure optimal functionality, usability, and aesthetics.`,
  ],
  strategy: {
    heading: "Planning & Strategy",
    points: [
      "Understanding your business objectives and target audience",
      "Tailored architecture and technology stack selection",
      "Agile development and continuous delivery approach",
    ],
  },
};

const Servicedetails = () => {
  const { heading, description, strategy, footerText } = serviceDetailsData;
  const [activeBox, setActiveBox] = useState(null);

  const features = [
    {
      title: "Customer Focus",
      text: "Prioritizing the needs and satisfaction of our customers, with personal attention to their needs, providing practical and helpful recommendations, and going the extra mile to exceed their expectations.",
    },
    {
      title: "Excellence",
      text: "Striving for excellence, consistently delivering high-quality services, continuously improving processes, and embracing innovations to enhance customer experiences.",
    },
    {
      title: "Integrity",
      text: "Ethical integrity and upholding high standards. Practicing what we preach is essential for building trust and compliance with customers.",
    },
    {
      title: "Customer Advocacy",
      text: "Emphasis on the company's dedication to proactively representing the needs and best interests of our clients/stakeholders.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[480px]">
        <img
          src="/assets/services.jpg"
          alt="Office team working together in modern workspace with computers and documents"
          className="w-full h-full object-cover"
          draggable="false"
          width={1920}
          height={480}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 flex flex-col justify-center items-start pb-8 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-44">
          <div className="relative max-w-7xl">
            <h2
              className="technum-text select-none pointer-events-none"
              style={{
                lineHeight: 1,
                fontFamily: "Arial, sans-serif",
                fontWeight: 900,
                fontSize: "6rem",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255 255 255 / 0.3)",
                textStroke: "1px rgba(255 255 255 / 0.3)",
                userSelect: "none",
                letterSpacing: "-0.05em",
              }}
            >
              RBrickks Technology
            </h2>
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-md -mt-4">
              SERVICES
            </h1>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS SECTION */}
      <section className="bg-white text-blue-900 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Image and Text Side by Side */}
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left Side Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/servicesdetail.jpg"
                alt="Web development illustration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Right Side Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{heading}</h2>
              {description.map((para, index) => (
                <p key={index} className="mb-4 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Strategy Section with Image */}
<div className="mt-12 flex flex-col lg:flex-row items-start gap-8">
  <div className="lg:w-1/2">
    <h3 className="text-2xl font-semibold mb-4">{strategy.heading}</h3>
    <ul className="list-disc list-inside space-y-2">
      {strategy.points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
  <div className="lg:w-1/2">
    <img
      src="/assets/servicesplan.jpg"
      alt="Services plan"
      className="rounded-lg shadow-lg w-full h-auto object-cover"
    />
  </div>
</div>


          {/* Footer Paragraph */}
          <p className="mt-8 text-base leading-relaxed">{footerText}</p>

      {/* Features Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
  {features.map((feature, i) => {
    const images = ["customer.jpg", "excellence.jpg", "integraty.jpg", "customer2.jpg"];
    return (
      <div
        key={i}
        className={`relative border border-blue-100 rounded-lg bg-blue-50 hover:bg-white transition-colors cursor-pointer shadow-sm overflow-hidden ${
          activeBox === i ? "bg-white shadow-md" : ""
        }`}
        onMouseEnter={() => setActiveBox(i)}
        onMouseLeave={() => setActiveBox(null)}
      >
        {/* Image with bottom-left overlay text */}
        <div className="relative w-full h-40">
          <img
            src={`/assets/${images[i]}`}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-blue-200/60 px-3 py-1 rounded-tr-lg">
            <h4 className="text-blue-900 font-semibold text-sm">{feature.title}</h4>
          </div>
        </div>

        {/* Description below image */}
        <div className="p-4">
          <p className="text-sm leading-relaxed">{feature.text}</p>
        </div>
      </div>
    );
  })}
</div>


        </div>
      </section>
    </>
  );
};

export default Servicedetails;
