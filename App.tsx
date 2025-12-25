
import React, { useState } from 'react';
import { AppState } from './types';
import Background from './components/Background';
import Envelope from './components/Envelope';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.OPENING);
  const [isOpen, setIsOpen] = useState(false);

  const finalWish = `Dear Lola,

Ah… um… I know I’m already the best gift you in Christmas 😌
but sorry, I couldn’t find any box big enough to fit me inside. Hehe.

That’s okay tho, because I've found the most beautiful keychain in the world just for you (and for Andri too 😉).

Wishing you a Christmas full of joy, warmth, laughter, and lots of little moments that make you smile. 🎄✨

And also, best wishes to your bestie Andriana (hope you’ll be able to ride a bike in the future! 🚲😂)

Merry Christmas
~Tom~`;

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      setAppState(AppState.CARD);
    }, 1250);
  };

  const handleCloseLetter = () => {
    setAppState(AppState.OPENING);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center p-4 selection:bg-red-200">
      <Background />

      <div className="w-full max-w-2xl flex flex-col items-center relative z-10">
        
        {appState === AppState.OPENING && (
          <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12 py-8 md:py-12 animate-in fade-in duration-700">
            <div className="text-center space-y-3">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-pacifico text-[#f4ecd8] drop-shadow-[0_8px_10px_rgba(0,0,0,0.6)] mb-4 md:mb-8">Merry Fishmas</h1>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-handwriting drop-shadow-lg">A special delivery for Lola...</h2>
              <div className="flex items-center justify-center gap-4 text-[#f4ecd8]/50 font-typewriter text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em]">
                <div className="h-[1px] w-8 md:w-12 bg-current"></div>
                <span>Deep Sea Post Office</span>
                <div className="h-[1px] w-8 md:w-12 bg-current"></div>
              </div>
            </div>
            <Envelope isOpen={isOpen} onOpen={handleOpenEnvelope} />
          </div>
        )}

        {appState === AppState.CARD && (
          <div className="w-full space-y-8 md:space-y-12 animate-in zoom-in slide-in-from-bottom-32 duration-1000 max-h-[90vh] overflow-y-auto custom-scrollbar px-2 md:px-0">
            <div className="parchment rounded-lg p-6 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.7)] relative min-h-[500px] md:min-h-[700px] overflow-hidden burn-edge">
              <div className="absolute top-[-40px] left-[-40px] w-64 h-64 bg-orange-200/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Stationery Header */}
              <div className="flex justify-between items-start border-b-2 border-[#8b4513]/10 pb-4 md:pb-8 mb-4 md:mb-6">
                <div className="space-y-1 md:space-y-2">
                  <div className="font-typewriter text-[9px] md:text-[11px] text-[#8b4513]/60 uppercase font-bold tracking-[0.3em] md:tracking-[0.5em] italic">Oceanic Correspondence</div>
                  <div className="font-typewriter text-2xl md:text-4xl text-blue-900 font-black tracking-tighter italic">Lola,</div>
                </div>
                <div className="w-20 h-24 md:w-28 md:h-32 border-2 border-double border-[#8b4513]/20 p-1 md:p-2 flex flex-col items-center justify-center bg-white rotate-[-3deg] shadow-md relative">
                  <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-l border-b border-[#8b4513]/20"></div>
                  <div className="text-3xl md:text-5xl animate-float">🐡</div>
                  <div className="text-[8px] md:text-[10px] text-red-900 font-typewriter font-black mt-2 md:mt-3 uppercase tracking-tighter">FISHMAS</div>
                  <div className="text-[6px] md:text-[7px] text-[#8b4513]/50 font-typewriter font-bold uppercase mt-1">Special Edition</div>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {/* The Ruled Paper Section */}
                <div className="vintage-lines min-h-[350px] md:min-h-[450px] relative red-margin">
                  <p className="text-blue-900/90 text-xl sm:text-2xl md:text-4xl font-handwriting whitespace-pre-wrap py-2 drop-shadow-sm animate-in fade-in duration-1000">
                    {finalWish}
                  </p>
                </div>
                
                <div className="flex justify-between items-end pt-2 md:pt-4">
                  <div className="flex -space-x-4 opacity-50 scale-100 md:scale-125 origin-left grayscale-[0.5]">
                    <span className="text-2xl md:text-4xl">🫧</span>
                    <span className="text-2xl md:text-4xl" style={{marginLeft: '-10px'}}>🌿</span>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-typewriter text-[9px] md:text-[11px] text-[#8b4513]/60 uppercase tracking-[0.1em] md:tracking-[0.2em] font-black italic">Delivered from the heart,</p>
                    <p className="font-handwriting text-2xl md:text-4xl text-red-900/80 mt-1 md:mt-2 rotate-[-2deg] drop-shadow-sm">~Tom~</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 text-[#8b4513]/10 font-typewriter text-[6px] md:text-[8px] rotate-90 origin-top-left">CONFIDENTIAL • LOLA ONLY</div>
            </div>
            
            <div className="flex justify-center px-4 w-full">
              <button 
                onClick={handleCloseLetter}
                className="w-full max-w-sm py-5 md:py-6 bg-[#6b2525] hover:bg-[#8b3535] text-[#f4ecd8] rounded-none font-typewriter font-black shadow-[6px_6px_0px_rgba(0,0,0,0.5)] md:shadow-[10px_10px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-2 border-2 border-white/10 uppercase tracking-[0.2em] md:tracking-[0.3em] text-base md:text-xl flex items-center justify-center gap-4"
              >
                Close Letter ✉️
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-8 md:mt-16 text-[#f4ecd8]/20 font-typewriter text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] pb-10">
        VINTAGE STATIONERY • LOLA EDITION • 2024
      </footer>
    </div>
  );
};

export default App;
