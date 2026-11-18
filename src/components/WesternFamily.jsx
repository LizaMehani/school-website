import React from 'react';

export default function WesternFamily() {
  // Yahan apni wide group photos lagana (pehle upar-neeche ki black patti crop kar lena)
  const topPhotos = [
    {
      img: "/WhatsApp Image 2026-11-15 at 10.57.18 AM.jpeg",
      caption: "The Western Family "
    },
    {
      img: "/WhatsApp Image 2026-11-15 at 10.56.49 AM.jpeg",
      caption: "The Western Family "
    }
  ];

  const bottomPhotos = [
    {
      img: "/WhatsApp Image 2026-11-15 at 10.56.55 AM.jpeg",
      caption: "The Western Family "
    },
    {
      img: "/WhatsApp Image 2026-11-15 at 10.57.17 AM.jpeg",
      caption: "The Western Family "
    },
    {
      img: "/WhatsApp Image 2026-11-14 at 7.27.34 PM.jpeg",
      caption: "The Western Family "
    }
  ];

  return (
    <section className="py-24 bg-emerald-950 text-white relative overflow-hidden border-t border-emerald-900/80">
      {/* Animated Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/90 border border-amber-400/40 px-4 py-1.5 rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="text-amber-300 text-xs font-extrabold uppercase tracking-widest">
              More Than Just A Staff
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 tracking-tight">
            The Western Family
          </h2>
          
          <div className="w-28 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed pt-2">
            At <span className="text-amber-300 font-bold">GGHS Mithi West</span>, our Principal, teachers, and staff are bound by respect, dedication, and shared purpose. Together, we stand united as one heart and one soul—proudly known as <span className="text-amber-300 font-semibold italic">"The Western Family"</span>.
          </p>
        </div>

        {/* Wide Landscape Group Gallery */}
        <div className="space-y-6">
          
          {/* Top Row: 2 Extra-Wide Featured Group Frames */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-2.5 bg-gradient-to-b from-emerald-800/80 to-emerald-950 border border-emerald-700/80 hover:border-amber-400 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500 pointer-events-none"></div>

                {/* aspect-video gives wide 16:9 ratio so group photos fit completely */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-emerald-900">
                  <img
                    src={photo.img}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Wide Group Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-2.5 bg-gradient-to-b from-emerald-800/80 to-emerald-950 border border-emerald-700/80 hover:border-amber-400 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500 pointer-events-none"></div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-emerald-900">
                  <img
                    src={photo.img}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-amber-300 text-xs font-extrabold uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Quote Banner */}
        <div className="max-w-2xl mx-auto text-center bg-emerald-900/40 border border-emerald-800/80 rounded-2xl p-5 backdrop-blur-xs">
          <p className="text-xs sm:text-sm text-amber-200/90 font-medium italic">
            "Individually we are educators, together we are the Western Family—shaping the future of Tharparkar's daughters."
          </p>
        </div>

      </div>
    </section>
  );
}