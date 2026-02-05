
import React from 'react';

const Schedule: React.FC = () => {
  const sessions = [
    { time: '04:00 AM', mon: 'Deadlift Purgatory', wed: 'Shoulder Annihilation', fri: 'Lower Body Trauma', sun: 'Active Recovery' },
    { time: '10:00 AM', mon: 'Bench Press Riot', wed: 'Strongman Rituals', fri: 'Back Demolition', sun: 'Closed for Maintenance' },
    { time: '06:00 PM', mon: 'Conditioning Hell', wed: 'Compound Failure', fri: 'Total Exhaustion', sun: 'Closed for Maintenance' }
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 text-center">Weekly Agony Schedule</h2>
      
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border-4 border-primary min-w-[800px]">
          <thead>
            <tr className="bg-primary text-white border-b-4 border-primary">
              <th className="p-6 text-left font-black uppercase text-xl">Time</th>
              <th className="p-6 text-left font-black uppercase text-xl">Monday</th>
              <th className="p-6 text-left font-black uppercase text-xl">Wednesday</th>
              <th className="p-6 text-left font-black uppercase text-xl">Friday</th>
              <th className="p-6 text-left font-black uppercase text-xl">Sunday</th>
            </tr>
          </thead>
          <tbody className="text-white font-bold uppercase text-sm">
            {sessions.map((row, i) => (
              <tr key={i} className="border-b-4 border-primary/30 hover:bg-primary/10 transition-colors">
                <td className="p-6 border-r-4 border-primary/30 bg-primary/5">{row.time}</td>
                <td className="p-6 italic">{row.mon}</td>
                <td className="p-6 italic">{row.wed}</td>
                <td className="p-6 italic">{row.fri}</td>
                <td className="p-6 italic">{row.sun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
