"use client";
import React from 'react'
import DepartmentList from './DepartmentsList'

function Departments() {
  return (
    <div id="Departments" className='mt-32 w-[80%] mx-auto '>
        <h3 className='header mb-10'>Explore Our Specialized Medical Departments</h3>
         <DepartmentList/>
    </div>
  )
}

export default Departments