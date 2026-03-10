import React, { useState } from 'react';
import Menu from './Menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-[1000]">
      <div className="max-w-[1600px] mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12">
          
          {/* Venstre del af Header */}
          <div className="flex-1 flex justify-between items-center pt-8 pb-4 w-full">
            <div className="logo">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-widest m-0 text-[#1a1a1a] uppercase font-serif">
                THE SHEAR <span className="text-[#d4a373]">ROOM</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-3 md:gap-6">
              <a href="#login" className="text-[#1a1a1a] font-bold text-sm md:text-base hover:text-[#d4a373] transition-colors duration-300">
                Log ind
              </a>
              
              <div className="w-11 h-11 rounded-full border border-[#1a1a1a] flex items-center justify-center cursor-pointer bg-white hover:bg-gray-50 transition-all">
                <img src="/icons/call-icon.svg" alt="ring" className="w-[60%] h-[60%]" />
              </div>
              
              <div 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`w-11 h-11 rounded-full border border-[#1a1a1a] flex items-center justify-center cursor-pointer transition-all ${isMenuOpen ? 'bg-[#1a1a1a]' : 'bg-white hover:bg-gray-50'}`}
              >
                <svg className="w-[45%] h-[45%]" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3H18" stroke={isMenuOpen ? "#ffffff" : "#1A1A1A"} strokeWidth="1.5"/>
                  <path d="M0 9H18" stroke={isMenuOpen ? "#ffffff" : "#1A1A1A"} strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:flex-1"></div>
        </div>

        {/* Dropdown Menu - den ligger nu inde i containeren for at matche width */}
        <Menu isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
