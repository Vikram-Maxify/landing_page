import React from 'react'

const Header = () => {

    const handleRedirect = () => {
        window.location.href = "https://maxifyacademy.com/payment/complete-social-media-income-system"
    }

    return (
        <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-6 md:px-16 py-3 bg-white/80 backdrop-blur-md border-b border-gray-100">

            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="https://i.ibb.co/5X9Fm9mc/logo-2.png"
                    alt="logo"
                    className="h-10 md:h-12 w-auto object-contain"
                />
            </div>

            {/* CTA */}
            <button onClick={handleRedirect} className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                Enroll Now
            </button>

        </nav>
    )
}

export default Header