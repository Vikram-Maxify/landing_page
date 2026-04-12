import React from 'react'
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
  return (
    <>
    <HeroSection />
    <SuccessSection />
    <InstructorSection />
    <CourseModules />
    <TeamSection />
    <FAQSection />
    <OfferSection />
    <GuaranteeSection />
    <Footer />
    </>
  )
}

export default HomePage