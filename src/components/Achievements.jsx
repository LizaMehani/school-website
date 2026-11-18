import React from 'react';

export default function Achievements() {
  // Abhi ke liye 8-10 random professional/school event placeholders
  const photos = [
    "/proud moment.jpg",
    "/WhatsApp Image 2026-11-13 at 9.56.04 PM.jpeg",
    "/WhatsApp Image 2026-11-13 at 9.58.15 PM.jpeg",
    "/WhatsApp Image 2026-11-13 at 9.59.56 PM.jpeg",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    "/Screenshot 2026-11-14 090454.png",
    "/883570800_122263372016261688_584673934263627010_n.jpg"
  ];

  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-md">
            Memories & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight">
            Our Proud Moments
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed pt-1">
            A visual journey of excellence, celebrations, and vibrant campus life at Govt Girls High School Mithi West.
          </p>
        </div>

        {/* Photos Grid with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative h-64 rounded-3xl overflow-hidden border-2 border-emerald-800 shadow-xl bg-emerald-900 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img 
                src={photo} 
                alt={`Achievement Moment ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-amber-300 text-xs font-bold tracking-wider uppercase">GGHS Mithi West</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}