"use client";

import { ArrowRight, Check } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const perks = [
  "Competitive weekly pay",
  "Consistent home time",
  "Modern, well-maintained equipment",
  "Safety-first team culture",
  "24/7 dispatch support",
  "No-nonsense management",
];

export default function CareersPreview() {
  return (
    <section
      id="careers"
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — headline + CTAs */}
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
              Drive With Us
            </span>
            <h2 className="font-manrope font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mt-3 mb-6">
              Your Road. Your Rules.
              <br />
              <span className="text-accent">Our Support.</span>
            </h2>
            <p className="font-inter text-text-white-muted text-base lg:text-xl leading-relaxed mb-8">
              We&apos;re actively hiring experienced Class A CDL drivers. Join a
              team that values your time, respects your hustle, and keeps you
              moving.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={() => setTimeout(() => window.dispatchEvent(new Event("switchToDriverTab")), 100)}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-manrope font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                Apply to Drive <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-manrope font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                See All Benefits
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right — perks list + quote */}
          <AnimateOnScroll variant="fade-right" duration={0.7} delay={0.2}>
            <p className="font-manrope font-bold text-white text-lg mb-6">
              Why drivers choose D&V Services:
            </p>
            <div className="space-y-4 mb-8">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="font-inter text-white text-base">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* Driver quote */}
            <div className="bg-white/[0.06] border-l-4 border-accent rounded-xl p-6">
              <p className="font-inter text-white/80 text-sm italic leading-relaxed mb-3">
                &ldquo;Best decision I made was joining D&V. They treat drivers
                like people, not numbers. The pay is solid, the equipment is
                clean, and dispatch actually picks up the phone.&rdquo;
              </p>
              <p className="font-manrope font-bold text-accent text-sm">
                — CDL Driver, D&V Services
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
