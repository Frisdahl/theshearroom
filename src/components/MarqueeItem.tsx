import React from "react";

interface MarqueeItemProps {
  icon: string;
  text: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-6 px-10 py-6 bg-white/40 backdrop-blur-md border border-white/60 rounded-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] whitespace-nowrap mx-5 relative overflow-hidden group">
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>

      {/* Icon with refined, soft background */}
      <div className="w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-sm border border-white/40 transition-transform duration-500 group-hover:scale-110">
        <img src={icon} alt="" className="w-6 h-6 object-contain opacity-80" />
      </div>

      {/* Sophisticated Dark Typography */}
      <span className="text-[#1a1a1a]/80 font-bold text-lg tracking-[0.1em] relative z-10">
        {text}
      </span>

      {/* Thin Bottom Highlight */}
      <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4a373]/20 to-transparent"></div>
    </div>
  );
};

export default MarqueeItem;
