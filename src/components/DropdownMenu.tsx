import React, { useEffect, useRef } from 'react';
import MenuItem from './MenuItem';
import gsap from 'gsap';

interface MenuProps {
  isOpen: boolean;
}

const DropdownMenu: React.FC<MenuProps> = ({ isOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      const tl = gsap.timeline();

      // Step 1: Smoothly slide down and scale the container from the top
      // We use display: block first, then animate opacity and scale
      tl.set(menuRef.current, { display: "block" });
      tl.to(menuRef.current, {
        opacity: 1,
        y: 0,
        scaleY: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power3.out"
      });

      // Step 2: Slide up text elements
      tl.fromTo(".menu-item-title", 
        { y: "100%" }, 
        { y: "0%", duration: 0.4, stagger: 0.04, ease: "power2.out" }, 
        "-=0.3"
      );

      tl.fromTo(".menu-item-desc", 
        { y: "100%" }, 
        { y: "0%", duration: 0.4, stagger: 0.04, ease: "power2.out" }, 
        "-=0.3"
      );
    } else {
      // Exit Animation: Scale up and fade out
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        scaleY: 0.95,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        }
      });
    }
  }, [isOpen]);

  return (
    <div 
      ref={menuRef}
      style={{ 
        opacity: 0, 
        pointerEvents: "none", 
        transform: "translateY(-10px) scaleY(0.95)", 
        transformOrigin: "top",
        display: "none"
      }}
      className="absolute top-[calc(100%+0.75rem)] left-0 w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 z-[2000]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {/* Række 1 */}
        <div className="border-b md:border-r border-gray-100">
          <MenuItem title="Services" description="Klip, barbering og pleje." />
        </div>
        <div className="border-b lg:border-r border-gray-100">
          <MenuItem title="Lokationer" description="Find din nærmeste salon." />
        </div>
        <div className="border-b border-gray-100">
          <MenuItem title="Kontakt" description="Ring eller skriv her." />
        </div>

        {/* Række 2 */}
        <div className="border-b md:border-b-0 md:border-r border-gray-100">
          <MenuItem title="Anmeldelser" description="Se hvad kunder siger." />
        </div>
        <div className="border-b md:border-b-0 lg:border-r border-gray-100">
          <MenuItem title="Tilbud" description="Spar på din behandling." />
        </div>
        <div className="border-gray-100">
          <MenuItem title="About" description="Historien om Shear Room." />
        </div>
      </div>

      {/* Book Nu Footer */}
      <div className="relative w-full h-32 lg:h-64 rounded-2xl overflow-hidden group cursor-pointer">
        <img 
          src="/images/footer-bg.jpg" 
          alt="Book nu" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="flex items-center gap-3 lg:gap-5">
            <span className="text-white font-extrabold text-2xl lg:text-5xl uppercase tracking-[4px] font-serif transition-transform duration-500">
              Book nu
            </span>
            <img 
              src="/icons/right-arrow.svg" 
              alt="arrow" 
              className="w-5 h-5 lg:w-10 lg:h-10 invert -rotate-45 transition-transform duration-500 ease-out group-hover:rotate-0" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
