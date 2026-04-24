import React from "react";

const IncomeProof = () => {
  const data = [
    {
      url: "https://i.ibb.co/YBY4TNTp/Screenshot-2026-04-24-at-5-17-51-PM.png",
      color: "green",
      desc: "Commission from affiliate marketing",
    },
    {
      url: "https://i.ibb.co/zLFX6pR/Screenshot-2026-04-24-at-5-17-01-PM.png",
      color: "blue",
      desc: "Social media handling & content",
    },
    {
      url: "https://i.ibb.co/YBY4TNTp/Screenshot-2026-04-24-at-5-17-51-PM.png",
      color: "purple",
      desc: "Earnings from freelancing platforms",
    },
  ];

  const colorStyles = {
    green: "border-green-400 bg-green-50 text-green-700",
    blue: "border-blue-400 bg-blue-50 text-blue-700",
    purple: "border-purple-400 bg-purple-50 text-purple-700",
  };

  return (
    <section className="px-6 md:px-16 py-10 bg-[#f6f8fc]">
      <div className="grid md:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className={`p-3 rounded-2xl border ${colorStyles[item.color]}`}
          >
            <img
              src={item.url}
              alt="proof"
              className="w- rounded-xl object-contain mb-3"
            />

            <p className="text-sm font-medium text-center">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default IncomeProof;