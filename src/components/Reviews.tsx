import React from 'react';

const Reviews: React.FC = () => {
  const ratings = [
    { score: '4.8', label: 'Hygiejne' },
    { score: '4.6', label: 'Service' },
    { score: '4.6', label: 'Tilfredshed' },
    { score: '4.9', label: 'Professionelle' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373] animate-pulse"></span>
            <p className="text-[#1a1a1a] text-lg font-bold tracking-[0.2em] uppercase m-0">
              Anmeldelser
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <img src="/images/leaf.png" alt="" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h2 className="text-6xl md:text-8xl font-black text-[#1a1a1a] font-serif">
              4.73
            </h2>
            <img src="/images/leaf.png" alt="" className="w-12 h-12 md:w-16 md:h-16 object-contain scale-x-[-1]" />
          </div>

          <p className="max-w-2xl text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Hvor hvert besøg får dig til at se godt ud og føle dig selvsikker.
          </p>
        </div>

        {/* Ratings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ratings.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-[30px] p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <h3 className="text-4xl font-black text-[#1a1a1a] mb-3 group-hover:text-[#d4a373] transition-colors">
                {item.score}
              </h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
