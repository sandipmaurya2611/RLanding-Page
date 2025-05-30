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
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-20">
      {/* Header Banner */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/your-header-image.jpg)' }}
      >
        <div
  className="relative w-full h-[400px] bg-fixed bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      "url('/assets/contact.jpg')",
  }}
>
          <img
  src="/assets/contact.jpg"
  alt="Contact Banner"
  className="absolute inset-0 w-full h-full object-cover"/>
  </div>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-[500px] grayscale contrast-125 opacity-90">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://maps.google.com/maps?q=Balewadi%20High%20Street,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        />
      </div>

      {/* Contact Section */}
      <div className="relative w-full max-w-7xl mx-auto px-26 py-25 grid grid-cols-1 md:grid-cols-2 gap-16 -mt-48 z-10 bg-white bg-opacity-95 shadow-lg rounded-2xl">

        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-teal-600 underline decoration-teal-600">Touch</span>
          </h2>
          <p className="text-base text-gray-600">
            Thank you for reaching out to Rbrickks Technology. Please fill the form. Our team will contact you shortly.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-700 text-white p-3 rounded-full">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <p className="whitespace-pre-line">{contactInfo.address}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-700 text-white p-3 rounded-full">
                <FaPhoneAlt className="text-xl" />
              </div>
              <p>{contactInfo.phone}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-700 text-white p-3 rounded-full">
                <FaEnvelope className="text-xl" />
              </div>
              <p className="break-words">{contactInfo.email}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Name *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone Number *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-md transition"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-teal-600 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;