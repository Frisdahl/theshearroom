import React from 'react';

interface TrustedPointsProps {
  paragraph: string;
  heading: string;
}

const TrustedPoints: React.FC<TrustedPointsProps> = ({ paragraph, heading }) => {
  return (
    <div className="mb-8">
      <div className="w-16 h-[1px] bg-[#d4a373] mb-4"></div>
      <h3 className="text-5xl font-extrabold text-[#d4a373] font-serif italic mb-2">
        {heading}
      </h3>
      <p className="text-white text-sm uppercase tracking-widest font-bold font-sans">
        {paragraph}
      </p>
    </div>
  );
};

export default TrustedPoints;
