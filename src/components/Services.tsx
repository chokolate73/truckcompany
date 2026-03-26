"use client";

import { Package, Boxes, LayoutGrid, Thermometer } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const services = [
  {
    icon: Package,
    title: "Full Truckload (FTL)",
    desc: "Dedicated capacity for large shipments. Your freight gets its own truck — direct routes, faster transit, lower handling risk.",
    features: [
      "Dedicated trailer",
      "Direct routes",
      "Faster delivery",
      "Ideal for 15,000+ lbs",
    ],
  },
  {
    icon: Boxes,
    title: "Less Than Truckload (LTL)",
    desc: "Cost-effective shipping for smaller loads. Share trailer space with other shippers and only pay for what you use.",
    features: [
      "Pay for space used",
      "Flexible scheduling",
      "Ideal for under 15,000 lbs",
      "Regular lane coverage",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Flatbed",
    desc: "Specialized hauling for oversized, heavy, or irregularly shaped freight. Steel, machinery, lumber, construction materials.",
    features: [
      "Open-deck loading",
      "Oversized cargo",
      "Heavy machinery",
      "Construction materials",
    ],
  },
  {
    icon: Thermometer,
    title: "Refrigerated",
    desc: "Temperature-controlled transport for perishables, food products, pharmaceuticals, and other temperature-sensitive freight.",
    features: [
      "Temp monitoring",
      "Food-grade compliance",
      "Pharma-ready",
      "Fresh & frozen",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            What We Haul
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl mt-3">
            Our Shipping Services
          </h2>
          <p className="font-inter text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Four service types. One reliable partner. Whatever your freight
            needs, we have the equipment and expertise.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {services.map((svc) => (
            <StaggerItem key={svc.title} variant="scale-in">
              <div className="group bg-white rounded-2xl p-7 border border-border-light shadow-md hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-manrope font-bold text-text-dark text-xl mb-3">
                  {svc.title}
                </h3>
                <p className="font-inter text-text-muted text-sm leading-relaxed mb-5 flex-1">
                  {svc.desc}
                </p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-inter text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
