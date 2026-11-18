import React from 'react';

export default function Faculty() {
  const teachers = [
    { name: "Madam Jassi Goswami", designation: "Principal", image: "/Screenshot 2026-11-11 071233.png" },
    { name: "Miss Rabia Memon", designation: "HST", image: "/WhatsApp Image 2026-11-13 at 9.25.39 PM.jpeg" },
    { name: "Madam Aisha", designation: "HST", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Bilal", designation: "GST", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Rukhsana", designation: "HST", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Tariq", designation: "GST", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Nasreen", designation: "HST", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Kamran", designation: "GST", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Shabana", designation: "HST", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Zohaib", designation: "GST", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Hina", designation: "HST", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Imran", designation: "GST", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Sadia", designation: "HST", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Nadeem", designation: "GST", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Kousar", designation: "HST", image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Aslam", designation: "GST", image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Zeenat", designation: "HST", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Farhan", designation: "GST", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80" },
    { name: "Madam Saima", designation: "HST", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
    { name: "Sir Rafique", designation: "GST", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-md">
            Our Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight">
            Dedicated Educators of Mithi West
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed pt-1">
            Meet our experienced teachers who guide and shape the bright futures of our students with utmost dedication.
          </p>
        </div>

        {/* Faculty Grid - Clean & Minimalist */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teachers.map((teacher, index) => (
            <div 
              key={index} 
              className="bg-emerald-900/80 rounded-2xl p-4 border border-emerald-800 shadow-xl hover:border-amber-400 transition-all duration-300 group flex flex-col items-center text-center space-y-3 backdrop-blur-sm"
            >
              {/* Teacher Image Frame */}
              <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-md bg-emerald-950 relative group-hover:scale-105 transition duration-300">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Teacher Info */}
              <div className="space-y-1">
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-amber-300 transition line-clamp-1">
                  {teacher.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-emerald-950/80 px-2.5 py-0.5 rounded-full inline-block border border-emerald-800">
                  {teacher.designation}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}