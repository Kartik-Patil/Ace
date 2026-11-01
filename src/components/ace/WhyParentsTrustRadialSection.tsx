import React, { useState } from "react";
import {
  BookOpen,
  FlaskConical,
  MessageSquare,
  Users2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";

interface ReasonItem {
  id: number;
  title: string;
  shortTitle: string[];
  sub: string;
  tag: string;
  icon: React.ElementType;
  colorType: "gold" | "navy";
  description: string;
  parentBenefit: string;
}

export function WhyParentsTrustRadialSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const reasons: ReasonItem[] = [
    {
      id: 0,
      title: "Strong Conceptual Foundations",
      shortTitle: ["STRONG", "CONCEPTUAL", "FOUNDATIONS"],
      sub: "PCMB Core Mastery",
      tag: "Deep Understanding",
      icon: BookOpen,
      colorType: "gold",
      description:
        "We focus on building a crystal-clear understanding of fundamental concepts in Physics, Chemistry, Mathematics and Biology, replacing rote memorisation with analytical clarity.",
      parentBenefit:
        "Ensures your child doesn't just pass school tests, but truly grasps concepts for competitive JEE/NEET futures.",
    },
    {
      id: 1,
      title: "Experiential & Activity Learning",
      shortTitle: ["EXPERIENTIAL", "& ACTIVITY-BASED", "LEARNING"],
      sub: "Practical Science Lab",
      tag: "Hands-on Science",
      icon: FlaskConical,
      colorType: "navy",
      description:
        "Real science experiments, visual demonstrations and hands-on activities make abstract classroom theories tangible, engaging and permanently memorable.",
      parentBenefit:
        "Ignites genuine curiosity in science and mathematics instead of subject fear or dread.",
    },
    {
      id: 2,
      title: "Skills for Holistic Growth",
      shortTitle: ["SKILLS FOR", "HOLISTIC", "DEVELOPMENT"],
      sub: "Analytical & Communication",
      tag: "Beyond Textbooks",
      icon: MessageSquare,
      colorType: "gold",
      description:
        "We intentionally nurture active communication, structured writing, analytical reasoning, and creative problem solving alongside standard academic syllabus.",
      parentBenefit:
        "Develops an articulate, confident student equipped for entrance exams, presentations, and interviews.",
    },
    {
      id: 3,
      title: "Interactive & Student-Centric",
      shortTitle: ["INTERACTIVE", "& STUDENT-CENTRIC", "TEACHING"],
      sub: "Small Batches & Care",
      tag: "Individual Attention",
      icon: Users2,
      colorType: "navy",
      description:
        "Our classrooms encourage active discussions, questioning and collaborative inquiry in small batch sizes where no student is left feeling invisible.",
      parentBenefit:
        "Your child receives the personal faculty attention and mentoring often missing in crowded schools.",
    },
    {
      id: 4,
      title: "Continuous Assessment & Guidance",
      shortTitle: ["CONTINUOUS", "ASSESSMENT &", "GUIDANCE"],
      sub: "Diagnostic Error Mapping",
      tag: "Progress Tracking",
      icon: TrendingUp,
      colorType: "gold",
      description:
        "Regular chapter-wise assessments, transparent performance reporting, diagnostic error mapping and 1-on-1 remedial doubt-solving sessions.",
      parentBenefit:
        "Identifies and fixes weak spots immediately before they snowball into major board exam hurdles.",
    },
    {
      id: 5,
      title: "Confidence & Exam Preparedness",
      shortTitle: ["CONFIDENCE &", "EXAMINATION", "PREPAREDNESS"],
      sub: "Zero Exam Fear",
      tag: "Board Ready",
      icon: ShieldCheck,
      colorType: "navy",
      description:
        "Simulated mock test drills, time-management coaching and step-marking answer writing practice help students eliminate fear and approach exams with calm composure.",
      parentBenefit:
        "Transforms examination anxiety into calm, self-assured performance on board exam day.",
    },
  ];

  // SVG Radial Fan Math
  const cx = 310;
  const cy = 370;
  const rIn = 250;
  const rOut = 445;
  const rTrack = 215;

  // Angles for 6 wedges fanning out on the right
  const wedgeConfigs = [
    { start: -71, end: -49, mid: -60 },
    { start: -46.5, end: -24.5, mid: -35.5 },
    { start: -22, end: 0, mid: -11 },
    { start: 2.5, end: 24.5, mid: 13.5 },
    { start: 27, end: 49, mid: 38 },
    { start: 51.5, end: 73.5, mid: 62.5 },
  ];

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 0) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeAnnularSector = (
    centerX: number,
    centerY: number,
    radiusIn: number,
    radiusOut: number,
    startAngle: number,
    endAngle: number
  ) => {
    const p1 = polarToCartesian(centerX, centerY, radiusIn, startAngle);
    const p2 = polarToCartesian(centerX, centerY, radiusOut, startAngle);
    const p3 = polarToCartesian(centerX, centerY, radiusOut, endAngle);
    const p4 = polarToCartesian(centerX, centerY, radiusIn, endAngle);

    return [
      `M ${p1.x} ${p1.y}`,
      `L ${p2.x} ${p2.y}`,
      `A ${radiusOut} ${radiusOut} 0 0 1 ${p3.x} ${p3.y}`,
      `L ${p4.x} ${p4.y}`,
      `A ${radiusIn} ${radiusIn} 0 0 0 ${p1.x} ${p1.y}`,
      "Z",
    ].join(" ");
  };

  // Orbital Track Arc Coordinates
  const trackStart = polarToCartesian(cx, cy, rTrack, -76);
  const trackEnd = polarToCartesian(cx, cy, rTrack, 76);
  const trackArcD = `M ${trackStart.x} ${trackStart.y} A ${rTrack} ${rTrack} 0 0 1 ${trackEnd.x} ${trackEnd.y}`;

  const currentActiveReason = reasons[activeIdx] ?? reasons[0]!;
  const ActiveIcon = currentActiveReason.icon;

  return (
    <section id="why-ace" className="relative overflow-hidden bg-secondary/35 py-20 lg:py-28 border-y border-border">
      {/* Background Subtle Lattice Grid Pattern matching reference */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1b365d_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]" />
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-ace relative z-10">
        {/* ── Section Heading with Hand-Drawn Gold Brush Stroke ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border mb-3">
            What Makes ACE Different?
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            6 Reasons Parents Trust{" "}
            <span className="relative inline-block">
              <span className="italic text-gold">
                <AceWord /> Education
              </span>
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
            Education beyond the classroom. Click or hover any radial pillar below to inspect how our learning approach benefits your child.
          </p>
        </Reveal>

        {/* ════════════ DESKTOP & TABLET: Radial Fan Infographic Layout ════════════ */}
        <div className="mt-14 hidden lg:block">
          <Reveal variant="fade-up">
            <div className="relative mx-auto max-w-[960px] select-none">
              <svg
                viewBox="0 0 940 740"
                className="w-full h-auto overflow-visible filter drop-shadow-sm"
                aria-label="6 Reasons Parents Trust ACE Education Radial Diagram"
              >
                <defs>
                  {/* Soft Drop Shadow for Wedges */}
                  <filter id="wedge-shadow" x="-10%" y="-10%" width="125%" height="125%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1b365d" floodOpacity="0.18" />
                  </filter>
                  <filter id="hub-shadow" x="-15%" y="-15%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#1b365d" floodOpacity="0.12" />
                  </filter>

                  {/* Wedge Gradients in ACE Brand Colors */}
                  <linearGradient id="goldWedgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="goldWedgeActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>

                  <linearGradient id="navyWedgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a66" />
                    <stop offset="100%" stopColor="#142845" />
                  </linearGradient>
                  <linearGradient id="navyWedgeActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2a4c80" />
                    <stop offset="100%" stopColor="#0d1b30" />
                  </linearGradient>
                </defs>

                {/* 1. Curved Connecting Orbital Track */}
                <path
                  d={trackArcD}
                  fill="none"
                  stroke="#1b365d"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-70"
                />

                {/* Orbital Track Terminal Endpoints */}
                <circle cx={trackStart.x} cy={trackStart.y} r="5" fill="#1b365d" />
                <circle cx={trackEnd.x} cy={trackEnd.y} r="5" fill="#1b365d" />

                {/* 2. Radial Wedge Segments (Fanning out on the right) */}
                {reasons.map((item, idx) => {
                  const cfg = wedgeConfigs[idx] ?? wedgeConfigs[0]!;
                  const isCurrent = activeIdx === idx;
                  const pathD = describeAnnularSector(cx, cy, rIn, rOut, cfg.start, cfg.end);

                  // Center of the wedge for text positioning
                  const midRadius = (rIn + rOut) / 2;
                  const textPos = polarToCartesian(cx, cy, midRadius, cfg.mid);

                  // Node on the orbital track
                  const nodePos = polarToCartesian(cx, cy, rTrack, cfg.mid);
                  // Connecting radial stem line from track to wedge inner radius
                  const stemTarget = polarToCartesian(cx, cy, rIn - 4, cfg.mid);

                  return (
                    <g
                      key={item.id}
                      className="cursor-pointer transition-transform duration-300"
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                    >
                      {/* Connecting stem line */}
                      <line
                        x1={nodePos.x}
                        y1={nodePos.y}
                        x2={stemTarget.x}
                        y2={stemTarget.y}
                        stroke={isCurrent ? "#f59e0b" : "#1b365d"}
                        strokeWidth={isCurrent ? "3" : "2"}
                        className="transition-colors duration-200"
                      />

                      {/* Node circle on the orbital track */}
                      <circle
                        cx={nodePos.x}
                        cy={nodePos.y}
                        r={isCurrent ? "8" : "6.5"}
                        fill={isCurrent ? "#f59e0b" : "#ffffff"}
                        stroke="#1b365d"
                        strokeWidth={isCurrent ? "3.5" : "3"}
                        className="transition-all duration-200"
                      />

                      {/* The Curved Fan Wedge */}
                      <path
                        d={pathD}
                        fill={
                          item.colorType === "gold"
                            ? isCurrent
                              ? "url(#goldWedgeActive)"
                              : "url(#goldWedgeGrad)"
                            : isCurrent
                            ? "url(#navyWedgeActive)"
                            : "url(#navyWedgeGrad)"
                        }
                        stroke="#ffffff"
                        strokeWidth={isCurrent ? "6" : "5"}
                        strokeLinejoin="round"
                        filter="url(#wedge-shadow)"
                        className={`transition-all duration-300 ${
                          isCurrent
                            ? "brightness-105 scale-[1.015] origin-center"
                            : "hover:brightness-105"
                        }`}
                      />

                      {/* Text Inside Curved Wedge (Rotated along the radial mid-angle) */}
                      <g
                        transform={`rotate(${cfg.mid}, ${textPos.x}, ${textPos.y})`}
                        className="pointer-events-none select-none"
                      >
                        {item.shortTitle.map((line, lineIdx) => {
                          const totalLines = item.shortTitle.length;
                          const yOffset = (lineIdx - (totalLines - 1) / 2) * 15;
                          return (
                            <text
                              key={lineIdx}
                              x={textPos.x}
                              y={textPos.y + yOffset}
                              textAnchor="middle"
                              dominantBaseline="central"
                              fill="#ffffff"
                              className="font-display font-extrabold text-[12px] tracking-wider"
                              style={{ letterSpacing: "0.08em" }}
                            >
                              {line}
                            </text>
                          );
                        })}
                      </g>
                    </g>
                  );
                })}

                {/* 3. Central White Circular Hub */}
                <g className="cursor-default pointer-events-none">
                  {/* Central Hub Disc with White Background & Shadow */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="165"
                    fill="#ffffff"
                    stroke="#f8fafc"
                    strokeWidth="4"
                    filter="url(#hub-shadow)"
                  />
                  {/* Inner subtle concentric ring */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="152"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Hub Text Branding */}
                  <text
                    x={cx}
                    y={cy - 48}
                    textAnchor="middle"
                    fill="#64748b"
                    className="font-bold text-[11px] uppercase tracking-[0.25em]"
                  >
                    Why Choose ACE
                  </text>

                  <text
                    x={cx}
                    y={cy - 22}
                    textAnchor="middle"
                    fill="#1b365d"
                    className="font-display font-extrabold text-[24px] tracking-tight"
                  >
                    HOW WE NURTURE
                  </text>

                  <text
                    x={cx}
                    y={cy + 8}
                    textAnchor="middle"
                    fill="#d97706"
                    className="font-display font-black text-[25px] tracking-tight"
                  >
                    EXCELLENCE
                  </text>

                  <text
                    x={cx}
                    y={cy + 34}
                    textAnchor="middle"
                    fill="#1b365d"
                    className="font-display font-semibold text-[13px] tracking-wide"
                  >
                    Classes 8, 9 &amp; 10 · All Boards
                  </text>

                  {/* Active Indicator Cue */}
                  <rect
                    x={cx - 75}
                    y={cy + 52}
                    width="150"
                    height="24"
                    rx="12"
                    fill="#fef3c7"
                    stroke="#fde68a"
                  />
                  <text
                    x={cx}
                    y={cy + 64}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#92400e"
                    className="font-bold text-[9.5px] tracking-wider uppercase"
                  >
                    ★ Reason 0{activeIdx + 1} Selected
                  </text>
                </g>
              </svg>
            </div>
          </Reveal>

          {/* ── Active Pillar Detail Spotlight Bar ── */}
          <Reveal variant="fade-up" delay={150} className="mt-8">
            <div className="mx-auto max-w-4xl rounded-3xl border-2 border-gold/40 bg-card p-7 shadow-lift transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <span
                    className={`grid size-14 shrink-0 place-items-center rounded-2xl border-2 shadow-sm ${
                      currentActiveReason.colorType === "gold"
                        ? "bg-gold text-gold-foreground border-gold/60"
                        : "bg-primary text-gold border-gold/40"
                    }`}
                  >
                    <ActiveIcon className="size-7" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-bold text-gold-foreground">
                        Reason 0{currentActiveReason.id + 1}
                      </span>
                      <span className="text-xs font-bold text-sky-border uppercase tracking-wider">
                        {currentActiveReason.tag}
                      </span>
                    </div>
                    <h4 className="mt-1 font-display text-xl sm:text-2xl font-bold text-primary">
                      {currentActiveReason.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
                      {currentActiveReason.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-sky-border/40 bg-sky/50 p-4 max-w-xs">
                  <p className="text-[11px] font-bold text-primary flex items-start gap-1.5">
                    <span className="text-gold font-black">★</span>
                    <span>
                      <strong className="text-primary font-bold">Why it matters to parents:</strong>{" "}
                      <span className="text-muted-foreground font-medium">{currentActiveReason.parentBenefit}</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ════════════ MOBILE & COMPACT: Responsive Curved Arc Stack ════════════ */}
        <div className="mt-12 space-y-5 lg:hidden">
          {/* Mobile Central Hub Card */}
          <div className="rounded-3xl border-2 border-gold/40 bg-card p-6 text-center shadow-lift">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-border">
              Why Parents Trust ACE
            </p>
            <h3 className="mt-1 font-display text-2xl font-extrabold text-primary">
              6 Pillars of Academic Trust
            </h3>
            <p className="mt-2 text-xs text-muted-foreground font-medium">
              Education beyond the classroom — built on conceptual clarity, individual care, and proven board success.
            </p>
          </div>

          {/* 6 Reasons Alternating Fan Cards */}
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            const isGold = item.colorType === "gold";

            return (
              <Reveal key={item.id} variant="fade-up" delay={idx * 60}>
                <div
                  className={`rounded-2xl border-4 border-white p-5 text-white shadow-lift transition-transform active:scale-[0.98] ${
                    isGold
                      ? "bg-gradient-to-r from-amber-500 to-amber-600"
                      : "bg-gradient-to-r from-navy to-[#152a48]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-display text-lg font-extrabold tracking-wide">
                      <Icon className="size-5 shrink-0" />
                      0{idx + 1}. {item.title}
                    </span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <p className="mt-2.5 text-xs text-white/90 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <div className="mt-3.5 rounded-xl bg-black/20 p-2.5 text-[11px] text-white/95 border border-white/10">
                    <strong className="text-amber-200">Parent Benefit:</strong> {item.parentBenefit}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
