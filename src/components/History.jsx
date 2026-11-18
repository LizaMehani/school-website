import React from 'react';

export default function History() {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-800/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-300 font-semibold tracking-wider uppercase text-sm">
            School Legacy & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Our History & Tribute to Sir Vijay Sharma
          </h2>
          <div className="h-1.5 w-24 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: History & Evolution */}
          <div className="space-y-6 text-emerald-100 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-amber-300">
              Building the Foundation of Excellence in Mithi West
            </h3>
            <p>
              Government Girls High School Mithi West has a proud history of serving the daughters of Tharparkar. Over the years, the institution has grown from strength to strength, overcoming regional challenges to become a beacon of hope and quality education.
            </p>
            <p>
              Every milestone achieved and every block built carries the dedication of educators and leaders who envisioned an empowered future for our students.
            </p>
            <div className="bg-emerald-800/60 p-4 rounded-xl border border-emerald-700">
              <p className="text-xs sm:text-sm text-amber-200 font-medium italic">
                "A school is not just a building; it is a foundation where dreams take flight and character is forged."
              </p>
            </div>
          </div>

          {/* Right: Sir Vijay Sharma Tribute Card with Photo */}
          <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border-t-4 border-amber-400">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
              {/* Sir Vijay Sharma Photo Frame */}
              <img 
                src="/Screenshot 2026-11-13 194131.png" 
                alt="Sir Vijay Sharma - Former Principal" 
                className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-md bg-slate-100 shrink-0"
              />
              <div>
                <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-xs uppercase inline-block mb-2">
                  Former Principal & Visionary
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Sir Vijay Sharma
                </h3>
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">
                  Pioneer of Positive Changes
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Sir Vijay Sharma served as an inspiring pillar for our school. His visionary leadership, strict discipline, and relentless efforts brought remarkable transformations to the campus infrastructure, academic standards, and student morale. His profound contributions laid the strong groundwork upon which our school proudly stands today.
            </p>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>🌟 Honored & Remembered</span>
              <span className="text-emerald-800 font-bold">GGHS Mithi West</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}