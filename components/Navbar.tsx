"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-white/95 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2L2 11v20h30V11L17 2z"
              fill="#1B3878"
              fillOpacity="0.08"
              stroke="#1B3878"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="17" r="4" fill="#1B3878" />
            <path
              d="M5 31v-2a5 5 0 015-5h4a5 5 0 015 5v2"
              stroke="#1B3878"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="23" cy="15" r="3.5" fill="#F47920" />
            <path
              d="M18.5 31v-1.5a4.5 4.5 0 014.5-4.5h2a4.5 4.5 0 014.5 4.5V31"
              stroke="#F47920"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span style={{ color: "#1B3878" }}>Company</span>
            <span style={{ color: "#F47920" }}>2</span>
            <span style={{ color: "#1B3878" }}>You</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-[#1B3878] transition-colors text-sm font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1B3878] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2a4a96] transition-all hover:shadow-lg hover:-translate-y-px"
          >
            Book a Visit
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1B3878] rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-5 pt-3 pb-6 border-t border-gray-100 bg-white space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-gray-700 hover:text-[#1B3878] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 bg-[#1B3878] text-white text-center py-3.5 rounded-full font-semibold text-sm hover:bg-[#2a4a96] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Visit
          </a>
        </div>
      </div>
    </header>
  );
}
