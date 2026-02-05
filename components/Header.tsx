
import React, { useState } from 'react';

interface HeaderProps {
  onJoinClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navItems = [
    { name: 'Programs', id: 'programs' },
    { name: 'Coaches', id: 'coaches' },
    { name: 'Facility', id: 'facility' },
    { name: 'Shop', id: 'shop' }
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) toggleMenu();
    }
  };

  return (
    <header className="sticky top-0 z-[60] flex items-center justify-between border-b-4 border-primary bg-background-dark px-4 py-4 md:px-20 transition-all duration-300">
      <div 
        className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="material-symbols-outlined text-primary text-2xl md:text-3xl font-bold">bolt</span>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">IRON VAULT</h2>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={onJoinClick}
          className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 px-4 md:px-6 py-2 text-[10px] md:text-sm font-black uppercase tracking-tighter whitespace-nowrap"
        >
          Join the cult
        </button>

        {/* Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center p-2 text-primary hover:bg-primary hover:text-white transition-all border-2 border-transparent hover:border-white"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Side Drawer */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-background-dark border-l-8 border-primary transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col p-8 shadow-[-20px_0px_50px_rgba(0,0,0,0.5)]`}
        >
          <div className="flex justify-between items-center mb-12">
             <h2 className="text-xl font-black uppercase tracking-tighter italic text-primary">MENU</h2>
             <button onClick={toggleMenu} className="text-white hover:text-primary transition-colors">
               <span className="material-symbols-outlined text-4xl">close</span>
             </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-4xl text-left font-black uppercase tracking-tighter hover:text-primary transition-colors cursor-pointer border-b-2 border-white/10 pb-4 flex justify-between items-center group"
              >
                <span>{item.name}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-2xl">0{idx + 1}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-auto">
            <div className="p-6 border-4 border-primary/30 bg-primary/5 mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">SYSTEM STATUS</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">ASCENSION PROTOCOL ACTIVE</span>
              </div>
            </div>
            
            <button 
              onClick={() => { toggleMenu(); onJoinClick(); }}
              className="w-full bg-white text-black py-4 font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all"
            >
              INITIALIZE JOIN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
