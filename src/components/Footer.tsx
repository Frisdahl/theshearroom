import React from "react";
import CtaButton from "./CtaButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#202121] pt-16 pb-8">
      <div className="container">
        {/* Using a 12-column grid to give the first column more weight and space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-8 text-left pb-24">
          {/* Column 1: Call to Action - Spans 5/12 columns */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse"></span>
              <p className="text-white text-base font-semibold tracking-[0.2em] uppercase m-0">
                Dit look
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-10 font-urbanist leading-tight text-left max-w-sm">
              Altid her for
              <br />
              vores klienter
            </h2>
            <div className="w-full max-w-[240px]">
              <CtaButton text="Book nu" variant="white" className="w-full" />
            </div>
          </div>

          {/* Column 2: Menu - Spans 2/12 columns */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <p className="text-[#d4a373] text-base font-bold tracking-[0.2em] uppercase mb-8">
              Menu
            </p>
            <ul className="space-y-4 text-left">
              {["Services", "Lokationer", "Anmeldelser", "Om Os"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold text-lg"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Explore - Spans 2/12 columns */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <p className="text-[#d4a373] text-base font-bold tracking-[0.2em] uppercase mb-8">
              Udforsk
            </p>
            <ul className="space-y-4 text-left">
              {["Trends", "Stylists"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Developer - Spans 3/12 columns to prevent email break */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <p className="text-[#d4a373] text-base font-bold tracking-[0.2em] uppercase mb-8">
              Kontakt udvikler
            </p>
            <div className="space-y-6 text-left">
              <div>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                  E-mail
                </p>
                <a
                  href="mailto:frisdahlmarketing@gmail.com"
                  className="text-white hover:text-[#d4a373] transition-colors duration-300 font-semibold text-lg block whitespace-nowrap"
                >
                  Frisdahlmarketing@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                  Telefon
                </p>
                <a
                  href="tel:+4542739363"
                  className="text-white hover:text-[#d4a373] transition-colors duration-300 font-semibold text-lg"
                >
                  42 73 93 63
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content-Width Image Section with Rounded Corners */}
        <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-[40px] shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
          ></div>
          {/* Dark Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Text Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-[0.2em] font-urbanist opacity-90 drop-shadow-2xl">
              Fresh <span className="text-[#d4a373]">cut</span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
