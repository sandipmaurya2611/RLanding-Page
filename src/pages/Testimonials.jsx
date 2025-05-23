import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechStart Inc.",
    text: "Rbrickks Technology transformed our digital presence completely. Their team delivered a cutting-edge web application that exceeded our expectations in both functionality and design."
  },
  {
    name: "Rajesh Patel",
    role: "CTO, InnovateSoft",
    text: "The mobile app developed by Rbrickks has revolutionized how we interact with our customers. The attention to detail and technical expertise was impressive throughout the project."
  },
  {
    name: "Ananya Desai",
    role: "Marketing Director, GrowthMarket",
    text: "Their SEO and digital marketing services have significantly increased our online visibility. We've seen a 200% increase in organic traffic within just three months of working with them."
  },
  {
    name: "Vikram Singh",
    role: "Security Officer, SecureTech",
    text: "The security software implementation by Rbrickks Technology has been flawless. Their team's expertise in cybersecurity is unmatched, and they've made our systems more robust than ever."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Client Testimonials
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-purple-400 text-3xl mb-4" />
            <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;