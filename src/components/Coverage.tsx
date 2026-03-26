"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const regions = [
  "Northeast",
  "Mid-Atlantic",
  "Southeast",
  "Midwest",
  "South Central",
  "Mountain West",
  "Pacific Northwest",
  "Southwest",
  "Great Plains",
];

// Simplified US state paths (AlbersUSA-like projection, viewBox 0 0 960 600)
const states: { id: string; d: string }[] = [
  { id: "WA", d: "M158 49L176 53L188 16L208 22L214 52L220 78L200 82L190 80L182 90L162 88L148 56Z" },
  { id: "OR", d: "M140 68L158 49L148 56L162 88L182 90L172 120L168 150L112 140L100 98Z" },
  { id: "CA", d: "M100 98L112 140L168 150L160 188L152 220L130 272L108 290L92 268L80 230L74 200L78 160L90 120Z" },
  { id: "NV", d: "M112 140L168 150L160 188L152 220L120 210L108 170Z" },
  { id: "ID", d: "M182 90L200 82L220 78L226 56L244 66L240 100L232 128L224 140L200 130L172 120Z" },
  { id: "MT", d: "M220 78L214 52L208 22L308 34L316 70L290 72L260 74L240 80Z" },
  { id: "WY", d: "M240 80L260 74L290 72L316 70L320 108L318 130L262 128L240 124Z" },
  { id: "UT", d: "M168 150L172 120L200 130L224 140L222 160L218 190L170 186Z" },
  { id: "CO", d: "M262 128L318 130L322 174L320 194L264 190L260 160Z" },
  { id: "AZ", d: "M130 272L152 220L170 186L218 190L214 232L200 270L176 290L144 286Z" },
  { id: "NM", d: "M218 190L264 190L260 240L256 280L206 276L200 270L214 232Z" },
  { id: "ND", d: "M316 70L308 34L396 30L400 66L366 68Z" },
  { id: "SD", d: "M316 70L366 68L400 66L402 106L396 110L360 108L318 110Z" },
  { id: "NE", d: "M318 110L360 108L396 110L402 106L434 108L436 144L428 150L380 148L320 142Z" },
  { id: "KS", d: "M320 142L380 148L428 150L436 144L440 188L376 190L322 190Z" },
  { id: "OK", d: "M322 190L376 190L440 188L444 216L452 228L420 230L366 228L340 230L340 212L316 210Z" },
  { id: "TX", d: "M256 280L260 240L264 190L322 190L316 210L340 212L340 230L366 228L420 230L432 260L440 290L430 330L404 360L380 370L350 356L320 340L296 320L270 300Z" },
  { id: "MN", d: "M400 66L396 30L468 26L474 32L476 68L472 100L440 98Z" },
  { id: "IA", d: "M434 108L440 98L472 100L480 108L492 130L494 146L488 150L436 144Z" },
  { id: "MO", d: "M436 144L488 150L500 156L508 170L514 198L510 210L476 218L450 220L444 216L440 188Z" },
  { id: "AR", d: "M444 216L450 220L476 218L510 210L516 240L518 268L462 270L452 258L452 228Z" },
  { id: "LA", d: "M452 258L462 270L518 268L524 286L520 308L534 320L522 326L500 318L488 308L472 310L464 290Z" },
  { id: "WI", d: "M476 68L474 32L510 24L530 36L536 58L528 80L520 96L500 98L480 92Z" },
  { id: "IL", d: "M500 98L520 96L530 106L540 130L542 158L536 180L528 200L516 198L508 170L500 156L488 150L494 146L492 130L480 108Z" },
  { id: "MI", d: "M530 36L560 20L578 32L584 48L576 72L562 80L556 60L540 50L536 58Z" },
  { id: "IN", d: "M540 130L566 128L572 156L568 180L556 192L540 188L536 180L542 158Z" },
  { id: "OH", d: "M566 128L600 116L614 120L624 138L618 160L610 176L592 182L572 180L572 156Z" },
  { id: "KY", d: "M536 180L556 192L568 180L592 182L610 176L634 174L640 186L614 194L590 204L560 210L528 200Z" },
  { id: "TN", d: "M528 200L560 210L590 204L614 194L640 186L660 184L670 200L630 206L580 216L536 220L516 218Z" },
  { id: "MS", d: "M516 218L536 220L540 248L538 276L524 286L518 268L516 240Z" },
  { id: "AL", d: "M536 220L580 216L584 250L580 282L566 290L544 284L538 276L540 248Z" },
  { id: "GA", d: "M580 216L630 206L638 218L642 250L636 278L620 290L596 288L580 282L584 250Z" },
  { id: "FL", d: "M580 282L596 288L620 290L640 296L660 308L674 338L680 370L668 390L650 380L636 356L626 330L610 312L596 304L582 298Z" },
  { id: "SC", d: "M630 206L670 200L682 210L672 230L652 248L636 252L642 250L638 218Z" },
  { id: "NC", d: "M634 174L660 184L670 200L682 210L710 194L726 188L720 180L700 178L674 180L648 180Z" },
  { id: "VA", d: "M624 138L648 140L680 144L700 150L710 164L700 178L674 180L660 184L640 186L634 174L618 160Z" },
  { id: "WV", d: "M618 160L634 174L648 140L642 132L630 140L624 148Z" },
  { id: "PA", d: "M614 120L640 108L680 100L710 98L716 112L712 128L690 136L660 138L636 134Z" },
  { id: "NY", d: "M680 100L640 108L656 76L670 54L696 44L720 48L740 52L746 68L732 82L716 92L710 98Z" },
  { id: "VT", d: "M720 48L724 30L730 20L738 36L740 52Z" },
  { id: "NH", d: "M738 36L730 20L740 14L748 28L746 44L740 52Z" },
  { id: "ME", d: "M740 14L756 2L774 10L768 30L758 42L748 28Z" },
  { id: "MA", d: "M740 52L746 68L764 62L768 56L756 54Z" },
  { id: "CT", d: "M732 82L746 68L750 74L742 82Z" },
  { id: "RI", d: "M750 74L764 62L760 72L752 78Z" },
  { id: "NJ", d: "M710 98L716 112L720 130L714 140L706 134L710 120Z" },
  { id: "DE", d: "M700 136L710 132L714 148L706 152Z" },
  { id: "MD", d: "M680 144L700 150L700 136L706 152L694 158L680 152Z" },
];

