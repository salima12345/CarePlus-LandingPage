import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[6vh]">
      <ServiceItem
        title="Online Consultation"
        image="/assets/gifs/Animation - 1723988775344 (1).gif"
        description="Get professional medical advice from the comfort of your home through our online consultation service."
      />
      <ServiceItem
        title="Digital Medical Record"
        image="/assets/gifs/Animation - 1723990655306.gif"
        description="Keep your medical records organized and accessible digitally. Manage your health information securely and easily."
      />
      <ServiceItem
        title="Available Emergency 24/7"
        image="/assets/gifs/Animation - 1723989073541 (1).gif"
        description="Our ambulances are equipped and accompanied by trained medical staff, ready to respond to emergencies 24/7."
      />
    </div>
  );
};

export default ServiceList;
