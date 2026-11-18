import React from 'react';

export default function Exams() {
  const examPhotos = [
    "/WhatsApp Image 2026-11-14 at 7.51.37 AM.jpeg",
    "/WhatsApp Image 2026-11-14 at 7.51.39 AM.jpeg",
    "/WhatsApp Image 2026-11-14 at 7.51.41 AM.jpeg"
  ];

  const examStages = [
    {
      step: "01",
      title: "Monthly Tests",
      desc: "Regular chapter-wise tests every month to keep students consistent and exam-ready."
    },
    {
      step: "02",
      title: "Monthly Inspections",
      desc: "Strict academic and notebook inspections to ensure high teaching and learning discipline."
    },
    {
      step: "03",
      title: "First Term Exams",
      desc: "Initial term evaluation to measure foundational understanding and guide weak areas early."
    },
    {
      step: "04",
      title: "Mid-Term Exams",
      desc: "Comprehensive half-yearly examinations conducted under formal exam hall standards."
    },
    {
      step: "05",
      title: "Annual Exams",
      desc: "Final year-end board & school examinations celebrating hard work and top achievers."
    }
  ];

  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-md">
            Examinations & Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight">
            Disciplined Testing & Academic Evaluation
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed pt-1">
            A structured assessment system designed to build confidence, track progress, and prepare students for board success.
          </p>
        </div>

        {/* Clean Animated Photos Row (No text overlay) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examPhotos.map((photo, idx) => (
            <div 
              key={idx}
              className="group relative h-60 rounded-3xl overflow-hidden border-2 border-amber-400/50 hover:border-amber-400 shadow-2xl bg-emerald-900 transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={photo} 
                alt={`Examination Moment ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Animated 5-Stage Exam System Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {examStages.map((item, index) => (
            <div 
              key={index}
              className="bg-emerald-900/70 backdrop-blur-sm rounded-3xl p-6 border border-emerald-800 hover:border-amber-400 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-900 group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-400/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              <div className="space-y-3 relative z-10">
                <span className="inline-block text-xs font-extrabold text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow">
                  Step {item.step}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                  {item.title}
                </h3>
                <p className="text-emerald-100/80 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}