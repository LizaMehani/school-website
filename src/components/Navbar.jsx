import { useState } from "react";

export default function Navbar({ onNavigate, currentPage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToPage = (page) => {
    setMenuOpen(false);
    if (typeof onNavigate === "function") {
      onNavigate(page);
    } else {
      window.location.hash = `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSection = (sectionId) => {
    setMenuOpen(false);
    if (currentPage !== "home" && typeof onNavigate === "function") {
      onNavigate("home");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = `#${sectionId}`;
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#064e3b]/95 backdrop-blur-md text-white border-b border-emerald-800/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo + School Name */}
        <button
          type="button"
          onClick={() => goToPage("home")}
          className="flex items-center gap-2.5 text-left min-w-0 group"
        >
          <img
            src="/logo.jpg"
            alt="GGHS Mithi West Logo"
            className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#fbbf24]/60 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="truncate">
            <div className="font-bold text-sm sm:text-base leading-tight truncate">
              GGHS Mithi West
            </div>
            <div className="text-[10px] sm:text-xs tracking-wider text-[#fbbf24] uppercase truncate">
              Tharparkar Sindh
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => goToPage("home")}
            className={`transition-colors duration-200 hover:text-[#fbbf24] ${
              currentPage === "home" ? "text-[#fbbf24]" : "text-white"
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => goToSection("about")}
            className="text-white hover:text-[#fbbf24] transition-colors duration-200"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goToSection("announcements")}
            className="text-white hover:text-[#fbbf24] transition-colors duration-200"
          >
            Announcements
          </button>

          <button
            type="button"
            onClick={() => goToPage("gallery")}
            className={`transition-colors duration-200 hover:text-[#fbbf24] ${
              currentPage === "gallery" ? "text-[#fbbf24]" : "text-white"
            }`}
          >
            Gallery
          </button>

          <button
            type="button"
            onClick={() => goToPage("history")}
            className={`px-3.5 py-1.5 rounded-lg border border-[#fbbf24]/70 font-semibold transition-all duration-200 whitespace-nowrap ${
              currentPage === "history"
                ? "bg-[#fbbf24] text-[#064e3b]"
                : "text-[#fbbf24] hover:bg-[#fbbf24] hover:text-[#064e3b]"
            }`}
          >
            History &amp; Tribute
          </button>
        </nav>

        {/* Mobile Animated Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-lg text-[#fbbf24] hover:bg-emerald-900/70 active:scale-95 transition-all duration-200 shrink-0"
        >
          <span
            className={`inline-block text-xl font-bold leading-none transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-110" : "rotate-0"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Smooth Animated Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#053f30] border-t border-emerald-800/80 ${
          menuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none border-t-0"
        }`}
      >
        <div className="px-4 py-3 space-y-1.5 text-sm">
          <button
            type="button"
            onClick={() => goToPage("home")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900/70 hover:translate-x-1 transition-all duration-200 text-white"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => goToSection("about")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900/70 hover:translate-x-1 transition-all duration-200 text-white"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goToSection("announcements")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900/70 hover:translate-x-1 transition-all duration-200 text-white"
          >
            Announcements
          </button>

          <button
            type="button"
            onClick={() => goToPage("gallery")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900/70 hover:translate-x-1 transition-all duration-200 text-white"
          >
            Gallery
          </button>

          <button
            type="button"
            onClick={() => goToPage("history")}
            className="block w-full text-left py-2.5 px-3 rounded-lg bg-[#fbbf24] text-[#064e3b] font-semibold hover:brightness-105 active:scale-[0.99] transition-all duration-200 mt-1"
          >
            History &amp; Tribute
          </button>
        </div>
      </div>
    </header>
  );
}