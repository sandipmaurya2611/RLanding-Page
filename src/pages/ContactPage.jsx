import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const contactInfo = {
    address: `Rbrickks Technology
#406, 4th Floor, V18, Opp. Cummins Asian Campus,
Balewadi High Street, Pune`,
    phone: '+91 7249400874',
    email: 'rbrickkstechnologyprivatelim@gmail.com',
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_085m2ou', 'template_rynn9n8', form.current, {
        publicKey: 'k0NV7Z33eCv9HO8Nv',
      })
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setStatus('Failed to send message.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 pt-32 pb-10 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12 text-purple-500">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 rounded-md text-lg font-medium transition"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-center text-purple-300 mt-2">{status}</p>}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col justify-between gap-6">
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
