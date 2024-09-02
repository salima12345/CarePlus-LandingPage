import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services/Services'
import Departments from './Departments/Departments'
import FaQ from './FaQ/FaQ'
import Footer from './Footer'

function LandingPage() {
  return (
    <div >
        <Navbar/>
        <Hero/>
        <Services/>
        <Departments/>
        <FaQ/>
        <Footer/>
    </div>
  )
}

export default LandingPage