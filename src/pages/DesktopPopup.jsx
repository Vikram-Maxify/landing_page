import React, { useEffect, useState } from "react";
import {
    FaLock,
    FaChevronRight,
    FaCheckCircle,
    FaEnvelope,
    FaPhone,
    FaShieldAlt,
    FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Redux
import { useDispatch, useSelector } from "react-redux";
import { submitLead, resetLeadState } from "../redux/leadSlice";

import pic from "../assets/social-media-course-by-shahid.jpg"

const PaymentPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [isDesktop, setIsDesktop] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, success, error, lead } = useSelector(
        (state) => state.lead
    );

    const course = {
        title: "Complete Social Media Income System",
        image: pic,
    };

    // ✅ Screen detect
    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // ✅ Input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ✅ Submit (Same API)
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(submitLead({
            ...formData,
            page: "payment" // 🔥 IMPORTANT (tracking)
        }));
    };

    // ✅ Success handling
    useEffect(() => {
        if (success && lead) {
            localStorage.setItem("paymentData", JSON.stringify(lead));

            navigate("/home");

            dispatch(resetLeadState());
        }
    }, [success, lead]);

    return (
        <>
    {isDesktop && (
      <div className="min-h-screen bg-gray-100 py-10 pt-20 px-4">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold mb-8">
                    Complete Your Enrollment
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <img
                                src={course.image}
                                className="w-full h-[280px] md:h-[350px] object-cover"
                            />

                            <div className="p-6 md:p-8">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">
                                    {course.title}
                                </h2>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500" />
                                        <span>Lifetime Access</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500" />
                                        <span>Certificate Included</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-[420px]">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                            {/* <div className="bg-[#0092B9] text-white p-5">
                                <h3 className="font-bold flex items-center gap-2 text-lg">
                                    <FaShieldAlt />
                                    Secure 
                                </h3>
                            </div> */}

                            <div className="p-6 md:p-7">
                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Name */}
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className="w-full border p-3 rounded-lg"
                                        required
                                    />

                                    {/* Email */}
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full border p-3 rounded-lg"
                                        required
                                    />

                                    {/* Phone */}
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className="w-full border p-3 rounded-lg"
                                        required
                                    />

                                    {/* ❗ Error */}
                                    {error && (
                                        <p className="text-red-500 text-sm">{error}</p>
                                    )}

                                    {/* Button */}
                                    <button
                                        disabled={loading}
                                        className="w-full bg-[#0092B9] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
                                    >
                                        <FaLock />
                                        {loading ? "Processing..." : "Register"}
                                        <FaChevronRight />
                                    </button>

                                </form>

                                <div className="border-t my-6"></div>

                                <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                                    <FaShieldAlt className="text-gray-400" />
                                    Your Data is secured with 256-bit SSL encryption
                                </p>

                                <div>
                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#111827]">
                                        <FaCheckCircle className="text-green-500" />
                                        What You Get
                                    </h3>

                                    <div className="space-y-3">

                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <p className="text-gray-700 text-sm md:text-base">
                                                Full lifetime access to all course materials
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <p className="text-gray-700 text-sm md:text-base">
                                                Certificate of completion
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <p className="text-gray-700 text-sm md:text-base">
                                                Priority support & community access
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <p className="text-gray-700 text-sm md:text-base">
                                                30-day money-back guarantee
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        )}
  </>
    );
};

export default PaymentPage;