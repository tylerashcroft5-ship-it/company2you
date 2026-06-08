"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
        scrolled ? "bg-white shadow-sm py-2" : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Real logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Company2You"
            width={380}
            height={72}
            className="h-10 w-auto object-contain"
            priority
          />
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
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}>
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
            className="block mt-4 bg-[#1B3878] text-white text-center py-3.5 rounded-full font-semibold text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book a Visit
          </a>
        </div>
      </div>
    </header>
  );
}
