import React from 'react';

export default function Navbar({ currentView, setCurrentView }) {
  return (
    <nav className="sticky top-0 z-50 bg-emerald-950 text-white shadow-md border-b border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* School Brand Logo Picture & Name */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentView('home')}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-amber-400 shadow-md group-hover:scale-105 transition flex items-center justify-center shrink-0">
              <img 
                src="/logo.jpg" 
                alt="GGHS Mithi West Logo" 
                className="w-full h-full object-contain p-0.5"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="font-extrabold text-emerald-950 text-xs">GG</span>';
                }}
              />
            </div>
            <div>
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight block leading-tight">
                GGHS Mithi West
              </span>
              <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                Tharparkar Sindh
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-sm font-semibold">
            <button 
              onClick={() => setCurrentView('home')}
              className={`transition cursor-pointer ${currentView === 'home' ? 'text-amber-400 font-bold' : 'text-emerald-100 hover:text-white'}`}
            >
              Home
            </button>
            <a 
              href="#announcements" 
              onClick={() => setCurrentView('home')}
              className="text-emerald-100 hover:text-white transition hidden sm:inline-block"
            >
              Announcements
            </a>
            <a 
              href="#about" 
              onClick={() => setCurrentView('home')}
              className="text-emerald-100 hover:text-white transition hidden md:inline-block"
            >
              About
            </a>
            <a 
              href="#facilities" 
              onClick={() => setCurrentView('home')}
              className="text-emerald-100 hover:text-white transition hidden lg:inline-block"
            >
              Facilities
            </a>

            {/* Naya Gallery Button */}
            <button 
              onClick={() => {
                setCurrentView('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-2 rounded-xl transition font-semibold cursor-pointer ${
                currentView === 'gallery' 
                  ? 'bg-amber-400 text-slate-950 shadow-md' 
                  : 'text-emerald-100 hover:text-amber-300 hover:bg-emerald-900/70'
              }`}
            >
              Gallery
            </button>

            <button 
              onClick={() => {
                setCurrentView('history');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-xl transition font-semibold shadow-md cursor-pointer ${
                currentView === 'history' 
                  ? 'bg-amber-400 text-slate-950' 
                  : 'bg-emerald-900 text-amber-300 border border-amber-400/40 hover:bg-emerald-800'
              }`}
            >
              History & Tribute
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}