
import React from 'react';

const Shop: React.FC = () => {
  const products = [
    { 
      name: 'VAULT OVERSIZE TEE', 
      price: '$45', 
      category: 'APPAREL', 
      img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'LEATHER LIFT STRAPS', 
      price: '$35', 
      category: 'GEAR', 
      img: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'INDUSTRIAL HOODIE', 
      price: '$85', 
      category: 'APPAREL', 
      img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'STEEL INSULATED SHAKER', 
      price: '$28', 
      category: 'ACCESSORIES', 
      img: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&q=80&w=600' 
    }
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-background-dark border-t-8 border-primary/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <h2 className="text-primary text-xl font-black uppercase tracking-[0.3em] mb-4">The Armory</h2>
          <h3 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">EQUIPMENT</h3>
        </div>
        <button className="group relative bg-transparent border-4 border-white px-10 py-5 font-black uppercase tracking-tighter overflow-hidden">
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">View All Arsenal</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-[#111] p-6 border-4 border-white/5 hover:border-primary transition-all group flex flex-col h-full">
            <div className="relative overflow-hidden mb-6 aspect-square bg-neutral-900 border-2 border-white/10 group-hover:border-primary/50">
              <img 
                src={p.img} 
                alt={p.name} 
                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute top-0 left-0 bg-primary px-3 py-1 font-black text-xs italic text-white">
                NEW RELEASE
              </div>
              <div className="absolute bottom-4 right-4 bg-black border-2 border-primary px-4 py-2 font-black text-xl italic text-primary">
                {p.price}
              </div>
            </div>
            
            <p className="text-primary font-black text-[10px] tracking-[0.3em] mb-2">{p.category}</p>
            <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-6 leading-none group-hover:text-primary transition-colors flex-grow">
              {p.name}
            </h4>
            
            <button className="w-full border-4 border-white/10 py-4 font-black uppercase tracking-widest text-xs hover:bg-primary hover:border-primary transition-all">
              ADD TO KIT
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-12 bg-primary/10 border-4 border-dashed border-primary flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h5 className="text-3xl font-black uppercase tracking-tighter">JOIN THE SUPPLY LIST</h5>
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">GET DROPS BEFORE THE GENERAL PUBLIC.</p>
        </div>
        <div className="flex w-full md:w-auto gap-4">
          <input 
            type="email" 
            placeholder="SECURE_EMAIL@VAULT.COM" 
            className="bg-black border-4 border-white/10 p-4 font-black text-xs uppercase focus:border-primary outline-none flex-grow md:w-80"
          />
          <button className="bg-white text-black px-8 py-4 font-black uppercase text-xs hover:bg-primary hover:text-white transition-all">
            ENLIST
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
