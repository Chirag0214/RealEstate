// Footer.jsx
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube } from '@tabler/icons-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-20">

        {/* Company Info */}
        <div className='md:col-span-2 px-10'>
          <div className='flex items-center justify-evenly'>
            <img className='size-25' src="/Dream Home (Postcards).png" alt="Drem Home logo" />
            <h2 className="text-2xl font-bold mb-3">DREAM HOME</h2>
          </div>
          <p className="text-sm text-center">
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
            <a href="#" className="hover:text-blue-300"><IconBrandFacebook /></a>
            <a href="#" className="hover:text-blue-300"><IconBrandYoutube /></a>
            <a href="#" className="hover:text-blue-300"><IconBrandInstagram /></a>
            <a href="#" className="hover:text-blue-300"><IconBrandWhatsapp /></a>
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
