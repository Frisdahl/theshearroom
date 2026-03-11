import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CtaButton from "./CtaButton";

const Hero: React.FC = () => {
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLHeadingElement>(null);
  const customerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance Animations
    const tlEntrance = gsap.timeline();

    tlEntrance.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    // Text Split / Slide Up effect for Heading Lines
    tlEntrance.fromTo(
      ".hero-line-inner",
      { y: "110%" },
      { y: "0%", duration: 1.2, stagger: 0.15, ease: "power4.out" },
      "-=0.6",
    );

    // Fade and Slide for sub-elements
    tlEntrance.fromTo(
      [heroTextRef.current, customerRef.current, ctaRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.8",
    );
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gray-50 overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex items-stretch"
    >
      <div className="max-w-[1600px] mx-auto px-4 w-full flex flex-col h-full">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-12 flex-1 h-full">
          {/* Venstre kolonne: Tekstindhold */}
          <div className="flex-1 pt-32 md:pt-40 lg:pt-56 pb-12 flex flex-col justify-between h-full">
            <div className="flex-1 flex flex-col justify-center lg:justify-start">
              <div className="mb-8">
                <div className="overflow-hidden pb-2 -mb-2">
                  <h1 className="hero-line-inner text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.2] text-[#1a1a1a] font-urbanist py-1">
                    Ultimativ pleje
                  </h1>
                </div>
                <div className="overflow-hidden pb-2 -mb-2">
                  <h1 className="hero-line-inner text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.2] text-[#1a1a1a] font-urbanist py-1">
                    for <span className="text-[#d4a373]">mænd</span>
                  </h1>
                </div>
              </div>

              <div className="overflow-hidden mb-10">
                <p
                  ref={heroTextRef}
                  className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg font-sans"
                >
                  Førsteklasses klipning, skægtrimning og traditionel barbering
                  leveret af eksperter. Vi forener klassiske teknikker med
                  moderne stil.
                </p>
              </div>

              {/* Happy Customers Section */}
              <div ref={customerRef} className="flex items-center gap-4 mb-12">
                <img
                  src="/icons/happy-customer.png"
                  alt="Happy customers"
                  className="h-10 w-auto object-contain"
                />
                <p className="text-[#1a1a1a] font-semibold text-sm lg:text-base font-sans italic opacity-80">
                  Elsket af over 200 tilfredse kunder
                </p>
              </div>

              <div ref={ctaRef} className="mb-6 max-w-[250px]">
                <CtaButton text="Book nu" className="w-full md:w-[210px]" />
              </div>
            </div>

            {/* Bund-info bar - Hidden on mobile, shown on tablet/desktop or stacked */}
            <div className="w-full border border-gray-200 rounded-2xl py-6 lg:py-8 px-6 lg:px-10 flex flex-wrap items-center justify-between bg-white/50 shadow-sm backdrop-blur-sm gap-6 mt-8 lg:mt-0">
              <div className="flex items-center gap-4">
                <img
                  src="/icons/customer-favourite.svg"
                  alt="favourite"
                  className="w-10 h-10 lg:w-12 lg:h-12"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[#1a1a1a] font-bold text-sm leading-tight font-sans tracking-wide">
                    Kunde
                    <br />
                    Favorit
                  </p>
                </div>
              </div>

              <div className="flex gap-6 lg:gap-12 items-start">
                <div className="text-center">
                  <h4 className="text-lg lg:text-xl font-bold text-[#1a1a1a] m-0 font-sans leading-none">
                    100%
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold mt-2.5 font-sans tracking-wider">
                    Responsrate
                  </p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <h4 className="text-lg lg:text-xl font-bold text-[#1a1a1a] m-0 font-sans leading-none">
                    4.73
                  </h4>
                  <div className="h-[14px] flex items-center mt-2.5">
                    <img
                      src="/icons/5stars.png"
                      alt="rating"
                      className="h-2.5 lg:h-3"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg lg:text-xl font-bold text-[#1a1a1a] m-0 font-sans leading-none">
                    183
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold mt-2.5 font-sans tracking-wider">
                    Anmeldelser
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Højre kolonne: Billede - Now visible on tablet and stacked on mobile */}
          <div className="flex-1 lg:pt-10 pb-12 h-[400px] md:h-[500px] lg:h-full">
            <div className="w-full h-full relative">
              <img
                src="/images/hero-img.jpg"
                alt="Fresh Cut Barber Shop"
                className="w-full h-full object-cover rounded-[2rem] lg:rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
