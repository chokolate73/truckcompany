"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

const regions = [
  "Northeast",
  "Mid-Atlantic",
  "Southeast",
  "Midwest",
  "South Central",
  "Mountain West",
  "Pacific NW",
  "Southwest",
  "Great Plains",
];

function USMapSVG() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <svg
        viewBox="0 0 960 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* US States - simplified outlines */}
        <g fill="none" stroke="currentColor" strokeWidth="1" className="text-text-dark/15">
          {/* Washington */}
          <path d="M118,42 L130,45 L158,38 L175,42 L195,35 L200,50 L195,75 L178,80 L160,78 L140,82 L120,78 L108,65 L110,50 Z" fill="currentColor" />
          {/* Oregon */}
          <path d="M108,65 L120,78 L140,82 L160,78 L178,80 L195,75 L190,95 L185,115 L175,125 L155,130 L130,128 L108,120 L95,105 L98,85 Z" fill="currentColor" />
          {/* California */}
          <path d="M95,105 L108,120 L130,128 L135,150 L128,175 L120,200 L108,230 L100,260 L95,290 L105,305 L120,315 L130,330 L125,345 L110,350 L95,340 L82,320 L75,295 L72,265 L75,235 L80,205 L85,175 L88,145 L90,120 Z" fill="currentColor" />
          {/* Nevada */}
          <path d="M130,128 L155,130 L165,135 L160,165 L152,200 L145,235 L138,260 L120,265 L108,230 L120,200 L128,175 L135,150 Z" fill="currentColor" />
          {/* Idaho */}
          <path d="M178,80 L195,75 L200,50 L218,55 L225,70 L220,90 L215,110 L205,125 L195,135 L185,115 L190,95 Z" fill="currentColor" />
          {/* Utah */}
          <path d="M185,115 L195,135 L205,125 L210,145 L205,170 L200,200 L185,210 L165,205 L160,165 L165,135 L175,125 Z" fill="currentColor" />
          {/* Arizona */}
          <path d="M145,235 L160,165 L165,205 L185,210 L190,235 L185,260 L175,285 L162,300 L145,305 L130,330 L120,315 L105,305 L95,290 L100,260 L108,230 L120,265 L138,260 Z" fill="currentColor" />
          {/* Montana */}
          <path d="M218,55 L225,70 L260,60 L300,55 L340,52 L345,70 L340,85 L325,90 L305,88 L280,90 L255,95 L235,100 L220,90 Z" fill="currentColor" />
          {/* Wyoming */}
          <path d="M220,90 L235,100 L255,95 L280,90 L305,88 L325,90 L325,110 L320,130 L305,135 L280,132 L255,130 L235,128 L215,110 Z" fill="currentColor" />
          {/* Colorado */}
          <path d="M255,130 L280,132 L305,135 L335,138 L365,140 L365,170 L360,195 L335,192 L305,190 L275,188 L250,185 L248,160 L250,145 Z" fill="currentColor" />
          {/* New Mexico */}
          <path d="M250,185 L275,188 L305,190 L335,192 L360,195 L358,225 L352,255 L345,280 L330,285 L305,282 L280,278 L255,275 L248,250 L245,225 L245,200 Z" fill="currentColor" />
          {/* North Dakota */}
          <path d="M340,52 L380,48 L420,45 L460,48 L465,65 L460,80 L440,82 L410,80 L380,78 L350,78 L345,70 Z" fill="currentColor" />
          {/* South Dakota */}
          <path d="M345,70 L350,78 L380,78 L410,80 L440,82 L460,80 L462,100 L458,115 L435,118 L405,115 L375,112 L345,110 L335,105 L325,90 L340,85 Z" fill="currentColor" />
          {/* Nebraska */}
          <path d="M325,110 L335,105 L345,110 L375,112 L405,115 L435,118 L458,115 L462,135 L455,148 L430,148 L400,145 L370,142 L340,140 L325,130 Z" fill="currentColor" />
          {/* Kansas */}
          <path d="M340,140 L370,142 L400,145 L430,148 L455,148 L462,135 L468,155 L468,175 L465,192 L435,190 L405,188 L375,185 L360,195 L365,170 L365,140 Z" fill="currentColor" />
          {/* Oklahoma */}
          <path d="M360,195 L375,185 L405,188 L435,190 L465,192 L468,210 L465,230 L460,245 L435,248 L405,245 L375,242 L352,255 L358,225 Z" fill="currentColor" />
          {/* Texas */}
          <path d="M345,280 L352,255 L375,242 L405,245 L435,248 L460,245 L465,265 L460,290 L455,315 L445,340 L430,365 L415,385 L400,398 L385,405 L370,395 L355,380 L340,365 L330,345 L325,325 L320,305 L330,285 Z" fill="currentColor" />
          {/* Minnesota */}
          <path d="M460,48 L500,45 L530,42 L540,48 L542,65 L540,82 L530,95 L515,100 L495,98 L475,95 L462,100 L460,80 L465,65 Z" fill="currentColor" />
          {/* Iowa */}
          <path d="M462,100 L475,95 L495,98 L515,100 L530,95 L540,108 L545,125 L540,140 L525,145 L505,142 L480,140 L462,135 L458,115 Z" fill="currentColor" />
          {/* Missouri */}
          <path d="M462,135 L480,140 L505,142 L525,145 L545,148 L555,165 L555,185 L548,200 L535,205 L515,202 L495,200 L475,198 L468,175 L468,155 Z" fill="currentColor" />
          {/* Arkansas */}
          <path d="M468,210 L495,200 L515,202 L535,205 L548,200 L555,218 L552,238 L545,255 L528,258 L505,255 L480,252 L465,230 Z" fill="currentColor" />
          {/* Louisiana */}
          <path d="M465,265 L480,252 L505,255 L528,258 L545,255 L548,275 L555,295 L558,310 L548,320 L535,325 L518,318 L505,310 L492,305 L478,298 L468,288 L460,290 Z" fill="currentColor" />
          {/* Wisconsin */}
          <path d="M530,42 L555,38 L575,42 L590,52 L595,68 L592,85 L585,95 L570,100 L555,98 L540,95 L540,82 L542,65 L540,48 Z" fill="currentColor" />
          {/* Illinois */}
          <path d="M545,125 L555,98 L570,100 L585,95 L592,108 L595,125 L592,145 L588,165 L580,180 L568,190 L555,185 L555,165 L545,148 L540,140 Z" fill="currentColor" />
          {/* Michigan (lower) */}
          <path d="M595,68 L615,58 L635,55 L650,60 L658,72 L655,88 L648,100 L638,108 L625,112 L610,108 L598,100 L592,85 Z" fill="currentColor" />
          {/* Michigan (upper) */}
          <path d="M555,38 L575,32 L595,30 L610,35 L620,45 L625,55 L615,58 L595,52 L575,42 Z" fill="currentColor" />
          {/* Indiana */}
          <path d="M592,108 L610,108 L625,112 L630,128 L628,148 L622,165 L612,178 L600,185 L588,180 L588,165 L592,145 L595,125 Z" fill="currentColor" />
          {/* Ohio */}
          <path d="M625,112 L638,108 L648,100 L660,105 L672,112 L680,125 L678,145 L672,162 L660,172 L645,178 L630,175 L622,165 L628,148 L630,128 Z" fill="currentColor" />
          {/* Kentucky */}
          <path d="M568,190 L580,180 L600,185 L612,178 L630,175 L645,178 L660,172 L675,178 L688,185 L695,195 L685,205 L668,208 L645,205 L620,202 L595,200 L575,198 L555,185 Z" fill="currentColor" />
          {/* Tennessee */}
          <path d="M555,218 L575,198 L595,200 L620,202 L645,205 L668,208 L685,205 L700,210 L710,218 L705,230 L690,235 L665,232 L635,230 L605,228 L575,225 L552,238 Z" fill="currentColor" />
          {/* Mississippi */}
          <path d="M545,255 L552,238 L575,225 L580,245 L578,268 L572,290 L565,305 L555,295 L548,275 Z" fill="currentColor" />
          {/* Alabama */}
          <path d="M575,225 L605,228 L620,232 L625,252 L622,275 L615,298 L605,312 L590,315 L578,305 L572,290 L578,268 L580,245 Z" fill="currentColor" />
          {/* Georgia */}
          <path d="M620,232 L635,230 L655,235 L668,242 L678,258 L680,278 L675,298 L665,315 L650,325 L635,320 L622,310 L615,298 L622,275 L625,252 Z" fill="currentColor" />
          {/* Florida */}
          <path d="M635,320 L650,325 L665,315 L680,320 L695,330 L708,345 L718,365 L722,388 L720,410 L712,430 L698,445 L682,452 L668,448 L658,435 L652,415 L650,395 L645,375 L638,355 L630,338 Z" fill="currentColor" />
          {/* South Carolina */}
          <path d="M668,242 L690,235 L710,238 L725,248 L735,262 L728,275 L715,282 L700,278 L685,272 L678,258 Z" fill="currentColor" />
          {/* North Carolina */}
          <path d="M690,235 L705,230 L710,218 L730,215 L752,218 L775,222 L795,228 L808,235 L800,248 L785,255 L765,258 L745,255 L725,248 L710,238 Z" fill="currentColor" />
          {/* Virginia */}
          <path d="M695,195 L710,192 L730,188 L752,185 L775,190 L795,198 L808,210 L808,235 L795,228 L775,222 L752,218 L730,215 L710,218 L700,210 Z" fill="currentColor" />
          {/* West Virginia */}
          <path d="M688,185 L695,195 L710,192 L730,188 L738,178 L732,165 L722,155 L710,150 L698,155 L688,165 L680,175 L675,178 Z" fill="currentColor" />
          {/* Pennsylvania */}
          <path d="M710,150 L722,155 L732,165 L738,178 L752,185 L775,190 L795,185 L810,178 L820,168 L818,152 L808,140 L792,135 L772,132 L748,130 L728,128 L712,132 Z" fill="currentColor" />
          {/* New York */}
          <path d="M748,130 L772,132 L792,135 L808,140 L818,128 L830,118 L838,105 L842,92 L835,82 L822,78 L808,80 L792,85 L778,92 L765,100 L755,112 L750,122 Z" fill="currentColor" />
          {/* New Jersey */}
          <path d="M810,178 L820,168 L825,155 L822,145 L818,152 L810,165 Z" fill="currentColor" />
          {/* Delaware/Maryland */}
          <path d="M795,185 L808,178 L815,185 L818,195 L812,202 L802,198 Z" fill="currentColor" />
          {/* Connecticut/Rhode Island */}
          <path d="M838,105 L848,98 L855,105 L852,115 L845,118 L838,112 Z" fill="currentColor" />
          {/* Massachusetts */}
          <path d="M835,82 L842,92 L855,88 L868,85 L875,90 L870,98 L858,100 L848,98 L838,95 Z" fill="currentColor" />
          {/* Vermont/New Hampshire */}
          <path d="M822,78 L835,82 L838,68 L835,52 L828,42 L818,48 L812,60 L815,72 Z" fill="currentColor" />
          {/* Maine */}
          <path d="M835,52 L838,40 L845,28 L855,20 L868,18 L878,25 L882,38 L878,52 L870,62 L858,68 L848,72 L840,65 L838,55 Z" fill="currentColor" />
        </g>

        {/* Gurnee, IL marker - pulsing orange dot */}
        <circle cx="570" cy="105" r="12" fill="#FF6B00" opacity="0.15">
          <animate attributeName="r" values="12;22;12" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="570" cy="105" r="6" fill="#FF6B00" />
        <circle cx="570" cy="105" r="3" fill="white" />

        {/* Label */}
        <text x="570" y="132" textAnchor="middle" className="fill-text-dark font-manrope font-bold" fontSize="13">
          Gurnee, IL
        </text>
      </svg>
    </div>
  );
}

