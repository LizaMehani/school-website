import React from 'react';

export default function PrincipalBox() {
  return (
    <section className="py-16 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-800/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-emerald-950/65 rounded-3xl p-8 sm:p-12 border border-emerald-800 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            
            {/* Principal Portrait Frame */}
            <div className="shrink-0 text-center">
              <div className="w-44 h-56 sm:w-48 sm:h-60 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-emerald-900 mx-auto">
                <img 
                  src="/madam.jpg"
                  alt="Madam Jassi - Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-white text-lg mt-4">Madam Jassi</h4>
              <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">Principal, GGHS Mithi West</p>
            </div>

            {/* Principal Message Content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-md">
                Principal's Message
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-300 leading-snug">
                "Empowering Young Women to Lead with Confidence & Purpose"
              </h3>
              
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Welcome to Government Girls High School Mithi West. We believe that true education nurtures not only academic excellence but also builds character, courage, and self-belief. Our continuous effort is to provide every student with a platform to speak, present, perform, and emerge as confident leaders of tomorrow.
              </p>

              <div className="pt-3 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-300 font-medium">
                <span>GGHS Mithi West • Tharparkar</span>
                <span className="text-amber-400 font-serif text-3xl">❝</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}