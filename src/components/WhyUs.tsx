"use client";

import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const items = [
  {
    num: "01",
    title: "Zero-Excuse Reliability",
    text: "We don\u2019t make excuses \u2014 we make deliveries. Our on-time commitment means your freight arrives when promised, every single load.",
  },
  {
    num: "02",
    title: "Real Humans, Real Answers",
    text: "No automated phone trees. When you call D&V, you get a real dispatcher who knows your load and can give you an instant update.",
  },
  {
    num: "03",
    title: "Flexible Lane Coverage",
    text: "From dedicated Midwest corridors to coast-to-coast runs, we build solutions around your shipping needs \u2014 not the other way around.",
  },
  {
    num: "04",
    title: "Partnership, Not Transactions",
    text: "We treat every shipper and broker like a long-term partner. That\u2019s why our clients stay with us year after year.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Why D&V Services
          </span>
          <h2 className="font-manrope font-extrabold text-white text-4xl lg:text-5xl mt-3">
            The D&V Difference
          </h2>
          <p className="font-inter text-text-white-muted text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re not just another carrier. We&apos;re a partner you can
            count on.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0 divide-y divide-white/[0.06] sm:divide-y-0"
          staggerDelay={0.12}
        >
          {items.map((item, i) => (
            <StaggerItem key={item.num} variant="fade-up">
              <div className={`py-10 ${i < 2 ? "sm:border-b sm:border-white/[0.06]" : ""}`}>
                <span className="font-manrope font-extrabold text-5xl lg:text-6xl text-white/[0.08] leading-none select-none">
                  {item.num}
                </span>
                <h3 className="font-manrope font-bold text-white text-xl lg:text-2xl -mt-4 lg:-mt-5 mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-text-white-muted text-sm lg:text-base leading-relaxed max-w-md">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
