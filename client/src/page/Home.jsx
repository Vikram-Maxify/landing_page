import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import ProblemsSolution from '../component/ProblemsSolution'
import LearnSection from '../component/LearnSection'
import RoadmapSection from '../component/RoadmapSection'
import SuccessStories from '../component/SuccessStories'
import IncomeProof from '../component/IncomeProof'
import Instructor from '../component/Instructor'
import CTASection from '../component/CTASection'
import Guarantee from '../component/Guarantee'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <ProblemsSolution />
    <LearnSection />
    <RoadmapSection />
    <Guarantee />
    <SuccessStories />
    <IncomeProof />
    <Instructor />
    <CTASection />
    <Footer />
    </>
  )
}

export default Home