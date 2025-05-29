import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { Shield, Building2, Award } from 'lucide-react';
import companyLogo from '/assets/companylogo.png'; // Update if path differs

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={companyLogo} alt="Rbrickks Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-yellow-400">Rbrickks Technology</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Rbrickks Technology delivers cutting-edge IT services that transform your business digitally.
          </p>
          <div className="flex gap-4 text-gray-300">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer transition" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {['App Development', 'Web Development', 'AI / ML Services', 'Cloud Computing', 'Digital Marketing'].map(service => (
              <li key={service} className="hover:text-white cursor-pointer transition">{service}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-auto px-4 sm:px-0">
          <h3 className="text-blue-500 font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { name: 'Home', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Testimonials', path: '/testimonials' },
              { name: 'Contact', path: '/ContactPage ' },
            ].map(({ name, path }) => (
              <li key={name} className="cursor-pointer">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block transition-colors duration-200 hover:text-white ${
                      isActive ? 'text-white font-semibold underline' : ''
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="flex flex-col h-full">
          <h3 className="text-blue-500 font-semibold mb-4 text-lg">Certifications</h3>
          <div className="space-y-2">
            {[
              { icon: <Shield className="w-4 h-4" />, title: 'ISO 9001:2015', desc: 'Quality Management', bg: 'bg-blue-700' },
              { icon: <Building2 className="w-4 h-4" />, title: 'MNC Certified', desc: 'Global Presence', bg: 'bg-green-600' },
              { icon: <Award className="w-4 h-4" />, title: 'MSME Registered', desc: 'Small & Medium Business', bg: 'bg-orange-500' },
              { icon: <Shield className="w-4 h-4" />, title: 'ISO 14001', desc: 'Environmental Standards', bg: 'bg-purple-600' },
            ].map(({ icon, title, desc, bg }, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-slate-900 p-2.5 rounded-md">
                <div className={`${bg} p-1.5 rounded-full text-white flex items-center justify-center`}>
                  {icon}
                </div>
                <div className="leading-tight">
                  <p className="font-medium text-xs text-white">{title}</p>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              <div>
                <span className="font-bold">Head Office:</span><br />
                Rbrickks Technology<br />
                #406, 4th Floor, V18, Opp. Cummins Campus,<br />
                Balewadi High Street, Pune
              </div>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaPhoneAlt className="text-blue-400" />
              <span>+91 7249400874</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
              <FaEnvelope className="text-blue-400" />
              <span>rbrickkstechnologyprivatelim@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Rbrickks Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
