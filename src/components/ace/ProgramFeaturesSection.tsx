import React from "react";
import {
  BookOpen,
  FlaskConical,
  Brain,
  Users,
  ClipboardCheck,
  ShieldCheck,
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
    title: "Strong Conceptual Foundations",
    description:
      "We focus on building a clear understanding of fundamental concepts in Physics, Chemistry, Mathematics and Biology, creating a strong base for future academic learning.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Experiential & Activity-Based Learning",
    description:
      "We conduct experiments, demonstrations and hands-on activities make learning practical, engaging and meaningful.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Skills for Holistic Development",
    description:
      "We encourage communication, listening, writing, analytical thinking and problem-solving skills to support student’s overall development.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Interactive & Student-Centric Teaching",
    description:
      "Our teaching methodology motivates student’s active participation, discussion, questioning and collaborative learning.",
    icon: Users,
  },
  {
    number: "05",
    title: "Continuous Assessment & Personalised Guidance",
    description:
      "Our regular assessments, performance monitoring, remedial support and individual mentoring helps the student identify learning gaps and improve continuously.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Confidence & Examination Preparedness",
    description:
      "Our structured practice, regular tests and guided preps assist student to overcome anxiety and approach examinations with confidence.",
    icon: ShieldCheck,
  },
];

export function ProgramFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 border-t border-border">
      <div className="container-ace">
        {/* ── Section Header ── */}
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-border mb-3">
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
            Features of the Program
            <span className="w-6 h-0.5 bg-sky-border inline-block" />
          </p>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Education Beyond <span className="italic text-gold">the Classroom</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium">
            A comprehensive, student-centred framework designed to nurture analytical competence, practical mastery, and lifelong academic confidence.
          </p>
        </Reveal>

        {/* ── 6 Feature Cards with Clean Blue Borders ── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} variant="fade-up" delay={idx * 60}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-sky-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                  <div>
                    {/* Top Row: Icon Badge & Number */}
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-sky-border/40 bg-sky/60 text-primary shadow-2xs transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon className="size-6" />
                      </span>
                      <span className="font-display text-2xl font-black text-sky-border/70 select-none transition-colors group-hover:text-primary">
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-display text-xl font-bold leading-snug text-primary group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent indicator */}
                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-sky-border group-hover:text-primary transition-colors">
                    <span className="size-1.5 rounded-full bg-gold" />
                    <span>ACE Academic Excellence</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

