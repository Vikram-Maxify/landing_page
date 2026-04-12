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
    <footer className="bg-[#111827] text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="responsive-container mx-auto">

        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10 mobile-grid-gap">

          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl gradient-bg flex items-center justify-center mr-3 md:mr-4">
                <MdLocationCity className="text-lg md:text-xl" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Apni City
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Apne Ghar Se
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Apne sheher ya gaon se hi Instagram aur Facebook ke zariye ₹30,000–₹90,000 mahine kamaane ka skill seekhein.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">

              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 text-gray-300 rounded-xl hover:bg-[#0092B9] hover:text-white transition-all duration-300 hover:-translate-y-1 tap-target">
                <FaGlobe className="text-sm md:text-base" />
              </a>

              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 text-gray-300 rounded-xl hover:bg-[#0092B9] hover:text-white transition-all duration-300 hover:-translate-y-1 tap-target">
                <FaInstagram className="text-sm md:text-base" />
              </a>

              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 text-gray-300 rounded-xl hover:bg-[#0092B9] hover:text-white transition-all duration-300 hover:-translate-y-1 tap-target">
                <FaLinkedinIn className="text-sm md:text-base" />
              </a>

              <a href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 text-gray-300 rounded-xl hover:bg-[#0092B9] hover:text-white transition-all duration-300 hover:-translate-y-1 tap-target">
                <FaYoutube className="text-sm md:text-base" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 pb-2 border-b border-gray-700 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition flex items-center text-sm md:text-base tap-target">
                  <MdChevronRight className="text-xs md:text-sm mr-2" />
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition flex items-center text-sm md:text-base tap-target">
                  <MdChevronRight className="text-xs md:text-sm mr-2" />
                  About me
                </a>
              </li>

              <li>
                <a href="#success" className="text-gray-400 hover:text-white transition flex items-center text-sm md:text-base tap-target">
                  <MdChevronRight className="text-xs md:text-sm mr-2" />
                  Success Stories
                </a>
              </li>

              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition flex items-center text-sm md:text-base tap-target">
                  <MdChevronRight className="text-xs md:text-sm mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 pb-2 border-b border-gray-700 text-white">
              Contact Us
            </h3>

            <ul className="space-y-3 md:space-y-4">

              <li className="flex items-start">
                <MdEmail className="text-[#0092B9] mr-3 mt-1 text-sm md:text-base" />
                <div>
                  <p className="font-medium text-sm md:text-base text-white">Email</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    support@maxifyacademy.com
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <MdAccessTime className="text-[#0092B9] mr-3 mt-1 text-sm md:text-base" />
                <div>
                  <p className="font-medium text-sm md:text-base text-white">Support Hours</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    10 AM - 7 PM (Mon-Sat)
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <MdLocationOn className="text-[#0092B9] mr-3 mt-1 text-sm md:text-base" />
                <div>
                  <p className="font-medium text-sm md:text-base text-white">Based In</p>
                  <p className="text-gray-400 text-sm md:text-base">Delhi, India</p>
                </div>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 pb-2 border-b border-gray-700 text-white">
              Free Resources
            </h3>

            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Free Digital Marketing Guide aur updates ke liye subscribe karein
            </p>

            <div className="mb-3 md:mb-4"></div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm md:text-base text-center">
            © 2023 Apni City, Apne Gaon Se. All rights reserved.
          </p>

          {/* Disclaimer */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gray-800 rounded-xl mobile-padding">
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
            <p class="text-xs md:text-sm text-gray-400 mt-3 md:mt-4">
                        *This program is not affiliated with Instagram, Facebook, or any other social media platforms
                        mentioned.
                    </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;