export default function Coverage() {
  return (
    <section id="coverage" className="bg-bg-light py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - text content */}
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
              Service Coverage
            </span>
            <h2 className="font-manrope font-extrabold text-text-dark text-3xl sm:text-4xl lg:text-6xl leading-tight mt-3 mb-6">
              Coast to Coast.
              <br />
              <span className="text-accent">From Gurnee, IL.</span>
            </h2>
            <p className="font-inter text-text-muted text-base lg:text-xl leading-relaxed mb-8">
              With our headquarters in Gurnee, Illinois, we service the entire
              continental United States. Whether it&apos;s a local Midwest run
              or a coast-to-coast haul - we&apos;re there.
            </p>

            {/* Region tags with checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {regions.map((region) => (
                <div key={region} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-inter text-text-dark text-sm font-medium">
                    {region}
                  </span>
                </div>
              ))}
            </div>

            {/* Custom lane CTA */}
            <div className="flex items-center gap-2">
              <span className="font-inter text-text-muted text-sm">
                Need a custom lane?
              </span>
              <a
                href="#contact"
                className="font-inter text-accent text-sm font-semibold hover:underline"
              >
                Contact dispatch &rarr;
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right - US map */}
          <AnimateOnScroll variant="fade-right" duration={0.7} delay={0.2}>
            <USMapSVG />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
