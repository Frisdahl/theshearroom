import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !circleRef.current || !textRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(
      circleRef.current,
      {
        x: 146,
        rotation: 360,
        backgroundColor: "#d4a373",
        duration: 0.5,
        ease: "power2.inOut",
      },
      0,
    );

    tl.to(
      textRef.current,
      {
        x: -60,
        duration: 0.5,
        ease: "power2.inOut",
      },
      0,
    );

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const btn = buttonRef.current;
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gray-50 overflow-hidden h-screen max-h-screen flex items-stretch"
    >
      <div className="max-w-[1600px] mx-auto px-4 w-full flex flex-col h-full">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-12 flex-1 h-full overflow-hidden">
          {/* Venstre kolonne: Tekstindhold med mere premium spacing (pt-56) */}
          <div className="flex-1 pt-40 lg:pt-56 pb-12 flex flex-col justify-between h-full">
            <div className="flex-1 flex flex-col justify-start">
              <h2 className="text-[#d4a373] text-sm lg:text-base uppercase tracking-[0.2em] font-bold mb-6 font-sans">
                Velkommen til Fresh Cut
              </h2>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-[#1a1a1a] mb-8 font-serif">
                Forkæl dit hår <br></br>
                <span className="text-[#d4a373]"> med ekspertise</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed mb-10 max-w-lg font-sans">
                Førsteklasses klipning, skægtrimning og traditionel barbering
                leveret af eksperter. Vi forener klassiske teknikker med moderne
                stil.
              </p>

              {/* Happy Customers Section */}
              <div className="flex items-center gap-4 mb-12">
                <img
                  src="/icons/happy-customer.png"
                  alt="Happy customers"
                  className="h-10 w-auto object-contain"
                />
                <p className="text-[#1a1a1a] font-semibold text-sm lg:text-base font-sans italic opacity-80">
                  Elsket af over 200 tilfredse kunder
                </p>
              </div>

              <div className="mb-6">
                <button
                  ref={buttonRef}
                  className="relative flex items-center bg-[#1a1a1a] rounded-full p-2 w-[210px] h-[64px] overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    ref={circleRef}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-10"
                  >
                    <img
                      src="/icons/right-arrow.svg"
                      alt="arrow"
                      className="w-4 h-4 -rotate-45"
                    />
                  </div>

                  <span
                    ref={textRef}
                    className="ml-6 text-white font-bold uppercase tracking-[2px] text-sm z-0 pointer-events-none"
                  >
                    Book nu
                  </span>
                </button>
              </div>
            </div>

            {/* Bund-info bar */}
            <div className="w-full border border-gray-200 rounded-2xl py-8 px-10 flex items-center justify-between bg-white/50 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <img
                  src="/icons/customer-favourite.svg"
                  alt="favourite"
                  className="w-10 h-10 lg:w-12 lg:h-12"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[#1a1a1a] font-bold text-[10px] lg:text-[11px] leading-tight uppercase font-sans tracking-wide">
                    Kunde
                    <br />
                    Favorit
                  </p>
                </div>
              </div>

              <div className="flex gap-8 lg:gap-12 items-start">
                <div className="text-center">
                  <h4 className="text-lg lg:text-xl font-bold text-[#1a1a1a] m-0 font-sans leading-none">
                    100%
                  </h4>
                  <p className="text-[9px] text-gray-500 uppercase font-bold mt-2.5 font-sans tracking-wider">
                    Besvarelse
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
                  <p className="text-[9px] text-gray-500 uppercase font-bold mt-2.5 font-sans tracking-wider">
                    Anmeldelser
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 pt-10 pb-12 h-full hidden lg:block">
            <div className="w-full h-full relative">
              <img
                src="/images/hero-img.jpg"
                alt="Fresh Cut Barber Shop"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
