import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { AchieverCard, Faq, SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import { achieverGroups, contact } from "@/data/ace";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Our Achievers | ACE – Education Redefined, Hubballi" },
      { name: "description", content: `Meet ACE's ${contact.achieversYear} achievers — NEET, IIT JEE and board exam toppers from Hubballi.` },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-pattern text-navy-foreground">
        <div className="container-ace py-16 text-center md:py-24">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-gold-foreground">
              <Sparkles className="size-4" aria-hidden /> Academic Year {contact.achieversYear}
            </p>
            <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-center">
              Our <span className="italic text-gold">Achievers</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg opacity-85 text-justify">
              These results speak for themselves. Congratulations to every student who worked hard and made <AceWord dark /> proud.
            </p>
          </div>
        </div>
      </section>

      {/* ── Achiever groups ── */}
      <section id="achievers" className="container-ace scroll-mt-24 py-20">
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow={`Academic Year ${contact.achieversYear}`}
            title="Results that inspire"
            intro={<>Results exactly as reported by <AceWord /> for the 2025–26 academic year.</>}
          />
        </Reveal>
        <div className="mt-12 space-y-16">
          {achieverGroups.map((g, gi) => (
            <div key={g.id}>
              <Reveal variant="slide-left" delay={gi * 60}>
                <h3 className="mb-6 inline-block rounded-full bg-sky px-4 py-1.5 text-lg font-semibold text-primary">{g.title}</h3>
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
        <p className="mt-6 text-xs text-muted-foreground">*AIR as printed on the <AceWord /> flyer.</p>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-secondary py-20">
        <div className="container-ace grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <Reveal variant="slide-left">
            <SectionHeading eyebrow="FAQ" title="Questions parents ask" intro="Can't find your answer? Call us on +91 91484 86661." />
          </Reveal>
          <Reveal variant="slide-right">
            <Faq />
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
