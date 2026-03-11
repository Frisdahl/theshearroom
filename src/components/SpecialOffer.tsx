import React, { useEffect, useRef } from "react";
import CtaButton from "./CtaButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpecialOffer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // 1. Container reveal (scale and fade)
    tl.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
    );

    // 2. Badge fade in
    tl.fromTo(
      ".offer-badge",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.6",
    );

    // 3. Heading slide up (Split text style)
    tl.fromTo(
      ".offer-title",
      { y: "100%" },
      { y: "0%", duration: 0.8, ease: "power3.out" },
      "-=0.4",
    );

    // 4. Button fade/slide in
    tl.fromTo(
      ".offer-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4",
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="tilbud" className="py-24 bg-white">
      <div className="container">
        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden flex items-center justify-center text-center px-6 shadow-2xl"
          style={{
            backgroundImage: "url('/images/special-offer.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <div className="offer-badge flex items-center justify-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4a373] animate-pulse"></span>
              <p className="text-white text-base font-semibold tracking-[0.2em] uppercase m-0 font-sans">
                Specielt tilbud
              </p>
            </div>

            <div className="overflow-hidden mb-12">
              <h2 className="offer-title text-4xl md:text-6xl font-bold text-white max-w-2xl font-urbanist leading-[1.2] m-0 py-1">
                Book 2+ dage i forvejen og få 15% rabat
              </h2>
            </div>

            <div className="offer-cta flex justify-center">
              <CtaButton
                text="Book din tid nu"
                className="w-full md:w-auto min-w-[280px]"
                variant="white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
