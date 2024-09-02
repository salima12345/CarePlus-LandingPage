import React from 'react'
import ServiceList from './ServicesList'

function Services() {
  return (
    <div id="Services" className='mt-32 w-[80%] mx-auto'>
        <h3 className='text-2xl  font-bold md:text-3xl md:font-bold lg:text-4xl lg:font-bold leading-[120%] mb-10'>Healthy and Easy Access Services</h3>
        <ServiceList/>

    </div>
  )
}

export default Services