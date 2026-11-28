import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  GraduationCap,
  BookOpenCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Play,
  BookOpen,
  TrendingUp,
  Users,
  HeartHandshake,
  Brain,
  PenTool,
  ClipboardCheck,
  Lightbulb,
} from "lucide-react";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import { ContactSection } from "@/components/ace/ContactSection";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import boardPrepBanner from "@/assets/BoardPrep-Banner.png";

export const Route = createFileRoute("/board-prep")({
  head: () => ({
    meta: [
      { title: "ACE Board Prep (CBSE Classes VII–X) | ACE Hubballi" },
      {
        name: "description",
        content:
          "ACE Board Prep is a structured Board-Exam support program designed for CBSE students from Class VII to X at ACE Hubballi.",
      },
    ],
  }),
  component: BoardPrepPage,
});

const batchInfo = [
  {
    icon: Calendar,
    label: "Start Date",
    value: "1st Week of April",
    detail: "( 7th, 8th & 9th & 10th )",
  },
  {
    icon: GraduationCap,
    label: "Classroom Learning",
    value: "7th std to 10th std",
    detail: "Comprehensive Coaching",
  },
  {
    icon: Sparkles,
    label: "Stream",
    value: "CBSE",
    detail: "Central Board Curriculum",
  },
  {
    icon: Clock,
    label: "Timing",
    value: "5:00 PM to 8:00 PM",
    detail: "Evening Batches",
  },
  {
    icon: BookOpenCheck,
    label: "Subjects",
    value: "Social Science & English Grammar",
    detail: "Complete CBSE Syllabus",
  },
];

const courseFeatures = [
  {
    title: "Offline Coaching",
    description: "Comprehensive classroom teaching with chapter-wise CBSE syllabus coverage.",
    icon: Play,
    image: "/images/feature-icon-offline-coaching.jpg",
  },
  {
    title: "Course Material",
    description: "Concept-oriented notes aligned with NCERT Text-books & chapter-wise Worksheets.",
    icon: BookOpen,
    image: "/images/feature-icon-course-material.jpg",
  },
  {
    title: "Test Series & Analysis",
    description: "Regular offline tests with detailed performance evaluation and progress tracking.",
    icon: TrendingUp,
    image: "/images/feature-icon-test-series.jpg",
  },
  {
    title: "Personal Mentoring",
    description: "Individual monitoring, academic guidance and continuous motivation.",
    icon: Users,
    image: "/images/feature-icon-personal-mentoring.jpg",
  },
  {
    title: "Remedial Support",
    description: "Focused attention to overcome learning gaps and strengthen concepts.",
    icon: HeartHandshake,
    image: "/images/feature-icon-remedial-support.jpg",
  },
];

const whyBoardPrep = [
  {
    number: "",
    title: "Concept Clarity",
    description: "Learn Concepts of PCMB + Social Science + English Grammar with in-depth foundational clarity.",
    icon: Brain,
    badge: "",
  },
  {
    number: "",
    title: "Answer Presentation",
    description: "Express knowledge effectively on paper through structured, board-aligned presentation techniques.",
    icon: PenTool,
    badge: "",
  },
  {
    number: "",
    title: "Exam Pattern Familiarity",
    description: "Know your paper and understand the marking scheme, question patterns, and weightage distribution.",
    icon: ClipboardCheck,
    badge: "",
  },
  {
    number: "",
    title: "Smart Exam Strategies",
    description: "Develop effective strategies to interpret questions and present answers for optimal performance.",
    icon: Lightbulb,
    badge: "",
  },
  {
    number: "",
    title: "Time Management",
    description: "Improve speed and accuracy to complete your question paper calmly and confidently within time limits.",
    icon: Clock,
    badge: "",
  },
  {
    number: "",
    title: "Personal Mentoring",
    description: "Individual attention, continuous guidance, and regular performance review to unlock student potential.",
    icon: Users,
    badge: "",
  },
];

