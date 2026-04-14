import React from "react";
import {
  MdVerified,
  MdThumbUp,
  MdAssignmentReturn,
  MdSentimentSatisfied,
} from "react-icons/md";

const GuaranteeSection = () => {
  return (
    <section className=" bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-5">

      <div className="max-w-6xl !mx-auto px-4 text-center">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="bg-white text-green-700 p-4 rounded-full shadow-lg">
            <MdVerified className="text-4xl md:text-5xl" />
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          1-Day 100% Money Back <br className="hidden md:block" />
          Guarantee
        </h2>

        {/* SUBTEXT */}
        <p className="text-base md:text-lg text-green-100 max-w-3xl mx-auto mb-12 leading-relaxed">
          Risk-free investment. Agar 1 Day me aapko course se value nahi milti,
          to hum aapka paisa wapas kar denge. No questions asked.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* CARD 1 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition">

            <MdThumbUp className="text-4xl md:text-5xl mx-auto mb-4" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              No Risk
            </h3>

            <p className="text-green-100 text-sm md:text-base">
              Try karein risk-free, paisa vasool guarantee ke saath
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition">

            <MdAssignmentReturn className="text-4xl md:text-5xl mx-auto mb-4" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Easy Return
            </h3>

            <p className="text-green-100 text-sm md:text-base">
              Simple process, Eran in 24 hours
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition">

            <MdSentimentSatisfied className="text-4xl md:text-5xl mx-auto mb-4" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Satisfaction Guaranteed
            </h3>

            <p className="text-green-100 text-sm md:text-base">
              15,00+ students satisfied, 98% positive reviews
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;