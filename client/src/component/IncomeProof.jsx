import React from 'react'

const IncomeProof = () => {

    const data = [
        {
            title: "AFFILIATE INCOME",
            amount: "₹24,580",
            sub: "Last Month",
            desc: "Commission from affiliate marketing",
            color: "green"
        },
        {
            title: "CLIENT PAYMENTS",
            amount: "₹45,000",
            sub: "This Month",
            desc: "Social media handling & content",
            color: "blue"
        },
        {
            title: "PLATFORM EARNINGS",
            amount: "₹18,200",
            sub: "Freelancing Sites",
            desc: "Upwork, Fiverr, Freelancer",
            color: "purple"
        }
    ]

    const colorStyles = {
        green: {
            box: "border-green-300 bg-green-50",
            title: "text-green-600",
            amount: "text-green-700"
        },
        blue: {
            box: "border-blue-300 bg-blue-50",
            title: "text-blue-600",
            amount: "text-blue-700"
        },
        purple: {
            box: "border-purple-300 bg-purple-50",
            title: "text-purple-600",
            amount: "text-purple-700"
        }
    }

    return (
        <section className="px-6 md:px-16 py-6 md:py-8 bg-[#f6f8fc]">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Real Income Proof
                </h2>
                <p className="mt-2 text-gray-500">
                    Multiple Income Streams - Real Screenshots
                </p>
            </div>

            {/* Cards */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">

                {data.map((item, i) => {
                    const styles = colorStyles[item.color]

                    return (
                        <div key={i} className="bg-white rounded-2xl shadow-md p-6">

                            {/* Inner Box */}
                            <div className={`rounded-xl p-5 border ${styles.box}`}>
                                <p className={`text-sm font-semibold ${styles.title}`}>
                                    {item.title}
                                </p>

                                <h3 className={`text-3xl md:text-4xl font-bold mt-2 ${styles.amount}`}>
                                    {item.amount}
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    {item.sub}
                                </p>
                            </div>

                            {/* Bottom Text */}
                            <p className="mt-4 text-gray-600 text-sm">
                                {item.desc}
                            </p>

                        </div>
                    )
                })}

            </div>

        </section>
    )
}

export default IncomeProof