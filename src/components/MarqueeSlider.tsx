import React from 'react';
import MarqueeItem from './MarqueeItem';

const MarqueeSlider: React.FC = () => {
  const row1 = [
    { icon: '/icons/interior.svg', text: 'Moderne Interiør' },
    { icon: '/icons/skilled.svg', text: 'Dygtige Stylister' },
    { icon: '/icons/quick.svg', text: 'Glatte & Hurtige Aftaler' },
    { icon: '/icons/hygienic.svg', text: 'Komfortable & Hygiejniske Stationer' },
  ];

  const row2 = [
    { icon: '/icons/relaxing.svg', text: 'Afslappende Atmosfære' },
    { icon: '/icons/easy-location.svg', text: 'Let Tilgængelig Beliggenhed' },
    { icon: '/icons/product.svg', text: 'Top-Kvalitets Produkter Brugt' },
    { icon: '/icons/result.svg', text: 'Premium Resultater Ved Hvert Besøg' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden space-y-8">
      {/* Row 1: Right to Left */}
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...row1, ...row1, ...row1].map((item, index) => (
            <MarqueeItem key={`r1-${index}`} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className="relative flex">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...row2, ...row2, ...row2].map((item, index) => (
            <MarqueeItem key={`r2-${index}`} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MarqueeSlider;
