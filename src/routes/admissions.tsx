import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import study from "@/assets/study-illustration.jpg";
import { Faq, SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import { WhyParentsTrustRadialSection } from "@/components/ace/WhyParentsTrustRadialSection";
import { EducationalPhilosophyWaveSection } from "@/components/ace/EducationalPhilosophyWaveSection";
import { CommitmentsInfographicSection } from "@/components/ace/CommitmentsInfographicSection";
import { AdmissionPathwayPuzzleSection } from "@/components/ace/AdmissionPathwayPuzzleSection";
import { boards, contact } from "@/data/ace";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Join ACE | Why Parents Choose ACE Education, Hubballi" },
      {
        name: "description",
        content:
          "Discover why parents in Hubballi choose ACE for Classes 8, 9 & 10. Strong conceptual foundations, experiential learning, individual mentoring, and academic excellence.",
      },
      { property: "og:title", content: "Join ACE — Why Parents Choose ACE Education" },
      {
        property: "og:description",
        content:
          "From Concepts to Confidence. Learn why 500+ students and parents trust ACE for ICSE, CBSE and State Board excellence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdmissionsPage,
});

export function AdmissionsPage() {
  // ── Entire Admissions page commented out as requested ──
  return null;

  /*
  return (
    <>
      <section className="relative overflow-hidden bg-navy-pattern text-navy-foreground">
        <div className="container-ace grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs sm:text-sm font-bold text-gold-foreground shadow-sm">
              <Sparkles className="size-4" aria-hidden /> Admissions Open · Academic Year {contact.admissionYear}
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              Where Curiosity Becomes Clarity.{" "}
              <span className="relative inline-block">
                <span className="italic text-gold">Confidence Follows.</span>
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 text-gold overflow-visible"
                  viewBox="0 0 320 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5C65 2.5 190 2 317 7.5"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed opacity-90 font-medium text-justify">
              At <AceWord dark /> Education, Hubballi, we believe every child possesses the potential to achieve extraordinary things when guided with purposeful mentorship, conceptual clarity and an inspiring learning environment.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-bold text-gold">
              <span className="rounded-full bg-white/10 px-3 py-1.5 border border-white/15">
                ★ 500+ Students Guided
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 border border-white/15">
                ★ Classes 8, 9 &amp; 10
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 border border-white/15">
                ★ ICSE · CBSE · State Board
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 border border-white/15">
                ★ Up to 100% Scholarship
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Enquire Now <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold transition hover:border-gold hover:text-gold"
              >
                <Phone className="size-4 text-emerald-400" aria-hidden /> WhatsApp Admissions
              </a>
            </div>
          </div>

          <div className="relative fade-up [animation-delay:150ms]">
            <div className="relative overflow-hidden rounded-3xl border-4 border-gold/70 shadow-lift">
              <img
                src={study}
                alt="Students studying science and mathematics collaboratively at ACE Education Hubballi"
                width={1280}
                height={960}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-widest text-gold font-bold">The ACE Learning Environment</p>
                <p className="text-sm sm:text-base font-semibold mt-1">
                  &ldquo;We don&apos;t just teach students what to learn. We inspire them to understand, explore, question and grow.&rdquo;
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 sm:left-4 rounded-2xl bg-card p-4 text-card-foreground shadow-lift border border-border">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-gold text-gold-foreground font-black text-xl">
                  ✓
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-primary">From Concepts to Confidence</p>
                  <p className="text-xs text-muted-foreground font-medium">Hubballi&apos;s Dedicated Academic Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal variant="fade-in">
        <section className="border-b bg-card py-5">
          <div className="container-ace flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-primary">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-gold-foreground font-bold">
                Target Classes
              </span>
              <span className="font-bold">Class 8 · Class 9 · Class 10</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Supported Boards:</span>
              {boards.map((b) => (
                <span key={b} className="rounded-full border border-sky-border/60 bg-sky/40 px-3 py-0.5 text-xs font-bold">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <WhyParentsTrustRadialSection />

      <EducationalPhilosophyWaveSection />

      <CommitmentsInfographicSection />

      <AdmissionPathwayPuzzleSection />

      <section className="container-ace grid gap-10 py-20 lg:grid-cols-[1fr_1.5fr]">
        <Reveal variant="slide-left">
          <SectionHeading
            eyebrow="Parent FAQ"
            title="Questions Parents Ask Before Joining"
            intro="We understand that choosing the right academic partner for your child is an important decision. If you have any additional questions, call us directly on +91 91484 86661."
          />
          <div className="mt-8 rounded-2xl border-2 border-gold/40 bg-sky/50 p-6">
            <h4 className="font-display font-bold text-primary">Need in-person guidance?</h4>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Visit us at Lakeside Commercial Complex, Opp. Tolankere, Hubballi for a direct consultation with our academic directors.
            </p>
            <a
              href={contact.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-bold text-xs text-primary hover:text-gold"
            >
              <Phone className="size-3.5" /> Call {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal variant="slide-right">
          <Faq />
        </Reveal>
      </section>

      <ContactSection title={`Enquire for Admission (${contact.admissionYear})`} />
    </>
  );
  */
}
