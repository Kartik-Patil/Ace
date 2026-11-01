import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import study from "@/assets/study-illustration.jpg";
import { AchieverCard, Faq, SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { SectionTabs } from "@/components/ace/SectionTabs";
import { Reveal } from "@/components/ace/Reveal";
import { RollingNumber } from "@/components/ace/RollingNumber";
import { achieverGroups, boards, contact, programs } from "@/data/ace";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2027–28 & Achievers | ACE Education, Hubballi" },
      { name: "description", content: "Admissions open for 2027–28 at ACE, Hubballi. Programs for Classes VIII–X (ICSE, CBSE, State). Meet our 2025–26 NEET, JEE and board achievers." },
      { property: "og:title", content: "ACE Admissions 2027–28 — From Concepts to Confidence" },
      { property: "og:description", content: "Programs for Classes VIII, IX & X in Hubballi. See ACE's 2025–26 achievers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-pattern text-navy-foreground">
        <div className="container-ace grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-gold-foreground">
              <Sparkles className="size-4" aria-hidden /> Admission Open · Academic Year {contact.admissionYear}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              From Concepts <span className="italic text-gold">to Confidence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-85">
              Programs for students of Classes VIII, IX & X, built to strengthen school learning and prepare them for what comes next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquire" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5">
                Enquire for admission <ArrowRight className="size-4" aria-hidden />
              </a>
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold transition hover:border-gold hover:text-gold">
                <Phone className="size-4" aria-hidden /> {contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative fade-up [animation-delay:150ms]">
            <img src={study} alt="Students studying science and maths together" width={1280} height={960} className="rounded-3xl border-4 border-gold/70 object-cover shadow-lift" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-card p-4 text-card-foreground shadow-lift">
              <p className="font-display text-3xl font-bold text-primary">
                <RollingNumber value="11" />
              </p>
              <p className="text-xs font-semibold text-muted-foreground">achievers in {contact.achieversYear}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boards & programs bar */}
      <Reveal variant="fade-in">
        <section className="border-b bg-card">
          <div className="container-ace flex flex-wrap items-center gap-x-8 gap-y-3 py-6 text-sm font-semibold text-primary">
            <span className="text-muted-foreground">Classes VIII · IX · X</span>
            {boards.map((b) => <span key={b} className="rounded-full border-2 border-sky-border/50 px-3 py-1">{b}</span>)}
            <span className="hidden h-5 w-px bg-border md:block" />
            {programs.map((p) => <span key={p.id}>{p.name}</span>)}
          </div>
        </section>
      </Reveal>

      {/* Achievers */}
      <section id="achievers" className="container-ace scroll-mt-24 py-20">
        <Reveal variant="fade-up">
          <SectionHeading eyebrow={`Academic Year ${contact.achieversYear}`} title="Our achievers" intro="Results exactly as reported by ACE for the 2025–26 academic year." />
        </Reveal>
        <div className="mt-12 space-y-14">
          {achieverGroups.map((g, gi) => (
            <div key={g.id}>
              <Reveal variant="slide-left" delay={gi * 50}>
                <h3 className="mb-5 inline-block rounded-full bg-sky px-4 py-1.5 text-lg font-semibold text-primary">{g.title}</h3>
              </Reveal>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {g.students.map((s, si) => (
                  <Reveal key={s.name} variant="zoom-in" delay={si * 80}>
                    <AchieverCard a={s} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">*AIR as printed on the ACE flyer.</p>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-secondary py-16">
        <div className="container-ace">
          <Reveal variant="fade-up">
            <SectionHeading eyebrow="Voices" title="Student & parent testimonials" />
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <div className="mt-6 rounded-2xl border-2 border-dashed border-sky-border/40 bg-card p-8 text-muted-foreground">
              Testimonials from ACE students and parents will be added here soon.
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-ace grid gap-10 py-20 lg:grid-cols-[1fr_1.5fr]">
        <Reveal variant="slide-left">
          <SectionHeading eyebrow="FAQ" title="Questions parents ask" intro="Can't find your answer? Call us on +91 91484 86661." />
        </Reveal>
        <Reveal variant="slide-right">
          <Faq />
        </Reveal>
      </section>

      <SectionTabs />
      <ContactSection />
    </>
  );
}
