"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

const trustPoints = [
  "Background-checked drivers",
  "Drug & alcohol tested",
  "GPS-tracked fleet",
  "Regular fleet inspections",
];

export default function Safety() {
  return (
    <section
      id="safety"
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Safety & Compliance
          </span>

          <h2 className="font-manrope font-extrabold text-white text-3xl sm:text-4xl lg:text-6xl leading-tight mt-4 mb-6">
            Safety Isn&apos;t a Department.
            <br />
            <span className="text-accent">It&apos;s How We Operate.</span>
          </h2>

          <p className="font-inter text-text-white-muted text-base lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Every driver vetted. Every truck inspected. Every load tracked in
            real time. No exceptions, no shortcuts.
          </p>
        </AnimateOnScroll>

        {/* DOT / MC / FMCSA badges */}
        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-10">
            <div className="bg-white/[0.08] border border-white/15 rounded-xl px-8 py-5 text-center">
              <p className="font-inter text-text-white-muted text-xs uppercase tracking-widest mb-1">
                USDOT Number
              </p>
              <p className="font-manrope font-extrabold text-white text-2xl lg:text-3xl">
                XXXXXXX
              </p>
            </div>

            <div className="bg-white/[0.08] border border-white/15 rounded-xl px-8 py-5 text-center">
              <p className="font-inter text-text-white-muted text-xs uppercase tracking-widest mb-1">
                MC Number
              </p>
              <p className="font-manrope font-extrabold text-white text-2xl lg:text-3xl">
                XXXXXXX
              </p>
            </div>

            <div className="bg-white/[0.08] border border-white/15 rounded-xl px-8 py-5 text-center">
              <p className="font-inter text-text-white-muted text-xs uppercase tracking-widest mb-1">
                FMCSA Status
              </p>
              <p className="font-manrope font-extrabold text-accent text-2xl lg:text-3xl">
                Active
              </p>
            </div>
          </div>

          {/* Verify link */}
          <a
            href="https://safer.fmcsa.dot.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-accent text-sm font-semibold hover:underline mb-12"
          >
            Verify our safety record on FMCSA SAFER &rarr;
          </a>
        </AnimateOnScroll>

        {/* Trust points */}
        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-inter text-text-white-muted text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
