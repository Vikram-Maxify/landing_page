import React from "react";

const TeamSection = () => {

  const isDesktop = window.innerWidth >= 768;

  return (
    <section id="gallery" className=" mt-10 bg-white">
      <div className="responsive-container mx-auto">

        {/* Section Heading */}
        <div
          className="text-center mb-10 md:mb-12"
          data-aos={isDesktop ? "fade-up" : ""}
        >
          <h2 className="responsive-heading-1 font-extrabold text-[#111827]">
            Meet Our Team
          </h2>

          <div className="w-24 h-1.5 bg-[#0092B9] mx-auto rounded-full mt-4"></div>

          <p className="mt-4 text-[#111827] max-w-2xl mx-auto">
            Yeh hai wo dedicated team jo students ko real results dilane ke liye kaam karti hai.
          </p>
        </div>

        {/* Full Image */}
        <div
          className="w-full"
          data-aos={isDesktop ? "fade-up" : ""}
          data-aos-delay="200"
        >
          <img
            src="https://i.ibb.co/gMcpPHtm/maxify-team.png"
            alt="Maxify Team"
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default TeamSection;