
import React from 'react';

interface JoinCTAProps {
  onJoinClick: () => void;
}

const JoinCTA: React.FC<JoinCTAProps> = ({ onJoinClick }) => {
  return (
    <section className="relative bg-primary py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Huge Background Decor */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none select-none">
        <p className="text-[30rem] font-black leading-none uppercase tracking-tighter text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">JOIN</p>
      </div>

      <div className="relative z-10 max-w-4xl border-8 border-white p-12 bg-black transform -rotate-2 shadow-[20px_20px_0px_rgba(0,0,0,0.4)]">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">JOIN THE CULT</h2>
        <p className="text-xl md:text-2xl font-bold uppercase mb-12 max-w-2xl mx-auto italic text-neutral-300">
          WE DON'T WANT YOUR MONEY IF YOU'RE NOT WILLING TO BLEED. START YOUR ASCENSION TODAY.
        </p>
        <button 
          onClick={onJoinClick}
          className="bg-primary text-white hover:bg-white hover:text-primary transition-all px-16 py-6 text-3xl font-black uppercase tracking-tighter border-4 border-primary"
        >
          Claim your rack
        </button>
      </div>
    </section>
  );
};

export default JoinCTA;
