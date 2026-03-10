import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface CtaButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  className = "",
  disabled = false,
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!buttonRef.current || !circleRef.current || !textRef.current) return;

    const btn = buttonRef.current;
    const circle = circleRef.current;
    const txt = textRef.current;

    // Create timeline
    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current.to(
      circle,
      {
        x: () => btn.offsetWidth - circle.offsetWidth - 16,
        duration: 0.4,
        ease: "power2.inOut",
      },
      0,
    );

    timelineRef.current.to(
      txt,
      {
        x: () => -(circle.offsetWidth / 2),
        duration: 0.4,
        ease: "power2.inOut",
      },
      0,
    );

    const handleMouseEnter = () => {
      if (!disabled) timelineRef.current?.play();
    };

    const handleMouseLeave = () => {
      if (!disabled) timelineRef.current?.reverse();
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled]);

  // Reset animation if it becomes disabled while hovered
  useEffect(() => {
    if (disabled && timelineRef.current) {
      timelineRef.current.reverse();
    }
  }, [disabled]);

  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      onClick={onClick}
      className={`relative flex items-center rounded-full p-2 h-[64px] w-full overflow-hidden transition-all duration-300 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#1a1a1a] group hover:bg-[#1a1a1a]"
        } ${className}`}
    >
      {/* Circle with arrow */}
      <div
        ref={circleRef}
        className={`w-12 h-12 p-3 rounded-full flex items-center justify-center z-10 transition-colors duration-300 
          ${disabled ? "bg-gray-300" : "bg-white group-hover:bg-[#d4a373]"}`}
      >
        <img
          src="/icons/right-arrow.svg"
          alt="arrow"
          className={`w-full h-full transition-all duration-300 -rotate-45 
            ${
              disabled
                ? "opacity-40"
                : "group-hover:brightness-0 group-hover:invert"
            }`}
        />
      </div>

      {/* Text */}
      <span
        ref={textRef}
        className={`ml-6 font-bold uppercase tracking-[2px] text-xs z-0 pointer-events-none transition-colors duration-300 text-white`}
      >
        {text}
      </span>
    </button>
  );
};

export default CtaButton;
