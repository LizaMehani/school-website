import { useState } from "react";

export default function Navbar({ currentView = "home", setCurrentView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToView = (viewName) => {
    setMenuOpen(false);
    if (typeof setCurrentView === "function") {
      setCurrentView(viewName);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const findSectionElement = (sectionKey) => {
    // 1. Pehle direct id se check karo
    const directById = document.getElementById(sectionKey);
    if (directById) return directById;

    // 2. Agar id nahi mila toh heading text se section dhoondho
    const headings = Array.from(document.querySelectorAll("h1, h2, h3"));
    const searchMap = {
      about: ["about"],
      announcements: ["announcement", "announcements"],
      facilities: ["facilities", "our facilities"],
    };

    const keywords = searchMap[sectionKey] || [sectionKey];
    const matchedHeading = headings.find((h) => {
      const text = (h.textContent || "").trim().toLowerCase();
      return keywords.some((word) => text.includes(word));
    });

    if (matchedHeading) {
      return (
        matchedHeading.closest("section") ||
        matchedHeading.parentElement?.parentElement ||
        matchedHeading
      );
    }

    return null;
  };

  const scrollToHomeSection = (sectionKey) => {
    setMenuOpen(false);

    const performScroll = () => {
      const target = findSectionElement(sectionKey);
      if (target) {
        const headerOffset = 76;
        const y =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({
          top: Math.max(0, y),
          behavior: "smooth",
        });
      }
    };

    if (currentView !== "home") {
      if (typeof setCurrentView === "function") {
        setCurrentView("home");
      }
      setTimeout(performScroll, 250);
    } else {
      setTimeout(performScroll, 80);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#064e3b] text-white border-b border-emerald-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* School Logo + Name */}
        <button
          type="button"
          onClick={() => navigateToView("home")}
          className="flex items-center gap-2.5 text-left min-w-0 cursor-pointer"
        >
          <img
            src="/logo.jpg"
            alt="GGHS Mithi West"
            className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#fbbf24]"
          />
          <div className="truncate">
            <div className="font-bold text-sm sm:text-base leading-tight truncate">
              GGHS Mithi West
            </div>
            <div className="text-[10px] tracking-wider text-[#fbbf24] uppercase truncate">
              Tharparkar Sindh
            </div>
          </div>
        </button>

        {/* Desktop Nav: Home -> About -> Announcements -> Facilities -> Gallery -> History & Tribute */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => navigateToView("home")}
            className={`hover:text-[#fbbf24] cursor-pointer ${
              currentView === "home" ? "text-[#fbbf24]" : "text-white"
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToHomeSection("about")}
            className="text-white hover:text-[#fbbf24] cursor-pointer"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToHomeSection("announcements")}
            className="text-white hover:text-[#fbbf24] cursor-pointer"
          >
            Announcements
          </button>

          <button
            type="button"
            onClick={() => scrollToHomeSection("facilities")}
            className="text-white hover:text-[#fbbf24] cursor-pointer"
          >
            Facilities
          </button>

          <button
            type="button"
            onClick={() => navigateToView("gallery")}
            className={`hover:text-[#fbbf24] cursor-pointer ${
              currentView === "gallery" ? "text-[#fbbf24]" : "text-white"
            }`}
          >
            Gallery
          </button>

          <button
            type="button"
            onClick={() => navigateToView("history")}
            className={`px-3.5 py-1.5 rounded-lg border border-[#fbbf24] font-semibold whitespace-nowrap cursor-pointer ${
              currentView === "history"
                ? "bg-[#fbbf24] text-[#064e3b]"
                : "text-[#fbbf24] hover:bg-[#fbbf24] hover:text-[#064e3b]"
            }`}
          >
            History &amp; Tribute
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="md:hidden px-2.5 py-1.5 rounded-lg border border-emerald-700 text-[#fbbf24] text-lg font-bold cursor-pointer"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#053f30] border-t border-emerald-800 px-4 py-3 space-y-2 text-sm">
          <button
            type="button"
            onClick={() => navigateToView("home")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900 text-white cursor-pointer"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToHomeSection("about")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900 text-white cursor-pointer"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToHomeSection("announcements")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900 text-white cursor-pointer"
          >
            Announcements
          </button>

          <button
            type="button"
            onClick={() => scrollToHomeSection("facilities")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900 text-white cursor-pointer"
          >
            Facilities
          </button>

          <button
            type="button"
            onClick={() => navigateToView("gallery")}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-emerald-900 text-white cursor-pointer"
          >
            Gallery
          </button>

          <button
            type="button"
            onClick={() => navigateToView("history")}
            className="block w-full text-left py-2.5 px-3 rounded-lg bg-[#fbbf24] text-[#064e3b] font-semibold cursor-pointer"
          >
            History &amp; Tribute
          </button>
        </div>
      )}
    </header>
  );
}