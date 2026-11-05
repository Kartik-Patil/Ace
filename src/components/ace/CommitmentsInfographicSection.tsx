import React from "react";
import {
  BookOpen,
  FlaskConical,
  MessageSquare,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";

interface CommitmentItem {
  num: string;
  color: string;
  lightBg: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
}

export function CommitmentsInfographicSection() {
  const commitments: CommitmentItem[] = [
    {
      num: "1",
      color: "#e11d48", // Coral Red matching reference Image 2 Item 1
      lightBg: "rgba(225, 29, 72, 0.08)",
      icon: BookOpen,
      title: "FOUNDATIONS",
      shortDesc: "PCMB core mastery with analytical clarity.",
      fullDesc: "Replacing rote memorisation with conceptual depth across Physics, Chemistry, Math & Biology.",
      tag: "PCMB Mastery",
    },
    {
      num: "2",
      color: "#0d9488", // Emerald Teal matching reference Image 2 Item 2
      lightBg: "rgba(13, 148, 136, 0.08)",
      icon: FlaskConical,
      title: "BEYOND CLASSROOM",
      shortDesc: "Hands-on experiments & practical science.",
      fullDesc: "Demonstrations and scientific lab applications that turn abstract theory into tangible knowledge.",
      tag: "Applied Science",
    },
    {
      num: "3",
      color: "#d97706", // ACE Gold matching reference Image 2 Item 3
      lightBg: "rgba(217, 119, 6, 0.08)",
      icon: MessageSquare,
      title: "ESSENTIAL SKILLS",
      shortDesc: "Reasoning & creative problem solving.",
      fullDesc: "Communication, structured writing, and analytical thinking developed alongside the syllabus.",
      tag: "Holistic Growth",
    },
    {
      num: "4",
      color: "#1b365d", // Deep Navy ACE Brand
      lightBg: "rgba(27, 54, 93, 0.08)",
      icon: ShieldCheck,
      title: "BOARD EXCELLENCE",
      shortDesc: "Structured ICSE, CBSE & State Board prep.",
      fullDesc: "NCERT-aligned curriculum coverage delivering consistent 100% pass and distinction results.",
      tag: "Board Success",
    },
    {
      num: "5",
      color: "#0284c7", // Electric Sky Blue ACE Brand
      lightBg: "rgba(2, 132, 199, 0.08)",
      icon: HeartHandshake,
      title: "CONFIDENCE",
      shortDesc: "Timed mock drills & zero exam anxiety.",
      fullDesc: "Individual faculty mentoring and continuous feedback loops that eliminate examination fear.",
      tag: "Zero Exam Fear",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24 border-y border-border select-none">
      {/* Background Subtle World Map Watermark matching reference Image 2 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-auto">
          {/* Stylized world map contour watermark matching Image 2 */}
          <path
            d="M 150,120 Q 200,80 250,110 T 320,180 T 260,260 T 210,210 Z
               M 450,90 Q 520,60 580,100 T 680,140 T 750,220 T 670,280 T 520,240 Z
               M 240,320 Q 290,300 320,350 T 280,440 T 220,400 Z
               M 720,320 Q 780,290 820,340 T 800,420 T 730,380 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container-ace relative z-10">
        {/* ── Section Header with Hand-Drawn Gold Brush Stroke ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-border mb-3">
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
            The ACE Promise to Parents
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
          </p>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Our 5 Unwavering Commitments{" "}
            <span className="relative inline-block">
              <span className="italic text-gold">to Your Child</span>
              {/* Hand-drawn gold accent brush underline */}
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3.5 text-gold overflow-visible"
                viewBox="0 0 320 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5C65 2.5 190 2 317 7.5"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground font-medium">
            When you enrol your ward at <AceWord />, you are investing in a structured, proven ecosystem built on conceptual rigour, individual care, and lifelong confidence.
          </p>
        </Reveal>

        {/* ════════════ 5-Item Number-Circle Infographic Layout (matching Reference Image 2 with ZERO overlap) ════════════ */}
        {/* Row 1: Top 3 Items (1, 2, 3) with spacious columns exactly matching Image 2 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {commitments.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.num} variant="fade-up" delay={idx * 90}>
                <div className="group relative flex flex-col items-center justify-start p-2 transition-all duration-300 hover:-translate-y-2">
                  {/* SVG Container: Giant Number + Connected Open Circular Ring */}
                  <div className="relative w-full max-w-[320px] aspect-[340/240]">
                    <svg
                      viewBox="0 0 340 240"
                      className="w-full h-full overflow-visible filter drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                    >
                      {/* Ambient soft background disc glow inside the circle */}
                      <circle cx="210" cy="120" r="88" fill={item.lightBg} />

                      {/* Giant Solid Number on Left */}
                      <text
                        x="70"
                        y="162"
                        textAnchor="middle"
                        fill={item.color}
                        className="font-display font-black text-[130px] select-none tracking-tighter"
                        style={{ fontFamily: "var(--font-display, inherit)" }}
                      >
                        {item.num}
                      </text>

                      {/* 
                        Circular Ring looping seamlessly out from the giant number
                        Radius R=88, Center=(210, 120).
                        Loop starts at (136, 68) and curves 280° clockwise to (136, 172)
                        Leaves ample clearance so circle NEVER touches inner text!
                      */}
                      <path
                        d="M 136 68 A 88 88 0 1 1 136 172"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        className="transition-all duration-300 group-hover:stroke-width-[5.5]"
                      />
                    </svg>

                    {/* Absolute HTML Content Pod Centered inside the Ring (Guaranteed ZERO overlap with circular stroke) */}
                    <div className="absolute left-[61.8%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[140px] flex flex-col items-center justify-center text-center p-1 pointer-events-none select-none">
                      {/* Icon in white badge */}
                      <span
                        className="mb-1.5 grid size-7 place-items-center rounded-full bg-white shadow-2xs"
                        style={{ color: item.color }}
                      >
                        <Icon className="size-4" />
                      </span>

                      {/* Title */}
                      <h3
                        className="font-display font-extrabold text-xs leading-tight uppercase tracking-wider"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-1 text-[10px] leading-snug text-muted-foreground font-semibold line-clamp-2">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Comprehensive Full Description below the circle */}
                  <p className="mt-3 text-xs text-muted-foreground text-center font-medium leading-relaxed px-2 max-w-[280px]">
                    {item.fullDesc}
                  </p>

                  {/* Tag Pill below card */}
                  <span
                    className="mt-3 inline-block rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider transition-colors duration-200"
                    style={{ backgroundColor: item.lightBg, color: item.color }}
                  >
                    {item.tag}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Row 2: Bottom 2 Items (4, 5) centered with identical generous proportions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start max-w-3xl mx-auto">
          {commitments.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.num} variant="fade-up" delay={(idx + 3) * 90}>
                <div className="group relative flex flex-col items-center justify-start p-2 transition-all duration-300 hover:-translate-y-2">
                  {/* SVG Container: Giant Number + Connected Open Circular Ring */}
                  <div className="relative w-full max-w-[320px] aspect-[340/240]">
                    <svg
                      viewBox="0 0 340 240"
                      className="w-full h-full overflow-visible filter drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                    >
                      {/* Ambient soft background disc glow inside the circle */}
                      <circle cx="210" cy="120" r="88" fill={item.lightBg} />

                      {/* Giant Solid Number on Left */}
                      <text
                        x="70"
                        y="162"
                        textAnchor="middle"
                        fill={item.color}
                        className="font-display font-black text-[130px] select-none tracking-tighter"
                        style={{ fontFamily: "var(--font-display, inherit)" }}
                      >
                        {item.num}
                      </text>

                      {/* Circular Ring */}
                      <path
                        d="M 136 68 A 88 88 0 1 1 136 172"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        className="transition-all duration-300 group-hover:stroke-width-[5.5]"
                      />
                    </svg>

                    {/* Absolute HTML Content Pod Centered inside the Ring */}
                    <div className="absolute left-[61.8%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[140px] flex flex-col items-center justify-center text-center p-1 pointer-events-none select-none">
                      {/* Icon */}
                      <span
                        className="mb-1.5 grid size-7 place-items-center rounded-full bg-white shadow-2xs"
                        style={{ color: item.color }}
                      >
                        <Icon className="size-4" />
                      </span>

                      {/* Title */}
                      <h3
                        className="font-display font-extrabold text-xs leading-tight uppercase tracking-wider"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-1 text-[10px] leading-snug text-muted-foreground font-semibold line-clamp-2">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Comprehensive Full Description below the circle */}
                  <p className="mt-3 text-xs text-muted-foreground text-center font-medium leading-relaxed px-2 max-w-[280px]">
                    {item.fullDesc}
                  </p>

                  {/* Tag Pill below card */}
                  <span
                    className="mt-3 inline-block rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider transition-colors duration-200"
                    style={{ backgroundColor: item.lightBg, color: item.color }}
                  >
                    {item.tag}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Subtitle Footer Branding (matching Reference Image 2) ── */}
        <div className="mt-16 pt-8 border-t border-border/80 text-center">
          <p className="font-display font-bold text-xs uppercase tracking-[0.25em] text-muted-foreground">
            INFOGRAPHICS ELEMENTS · BUSINESS &amp; EDUCATIONAL PRESENTATION DESIGN
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            From Concepts to Confidence · Guiding over 500+ students towards academic brilliance.
          </p>
          <div className="mt-4">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Enquire Now <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
