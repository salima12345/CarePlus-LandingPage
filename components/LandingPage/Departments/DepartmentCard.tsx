import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface DepartmentCardProps {
  icon: IconType;
  name: string;
  description: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ icon: Icon, name, description }) => {
  return (
    <div className="flex flex-col items-start px-10 py-6 shadow-md rounded-lg min-w-[263px]">
      <div className="bg-green-100 opacity-50 p-3 rounded-full mb-4">
        <Icon className="text-green-200 w-6 h-6 animate-icon" />
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
      <p className="text-sm text-gray-500 text-start flex-grow mb-2">{description}</p>
      <div className="mt-auto">
        <Link href="/" className='text-blue-500 font-medium'>Learn more</Link>
      </div>
    </div>
  );
};

export default DepartmentCard;