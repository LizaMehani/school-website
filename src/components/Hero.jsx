import React from 'react';

export default function Hero() {
  return (
    <section className="relative text-white pt-24 pb-36 overflow-hidden">
      {/* Background Image & Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/WhatsApp Image 2026-11-07 at 4.58.13 AM.jpeg" 
            loading="lazy"
          alt="School Assembly Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[0.5px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 bg-emerald-900/90 border border-emerald-600/60 px-4 py-1.5 rounded-full text-amber-300 text-xs font-semibold tracking-wider uppercase shadow-lg backdrop-blur-md">
          <span>✨ District Tharparkar, Sindh</span>
        </div>

        {/* Main Bold School Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-tight drop-shadow-md">
          Govt Girls High School <span className="text-amber-400">Mithi West</span>
        </h1>

        {/* Subtitle */}
        <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
          Dedicated to academic excellence, discipline, moral growth, and fostering confidence in every student of our community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="#about" 
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition text-sm"
          >
            Discover More
          </a>
          <a 
            href="#facilities" 
            className="w-full sm:w-auto bg-emerald-900/80 hover:bg-emerald-900 text-white font-semibold px-8 py-3.5 rounded-xl border border-emerald-600 transition text-sm backdrop-blur-md"
          >
            Our Facilities
          </a>
        </div>

      </div>

      {/* Stats Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-16 -mb-24">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-slate-900">
          <div>
            <h3 className="text-3xl font-extrabold text-emerald-900">850+</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Enrolled Students</p>
          </div>
          <div className="border-l border-slate-100">
            <h3 className="text-3xl font-extrabold text-emerald-900">35+</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Dedicated Faculty</p>
          </div>
          <div className="md:border-l border-slate-100">
            <h3 className="text-3xl font-extrabold text-amber-500">98%</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Matric Pass Rate</p>
          </div>
          <div className="border-l border-slate-100">
            <h3 className="text-3xl font-extrabold text-emerald-900">100%</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Safe Campus</p>
          </div>
        </div>
      </div>
    </section>
  );
}