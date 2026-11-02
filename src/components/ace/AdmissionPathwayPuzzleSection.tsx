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

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
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

        {/* ════════════ DESKTOP & TABLET: Interlocking Jigsaw Puzzle Infographic ════════════ */}
        {/* Colors strictly follow website theme: Deep Navy (#1b365d), ACE Gold (#d97706), and Sky Blue (#0284c7) */}
        <div className="mt-14 hidden lg:block">
          <Reveal variant="fade-up">
            <div className="relative mx-auto w-full max-w-[1040px]">
              <svg
                viewBox="0 0 1040 680"
                className="w-full h-auto overflow-visible select-none"
                aria-label="3-Step Admission Process Jigsaw Puzzle Infographic"
              >
                <defs>
                  {/* Soft Drop Shadow for Puzzle Pieces */}
                  <filter id="puzzleShadow" x="-15%" y="-15%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.14" />
                  </filter>
                </defs>

                {/* ════════════ CONNECTING LEADER LINES (Clean, zero overlap) ════════════ */}
                {/* 1. Step 1 Leader Line (Deep Navy, frames callout from outside with zero crossing) */}
                <g className="transition-all duration-300">
                  {/* Starting bullet on left boundary of Piece 1 */}
                  <circle cx="310" cy="270" r="5" fill="#1b365d" />
                  {/* Clean elbow path framing callout from left */}
                  <path
                    d="M 310 270 L 75 270 L 75 75 L 115 75"
                    fill="none"
                    stroke="#1b365d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Terminal bullet */}
                  <circle cx="115" cy="75" r="5" fill="#1b365d" />
                </g>

                {/* 2. Step 2 Leader Line (ACE Gold) */}
                <g className="transition-all duration-300">
                  {/* Starting bullet on Piece 2 */}
                  <circle cx="630" cy="180" r="5" fill="#d97706" />
                  {/* Elbow path: goes up, then right to callout */}
                  <path
                    d="M 630 180 L 630 80 L 740 80"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Terminal bullet */}
                  <circle cx="740" cy="80" r="5" fill="#d97706" />
                </g>

                {/* 3. Step 3 Leader Line (Sky Blue) */}
                <g className="transition-all duration-300">
                  {/* Starting bullet on Piece 3 */}
                  <circle cx="520" cy="584" r="5" fill="#0284c7" />
                  {/* Elbow path: goes down, then right to callout */}
                  <path
                    d="M 520 584 L 520 615 L 600 615"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Terminal bullet */}
                  <circle cx="600" cy="615" r="5" fill="#0284c7" />
                </g>

                {/* ════════════ 3 INTERLOCKING PUZZLE PIECES (Spacious 200x180 with generous margins) ════════════ */}
                {/* ── PIECE 1: Top-Left (Deep Navy Brand Color #1b365d) ── */}
                <g
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] origin-center"
                  filter="url(#puzzleShadow)"
                >
                  <path
                    d={`
                      M 310 180
                      L 390 180
                      C 390 175, 386 156, 410 156
                      C 434 156, 430 175, 430 180
                      L 510 180

                      L 510 250
                      C 515 250, 534 246, 534 270
                      C 534 294, 515 290, 510 290
                      L 510 360

                      L 430 360
                      C 430 365, 434 384, 410 384
                      C 386 384, 390 365, 390 360
                      L 310 360

                      L 310 290
                      C 315 290, 334 294, 334 270
                      C 334 246, 315 250, 310 250
                      L 310 180
                      Z
                    `}
                    fill="#1b365d"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Inside Piece 1: Deep inside the solid Navy body with 36px clearance on all sides */}
                  <text
                    x="420"
                    y="262"
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    className="select-none uppercase"
                  >
                    STEP 01
                  </text>
                  <text
                    x="420"
                    y="288"
                    textAnchor="middle"
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
                  <path
                    d={`
                      M 530 180
                      L 730 180

                      L 730 250
                      C 725 250, 706 246, 706 270
                      C 706 294, 725 290, 730 290
                      L 730 360

                      L 650 360
                      C 650 365, 654 384, 630 384
                      C 606 384, 610 365, 610 360
                      L 530 360

                      L 530 290
                      C 535 290, 554 294, 554 270
                      C 554 246, 535 250, 530 250
                      L 530 180
                      Z
                    `}
                    fill="#d97706"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Inside Piece 2: Centered in 152px wide solid Gold body with 28px clearance on both sides */}
                  <text
                    x="630"
                    y="262"
                    textAnchor="middle"
                    fill="#fef3c7"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    className="select-none uppercase"
                  >
                    STEP 02
                  </text>
                  <text
                    x="630"
                    y="288"
                    textAnchor="middle"
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
                  <path
                    d={`
                      M 420 380
                      L 500 380
                      C 500 385, 496 404, 520 404
                      C 544 404, 540 385, 540 380
                      L 620 380

                      L 620 450
                      C 625 450, 644 446, 644 470
                      C 644 494, 625 490, 620 490
                      L 620 560

                      L 540 560
                      C 540 565, 544 584, 520 584
                      C 496 584, 500 565, 500 560
                      L 420 560

                      L 420 490
                      C 415 490, 396 494, 396 470
                      C 396 446, 415 450, 420 450
                      L 420 380
                      Z
                    `}
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Inside Piece 3: Centered in Sky Blue body with 55px clearance on all sides */}
                  <text
                    x="520"
                    y="472"
                    textAnchor="middle"
                    fill="#e0f2fe"
                    fontSize="11"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    className="select-none uppercase"
                  >
                    STEP 03
                  </text>
                  <text
                    x="520"
                    y="498"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="800"
                    letterSpacing="0.04em"
                    className="select-none uppercase font-display"
                  >
                    ENROLMENT
                  </text>
                </g>

                {/* ════════════ CALLOUT TEXT BLOCKS (Clear separation, zero crossing) ════════════ */}
                {/* 1. Top-Left Callout (Step 1 - Positioned cleanly in x=125..295, framed by leader line at x=75, clear of piece at x=310) */}
                <foreignObject x="125" y="52" width="175" height="160" className="overflow-visible">
                  <div className="text-left group pr-1">
                    <h4 className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-primary flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-primary" />
                      Free Academic Counselling
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                      Meet our academic mentors along with your child. We assess their learning style, current strengths, and set clear milestones.
                    </p>
                    <p className="mt-2 text-[10.5px] font-bold text-primary">
                      ★ 1-on-1 Parent Consultation
                    </p>
                  </div>
                </foreignObject>

                {/* 2. Top-Right Callout (Step 2 - Positioned cleanly in x=755..1020, y=55..185) */}
                <foreignObject x="755" y="58" width="265" height="150" className="overflow-visible">
                  <div className="text-left group pl-1">
                    <h4 className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-gold flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-gold" />
                      Appear for ACESET
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                      Participate in the ACE Scholarship Entrance Test to evaluate subject readiness and earn merit scholarships up to 100%*.
                    </p>
                    <p className="mt-2 text-[10.5px] font-bold text-gold">
                      ★ Up to 100% Scholarship Waiver
                    </p>
                  </div>
                </foreignObject>

                {/* 3. Bottom Callout (Step 3 - Positioned cleanly in x=615..990, y=555..680) */}
                <foreignObject x="615" y="560" width="360" height="130" className="overflow-visible">
                  <div className="text-left group pl-1">
                    <h4 className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-sky-border flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-sky-border" />
                      Personalized Pathway Enrolment
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                      Choose the tailored programme (Foundation, Board Support, Math Mastery, Test Series or Language Support) with no school-timing clashes.
                    </p>
                    <p className="mt-2 text-[10.5px] font-bold text-sky-border">
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
          {/* Step 1 Mobile Card (Deep Navy) */}
          <Reveal variant="fade-up" delay={0}>
            <div className="rounded-3xl border-2 border-primary/30 bg-card p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Step 01 · Counselling
                </span>
                <span className="size-3 rounded-full bg-primary" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">
                Free Academic Counselling
              </h3>
              <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                Meet our academic mentors along with your child. We assess their learning style, current strengths, and set clear milestones.
              </p>
              <div className="mt-3 rounded-xl bg-primary/5 p-2.5 text-[11px] font-bold text-primary border border-primary/10">
                ★ 1-on-1 Parent Consultation · Zero Obligation
              </div>
            </div>
          </Reveal>

          {/* Step 2 Mobile Card (ACE Gold) */}
          <Reveal variant="fade-up" delay={100}>
            <div className="rounded-3xl border-2 border-gold/40 bg-card p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/15 text-gold-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Step 02 · Scholarship Test
                </span>
                <span className="size-3 rounded-full bg-gold" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">
                Appear for <AceWord />SET
              </h3>
              <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                Participate in the ACE Scholarship Entrance Test to evaluate subject readiness and earn merit scholarships up to 100%*.
              </p>
              <div className="mt-3 rounded-xl bg-gold/10 p-2.5 text-[11px] font-bold text-gold-foreground border border-gold/20">
                ★ Diagnostic Aptitude Check · Up to 100% Fee Waiver
              </div>
            </div>
          </Reveal>

          {/* Step 3 Mobile Card (Sky Blue) */}
          <Reveal variant="fade-up" delay={200}>
            <div className="rounded-3xl border-2 border-sky-border/40 bg-card p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-sky-border" />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-sky text-sky-border px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Step 03 · Enrolment
                </span>
                <span className="size-3 rounded-full bg-sky-border" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">
                Personalized Pathway Enrolment
              </h3>
              <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
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
