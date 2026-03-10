import React, { useState, useRef, useEffect } from 'react';
import Menu from './DropdownMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<'hero' | 'hidden' | 'sticky'>('hero');
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      
      if (currentScrollY < 80) {
        // We are at the very top - switch to hero instantly
        setHeaderState('hero');
      } else if (scrollDirection === 'down') {
        // Scrolling down - hide header
        setHeaderState('hidden');
        setIsMenuOpen(false);
      } else if (scrollDirection === 'up') {
        // Scrolling up - show sticky glass header
        setHeaderState('sticky');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Determine classes based on state
  const getHeaderClasses = () => {
    switch (headerState) {
      case 'hero':
        // No transitions here to make the background disappear instantly when entering hero state
        return 'absolute top-0 left-0 w-full pt-0 bg-transparent translate-y-0 opacity-100';
      case 'hidden':
        return 'fixed top-0 left-0 w-full pt-0 bg-white/80 backdrop-blur-md shadow-sm -translate-y-full opacity-0 pointer-events-none transition-all duration-500 ease-in-out';
      case 'sticky':
        return 'fixed top-0 left-0 w-full pt-0 bg-white/80 backdrop-blur-md shadow-sm translate-y-0 opacity-100 border-b border-gray-100/50 transition-all duration-500 ease-in-out';
      default:
        return '';
    }
  };

  return (
    <header 
      ref={headerRef}
      className={`z-[5000] ${getHeaderClasses()}`}
    >
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-between">
          
          <nav 
            ref={navRef} 
            className={`flex justify-between items-center pb-4 w-full relative transition-all duration-500 ease-in-out 
              ${headerState === 'hero' ? 'lg:w-[calc(50%-1.5rem)] pt-10' : 'w-full pt-6'}`}
          >
            {/* Logo */}
            <div className="logo">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-widest m-0 text-[#1a1a1a] uppercase font-serif">
                FRESH <span className="text-[#d4a373]">CUT</span>
              </h1>
            </div>
            
            {/* Icons and Login */}
            <div className="flex items-center gap-3 md:gap-6">
              <a href="#login" className="text-[#1a1a1a] font-bold text-sm md:text-base hover:text-[#d4a373] transition-colors duration-300">
                Log ind
              </a>
              
              <div className="group w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer bg-white/50 hover:bg-[#d4a373] hover:border-[#d4a373] transition-all duration-300">
                <img 
                  src="/icons/call-icon.svg" 
                  alt="ring" 
                  className="w-[60%] h-[60%] transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:invert-[1]" 
                />
              </div>
              
              <div 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`group w-11 h-11 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer 
                  ${isMenuOpen 
                    ? 'bg-[#d4a373] border-[#d4a373]' 
                    : 'bg-white/50 border-gray-200 hover:bg-[#d4a373] hover:border-[#d4a373]'}`}
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

            <Menu isOpen={isMenuOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
