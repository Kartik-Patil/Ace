import React from "react";
import { Target, Compass, Scale } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./blocks";

interface PillarItem {
  id: "mission" | "vision" | "values";
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

export function VisionMissionValuesSection() {
  const pillars: PillarItem[] = [
    {
      id: "mission",
      label: "MISSION",
      title: "Empowering Academic Excellence",
      description:
        "To deliver quality education through innovative teaching, strong conceptual foundations, individual attention and holistic skill development, empowering every student to achieve their academic goals and excel beyond the classroom.",
      icon: Target,
      delay: 100,
    },
    {
      id: "vision",
      label: "VISION",
      title: "Nurturing Confident Learners",
      description:
        "To nurture confident, knowledgeable and independent learners by creating an enriching academic environment that inspires curiosity, builds competence and prepares students for a successful future.",
      icon: Compass,
      delay: 250,
    },
    {
      id: "values",
      label: "VALUES",
      title: "Integrity, Clarity & Student-First Growth",
      description:
        "Cultivating character, conceptual depth, ethical discipline and genuine self-confidence, ensuring every student develops the moral compass and academic resilience to thrive in life.",
      icon: Scale,
      delay: 400,
    },
  ];

  return (
    <section className="container-ace py-16 sm:py-20 lg:py-24">
      {/* ── Section Heading ── */}
      <Reveal variant="fade-up">
        <SectionHeading
          eyebrow=""
          title="Vision, Mission &amp; Values"
          intro=""
        />
      </Reveal>

      {/* ── 3 Separate Clean Cards with One-by-One Sliding Animation ── */}
      <div className="mt-12 space-y-6 sm:space-y-8">
        {pillars.map((item) => {
          const IconComponent = item.icon;
          return (
            <Reveal
              key={item.id}
              variant="slide-right"
              delay={item.delay}
              duration={700}
            >
<<<<<<< HEAD
              <div className="rounded-2xl sm:rounded-3xl bg-card border-2 border-border/80 shadow-card hover:shadow-lift transition-all duration-300 overflow-hidden">
=======
              <div className="rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200/80 shadow-card hover:border-[#fdb435] hover:scale-[1.02] hover:shadow-lift transition-all duration-300 overflow-hidden">
>>>>>>> c8fd4d4 (day 7 commit)
                {/* ── Desktop & Tablet View (>= sm) ── */}
                <div className="hidden sm:flex min-h-[160px] items-stretch">
                  {/* Left Navy Panel with Scalloped Curve (exact logo blue #2a2273) */}
                  <div className="w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 bg-[#2a2273] text-white relative flex items-center justify-between pl-6 sm:pl-8 pr-2 py-6">
                    {/* SVG Scallop Lobe attached to the right edge */}
                    <svg
                      aria-hidden="true"
                      preserveAspectRatio="none"
                      viewBox="0 0 40 160"
                      className="absolute top-0 -right-7 sm:-right-8 h-full w-7 sm:w-8 pointer-events-none text-[#2a2273] fill-current"
                    >
                      <path d="M 0,0 L 5,0 C 5,30 36,45 36,80 C 36,115 5,130 5,160 L 0,160 Z" />
                    </svg>

                    {/* Big Bold Label in Gold */}
                    <span className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-[#fdb435]">
                      {item.label}
                    </span>

                    {/* Circular Badge with Right-pointing Arrow tip */}
                    <div
                      className="absolute -right-6 sm:-right-7 top-1/2 -translate-y-1/2 z-20 flex items-center"
                      style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.25))" }}
                    >
                      <div className="relative flex items-center justify-center size-13 sm:size-15 rounded-full bg-[#2a2273] border-[3.5px] border-[#fdb435] transition-transform hover:scale-105">
                        <IconComponent className="size-6 text-[#fdb435]" aria-hidden="true" />
                        {/* Right-pointing Arrow tip matching reference */}
                        <div
                          className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[#fdb435]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Content: Title & Description */}
<<<<<<< HEAD
                  <div className="flex-1 bg-card pl-11 sm:pl-14 md:pl-16 pr-6 sm:pr-8 md:pr-10 py-6 sm:py-7 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium text-justify">
=======
                  <div className="flex-1 bg-white pl-11 sm:pl-14 md:pl-16 pr-6 sm:pr-8 md:pr-10 py-6 sm:py-7 flex flex-col justify-center">
                    <h3 className="inline-block w-fit rounded-xl bg-[#2a2273] px-4 py-2 font-display text-xl sm:text-2xl font-bold text-[#fdb435] tracking-tight shadow-xs">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 font-medium text-justify">
>>>>>>> c8fd4d4 (day 7 commit)
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* ── Mobile View (< sm) ── */}
                <div className="sm:hidden flex flex-col">
                  {/* Top Navy Header with Label & Badge */}
                  <div className="bg-[#2a2273] text-white px-5 py-3.5 flex items-center justify-between">
                    <span className="font-display text-lg font-extrabold uppercase tracking-wider text-[#fdb435]">
                      {item.label}
                    </span>
                    <div className="flex items-center justify-center size-11 rounded-full bg-[#2a2273] border-[3px] border-[#fdb435]">
                      <IconComponent className="size-5 text-[#fdb435]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content: Clean Title & Description */}
<<<<<<< HEAD
                  <div className="p-5 bg-card">
                    <h3 className="text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium text-justify">
=======
                  <div className="p-5 bg-white">
                    <h3 className="inline-block w-fit rounded-xl bg-[#2a2273] px-3.5 py-1.5 font-display text-lg font-bold text-[#fdb435] shadow-xs">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium text-justify">
>>>>>>> c8fd4d4 (day 7 commit)
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
