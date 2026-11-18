import React from 'react';

export default function Awards() {
  // 16 choti choti pictures ka collection
  const awardPhotos = [
    "/WhatsApp Image 2026-11-14 at 8.11.10 AM.jpeg",
    "/WhatsApp Image 2026-11-14 at 8.21.47 AM.jpeg",
    "/WhatsApp Image 2026-11-14 at 7.27.35 PM.jpeg",
    "/award,jpg (1).jpeg",
    "/WhatsApp Image 2026-11-14 at 8.04.15 PM.jpeg",
    "/WhatsApp Image 2026-11-14 at 9.21.06 PM.jpeg",
    "/WhatsApp Image 2026-11-14 at 7.58.45 PM.jpeg",
    "/WhatsApp Image 2026-11-14 at 8.04.05 PM.jpeg",
    "/WhatsApp Image 2026-11-14 at 9.39.37 PM.jpeg",
    "/WhatsApp Image 2026-11-15 at 11.22.25 AM.jpeg",
    "/839531372_122259946934261688_4743350515672334064_n.jpg",
    "/WhatsApp Image 2026-11-14 at 7.09.09 PM.jpeg",
    "/840909011_122259783818261688_602480932485522547_n.jpg",
    "/WhatsApp Image 2026-11-14 at 8.10.41 AM.jpeg",
    "/award.jpg",
    "/picture.jpg.jpeg"
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-800 font-bold uppercase tracking-widest text-xs bg-emerald-100 px-3 py-1 rounded-full">
            Appreciation & Annual Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Celebrating Our Achievers & Best Students
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
            At GGHS Mithi West, every student's hard work is valued, appreciated, and celebrated with pride.
          </p>
        </div>

        {/* Special Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Regular Appreciation */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-900/10 shadow-xl flex items-start space-x-4 hover:border-amber-400 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-amber-400 flex items-center justify-center text-2xl shrink-0 shadow-md">
              🌟
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                Encouragement & Student Appreciation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Position holders and hardworking students are regularly appreciated with certificates, prizes, and public recognition to boost their confidence and inspire others.
              </p>
            </div>
          </div>

          {/* Card 2: Best Student of the Year Award */}
          <div className="bg-emerald-950 text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-xl flex items-start space-x-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-2xl shrink-0 shadow-md">
              👑
            </div>
            <div className="space-y-1.5 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                Annual Grand Honor
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-amber-300">
                Best Student of the Year Award
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                Every year, one outstanding student who excels in academics, discipline, and overall character is honored with the prestigious <strong>Best Student of the Year Award</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* 16 Choti Choti Animated Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {awardPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="bg-white p-2 rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-500 group overflow-hidden hover:-translate-y-1.5"
            >
              <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-emerald-900 relative">
                <img 
                  src={photo} 
                  alt={`Award Moment ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-amber-300 text-[10px] font-bold uppercase tracking-wider">GGHS Mithi West</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}