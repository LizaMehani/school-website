import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Announcements from './components/Announcements';
import PrincipalBox from './components/PrincipalBox';
import About from './components/About';
import Academics from './components/Academics';
import Exams from './components/Exams';
import Awards from './components/Awards';
import History from './components/History';
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import WesternFamily from './components/WesternFamily';
import Achievements from './components/Achievements';
import GalleryPage from './components/GalleryPage';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* 1. Home View */}
      {currentView === 'home' && (
        <>
          <Hero />
          <Announcements />
          <PrincipalBox />
          <About />
          <Academics />
          <Exams />
          <Awards />
          <Facilities />
          <Faculty />
          <WesternFamily />
          <Achievements />
        </>
      )}

      {/* 2. Gallery View */}
      {currentView === 'gallery' && (
        <GalleryPage setCurrentView={setCurrentView} />
      )}

      {/* 3. History View */}
      {currentView === 'history' && (
        <div className="pt-10">
          <History />
        </div>
      )}

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}