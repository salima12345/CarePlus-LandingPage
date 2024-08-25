"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation';



import { Button } from '../ui/button';

function Footer() {
    const router = useRouter();  
    const handleAppointmentClick = () => {
        router.push('/MakeAppointment');  
      };

  return (
    <div className='mt-32 w-full  border-t border-[#e0dedc]'>
      <div className='w-[80%] mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        <div>
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-bold">
              <span>
                <Image src="/assets/icons/logo-icon.svg" alt="logo" width="32" height="32" className="w-8" />
              </span>
              <span>
                <span className='text-gray-800'>Care</span>
                <span className='text-green-500'>Plus</span>
              </span>
            </span>
          </Link>
          <p className='mt-4 text-gray-600'>
            Our healthcare system is an integrated care model that is supported by a patient care information system.
          </p>
          <div className='flex space-x-4 mt-4'>
            <Link href="https://facebook.com">
              <FaFacebookF className="text-blue-500 hover:text-green-200 cursor-pointer" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="text-blue-500 hover:text-green-200 cursor-pointer" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-blue-500 hover:text-green-200 cursor-pointer" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <ul className='mt-4 space-y-2 text-gray-600'>
            <li className='flex items-center space-x-2'>
              <FiMapPin className="text-blue-500" />
              <span>Kamal Parc Centre, Mohammedia</span>
            </li>
            <li className='flex items-center space-x-2'>
              <FiMail className="text-blue-500" />
              <span>contact@careplus.com</span>
            </li>
            <li className='flex items-center space-x-2'>
              <FiPhone className="text-blue-500" />
              <span>+212 556 789 010</span>
            </li>
            <li className='flex items-center space-x-2'>
            <IoTimeOutline className="text-blue-500" />

              <span>Mon - Fri, 8:00AM - 5:00PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">More Links</h3>
          <ul className='mt-4 space-y-2 text-gray-600'>
            <li>
              <Link href="/#Services" className='flex items-center gap-3 hover:text-blue-500'>
              <MdOutlineKeyboardArrowRight/>

                  Services
                
              </Link>
            </li>
            <li>
              <Link href="/#Departments" className='flex items-center gap-3 hover:text-blue-500'>
              <MdOutlineKeyboardArrowRight/>

                  Departments
               
              </Link>
            </li>
            <li>
              <Link href="/#FaQ" className='flex items-center gap-3 hover:text-blue-500'>
              <MdOutlineKeyboardArrowRight/>

                  FAQs
               
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 ">Make an Appointment</h3>
          <p className='mt-4 text-gray-600'>
            Our brand new services in your area and beyond are yours for the taking. We are happy to receive your inquiries.
          </p>
          <Button className='mt-6 w-min-[300px] ' onClick={handleAppointmentClick}>
            Make an Appointment
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Footer;
