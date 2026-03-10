import React, { useState, useRef, useEffect } from 'react';
import Menu from './DropdownMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Luk menuen når der klikkes udenfor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-[1000]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12">
          
          <nav ref={navRef} className="flex-1 flex justify-between items-center pt-8 pb-4 w-full relative">
            {/* Logo */}
            <div className="logo">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-widest m-0 text-[#1a1a1a] uppercase font-serif">
                THE SHEAR <span className="text-[#d4a373]">ROOM</span>
              </h1>
            </div>
            
            {/* Icons and Login */}
            <div className="flex items-center gap-3 md:gap-6">
              <a href="#login" className="text-[#1a1a1a] font-bold text-sm md:text-base hover:text-[#d4a373] transition-colors duration-300">
                Log ind
              </a>
              
              {/* Call Circle Icon - Matches Hero border color, hover brown */}
              <div className="group w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer bg-white hover:bg-[#d4a373] hover:border-[#d4a373] transition-all duration-300">
                <img 
                  src="/icons/call-icon.svg" 
                  alt="ring" 
                  className="w-[60%] h-[60%] transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:invert-[1]" 
                />
              </div>
              
              {/* Burger/X Icon - Matches Hero border, remains brown when open */}
              <div 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`group w-11 h-11 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer 
                  ${isMenuOpen 
                    ? 'bg-[#d4a373] border-[#d4a373]' 
                    : 'bg-white border-gray-200 hover:bg-[#d4a373] hover:border-[#d4a373]'}`}
              >
                <div className="relative w-[45%] h-[45%] flex items-center justify-center">
                  <span 
                    className={`absolute block w-full h-[1.5px] transition-all duration-300 
                      ${isMenuOpen 
                        ? 'rotate-45 translate-y-0 bg-white' 
                        : '-translate-y-1 bg-[#1a1a1a] group-hover:bg-white'}`}
                  />
                  <span 
                    className={`absolute block w-full h-[1.5px] transition-all duration-300 
                      ${isMenuOpen 
                        ? '-rotate-45 translate-y-0 bg-white' 
                        : 'translate-y-1 bg-[#1a1a1a] group-hover:bg-white'}`}
                  />
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            <Menu isOpen={isMenuOpen} />
          </nav>

          {/* Højre del (tom spacer) */}
          <div className="hidden lg:block lg:flex-1"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
