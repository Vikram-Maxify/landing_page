import React, { useEffect } from "react";
import { FaBolt } from "react-icons/fa";
import { MdCheckCircle, MdLock } from "react-icons/md";
import { useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";


const handleRedirect = () => {
  const data = localStorage.getItem("leadData");
  const { email, phone } = JSON.parse(data || "{}");


  const baseUrl = "/payment/complete-social-media-income-system";

  const finalUrl = `${baseUrl}?email=${email}&phone=${phone}`;

  window.location.href = finalUrl;
};

const HeroSection = () => {


  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="home"
      className="hero-bg pb-6 sm:pt-8 sm:pb-8 md:pt-16 md:pb-14 relative overflow-hidden"
    >
      {/* Navbar */}
      <nav className="sticky lg:fixed top-0 left-0 w-full z-50">
        <div className="bg-gradient-to-r from-[#0092B9] to-[#0092B9] text-white shadow-lg rounded-b-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-4">
              <h5 className="text-[16px] md:text-base font-semibold tracking-wide whitespace-nowrap">
                200+ Students Earn ₹40,000 / Month
              </h5>
            </div>
          </div>
        </div>
      </nav>

      <div className="responsive-container mx-auto mt-6">
        <div className="flex flex-col lg:flex-row items-center gap-reduced mobile-stack">

          {/* LEFT */}
          <div className="lg:w-1/2 mobile-full-width">

            <h1 className="hidden sm:block responsive-heading-1 font-extrabold text-[#111827] leading-tight mb-5">
              Apni City, Apne Ghar Se Instagram & Facebook ke Zariye
            </h1>

            <div className="hidden sm:inline-block mb-5 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-[#0092B9] text-white shadow-xl">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                ₹30,000 – ₹90,000 / Month
              </span>
            </div>

            <h5 className="hidden sm:block text-lg mb-6 text-[#111827]">
              Sirf Smartphone + Internet se
            </h5>

            {/* Features */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-reduced mb-8">

              {[
                "No Laptop Required",
                "No Investment Required",
                "No Ads Knowledge Needed",
                "No followers",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-md border p-4 rounded-2xl card-shadow"
                >
                  <MdCheckCircle className="text-[#0092B9] text-xl" />
                  <span className="font-semibold text-[#111827]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <button
              onClick={handleRedirect}
              className="hidden sm:flex w-full md:w-auto px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-[#0092B9] text-white text-base md:text-lg font-extrabold shadow-2xl hover:scale-105 transition flex-col md:flex-row items-center gap-2"
            >
              <span className="flex items-center gap-2">
                YES, Mujhe Ye Skill Sikhni Hai
              </span>

              <span className="text-sm opacity-90 flex items-center gap-1">
                <MdLock /> Secure Checkout | Lifetime Access
              </span>
            </button>

          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 mobile-full-width">

            <div className="relative rounded-xl shadow-2xl overflow-visible">
              <div className="relative rounded-xl shadow-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  src="https://vz-52fa69c4-957.b-cdn.net/64941448-16af-411e-9c9f-a972f8a6f55b/playlist.m3u8"
                  poster="https://vz-52fa69c4-957.b-cdn.net/742abb8e-cfed-4562-8897-462aca306b02/thumbnail_5877ee08.jpg"
                  className="w-full aspect-video object-cover rounded-xl"
                  loop
                  muted
                  playsInline
                  controls
                />

                {!isPlaying && (
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-xl">
                      <IoMdPlay />
                    </div>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-4 text-center px-2 mb-2">
              <h4 className="responsive-heading-2 font-bold text-[#111827]">
                Complete Social Media Income System
              </h4>
            </div>

            <h4 className="flex justify-center items-center mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full bg-[#0092B9]/10 text-[#0092B9] text-center text-base sm:text-xl font-bold">
              1-to-1 live Doubt Solving
            </h4>

            {/* Mobile Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-reduced mb-8 lg:hidden">
              {[
                "No Laptop Required",
                "No Investment Required",
                "No followers",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-4 rounded-2xl card-shadow"
                >
                  <MdCheckCircle className="text-[#0092B9] text-xl" />
                  <span className="font-semibold text-[#111827]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleRedirect}
              className="animate-pulseScale w-full px-6 md:px-8 py-4 rounded-2xl text-white font-extrabold text-base sm:text-lg shadow-xl hover:scale-105 transition flex items-center justify-center mt-5 bg-[#0092B9]"
            >
              <span><FaBolt /> </span>Enroll Now – ₹799
            </button>

            <div className="bg-[#0092B9]/10 rounded-2xl p-3 md:p-4 mobile-full-width mt-4 md:hidden">
              <h3 className="text-center font-bold mb-3 text-[#111827]">
                Offer Ends In:
              </h3>

              <div className="flex justify-center gap-2 md:gap-3">
                {[hours, minutes, seconds].map((val, i) => (
                  <div
                    key={i}
                    className="bg-white text-[#0092B9] rounded-xl px-3 md:px-4 py-2 flex items-center gap-1 font-bold shadow-sm"
                  >
                    <span className="text-lg md:text-2xl">
                      {String(val).padStart(2, "0")}
                    </span>
                    <span className="text-xs md:text-sm">
                      {["H", "M", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="mx-auto mt-6 mb-8 lg:hidden max-w-md">
              <div className="p-6 bg-gradient-to-t from-green-100 via-green-200 to-green-300 rounded-3xl shadow-lg text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-900">
                  30-Day 100% Money Back Guarantee
                </h2>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;