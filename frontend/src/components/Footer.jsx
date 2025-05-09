// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className='flex items-center'>
      <span><img className='size-15' src="/Dream Home (Postcards).png" alt="Drem Home logo" /></span> <h2 className="text-2xl font-bold mb-3"><i>DREAM HOME</i></h2>
          <p className="text-sm">
            Helping you find your perfect property — homes, apartments, and commercial spaces across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/properties" className="hover:text-blue-300">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>📍  Lucknow,India</li>
            <li>📞 +91-98765-43210</li>
            <li>✉️ dreamhome@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-blue-300"></a>
            <a href="#" className="hover:text-blue-300">📘</a>
            <a href="#" className="hover:text-blue-300">📸</a>
            <a href="#" className="hover:text-blue-300">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-300">
        &copy; {new Date().getFullYear()} DreamSpace Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
