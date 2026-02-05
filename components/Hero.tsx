
import React from 'react';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-20 py-20 overflow-hidden">
      {/* Background Large Text Decor */}
      <div className="absolute top-10 right-[-10%] opacity-10 select-none pointer-events-none hidden lg:block">
        <h1 className="text-[20vw] font-black leading-none uppercase tracking-tighter">STRENGTH</h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="inline-block bg-primary text-white p-2 w-fit transform -rotate-1">
            <span className="text-sm font-black uppercase tracking-[0.2em]">Ascension Protocol v.2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] uppercase tracking-tighter">
            RAW<br />STRENGTH.<br /><span className="text-primary italic">NO EXCUSES.</span>
          </h1>
          
          <p className="max-w-md text-lg font-medium border-l-4 border-primary pl-6 py-2 uppercase leading-tight text-neutral-300">
            Our facility is a brutalist temple dedicated to the pursuit of physical dominance. Beyond the limits of humanity.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button 
              onClick={onJoinClick}
              className="bg-primary text-white px-10 py-5 text-xl font-black uppercase tracking-tighter hover:bg-white hover:text-primary transition-all border-4 border-primary"
            >
              Join the cult
            </button>
            <button className="bg-transparent text-white px-10 py-5 text-xl font-black uppercase tracking-tighter hover:bg-primary transition-all border-4 border-white">
              View Agony Schedule
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="brutalist-border bg-primary/20 p-4 transform rotate-2">
            <img 
              className="grayscale contrast-125 brightness-75 w-full h-[300px] md:h-[500px] object-cover" 
              alt="Grayscale image of a bodybuilder lifting heavy weights" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALQQ_t0fT2xVzKc47LoBJPXC1uq7R-Olb-2eP0ennUc6TW7MTr1hWFANlBCYlatadu-ZQocWEI0X5pbFgEavASlHdsOYVjZ1ZeMSuNAoi7NER9D_7aOO1LSLEzAuOw3248VmemzuZAJbYuLDyUvk-rz5KqJlqNcnhTQ5AeVn2vMFiqb4-rQp3JOsGalcn05nQdz5GC2fESgBlt19e6zkx1u3fqT8Hq1ORt1qLA2c4RyskohLf9U6lSiWXccQ_cXbTWtkU3FSZotxw" 
            />
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-white text-black p-6 border-4 border-primary hidden md:block transform -rotate-2">
            <p className="font-black text-4xl italic uppercase leading-none">4:00 AM</p>
            <p className="font-bold text-xs uppercase tracking-widest mt-2">The grind never ends</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
