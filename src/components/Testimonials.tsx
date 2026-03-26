"use client";

import { Star, Quote } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "D&V Services has been our go-to carrier for Midwest lanes for over two years. On-time delivery, great communication, and their dispatch team is always available when we need them.",
    name: "Michael R.",
    title: "Logistics Manager",
    company: "Midwest Distribution Co.",
    rating: 5,
  },
  {
    quote:
      "Switching to D&V for our refrigerated loads was one of the best decisions we made. Temperature compliance is flawless, and their drivers treat our product like it's their own.",
    name: "Sarah T.",
    title: "Supply Chain Director",
    company: "FreshRoute Foods",
    rating: 5,
  },
  {
    quote:
      "Reliable, professional, and honest — that's hard to find in this industry. D&V handles our flatbed shipments with zero damage claims in 18 months of partnership.",
    name: "James K.",
    title: "Operations VP",
    company: "Steel & Build Materials",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            What Our Partners Say
          </span>
          <h2 className="font-manrope font-extrabold text-white text-4xl lg:text-5xl mt-3">
            Trusted by Shippers Nationwide
          </h2>
          <p className="font-inter text-text-white-muted text-lg mt-4 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses that
            rely on D&V Services every day.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name} variant="fade-up">
              <div className="rounded-2xl p-7 border border-border-dark bg-white/[0.06] h-full flex flex-col">
                <Quote className="w-8 h-8 text-accent mb-4 shrink-0" />
                <p className="font-inter text-text-white-muted text-base leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-manrope font-bold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="font-inter text-text-white-muted text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
