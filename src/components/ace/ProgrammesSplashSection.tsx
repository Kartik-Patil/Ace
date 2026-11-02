import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  RotateCw,
  Layers,
  Rocket,
  BookOpenCheck,
  ClipboardCheck,
  Calculator,
  Languages,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";

/**
 * Realistic 3D Gold Pushpin
 * Simulates a physical pin sticking the card to a notice board.
 */
function PushPin({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Cast shadow onto the paper */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full bg-slate-900/30 blur-[2px]" />

      {/* 3D Pushpin Graphic */}
      <svg
        width="34"
        height="38"
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 filter drop-shadow-md"
        aria-hidden="true"
      >
        {/* Steel pin needle piercing paper */}
        <path d="M16 26L16 35" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        {/* Metal rim base */}
        <ellipse cx="16" cy="25" rx="4.5" ry="2" fill="#94a3b8" />
        {/* Pin stem */}
        <path d="M12 17C12 21 13.5 24 16 24C18.5 24 20 21 20 17H12Z" fill="#b45309" />
        {/* Main 3D spherical pin head */}
        <circle cx="16" cy="13" r="10" fill="url(#goldPinGrad)" />
        {/* Specular highlights */}
        <ellipse cx="13.5" cy="9.5" rx="4" ry="2.5" fill="#fef08a" opacity="0.85" />
        <circle cx="14" cy="9" r="1.5" fill="#ffffff" />

        <defs>
          <radialGradient id="goldPinGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="45%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

interface TableRow {
  label: string;
  value: string;
}

interface ProgrammeItem {
  id: string;
  num: string;
  name: string;
  tagline: string;
  image: string;
  photoCaption: string;
  icon: React.ElementType;
  tiltClass: string;
  tableData: TableRow[];
}

export function ProgrammesSplashSection() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const programmes: ProgrammeItem[] = [
    {
      id: "bridge",
      num: "01",
      name: "Bridge Course",
      tagline: "Concept Gap Bridging",
      image: "/images/programs/bridge-course.jpg",
      photoCaption: "Geometry compass & concept bridging desk",
      icon: Layers,
      tiltClass: "-rotate-1",
      tableData: [
        { label: "Eligible Classes", value: "Classes 8, 9 & 10" },
        { label: "Core Objective", value: "Identify & bridge concept curriculum gaps" },
        { label: "Subjects Covered", value: "Physics, Chemistry, Mathematics" },
        { label: "Teaching Method", value: "Diagnostic analysis + concept reinforcement" },
        { label: "Key Outcome", value: "100% academic readiness before new school term" },
      ],
    },
    {
      id: "foundation",
      num: "02",
      name: "Foundation Programme",
      tagline: "STEM & Reasoning Excellence",
      image: "/images/programs/foundation-programme.jpg",
      photoCaption: "Prism spectrum & Snell's law physics bench",
      icon: Rocket,
      tiltClass: "rotate-1.5",
      tableData: [
        { label: "Eligible Classes", value: "Classes 8, 9 & 10 (3-Year Track)" },
        { label: "Curriculum Scope", value: "PCMB & Analytical Logical Reasoning" },
        { label: "Aptitude Building", value: "Olympiad & competitive problem solving" },
        { label: "Long-Term Aim", value: "Springboard for IIT-JEE, NEET & Pure Sciences" },
        { label: "Key Outcome", value: "Deep fundamental understanding over rote memory" },
      ],
    },
    {
      id: "board",
      num: "03",
      name: "Board Support",
      tagline: "ICSE · CBSE · State Board",
      image: "/images/programs/board-support.jpg",
      photoCaption: "NCERT book stack & revision study notes",
      icon: BookOpenCheck,
      tiltClass: "-rotate-0.5",
      tableData: [
        { label: "Supported Boards", value: "ICSE, CBSE & Karnataka State Board" },
        { label: "Syllabus Coverage", value: "100% NCERT & Board syllabus completed early" },
        { label: "Assessment Pattern", value: "Chapter-wise drills & Pre-Board simulated mocks" },
        { label: "Exam Technique", value: "Step-marking mastery & model answer writing" },
        { label: "Track Record", value: "Proven 100% Pass & High Distinction rate" },
      ],
    },
    {
      id: "tests",
      num: "04",
      name: "Curated Test Series",
      tagline: "Diagnostic & Remedial Assessments",
      image: "/images/programs/curated-tests.jpg",
      photoCaption: "Graded 96/100 test sheet & stopwatch",
      icon: ClipboardCheck,
      tiltClass: "rotate-1",
      tableData: [
        { label: "Target Students", value: "Classes 8, 9 & 10 (All Boards)" },
        { label: "Frequency", value: "Weekly chapter tests + monthly cumulative mocks" },
        { label: "Diagnostic Report", value: "Granular error mapping & weak topic flagging" },
        { label: "Faculty Mentorship", value: "1-on-1 remedial doubt-solving sessions" },
        { label: "Key Outcome", value: "Assess · Analyse · Improve · Excel" },
      ],
    },
    {
      id: "math",
      num: "05",
      name: "Math Mastery",
      tagline: "Deep Conceptual Learning",
      image: "/images/programs/math-mastery.jpg",
      photoCaption: "7:00 AM golden morning calculus & hot chai",
      icon: Calculator,
      tiltClass: "-rotate-1.5",
      tableData: [
        { label: "Session Timings", value: "Early Morning Classes (7:00 AM – 8:30 AM)" },
        { label: "Learning Atmosphere", value: "Fresh morning mind, zero daily distractions" },
        { label: "Pedagogical Focus", value: "First-principles derivations & speed calculation" },
        { label: "Core Philosophy", value: "Eliminates math phobia through structured intuition" },
        { label: "Key Outcome", value: "Transforms Math into student's highest-scoring subject" },
      ],
    },
    {
      id: "language",
      num: "06",
      name: "Language Support",
      tagline: "Kannada & Hindi Enrichment",
      image: "/images/programs/language-support.jpg",
      photoCaption: "ಕನ್ನಡ & हिन्दी ink calligraphy & Bendre poetry",
      icon: Languages,
      tiltClass: "rotate-0.5",
      tableData: [
        { label: "Languages Offered", value: "ಕನ್ನಡ (Kannada) & हिन्दी (Hindi)" },
        { label: "Curriculum Focus", value: "Grammar (ವ್ಯಾಕರಣ/व्याकरण), Comprehension & Essays" },
        { label: "Teaching Mode", value: "Native language educators with board specialization" },
        { label: "Strategic Value", value: "Strengthens total board exam percentage" },
        { label: "Key Outcome", value: "Confident linguistic expression & high exam scores" },
      ],
    },
  ];

  return (
    <section id="what-we-offer" className="relative overflow-hidden bg-secondary/50 py-24 border-y border-border">
      {/* Notice Board Background Texture & Ambiance */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1b365d_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-sky-border/20 blur-3xl" />

      <div className="container-ace relative z-10">
        {/* ── Section Header with Hand-drawn Gold Brush Accent Underline ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border mb-3">
            Academic Notice Board · What we offer
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Six programmes,{" "}
            <span className="relative inline-block">
              <span className="italic text-gold">one goal</span>
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
            Each card is pinned to our notice board with real student study snapshots. Hover or tap any card to flip it and inspect the comprehensive curriculum table.
          </p>
        </Reveal>

        {/* ── 6 Pinned Notice Board Flip Cards with Realistic Study Photography ── */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {programmes.map((p, i) => {
            const Icon = p.icon;
            const isFlipped = Boolean(flippedCards[p.id] || hoveredCard === p.id);

            return (
              <Reveal key={p.id} variant="fade-up" delay={i * 70}>
                {/* 
                  Pinned Notice Card Container
                  Has 3D perspective and notice board tilt
                */}
                <div
                  className={`group relative h-[450px] sm:h-[470px] cursor-pointer [perspective:1200px] transition-transform duration-300 ${
                    isFlipped ? "rotate-0 scale-[1.02]" : p.tiltClass
                  } hover:rotate-0 hover:scale-[1.02]`}
                  onClick={() => toggleFlip(p.id)}
                  onMouseEnter={() => setHoveredCard(p.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(p.id);
                    }
                  }}
                  aria-label={`${p.name} - Tap to toggle curriculum table`}
                >
                  {/* Real 3D Pushpin pinned on top of the card */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <PushPin />
                  </div>

                  {/* 3D Flipping Card Body */}
                  <div
                    className={`relative size-full transition-transform duration-700 ease-out [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* ════════ FRONT FACE: Clean Rectangle with Course Name & Creative Study Snapshot ════════ */}
                    <div className="absolute inset-0 size-full [backface-visibility:hidden] rounded-2xl border-2 border-gold/40 bg-card p-6 sm:p-7 shadow-lift flex flex-col justify-between items-center text-center select-none">
                      {/* Subtle Paper Pin Hole Accent at Top */}
                      <div className="size-2 rounded-full bg-slate-900/40 shadow-inner mt-0.5" />

                      {/* Course Header */}
                      <div className="space-y-1 mt-1">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-sky px-2.5 py-0.5 text-[10px] font-bold text-sky-border uppercase tracking-wider">
                          <Icon className="size-3 text-gold" />
                          Programme {p.num}
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-primary leading-tight">
                          {p.id === "foundation" ? (
                            <>
                              <AceWord /> {p.name}
                            </>
                          ) : (
                            p.name
                          )}
                        </h3>
                        <p className="text-[11px] font-semibold text-muted-foreground">
                          {p.tagline}
                        </p>
                      </div>

                      {/* ── Creative Pinned Polaroid / Authentic Study Snapshot ── */}
                      <div className="relative my-2 w-full max-w-[250px] mx-auto">
                        {/* Washi Tape Accent on top of the photo */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-14 h-3.5 bg-amber-100/90 border border-amber-300/50 shadow-2xs -rotate-2 backdrop-blur-xs pointer-events-none" />

                        <div className="rounded-xl bg-white p-2 pb-2.5 shadow-md border border-slate-200/90 transition-transform duration-300 group-hover:scale-[1.02] -rotate-0.5 group-hover:rotate-0">
                          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-slate-100">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Subtle natural photo vignette */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
                          </div>
                          <p className="mt-1.5 text-[10px] font-bold text-center text-slate-600 font-mono tracking-tight truncate px-1">
                            {p.photoCaption}
                          </p>
                        </div>
                      </div>

                      {/* Flip Prompt at Bottom */}
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold text-primary transition group-hover:bg-gold group-hover:text-gold-foreground">
                        <RotateCw className="size-3.5 animate-spin-slow" />
                        <span>Hover or tap to reveal table</span>
                      </div>
                    </div>

                    {/* ════════ BACK FACE: Full Curriculum Table ════════ */}
                    <div className="absolute inset-0 size-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border-2 border-gold bg-card p-6 sm:p-7 shadow-lift flex flex-col justify-between overflow-y-auto">
                      {/* Table Header */}
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-bold">
                          <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-gold" />
                            <h4 className="font-display font-bold text-primary text-sm sm:text-base">
                              {p.id === "foundation" ? (
                                <>
                                  <AceWord /> {p.name}
                                </>
                              ) : (
                                p.name
                              )}
                            </h4>
                          </div>
                          <span className="rounded bg-gold/20 px-2 py-0.5 text-[10px] font-mono font-bold text-primary">
                            Curriculum Table
                          </span>
                        </div>

                        {/* Structured Table */}
                        <div className="mt-3 divide-y divide-border/60 text-xs">
                          {p.tableData.map((row, idx) => (
                            <div key={idx} className="py-2.5 flex items-start justify-between gap-3">
                              <span className="font-bold text-primary shrink-0 w-28 text-[11px]">
                                {row.label}
                              </span>
                              <span className="text-right text-muted-foreground font-medium text-[11px] leading-tight">
                                {row.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(p.id);
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground hover:text-primary transition"
                        >
                          <RotateCw className="size-3" /> Flip back
                        </button>
                        <a
                          href="#enquire"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold text-gold-foreground transition hover:shadow-md hover:-translate-y-0.5"
                        >
                          Enquire Now <ArrowRight className="size-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Combined Learning Roadmap Bar ── */}
        <Reveal variant="fade-up" delay={500} className="mt-16">
          <div className="rounded-3xl border-2 border-gold/40 bg-navy-pattern p-6 sm:p-8 text-navy-foreground shadow-lift">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold">
                  <Sparkles className="size-3.5" /> Flexible Multi-Programme Pathway
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-bold">
                  Combine programmes to fit your exact goals
                </h4>
                <p className="text-sm opacity-85 max-w-xl">
                  Whether bridging a single subject or preparing for both School Boards and competitive exams, <AceWord dark /> structures your timetable without school clashes.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#enquire"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
