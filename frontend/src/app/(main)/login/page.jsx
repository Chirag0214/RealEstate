import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      toast.success('Login successful!')
      // Add your login logic here
    },
  })
  return (
    <>
      <Toaster />
      <div id='login' className=" border-2 boder-stone-500 p-6 rounded-md shadow-lg w-96 bg-white">
        <h1 className="text-center text-3xl block font-semiblod my-4">
          <i className="fa-solid fa-user" />
          Login
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Username <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formik.values.remember}
                onChange={formik.handleChange}
              />
              <label htmlFor="remember">Remember Me?</label>
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
        </form>
        <div>
          <h6 className="text-center">
            Don't have an account?
            <a href="/sign-up">
              <samp className="text-green-900">SignUp</samp>
            </a>{' '}
          </h6>
        </div>
      </div>
    </>
  )
}

export default Login;