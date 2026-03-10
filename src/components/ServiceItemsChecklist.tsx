import React, { useState } from 'react';

interface ServiceItemsChecklistProps {
  heading: string;
  duration: string;
  description: string;
  price: string;
}

const ServiceItemsChecklist: React.FC<ServiceItemsChecklistProps> = ({ heading, duration, description, price }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div 
      onClick={() => setIsChecked(!isChecked)}
      className={`py-8 border-b border-gray-100 last:border-0 flex justify-between items-center group cursor-pointer transition-all duration-300 ${isChecked ? 'bg-gray-50/50 -mx-4 px-4 rounded-2xl' : ''}`}
    >
      <div className="flex-1 pr-8">
        <div className="mb-2">
          <h4 className={`text-xl font-bold transition-colors duration-300 ${isChecked ? 'text-[#d4a373]' : 'text-[#1a1a1a]'}`}>
            {heading}
          </h4>
        </div>
        <p className="text-gray-500 text-sm mb-3 leading-relaxed max-w-md">{description}</p>
        <p className="text-[#d4a373] font-black text-xl tracking-tight">{price}</p>
      </div>

      <div className="flex flex-col items-end gap-4 min-w-[120px]">
        <span className={`text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${isChecked ? 'text-[#d4a373]' : 'text-gray-400'}`}>
          {duration}
        </span>
        
        {/* Stylish Custom Checkbox */}
        <div className="relative">
          <div className={`
            w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500
            ${isChecked 
              ? 'bg-[#d4a373] border-[#d4a373] shadow-lg shadow-[#d4a373]/30 scale-110' 
              : 'bg-transparent border-gray-200 group-hover:border-[#d4a373]/50'
            }
          `}>
            <svg 
              className={`w-5 h-5 text-white transition-all duration-500 ${isChecked ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItemsChecklist;
