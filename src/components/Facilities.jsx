import React from 'react';

export default function Facilities() {
  const facilities = [
    { icon: '🔬', title: 'Science Laboratories', desc: 'Well-equipped Physics, Chemistry, and Biology labs for practical learning.' },
    { icon: '💻', title: 'Computer & IT Lab', desc: 'Modern computers introducing students to digital literacy and technology.' },
    { icon: '📚', title: 'Rich School Library', desc: 'Extensive collection of academic books, Sindhi & English literature, and encyclopedias.' },
    { icon: '🏫', title: 'Spacious Classrooms', desc: 'Clean, well-ventilated, and disciplined learning spaces for every grade.' },
    { icon: '🛡️', title: 'Secure Campus', desc: 'Protected boundary walls and dedicated staff ensuring 100% student safety.' },
    { icon: '🏃‍♀️', title: 'Sports & Activity Ground', desc: 'Dedicated space for assembly, sports events, and outdoor physical activities.' },
  ];

  return (
    <section id="facilities" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">Campus Infrastructure</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Our Facilities</h2>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 hover:shadow-md transition">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-slate-900 text-lg">{f.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}