import React from 'react'

const ProblemsSolution = () => {
    return (
        <section className="px-6 md:px-16 py-3 md:py-8 bg-[#F6F8FD]">
            <div className="grid md:grid-cols-2 gap-8">

                {/* Left Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                        Be honest... are you still not earning anything?
                    </h2>

                    <div className="mt-6 space-y-5">
                        {[
                            "Skill hai lekin earning nahi ho rahi?",
                            "Efforts daal rahe ho... par earning nahi ho rahi?",
                            "Confused ho kaha se start kare?"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-4 h-4 mt-1 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(239,68,68,0.15)]"></div>
                                <p className="text-gray-600 text-sm md:text-base">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card */}
                <div className="rounded-2xl p-6 md:p-8 text-white bg-gradient-to-br from-blue-600 to-blue-800 shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        This course is your solution.
                    </h2>

                    <p className="mt-4 text-blue-100 text-sm md:text-base max-w-md">
                        Yeh course ek complete system deta hai jisse aap multiple ways se earning start kar sakte ho.
                    </p>

                    <div className="mt-6 space-y-4">
                        {["100% Practical Training", "Start Earning in 1 Day"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-sm">✓</span>
                                </div>
                                <p className="text-white text-sm md:text-base font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProblemsSolution
