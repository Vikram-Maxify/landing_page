import React, { useEffect, useState } from "react";
import logo from "../assets/AVATAR-IMAGE.png";
import DesktopPopup from "./DesktopPopup";

import { useDispatch, useSelector } from "react-redux";
import { submitLead, resetLeadState } from "../redux/leadSlice";
import { useNavigate } from "react-router-dom";

const LeadPopup = ({ onClose }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, error, lead } = useSelector(
    (state) => state.lead
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Submit via Redux
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    dispatch(submitLead(data));
  };

  // ✅ Success handling
  useEffect(() => {
    if (success && lead) {
      localStorage.setItem("leadData", JSON.stringify(lead));

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      // ✅ Direct navigation
      navigate("/home", { replace: true });

      dispatch(resetLeadState());
    }
  }, [success, lead, dispatch, navigate]);
  // ✅ Desktop View
  if (isDesktop) {
    return (
      <DesktopPopup
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    );
  }

  // ✅ Mobile View
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 font-[Inter] p-3">

      <div className="bg-gray-200 w-full max-w-sm md:max-w-md rounded-2xl p-3 relative">

        <div className="w-full bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-black">

          <h2 className="text-xl sm:text-2xl font-bold text-center mt-4">
            Learn 3 Powerful Ways to Turn Social Media Into Income
          </h2>

          <p className="mt-2 text-sm sm:text-base text-center">
            Register now to watch free video 🚀
          </p>

          {/* Profile */}
          <div className="flex items-center shadow-lg shadow-blue-200 rounded-lg gap-3 p-3 mt-4 mb-4">
            <img
              src={logo}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow"
              alt="profile"
            />
            <div>
              <p className="font-semibold text-base sm:text-lg">
                Shahid Raza
              </p>
              <p className="text-sm mt-1">
                • Digital Marketing Expert
              </p>
              <p className="text-sm">
                • Social Media Income Coach
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="mb-1 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                WhatsApp Number <span className="text-red-500">*</span>
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
                  placeholder="WhatsApp number"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Note */}
            <p className="text-sm text-center flex items-center justify-center gap-1">
              You’ll receive updates on
              <img
                src="https://i.ibb.co/BWRTgw8/whatsapp.png"
                className="w-4 h-4"
                alt="whatsapp"
              />
              <span className="font-semibold">WhatsApp</span>
            </p>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold text-sm transition"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default LeadPopup;