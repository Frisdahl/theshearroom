import React from 'react';

interface ServiceItem {
  name: string;
  price?: string;
}

interface ServicesProps {
  heading: string;
  paragraph: string;
  icon: string;
  services: ServiceItem[];
  onItemClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ heading, paragraph, icon, services, onItemClick }) => {
  return (
    <div className="services-card border border-gray-200 rounded-3xl p-10 transition-all duration-300 bg-white">
      {/* Top Section with Large Heading and Icon */}
      <div className="flex justify-between items-start mb-8">
        <div className="overflow-hidden">
          <h3 className="services-heading text-3xl md:text-4xl font-extrabold text-[#1a1a1a] font-serif m-0">
            {heading}
          </h3>
        </div>
        <div className="services-icon w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl">
          <img src={icon} alt={heading} className="w-8 h-8" />
        </div>
      </div>
      
      <div className="overflow-hidden mb-10">
        <p className="services-desc text-gray-500 text-lg leading-relaxed m-0">
          {paragraph}
        </p>
      </div>
      
      {/* Service Items List */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <div className="overflow-hidden" key={index}>
            <div 
              onClick={onItemClick}
              className="services-item group flex justify-between items-center p-5 border border-gray-100 rounded-2xl transition-all duration-300 hover:bg-[#d4a373] hover:border-[#d4a373] cursor-pointer"
            >
              <p className="font-bold text-[#1a1a1a] group-hover:text-white group-hover:translate-x-2 transition-all duration-300 m-0">
                {service.name}
              </p>
              {service.price && (
                <span className="text-[#d4a373] font-black group-hover:text-white transition-all duration-300">
                  {service.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
