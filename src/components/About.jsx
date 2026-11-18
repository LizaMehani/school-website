import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-800 font-bold uppercase tracking-widest text-xs bg-emerald-100 px-3 py-1 rounded-full">
            About Our Institution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Shaping Bright Futures in Mithi West
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
            Government Girls High School Mithi West, Tharparkar, has been a beacon of light, knowledge, and women empowerment in the region for decades.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Campus Visual Frame & Legacy Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Image Frame (Ab image 100% poori aur saaf dikhegi) */}
            <div className="bg-emerald-950 p-3 rounded-3xl border-4 border-amber-400 shadow-2xl space-y-3">
              <div className="w-full rounded-2xl overflow-hidden bg-emerald-900">
                <img 
                  src="/WhatsApp Image 2026-11-13 at 9.26.06 PM.jpeg"
                  loading="lazy"
                  alt="School Campus GGHS Mithi West" 
                  className="w-full h-auto block"
                />
              </div>
              <div className="px-2 pb-1 text-center">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Govt Girls High School Mithi West</span>
                <p className="text-[11px] text-emerald-200">Tharparkar, Sindh</p>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-900 text-white p-5 rounded-2xl shadow-lg space-y-1">
                <span className="text-amber-400 font-extrabold text-xl">100%</span>
                <h4 className="font-bold text-xs text-amber-200">Commitment to Growth</h4>
                <p className="text-[11px] text-emerald-100/80">Focused on academic rigor & moral character.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-lg space-y-1">
                <span className="text-emerald-800 font-extrabold text-xl">Active</span>
                <h4 className="font-bold text-xs text-emerald-950">Student Life</h4>
                <p className="text-[11px] text-slate-600">Debates, science, sports & cultural events.</p>
              </div>
            </div>

          </div>

          {/* Right Side: Mission & Vision Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Legacy & Culture Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-3 relative overflow-hidden group hover:border-amber-400 transition duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 group-hover:scale-110 transition duration-300"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-lg shadow-md">
                  🏛️
                </div>
                <h3 className="text-lg font-bold text-emerald-950">
                  Legacy of Excellence & Culture
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Located in the heart of Tharparkar, our school blends traditional values with modern educational standards. We provide a secure, disciplined, and intellectually stimulating environment where every young girl is encouraged to dream big.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-3 hover:shadow-2xl transition">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Our Core Mission</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower female students of Tharparkar with quality pre-engineering, science, and humanities education, fostering critical thinking, self-reliance, and leadership qualities.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-3 hover:shadow-2xl transition">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold">
                  🌟
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Our Vision for Tomorrow</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be a model government institution that produces confident, well-educated, and technologically proficient young women ready to excel in higher education.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}