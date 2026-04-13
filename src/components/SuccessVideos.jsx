import React, { useRef } from "react";

const SuccessSection = ({ videoRefs, onPlay }) => {

  const localVideoRefs = useRef([]);

  const handlePlay = (currentIndex) => {

    // 👉 Same section me baaki videos pause
    localVideoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });

    // 👉 Parent ko batao (Hero pause karega)
    if (onPlay) {
      onPlay(currentIndex);
    }
  };

  return (
    <section
      className="bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] mt-4"
      id="success"
    >
      <div className="responsive-container mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="responsive-heading-1 font-extrabold mb-4 text-[#111827]">
            Student's Feedback
          </h2>
          <div className="w-24 h-1.5 bg-[#0092B9] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mobile-grid-gap">

          {[
            "a7fd0364-eda0-474d-8910-6ab9548fb497",
            "b289bdaa-429e-47ad-89af-ce2fc60bfc5a",
            "6978bdfe-c353-4130-ad6c-cf8c5865e693",
            "77fb434b-4ddb-4752-8db9-dc1d60ff799a",
            "cc41bcb3-20db-4530-9a3d-ea085263dd5f",
            "8bd45f89-e4b8-4f54-ba8c-ec7619f190c0",
            "509bc0e7-2dd1-4779-8c4d-2833f4de06b3",
            "880dc4ef-80db-4807-9326-d315628d64a3",
            "ae43c68d-0a72-42df-87eb-f871eab51102",
          ].map((id, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="success-video-container">
                <video
                  ref={(el) => {
                    localVideoRefs.current[index] = el;

                    // 👉 Parent ref bhi assign karo
                    if (videoRefs) {
                      videoRefs.current[index] = el;
                    }
                  }}
                  onPlay={() => handlePlay(index)} // 🔥 MAIN FIX
                  controls
                  className="w-full h-full object-cover"
                >
                  <source
                    src={`https://vz-52fa69c4-957.b-cdn.net/${id}/playlist.m3u8`}
                    type="application/x-mpegURL"
                  />
                </video>
              </div>
            </div>
          ))}

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20 mobile-grid-gap">

          <div className="text-center p-6 md:p-8 bg-[#0092B9] rounded-3xl shadow-lg mobile-padding">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
              15,00+
            </div>
            <p className="text-[#FFFFFF] text-sm font-bold mt-1">STUDENTS</p>
          </div>

          <div className="text-center p-6 md:p-8 bg-white rounded-3xl shadow-lg border border-gray-100 mobile-padding">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0092B9]">
              94%
            </div>
            <p className="text-gray-500 text-sm font-bold mt-1">
              SUCCESS RATE
            </p>
          </div>

          <div className="text-center p-6 md:p-8 bg-white rounded-3xl shadow-lg border border-gray-100 mobile-padding">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0092B9]">
              ₹250k+
            </div>
            <p className="text-gray-500 text-sm font-bold mt-1">
              TOTAL EARNED
            </p>
          </div>

          <div className="text-center p-6 md:p-8 bg-white rounded-3xl shadow-lg border border-gray-100 mobile-padding">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0092B9]">
              1
            </div>
            <p className="text-gray-500 text-sm font-bold mt-1">
              DAY REFUND
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SuccessSection;