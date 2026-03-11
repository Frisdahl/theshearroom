import React from "react";

interface MenuItemProps {
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  description,
  href,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex flex-col p-6 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group h-full no-underline"
    >
      {/* Title with overflow hidden for slide up effect */}
      <div className="overflow-hidden mb-1">
        <p className="menu-item-title text-[#1a1a1a] font-bold text-lg font-urbanist group-hover:text-[#d4a373] transition-colors uppercase tracking-wide m-0">
          {title}
        </p>
      </div>

      {/* Description with overflow hidden */}
      <div className="overflow-hidden">
        <p className="menu-item-desc text-gray-500 text-sm font-sans leading-snug m-0">
          {description}
        </p>
      </div>
    </a>
  );
};

export default MenuItem;
