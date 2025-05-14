'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {

  useEffect(() => {
    // Import Swiper dynamically (client-side only)
    const initSwiper = async () => {
      if (typeof window !== 'undefined') {
        const Swiper = (await import('swiper')).default;
        // Import required modules
        const { Navigation, Pagination, Autoplay } = await import('swiper/modules');

        // Initialize Swiper
        const swiper = new Swiper('.mySwiper', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          modules: [Navigation, Pagination, Autoplay],
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      }
    };

    initSwiper();
  }, []);

  return (
    <div>
      <main className="bg-white">
          {/* Hero */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/9203764/pexels-photo-9203764.jpeg" 
              alt="Dream Home Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
            {/* Main Heading with animated entrance */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fadeIn">
              <span className="italic">DREAM HOME</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mb-10">
              Find your modern and affordable sweet home with us.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/login">
                <button
                  type="button"
                  className="px-8 py-3 bg-white text-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold min-w-[140px]"
                >
                  Login
                </button>
              </Link>
              <Link href="/sign-up">
                <button
                  type="button"
                  className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 font-semibold min-w-[140px]"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Hero end */}

        {/* Projects */}
        <section id='projects' className="min-h-[75vh] w-[95%] mx-auto py-10">
          <h2 className="text-5xl text-center font-bold pb-10">Projects</h2>
          <div className="w-[95%] mx-auto">
            {/* Swiper Component */}
            <div className="swiper-container">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {/* Home-1 */}
                  <div className="swiper-slide">
                    <div className="border-3 rounded-xl shadow-lg">
                      <img
                        className="h-[350px] w-full rounded-xl object-cover"
                        src="/Vila.jpg"
                        alt="Home-1"
                      />
                      <div className="p-4 bg-white rounded-b-xl">
                        <h3 className="text-xl font-semibold">Modern Villa</h3>
                        <p className="text-gray-600">Luxury 4BHK with garden</p>
                      </div>
                    </div>
                  </div>
                  {/* Home-2 */}
                  <div className="swiper-slide">
                    <div className="border-3 rounded-xl shadow-lg">
                      <img
                        className="h-[350px] w-full rounded-xl object-cover"
                        src="/apartment.jpg"
                        alt="Home-2"
                      />
                      <div className="p-4 bg-white rounded-b-xl">
                        <h3 className="text-xl font-semibold">Urban Apartment</h3>
                        <p className="text-gray-600">Premium 3BHK with balcony</p>
                      </div>
                    </div>
                  </div>
                  {/* Home-3 */}
                  <div className="swiper-slide">
                    <div className="border-3 rounded-xl shadow-lg">
                      <img
                        className="h-[350px] w-full rounded-xl object-cover"
                        src="/home-3.jpg"
                        alt="Home-3"
                      />
                      <div className="p-4 bg-white rounded-b-xl">
                        <h3 className="text-xl font-semibold">Countryside Home</h3>
                        <p className="text-gray-600">Spacious 3BHK farmhouse</p>
                      </div>
                    </div>
                  </div>
                  {/* Home-4 */}
                  <div className="swiper-slide">
                    <div className="border-3 rounded-xl shadow-lg">
                      <img
                        className="h-[350px] w-full rounded-xl object-cover"
                        src="/beach home.jpg"
                        alt="Home-4"
                      />
                      <div className="p-4 bg-white rounded-b-xl">
                        <h3 className="text-xl font-semibold">Beach House</h3>
                        <p className="text-gray-600">Luxury waterfront property</p>
                      </div>
                    </div>
                  </div>
                  {/* Home-5 */}
                  <div className="swiper-slide">
                    <div className="border-3 rounded-xl shadow-lg">
                      <img
                        className="h-[350px] w-full rounded-xl object-cover"
                        src="/home.jpg"
                        alt="Home-5"
                      />
                      <div className="p-4 bg-white rounded-b-xl">
                        <h3 className="text-xl font-semibold">Mountain Retreat</h3>
                        <p className="text-gray-600">Cozy 2BHK hillside cabin</p>
                      </div>
                    </div>
                  </div>
                  {/* Home-6 */}
                  <div className="swiper-slide">
                    <div className="border-3 rounded-xl shadow-lg">
                      <img
                        className="h-[350px] w-full rounded-xl object-cover"
                        src="/home-7.jpg"
                        alt="Home-6"
                      />
                      <div className="p-4 bg-white rounded-b-xl">
                        <h3 className="text-xl font-semibold">City Penthouse</h3>
                        <p className="text-gray-600">Exclusive rooftop living</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="swiper-pagination "></div> */}
              </div>
              {/* <div className="swiper-button-next"></div> */}
              {/* <div className="swiper-button-prev"></div> */}
            </div>
          </div>
        </section>
        {/* Projects end */}

        {/* About */}
        <section id='about' className=" min-h-[75vh] w-[95%] mx-auto bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-10">
              About
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Column - Text Content */}
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  <span className="font-semibold text-blue-800">DREAM HOME</span> is a leading
                  real estate platform dedicated to helping people buy, sell, and rent properties with
                  ease and confidence. We believe in offering a seamless experience backed by
                  technology and transparency.
                </p>
                <p className="text-lg  mb-6">
                  Our expert agents and verified listings ensure that you find the perfect property —
                  whether it's your dream home, a commercial investment, or a cozy rental.
                </p>
                <p className="text-lg ">
                  With a growing network of satisfied clients, we are proud to be a trusted name in
                  property solutions across cities.
                </p>
              </div>

              {/* Right Column - Image */}
              <div>
                <img
                  src="/bg home .jpg"
                  alt="home img"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Our Mission & Values */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-black p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-white">
                  To simplify real estate for everyone by combining expert guidance with smart tools.
                </p>
              </div>
              <div className="bg-black p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us</h3>
                <p className="text-white">
                  100% verified listings, honest pricing, and a team that truly cares about your goals.
                </p>
              </div>
              <div className="bg-black p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
                <p className="text-white">
                  Integrity. Transparency. Innovation. Client-First Approach.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* About end */}

        {/* Contact */}
        <section id='contact' className="w-[95%] mx-auto bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-5xl font-bold text-center text-blue-800 mb-8">
              Contact
            </h2>

            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-10 text-center text-gray-600">
              📍 Lucknow,India &nbsp;&nbsp; | &nbsp;&nbsp; 📞 +91-98765-43210
            </div>
          </div>

        </section>
        {/* Contact end */}
      </main>

    </div>
  )
}

export default Home;
