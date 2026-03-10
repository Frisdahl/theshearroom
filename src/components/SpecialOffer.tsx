import React from 'react';
import CtaButton from './CtaButton';

const SpecialOffer: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div 
          className="relative w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden flex items-center justify-center text-center px-6"
          style={{ 
            backgroundImage: "url('/images/special-offer.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373] animate-pulse"></span>
              <p className="text-white text-lg font-bold tracking-[0.2em] uppercase m-0">
                Specielt tilbud
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-12 font-serif leading-[1.1]">
              Book 2+ dage i forvejen og få 15% rabat
            </h2>

            <div className="flex justify-center">
              <CtaButton 
                text="Book din tid nu" 
                className="w-full md:w-auto min-w-[280px]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
