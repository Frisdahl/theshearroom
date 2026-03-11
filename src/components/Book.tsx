import React, { useState } from "react";
import CtaButton from "./CtaButton";

interface BookProps {
  isOpen: boolean;
  onClose: () => void;
}

const Book: React.FC<BookProps> = ({ isOpen, onClose }) => {
  const [location, setLocation] = useState<string>("");
  const [service, setService] = useState<string>("");

  const isButtonDisabled = !location || !service;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      ></div>

      {/* Side Panel - Now sliding from RIGHT */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white z-[210] shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col p-8 md:p-12 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1a1a1a] font-urbanist">
              Book tid
            </h2>
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form with Bolder Borders to match BookingSection */}
          <form className="space-y-6 flex-1">
            {/* Fuldt navn */}
            <div className="relative">
              <input
                type="text"
                placeholder="Fuldt navn"
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base placeholder:text-gray-400"
              />
            </div>

            {/* Email and Kontakt nummer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email adresse"
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base placeholder:text-gray-400"
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base placeholder:text-gray-400"
              />
            </div>

            {/* Vælg lokation */}
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base appearance-none cursor-pointer text-gray-500"
              >
                <option value="">Vælg lokation</option>
                <option value="kbh">København</option>
                <option value="aarhus">Aarhus</option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Vælg service */}
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base appearance-none cursor-pointer text-gray-500"
              >
                <option value="">Vælg service</option>
                <option value="klip">Klipning</option>
                <option value="skæg">Skægtrimning</option>
                <option value="pakke">Den fulde pakke</option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Fortrukne frisør */}
            <div className="relative">
              <select className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base appearance-none cursor-pointer text-gray-500">
                <option value="">Foretrukken frisør (valgfri)</option>
                <option value="alex">Alex</option>
                <option value="marc">Marc</option>
                <option value="thomas">Thomas</option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Calendar and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="date"
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base text-gray-500"
              />
              <input
                type="time"
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 focus:outline-none focus:border-[#d4a373] transition-all text-base text-gray-500"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-4 py-4 px-4">
              <input
                type="checkbox"
                id="terms-book"
                className="w-6 h-6 accent-[#d4a373] cursor-pointer"
              />
              <label
                htmlFor="terms-book"
                className="text-sm text-gray-500 cursor-pointer font-medium leading-tight"
              >
                Jeg accepterer vilkår og betingelser for online booking.
              </label>
            </div>

            {/* Footer with Button */}
            <div className="pt-8 mt-auto">
              <CtaButton
                text="fortsæt booking"
                className="w-full"
                disabled={isButtonDisabled}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Book;
