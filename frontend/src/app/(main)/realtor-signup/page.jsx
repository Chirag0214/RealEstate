"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function RealtorSignup() {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            agency: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
            agency: Yup.string().required("Agency is required"),
            phone: Yup.string().required("Phone is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const res = await axios.post("http://localhost:5000/realtor/add", values);
                toast.success("Signup successful!");
                formik.resetForm();
            } catch (err) {
                toast.error(err.response?.data?.message || "Signup failed");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Realtor Signup</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded px-3 py-2"
                        {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 text-sm">{formik.errors.name}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border rounded px-3 py-2"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full border rounded px-3 py-2"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Agency</label>
                    <input
                        type="text"
                        name="agency"
                        className="w-full border rounded px-3 py-2"
                        {...formik.getFieldProps("agency")}
                    />
                    {formik.touched.agency && formik.errors.agency && (
                        <div className="text-red-500 text-sm">{formik.errors.agency}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="w-full border rounded px-3 py-2"
                        {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    disabled={loading}
                >
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
