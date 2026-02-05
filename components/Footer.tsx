
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-background-dark border-t-8 border-primary px-6 md:px-20 py-20 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-4xl font-bold">bolt</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">IRON VAULT</h2>
          </div>
          <p className="max-w-xs text-neutral-500 font-bold uppercase text-xs leading-relaxed">
            123 INDUSTRIAL DISTRICT, SECTOR 7<br />
            CONCRETE CITY, UNDERGROUND<br />
            EST. 1994 - BUILT ON BLOOD.
          </p>
          <div className="flex gap-4">
            {['share', 'link', 'mail'].map((icon) => (
              <a 
                key={icon}
                className="w-12 h-12 border-4 border-[#392c28] flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h5 className="text-primary font-black uppercase text-sm tracking-widest">Protocol</h5>
            <nav className="flex flex-col gap-2 uppercase font-bold text-xs text-neutral-400">
              <a className="hover:text-white cursor-pointer">Strength</a>
              <a className="hover:text-white cursor-pointer">Conditioning</a>
              <a className="hover:text-white cursor-pointer">Recovery</a>
              <a className="hover:text-white cursor-pointer">Supplements</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-primary font-black uppercase text-sm tracking-widest">Archive</h5>
            <nav className="flex flex-col gap-2 uppercase font-bold text-xs text-neutral-400">
              <a className="hover:text-white cursor-pointer">Blog</a>
              <a className="hover:text-white cursor-pointer">Manifesto</a>
              <a className="hover:text-white cursor-pointer">Testimonials</a>
              <a className="hover:text-white cursor-pointer">Merch</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-primary font-black uppercase text-sm tracking-widest">Legal</h5>
            <nav className="flex flex-col gap-2 uppercase font-bold text-xs text-neutral-400">
              <a className="hover:text-white cursor-pointer">Liability</a>
              <a className="hover:text-white cursor-pointer">Terms</a>
              <a className="hover:text-white cursor-pointer">Privacy</a>
            </nav>
          </div>
        </div>
      </footer>
      
      <div className="bg-black py-4 px-6 md:px-20 text-[10px] font-bold text-neutral-600 uppercase tracking-widest flex justify-between items-center border-t border-neutral-800">
        <span>© 2026 IRON VAULT ENTERPRISES. ALL RIGHTS RESERVED.</span>
        <span className="hidden sm:inline">NO WEAKNESS ALLOWED.</span>
      </div>
    </>
  );
};

export default Footer;
