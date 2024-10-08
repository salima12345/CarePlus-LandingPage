"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
  };

  const handleAppointmentClick = () => {
    router.push('/MakeAppointment');  
  };

  return (
    <div className={`fixed top-0 left-0 z-20 w-full backdrop-blur-md transition-all duration-300 py-3 ${isExpanded ? 'h-screen' : 'h-[70px]'}`}>
      <div className='relative w-[80%] flex items-center justify-between h-[70px] mx-auto '>
        <Link href="/" onClick={scrollToTop}>
          <span className="flex items-center space-x-2 text-2xl font-bold">
            <span>
              <Image src="/assets/icons/logo-icon.svg" alt="logo" width="32" height="32" className="w-8" />
            </span>
            <span>
              <span className='text-gray-800'>Care</span><span className='text-green-500'>Plus</span>
            </span>
          </span>
        </Link>

        <div className='md:flex hidden items-center gap-8 '>
          <Link href="/#Home" className='menu-item' onClick={scrollToTop}>Home</Link>
          <Link href="/#Services" className='menu-item'>Services</Link>
          <Link href="/#Departments" className='menu-item'>Departments</Link>
          <Link href="/#FaQ" className='menu-item'>FaQ&apos;s</Link>
        </div>
        <Button className='hidden md:block' onClick={handleAppointmentClick}>Make an Appointment</Button>

        <button
          type="button"
          className="rounded-full bg-dark/20 p-3 backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-dark/60 hover:backdrop-blur-lg md:hidden"
          aria-label="open menu"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <IoClose className='text-black' size={22} /> : <TbMenu2 className='text-black' size={22} />}
        </button>

      </div>

      {isExpanded && (
        <div className='flex flex-col flex-start gap-4 mt-4 md:hidden w-[80%] mx-auto'>
          <Link href="/#Home" className='menu-item font-medium' onClick={() => { scrollToTop(); setIsExpanded(false); }}>Home</Link>
          <Link href="/#Services" className='menu-item font-medium' onClick={() => setIsExpanded(false)}>Services</Link>
          <Link href="/#Departments" className='menu-item font-medium' onClick={() => setIsExpanded(false)}>Departments</Link>
          <Link href="/#FaQ" className='menu-item font-medium' onClick={() => setIsExpanded(false)}>FaQ&apos;s</Link>
          <Button className=' w-full' onClick={handleAppointmentClick}>Make an Appointment</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
