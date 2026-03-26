"use client";

import { MapPin } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const regions = [
  "Northeast",
  "Mid-Atlantic",
  "Southeast",
  "Midwest",
  "South Central",
  "Mountain West",
  "Pacific NW",
  "Southwest",
  "Great Plains",
];

// Destination dots positioned around the rings (top%, left%)
const dots = [
  { top: "8%", right: "20%", size: "w-3 h-3", opacity: "bg-accent" },
  { top: "35%", right: "5%", size: "w-3 h-3", opacity: "bg-accent" },
  { bottom: "15%", right: "15%", size: "w-4 h-4", opacity: "bg-accent/70" },
  { bottom: "20%", left: "15%", size: "w-3 h-3", opacity: "bg-accent" },
  { top: "30%", left: "5%", size: "w-4 h-4", opacity: "bg-accent/70" },
  { top: "12%", left: "18%", size: "w-3 h-3", opacity: "bg-accent" },
  { bottom: "8%", left: "45%", size: "w-3 h-3", opacity: "bg-accent/50" },
  { top: "55%", right: "2%", size: "w-3 h-3", opacity: "bg-accent/60" },
];

export default function Coverage() {
  return (
    <section id="coverage" className="bg-bg-light py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
              Service Coverage
            </span>
            <h2 className="font-manrope font-extrabold text-text-dark text-3xl sm:text-4xl lg:text-6xl leading-tight mt-3 mb-6">
              Coast to Coast.
              <br />
              <span className="text-accent">From Gurnee, IL.</span>
            </h2>
            <p className="font-inter text-text-muted text-base lg:text-xl leading-relaxed mb-8">
              With our headquarters in Gurnee, Illinois, we service the entire
              continental United States. Whether it&apos;s a local Midwest run
              or a coast-to-coast haul — we&apos;re there.
            </p>

            {/* Region tags with checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {regions.map((region) => (
                <div key={region} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-inter text-text-dark text-sm font-medium">
                    {region}
                  </span>
                </div>
              ))}
            </div>

            {/* Custom lane CTA */}
            <div className="flex items-center gap-2">
              <span className="font-inter text-text-muted text-sm">
                Need a custom lane?
              </span>
              <a
                href="#contact"
                className="font-inter text-accent text-sm font-semibold hover:underline"
              >
                Contact dispatch &rarr;
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right — radar graphic */}
          <AnimateOnScroll variant="fade-right" duration={0.7} delay={0.2}>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Ring 4 — outermost */}
                <div className="absolute inset-0 rounded-full bg-accent/[0.03]" />
                {/* Ring 3 */}
                <div className="absolute inset-[12%] rounded-full bg-accent/[0.05]" />
                {/* Ring 2 */}
                <div className="absolute inset-[24%] rounded-full bg-accent/[0.08]" />
                {/* Ring 1 — innermost, pulse animation */}
                <div className="absolute inset-[36%] rounded-full bg-accent/[0.12] animate-radar-pulse" />

                {/* Center hub */}
                <div className="absolute inset-[42%] flex items-center justify-center">
                  <div className="bg-accent rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg shadow-accent/30">
                    <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>

                {/* Hub label */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ top: "62%" }}
                >
                  <div className="bg-[#0F1D3A] text-white font-manrope font-bold text-sm px-4 py-2 rounded-lg shadow-md whitespace-nowrap">
                    Gurnee, IL
                  </div>
                </div>

                {/* Destination dots */}
                {dots.map((dot, i) => (
                  <div
                    key={i}
                    className={`absolute ${dot.size} rounded-full ${dot.opacity} shadow-sm`}
                    style={{
                      top: dot.top,
                      right: dot.right,
                      bottom: dot.bottom,
                      left: dot.left,
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
