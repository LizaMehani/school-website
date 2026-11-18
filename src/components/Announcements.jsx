import React from 'react';

export default function Announcements() {
  return (
    <section className="py-16 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-md">
            Notice Board
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-300">
            Latest Announcements & Updates
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Centered Notice Card */}
        <div className="bg-emerald-950/80 rounded-3xl p-6 sm:p-8 border-2 border-amber-400/40 shadow-2xl backdrop-blur-sm relative group hover:border-amber-400 transition duration-300">
          <div className="absolute top-6 right-6 flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></span>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Important Notice
            </span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-3">
              <span>📢</span>
              <span>Mid-Term Exams Coming in December</span>
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              All students of Govt Girls High School Mithi West are hereby informed that the Mid-Term Examinations for the December term will commence soon. Prepare diligently, focus on your pre-engineering and core subjects, and make Tharparkar proud!
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-amber-300 font-semibold border-t border-emerald-800">
              <span>📅 Schedule: Released Soon</span>
              <span>🏫 Venue: GGHS Mithi West Campus</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}