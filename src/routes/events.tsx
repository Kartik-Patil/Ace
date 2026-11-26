import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Sparkles, MapPin, ArrowRight, Clock, Award, Users } from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { contact } from "@/data/ace";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Workshops | ACE Education, Hubballi" },
      {
        name: "description",
        content:
          "Upcoming academic seminars, ACESET scholarship tests, science exhibitions, and parent orientation workshops at ACE Education, Hubballi.",
      },
      { property: "og:title", content: "Events & Workshops | ACE Education, Hubballi" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EventsPage,
});

const upcomingEvents = [
  {
    id: "aceset-2027",
    title: "ACESET 2027–28: Mega Scholarship Entrance Test",
    date: "Upcoming Sunday Batches",
    time: "10:00 AM – 12:30 PM",
    venue: "ACE Campus, Lakeside Complex, Hubballi",
    badge: "Scholarship Test",
    badgeColor: "bg-gold/15 text-gold-foreground border-gold/30",
    desc: "Diagnostic subject readiness assessment for students entering Classes 7th, 8th, 9th & 10th. Merit scholarships up to 100% available.",
    highlights: ["NCERT syllabus evaluation", "1-on-1 parent counselling", "Personalized performance report"],
  },
  {
    id: "stem-workshop",
    title: "Beyond Classroom: Live Science & Math Experiment Fair",
    date: "Every 2nd Saturday",
    time: "4:00 PM – 6:30 PM",
    venue: "ACE Science & Innovation Lab",
    badge: "Experiential Learning",
    badgeColor: "bg-sky text-sky-border border-sky-border/40",
    desc: "Hands-on scientific demonstrations, model building, and practical physics experiments designed to spark natural curiosity and eliminate textbook fear.",
    highlights: ["Interactive optics & mechanics", "Math puzzles & logic drills", "Open to all enrolled students"],
  },
  {
    id: "board-orientation",
    title: "Class 10 Board Excellence & Exam Strategy Seminar",
    date: "Quarterly Interactive Session",
    time: "11:00 AM – 1:00 PM",
    venue: "Main Auditorium, Hubballi",
    badge: "Parent & Student Seminar",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Comprehensive roadmap session for ICSE, CBSE & State Board parents. Guidance on time management, answer writing presentation, and stress-free preparation.",
    highlights: ["Topper answer sheet insights", "Mindfulness & anxiety control", "Faculty Q&A session"],
  },
];

function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-pattern text-navy-foreground py-16 md:py-24">
        <div className="container-ace text-center max-w-3xl mx-auto">
          <div className="fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-gold-foreground uppercase tracking-widest shadow-sm">
              <Sparkles className="size-3.5" /> Academic Events &amp; Workshops
            </span>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-center">
              Where Learning Meets <span className="italic text-gold">Action &amp; Discovery</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg opacity-90 leading-relaxed font-medium text-justify">
              From scholarship diagnostic drives to hands-on science exhibitions and parent mentoring sessions, explore what is happening at ACE Education.
            </p>
          </div>
        </div>
      </section>

      {/* ── Upcoming Events Grid ── */}
      <section className="container-ace py-20">
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Calendar of Events"
            title="Upcoming Workshops &amp; Scholarship Drives"
            intro="Stay informed about upcoming academic seminars, competitive exam bootcamps, and orientation sessions."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3 items-stretch">
          {upcomingEvents.map((ev, i) => (
            <Reveal key={ev.id} variant="fade-up" delay={i * 90}>
              <div className="group h-full flex flex-col justify-between rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-lift hover:border-[#fdb435]">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${ev.badgeColor}`}>
                      {ev.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                      <Clock className="size-3.5" /> {ev.time}
                    </span>
                  </div>

                  <h3 className="mt-4 rounded-xl bg-[#2a2273] px-4 py-2.5 font-display text-xl font-bold text-[#fdb435] shadow-xs">
                    {ev.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Calendar className="size-4 text-sky-border" />
                    <span>{ev.date}</span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-4 text-gold" />
                    <span className="truncate">{ev.venue}</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed text-justify">
                    {ev.desc}
                  </p>

                  <ul className="mt-4 space-y-2 border-t pt-3 text-xs font-semibold text-primary">
                    {ev.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Award className="size-3.5 text-gold shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <a
                    href="#enquire"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition"
                  >
                    Register for Event <ArrowRight className="size-3.5" />
                  </a>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-gold/15 text-gold-foreground px-3.5 py-1 text-xs font-bold hover:bg-gold transition"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Partner / School Event Banner ── */}
      <section className="bg-secondary/60 py-16 border-y border-border">
        <div className="container-ace flex flex-col items-center gap-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-border mb-2">
              <Users className="size-4" /> Institutional Seminars
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
              Want ACE to host a STEM or Exam Strategy Workshop at your school?
            </h3>
<<<<<<< HEAD
            <p className="mt-2 text-sm text-muted-foreground max-w-xl text-justify">
=======
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto text-center">
>>>>>>> c8fd4d4 (day 7 commit)
              We conduct custom academic workshops for school students from Classes 7th to 10th on conceptual clarity and exam confidence.
            </p>
          </div>
          <a
            href="/partner"
            className="rounded-full bg-gold px-7 py-3 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-md shrink-0"
          >
            Partner with Us
          </a>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

