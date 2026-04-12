import React from "react";

const InstructorSection = () => {
  return (
    <section id="about" className="py-10 md:py-14 bg-pattern">
      <div className="responsive-container mx-auto">

        {/* Heading */}
        <div
          className="text-center mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="responsive-heading-1 font-bold mb-3 md:mb-4 text-[#111827]">
            About me
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-reduced mobile-stack">

          {/* Image Section */}
          <div
            className="lg:w-2/5 mb-8 lg:mb-0 mobile-full-width"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/4wHTGNGC/shahid-maxify2.jpg"
                  alt="Instructor"
                  className="w-full h-auto mobile-img"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl mobile-padding">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 md:mb-2">
                    5+
                  </div>
                  <div className="text-[#111827] text-sm md:text-base">
                    Years Experience
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Content Section */}
          <div
            className="lg:w-3/5 lg:pl-8 md:pl-10 mobile-full-width"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 card-shadow mobile-padding">

              <p className="text-base md:text-lg mb-5 md:mb-6 mobile-text-base text-[#111827] leading-relaxed">
                <strong>
                  Hi, I'm Shahid,{" "}
                  <span
                    className="underline"
                    style={{
                      textDecorationColor: "#0092B9",
                      textDecorationThickness: "2px",
                      color: "#0092B9",
                    }}
                  >
                    Co-Founder
                  </span>{" "}
                  and{" "}
                  <span
                    className="underline"
                    style={{
                      textDecorationColor: "#0092B9",
                      textDecorationThickness: "2px",
                      color: "#0092B9",
                    }}
                  >
                    CEO
                  </span>{" "}
                  of Maxify Web Solutions.
                </strong>{" "}
                I've been working in the digital marketing industry for the past
                5 years and have been running my own company for 3+ years. I've
                worked closely with real businesses at ground level and
                understand exactly where most people struggle in turning social
                media into income.
              </p>

              {/* Highlight Box */}
              <div className="p-4 md:p-6 rounded-2xl gradient-bg text-white mb-2 md:mb-4 mobile-padding">
                <p className="text-lg md:text-xl font-bold mobile-text-center leading-snug">
                  This course teaches only those practical things that actually
                  work in the real market.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorSection;