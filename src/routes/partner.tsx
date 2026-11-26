import { createFileRoute } from "@tanstack/react-router";
import { Handshake, School, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { Reveal } from "@/components/ace/Reveal";
import { contact } from "@/data/ace";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner with Us | ACE Education, Hubballi" },
      {
        name: "description",
        content:
          "Collaborate with ACE Education. Institutional partnerships, school workshops, curriculum integration, and academic faculty exchange in Hubballi.",
      },
      { property: "og:title", content: "Partner with Us | ACE Education, Hubballi" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PartnerPage,
});

const partnershipTracks = [
  {
    icon: School,
    title: "School In-Campus Foundation Modules",
    desc: "Integrate ACE's proprietary PCMB Foundation & Olympiad modules within your school timetable, empowering students with competitive exam readiness without extra evening burden.",
    benefits: [
      "NCERT + Olympiad combined syllabus",
      "Customized morning or weekend slots",
      "Structured terminal assessments and parent reports",
    ],
  },
  {
    icon: Sparkles,
    title: "Experiential Science & Math Bootcamps",
    desc: "Bring our hands-on scientific demonstration lab directly to your school auditorium. Students experience abstract concepts through live physics models and mathematical puzzles.",
    benefits: [
      "Optics, mechanics & chemistry demonstrations",
      "Elimination of rote memorization habits",
      "Comprehensive workbook provided for every attendee",
    ],
  },
  {
    icon: Handshake,
    title: "Educator & Teacher Training Workshops",
    desc: "Collaborative pedagogy workshops for science and mathematics teachers focused on concept-first delivery, diagnostic error detection, and student engagement strategies.",
    benefits: [
      "Modern problem-solving frameworks",
      "Bloom's taxonomy question crafting",
      "Certificate of collaboration with ACE Education",
    ],
  },
];

function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-pattern text-navy-foreground py-16 md:py-24">
        <div className="container-ace text-center max-w-3xl mx-auto">
          <div className="fade-up">

            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-center">
              Partner with <span className="italic text-gold">ACE Education</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg opacity-90 leading-relaxed font-medium text-justify">
              We collaborate with forward-thinking schools, educators, and academic institutions across North Karnataka to build deep conceptual learning ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 Partnership Tracks ── */}
      <section className="container-ace py-20">
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="How We Can Work Together"
            intro="Tailored institutional models designed to elevate academic outcomes for students, teachers, and school reputations."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {partnershipTracks.map((tr, i) => {
            const Icon = tr.icon;

            return (
              <Reveal key={tr.title} variant="fade-up" delay={i * 90}>
                <div className="h-full rounded-3xl border-2 border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:border-[#fdb435] hover:shadow-lift flex flex-col justify-between">
                  <div>
                    <h3 className="flex items-center gap-3 rounded-xl bg-[#2a2273] px-4 py-2.5 font-display text-xl font-bold text-[#fdb435] shadow-xs">
                      <Icon className="size-5 shrink-0 text-[#fdb435]" aria-hidden />
                      <span>{tr.title}</span>
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed text-justify">
                      {tr.desc}
                    </p>

                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">

                      </p>
                      <ul className="space-y-2 text-xs text-muted-foreground font-semibold">
                        {tr.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border">
                    <a
                      href="#partner-form"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition"
                    >
                      Express Interest <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Institutional Inquiry Form ── */}
      <section id="partner-form" className="bg-secondary/40 py-20 border-t border-border">
        <div className="container-ace max-w-2xl mx-auto">
          <div className="rounded-3xl border-2 border-slate-200/80 bg-white p-8 sm:p-10 shadow-lift transition-all duration-300 hover:border-[#fdb435]">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                <ShieldCheck className="size-3.5" /> Official Institutional Desk
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Initiate a Partnership Conversation
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground text-justify">
                Our academic leadership will schedule an in-person or virtual consultation with your school principal or trustee board.
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center text-emerald-900">
                <CheckCircle2 className="size-10 text-emerald-600 mx-auto" />
                <h3 className="mt-3 text-lg font-bold">Proposal Request Received</h3>
                <p className="mt-1 text-xs text-emerald-700">
                  Thank you for reaching out. The ACE Institutional Relations team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-bold text-primary">
                    Institution / School Name *
                    <input
                      required
                      placeholder="e.g. St. Joseph Public School"
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                    />
                  </label>
                  <label className="text-xs font-bold text-primary">
                    Contact Person &amp; Designation *
                    <input
                      required
                      placeholder="e.g. Principal / Academic Dean"
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-bold text-primary">
                    Official Email *
                    <input
                      type="email"
                      required
                      placeholder="e.g. info@school.edu.in"
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                    />
                  </label>
                  <label className="text-xs font-bold text-primary">
                    Contact Number (WhatsApp) *
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                    />
                  </label>
                </div>

                <label className="text-xs font-bold text-primary block">
                  Area of Interest *
                  <select
                    required
                    className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                  >
                    <option value="campus-foundation">In-Campus Foundation Programme</option>
                    <option value="science-bootcamp">Experiential Science &amp; Math Fair</option>
                    <option value="teacher-training">Faculty Training Workshop</option>
                    <option value="general">Other Academic Alliance</option>
                  </select>
                </label>

                <label className="text-xs font-bold text-primary block">
                  Message / Requirements (Optional)
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your student batch size, classes, or specific objectives..."
                    className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full mt-2 rounded-xl bg-gold py-3 text-sm font-bold text-gold-foreground transition hover:opacity-90 shadow-md"
                >
                  Submit Institutional Enquiry
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-semibold">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-1.5 hover:text-primary transition"
              >
                <Phone className="size-3.5 text-gold" /> {contact.phoneDisplay}
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition"
              >
                <Mail className="size-3.5 text-sky-border" /> WhatsApp Institutional Lead
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

