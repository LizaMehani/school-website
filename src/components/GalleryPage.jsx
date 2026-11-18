import React, { useState } from 'react';

export default function GalleryPage({ setCurrentView }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Annual Function',
    'Science Exhibition',
    'Cultural Day',
    '14th August',
    'Special Days & Activities',
    'Campus Life'
  ];

  // Yahan apni saari compressed pictures add karti jayein!
  const allPhotos = [
    {
      img: "/WhatsApp Image 2026-11-14 at 7.51.25 PM.jpeg",
      category: "Annual Function"
    },
    {
        img:"/WhatsApp Image 2026-11-14 at 7.23.53 PM.jpeg",
        category:"Annual Function"

    },
      {
        img:"/WhatsApp Image 2026-11-15 at 11.47.05 AM.jpeg",
        category:"Annual Function"

    },
      {
        img:"/WhatsApp Image 2026-11-14 at 7.26.58 PM.jpeg",
        category:"Annual Function"

    },
      {
        img:"/WhatsApp Image 2026-11-15 at 11.47.06 AM.jpeg",
        category:"Annual Function"

    },
    {
      img: "/proud moment.jpg",
      category: "Science Exhibition"
    },
     {
      img: "/906685470_122265610484261688_5808548692967194567_n.jpg",
      category: "Science Exhibition"
    },
     {
      img: "/907128401_122265612848261688_3640075853889129765_n.jpg",
      category: "Science Exhibition"
    },
     {
      img: "/884187718_122263280756261688_2026302571142941324_n.jpg",
      category: "Science Exhibition"
    },
    {
      img: "/WhatsApp Image 2026-11-14 at 7.09.11 PM.jpeg",
      category: "Special Days & Activities"
    },
     {
      img: "/WhatsApp Image 2026-11-14 at 7.51.26 PM.jpeg",
      category: "Special Days & Activities"
    },
    {
      img: "/864445365_122262568904261688_7254924330531802753_n.jpg",
      category: "Special Days & Activities"
    },
    {
      img: "/WhatsApp Image 2026-11-14 at 9.21.04 PM.jpeg",
      category: "14th August"
    },
    {
      img: "/WhatsApp Image 2026-11-15 at 10.56.49 AM.jpeg",
      category: "14th August"
    },
     {
      img: "/WhatsApp Image 2026-11-14 at 7.51.26 PM (1).jpeg",
      category: "14th August"
    },
     {
      img: "/WhatsApp Image 2026-11-14 at 7.09.29 PM (1).jpeg",
      category: "Annual Function"
    },
    {
      img: "/WhatsApp Image 2026-11-07 at 4.58.13 AM.jpeg",
      category: "Campus Life"
    },
     {
      img: "/WhatsApp Image 2026-11-14 at 7.51.37 AM.jpeg",
      category: "Campus Life"
    },
    {
      img: "/WhatsApp Image 2026-11-14 at 7.24.40 PM.jpeg",
      category: "Annual Function"
    },
     {
      img: "/WhatsApp Image 2026-11-14 at 8.11.10 AM.jpeg",
      category: "Annual Function"
    },
  ];

  const filteredPhotos = activeCategory === 'All'
    ? allPhotos
    : allPhotos.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-emerald-950 text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Header & Back Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-emerald-800 pb-6">
          <div>
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest">
              Glimpses of GGHS Mithi West
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              School Photo Gallery
            </h1>
          </div>

          <button
            onClick={() => setCurrentView('home')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 border border-amber-400/40 font-semibold text-sm transition cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'bg-emerald-900/80 text-emerald-100 border border-emerald-800 hover:border-amber-400/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Image Grid with Smooth Hover Animation (No Text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-emerald-900 border-2 border-emerald-800 hover:border-amber-400 shadow-xl aspect-4/3 transition-all duration-500 ease-out hover:-translate-y-2"
            >
              {/* Golden Ambient Glow on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 pointer-events-none"></div>

              <img
                src={photo.img}
                alt="School Memory"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}