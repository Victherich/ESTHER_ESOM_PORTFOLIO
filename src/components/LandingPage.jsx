import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'
import WorkExperience from './WorkExperience'
import ProfessionalCertifications from './ProfessionalCertifications'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <WorkExperience/>
      
      <Portfolio/>
      <ProfessionalCertifications/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default LandingPage
