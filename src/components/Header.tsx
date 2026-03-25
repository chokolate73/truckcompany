"use client";

import { useState } from "react";
import { Truck, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-manrope font-[800] text-white text-lg tracking-tight">
                D&V Services
              </span>
              <span className="font-inter text-navy-200 text-xs">
                Inc. — Trucking &amp; Freight
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm font-medium text-navy-100 hover:text-orange px-4 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 bg-orange hover:bg-orange-600 text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Apply to Drive
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-900/95 border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-inter text-sm font-medium text-navy-100 hover:text-orange px-4 py-2 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 bg-orange hover:bg-orange-600 text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            Apply to Drive
          </a>
        </div>
      )}
    </header>
  );
}
