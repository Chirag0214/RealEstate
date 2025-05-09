import React from 'react'

function page() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create Account </title>
  <div className=" border-2 boder-stone-500 p-6 rounded-md shadow-lg w-96 bg-white">
    <h1 className="text-center text-3xl block font-semiblod my-4">SignUp</h1>
    <div className="mt-3">
      <label htmlFor="Username" className="block text-base mb-2">
        Name<span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        id="Username"
        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
        placeholder="Enter Username..."
      />
    </div>
    <div className="mt-3">
      <label htmlFor="email" className="block text-base mb-2">
        Email<span className="text-red-400">*</span>
      </label>
      <input
        type="email"
        id="email"
        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
        placeholder="Enter Email..."
      />
    </div>
    <div className="mt-3">
      <label htmlFor="password" className="block text-base mb-2">
        Password<span className="text-red-400">*</span>
      </label>
      <input
        type="password"
        id="password"
        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
        placeholder="Enter Password..."
      />
    </div>
    <div className="mt-3">
      <label htmlFor="password" className="block text-base mb-2">
        Confirm Password<span className="text-red-400">*</span>
      </label>
      <input
        type="password"
        id="password"
        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
        placeholder="Enter Confirm Password..."
      />
    </div>
    <div className="mt-3 flex justify-between items-center">
      <div>
        <input type="checkbox" />
        <label>Agree to terma &amp; conditions</label>
      </div>
    </div>
    <div className="mt-4">
      <button
        type="signup"
        className="border-2 border-black bg-black text-white py-1 w-full rounded-md hover:bg-transparent hover:text-black font-semiblod"
      >
        Create Account
      </button>
    </div>
    <div>
      <h6 className="text-center">
        Already have an account?
        <a href="/login">
          <samp className="text-green-900"> Login</samp>
        </a>{" "}
      </h6>
    </div>
  </div>
</>

  )
}

export default page
