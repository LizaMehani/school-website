import React, { useState } from 'react';

export default function EventsAndCelebrations() {
  const [activeTab, setActiveTab] = useState('All');

  const allEvents = [
    // 1. Annual Function
    {
      category: "Annual Function",
      img: "/WhatsApp Image 2026-11-14 at 7.51.25 PM.jpeg"
    },
    {
      category: "Annual Function",
      img: "/WhatsApp Image 2026-11-15 at 11.47.06 AM.jpeg"
    },
    {
      category: "Annual Function",
      img: "/WhatsApp Image 2026-11-14 at 7.23.53 PM.jpeg"
    },
    {
      category: "Annual Function",
      img: "/WhatsApp Image 2026-11-14 at 7.26.58 PM.jpeg"
    },

    // 2. Science Exhibition
    {
      category: "Science Exhibition",
      img: "/Screenshot 2026-11-14 114003.png"
    },
    {
      category: "Science Exhibition",
      img: "/SCIENCE FESTIVAL.jpeg"
    },
    {
      category: "Science Exhibition",
      img: "/Screenshot 2026-11-14 114135.png"
    },
    {
      category: "Science Exhibition",
      img: "/Screenshot 2026-11-14 114118.png"
    },

    // 3. Cultural Day
    {
      category: "Cultural Day",
      img: "/WhatsApp Image 2026-11-14 at 7.24.40 PM.jpeg"
    },
    {
      category: "Cultural Day",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80"
    },
    {
      category: "Cultural Day",
      img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=500&q=80"
    },
    {
      category: "Cultural Day",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80"
    },

    // 4. 14th August
    {
      category: "14th August",
      img: "/WhatsApp Image 2026-11-14 at 7.51.26 PM (1).jpeg"
    },
    {
      category: "14th August",
      img: "/WhatsApp Image 2026-11-14 at 9.21.04 PM.jpeg"
    },
    {
      category: "14th August",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80"
    },
    {
      category: "14th August",
      img: "https://images.unsplash.com/photo-1523289333742-af1143f6eb4b?auto=format&fit=crop&w=500&q=80"
    },

    // 5. Special Days & Activities
    {
      category: "Special Days & Activities",
      img: "/WhatsApp Image 2026-11-14 at 7.09.11 PM.jpeg"
    },
    {
      category: "Special Days & Activities",
      img: "/WhatsApp Image 2026-11-14 at 7.51.26 PM.jpeg"
    },
    {
      category: "Special Days & Activities",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    },
    {
      category: "Special Days & Activities",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80"
    },
    {
      category: "Special Days & Activities",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80"
    },
    {
      category: "Special Days & Activities",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = [
    "All",
    "Annual Function",
    "Science Exhibition",
    "Cultural Day",
    "14th August",
    "Special Days & Activities"
  ];

  const filteredEvents = activeTab === "All" 
    ? allEvents 
    : allEvents.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-md">
            Campus Life & Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight">
            Events, Festivals & Student Activities
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed pt-1">
            From Annual Functions, Science Exhibitions, and Cultural Days to 14th August, Teachers' Day, Youm-e-Difa, and Iqbal Day—every celebration builds confidence in our students.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-amber-400 text-slate-950 shadow-lg scale-105"
                  : "bg-emerald-900/80 text-emerald-100 border border-emerald-700 hover:border-amber-400 hover:text-amber-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid (Text at the bottom on hover, just like Awards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {filteredEvents.map((item, index) => (
            <div 
              key={index}
              className="bg-emerald-900/70 p-2.5 rounded-2xl border border-emerald-800 hover:border-amber-400 shadow-xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-emerald-950 relative">
                <img 
                  src={item.img} 
                  alt={item.category} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Bottom Gradient Strip on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-amber-300 text-xs font-extrabold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}