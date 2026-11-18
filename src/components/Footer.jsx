import React from 'react';

export default function Footer({ setCurrentView }) {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t-2 border-amber-400/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. School Logo & Intro */}
          <div className="space-y-4 lg:col-span-1">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-amber-400 shadow-lg group-hover:scale-105 transition flex items-center justify-center shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="GGHS Mithi West Logo" 
                  loading="lazy"
                  className="w-full h-full object-contain p-0.5"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span class="font-extrabold text-emerald-950 text-sm">GG</span>';
                  }}
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">
                  GGHS Mithi West
                </h3>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Tharparkar, Sindh
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              Empowering young girls of Tharparkar through quality education, character building, and modern academic excellence.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h4 className="text-amber-300 font-extrabold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <a 
                  href="#announcements" 
                  onClick={() => setCurrentView('home')}
                  className="hover:text-amber-300 transition"
                >
                  Notice Board & Exams
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setCurrentView('home')}
                  className="hover:text-amber-300 transition"
                >
                  About Our School
                </a>
              </li>
              <li>
                <a 
                  href="#facilities" 
                  onClick={() => setCurrentView('home')}
                  className="hover:text-amber-300 transition"
                >
                  Campus Facilities
                </a>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('history');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  History & Tribute
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Academics & Campus */}
          <div className="space-y-4">
            <h4 className="text-amber-300 font-extrabold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2 inline-block">
              Academics & Life
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-200/90">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Middle & Secondary Classes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Science & Computer Labs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Annual & Cultural Events</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Student Awards & Honors</span>
              </li>
            </ul>
          </div>

          {/* 4. Campus Location & Hours */}
          <div className="space-y-4">
            <h4 className="text-amber-300 font-extrabold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2 inline-block">
              Campus Info
            </h4>
            <div className="space-y-3 text-sm text-emerald-200/90">
              <p className="leading-relaxed">
                <strong className="text-white block">Address:</strong>
                Government Girls High School Mithi West, District Tharparkar, Sindh, Pakistan
              </p>
              <p>
                <strong className="text-white block">School Timings:</strong>
                Monday – Saturday: 8:00 AM – 1:30 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <p>
            © {new Date().getFullYear()} <span className="text-amber-300 font-bold">Govt Girls High School Mithi West</span>. All Rights Reserved.
          </p>
          <p className="text-emerald-200">
            Designed & Developed with ❤️ by <span className="text-amber-400 font-bold">Leeza Mehani</span>
          </p>
        </div>
      </div>
    </footer>
  );
}