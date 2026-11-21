import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, Calculator, ClipboardCheck, Languages, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import { AcesetSection } from "@/components/ace/AcesetSection";
import { ProgrammesSplashSection } from "@/components/ace/ProgrammesSplashSection";
import { boards, contact } from "@/data/ace";
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
              From closing gaps to building competitive strength, <AceWord dark />&apos;s programmes take students from concepts to confidence —
              for ICSE, CBSE and State Board.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programmes" className="rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5">View programmes</a>
              <a href="#enquire" className="rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5">
                Enquire Now <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
          <img src={programs_img} alt="Teacher guiding students through geometry at a whiteboard" width={1280} height={960} className="fade-up rounded-3xl border-4 border-gold/70 shadow-lift [animation-delay:150ms]" />
        </div>
      </section>

      {/* ── Flagship programmes ── */}
      <section id="programmes" className="container-ace scroll-mt-24 py-16 sm:py-20">
        <Reveal variant="fade-up">
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
              Foundation
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium text-justify">
              <p className="font-semibold text-primary italic border-l-4 border-gold pl-4 py-1 text-lg sm:text-xl">
                “Motivation is the Spark. Discipline is the Journey. Excellence is the Destination.”
              </p>
              <p>
                I believe education is not about filling minds with information, but it’s about igniting minds with curiosity, clarity and confidence. Over the years of mentoring I have experienced that every great achievement begins with the courage to question, the discipline to learn and determination to excel.
              </p>
              <p>
                At <AceWord />, we believe every student possesses the potential to achieve extraordinary things. Our approach goes beyond conventional teaching, focusing to nurture curious minds, develop independent thinkers and inspire lifelong learners.
              </p>
              <p>
                At <AceWord />, it’s not about merely preparing students for examinations, rather equip them with the knowledge, skills and mindset to meet future academic challenges, pursue their ambitions and emerge as confident achievers.
              </p>
              <p>
                I heartily welcome all the students to <AceWord /> STEM Foundation to define clear academic and personal goals by building belief in their abilities and potential, encouraging optimism, resilience and a growth mindset.
              </p>
            </div>
          </div>
        </Reveal>
        {/* ── 4 Course Cards (STEM, Board, Language, Maths Mastery) ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal variant="fade-up" delay={50}>
            <Link
              to="/stem-foundation"
              className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-gold/50 bg-navy-pattern p-6 xl:p-8 text-navy-foreground shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold text-gold-foreground transition-transform duration-300 group-hover:scale-110">
                    <Rocket className="size-6" aria-hidden />
                  </span>

                </div>
                <h3 className="mt-6 text-2xl font-bold text-white transition-colors group-hover:text-gold">
                  STEM Foundation
                </h3>
                <p className="mt-2 text-base font-semibold text-gold">
                  (7, 8, 9 and 10)
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed text-justify">
                  Strengthening fundamental concepts, scientific aptitude, and problem-solving abilities for future success.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-gold transition-all duration-300 group-hover:text-white">
                <span>Explore Course</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </div>
            </Link>
          </Reveal>

          <Reveal variant="fade-up" delay={150}>
            <Link
              to="/board-prep"
              className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-gold/50 bg-navy-pattern p-6 xl:p-8 text-navy-foreground shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold text-gold-foreground transition-transform duration-300 group-hover:scale-110">
                    <BookOpenCheck className="size-6" aria-hidden />
                  </span>

                </div>
                <h3 className="mt-6 text-2xl font-bold text-white transition-colors group-hover:text-gold">
                  BOARD Prep
                </h3>
                <p className="mt-2 text-base font-semibold text-gold">
                  (ICSE, CBSE/State Boards)
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed text-justify">
                  Systematic syllabus coverage, concept reinforcement, and targeted assessments to excel in school boards.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-gold transition-all duration-300 group-hover:text-white">
                <span>Explore Course</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </div>
            </Link>
          </Reveal>

          <Reveal variant="fade-up" delay={250}>
            <Link
              to="/language-assistance"
              className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-gold/50 bg-navy-pattern p-6 xl:p-8 text-navy-foreground shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold text-gold-foreground transition-transform duration-300 group-hover:scale-110">
                    <Languages className="size-6" aria-hidden />
                  </span>

                </div>
                <h3 className="mt-6 text-2xl font-bold text-white transition-colors group-hover:text-gold">
                  Language Assistance
                </h3>
                <p className="mt-2 text-base font-semibold text-gold">
                  (Hindi &amp; Kannada Support)
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed text-justify">
                  Dedicated Hindi and Kannada language mentoring to improve comprehension, reading, and writing skills.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-gold transition-all duration-300 group-hover:text-white">
                <span>Explore Course</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </div>
            </Link>
          </Reveal>

          <Reveal variant="fade-up" delay={350}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-gold/50 bg-navy-pattern p-6 xl:p-8 text-navy-foreground shadow-card transition-all duration-300 hover:border-gold/80 select-none cursor-default">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold text-gold-foreground transition-transform duration-300 group-hover:scale-105">
                    <Calculator className="size-6" aria-hidden />
                  </span>

                </div>
                <h3 className="mt-6 text-2xl font-bold text-white transition-colors group-hover:text-gold">
                  Maths Mastery
                </h3>
                <p className="mt-2 text-base font-semibold text-gold">
                  (Classes 7, 8, 9 &amp; 10)
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed text-justify">
                  Building strong conceptual foundations, mathematical reasoning, analytical thinking, and exam confidence.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-gold">
                <span>Explore Course</span>
                <ArrowRight className="size-4" aria-hidden />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Commented 2 Previous Cards as requested ──
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal variant="slide-left">
            <div className="h-full rounded-2xl border-2 border-gold/50 bg-navy-pattern p-8 text-navy-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-gold-foreground">
                <Rocket className="size-4" aria-hidden /> STEM Foundation Programme
              </span>
              <h2 className="mt-5 text-2xl font-semibold"><AceWord dark /> Foundation Programme</h2>
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
        */}
      </section>

      {/* ── What We Offer – 6 Programmes Splash Bento Section (Commented out) ── */}
      {/* <ProgrammesSplashSection /> */}

      {/* ── Language & Test Series (Commented out) ──
      <section className="container-ace py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal variant="slide-left">
            <div className="h-full rounded-2xl border-2 border-sky-border/40 bg-sky p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                <Languages className="size-4" aria-hidden /> Language Enrichment
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-primary">Language Support – Hindi &amp; Kannada</h2>
              <p className="mt-3 text-muted-foreground text-justify">
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
              <p className="mt-3 text-muted-foreground text-justify">
                A structured assessment programme designed to evaluate students' understanding, strengthen subject knowledge and improve
                examination readiness. Regular tests, performance analysis and feedback help students identify learning gaps.
              </p>
              <p className="mt-3 text-sm font-bold italic text-sky-border">Assess. Analyse. Improve. Excel.</p>
            </div>
          </Reveal>
        </div>
      </section>
      */}

      {/* ── ACESET Bento Grid Section (Commented out) ── */}
      {/* <AcesetSection /> */}

      {/* ── Boards CTA (Commented out) ──
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
                Enquire Now
              </a>
              <Link to="/results" className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold hover:border-gold hover:text-gold">
                Meet our achievers <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
      */}

      {/* ── Enquiry Contact Form (Commented out) ── */}
      {/* <ContactSection title={`Enquire for ${contact.admissionYear}`} /> */}
    </>
  );
}
