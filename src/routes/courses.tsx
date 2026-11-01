import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, Calculator, ClipboardCheck, Languages, Layers, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { boards, contact, programs } from "@/data/ace";
import programs_img from "@/assets/programs-illustration.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Explore Programs | ACE – Education Redefined, Hubballi" },
      { name: "description", content: "Foundation Programme & Board Exam Support for Classes 8, 9 & 10. Language support, Test Series and ACESET scholarship entrance exam at ACE, Hubballi." },
    ],
  }),
  component: CoursesPage,
});

const aceset_benefits = [
  { n: "01", t: "Unlock Scholarship Opportunities",    d: "Get an opportunity to earn scholarships of up to 100%* and make quality education more accessible." },
  { n: "02", t: "Evaluate Your Academic Readiness",    d: "Understand your current level of preparation and assess your strengths across key academic subjects." },
  { n: "03", t: "Discover Your Learning Pathway",      d: "Explore the right academic programme based on your interests, abilities and future aspirations." },
  { n: "04", t: "Experience the ACE Learning Approach",d: "Get introduced to ACE's student-centric teaching methodology, concept-based learning and academic mentoring." },
  { n: "05", t: "Plan Your Academic Journey",          d: "Get an early opportunity to explore suitable programmes and plan your learning journey with ACE." },
  { n: "06", t: "Take the First Step Towards Excellence", d: "Begin your journey towards stronger concepts, sharper thinking and greater confidence with ACE Foundation Programmes." },
];

const iconMap: Record<string, React.ElementType> = {
  bridge: Layers, foundation: Rocket, board: BookOpenCheck,
  tests: ClipboardCheck, math: Calculator, language: Languages,
};

function CoursesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy-pattern text-navy-foreground">
        <div className="container-ace grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div className="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Programmes for Classes 8, 9 &amp; 10</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl">
              Building Strong Foundations.{" "}
              <span className="italic text-gold">Preparing for Future Success.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-85">
              From closing gaps to building competitive strength, ACE's programmes take students from concepts to confidence —
              for ICSE, CBSE and State Board.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programmes" className="rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5">View programmes</a>
              <a href="#enquire" className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold hover:border-gold hover:text-gold">
                Enquire <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
          <img src={programs_img} alt="Teacher guiding students through geometry at a whiteboard" width={1280} height={960} className="fade-up rounded-3xl border-4 border-gold/70 shadow-lift [animation-delay:150ms]" />
        </div>
      </section>

      {/* ── Flagship programmes ── */}
      <section id="programmes" className="container-ace scroll-mt-24 py-20">
        <Reveal variant="fade-up">
          <SectionHeading eyebrow="Our programmes" title="Two flagship learning pathways" intro="Structured to strengthen concepts, develop analytical thinking and prepare students for school examinations and beyond." />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal variant="slide-left">
            <div className="h-full rounded-2xl border-2 border-gold/50 bg-navy-pattern p-8 text-navy-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-gold-foreground">
                <Rocket className="size-4" aria-hidden /> STEM Foundation Programme
              </span>
              <h2 className="mt-5 text-2xl font-semibold">ACE Foundation Programme</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">Year-Long Academic Enrichment · Classes 8, 9 &amp; 10</p>
              <p className="mt-4 opacity-85">
                A comprehensive three-year academic enrichment programme designed for students who aspire to pursue careers in Engineering,
                Medicine and Pure Sciences. Focuses on strengthening fundamental concepts, developing scientific aptitude, enhancing analytical
                and logical reasoning, and nurturing problem-solving abilities.
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gold">Covers: PCMB &amp; Reasoning</p>
            </div>
          </Reveal>
          <Reveal variant="slide-right">
            <div className="h-full rounded-2xl border-2 border-sky-border/40 bg-sky p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                <BookOpenCheck className="size-4" aria-hidden /> Board Examination Support
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-primary">Board Prep · Classes 8, 9 &amp; 10</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-sky-border">ICSE · CBSE · State Board</p>
              <p className="mt-4 text-muted-foreground">
                Focused academic guidance, systematic syllabus coverage, concept reinforcement, regular practice and assessments
                to help students achieve academic excellence in school examinations.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {boards.map((b) => (
                  <span key={b} className="rounded-xl border-2 border-sky-border px-4 py-2 text-sm font-semibold text-primary">{b}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── All 6 programme cards ── */}
      <section className="bg-secondary py-20">
        <div className="container-ace">
          <Reveal variant="fade-up">
            <SectionHeading eyebrow="What we offer" title="Six programmes, one goal" intro="Each programme focuses on one part of a student's growth. Students can combine them as they need." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => {
              const Icon = iconMap[p.id] ?? Layers;
              return (
                <Reveal key={p.id} variant="zoom-in" delay={i * 70}>
                  <article className="group relative flex h-full flex-col rounded-2xl border-2 border-sky-border/40 bg-sky p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-border hover:shadow-lift">
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <span className="font-display text-3xl text-sky-border/30">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-primary">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                    {p.highlight && <p className="mt-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">{p.highlight}</p>}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Language & Test Series ── */}
      <section className="container-ace py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal variant="slide-left">
            <div className="h-full rounded-2xl border-2 border-sky-border/40 bg-sky p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                <Languages className="size-4" aria-hidden /> Language Enrichment
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-primary">Language Support – Hindi &amp; Kannada</h2>
              <p className="mt-3 text-muted-foreground">
                Dedicated Hindi and Kannada language support to help students strengthen their language skills, improve comprehension
                and develop confidence in reading, writing and communication.
              </p>
            </div>
          </Reveal>
          <Reveal variant="slide-right">
            <div className="h-full rounded-2xl border-2 border-sky-border/40 bg-sky p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                <ClipboardCheck className="size-4" aria-hidden /> Academic Test Series
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-primary">Test Series – Classes 8, 9 &amp; 10</h2>
              <p className="mt-3 text-muted-foreground">
                A structured assessment programme designed to evaluate students' understanding, strengthen subject knowledge and improve
                examination readiness. Regular tests, performance analysis and feedback help students identify learning gaps.
              </p>
              <p className="mt-3 text-sm font-bold italic text-sky-border">Assess. Analyse. Improve. Excel.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ACESET ── */}
      <section className="bg-secondary py-20">
        <div className="container-ace">
          <Reveal variant="fade-up">
            <SectionHeading
              eyebrow="ACESET – Scholarship Entrance Test"
              title={<>Why participate in <span className="italic text-gold">ACESET?</span></>}
              intro="Your Potential Deserves an Opportunity to Excel!"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aceset_benefits.map((b, i) => (
              <Reveal key={b.n} variant="fade-up" delay={i * 70}>
                <div className="flex h-full gap-4 rounded-2xl bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold font-display text-sm font-bold text-gold-foreground">{b.n}</span>
                  <div>
                    <p className="font-bold text-primary">{b.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">*Scholarship percentage subject to eligibility criteria and seat availability.</p>
        </div>
      </section>

      {/* ── Boards CTA ── */}
      <section className="container-ace py-16">
        <Reveal variant="zoom-in">
          <div className="rounded-2xl bg-navy-pattern p-10 text-navy-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Boards supported</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {boards.map((b) => (
                <span key={b} className="rounded-xl border-2 border-gold px-6 py-3 font-display text-2xl font-semibold">{b}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquire" className="rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5">
                Enquire for {contact.admissionYear}
              </a>
              <Link to="/results" className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold hover:border-gold hover:text-gold">
                Meet our achievers <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactSection title={`Enquire for ${contact.admissionYear}`} />
    </>
  );
}
