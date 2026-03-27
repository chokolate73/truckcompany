"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const fleetItems = [
  {
    name: "Dry Van Trailers",
    spec: "53' standard enclosed trailers",
    description:
      "The workhorse of freight transport. Fully enclosed protection for general merchandise, retail goods, and packaged freight.",

    image: "/image/Dry Van Trailers.jpg",
  },
  {
    name: "Flatbed Trailers",
    spec: "48' – 53' open deck",
    description:
      "Open-deck versatility for oversized, heavy, and irregularly shaped cargo. Steel, lumber, machinery, and construction materials.",

    image: "/image/Flatbed Trailers.jpg",
  },
  {
    name: "Refrigerated Trailers",
    spec: "Temperature-controlled units",
    description:
      "Precision climate control for perishables, pharmaceuticals, and temperature-sensitive freight. Continuous monitoring from pickup to delivery.",

    image: "/image/Refrigerated Trailers.jpg",
  },
];

export default function FleetPreview() {
  return (
    <section id="fleet" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 lg:mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Our Equipment
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-3xl sm:text-4xl lg:text-5xl mt-3">
            Built for Every Load
          </h2>
          <p className="font-inter text-text-muted text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            Our fleet is maintained to the highest standards - modern equipment
            you can count on for every shipment.
          </p>
        </AnimateOnScroll>

        {/* Featured card - Heavy Haul Cargo */}
        <AnimateOnScroll className="mb-6" variant="fade-up">
          <div className="relative bg-[#0F1D3A] rounded-2xl overflow-hidden group">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <span className="inline-block font-inter text-xs font-semibold text-accent tracking-widest uppercase mb-3">
                  Featured Equipment
                </span>
                <h3 className="font-manrope font-extrabold text-white text-2xl lg:text-4xl mb-3">
                  Heavy Haul Cargo
                </h3>
                <p className="font-inter text-accent text-sm font-semibold mb-4">
                  Lowboy &amp; specialized trailers
                </p>
                <p className="font-inter text-white/70 text-sm lg:text-base leading-relaxed mb-6">
                  Specialized transport for oversized, overweight, and super-load freight. Permits, pilot cars, route surveys, and expert planning for loads that exceed standard legal dimensions and weight limits.
                </p>
                <a
                  href="#contact"
                  onClick={() => window.dispatchEvent(new Event("switchToDriverTab"))}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-manrope font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  Apply to Drive <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="h-64 lg:h-full lg:min-h-[320px] overflow-hidden">
                <img
                  src="/images/Heavy Haul Cargo.jpg"
                  alt="Heavy Haul Cargo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {fleetItems.map((item) => {
            return (
              <StaggerItem key={item.name} variant="fade-up">
                <div className="bg-white rounded-2xl border border-border-light shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-manrope font-bold text-text-dark text-xl mb-1">
                      {item.name}
                    </h3>
                    <p className="font-inter text-accent text-sm font-semibold mb-3">
                      {item.spec}
                    </p>
                    <p className="font-inter text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="text-center mt-10">
          <a
            href="/fleet"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-manrope font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            See Our Full Fleet <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
