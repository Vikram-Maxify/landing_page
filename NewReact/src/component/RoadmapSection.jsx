import React from 'react'

const RoadmapSection = () => {

    const steps = [
        {
            title: 'Skill Learning',
            desc: 'Ready-to-use skills jo directly income generate kare'
        },
        {
            title: 'Client Hunting',
            desc: 'Get your first client in 24 hours (proven methods)'
        },
        {
            title: 'Closing Deals',
            desc: 'Convert clients into paying customers'
        },
        {
            title: 'Start Earning From Day 1',
            desc: 'A setup to start earning from the same day'
        },
        {
            title: 'Agency + Affiliate + Secret Platforms',
            desc: 'Multiple sources = stable income'
        }
    ]

    return (
        <section className="px-6 md:px-16 py-5 md:py-24 bg-[#f6f8fc]">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Aap Kaise Earn Karenge?
                </h2>
                <p className="mt-3 text-gray-500">
                    Step-by-step roadmap to ₹30K–₹90K/month
                </p>
            </div>

            {/* Timeline */}
            <div className="relative mt-16">

                {/* Center Line */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-200 -translate-x-1/2"></div>

                <div className="space-y-16">

                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`relative flex justify-center md:items-center ${
                                i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                            }`}
                        >

                            {/* Card */}
                            <div className="w-[90%] md:w-[45%] bg-white rounded-2xl shadow-md p-6 relative text-center md:text-left">
                                
                                <span className="inline-block text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3">
                                    Step {i + 1}
                                </span>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-gray-500 text-sm">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Circle */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-6 md:top-1/2 md:-translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg z-10">
                                {i + 1}
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default RoadmapSection