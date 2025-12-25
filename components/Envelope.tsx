
import React, { useState } from 'react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  isLoading: boolean;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen, isLoading }) => {
  const [isShaking, setIsShaking] = useState(false);
  const [isBroken, setIsBroken] = useState(false);

  const handleClick = () => {
    if (isOpen) return;
    
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsBroken(true);
      setTimeout(() => {
        onOpen();
      }, 300);
    }, 500);
  };

  return (
    <div className="relative w-72 h-48 sm:w-96 sm:h-64 perspective-2000">
      <div 
        className={`relative w-full h-full preserve-3d transition-all duration-700 
          ${isOpen ? 'translate-y-20 opacity-50' : 'cursor-pointer hover:scale-105 active:scale-95'}
          ${isShaking ? 'envelope-shake' : ''}`}
        onClick={handleClick}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-[#6b2525] rounded-lg shadow-2xl border border-black/20"></div>

        {/* The Secret Letter */}
        <div className={`absolute left-4 right-4 top-2 sm:left-6 sm:right-6 sm:top-4 h-40 sm:h-52 parchment shadow-inner z-10 origin-bottom flex flex-col
          ${isOpen ? 'letter-fly' : 'opacity-0'}`}>
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center justify-center space-y-2 sm:space-y-3 relative overflow-hidden" 
               style={{backgroundImage: 'linear-gradient(transparent 95%, rgba(100, 149, 237, 0.08) 95%)', backgroundSize: '100% 1.2rem sm:1.5rem'}}>
            <div className="text-[#8b4513]/60 font-typewriter text-[6px] sm:text-[8px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">Oceanic Telegram</div>
            <div className="w-8 sm:w-12 h-[1px] bg-[#8b4513]/20"></div>
            <div className="text-red-900/80 font-handwriting text-lg sm:text-xl text-center">
              For Lola
            </div>
            <div className="absolute bottom-2 right-2 opacity-10 text-xl sm:text-2xl rotate-[-20deg]">🐚</div>
          </div>
        </div>

        {/* Front Decoration (Pocket sides) */}
        <div className="absolute inset-0 bg-[#7b2c2c] z-30" style={{ clipPath: 'polygon(0 0, 50% 55%, 0 100%)' }}></div>
        <div className="absolute inset-0 bg-[#7b2c2c] z-30" style={{ clipPath: 'polygon(100% 0, 50% 55%, 100% 100%)' }}></div>
        <div className="absolute inset-0 bg-[#8b3535] z-30 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }}></div>

        {/* Top Flap */}
        <div 
          className={`absolute top-0 left-0 w-full h-full bg-[#a54343] origin-top transition-transform duration-600 z-40
            ${isOpen ? '-rotate-x-180' : 'rotate-x-0'}`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
        >
          <div className="absolute inset-0 bg-[#6b2525] -rotate-x-180 backface-hidden shadow-2xl"></div>
        </div>

        {/* Wax Seal */}
        <div 
          className={`absolute top-[42%] left-[42%] w-12 h-12 sm:w-16 sm:h-16 z-50 transition-all duration-300
          ${isBroken ? 'seal-break' : 'scale-100 hover:scale-110 rotate-[-5deg]'}`}
        >
          <div className="w-full h-full bg-red-900 rounded-full flex items-center justify-center border-2 sm:border-4 border-red-950 shadow-[0_5px_15px_rgba(0,0,0,0.5),inset_2px_2px_5px_rgba(255,255,255,0.2)]">
            <div className="text-red-200 text-xl sm:text-2xl drop-shadow-md">🐟</div>
            <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-5 sm:h-6 bg-red-900 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/4 w-2 sm:w-3 h-3 sm:h-4 bg-red-900 rounded-full rotate-12"></div>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div className="absolute -bottom-20 sm:-bottom-24 left-0 w-full text-center space-y-1 sm:space-y-2 pointer-events-none">
          <p className="text-[#f4ecd8] font-handwriting text-2xl sm:text-3xl animate-bounce whitespace-nowrap">Tap to break the seal!</p>
          <div className="flex justify-center gap-2 opacity-50">
            <span className="animate-ping text-lg sm:text-xl">🫧</span>
            <span className="animate-ping text-lg sm:text-xl" style={{animationDelay: '0.2s'}}>🫧</span>
            <span className="animate-ping text-lg sm:text-xl" style={{animationDelay: '0.4s'}}>🫧</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Envelope;
