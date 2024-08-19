"use client";
import React, { useState } from 'react';
import { FaBrain, FaHeart, FaLungs, FaChild, FaEye } from 'react-icons/fa';
import { MdOutlinePregnantWoman } from "react-icons/md";
import { GiNoseSide } from "react-icons/gi";
import { PiBoneFill } from "react-icons/pi";
import { GiStomach } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { RiPsychotherapyFill } from "react-icons/ri";








import DepartmentCard from './DepartmentCard';

const departments = [
    { id: 1, icon: FaHeart, name: 'Cardiology', description: 'Specialized care for heart-related conditions and treatments.' },
    { id: 2, icon: FaBrain, name: 'Neurology', description: 'Focused on neurological disorders and brain health.' },
    { id: 3, icon: FaLungs, name: 'Pulmonology', description: 'Pulmonology services for lung health and respiratory issues.' },
    { id: 4, icon: FaChild, name: 'Pediatrics', description: 'Comprehensive healthcare for infants, children, and adolescents.' },
    { id: 5, icon: GiNoseSide, name: 'Otorhinolaryngology', description: 'Ear, nose, and throat treatments with advanced care.' },
    { id: 6, icon: GiStomach, name: 'Obstetrics', description: 'Expert care for digestive system health and gastroenterology.' },
    { id: 7, icon: MdOutlinePregnantWoman, name: 'Gynecology', description: 'Dedicated to women’s health, including reproductive care.' },
    { id: 8, icon: FaEye, name: 'Ophthalmology', description: 'Specializing in eye care and vision-related services.' },
    { id: 9, icon: PiBoneFill, name: 'Thrombology', description: 'Focused on blood clotting disorders and thrombology.' },
    { id: 10, icon: FaTooth, name: 'Dental', description: 'Comprehensive dental care including preventive, restorative, and cosmetic services.' },
    { id: 11, icon: IoWaterSharp, name: 'Hematology', description: 'Specialized care for blood disorders and diseases, including anemia and leukemia.' },
    { id: 12, icon: RiPsychotherapyFill, name: 'Psychiatry', description: 'Focused on mental health, including diagnosis, treatment, and prevention of mental illnesses.' },
];

const DepartmentList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(departments.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const currentDepartments = departments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="w-full mx-auto mt-[3vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[23px]">
                {currentDepartments.map((department) => (
                    <DepartmentCard
                        key={department.id}
                        icon={department.icon}
                        name={department.name}
                        description={department.description}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full font-medium ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DepartmentList;
