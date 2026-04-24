import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'

const Guarantee = () => {
    return (
        <section className="px-6 md:px-16 py-7 md:py-5 bg-[#f6f8fc]">

            <div className="relative max-w-4xl mx-auto rounded-3xl border border-green-200 
                            bg-gradient-to-br from-green-50 to-green-100 
                            px-6 md:px-12 py-12 text-center shadow-lg overflow-hidden">

                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-400/10 blur-3xl opacity-30"></div>

                {/* Content wrapper */}
                <div className="relative z-10">

                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="bg-white shadow-md rounded-full p-4 text-green-600 text-3xl">
                            <FaShieldAlt />
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                        1-Day 100% Money Back Guarantee
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm md:text-base">
                        Your investment is completely safe and risk-free.
                    </p>

                    {/* Optional trust badge line */}
                    <div className="mt-6 flex justify-center">
                        <span className="bg-green-200 text-green-700 text-xs px-4 py-1 rounded-full font-medium">
                            No Risk • Full Return • Instant Support
                        </span>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Guarantee