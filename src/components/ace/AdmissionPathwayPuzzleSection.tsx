import React from "react";
import {
  Users,
  Sparkles,
  GraduationCap,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";
import { contact } from "@/data/ace";

export function AdmissionPathwayPuzzleSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/35 py-24 border-y border-border select-none">
      {/* Background Soft Radial Ambiance matching reference image */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 size-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-ace relative z-10">
        {/* ── Section Header matching reference typography ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-border mb-3">
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
            Admission Process
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
            Simple 3-Step Pathway to Join{" "}
            <span className="relative inline-block">
              <span className="italic text-gold">
                <AceWord />
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
            We make the transition seamless and supportive for both parents and students. Every piece of your child&apos;s academic roadmap connects effortlessly.
          </p>
        </Reveal>

        {/* ════════════ DESKTOP & TABLET: Interlocking Jigsaw Puzzle Infographic (matching reference Image 3) ════════════ */}
        {/* Colors strictly follow website theme: Deep Navy (#1b365d), ACE Gold (#d97706), and Sky Blue (#0284c7) */}
        <div className="mt-14 hidden lg:block">
          <Reveal variant="fade-up">
            <div className="relative mx-auto w-full max-w-[1080px]">
              <svg
                viewBox="0 0 1080 670"
                className="w-full h-auto overflow-visible select-none"
                aria-label="3-Step Admission Process Jigsaw Puzzle Infographic"
              >
                <defs>
                  {/* Soft Drop Shadow for Puzzle Pieces */}
                  <filter id="puzzleShadow" x="-15%" y="-15%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.16" />
                  </filter>
                </defs>

                {/* ════════════ CONNECTING LEADER LINES (Framing from outside with ZERO overlap) ════════════ */}
                {/* 1. Step 1 Leader Line (Deep Navy #1b365d) */}
                <g className="transition-all duration-300">
                  {/* Starting bullet on left boundary of Piece 1 */}
                  <circle cx="330" cy="275" r="5" fill="#1b365d" />
                  {/* Path: goes left, then up to title level, then right to terminal dot */}
                  <path
                    d="M 330 275 L 75 275 L 75 75 L 115 75"
                    fill="none"
                    stroke="#1b365d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Terminal bullet directly pointing to callout title */}
                  <circle cx="115" cy="75" r="5" fill="#1b365d" />
                </g>

                {/* 2. Step 2 Leader Line (ACE Gold #d97706) */}
                <g className="transition-all duration-300">
                  {/* Starting bullet on top boundary of Piece 2 */}
                  <circle cx="670" cy="175" r="5" fill="#d97706" />
                  {/* Path: goes up, then right to callout title */}
                  <path
                    d="M 670 175 L 670 80 L 755 80"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Terminal bullet */}
                  <circle cx="755" cy="80" r="5" fill="#d97706" />
                </g>

                {/* 3. Step 3 Leader Line (Sky Blue #0284c7) */}
                <g className="transition-all duration-300">
                  {/* Starting bullet on bottom boundary of Piece 3 */}
                  <circle cx="550" cy="585" r="5" fill="#0284c7" />
                  {/* Path: goes down, then right to callout title */}
                  <path
                    d="M 550 585 L 550 615 L 630 615"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Terminal bullet */}
                  <circle cx="630" cy="615" r="5" fill="#0284c7" />
                </g>

                {/* ════════════ 3 INTERLOCKING JIGSAW PUZZLE PIECES (Spacious 220x200 with 50px+ clearances) ════════════ */}
                {/* ── PIECE 1: Top-Left (Deep Navy Brand Color #1b365d) ── */}
                <g
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] origin-center"
                  filter="url(#puzzleShadow)"
                >
                  {/*
                    Piece 1: Top-Left (Navy)
                    Body: x=330 to x=550 (width 220), y=175 to y=375 (height 200)
                    Top: Male knob pointing UP at x=440
                    Right: Male knob pointing RIGHT at y=275
                    Bottom: Male knob pointing DOWN at x=440
                    Left: Female notch curving INWARD at y=275
                  */}
                  <path
                    d={`
                      M 330 175
                      L 415 175
                      C 415 168, 410 148, 440 148
                      C 470 148, 465 168, 465 175
                      L 550 175

                      L 550 250
                      C 557 250, 577 245, 577 275
                      C 577 305, 557 300, 550 300
                      L 550 375

                      L 465 375
                      C 465 382, 470 402, 440 402
                      C 410 402, 415 382, 415 375
                      L 330 375

                      L 330 300
                      C 337 300, 357 305, 357 275
                      C 357 245, 337 250, 330 250
                      L 330 175
                      Z
                    `}
                    fill="#1b365d"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Inside Piece 1: Deep inside the solid Navy body with 50px clearance on all sides */}
                  <text
                    x="440"
                    y="262"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#fbbf24"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    className="select-none uppercase"
                  >
                    STEP 01
                  </text>
                  <text
                    x="440"
                    y="290"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="800"
                    letterSpacing="0.04em"
                    className="select-none uppercase font-display"
                  >
                    COUNSELLING
                  </text>
                </g>

                {/* ── PIECE 2: Top-Right (ACE Gold Brand Color #d97706) ── */}
                <g
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] origin-center"
                  filter="url(#puzzleShadow)"
                >
                  {/*
                    Piece 2: Top-Right (Gold)
                    Body: x=570 to x=790 (width 220), y=175 to y=375 (height 200)
                    Top: Flat clean top edge
                    Right: Female notch curving INWARD at y=275
                    Bottom: Male knob pointing DOWN at x=680
                    Left: Female notch curving INWARD at y=275 (matching Piece 1's right knob!)
                  */}
                  <path
                    d={`
                      M 570 175
                      L 790 175

                      L 790 250
                      C 783 250, 763 245, 763 275
                      C 763 305, 783 300, 790 300
                      L 790 375

                      L 705 375
                      C 705 382, 710 402, 680 402
                      C 650 402, 655 382, 655 375
                      L 570 375

                      L 570 300
                      C 577 300, 597 305, 597 275
                      C 597 245, 577 250, 570 250
                      L 570 175
                      Z
                    `}
                    fill="#d97706"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Inside Piece 2: Centered in solid Gold body with 45px+ clearance on both sides */}
                  <text
                    x="680"
                    y="262"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#fef3c7"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    className="select-none uppercase"
                  >
                    STEP 02
                  </text>
                  <text
                    x="680"
                    y="290"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="800"
                    letterSpacing="0.04em"
                    className="select-none uppercase font-display"
                  >
                    ACESET TEST
                  </text>
                </g>

                {/* ── PIECE 3: Bottom-Center (Electric Sky Blue #0284c7) ── */}
                <g
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] origin-center"
                  filter="url(#puzzleShadow)"
                >
                  {/*
                    Piece 3: Bottom-Center (Sky Blue)
                    Body: x=440 to x=660 (width 220), y=395 to y=595 (height 200)
                    Top: Two Female notches at x=440 and x=660
                    Right: Male knob pointing RIGHT at y=495
                    Bottom: Male knob pointing DOWN at x=550
                    Left: Male knob pointing LEFT at y=495
                  */}
                  <path
                    d={`
                      M 440 395
                      L 525 395
                      C 525 402, 520 422, 550 422
                      C 580 422, 575 402, 575 395
                      L 660 395

                      L 660 470
                      C 667 470, 687 465, 687 495
                      C 687 525, 667 520, 660 520
                      L 660 595

                      L 575 595
                      C 575 602, 580 622, 550 622
                      C 520 622, 525 602, 525 595
                      L 440 595

                      L 440 520
                      C 433 520, 413 525, 413 495
                      C 413 465, 433 470, 440 470
                      L 440 395
                      Z
                    `}
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Inside Piece 3: Centered in Sky Blue body with 55px clearance on all sides */}
                  <text
                    x="550"
                    y="482"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#e0f2fe"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    className="select-none uppercase"
                  >
                    STEP 03
                  </text>
                  <text
                    x="550"
                    y="510"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="800"
                    letterSpacing="0.04em"
                    className="select-none uppercase font-display"
                  >
                    ENROLMENT
                  </text>
                </g>

                {/* ════════════ CALLOUT TEXT BLOCKS (Spacious layout matching Image 3 with ZERO overlap) ════════════ */}
                {/* 1. Top-Left Callout (Step 1 - Positioned cleanly in x=125..315, framed by leader line at x=75, clear of piece at x=330) */}
                <foreignObject x="125" y="50" width="195" height="180" className="overflow-visible">
                  <div className="text-left group pr-2">
                    <h4 className="font-display font-extrabold text-sm tracking-wider uppercase text-primary flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-primary" />
                      Academic Counselling
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                      Meet our academic mentors along with your child. We assess their learning style, current strengths, and set clear milestones.
                    </p>
                    <p className="mt-2.5 text-[11px] font-bold text-primary">
                      ★ 1-on-1 Parent Consultation
                    </p>
                  </div>
                </foreignObject>

                {/* 2. Top-Right Callout (Step 2 - Positioned cleanly in x=770..1060, y=55..200) */}
                <foreignObject x="770" y="55" width="280" height="170" className="overflow-visible">
                  <div className="text-left group pl-1">
                    <h4 className="font-display font-extrabold text-sm tracking-wider uppercase text-gold flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-gold" />
                      Appear for ACESET
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                      Participate in the ACE Scholarship Entrance Test to evaluate subject readiness and earn merit scholarships up to 100%*.
                    </p>
                    <p className="mt-2.5 text-[11px] font-bold text-gold">
                      ★ Up to 100% Scholarship Waiver
                    </p>
                  </div>
                </foreignObject>

                {/* 3. Bottom Callout (Step 3 - Positioned cleanly in x=645..1040, y=555..680) */}
                <foreignObject x="645" y="555" width="380" height="140" className="overflow-visible">
                  <div className="text-left group pl-1">
                    <h4 className="font-display font-extrabold text-sm tracking-wider uppercase text-sky-border flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-sky-border" />
                      Personalized Pathway Enrolment
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                      Choose the tailored programme (Foundation, Board Support, Math Mastery, Test Series or Language Support) with no school-timing clashes.
                    </p>
                    <p className="mt-2.5 text-[11px] font-bold text-sky-border">
                      ★ Synchronized with School Timetable
                    </p>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </Reveal>
        </div>

        {/* ════════════ MOBILE & COMPACT: Responsive Puzzle Stack ════════════ */}
        <div className="mt-12 space-y-6 lg:hidden">
          {/* Step 1 Mobile Card */}
          <Reveal variant="fade-up" delay={0}>
            <div className="rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-sm relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-[#fdb435] hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Step 01 · Counselling
                </span>
                <span className="size-3 rounded-full bg-primary" />
              </div>
              <h3 className="mt-3 inline-block rounded-xl bg-[#2a2273] px-4 py-1.5 font-display text-lg font-bold text-[#fdb435] shadow-xs">
                Free Academic Counselling
              </h3>
              <p className="mt-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                Meet our academic mentors along with your child. We assess their learning style, current strengths, and set clear milestones.
              </p>
              <div className="mt-3 rounded-xl bg-primary/5 p-2.5 text-[11px] font-bold text-primary border border-primary/10">
                ★ 1-on-1 Parent Consultation · Zero Obligation
              </div>
            </div>
          </Reveal>

          {/* Step 2 Mobile Card */}
          <Reveal variant="fade-up" delay={100}>
            <div className="rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-sm relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-[#fdb435] hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/15 text-gold-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Step 02 · Scholarship Test
                </span>
                <span className="size-3 rounded-full bg-gold" />
              </div>
              <h3 className="mt-3 inline-block rounded-xl bg-[#2a2273] px-4 py-1.5 font-display text-lg font-bold text-[#fdb435] shadow-xs">
                Appear for <AceWord dark />SET
              </h3>
              <p className="mt-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                Participate in the ACE Scholarship Entrance Test to evaluate subject readiness and earn merit scholarships up to 100%*.
              </p>
              <div className="mt-3 rounded-xl bg-gold/10 p-2.5 text-[11px] font-bold text-gold-foreground border border-gold/20">
                ★ Diagnostic Aptitude Check · Up to 100% Fee Waiver
              </div>
            </div>
          </Reveal>

          {/* Step 3 Mobile Card */}
          <Reveal variant="fade-up" delay={200}>
            <div className="rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-sm relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-[#fdb435] hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-sky text-sky-border px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Step 03 · Enrolment
                </span>
                <span className="size-3 rounded-full bg-sky-border" />
              </div>
              <h3 className="mt-3 inline-block rounded-xl bg-[#2a2273] px-4 py-1.5 font-display text-lg font-bold text-[#fdb435] shadow-xs">
                Personalized Pathway Enrolment
              </h3>
              <p className="mt-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                Choose the tailored programme (Foundation, Board Support, Math Mastery, Test Series or Language Support) with no school-timing clashes.
              </p>
              <div className="mt-3 rounded-xl bg-sky/40 p-2.5 text-[11px] font-bold text-primary border border-sky-border/30">
                ★ Flexible Batches · Synchronized with School Timetable
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Direct Action Buttons ── */}
        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Enquire Now <ArrowRight className="size-4" />
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-card px-7 py-3.5 font-bold text-primary transition hover:border-gold hover:text-gold"
          >
            <Phone className="size-4 text-emerald-600" /> WhatsApp Admissions Desk
          </a>
        </div>
      </div>
    </section>
  );
}
