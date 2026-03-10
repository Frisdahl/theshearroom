import React from 'react';
import ReviewCtn from './ReviewCtn';

const Reviews: React.FC = () => {
  const ratings = [
    { score: '4.8', label: 'Hygiejne' },
    { score: '4.6', label: 'Service' },
    { score: '4.6', label: 'Tilfredshed' },
    { score: '4.9', label: 'Professionelle' },
  ];

  const reviews = [
    {
      image: '/images/1.jpg',
      name: 'Sofie Jensen',
      date: '10. Feb 2024',
      rating: '5.0',
      review: 'Fantastisk service og atmosfære. Jeg er altid tilfreds med min klipning her.'
    },
    {
      image: '/images/2.jpg',
      name: 'Mads Nielsen',
      date: '05. Feb 2024',
      rating: '4.8',
      review: 'Meget professionelle barberer. Man føler sig virkelig velkommen og i gode hænder.'
    },
    {
      image: '/images/3.jpg',
      name: 'Emma Hansen',
      date: '28. Jan 2024',
      rating: '4.9',
      review: 'Bedste salon i byen! Lokalerne er altid rene og moderne.'
    },
    {
      image: '/images/4.jpg',
      name: 'Lars Pedersen',
      date: '22. Jan 2024',
      rating: '4.7',
      review: 'Gode priser og hurtig betjening. Kan varmt anbefales til en hurtig trimning.'
    },
    {
      image: '/images/5.jpg',
      name: 'Camilla Møller',
      date: '15. Jan 2024',
      rating: '5.0',
      review: 'Helt vild med resultatet! Min stylist forstod præcis hvad jeg ønskede.'
    },
    {
      image: '/images/6.jpg',
      name: 'Thomas Bruun',
      date: '08. Jan 2024',
      rating: '4.6',
      review: 'Solid barbering og god musik. Kommer helt sikkert igen næste gang.'
    },
    {
      image: '/images/7.jpg',
      name: 'Julie Andersen',
      date: '02. Jan 2024',
      rating: '4.9',
      review: 'Super dygtige stylister og en meget afslappende oplevelse hver gang.'
    },
    {
      image: '/images/8.jpg',
      name: 'Anders Christensen',
      date: '24. Dec 2023',
      rating: '4.8',
      review: 'Altid en fornøjelse. De små detaljer gør virkelig en stor forskel her.'
    },
    {
      image: '/images/9.jpg',
      name: 'Louise Schmidt',
      date: '18. Dec 2023',
      rating: '5.0',
      review: 'Eksklusiv behandling fra start til slut. Kan ikke forestille mig at gå andre steder hen.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <p className="text-[#1a1a1a] text-sm font-semibold tracking-[0.2em] uppercase m-0">
              Anmeldelser
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 h-12 md:h-16">
            <img src="/images/leaf.png" alt="" className="h-full w-auto object-contain opacity-40" />
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] font-serif leading-none tracking-tight">
              4.73
            </h2>
            <img src="/images/leaf.png" alt="" className="h-full w-auto object-contain scale-x-[-1] opacity-40" />
          </div>

          <p className="max-w-xl text-gray-500 text-base md:text-lg font-medium leading-relaxed">
            Hvor hvert besøg får dig til at se godt ud og føle dig selvsikker.
          </p>
        </div>

        {/* Ratings - Seamless with ONLY internal borders */}
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-100 mb-20 max-w-4xl mx-auto">
          {ratings.map((item, index) => (
            <div 
              key={index} 
              className="flex-1 p-6 md:p-8 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-2">
                {item.score}
              </h3>
              <p className="text-gray-400 font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Individual Reviews Grid - Subtle stagger on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-10 mt-24">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className={`
                ${(index % 3 === 1) ? 'lg:-translate-y-8' : ''} 
                transition-transform duration-700 ease-out
              `}
            >
              <ReviewCtn 
                image={rev.image}
                name={rev.name}
                date={rev.date}
                rating={rev.rating}
                review={rev.review}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
