import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services/Services'
import Departments from './Departments/Departments'
import Team from './Team'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Departments/>
        <Team/>
    </div>
  )
}

export default LandingPage