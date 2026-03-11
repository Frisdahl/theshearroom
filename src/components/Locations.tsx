import React from "react";

const Locations: React.FC = () => {
  const cityLocations = [
    { city: "København", address: "Kongens Nytorv 1, 1050 København K" },
    { city: "Aarhus", address: "Strøget 12, 8000 Aarhus C" },
    { city: "Odense", address: "Vestergade 45, 5000 Odense C" },
  ];

  return (
    <section id="lokationer" className="py-24 bg-[#202121] text-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
            <p className="text-white text-base font-semibold tracking-[0.2em] uppercase m-0">
              Lokationer
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16 font-urbanist">
            Hvor du kan finde os
          </h2>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 w-full max-w-5xl">
            {cityLocations.map((loc, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-default"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#d4a373] transition-colors duration-300">
                  {loc.city}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{loc.address}</p>
                {/* Small decorative line */}
                <div className="w-12 h-0.5 bg-[#d4a373] transition-all duration-300 group-hover:w-24"></div>
              </div>
            ))}
          </div>

          {/* Google Maps Embed - Inside Container with Rounded Corners */}
          <div className="w-full h-[450px] md:h-[600px] rounded-[40px] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <iframe
              title="The Shear Room Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.4975513812234!2d12.5835613!3d55.6798721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531761d1558b%3A0x6a12b9d297593d6a!2sKongens%20Nytorv%201%2C%201050%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1709214567890!5m2!1sda!2sdk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mt-24">
        <div className="w-full h-px bg-white/10"></div>
      </div>
    </section>
  );
};

export default Locations;
