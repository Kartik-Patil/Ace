import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import foundationBanner from "@/assets/foundationpage-banner.png";
import { ProgramCard, SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { SectionTabs } from "@/components/ace/SectionTabs";
import { boards, contact, programs } from "@/data/ace";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs for Classes VIII–X | ACE Education, Hubballi" },
      { name: "description", content: "Bridge Course, Foundation (PCMB & Reasoning), Board Support, Curated Test Series, Math Mastery and Kannada & Hindi support at ACE, Hubballi." },
      { property: "og:title", content: "ACE Programs — Foundation, Board Support & Math Mastery" },
      { property: "og:description", content: "Six programs for Classes VIII, IX & X across ICSE, CBSE and State Board." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramsPage,
});

const steps = [
  { t: "Bridge the gaps", d: "Strengthen concepts, knowledge and skills where the curriculum leaves gaps." },
  { t: "Build the foundation", d: "Move from school learning towards competitive excellence in PCMB & Reasoning." },
  { t: "Test & remediate", d: "Curated tests with structured results and remedial support." },
  { t: "Ace the boards", d: "Comprehensive, NCERT-aligned board preparation." },
];

function ProgramsPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="w-full bg-navy-pattern overflow-hidden">
        <img
          src={foundationBanner}
          alt="ACE Programs — Foundation, Board Support & Math Mastery"
          width={1518}
          height={508}
          className="w-full h-auto block"
          loading="eager"
        />
      </section>

      <section id="programs" className="container-ace scroll-mt-24 py-20">
        <SectionHeading eyebrow="What we offer" title="Six programs, one goal" intro="Each program focuses on one part of a student's growth. Students can combine them as they need." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => <ProgramCard key={p.id} program={p} index={i} />)}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-ace grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our approach" title="How students move forward" />
            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-4 rounded-2xl bg-card p-5 shadow-card">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">{i + 1}</span>
                  <div><p className="font-bold text-primary">{s.t}</p><p className="text-sm text-muted-foreground">{s.d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-navy-pattern p-8 text-navy-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Boards supported</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {boards.map((b) => <span key={b} className="rounded-xl border-2 border-gold px-5 py-3 font-display text-2xl font-semibold">{b}</span>)}
              </div>
            </div>
            <div className="rounded-2xl border-2 border-sky-border/40 bg-card p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border">Why ACE</p>
              <ul className="mt-4 space-y-3 text-sm">
                {["Programs for Classes VIII, IX & X under one roof", "Foundation covering Physics, Chemistry, Maths, Biology & Reasoning", "Morning Math Mastery classes", "Kannada & Hindi language support", "Proven results — see our 2025–26 achievers"].map((x) => (
                  <li key={x} className="flex gap-3"><CheckCircle2 className="size-5 shrink-0 text-success" aria-hidden />{x}</li>
                ))}
              </ul>
              <Link to="/results" hash="achievers" className="mt-5 inline-flex items-center gap-1 font-bold text-sky-border">Meet the achievers <ArrowRight className="size-4" aria-hidden /></Link>
            </div>
          </div>
        </div>
      </section>

      <SectionTabs />
      <ContactSection title={`Enquire for ${contact.admissionYear}`} />
    </>
  );
}
