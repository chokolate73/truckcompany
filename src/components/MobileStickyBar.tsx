"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApply = () => {
    window.dispatchEvent(new Event("openApplyModal"));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-border-light shadow-lg px-4 py-3 lg:hidden">
      <div className="flex gap-3">
        <a
          href="tel:+12243302245"
          className="flex-1 flex items-center justify-center gap-2 border border-[#0F1D3A] text-[#0F1D3A] font-manrope font-bold text-sm py-3 rounded-xl transition-all hover:bg-[#0F1D3A]/5"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <button
          type="button"
          onClick={handleApply}
          className="flex-1 bg-accent hover:bg-accent-hover text-white font-manrope font-bold text-sm py-3 rounded-xl transition-all"
        >
          Apply to Drive
        </button>
      </div>
    </div>
  );
}
