"use client";
import React from 'react'
import DepartmentList from './DepartmentsList'

function Departments() {
  return (
    <div id="Departments" className='mt-32 w-[80%] mx-auto '>
        <h3 className='text-2xl   font-bold md:text-3xl md:font-bold lg:text-4xl lg:font-bold leading-[120%] mb-10'>Explore Our Specialized Medical Departments</h3>
         <DepartmentList/>
    </div>
  )
}

export default Departments