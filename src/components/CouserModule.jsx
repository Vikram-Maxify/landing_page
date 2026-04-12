import React from "react";
import {
  MdManageAccounts,
  MdCampaign,
  MdBusinessCenter,
  MdPsychology,
  MdGroup,
  MdSmartToy,
} from "react-icons/md";

const CourseModules = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FFFFFF]">
      <div className="responsive-container mx-auto">

        {/* Course Modules */}
        <div
          className="bg-white rounded-3xl p-6 md:p-8 card-shadow mobile-padding"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="responsive-heading-2 font-bold text-center mb-7 md:mb-8 text-[#111827]">
            What Will You Learn?
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-reduced mobile-grid-gap">

            {/* Social Media Handling */}
            <div className="bg-white rounded-2xl p-5 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdManageAccounts className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827] leading-snug">
                Social Media Handling
              </h4>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white rounded-2xl p-5 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdCampaign className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827] leading-snug">
                Social Media Marketing
              </h4>
            </div>

            {/* Business Building */}
            <div className="bg-white rounded-2xl p-5 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdBusinessCenter className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827] leading-snug">
                Business Building with Zero Investment
              </h4>
            </div>

            {/* Small Business Mindset */}
            <div className="bg-white rounded-2xl p-5 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdPsychology className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827] leading-snug">
                Small Business Mindset
              </h4>
            </div>

            {/* Client Approach */}
            <div className="bg-white rounded-2xl p-5 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdGroup className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827] leading-snug">
                Client Approach
              </h4>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-2xl p-5 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdSmartToy className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827] leading-snug">
                AI Tools: ChatGPT, Gemini, Canva
              </h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseModules;