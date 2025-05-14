import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      agree: Yup.boolean().oneOf([true], 'You must agree to terms & conditions'),
    }),
    onSubmit: (values) => {
      toast.success('Account created successfully!')
      // Add your signup logic here
    },
  })
  return (
    <>
      <Toaster />
      <div className=" border-2 boder-stone-500 p-6 rounded-md shadow-lg w-96 bg-white">
        <h1 className="text-center text-3xl block font-semiblod my-4">SignUp</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Name<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-xs">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Email..."
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
              Password<span className="text-red-400">*</span>
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
          <div className="mt-3">
            <label htmlFor="confirmPassword" className="block text-base mb-2">
              Confirm Password<span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Confirm Password..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formik.values.agree}
                onChange={formik.handleChange}
              />
              <label htmlFor="agree">Agree to terms &amp; conditions</label>
              {formik.touched.agree && formik.errors.agree ? (
                <div className="text-red-500 text-xs">{formik.errors.agree}</div>
              ) : null}
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="border-2 border-black bg-black text-white py-1 w-full rounded-md hover:bg-transparent hover:text-black font-semiblod"
            >
              Create Account
            </button>
          </div>
        </form>
        <div>
          <h6 className="text-center">
            Already have an account?
            <a href="/login">
              <samp className="text-green-900"> Login</samp>
            </a>{' '}
          </h6>
        </div>
      </div>
    </>
  )
}

export default SignUp