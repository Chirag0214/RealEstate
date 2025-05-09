import React from 'react'

const page = () => {
  return (
    <>
      <div id='login' className=" border-2 boder-stone-500 p-6 rounded-md shadow-lg w-96 bg-white">
        <h1 className="text-center text-3xl block font-semiblod my-4">
          <i className="fa-solid fa-user" />
          Login
        </h1>
        <div className="mt-3">
          <label htmlFor="email" className="block text-base mb-2">
            Username <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Username..."
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2">
            Password <span className="text-red-400">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password..."
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label>Remeber Me?</label>
          </div>
          <div>
            <a href="#" className="text-indigo-700 font-semiblod">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="border-2 border-black bg-black text-white py-1 w-full rounded-md hover:bg-transparent hover:text-black font-semiblod"
          >
            Login
          </button>
        </div>
        <div>
          <h6 className="text-center">
            Don't have an account?
            <a href="#">
              <samp className="text-green-900">SignUp</samp>
            </a>{" "}
          </h6>
        </div>
      </div>
    </>
  )
}

export default page
