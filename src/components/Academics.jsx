import React from 'react';

export default function Academics() {
  return (
    <section id="facilities" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-800 font-bold uppercase tracking-widest text-xs bg-emerald-100 px-3 py-1 rounded-full">
            Academics & Student Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Quality Education & Equal Opportunities
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
            Empowering every girl with modern English medium education, free learning resources, and recognition for hard work.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Free Books Distribution Image Frame */}
          <div className="lg:col-span-5">
            <div className="bg-emerald-950 p-3 rounded-3xl border-4 border-amber-400 shadow-2xl space-y-3 group">
              <div className="w-full rounded-2xl overflow-hidden bg-emerald-900">
                <img 
                  src="/WhatsApp Image 2026-11-13 at 9.25.36 PM.jpeg" 
                  alt="Free Books Distribution GGHS Mithi West" 
                  className="w-full h-auto block group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="px-2 pb-1 text-center">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Free Books & Learning Support</span>
                <p className="text-[11px] text-emerald-200">GGHS Mithi West, Tharparkar</p>
              </div>
            </div>
          </div>

          {/* Right Side: Free Books, English Medium & Appreciation Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Free Books & English Medium Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-3 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md">
                  📚
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-950">100% Free Textbooks</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every student at Govt Girls High School Mithi West receives **completely free textbooks** from the school so that financial challenges never stand in the way of a girl's education.
              </p>
            </div>

            {/* English Medium Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-3 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
                  🌐
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-950">English Medium Instruction</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We provide strong **English medium education** across core science and arts subjects, preparing our students confidently for higher colleges, universities, and competitive fields.
              </p>
            </div>

            {/* Position Holders & Appreciation Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-3 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-xl shadow-md">
                  🏆
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-950">Position Holders & Appreciation</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Students who achieve top positions in class tests and term exams are **specially appreciated, awarded, and celebrated** in front of the school to motivate everyone toward excellence.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}