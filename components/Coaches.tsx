
import React from 'react';

const Coaches: React.FC = () => {
  const coaches = [
    { 
      name: 'KRAKEN', 
      role: 'Head of Strength', 
      quote: "Gravity is a choice, not a law.", 
      specialty: "Powerlifting / CNS Overload",
      img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'VALKYRIE', 
      role: 'Conditioning Lead', 
      quote: "Comfort is a slow death.", 
      specialty: "Endurance / High-Grit Drills",
      img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'TITAN', 
      role: 'Monolith Protocol', 
      quote: "Become the iron you lift.", 
      specialty: "Mass / Structural Integrity",
      img: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80&w=800' 
    }
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="text-right flex flex-col items-end gap-4 mb-24 relative">
        <h2 className="text-primary text-xl font-black uppercase tracking-[0.3em]">The Enforcers</h2>
        <h3 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">THE OVERSEERS</h3>
        <div className="absolute -top-10 -left-10 text-[15rem] font-black text-white/5 pointer-events-none select-none hidden lg:block">STAFF</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {coaches.map((c, i) => (
          <div key={i} className="relative group bg-background-dark border-4 border-white/10 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
            {/* Image Container with Offset Border */}
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border-b-4 border-white/10 group-hover:border-primary">
              <img 
                src={c.img} 
                alt={c.name} 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
              />
              <div className="absolute top-4 right-4 bg-black/80 px-4 py-2 border-2 border-primary">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{c.specialty}</p>
              </div>
            </div>

            {/* Vertical Name Strip */}
            <div className="absolute -left-10 top-20 bg-primary p-3 transform -rotate-90 origin-right transition-all duration-300 group-hover:bg-white group-hover:text-primary">
              <span className="font-black uppercase tracking-widest text-xs whitespace-nowrap">{c.role}</span>
            </div>

            <div className="p-10 relative">
              <h4 className="text-5xl font-black uppercase tracking-tighter text-white mb-4 group-hover:text-primary transition-colors">{c.name}</h4>
              <p className="italic text-neutral-400 font-bold uppercase text-sm border-l-4 border-primary pl-4 py-1">
                "{c.quote}"
              </p>
              
              <div className="mt-8 flex justify-end">
                <button className="text-[10px] font-black uppercase tracking-widest border-2 border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
                  VIEW PROTOCOL
                </button>
              </div>
            </div>
            
            {/* Brutalist Shadow Accent */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary translate-x-2 translate-y-2 -z-10 transition-all"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;
