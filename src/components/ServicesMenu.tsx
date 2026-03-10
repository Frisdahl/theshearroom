import React, { useState } from 'react';
import Services from './Services';
import ServiceItemsChecklist from './ServiceItemsChecklist';
import CtaButton from './CtaButton';
import Book from './Book';

const ServicesMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const menServices = [
    { name: 'Klassisk Klip', price: '349,-' },
    { name: 'Skæg Trim', price: '199,-' },
    { name: 'Farve', price: '499,-' },
    { name: 'Pakke (Klip & Skæg)', price: '499,-' },
  ];

  const womenServices = [
    { name: 'Klip & Styling', price: '499,-' },
    { name: 'Balayage', price: '1299,-' },
    { name: 'Vask & Føn', price: '299,-' },
    { name: 'Kur behandling', price: '199,-' },
  ];

  const juniorServices = [
    { name: 'Børneklip (0-10 år)', price: '249,-' },
    { name: 'Skoleklip (11-15 år)', price: '299,-' },
    { name: 'Klip m/ maskine', price: '199,-' },
  ];

  const handleBookNow = () => {
    setSelectedCategory(null);
    setIsBookOpen(true);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <p className="text-[#1a1a1a] text-lg font-bold tracking-[0.2em] uppercase m-0">Menu</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] font-serif">
            Tjenester og priser
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Services 
            heading="Mænd" 
            paragraph="Skræddersyede behandlinger til den moderne mand. Vi mestrer alt fra klassisk barbering til moderne frisurer." 
            icon="/icons/men.svg"
            services={menServices}
            onItemClick={() => setSelectedCategory("Mænd")}
          />
          <Services 
            heading="Kvinder" 
            paragraph="Eksklusive behandlinger der fremhæver din naturlige skønhed. Vi tilbyder alt fra klip til avancerede farveteknikker." 
            icon="/icons/women.svg"
            services={womenServices}
            onItemClick={() => setSelectedCategory("Kvinder")}
          />
          <Services 
            heading="Børn & Unge" 
            paragraph="Vi sørger for at de mindste får en tryg og sjov oplevelse, mens vi sørger for de ser skarpe ud." 
            icon="/icons/kid.svg"
            services={juniorServices}
            onItemClick={() => setSelectedCategory("Børn & Unge")}
          />
        </div>
      </div>

      {/* Modal / Container Over Center */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setSelectedCategory(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCategory(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#1a1a1a] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373] animate-pulse"></span>
                <p className="text-[#1a1a1a] text-xl font-bold tracking-widest uppercase m-0">{selectedCategory}</p>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] font-serif">
                Hårklipninger og pleje
              </h3>
            </div>

            {/* Checklist Items */}
            <div className="mb-10 divide-y divide-gray-100">
              <ServiceItemsChecklist 
                heading="Head Shave" 
                duration="30 minutter" 
                description="Fuld barbering af hovedet med varme håndklæder og beroligende efterbehandling." 
                price="249,-" 
              />
              <ServiceItemsChecklist 
                heading="Klassisk Klip" 
                duration="45 minutter" 
                description="Præcis klipning tilpasset din ansigtsform og personlige stil." 
                price="349,-" 
              />
              <ServiceItemsChecklist 
                heading="Hot Towel Shave" 
                duration="30 minutter" 
                description="Traditionel barbering med kniv, varme håndklæder og ansigtsmassage." 
                price="199,-" 
              />
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <CtaButton 
                text="Book nu" 
                className="w-full md:w-auto min-w-[250px]" 
                onClick={handleBookNow}
              />
            </div>
          </div>
        </div>
      )}

      {/* Slide-in Book Component */}
      <Book isOpen={isBookOpen} onClose={() => setIsBookOpen(false)} />
    </section>
  );
};

export default ServicesMenu;
