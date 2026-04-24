import React from 'react'
import { FiClock } from "react-icons/fi";
import { useState, useEffect } from "react";




const CTASection = () => {

    const [timeLeft, setTimeLeft] = useState(0)

    // ⏳ COUNTDOWN LOGIC (24hr persistent)
    useEffect(() => {
        const KEY = "offer_end_time"

        let endTime = localStorage.getItem(KEY)

        if (!endTime) {
            endTime = Date.now() + 24 * 60 * 60 * 1000
            localStorage.setItem(KEY, endTime)
        } else {
            endTime = parseInt(endTime)
        }

        const updateTimer = () => {
            const remaining = endTime - Date.now()
            setTimeLeft(remaining > 0 ? remaining : 0)
        }

        updateTimer()

        const interval = setInterval(updateTimer, 1000)
        return () => clearInterval(interval)
    }, [])

    // ⏱ FORMAT TIME
    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000)
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0")
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0")
        const seconds = String(totalSeconds % 60).padStart(2, "0")

        return { hours, minutes, seconds }
    }

    const { hours, minutes, seconds } = formatTime(timeLeft)

    const handleRedirect = () => {
        window.location.href = "https://maxifyacademy.com/payment/complete-social-media-income-system"
    }

    return (
        <section className="px-6 md:px-16 py-8 md:py-24 bg-gradient-to-b from-blue-600 to-blue-700 text-white text-center">

            {/* Badge */}
            <div className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full mb-6">
                ⚡ LIMITED TIME OFFER
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold">
                Course Enroll Karo Aaj Hi!
            </h2>

            

            {/* Price Card */}
            <div className="mt-10 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">

                <div className="flex items-center justify-center gap-4">
                    <span className="text-lg line-through text-blue-200">
                        ₹2,999
                    </span>
                    <span className="text-4xl md:text-5xl font-bold text-white">
                        ₹799
                    </span>
                </div>

                <p className="mt-4 text-blue-100 text-lg">
                    Today Only Special Price
                </p>

                <p className="mt-2 text-green-300 font-medium">
                    Save ₹2,200 (73% OFF)
                </p>

            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-blue-50 border border-blue-100 px-3 sm:px-5 py-3 rounded-2xl w-full max-w-xs sm:max-w-fit mx-auto">

    <FiClock className="text-blue-600 text-lg shrink-0" />

    <span className="text-xs sm:text-sm text-blue-700 font-medium">
        Offer ends in:
    </span>

    <div className="flex items-center gap-1 text-base sm:text-lg font-semibold text-blue-900 flex-wrap justify-center">

        <div className="bg-white px-2 sm:px-3 py-1 rounded-lg shadow-sm min-w-[36px] sm:min-w-[42px] text-center">
            {hours} H
        </div>

        <span>:</span>

        <div className="bg-white px-2 sm:px-3 py-1 rounded-lg shadow-sm min-w-[36px] sm:min-w-[42px] text-center">
            {minutes} M
        </div>

        <span>:</span>

        <div className="bg-white px-2 sm:px-3 py-1 rounded-lg shadow-sm min-w-[36px] sm:min-w-[42px] text-center">
            {seconds} S
        </div>

    </div>
</div>

            {/* CTA Button */}
            <div className="mt-10">
                <button onClick={handleRedirect} className="bg-white text-blue-600 px-16 py-4 rounded-full font-semibold text-lg shadow-md hover:scale-105 transition">
                    Enroll Now at ₹799
                </button>

                <p className="mt-4 text-blue-100 text-sm">
                    Secure Payment | Instant Access
                </p>
            </div>

        </section>
    )
}

export default CTASection