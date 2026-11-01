import React from "react";
import {
  Compass,
  Lightbulb,
  Target,
  CalendarCheck2,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";

interface PhilosophyStage {
  num: string;
  numberInt: number;
  title: string;
  subTitle: string;
  detail: string;
  icon: React.ElementType;
  position: "above" | "below";
  // SVG coordinates on 1200x520 canvas
  nodeX: number;
  nodeY: number;
  textX: number;
  textY: number;
  // Node style
  nodeColor: "blue" | "gold";
}

export function EducationalPhilosophyWaveSection() {
  const stages: PhilosophyStage[] = [
    {
      num: "01",
      numberInt: 1,
      title: "Question with Curiosity",
      subTitle: "Inquiry First",
      detail:
        "Develop the lifelong habit of asking questions, exploring ideas, and seeking deeper conceptual understanding.",
      icon: Compass,
      position: "above",
      nodeX: 160,
      nodeY: 360,
      textX: 160,
      textY: 100,
      nodeColor: "blue",
    },
    {
      num: "02",
      numberInt: 2,
      title: "Learn with Clarity",
      subTitle: "No Rote Learning",
      detail:
        "Build strong, logical conceptual foundations in science & math rather than relying on shallow rote memorisation.",
      icon: Lightbulb,
      position: "below",
      nodeX: 390,
      nodeY: 150,
      textX: 390,
      textY: 280,
      nodeColor: "gold",
    },
    {
      num: "03",
      numberInt: 3,
      title: "Think Independently",
      subTitle: "Critical Thinking",
      detail:
        "Develop the mental agility to analyse problems, reason logically, and approach complex academic challenges with confidence.",
      icon: Target,
      position: "above",
      nodeX: 620,
      nodeY: 360,
      textX: 620,
      textY: 100,
      nodeColor: "blue",
    },
    {
      num: "04",
      numberInt: 4,
      title: "Grow with Discipline",
      subTitle: "Consistent Habits",
      detail:
        "Cultivate daily consistency, academic responsibility, time management, and a positive, resilient approach to learning.",
      icon: CalendarCheck2,
      position: "below",
      nodeX: 850,
      nodeY: 150,
      textX: 850,
      textY: 280,
      nodeColor: "blue",
    },
    {
      num: "05",
      numberInt: 5,
      title: "Excel with Confidence",
      subTitle: "Proven Success",
      detail:
        "Apply knowledge effectively under exam conditions, eliminate fear, and emerge as confident, high-ranking achievers.",
      icon: Trophy,
      position: "above",
      nodeX: 1060,
      nodeY: 260,
      textX: 1060,
      textY: 70,
      nodeColor: "gold",
    },
  ];

  // Helper to build regular hexagon points string
  const getHexagonPoints = (cx: number, cy: number, r: number = 26) => {
    const points: string[] = [];
    for (let i = 0; i < 6; i++) {
      const angleDeg = 60 * i - 30; // Pointy-topped hexagon matching reference
      const angleRad = (Math.PI / 180) * angleDeg;
      const x = cx + r * Math.cos(angleRad);
      const y = cy + r * Math.sin(angleRad);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points.join(" ");
  };

  return (
    <section className="relative overflow-hidden bg-background py-24 border-y border-border select-none">
      {/* Ghost Background Number Watermark in Top Right (matching '362' in reference image) */}
      <div className="pointer-events-none absolute top-8 right-8 lg:right-16 font-display font-extrabold text-7xl sm:text-8xl lg:text-9xl text-slate-200/40 select-none">
        05
      </div>

      <div className="container-ace relative z-10">
        {/* ── Section Header (Minimalist & Modern, matching reference) ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-border mb-3">
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
            Our Educational Philosophy
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Learning Begins with Curiosity.
          </h2>

          <p className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-gold">
            Excellence Follows with Confidence.
          </p>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground font-medium max-w-2xl mx-auto">
            Every great achievement begins with the courage to question, the discipline to learn, and the determination to excel. A continuous journey of intellectual transformation at <AceWord />.
          </p>
        </Reveal>

        {/* ════════════ DESKTOP & TABLET: Flowing Undulating Wave Layout ════════════ */}
        <div className="mt-12 hidden lg:block">
          <Reveal variant="fade-up">
            <div className="relative mx-auto w-full max-w-[1200px]">
              <svg
                viewBox="0 0 1200 520"
                className="w-full h-auto overflow-visible"
                aria-label="Educational Philosophy Journey Wave Diagram"
              >
                <defs>
                  {/* Glowing Blue Wave Gradient */}
                  <linearGradient id="waveLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="35%" stopColor="#0ea5e9" />
                    <stop offset="70%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>

                  {/* Soft Glowing Drop Shadow for Hexagonal Pods */}
                  <filter id="hexPodGlowBlue" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0284c7" floodOpacity="0.25" />
                  </filter>
                  <filter id="hexPodGlowGold" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#d97706" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* 1. Continuous Undulating Sine Wave Line */}
                <path
                  d="M 30,320 
                     C 80,335 120,360 160,360 
                     C 230,360 310,150 390,150 
                     C 470,150 540,360 620,360 
                     C 700,360 770,150 850,150 
                     C 930,150 1000,260 1060,260 
                     C 1100,260 1140,270 1170,275"
                  fill="none"
                  stroke="url(#waveLineGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />

                {/* 2. Floating Hexagonal Pods with Glowing Drop Shadows */}
                {stages.map((stg) => {
                  const Icon = stg.icon;
                  const isGold = stg.nodeColor === "gold";

                  return (
                    <g key={stg.num} className="transition-transform duration-300 hover:scale-110 origin-center cursor-default">
                      {/* Hexagon Body */}
                      <polygon
                        points={getHexagonPoints(stg.nodeX, stg.nodeY, 27)}
                        fill="#ffffff"
                        stroke={isGold ? "#f59e0b" : "#0284c7"}
                        strokeWidth="2.5"
                        filter={isGold ? "url(#hexPodGlowGold)" : "url(#hexPodGlowBlue)"}
                      />

                      {/* Icon inside Hexagon */}
                      <foreignObject
                        x={stg.nodeX - 14}
                        y={stg.nodeY - 14}
                        width="28"
                        height="28"
                        className="pointer-events-none"
                      >
                        <div className="grid size-full place-items-center">
                          <Icon className={`size-4.5 ${isGold ? "text-gold" : "text-sky-600"}`} />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* 3. Text Blocks Alternating Above and Below the Wave */}
                {stages.map((stg) => {
                  return (
                    <foreignObject
                      key={`text-${stg.num}`}
                      x={stg.textX - 110}
                      y={stg.textY}
                      width="220"
                      height="190"
                      className="overflow-visible"
                    >
                      <div className="relative group text-left">
                        {/* Giant Ghost/Watermark Step Number (matching '1', '2', '3' in reference) */}
                        <span className="pointer-events-none absolute -top-4 right-0 font-display font-black text-6xl text-slate-200/70 select-none transition-transform duration-300 group-hover:scale-105 group-hover:text-gold/25">
                          {stg.numberInt}
                        </span>

                        <div className="relative z-10 pr-6">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-sky-border">
                            {stg.subTitle}
                          </p>

                          <h3 className="mt-1 font-display text-base font-extrabold text-primary leading-snug">
                            {stg.title}
                          </h3>

                          <p className="mt-1.5 text-xs text-muted-foreground font-medium leading-relaxed">
                            {stg.detail}
                          </p>
                        </div>
                      </div>
                    </foreignObject>
                  );
                })}
              </svg>
            </div>
          </Reveal>
        </div>

        {/* ════════════ MOBILE & COMPACT: Vertical Wavy Journey Flow ════════════ */}
        <div className="mt-12 relative lg:hidden">
          {/* Vertical Wavy Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-500 via-sky-400 to-gold rounded-full" />

          <div className="space-y-8 pl-14">
            {stages.map((stg, i) => {
              const Icon = stg.icon;
              const isGold = stg.nodeColor === "gold";

              return (
                <Reveal key={stg.num} variant="fade-up" delay={i * 80}>
                  <div className="relative group rounded-2xl border-2 border-border bg-card p-5 shadow-sm transition hover:border-gold hover:shadow-lift">
                    {/* Glowing Hexagonal Node Pin on Timeline */}
                    <div className="absolute -left-[54px] top-5 size-11 grid place-items-center rounded-xl bg-white border-2 border-sky-500 shadow-md">
                      <Icon className={`size-5 ${isGold ? "text-gold" : "text-sky-600"}`} />
                    </div>

                    {/* Giant Watermark Step Number */}
                    <span className="pointer-events-none absolute top-3 right-4 font-display font-black text-5xl text-slate-200/70 select-none">
                      {stg.numberInt}
                    </span>

                    <div className="relative z-10 pr-8">
                      <span className="inline-block rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold-foreground uppercase tracking-wide">
                        {stg.subTitle}
                      </span>

                      <h3 className="mt-2 font-display text-lg font-bold text-primary">
                        {stg.title}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground font-medium leading-relaxed">
                        {stg.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── Bottom Reference Footer Bar (matching reference layout) ── */}
        <div className="mt-16 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">ACE EDUCATION HUBBALLI</span>
            <span>·</span>
            <span>From Concepts to Confidence</span>
          </div>
          <a
            href="#enquire"
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-gold transition"
          >
            ↗ Enquire for Academic Year 2027–28
          </a>
        </div>
      </div>
    </section>
  );
}

