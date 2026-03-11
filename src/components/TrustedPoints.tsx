import React from "react";

interface TrustedPointsProps {
  paragraph: string;
  heading: string;
}

const TrustedPoints: React.FC<TrustedPointsProps> = ({
  paragraph,
  heading,
}) => {
  return (
    <div className="mb-8 trusted-point-item">
      {/* Heading with overflow hidden */}
      <div className="overflow-hidden pb-1">
        <h3 className="trusted-point-heading text-5xl lg:text-5xl font-extrabold text-[#d4a373] font-urbanist italic m-0 py-1">
          {heading}
        </h3>
      </div>

      {/* Paragraph with overflow hidden - mt-2 for tighter spacing */}
      <div className="overflow-hidden mt-2 mb-6">
        <p className="trusted-point-text text-white text-xs lg:text-sm uppercase tracking-[0.2em] font-bold font-sans m-0 opacity-80 py-0.5">
          {paragraph}
        </p>
      </div>

      {/* Divider at the bottom */}
      <div className="w-16 h-[1px] bg-[#d4a373] trusted-point-line origin-left"></div>
    </div>
  );
};

export default TrustedPoints;
