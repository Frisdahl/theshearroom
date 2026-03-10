import React from 'react';

interface ReviewCtnProps {
  image: string;
  name: string;
  date: string;
  rating: string;
  review: string;
}

const ReviewCtn: React.FC<ReviewCtnProps> = ({ image, name, date, rating, review }) => {
  return (
    <div className="border border-gray-200 rounded-[30px] p-8 bg-white transition-shadow duration-300 hover:shadow-sm flex flex-col h-full">
      {/* Header Area */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          {/* Circle Image */}
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Name and Date */}
          <div className="flex flex-col">
            <h4 className="text-xl font-extrabold text-[#1a1a1a] leading-tight mb-1">
              {name}
            </h4>
            <span className="text-gray-400 text-xs font-semibold">
              {date}
            </span>
          </div>
        </div>

        {/* Rating Container */}
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
          <img src="/icons/skilled.svg" alt="star" className="w-4 h-4 object-contain" />
          <span className="text-[#1a1a1a] text-base font-black">
            {rating}
          </span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-base leading-relaxed italic flex-1">
        "{review}"
      </p>
    </div>
  );
};

export default ReviewCtn;
