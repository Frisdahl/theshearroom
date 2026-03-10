import React, { useState, useEffect, useRef } from 'react';
import Services from './Services';
import CtaButton from './CtaButton';
import Book from './Book';
import ServiceItemsChecklist from './ServiceItemsChecklist';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Trigger a bit earlier for smoother flow
        toggleActions: "play none none none"
      }
    });

    // Fast, punchy entrance - Total sequence under 1 second
    tl.fromTo(".services-menu-badge", 
      { opacity: 0, x: -15 }, 
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
    
    tl.fromTo(".services-menu-title", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
      "-=0.3"
    );

    // Animate cards and internal content almost simultaneously
    tl.fromTo(".services-card", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    // Snap the internal content up quickly
    tl.fromTo([".services-heading", ".services-desc", ".services-icon", ".services-item"], 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.02, ease: "power1.out" },
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleBookNow = () => {
    setSelectedCategory(null);
    setIsBookOpen(true);
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <p className="text-[#1a1a1a] text-base font-semibold tracking-[0.2em] uppercase m-0">Menu</p>
          </div>
          <h2 className="services-menu-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] font-serif">
            Tjenester og priser
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Services 
            heading="Mænd" 
            paragraph="Skræddersyede behandlinger til den moderne mand." 
            icon="/icons/men.svg"
            services={menServices}
            onItemClick={() => setSelectedCategory("Mænd")}
          />
          <Services 
            heading="Kvinder" 
            paragraph="Eksklusive behandlinger der fremhæver din naturlige skønhed." 
            icon="/icons/women.svg"
            services={womenServices}
            onItemClick={() => setSelectedCategory("Kvinder")}
          />
          <Services 
            heading="Børn & Unge" 
            paragraph="Vi sørger for at de mindste får en tryg og sjov oplevelse." 
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
            <button 
              onClick={() => setSelectedCategory(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#1a1a1a] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373] animate-pulse"></span>
                <p className="text-[#1a1a1a] text-xl font-bold tracking-widest uppercase m-0">{selectedCategory}</p>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] font-serif">
                Hårklipninger og pleje
              </h3>
            </div>

            <div className="mb-10 divide-y divide-gray-100">
              <ServiceItemsChecklist 
                heading="Head Shave" 
                duration="30 minutter" 
                description="Fuld barbering af hovedet med varme håndklæder." 
                price="249,-" 
              />
              <ServiceItemsChecklist 
                heading="Klassisk Klip" 
                duration="45 minutter" 
                description="Præcis klipning tilpasset din ansigtsform." 
                price="349,-" 
              />
              <ServiceItemsChecklist 
                heading="Hot Towel Shave" 
                duration="30 minutter" 
                description="Traditionel barbering med kniv og varme håndklæder." 
                price="199,-" 
              />
            </div>

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

      <Book isOpen={isBookOpen} onClose={() => setIsBookOpen(false)} />
    </section>
  );
};

export default ServicesMenu;