function BoardPrepPage() {
  const { openModal } = useEnquiryModal();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ── Top Navigation Bar ── */}
      <div className="border-b border-slate-100 bg-slate-50/70">
        <div className="container-ace py-4 flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Courses
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">

          </span>
        </div>
      </div>

      {/* ── Hero Banner Section (Full width edge-to-edge, zero negative space) ── */}
      <section className="w-full bg-navy-pattern overflow-hidden">
        <img
          src={boardPrepBanner}
          alt="ACE Board Prep"
          className="w-full h-auto block"
          width={2048}
          height={768}
          loading="eager"
        />
      </section>

      {/* ── Header / Hero Section ── */}
      <section className="container-ace pt-6 sm:pt-8 pb-12">
        <Reveal variant="fade-up">
          <div className="w-full space-y-6">
            <div className="space-y-3 text-center">

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                ACE Board Prep
              </h1>
              <p className="text-lg sm:text-xl font-bold text-gold">

              </p>
            </div>

            {/* Main Overview Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium text-justify">
              ACE Board Prep is a structured Board-Exam support program designed for the students of CBSE from class VII to X. Here the focus is on strong subject foundations, clear conceptual understanding, systematic syllabus coverage, regular assessments and personalized mentoring. The program includes test series that mirror real exam patterns. With individualized attention and remedial classes for gaps, it not only aims for better scores, but for lasting academic strength.
            </p>

            {/* Inspiring Statement Card */}
            <div className="rounded-2xl border-l-4 border-gold bg-slate-50 p-6 sm:p-8 shadow-sm space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl font-black text-black leading-snug tracking-tight text-justify">
                “ACE Board Prep – not just an exam prep, a Foundation for Lifelong Academic Excellence”
              </p>

              {/* Clickable Button navigating to ASET-Test page */}
              <div>
                <Link
                  to="/aset-test"
                  className="rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2 text-base group"
                >
                  <span>Join Now!</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Program Schedule & Details ── */}
      <section className="container-ace py-12 sm:py-16 border-t border-slate-100 bg-slate-50/50">
        <Reveal variant="fade-up">
          <div className="w-full">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">

              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Program Schedule &amp; Details
              </h2>
            </div>

            {/* Single Cohesive Card with all batch information */}
            <div className="rounded-3xl border-2 border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#fdb435] hover:shadow-lift">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {batchInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex flex-col justify-between pt-4 sm:pt-0 sm:px-6 ${idx === 0 ? "first:pt-0 sm:first:pl-2" : ""
                        } ${idx === batchInfo.length - 1 ? "sm:last:pr-2" : ""}`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        {item.label}
                      </span>
                      <div>
                        <h3 className="inline-flex items-center gap-2 rounded-xl bg-[#2a2273] px-3.5 py-2 font-display text-lg sm:text-xl font-extrabold text-[#fdb435] shadow-xs">
                          <Icon className="size-4 shrink-0 text-[#fdb435]" aria-hidden />
                          <span>{item.value}</span>
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 font-semibold">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Course Features ── */}
      <section className="container-ace py-14 sm:py-20 border-t border-slate-100">
        <Reveal variant="fade-up">
          <div className="w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Course Features
              </h2>
            </div>

            {/* 5 Features Grid matching Learning Beyond Books (3 on top, 2 centered below, no images) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 w-full">
              {courseFeatures.map((item, index) => {
                const Icon = item.icon;
                const colSpanClass =
                  index === 3
                    ? "lg:col-span-2 lg:col-start-2 sm:col-span-1"
                    : index === 4
                      ? "lg:col-span-2 sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full"
                      : "lg:col-span-2 sm:col-span-1";

                return (
                  <Reveal key={item.title} variant="fade-up" delay={index * 60} className={colSpanClass}>
                    <div className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 sm:p-7 shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift text-slate-700">
                      <div>
                        <h3 className="flex items-center gap-3 rounded-xl bg-[#2a2273] px-4 py-2.5 font-display text-lg sm:text-xl font-bold leading-snug text-[#fdb435] tracking-tight shadow-xs">
                          <Icon className="size-5 shrink-0 text-[#fdb435]" aria-hidden />
                          <span>{item.title}</span>
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium text-justify">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-[#2a2273]/50 group-hover:text-[#fdb435] transition-colors" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Why Board Prep? (Checklist Bulletin Cards matching Why ACE STEM Foundation) ── */}
      <section className="container-ace py-14 sm:py-20 border-t border-slate-100 bg-slate-50/50">
        <Reveal variant="fade-up">
          <div className="w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Why Board Prep?
              </h2>
            </div>

            {/* Bulletin Checklist Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {whyBoardPrep.map((item, idx) => (
                <Reveal key={item.title} variant="fade-up" delay={idx * 50}>
                  <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:scale-[1.03] hover:border-[#fdb435] hover:shadow-lift hover:-translate-y-0.5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#2a2273] text-[#fdb435] mt-0.5">
                      <CheckCircle2 className="size-5" aria-hidden />
                    </span>
                    <div className="text-justify">
                      <p className="font-bold text-slate-800 text-base sm:text-lg leading-snug">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Ready to Excel CTA ── */}
      <section className="container-ace py-14 sm:py-20">
        <Reveal variant="zoom-in">
          <div className="w-full rounded-3xl border-2 border-gold/60 bg-navy-pattern p-8 sm:p-14 text-navy-foreground shadow-lift relative overflow-hidden text-center">
            <div className="relative z-10 space-y-6">


              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-center max-w-3xl mx-auto leading-tight">
                Build Academic Strength &amp; Excel in Your CBSE Board Exams
              </h3>

              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
                Classes commence 1st Week of April for 7th, 8th, 9th &amp; 10th std students.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
                >
                  Enquire Now <ArrowRight className="size-4" />
                </button>
                <Link
                  to="/aset-test"
                  className="rounded-full border-2 border-white/40 px-8 py-3.5 font-bold text-white hover:border-gold hover:text-gold transition-colors"
                >
                  Register for ASET-Test
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contact Section (Commented out) ── */}
      {/* <div id="enquire">
        <ContactSection title="Enquire for ACE Board Prep" />
      </div> */}
    </div>
  );
}
