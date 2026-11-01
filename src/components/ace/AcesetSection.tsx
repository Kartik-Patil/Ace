import { Play, Sparkles, Rocket, TrendingUp, Compass, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { AceWord } from "./AceWord";

export function AcesetSection() {
  return (
    <section className="bg-secondary/40 py-24 border-y border-border overflow-hidden">
      <div className="container-ace">
        {/* ── Section Header with Brush Underline matching reference ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border mb-3">
            <AceWord />SET – Scholarship Entrance Test
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            <span className="relative inline-block">
              Why participate in{" "}
              <span className="italic text-gold">
                <AceWord />SET?
              </span>
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
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground font-medium">
            Your Potential Deserves an Opportunity to Excel! Discover your strengths, earn merit scholarships and chart your academic roadmap.
          </p>
        </Reveal>

        {/* ── Asymmetric Bento Grid (matching ExamReadySection / EduRev structure) ── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ════════ Left Column (col-span-7) ════════ */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Unlock Scholarship Opportunities (Horizontal Card, Navy Brand Pattern) */}
            <Reveal variant="fade-up" delay={0}>
              <div className="group relative overflow-hidden rounded-3xl bg-navy-pattern p-7 sm:p-8 text-navy-foreground border-2 border-gold/40 shadow-lift transition duration-300">
                {/* Background glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-gold/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-sky-border/20 blur-2xl" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                  {/* Left Text */}
                  <div className="md:col-span-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-sm">
                      <Sparkles className="size-3" /> Up to 100% Scholarship*
                    </span>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold leading-tight">
                      Unlock <span className="italic text-gold">Scholarship Opportunities</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-90">
                      Get an opportunity to earn merit scholarships of up to 100%* and make quality education and academic foundation more accessible.
                    </p>
                  </div>

                  {/* Right Humanized UI Mockup: Scholarship Tier Vault */}
                  <div className="md:col-span-6 flex justify-center">
                    <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs font-medium text-white/80">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2.5 rounded-full bg-rose-400" />
                          <span className="size-2.5 rounded-full bg-amber-400" />
                          <span className="size-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 font-semibold text-gold">
                            <AceWord dark />SET Merit Tiers
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-white/70">
                          2027–28
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between rounded-xl bg-gold/20 border border-gold/40 px-3 py-2 text-xs">
                          <span className="font-bold text-gold flex items-center gap-1.5">
                            🏆 Tier 1 Distinction
                          </span>
                          <span className="font-mono font-extrabold text-gold bg-gold/20 px-2 py-0.5 rounded">
                            100% Fee Waiver
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-sky-200 flex items-center gap-1.5">
                            🥇 90th+ Percentile
                          </span>
                          <span className="font-mono font-bold text-white">75% Scholarship</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-emerald-200 flex items-center gap-1.5">
                            🥈 Merit Achievers
                          </span>
                          <span className="font-mono font-bold text-white">50% Scholarship</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 text-xs">
                          <span className="font-semibold text-purple-200 flex items-center gap-1.5">
                            🥉 Foundation Grant
                          </span>
                          <span className="font-medium text-white/90">25% Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Bottom 2 Vertical Cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {/* 2. Evaluate Academic Readiness (Vertical Clean White Card) */}
              <Reveal variant="fade-up" delay={80} className="h-full">
                <div className="group h-full flex flex-col justify-between rounded-3xl border-2 border-sky-border/40 bg-card p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300 hover:border-sky-border">
                  <div>
                    <span className="inline-block rounded-full bg-sky px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-sky-border/30">
                      Diagnostic Benchmark
                    </span>
                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-primary">
                      Academic Readiness
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Understand your current level of preparation and assess your strengths across key subjects.
                    </p>
                  </div>

                  {/* Diagnostic Radar & Scorecard Widget */}
                  <div className="mt-6 rounded-2xl bg-gradient-to-b from-sky/60 to-sky/20 border border-sky-border/30 p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between border-b border-sky-border/40 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-primary">Subject Competence Radar</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Detailed Report
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between font-semibold text-foreground text-[11px] mb-1">
                          <span>Mathematics &amp; Logic</span>
                          <span className="font-mono text-primary font-bold">96%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full w-[96%] rounded-full bg-gold" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-semibold text-foreground text-[11px] mb-1">
                          <span>Physics &amp; Chemistry</span>
                          <span className="font-mono text-primary font-bold">91%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full w-[91%] rounded-full bg-sky-border" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-semibold text-foreground text-[11px] mb-1">
                          <span>Biology &amp; Aptitude</span>
                          <span className="font-mono text-primary font-bold">94%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full w-[94%] rounded-full bg-emerald-500" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-sky-border/20 text-[11px] text-muted-foreground flex justify-between">
                      <span>Personalized Diagnostic Analysis</span>
                      <span className="font-bold text-primary">Included</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 3. Discover Your Learning Pathway (Vertical Navy & Gold Accent Card) */}
              <Reveal variant="fade-up" delay={160} className="h-full">
                <div className="group h-full flex flex-col justify-between rounded-3xl bg-primary text-primary-foreground border-2 border-gold/40 p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300">
                  <div>
                    <span className="inline-block rounded-full bg-gold/20 text-gold border border-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Customized Roadmap
                    </span>
                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold leading-tight">
                      Discover Your <span className="italic text-gold">Pathway</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      Explore the right academic programme based on your individual strengths, interests and future aspirations.
                    </p>
                  </div>

                  {/* Pathway Stepper Mockup */}
                  <div className="mt-6 relative h-48 flex items-center justify-center">
                    {/* Background peeking card */}
                    <div className="absolute w-[86%] rounded-2xl bg-white/15 border border-white/20 p-3.5 rotate-6 shadow-md transition-transform duration-300 group-hover:rotate-8">
                      <div className="flex items-center justify-between text-[11px] text-white/80">
                        <span>Olympiad &amp; NTSE Track</span>
                        <span className="font-mono text-gold">Class 9</span>
                      </div>
                    </div>

                    {/* Foreground primary Pathway Card */}
                    <div className="relative w-[92%] rounded-2xl bg-gold text-gold-foreground p-4 -rotate-3 shadow-xl border border-white/40 transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-105">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="grid size-6 place-items-center rounded-lg bg-primary text-gold">
                            <Compass className="size-3.5" />
                          </span>
                          <span className="text-xs font-bold tracking-tight">STEM Foundation Roadmap</span>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                          Class 8-10
                        </span>
                      </div>

                      <div className="mt-2.5 text-xs font-semibold leading-snug">
                        School Curriculum $\rightarrow$ Analytical Logic $\rightarrow$ Competitive JEE / NEET Readiness
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[10px] font-bold border-t border-primary/20 pt-2 opacity-90">
                        <span>1-on-1 Academic Counseling</span>
                        <span className="text-primary font-mono">Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ════════ Right Column (col-span-5) ════════ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 4. Experience the ACE Learning Approach (Tall White Card, Digital Screen) */}
            <Reveal variant="fade-up" delay={120} className="flex-1">
              <div className="group h-full flex flex-col justify-between rounded-3xl border-2 border-sky-border/40 bg-card p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300 hover:border-sky-border">
                {/* Modern Laptop / ACESET Portal Screen */}
                <div className="relative rounded-2xl bg-gradient-to-b from-sky/40 via-sky/20 to-transparent p-4 pb-6">
                  {/* Floating badge */}
                  <div className="absolute top-2 right-2 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold flex items-center gap-1 shadow-md">
                    <Rocket className="size-2.5 text-gold" /> Student-Centric Pedagogy
                  </div>

                  {/* Laptop Mockup */}
                  <div className="mx-auto w-full max-w-[280px] rounded-t-xl bg-slate-900 p-2 shadow-2xl border-2 border-slate-700">
                    <div className="relative aspect-video rounded-lg bg-navy flex flex-col justify-between p-3 overflow-hidden">
                      <div className="flex items-center justify-between text-[10px] text-white/70">
                        <span className="font-bold text-gold">
                          <AceWord dark />SET Concept-First Demo
                        </span>
                        <span className="bg-emerald-500/80 text-white px-1.5 py-0.2 rounded font-mono text-[9px]">ACTIVE</span>
                      </div>

                      {/* Center Play Button */}
                      <div className="self-center my-auto grid size-10 place-items-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                        <Play className="size-4 fill-current ml-0.5" />
                      </div>

                      {/* Bottom status */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] text-white/80">
                          <span>Interactive Teaching Methodology</span>
                          <span className="font-mono text-gold">100% Practical</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/20 overflow-hidden">
                          <div className="h-full w-4/5 rounded-full bg-gold" />
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
                      ✨ Concept Clarity · Problem-Solving · Mentorship
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Pedagogy &amp; Mentoring
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-primary">
                    The <AceWord /> Learning Approach
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Get introduced to <AceWord />&apos;s student-centric teaching methodology, concept-based learning and individual academic mentoring.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 5. Plan Your Academic Journey & Excellence (Horizontal Soft Sky Card) */}
            <Reveal variant="fade-up" delay={200}>
              <div className="group rounded-3xl border-2 border-sky-border/50 bg-sky/70 p-6 sm:p-7 shadow-card hover:shadow-lift transition duration-300 hover:border-sky-border">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  {/* Left Text */}
                  <div className="sm:col-span-6">
                    <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                      Excellence Roadmap
                    </span>
                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-primary">
                      Take the First Step
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Begin your journey towards stronger concepts, sharper thinking and greater confidence with <AceWord /> Foundation Programmes.
                    </p>
                  </div>

                  {/* Right Humanized ACESET Hall Ticket & Eligibility Pass */}
                  <div className="sm:col-span-6 flex justify-center sm:justify-end">
                    <div className="relative w-full max-w-[220px] rounded-2xl bg-white p-3.5 shadow-lift border border-sky-border/40 transition-transform duration-300 group-hover:scale-105">
                      {/* Top Stripe */}
                      <div className="h-1.5 w-full rounded-full bg-gold mb-3" />

                      {/* Official Verified Rubber Stamp */}
                      <div className="absolute top-2 right-2 size-12 rounded-full border-2 border-dashed border-emerald-600 bg-emerald-50/90 text-emerald-700 grid place-items-center -rotate-12 shadow-sm pointer-events-none">
                        <div className="text-center leading-none">
                          <span className="block text-[8px] font-black uppercase tracking-tighter">QUALIFIED</span>
                          <span className="block text-[7px] font-bold uppercase tracking-widest text-emerald-600">
                            <AceWord />SET
                          </span>
                        </div>
                      </div>

                      <div className="text-[11px] font-bold text-primary">
                        Registration Pass
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        Class 8 · 9 · 10 Foundation
                      </div>

                      <div className="mt-2 space-y-1 text-[10px] font-medium text-foreground">
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span> Seat Preference: <span className="font-bold text-primary ml-auto">Reserved</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span> Syllabus Guide: <span className="font-bold text-primary ml-auto">Dispatched</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-border">
                        <div className="text-center text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1">
                          <TrendingUp className="size-3" /> +100% Prepared For Board &amp; STEM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          *Scholarship percentage is subject to eligibility criteria, test score benchmark and batch availability.
        </p>
      </div>
    </section>
  );
}

