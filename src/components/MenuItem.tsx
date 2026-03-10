import React from 'react';

interface MenuItemProps {
  title: string;
  description: string;
  icon?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
      <h4 className="text-[#1a1a1a] font-bold text-lg mb-1 font-serif group-hover:text-[#d4a373] transition-colors uppercase tracking-wide">
        {title}
      </h4>
      <p className="text-gray-500 text-sm font-sans leading-snug">
        {description}
      </p>
    </div>
  );
};

export default MenuItem;
