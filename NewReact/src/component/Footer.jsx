import React from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FiClock, FiUsers } from 'react-icons/fi'

const Footer = () => {

    const handleRedirect = () => {
        window.location.href = "https://maxifyacademy.com/payment/complete-social-media-income-system"
    }


    return (
        <footer className="bg-[#0b1a33] text-white px-6 md:px-8 pt-16 pb-8">

            {/* Top CTA */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Start Your Online Income Journey Today
                </h2>

                <p className="mt-4 text-gray-400">
                    Join hundreds of students already earning through social media
                </p>

                <button onClick={handleRedirect} className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-16 py-4 rounded-full font-semibold text-lg">
                    Join Now - ₹799
                </button>

                {/* Features */}
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <FiClock /> Lifetime Access
                    </div>
                    <div className="flex items-center gap-2">
                        <FiUsers /> Community Support
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-12"></div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-3 gap-10 text-gray-400">

                {/* Brand */}
                <div>
                    <div className="flex items-center">
                <img
                    src="https://i.ibb.co/5X9Fm9mc/logo-2.png"
                    alt="logo"
                    className="h-10 md:h-12 w-auto object-contain"
                />
            </div>

                    <p className="mt-4 text-sm">
                        Complete Social Media Income System
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    <p className="text-sm">Email: support@maxifyacademy.com</p>
                    <p className="text-sm mt-2">Phone: +91 93103 28928</p>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <FaInstagram className="cursor-pointer hover:text-white" />
                        <FaFacebookF className="cursor-pointer hover:text-white" />
                    </div>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                <div className="text-[8px] md:text-xs text-gray-500 leading-relaxed max-w-3xl mx-auto text-center">
                    <p>Disclaimer</p>
    <p>
        This course is for educational purposes only. Income examples are illustrative and not guaranteed.
        Results vary based on individual effort, skills, and market conditions. This is a skill-based training
        program, not a get-rich-quick scheme.
    </p>

    <p className="mt-2">
        This program is not affiliated with Instagram, Facebook, or any mentioned platforms.
    </p>
</div>
                <p className="mt-2">
                    © 2026 Maxify Academy. All rights reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer