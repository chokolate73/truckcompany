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
    <section id="coverage" className="bg-bg-light py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Service Coverage
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-3xl sm:text-4xl lg:text-6xl leading-tight mt-3 mb-6">
            Coast to Coast.
            <br />
            <span className="text-accent">From Gurnee, IL.</span>
          </h2>
          <p className="font-inter text-text-muted text-base lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            With our headquarters in Gurnee, Illinois, we service the entire
            continental United States. Whether it&apos;s a local Midwest run or
            a coast-to-coast haul — we&apos;re there.
          </p>
        </AnimateOnScroll>

        {/* Region checklist */}
        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
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
          <div className="flex items-center justify-center gap-2">
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
      </div>
    </section>
  );
}
