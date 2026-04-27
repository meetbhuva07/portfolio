

import Hero from '@/components/Hero-section'
import Navbar from '@/components/navbar'
import React from 'react'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import About from '@/components/About'
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
