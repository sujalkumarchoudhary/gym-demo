
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fitness_center',
      title: 'Iron Only',
      desc: "Old school plates, rusted racks, and zero soft surfaces. We don't use rubber, we use steel.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: 'ac_unit',
      title: 'No Softness',
      desc: "No air conditioning. No mirrors. No distractions. Just you and the gravity trying to crush you.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: 'volume_up',
      title: 'Pure Energy',
      desc: "Industrial soundscapes and grit. The only soundtrack is the clanging of metal and heavy breathing.",
      img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-[#110d0c]">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-primary text-xl font-black uppercase tracking-[0.3em]">The Architecture</h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">ENGINEERED FOR SUFFERING</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-primary">
        {features.map((f, i) => (
          <div 
            key={i} 
            className={`p-8 border-b-4 md:border-b-0 ${i !== features.length - 1 ? 'md:border-r-4' : ''} border-primary flex flex-col gap-6 hover:bg-primary group transition-all duration-300 ${i === 1 ? 'bg-background-dark' : 'bg-transparent'}`}
          >
            <span className="material-symbols-outlined text-5xl group-hover:text-white text-primary transition-colors">
              {f.icon}
            </span>
            <h4 className="text-3xl font-black uppercase leading-none group-hover:text-white transition-colors">{f.title}</h4>
            <p className="text-neutral-500 group-hover:text-white/80 font-bold uppercase text-sm transition-colors">
              {f.desc}
            </p>
            <div className="overflow-hidden mt-4 border-2 border-white/10 group-hover:border-white transition-colors">
              <img 
                className="w-full aspect-video object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500" 
                alt={f.title} 
                src={f.img} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
