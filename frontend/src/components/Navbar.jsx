'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20 text-white">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <img
              className="h-20 w-auto"
              src="/Dream Home (Postcards).png"
              alt="DREAM HOME"
            />
            <h2 className="text-2xl font-bold italic">
              DREAM HOME
            </h2>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="font-medium hover:text-blue-400 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-white/10"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <ul className="flex flex-col space-y-4 pb-4">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className="block font-medium hover:text-blue-400 transition-colors px-2 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar;