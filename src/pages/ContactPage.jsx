import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const contactInfo = {
    address: `Rbrickks Technology
#406, 4th Floor, V18, Opp. Cummins Asian Campus,
Balewadi High Street, Pune`,
    phone: '+91 7249400874',
    email: 'rbrickkstechnologyprivatelim@gmail.com',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 pt-32 pb-10 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12 text-purple-500">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}
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
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 rounded-md text-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Info + Map */}
          <div className="flex flex-col justify-between gap-6">
            {/* Contact Info */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 w-full">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Contact Info</h2>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-purple-500 text-lg mt-1" />
                <p className="whitespace-pre-line">{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-500 text-lg" />
                <p>{contactInfo.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-purple-500 text-lg" />
                <p className="break-words">{contactInfo.email}</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg w-full h-64 md:h-72">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?q=Balewadi%20High%20Street,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
