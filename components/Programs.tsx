
import React from 'react';

const Programs: React.FC = () => {
  const programs = [
    { 
      title: 'HYPER-MASS', 
      focus: 'Hypertrophy', 
      intensity: 'EXTREME', 
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'POWER-INIT', 
      focus: 'Strength', 
      intensity: 'BRUTAL', 
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'VOID-METCON', 
      focus: 'Conditioning', 
      intensity: 'LETHAL', 
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' 
    }
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-background-dark">
      <div className="flex flex-col gap-4 mb-16 border-l-8 border-primary pl-8">
        <h2 className="text-primary text-xl font-black uppercase tracking-[0.3em]">Ascension Paths</h2>
        <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">SELECT YOUR SUFFERING</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {programs.map((p, i) => (
          <div key={i} className="group relative overflow-hidden border-4 border-white/10 hover:border-primary transition-all duration-500 bg-neutral-900">
            <img 
              src={p.img} 
              alt={p.title} 
              className="w-full h-[600px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
              <span className="text-primary text-xs font-black tracking-[0.2em] mb-2">PROTOCOL {i + 1} // {p.focus}</span>
              <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">{p.title}</h4>
              <div className="h-2 w-0 group-hover:w-full bg-primary transition-all duration-500 mb-6"></div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                Intensity Level: <span className="text-white bg-primary/20 px-2 py-1">{p.intensity}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
