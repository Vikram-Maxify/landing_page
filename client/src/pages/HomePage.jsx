import React, { useEffect, useRef } from 'react'
import HeroSection from '../components/Hero'
import SuccessSection from '../components/SuccessVideos'
import InstructorSection from '../components/InstructorSection'
import CourseModules from '../components/CouserModule'
import TeamSection from '../components/GallerySection'
import FAQSection from '../components/FaqSection'
import OfferSection from '../components/OfferSection'
import GuaranteeSection from '../components/MoneyBack'
import Footer from '../components/Footer'

const HomePage = () => {


  // 🎯 Refs for videos
  const heroVideoRef = useRef(null);
  const successVideoRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const alreadyTracked = sessionStorage.getItem("viewContentTracked");

    const firePixel = () => {
      if (window.fbq && !alreadyTracked) {
        window.fbq("track", "ViewContent");

        sessionStorage.setItem("viewContentTracked", "true");
      }
    };

    try {
      if (window.fbq) {
        firePixel();
      } else {
        // 🔥 wait until fbq loads (fix delay)
        const interval = setInterval(() => {
          if (window.fbq) {
            firePixel();
            clearInterval(interval);
          }
        }, 200);

        return () => clearInterval(interval);
      }
    } catch (err) {
      console.log("FB Pixel error:", err);
    }
  }, []);

  // 🎯 Main Control Function
  const handleVideoPlay = (type, index = null) => {

    // 👉 Hero video play hui
    if (type === "hero") {
      successVideoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0; // 🔥 IMPORTANT
        }
      });
    }

    if (type === "success") {
      if (heroVideoRef.current) {
        heroVideoRef.current.pause();
        heroVideoRef.current.currentTime = 0; // 🔥 IMPORTANT
      }

      successVideoRefs.current.forEach((video, i) => {
        if (video && i !== index) {
          video.pause();
          video.currentTime = 0; // 🔥 IMPORTANT
        }
      });
    }
  };

  return (
    <>
      <HeroSection
        videoRef={heroVideoRef}
        onPlay={() => handleVideoPlay("hero")}
      />

      <SuccessSection
        videoRefs={successVideoRefs}
        onPlay={(index) => handleVideoPlay("success", index)}
      />

      <InstructorSection />
      <CourseModules />
      <TeamSection />
      <GuaranteeSection />
      <Footer />
    </>
  )
}

export default HomePage;