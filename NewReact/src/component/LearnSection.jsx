import React from 'react'
import { FaInstagram, FaUsers, FaDollarSign, FaChartLine, FaBolt, FaBullseye } from 'react-icons/fa'

const LearnSection = () => {

    const data = [
        {
            icon: <FaInstagram />,
            title: 'Social Media Handling',
            desc: 'Instagram/Facebook handling se earning kaise kare'
        },
        {
            icon: <FaUsers />,
            title: 'Client Hunting',
            desc: 'Free methods se clients kaise dhunde'
        },
        {
            icon: <FaDollarSign />,
            title: 'Affiliate Marketing',
            desc: 'Affiliate marketing se passive income kaise banaye'
        },
        {
            icon: <FaChartLine />,
            title: 'Agency Building',
            desc: 'Without Invesment Agency kaise start aur scale kare'
        },
        {
            icon: <FaBolt />,
            title: 'AI Tools Mastery',
            desc: 'AI tools se 10x fast kaam kaise kare'
        },
        {
            icon: <FaBullseye />,
            title: 'Secret Plstform',
            desc: 'Secret platform use kar ke musliple income source kaise kare.'
        }
    ]

    return (
        <section className="px-6 md:px-16 py-6 md:py-8">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    What You’ll Learn in This Course
                </h2>
                <p className="mt-3 text-gray-500 text-sm md:text-base">
                    Complete Income System - Multiple Revenue Streams
                </p>
            </div>

            {/* Cards */}
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">

                        {/* Icon */}
                        <div className='flex gap-2 items-center'>
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <h3 className="font-semibold text-gray-900 text-lg">
                            {item.title}
                        </h3>
                        </div>

                        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                            {item.desc}
                        </p>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default LearnSection