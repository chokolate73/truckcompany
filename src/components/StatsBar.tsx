"use client";

import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 2016, label: "Year Established", suffix: "" },
  { value: 48, label: "States Covered", suffix: "" },
  { value: 4, label: "Service Types", suffix: "" },
  { value: 24, label: "Dispatch Support", suffix: "/7" },
];

export default function StatsBar() {
  return (
    <section
      className="relative py-8 lg:py-12 border-t border-white/10"
      style={{
        background: "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-manrope font-extrabold text-accent text-4xl lg:text-5xl leading-none">
                <AnimatedCounter target={stat.value} duration={2000} />
                {stat.suffix && (
                  <span className="text-accent">{stat.suffix}</span>
                )}
              </p>
              <p className="font-inter text-text-white-muted text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition to About (white) */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
