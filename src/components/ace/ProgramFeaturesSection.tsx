import React from "react";
import {
  BookOpen,
  FlaskConical,
  Brain,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: FeatureItem[] = [
  {
    number: "01",
    title: "Education Beyond the Classroom",
    description:
      "Building Strong Fundamentals through in-depth understanding, clear explanation and practical application of concepts for lasting academic excellence.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Best-in-Class Study Material",
    description:
      "Expertly curated, concept-driven and examination - oriented study resources with structured practice to strengthen problem-solving skills and maximize academic performance.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Activity – Based learning",
    description:
      "Making Learning engaging and meaningful through hands-on activities, interactive experiences and practical applications that spark curiosity and strengthen understanding.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Personalized Guidance & Mentoring",
    description:
      "Individual attention and focused academic guidance to identify learning needs, track progress and help every student achieve their full potential.",
    icon: Users,
  },
  {
    number: "05",
    title: "Remedial & Support Classes",
    description:
      "Focused additional sessions to address learning gaps, strengthen weak areas and build confidence through personalized academic support.",
    icon: ClipboardCheck,
  },
];

export function ProgramFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 border-t border-border">
      <div className="container-ace">
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
            Learning Beyond Books
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium text-justify">
            Our approach nurtures creativity, critical thinking, communication skills, confidence and essential life skills preparing students to succeed both academically and beyond.
          </p>
        </Reveal>

        {/* ── 5 Feature Cards: Row 1 has 3 cards, Row 2 has 2 cards centered in the middle ── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 w-full">
          {features.map((item, idx) => {
            const Icon = item.icon;

            // Positioning: Row 1 has 3 cards (span 2 each). Row 2 has 2 cards: card 3 starts at col 2, card 4 spans 2.
            const colSpanClass =
              idx === 3
                ? "lg:col-span-2 lg:col-start-2 sm:col-span-1"
                : idx === 4
                  ? "lg:col-span-2 sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full"
                  : "lg:col-span-2 sm:col-span-1";
            return (
              <Reveal key={item.number} variant="fade-up" delay={idx * 60} className={colSpanClass}>
                {/* Card with white background, hover-only golden border, hover zoom, and inline icon + dark blue title box */}
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 sm:p-7 shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift text-slate-700">
                  <div>
                    {/* Icon & Title on the same line in Dark Blue Box with Golden Words */}
                    <h3 className="flex items-center gap-3 rounded-xl bg-[#2a2273] px-4 py-2.5 font-display text-lg sm:text-xl font-bold leading-snug text-[#fdb435] tracking-tight shadow-xs">
                      <Icon className="size-5 shrink-0 text-[#fdb435]" aria-hidden />
                      <span>{item.title}</span>
                    </h3>

                    {/* Description in Dark Slate on White */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium text-justify">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent indicator */}
                  <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-[#2a2273]/50 group-hover:text-[#fdb435] transition-colors" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
