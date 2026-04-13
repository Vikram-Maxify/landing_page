import React from "react";
import {
  MdLocationCity,
  MdChevronRight,
  MdEmail,
  MdAccessTime,
  MdLocationOn,
  MdWarning,
} from "react-icons/md";

import {
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white pt-14 md:pt-20 pb-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* COMPANY */}
          <div>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#0092B9] flex items-center justify-center mr-3">
                <MdLocationCity />
              </div>
              <div>
                <h2 className="text-lg font-bold">Maxify Academy</h2>
                <p className="text-gray-400 text-sm">Apne Ghar Se</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Complete Social Media Income System
            </p>

            <div className="flex gap-3">
              {[FaGlobe, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-[#0092B9] transition cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-5 border-b border-gray-700 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="flex items-center text-gray-400 hover:text-white transition">
                  <MdChevronRight className="mr-2" />
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="flex items-center text-gray-400 hover:text-white transition">
                  <MdChevronRight className="mr-2" />
                  About me
                </a>
              </li>

              <li>
                <a href="#success" className="flex items-center text-gray-400 hover:text-white transition">
                  <MdChevronRight className="mr-2" />
                  Success Stories
                </a>
              </li>

              <li>
                <a href="#faq" className="flex items-center text-gray-400 hover:text-white transition">
                  <MdChevronRight className="mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-5 border-b border-gray-700 pb-2">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">
                <MdEmail className="text-[#0092B9]" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">support@maxifyacademy.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MdAccessTime className="text-[#0092B9]" />
                <div>
                  <p className="font-medium">Support Hours</p>
                  <p className="text-gray-400">10 AM - 7 PM (Mon-Sat)</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MdLocationOn className="text-[#0092B9]" />
                <div>
                  <p className="font-medium">Based In</p>
                  <p className="text-gray-400">Delhi, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* FREE RESOURCES (UNCHANGED CONTENT + INPUT ADD) */}
          <div>
            <h3 className="font-semibold mb-5 border-b border-gray-700 pb-2">
              Free Resources
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Free Digital Marketing Guide aur updates ke liye subscribe karein
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0092B9]"
              />
              <button className="bg-[#0092B9] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © 2023 Apni City, Apne Gaon Se. All rights reserved.
        </div>

        {/* DISCLAIMER (EXACT SAME AS YOUR ORIGINAL) */}
        <div className="mt-6 p-4 md:p-6 bg-gray-800 rounded-xl">
          <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center text-white">
            <MdWarning className="text-yellow-500 mr-2" />
            Important Disclaimer
          </h4>

          <p className="text-xs md:text-sm text-gray-400">
            This course is designed for educational purposes to help you build practical social media
            management skills. Income figures mentioned are based on potential outcomes and individual
            results may vary. We don't guarantee specific earnings. Your success depends on your effort,
            skills, and local market conditions. This is not a get-rich-quick scheme but a skill development
            program.
          </p>

          <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-4">
            *This program is not affiliated with Instagram, Facebook, or any other social media platforms
            mentioned.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;