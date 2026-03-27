"use client";

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

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="relative min-h-[500px] lg:min-h-[550px] flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C1A32" }}
    >
      {/* Background map image - mobile: centered cover, desktop: right contain */}
      <div
        className="absolute inset-0 bg-no-repeat md:hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/coverage-map.jpg')",
        }}
      />
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/images/coverage-map.jpg')",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      />

      {/* Left-to-right gradient overlay (desktop) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(12,26,50,0.90) 0%, rgba(12,26,50,0.65) 35%, rgba(12,26,50,0.35) 60%, rgba(12,26,50,0.15) 100%)",
        }}
      />

      {/* Top-to-bottom gradient overlay (mobile) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,26,50,0.40) 0%, rgba(12,26,50,0.60) 25%, rgba(12,26,50,0.80) 50%, rgba(12,26,50,0.92) 70%, rgba(12,26,50,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="lg:w-1/2">
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
              Service Coverage
            </span>
            <h2 className="font-manrope font-extrabold text-white text-3xl sm:text-4xl lg:text-6xl leading-tight mt-3 mb-6">
              Coast to Coast.
              <br />
              <span className="text-accent">From Gurnee, IL.</span>
            </h2>
            <p className="font-inter text-white/70 text-base lg:text-xl leading-relaxed mb-8">
              With our headquarters in Gurnee, Illinois, we service the entire
              continental United States. Whether it&apos;s a local Midwest run
              or a coast-to-coast haul - we&apos;re there.
            </p>

            {/* Region tags with checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {regions.map((region) => (
                <div key={region} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
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
                  <span className="font-inter text-white/90 text-sm font-medium">
                    {region}
                  </span>
                </div>
              ))}
            </div>

            {/* Custom lane CTA */}
            <div className="flex items-center gap-2">
              <span className="font-inter text-white/50 text-sm">
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
        </div>
      </div>
    </section>
  );
}
