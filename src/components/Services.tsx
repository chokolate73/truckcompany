"use client";

import { useState } from "react";
import { Package, Boxes, LayoutGrid, Thermometer, Weight, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const services = [
  {
    id: "ftl",
    name: "Full Truckload",
    shortName: "FTL",
    icon: Package,
    description:
      "Dedicated capacity for your largest shipments. Your freight gets its own truck - direct routes, faster transit times, and minimal handling risk. Ideal for high-volume shippers who need reliable, dedicated transport.",
    features: [
      "Dedicated trailer - your freight only",
      "Direct point-to-point routes",
      "Faster transit times",
      "Ideal for loads 15,000+ lbs",
      "Real-time GPS tracking",
      "Experienced long-haul drivers",
    ],
  },
  {
    id: "ltl",
    name: "Less Than Truckload",
    shortName: "LTL",
    icon: Boxes,
    description:
      "Cost-effective shipping for smaller loads. Share trailer space with other shippers and only pay for the space you use. Perfect for businesses that ship regularly but don\u2019t need a full truck.",
    features: [
      "Pay only for space used",
      "Flexible pickup scheduling",
      "Ideal for loads under 15,000 lbs",
      "Regular lane coverage nationwide",
      "Consolidated shipping savings",
      "Reliable delivery windows",
    ],
  },
  {
    id: "flatbed",
    name: "Flatbed",
    shortName: "Flatbed",
    icon: LayoutGrid,
    description:
      "Specialized hauling for oversized, heavy, or irregularly shaped freight. Our flatbed fleet handles steel, machinery, lumber, construction materials, and anything that won\u2019t fit in a standard trailer.",
    features: [
      "Open-deck loading flexibility",
      "Oversized and heavy cargo",
      "Heavy machinery transport",
      "Construction materials",
      "Specialized tie-down equipment",
      "Experienced flatbed operators",
    ],
  },
  {
    id: "heavy-haul",
    name: "Heavy Haul Cargo",
    shortName: "Heavy Haul",
    icon: Weight,
    description:
      "Specialized transport for oversized and overweight freight. From heavy machinery to industrial equipment, we have the permits, pilot cars, and expertise to move your most challenging loads safely and on time.",
    features: [
      "Oversized & overweight loads",
      "Permit and route planning",
      "Pilot car coordination",
      "Heavy machinery transport",
      "Industrial equipment hauling",
      "Experienced heavy-haul operators",
    ],
  },
  {
    id: "reefer",
    name: "Refrigerated",
    shortName: "Reefer",
    icon: Thermometer,
    description:
      "Temperature-controlled transport for perishables, food products, pharmaceuticals, and other temperature-sensitive freight. Continuous monitoring ensures your product arrives in perfect condition.",
    features: [
      "Precise temperature monitoring",
      "Food-grade compliance",
      "Pharmaceutical-ready units",
      "Fresh and frozen capabilities",
      "Temperature logs provided",
      "HACCP-compliant procedures",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = services[activeIndex];
  const Icon = service.icon;

  return (
    <section id="services" className="bg-bg-alt py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 lg:mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            What We Haul
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl mt-3">
            Our Shipping Services
          </h2>
          <p className="font-inter text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Five service types. One reliable partner. Whatever your freight
            needs, we have the equipment and expertise.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Sidebar — horizontal on mobile, vertical on desktop */}
          <div className="flex lg:grid lg:grid-cols-1 gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
            {services.map((s, i) => {
              const SIcon = s.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIndex(i)}
                  className={`relative flex items-center gap-3 px-4 py-3 lg:px-5 lg:py-4 rounded-xl text-left transition-all duration-300 shrink-0 lg:shrink ${
                    isActive
                      ? "bg-[#0F1D3A] text-white shadow-lg border-l-4 border-l-accent lg:border-l-4"
                      : "bg-white text-text-dark border border-border-light shadow-sm hover:border-accent/30 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-accent" : "bg-accent/10"
                    }`}
                  >
                    <SIcon
                      className={`w-5 h-5 ${isActive ? "text-white" : "text-accent"}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`font-manrope font-bold text-sm lg:text-base truncate ${
                        isActive ? "text-white" : "text-text-dark"
                      }`}
                    >
                      <span className="lg:hidden">{s.shortName}</span>
                      <span className="hidden lg:inline">{s.name}</span>
                    </p>
                    <p
                      className={`text-xs hidden lg:block ${isActive ? "text-white/60" : "text-text-muted"}`}
                    >
                      {s.shortName}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right showcase panel */}
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden animate-fade-in flex flex-col min-h-[420px]"
          >
            <div className="px-6 lg:px-8 pt-8 pb-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-manrope font-bold text-text-dark text-2xl lg:text-3xl">
                  {service.name} ({service.shortName})
                </h3>
              </div>

              <p className="font-inter text-text-muted text-base lg:text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="font-inter text-text-dark text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.dispatchEvent(new Event("openQuoteModal"))}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-manrope font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 self-start"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
