"use client";

import { ShieldCheck, PhoneCall, Route, HeartHandshake } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const cards = [
  {
    icon: ShieldCheck,
    title: "Zero-Excuse Reliability",
    text: "We don\u2019t make excuses \u2014 we make deliveries. Our on-time commitment means your freight arrives when promised, every single load.",
  },
  {
    icon: PhoneCall,
    title: "Real Humans, Real Answers",
    text: "No automated phone trees. When you call D&V, you get a real dispatcher who knows your load and can give you an instant update.",
  },
  {
    icon: Route,
    title: "Flexible Lane Coverage",
    text: "From dedicated Midwest corridors to coast-to-coast runs, we build solutions around your shipping needs \u2014 not the other way around.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership, Not Transactions",
    text: "We treat every shipper and broker like a long-term partner. That\u2019s why our clients stay with us year after year.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-bg-alt py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Why D&V Services
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl mt-3">
            The D&V Difference
          </h2>
          <p className="font-inter text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re not just another carrier. We&apos;re a partner you can
            count on.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {cards.map((card) => (
            <StaggerItem key={card.title} variant="fade-up">
              <div className="group bg-white rounded-2xl p-8 border border-border-light shadow-md hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <card.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-manrope font-bold text-text-dark text-xl lg:text-2xl mb-2">
                  {card.title}
                </h3>
                <p className="font-inter text-text-muted text-sm lg:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
