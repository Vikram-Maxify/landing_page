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

const PaymentPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [isDesktop, setIsDesktop] = useState(true);
    const navigate = useNavigate();



    const course = {
        title: "Complete Social Media Income System",
        image: "https://i.ibb.co/jPC3q2JK/social-media-course-by-shahid.jpg",
    };

    // ✅ Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // ❌ Mobile pe kuch nahi dikhana
    if (!isDesktop) return null;

    // ✅ Input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ✅ Submit + Save
    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Save data
        localStorage.setItem("paymentData", JSON.stringify(formData));

        console.log("Saved:", formData);

        // ✅ Redirect
        navigate("/home");
    };

    return (
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

                            <div className="bg-[#0092B9] text-white p-5">
                                <h3 className="font-bold flex items-center gap-2 text-lg">
                                    <FaShieldAlt />
                                    Secure Checkout
                                </h3>
                            </div>

                            <div className="p-6 md:p-7">
                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Name */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            <FaUser className="inline mr-2" />
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            <FaEnvelope className="inline mr-2" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">
                                            <FaPhone className="inline mr-2" />
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border p-3 rounded-lg"
                                            required
                                        />
                                    </div>

                                    {/* Button */}
                                    <button className="w-full bg-[#0092B9] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                                        <FaLock />
                                        Register
                                        <FaChevronRight />
                                    </button>

                                </form>
                                {/* Divider */}
                                <div className="border-t my-6"></div>

                                {/* Security Text */}
                                <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                                    <FaShieldAlt className="text-gray-400" />
                                    Your payment is secured with 256-bit SSL encryption
                                </p>

                                {/* What You Get */}
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
    );
};

export default PaymentPage;