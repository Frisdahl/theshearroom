import React from 'react';

interface TrustedPointsProps {
  paragraph: string;
  heading: string;
}

const TrustedPoints: React.FC<TrustedPointsProps> = ({ paragraph, heading }) => {
  return (
    <div className="py-8 trusted-point-item">
      {/* Heading with overflow hidden for slide up */}
      <div className="overflow-hidden mb-2">
        <h3 className="trusted-point-heading text-5xl lg:text-6xl font-extrabold text-[#d4a373] font-serif italic m-0">
          {heading}
        </h3>
      </div>
      
      {/* Paragraph with overflow hidden */}
      <div className="overflow-hidden mb-8">
        <p className="trusted-point-text text-white text-xs lg:text-sm uppercase tracking-[0.2em] font-bold font-sans m-0 opacity-80">
          {paragraph}
        </p>
      </div>

      <div className="w-16 h-[1px] bg-[#d4a373] trusted-point-line origin-left"></div>
    </div>
  );
};

export default TrustedPoints;
