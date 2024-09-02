import React from 'react';
import Image from 'next/image';

interface ServiceItemProps {
  title: string;
  image: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, image, description }) => {
  return (
    <div className="flex flex-col items-start p-4 ">
      <Image src={image} alt={title} width={1000} height={1000} className="w-16 h-16 mb-4" />
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceItem;
