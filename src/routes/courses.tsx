import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenCheck, ClipboardCheck, Languages, Rocket } from "lucide-react";
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
      </section>

      {/* ── What We Offer – 6 Programmes Splash Bento Section ── */}
      <ProgrammesSplashSection />

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

      {/* ── ACESET Bento Grid Section (matching ExamReadySection / EduRev design) ── */}
      <AcesetSection />

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
