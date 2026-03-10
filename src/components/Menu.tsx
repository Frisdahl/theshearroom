import React from 'react';
import MenuItem from './MenuItem';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%-1rem)] left-0 w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 z-[2000] animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MenuItem 
          title="Services" 
          description="Se vores fulde udvalg af klipning, barbering og skægpleje." 
        />
        <MenuItem 
          title="Lokationer" 
          description="Find din nærmeste Shear Room og se åbningstider." 
        />
        <MenuItem 
          title="Kontakt" 
          description="Har du spørgsmål? Kontakt os direkte via telefon eller mail." 
        />
        <MenuItem 
          title="Anmeldelser" 
          description="Læs hvad vores over 200 tilfredse kunder siger om os." 
        />
        <MenuItem 
          title="Tilbud" 
          description="Se vores aktuelle kampagner og medlemsfordele." 
        />
        <MenuItem 
          title="About" 
          description="Lær mere om vores historie og vores passion for faget." 
        />
      </div>

      {/* Book Nu Footer i Menuen */}
      <div className="relative w-full h-32 rounded-2xl overflow-hidden group cursor-pointer">
        <img 
          src="/images/footer-bg.jpg" 
          alt="Book nu" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="text-white font-extrabold text-2xl uppercase tracking-[4px] font-serif">
              Book nu
            </span>
            <img src="/icons/right-arrow.svg" alt="arrow" className="w-5 h-5 invert -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
