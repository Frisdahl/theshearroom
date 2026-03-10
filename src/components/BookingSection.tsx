import React, { useState } from 'react';
import TrustedPoints from './TrustedPoints';
import CtaButton from './CtaButton';

const BookingSection: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [service, setService] = useState<string>('');

  const isButtonDisabled = !location || !service;

  return (
    <section className="relative w-full py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/highlight-img-4.jpg')" }}>
      {/* Overlay to darken background image */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="text-white pt-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <p className="text-white text-lg font-bold tracking-[0.2em] uppercase m-0">Book tid nu</p>
          </div>
          
          <div className="space-y-4">
            <TrustedPoints 
              paragraph="Stilfulde makeovers leveret" 
              heading="5000+" 
            />
            <TrustedPoints 
              paragraph="Tilbagevendende kunder, der stoler på vore styling" 
              heading="30%" 
            />
            <TrustedPoints 
              paragraph="Ekspertbarberer og stylister til rådighed" 
              heading="7 dage om ugen" 
            />
          </div>
        </div>
        
        {/* Right Column - Booking Form Container (Smaller width) */}
        <div className="flex justify-center lg:justify-end w-full">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl w-full max-w-xl">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-8 font-serif">
              Bestil din tid nu
            </h2>
            
            <form className="space-y-5">
              {/* Fuldt navn */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Fuldt navn" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm"
                />
              </div>
              
              {/* Email and Kontakt nummer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="email" 
                  placeholder="Email adresse" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm"
                />
                <input 
                  type="tel" 
                  placeholder="Telefonnummer" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm"
                />
              </div>
              
              {/* Vælg lokation */}
              <div className="relative">
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm appearance-none cursor-pointer text-gray-500"
                >
                  <option value="">Vælg lokation</option>
                  <option value="kbh">København</option>
                  <option value="aarhus">Aarhus</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Vælg service */}
              <div className="relative">
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm appearance-none cursor-pointer text-gray-500"
                >
                  <option value="">Vælg service</option>
                  <option value="klip">Klipning</option>
                  <option value="skæg">Skægtrimning</option>
                  <option value="pakke">Den fulde pakke</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Fortrukne frisør */}
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm appearance-none cursor-pointer text-gray-500">
                  <option value="">Foretrukken frisør (valgfri)</option>
                  <option value="alex">Alex</option>
                  <option value="marc">Marc</option>
                  <option value="thomas">Thomas</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Calendar and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="date" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm text-gray-500"
                />
                <input 
                  type="time" 
                  className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-[#d4a373] transition-all text-sm text-gray-500"
                />
              </div>
              
              {/* Checkbox */}
              <div className="flex items-center gap-3 py-2 ml-4">
                <input type="checkbox" id="terms" className="w-5 h-5 accent-[#d4a373] cursor-pointer" />
                <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer font-medium">
                  Jeg accepterer vilkår og betingelser
                </label>
              </div>
              
              {/* Using the new CtaButton Component with disabled prop */}
              <div className="mt-4">
                <CtaButton 
                  text="fortsæt til booking" 
                  className="w-full" 
                  disabled={isButtonDisabled}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
