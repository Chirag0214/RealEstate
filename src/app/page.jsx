import React from 'react'

const Home = () => {
  return (
    <div>
      <main className="bg-white">
        {/* Hero */}
        <section className=" min-h-[75vh] w-[95%]">
          <div className="min-h-[75vh] w-[95%] relative ">
            <img className="h-[600px] w-[100%] mx-13 pl-5" src="/home-1.jpg" />
            <div>
              <h4 className="absolute text-center top-[33%] w-[100%] ml-10 font-bold text-8xl">
                <i>DREAM HOME</i>
              </h4>
              <p className="absolute text-center top-[48%] text-white w-[100%] ml-10 font-bold text-2xl">
                Find your modern and affortable sweet home.
              </p>
              {/* <p class="absolute text-center top-[70%]  w-[100%] ml-10 font-bold text-3xl">
               
              </p>
              <p class="absolute text-center top-[75%]  w-[100%] ml-10 font-bold text-3xl">
              </p> */}
              <button
                type="button"
                className="h-10 w-50 rounded-lg  absolute top-[65%] ml-100 hover:bg-sky-700 cursor-pointer font-bold boder-2xl bg-white text-black"
              >
                Login
              </button>
              <button
                type="button"
                className="h-10 w-50 rounded-lg  absolute top-[65%] ml-180 hover:bg-sky-700 cursor-pointer font-bold boder-2xl bg-white text-black"
              >
                SignUp
              </button>
            </div>
          </div>
        </section>
        {/* Hero end */}
        {/* Projects */}
        <section className=" min-h-[75vh] w-[95%] ">
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
        <section className=" min-h-[75vh] w-[95%] ">
          <h2 className=" text-5xl text-center font-bold py-10">About</h2>
        </section>
        {/* About end */}
        {/* Contact */}
        <section className=" min-h-[75vh] w-[95%] ">
          <h2 className=" text-5xl text-center font-bold py-10">Contact</h2>
        </section>
        {/* Contact end */}
      </main>

    </div>
  )
}

export default Home;