// Route lines from Gurnee, IL hub to key destinations (approximate SVG coords)
const GURNEE = { x: 520, y: 88 };
const routes = [
  { x: 720, y: 100, label: "New York" },
  { x: 620, y: 260, label: "Atlanta" },
  { x: 100, y: 220, label: "Los Angeles" },
  { x: 380, y: 260, label: "Dallas" },
  { x: 180, y: 60, label: "Seattle" },
  { x: 640, y: 340, label: "Miami" },
];

export default function Coverage() {
  return (
    <section id="coverage" className="bg-bg-alt py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-12">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Service Coverage
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-3xl sm:text-4xl lg:text-6xl leading-tight mt-3">
            Coast to Coast.
            <br />
            <span className="text-accent">From Gurnee, IL.</span>
          </h2>
          <p className="font-inter text-text-muted text-base lg:text-xl mt-4 max-w-2xl mx-auto">
            Operating from our Illinois hub, D&V Services covers every major
            freight lane across all 48 contiguous states.
          </p>
        </AnimateOnScroll>

        {/* Map container */}
        <AnimateOnScroll>
          <div className="relative bg-[#0F1D3A] rounded-2xl p-4 sm:p-6 lg:p-10 mb-10 overflow-hidden">
            <svg
              viewBox="60 0 730 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* State shapes */}
              {states.map((state) => (
                <path
                  key={state.id}
                  d={state.d}
                  fill="#1B2A4A"
                  stroke="#2a3f5f"
                  strokeWidth={0.8}
                  className="transition-colors duration-200 hover:fill-accent/80 cursor-default"
                />
              ))}

              {/* Animated route lines */}
              {routes.map((dest) => (
                <line
                  key={dest.label}
                  x1={GURNEE.x}
                  y1={GURNEE.y}
                  x2={dest.x}
                  y2={dest.y}
                  stroke="#FF6B00"
                  strokeWidth={1.5}
                  strokeOpacity={0.4}
                  strokeLinecap="round"
                  className="route-line"
                />
              ))}

              {/* Destination dots */}
              {routes.map((dest) => (
                <circle
                  key={dest.label}
                  cx={dest.x}
                  cy={dest.y}
                  r={3}
                  fill="#FF6B00"
                  opacity={0.7}
                />
              ))}

              {/* Gurnee hub — pulsing ring + dot */}
              <circle
                cx={GURNEE.x}
                cy={GURNEE.y}
                r={12}
                fill="#FF6B00"
                opacity={0.15}
                className="animate-pulse"
              />
              <circle
                cx={GURNEE.x}
                cy={GURNEE.y}
                r={6}
                fill="#FF6B00"
                stroke="#fff"
                strokeWidth={2}
              />
              <text
                x={GURNEE.x}
                y={GURNEE.y - 16}
                textAnchor="middle"
                fill="#fff"
                fontSize={11}
                fontWeight="bold"
                fontFamily="Manrope, sans-serif"
              >
                Gurnee, IL
              </text>
              <text
                x={GURNEE.x}
                y={GURNEE.y - 6}
                textAnchor="middle"
                fill="#FF6B00"
                fontSize={7}
                fontWeight="bold"
                fontFamily="Inter, sans-serif"
                letterSpacing={1}
              >
                HQ
              </text>
            </svg>
          </div>
        </AnimateOnScroll>

        {/* Region tags + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="font-manrope font-bold text-text-dark text-lg mb-3">
              Regions We Serve
            </p>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <span
                  key={region}
                  className="bg-[#0F1D3A] text-white font-inter text-sm px-4 py-2 rounded-full"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-manrope font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Request a Lane <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
