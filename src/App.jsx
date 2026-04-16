import { useState } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'
import Logos from './components/sections/Logos'
import Benefit from './components/sections/Benefit'
import Course from './components/sections/Course'
import Testimonial from './components/sections/Testimonial'
import Cta from './components/sections/Cta'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Benefit />
      <Course />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  )
}

export default App
