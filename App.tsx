
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Schedule from './components/Schedule';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';
import Programs from './components/Programs';
import Coaches from './components/Coaches';
import Shop from './components/Shop';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-dark scroll-smooth">
      {/* Visual FX Layers */}
      <div className="fixed inset-0 grain pointer-events-none z-50"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-40 opacity-20"></div>

      <Header onJoinClick={toggleModal} />
      
      <main className="flex-1">
        <Hero onJoinClick={toggleModal} />
        <Ticker />
        
        <section id="programs">
          <Programs />
        </section>

        <section id="coaches">
          <Coaches />
        </section>

        <section id="facility">
          <Features />
        </section>
        
        <Schedule />

        <section id="shop">
          <Shop />
        </section>

        <JoinCTA onJoinClick={toggleModal} />
      </main>

      <Footer />

      {/* Basic Join Modal/Overlay for functionality */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6">
          <div className="relative w-full max-w-xl border-4 border-primary bg-background-dark p-12 transform -rotate-1">
            <button 
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">INITIATE ASCENSION</h2>
            <p className="text-neutral-400 font-bold uppercase mb-8">Enter your details to join the vault. We only accept the driven.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Request received. Prepare for your first session.'); toggleModal(); }}>
              <input 
                type="text" 
                placeholder="NAME / ALIAS" 
                required
                className="bg-transparent border-4 border-white p-4 font-black uppercase tracking-widest focus:border-primary outline-none text-white"
              />
              <input 
                type="email" 
                placeholder="SECURE EMAIL" 
                required
                className="bg-transparent border-4 border-white p-4 font-black uppercase tracking-widest focus:border-primary outline-none text-white"
              />
              <button 
                type="submit"
                className="bg-primary text-white p-6 text-2xl font-black uppercase tracking-tighter hover:bg-white hover:text-primary transition-all border-4 border-primary"
              >
                JOIN THE CULT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
