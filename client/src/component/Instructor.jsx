import React from 'react'

const Instructor = () => {

    const instructor = {
        name: "Shahid",
        image: "https://i.ibb.co/4wHTGNGC/shahid-maxify2.jpg",
        bio: "Co-Founder of Maxify Web Solutions. I've built a 30+ member team and helped multiple clients grow using social media and digital strategies.",
        stats: [
            { value: "250+", label: "Clients Served" },
            { value: "30+", label: "Team Members" },
            { value: "5+", label: "Years Experience" }
        ]
    }

    return (
        <section className="px-6 md:px-16 py-6 md:py-8 bg-[#f6f8fc]">

            {/* Heading */}
            <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
                Meet Your Instructor
            </h2>

            {/* Main Card */}
            <div className="mt-10 bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <div className="w-full flex justify-center">
                    <div className="bg-gray-100 rounded-2xl p-4">
                        <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="rounded-xl w-[280px] md:w-[320px] object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {instructor.name}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed max-w-md">
                        {instructor.bio}
                    </p>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        {instructor.stats.map((item, i) => (
                            <div
                                key={i}
                                className="bg-blue-50 rounded-xl px-6 py-4 text-center min-w-[100px]"
                            >
                                <p className="text-blue-600 font-bold text-lg">
                                    {item.value}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Instructor