import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  Cpu,
  Cog,
  Calculator,
  FlaskConical,
  Brain,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import { ContactSection } from "@/components/ace/ContactSection";
import stemFoundationBanner from "@/assets/STEMFoundation-Banner.png";

export const Route = createFileRoute("/stem-foundation")({
  head: () => ({
    meta: [
      { title: "ACE STEM Foundation (Classes 7, 8, 9 & 10) | ACE Hubballi" },
      {
        name: "description",
        content:
          "ACE STEM Foundation is a specialized enrichment program for classes 7, 8, 9 & 10 designed to build strong foundations in Science, Technology, Engineering & Mathematics beyond traditional textbook learning.",
      },
    ],
  }),
  component: StemFoundationPage,
});

const areasOfStudy = [
  {
    number: "",
    title: "Scientific Thinking",
    description: "Develop curiosity, observation & scientific reasoning.",
    icon: Atom,
    accent: "from-sky-500/20 to-blue-500/10 text-sky-600 border-sky-400/40",
    badge: "",
  },
  {
    number: "",
    title: "Technology Awareness",
    description: "Understand emerging technologies and their practical applications.",
    icon: Cpu,
    accent: "from-indigo-500/20 to-purple-500/10 text-indigo-600 border-indigo-400/40",
    badge: "",
  },
  {
    number: "",
    title: "Engineering Concepts",
    description: "Explore design thinking, innovation and practical problem solving.",
    icon: Cog,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-600 border-amber-400/40",
    badge: "",
  },
  {
    number: "",
    title: "Mathematical Excellence",
    description: "Strengthen numerical ability, logical thinking and analytical skills.",
    icon: Calculator,
    accent: "from-blue-500/20 to-cyan-500/10 text-blue-600 border-blue-400/40",
    badge: "",
  },
  {
    number: "",
    title: "Experimental Learning",
    description: "Learn through experiments, demonstrations, projects and activities.",
    icon: FlaskConical,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-600 border-emerald-400/40",
    badge: "",
  },
  {
    number: "",
    title: "Aptitude Development",
    description: "Enhance mental ability, reasoning and critical thinking.",
    icon: Brain,
    accent: "from-gold/20 to-amber-500/10 text-gold-foreground border-gold/40",
    badge: "",
  },
];

const differentiators = [
  "Strong Conceptual Foundation in Science and Mathematics",
  "Learning through experiments and practical applications",
  "Activity-based and interactive teaching methodology",
  "Development of analytical and logical reasoning",
  "Exposure to innovation, creativity and problem solving",
  "Preparation for advance academic learning",
  "Best-in-Class Study Material",
  "Dedicated Teachers to inspire, guide and motivate students",
];

function StemFoundationPage() {
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
            ACE STEM Foundation · Class 7, 8, 9 &amp; 10th
          </span>
        </div>
      </div>

      {/* ── Hero Banner Section (Full width edge-to-edge, zero negative space) ── */}
      <section className="w-full bg-navy-pattern overflow-hidden">
        <img
          src={stemFoundationBanner}
          alt="ACE STEM Foundation"
          className="w-full h-auto block"
          width={2048}
          height={768}
          loading="eager"
        />
      </section>

      {/* ── About ACE STEM Foundation ── */}
      <section className="container-ace py-10 sm:py-14">
        <Reveal variant="fade-up">
          <div className="w-full space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">

              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">

              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium text-justify">
              ACE STEM Foundation is a specialized enrichment program for class 8, 9 &amp; 10 designed to build strong foundations in Science, Technology, Engineering &amp; Mathematics beyond traditional textbook learning. The program focuses on concept clarity, analytical thinking, problem-solving and real life application, helping students gain the confidence required for higher studies and future competitive exams, for those who intend to pursue their career in Medical, Engineering and Pure Science. The program encourages curiosity, creativity and scientific temperament at an early stage, preparing Young minds not just for exams, but for tomorrows challenges and opportunities too.
            </p>

            {/* Quote / Statement in bold black font */}
            <div className="rounded-2xl border-l-4 border-gold bg-slate-100/80 p-6 sm:p-8 shadow-sm">
              <p className="text-lg sm:text-xl lg:text-2xl font-black text-black leading-snug tracking-tight text-justify">
                “ACE STEM Foundation, where Curiosity meets Knowledge and Knowledge builds Innovation. We don’t just shape academic success, we build the foundation for ‘A Lifetime of Excellence’.”
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Areas of Study (Infographics Style) ── */}
      <section className="container-ace py-12 sm:py-16 border-t border-slate-100">
        <Reveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">



            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
              Areas of Study
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">

            </p>
          </div>
        </Reveal>

        {/* Infographic Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {areasOfStudy.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} variant="fade-up" delay={idx * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 sm:p-7 shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift text-slate-700">
                  <div>
                    {/* Icon & Title on the same line in Dark Blue Box with Golden Words */}
                    <h3 className="flex items-center gap-3 rounded-xl bg-[#2a2273] px-4 py-2.5 font-display text-lg sm:text-xl font-bold leading-snug text-[#fdb435] tracking-tight shadow-xs">
                      <Icon className="size-5 shrink-0 text-[#fdb435]" aria-hidden />
                      <span>{area.title}</span>
                    </h3>

                    {/* Description in Dark Slate on White */}
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium text-justify">
                      {area.description}
                    </p>
                  </div>

                  {/* Bottom accent indicator */}
                  <div className="mt-5 pt-4 border-t border-slate-200/80" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── What makes ACE STEM Foundation different? ── */}
      <section className="container-ace py-14 sm:py-20 border-t border-slate-100 bg-slate-50/60">
        <Reveal variant="fade-up">
          <div className="w-full">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">



            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Why ACE STEM Foundation ?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium text-justify">

              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((diff, index) => (
                <Reveal key={index} variant="fade-up" delay={index * 50}>
                  <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:scale-[1.03] hover:border-[#fdb435] hover:shadow-lift hover:-translate-y-0.5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#2a2273] text-[#fdb435] mt-0.5">
                      <CheckCircle2 className="size-5" />
                    </span>
                    <p className="font-bold text-slate-800 text-base sm:text-lg leading-snug text-justify">
                      {diff}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Our Vision ── */}
      <section className="container-ace py-14 sm:py-20">
        <Reveal variant="zoom-in">
          <div className="w-full rounded-3xl border-2 border-gold/60 bg-navy-pattern p-8 sm:p-14 text-navy-foreground shadow-lift relative overflow-hidden text-center">
            {/* Background ambient glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                <Compass className="size-4" /> Our Vision
              </span>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-center max-w-3xl mx-auto leading-tight">
                “To nurture curious minds, develop scientific thinkers and inspire the next generation of problem-solvers.”
              </h3>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  to="/aset-test"
                  className="rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2"
                >
                  Join Now! <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/courses"
                  className="rounded-full border-2 border-white/40 px-8 py-3.5 font-bold text-white hover:border-gold hover:text-gold transition-colors"
                >
                  Explore All Courses
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      {/* ── Contact Section ── */}
      <div id="enquire">
        <ContactSection title="Enquire for ACE STEM Foundation" variant="white" />
      </div>
    </div>
  );
}
