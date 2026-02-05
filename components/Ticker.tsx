
import React from 'react';

const Ticker: React.FC = () => {
  const messages = [
    "No Pain No Gain /",
    "Extreme Conditioning /",
    "Powerlifting Sanctuary /",
    "Industrial Strength /",
    "Beyond Human Limits /",
    "Embrace the Agony /"
  ];

  return (
    <div className="bg-primary py-4 overflow-hidden border-y-4 border-white whitespace-nowrap">
      <div className="inline-block animate-marquee uppercase font-black text-2xl tracking-tighter space-x-12">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            {messages.map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
