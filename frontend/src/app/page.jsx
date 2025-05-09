import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <main className="bg-white">
        {/* Hero */}
        <section className=" min-h-[75vh] w-[95%]">
          <div className="min-h-[75vh] w-[95%] relative ">
            <img className="h-[600px] w-[100%] mx-13 pl-5 filter:blur-sm" src="/home-1.jpg" />
            <div>
              <h4 className="absolute text-center top-[33%] w-[100%] ml-10 font-bold text-8xl">
                <i>DREAM HOME</i>
              </h4>
              <p className="absolute text-center top-[48%] text-white w-[100%] ml-10 font-bold text-2xl">
                Find your modern and affortable sweet home.
              </p>
              <Link href="/login">
                <button
                  type="button"
                  className="h-10 w-50 rounded-lg  absolute top-[65%] ml-180 hover:bg-sky-700 cursor-pointer font-bold boder-2xl bg-white text-black"
                >
                  Login
                </button>
              </Link>
              <Link href="/sign-up">
                <button
                  type="button"
                  className="h-10 w-50 rounded-lg  absolute top-[65%] ml-100 hover:bg-sky-700 cursor-pointer font-bold boder-2xl bg-white text-black"
                >
                  SignUp
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Hero end */}
        {/* Projects */}
        <section id='projects' className=" min-h-[75vh] w-[95%] ">
          <h2 className=" text-5xl text-center font-bold py-10">Projects</h2>
          <div className="w-[85%] mx-auto grid grid-cols-6 gap-10">
            {/* Home-1 */}
            <div className=" border-3 rounded-xl">
              <img
                className="h-[300px] w-[100%] rounded-xl"
                src="/home-2.jpeg"
                alt="Home-1"
              />
            </div>
            {/* Home-2 */}
            <div className="border-3 rounded-xl">
              <img
                className="h-[300px] w-[100%] rounded-xl"
                src="/home-3.jpeg"
                alt="Home-2"
              />
            </div>
            {/* Home-3 */}
            <div className="border-3 rounded-xl">
              <img
                className="h-[300px] w-[100%] rounded-xl"
                src="/home-4.jpeg"
                alt="Home-3"
              />
            </div>
            {/* Home-4 */}
            <div className="border-3 rounded-xl">
              <img
                className="h-[300px] w-[100%] rounded-xl"
                src="/home-5.jpeg"
                alt="Home-4"
              />
            </div>
            {/* Home-5 */}
            <div className="border-3 rounded-xl">
              <img
                className="h-[300px] w-[100%] rounded-xl"
                src="/home-6.jpeg"
                alt="Home-5"
              />
            </div>
            {/* Home-6 */}
            <div className="border-3 rounded-xl">
              <img
                className="h-[300px] w-[100%] rounded-xl"
                src="/home-7.jpg"
                alt="Home-6"
              />
            </div>
          </div>
        </section>
        {/* Projects end */}
        {/* About */}
        <section id='about' className=" min-h-[75vh] w-[95%] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
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
                  src="/home-4.jpeg"
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
        <section id='contact' className="w-[95%] bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
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
