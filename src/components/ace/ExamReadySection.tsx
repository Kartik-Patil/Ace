import { Play, Sparkles, Lightbulb, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";

export function ExamReadySection() {
  return (
    <section className="bg-secondary/40 py-24 border-y border-border overflow-hidden">
      <div className="container-ace">
        {/* ── Section Header with Brush Underline matching reference ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            <span className="relative inline-block">
              Everything you need for your Exam
              {/* Hand-drawn gold accent brush underline */}
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3.5 text-gold overflow-visible"
                viewBox="0 0 320 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M3 8.5C65 2.5 190 2 317 7.5"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            at one place
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground font-medium">
            Designed to help you learn faster, stay confident and be 100% exam ready. A purposeful commitment to every student who walks through our doors.
          </p>
        </Reveal>

        {/* ── Bento Grid following EduRev reference with ACE Brand Theme ── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ════════ Left Column (col-span-7) ════════ */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Build Strong Foundations (Horizontal Card, Deep Navy Brand Theme) */}
            <Reveal variant="fade-up" delay={0}>
              <div className="group relative overflow-hidden rounded-3xl bg-navy-pattern p-7 sm:p-8 text-navy-foreground border-2 border-gold/40 shadow-lift transition duration-300">
                {/* Subtle background glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-gold/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-sky-border/20 blur-2xl" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                  {/* Left Text */}
                  <div className="md:col-span-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-sm">
                      <Sparkles className="size-3" /> PCMB Conceptual Mastery
                    </span>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold leading-tight">
                      Build <span className="italic text-gold">Strong Foundations</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-90">
                      Develop conceptual understanding in Physics, Chemistry, Mathematics and Biology to move from rote learning to analytical excellence.
                    </p>
                  </div>

                  {/* Right Humanized UI Mockup (Blended Seamlessly - No Boxy Patch!) */}
                  <div className="md:col-span-6 flex justify-center">
                    <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                      {/* Mini Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs font-medium text-white/80">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2.5 rounded-full bg-rose-400" />
                          <span className="size-2.5 rounded-full bg-amber-400" />
                          <span className="size-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 font-semibold text-gold">
                            <AceWord dark /> Concept Vault
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-white/70">
                          Class 8 · 9 · 10
                        </span>
                      </div>

                      {/* PCMB Formula Badges Deck */}
                      <div className="mt-3 space-y-2.5">
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-sky-200 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-sky-300" /> Physics
                          </span>
                          <span className="font-mono font-bold text-white tracking-wide">F = m · a &nbsp;|&nbsp; v = d/t</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-emerald-200 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-emerald-300" /> Chemistry
                          </span>
                          <span className="font-mono font-bold text-white tracking-wide">2H₂ + O₂ → 2H₂O</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-amber-200 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-amber-300" /> Mathematics
                          </span>
                          <span className="font-mono font-bold text-white tracking-wide">a² + b² = c²</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-purple-200 flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-purple-300" /> Biology
                          </span>
                          <span className="font-medium text-white/90">Genetics &amp; Cell Theory</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Bottom 2 Vertical Cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {/* 2. Promote Beyond Classroom Learning (Vertical Clean White Card) */}
              <Reveal variant="fade-up" delay={80} className="h-full">
                <div className="group h-full flex flex-col justify-between rounded-3xl border-2 border-sky-border/40 bg-card p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300 hover:border-sky-border">
                  <div>
                    <span className="inline-block rounded-full bg-sky px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-sky-border/30">
                      Experiential &amp; Hands-on
                    </span>
                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-primary">
                      Beyond Classroom Learning
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Encourage experiential, activity-based and application-oriented learning through real experiments.
                    </p>
                  </div>

                  {/* Humanized Lab Notebook UI (Blended Seamlessly - No Boxy Patch!) */}
                  <div className="mt-6 rounded-2xl bg-gradient-to-b from-sky/60 to-sky/20 border border-sky-border/30 p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between border-b border-sky-border/40 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🔬</span>
                        <span className="text-xs font-bold text-primary">Practical Experiment Log</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Verified Lab
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2 text-xs font-medium text-foreground">
                      <li className="flex items-center gap-2">
                        <span className="grid size-4 place-items-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                        <span>Prism Light Dispersion &amp; Optics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="grid size-4 place-items-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                        <span>Acid-Base Titration &amp; pH Indicator</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="grid size-4 place-items-center rounded-full bg-emerald-500 text-white text-[10px]">✓</span>
                        <span>Ohm&apos;s Law Electric Circuit Assembly</span>
                      </li>
                    </ul>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-sky-border/20 text-[11px] text-muted-foreground">
                      <span>Hands-on Kit Included</span>
                      <span className="font-semibold text-primary">100% Practical</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 3. Develop Essential Skills (Flashcards visual like in EduRev reference) */}
              <Reveal variant="fade-up" delay={160} className="h-full">
                <div className="group h-full flex flex-col justify-between rounded-3xl bg-primary text-primary-foreground border-2 border-gold/40 p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300">
                  <div>
                    <span className="inline-block rounded-full bg-gold/20 text-gold border border-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Logic &amp; Critical Thinking
                    </span>
                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold leading-tight">
                      Develop <span className="italic text-gold">Essential Skills</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      Flip. Recall. Repeat. Strengthen communication, analytical thinking, and problem-solving abilities.
                    </p>
                  </div>

                  {/* Playful Tilted Flashcards Mockup matching reference (Blended Seamlessly!) */}
                  <div className="mt-6 relative h-48 flex items-center justify-center">
                    {/* Background peeking card */}
                    <div className="absolute w-[86%] rounded-2xl bg-white/15 border border-white/20 p-3.5 rotate-6 shadow-md transition-transform duration-300 group-hover:rotate-8">
                      <div className="flex items-center justify-between text-[11px] text-white/80">
                        <span>Card #41 · Speed Math</span>
                        <span className="font-mono">2 + 2 = ?</span>
                      </div>
                    </div>

                    {/* Foreground primary Flashcard */}
                    <div className="relative w-[92%] rounded-2xl bg-gold text-gold-foreground p-4 -rotate-3 shadow-xl border border-white/40 transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-105">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="grid size-6 place-items-center rounded-lg bg-primary text-gold">
                            <Lightbulb className="size-3.5" />
                          </span>
                          <span className="text-xs font-bold tracking-tight">Logic Puzzle #12</span>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                          Analytical
                        </span>
                      </div>

                      <div className="mt-3 text-xs font-semibold leading-snug">
                        &ldquo;If Angle A = 60° and Angle B = 30°, what is Angle C in triangle ABC?&rdquo;
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] font-bold border-t border-primary/20 pt-2 opacity-90">
                        <span>Tap to Reveal Solution</span>
                        <span className="text-primary font-mono">Ans: 90°</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ════════ Right Column (col-span-5) ════════ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 4. Ensure Academic Excellence (Tall White Card, Laptop/Video visual like reference) */}
            <Reveal variant="fade-up" delay={120} className="flex-1">
              <div className="group h-full flex flex-col justify-between rounded-3xl border-2 border-sky-border/40 bg-card p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300 hover:border-sky-border">
                {/* Modern Laptop / Digital Lecture Visual (Blended Seamlessly!) */}
                <div className="relative rounded-2xl bg-gradient-to-b from-sky/40 via-sky/20 to-transparent p-4 pb-6">
                  {/* Floating play badge tag */}
                  <div className="absolute top-2 right-2 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold flex items-center gap-1 shadow-md">
                    <Play className="size-2.5 fill-gold text-gold" /> 100+ Hours Curated
                  </div>

                  {/* Laptop Mockup */}
                  <div className="mx-auto w-full max-w-[280px] rounded-t-xl bg-slate-900 p-2 shadow-2xl border-2 border-slate-700">
                    {/* Screen Content */}
                    <div className="relative aspect-video rounded-lg bg-navy flex flex-col justify-between p-3 overflow-hidden">
                      <div className="flex items-center justify-between text-[10px] text-white/70">
                        <span className="font-bold text-gold">
                          <AceWord dark /> Board Masterclass
                        </span>
                        <span className="bg-red-500/80 text-white px-1.5 py-0.2 rounded font-mono text-[9px]">LIVE</span>
                      </div>

                      {/* Center Play Button with pulse glow */}
                      <div className="self-center my-auto grid size-10 place-items-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                        <Play className="size-4 fill-current ml-0.5" />
                      </div>

                      {/* Video Scrubber */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] text-white/80">
                          <span>Class 10 · Quadratic Equations</span>
                          <span className="font-mono">18:45 / 24:00</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/20 overflow-hidden">
                          <div className="h-full w-3/4 rounded-full bg-gold" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="mx-auto h-2.5 w-full max-w-[310px] rounded-b-lg bg-slate-400/80 shadow-md flex justify-center">
                    <div className="h-1 w-12 rounded-full bg-slate-600/40 mt-0.5" />
                  </div>

                  {/* Floating Syllabus Pill */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="rounded-full bg-sky border border-sky-border/40 px-3 py-1 text-[11px] font-bold text-primary shadow-xs">
                      ✨ 100% NCERT &amp; State Board Syllabus
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Curriculum &amp; Board Mastery
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-primary">
                    Academic Excellence
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Provide structured Board Support and Foundation training for Classes 8, 9 &amp; 10 to systematically elevate academic performance in school examinations.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 5. Build Confidence (Test Insights & A+ Score sheet matching reference) */}
            <Reveal variant="fade-up" delay={200}>
              <div className="group rounded-3xl border-2 border-sky-border/50 bg-sky/70 p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300 hover:border-sky-border">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  {/* Left Text */}
                  <div className="sm:col-span-6">
                    <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                      Fear-Free Assessments
                    </span>
                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-primary">
                      Build Confidence
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Help students overcome examination fear through regular assessments, mentoring and personalised guidance.
                    </p>
                  </div>

                  {/* Right Humanized Test Report Paper with A+ Stamp matching reference (Blended Seamlessly!) */}
                  <div className="sm:col-span-6 flex justify-center sm:justify-end">
                    <div className="relative w-full max-w-[220px] rounded-2xl bg-white p-3.5 shadow-lift border border-sky-border/40 transition-transform duration-300 group-hover:scale-105">
                      {/* Paper Top Stripe */}
                      <div className="h-1.5 w-full rounded-full bg-gold mb-3" />

                      {/* Authentic Red/Gold A+ Circular Stamp */}
                      <div className="absolute top-2 right-2 size-12 rounded-full border-2 border-dashed border-red-600 bg-red-50/90 text-red-600 grid place-items-center -rotate-12 shadow-sm pointer-events-none">
                        <div className="text-center leading-none">
                          <span className="block text-sm font-black tracking-tighter">A+</span>
                          <span className="block text-[8px] font-bold uppercase tracking-widest text-primary">
                            <AceWord />
                          </span>
                        </div>
                      </div>

                      {/* Test Sheet Content */}
                      <div className="text-[11px] font-bold text-primary">
                        Assessment Insights
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        Class 10 Board Mock #03
                      </div>

                      {/* Checklist items */}
                      <div className="mt-2 space-y-1 text-[10px] font-medium text-foreground">
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span> Concept Clarity: <span className="font-bold text-primary ml-auto">100%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span> Step Marking: <span className="font-bold text-primary ml-auto">Secured</span>
                        </div>
                      </div>

                      {/* Ascending Score Progress Bar Graph */}
                      <div className="mt-3 pt-2 border-t border-border">
                        <div className="flex items-end justify-between gap-2 h-9 px-1">
                          <div className="w-1/3 flex flex-col items-center gap-1">
                            <span className="text-[8px] text-muted-foreground">72%</span>
                            <div className="w-full bg-slate-200 rounded-t h-4" />
                          </div>
                          <div className="w-1/3 flex flex-col items-center gap-1">
                            <span className="text-[8px] text-muted-foreground">85%</span>
                            <div className="w-full bg-sky-border/60 rounded-t h-6" />
                          </div>
                          <div className="w-1/3 flex flex-col items-center gap-1">
                            <span className="text-[8px] font-bold text-primary">98%</span>
                            <div className="w-full bg-gold rounded-t h-8" />
                          </div>
                        </div>
                        <div className="mt-1 text-center text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1">
                          <TrendingUp className="size-3" /> +26% Growth Across Tests
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
