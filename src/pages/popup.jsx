import React, { useEffect } from "react";
import logo from "../assets/AVATAR-IMAGE.png";
import { useDispatch, useSelector } from "react-redux";
import { submitLead, resetLeadState } from "../redux/leadSlice";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaLock,
  FaBolt,
  FaInfinity,
  FaHeadphones,
} from "react-icons/fa";
import pic from "../assets/social-media-course-by-shahid.jpg";

const features = [
  {
    icon: <FaLock />,
    title: "Secure Payment",
    subtitle: "100% protected",
  },
  {
    icon: <FaBolt />,
    title: "Instant Access",
    subtitle: "Immediate delivery",
  },
  {
    icon: <FaInfinity />,
    title: "Lifetime Access",
    subtitle: "Never expires",
  },
  {
    icon: <FaHeadphones />,
    title: "24/7 Support",
    subtitle: "Always available",
  },
];

const LeadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, error, lead } = useSelector(
    (state) => state.lead
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    dispatch(submitLead(data));
  };

  useEffect(() => {
    if (success && lead) {
      localStorage.setItem("leadData", JSON.stringify(lead));
      navigate("/home", { replace: true });
      dispatch(resetLeadState());
    }
  }, [success, lead, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-7xl w-full mx-auto">

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">

          {/* LEFT CARD (HIDDEN ON MOBILE) */}
          <div className="hidden lg:block flex-1 bg-white rounded-2xl shadow overflow-hidden">

            <img
              src={pic}
              className="w-full h-auto object-contain"
              alt="course"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">
                Complete Social Media Income System
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-100 rounded-xl p-4"
                  >
                    <div className="text-black text-lg">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-md lg:w-[420px] bg-white rounded-2xl shadow p-6 mx-auto">

            <h2 className="font-inter font-bold text-lg sm:text-2xl text-left sm:text-center">
              Learn 3 Powerful Ways to Turn Social Media Into Income
            </h2>

            <p className="mt-2 font-inter font-semibold text-xs sm:text-sm text-left sm:text-center">
              Register now to watch free video 🚀
            </p>
            {/* Profile */}
            <div className="flex items-center shadow-md rounded-lg gap-3 p-3 mt-4 mb-4">
              <img
                src={logo}
                className="w-20 h-20 rounded-full object-cover border"
                alt="profile"
              />
              <div id="instructor-info">
                <p id="instructor-name" className="font-semibold">
                  Shahid Raza
                </p>

                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li id="tagline">
                    I help people earn money using Social Media
                  </li>
                  <li id="role">
                    Digital Marketing Expert & Educator
                  </li>
                </ul>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  WhatsApp Number
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5">
                    <img
                      src="https://i.ibb.co/MxSQH3Dr/india.png"
                      className="w-full h-full"
                      alt="india flag"
                    />
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="WhatsApp number"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm text-center">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold text-sm"
              >
                {loading ? "Submitting..." : "Register Now"}
              </button>

            </form>

            <hr className="my-6" />

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Full lifetime access
              </p>

              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Certificate of completion
              </p>

              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Priority support
              </p>

              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                30-day money-back guarantee
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadPage;