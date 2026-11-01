import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Sparkles,
  BookOpen,
  Compass,
  Lightbulb,
  Trophy,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { RollingNumber } from "@/components/ace/RollingNumber";
import { ExamReadySection } from "@/components/ace/ExamReadySection";
import { AceWord } from "@/components/ace/AceWord";
import { contact } from "@/data/ace";
import study from "@/assets/study-illustration.jpg";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "ACE Experience | ACE – Education Redefined, Hubballi" },
      {
        name: "description",
        content:
          "ACE Education, Hubballi — From Concepts to Confidence. Programmes for Classes 8, 9 & 10. Established in 2022 | 500+ Students | Academic Excellence & Beyond Classroom Learning.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "500+", label: "Students Guided" },
  { value: "2020", label: "Established" },
  { value: "5", label: "Classes (VIII · IX · X . PU-I . PU-II)" },
  { value: "100%", label: "Conceptual Focus" },
];

const commitments = [
  {
    icon: BookOpen,
    tag: "PCMB Mastery",
    title: "Build Strong Foundations",
    description: "Develop conceptual understanding in Physics, Chemistry, Mathematics and Biology.",
    cardBg: "bg-gradient-to-br from-blue-500/15 via-indigo-500/5 to-card border-blue-200/80 hover:border-blue-400 hover:shadow-blue-500/20",
    iconBg: "bg-blue-600 text-white shadow-md shadow-blue-500/30",
    tagBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: Compass,
    tag: "Hands-on Learning",
    title: "Promote Beyond Classroom Learning",
    description: "Encourage experiential, activity-based and application-oriented learning.",
    cardBg: "bg-gradient-to-br from-emerald-500/15 via-teal-500/5 to-card border-emerald-200/80 hover:border-emerald-400 hover:shadow-emerald-500/20",
    iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-500/30",
    tagBg: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: Lightbulb,
    tag: "Critical Thinking",
    title: "Develop Essential Skills",
    description: "Strengthen communication, analytical thinking, creativity and problem-solving abilities.",
    cardBg: "bg-gradient-to-br from-amber-500/15 via-orange-500/5 to-card border-amber-200/80 hover:border-amber-400 hover:shadow-amber-500/20",
    iconBg: "bg-amber-500 text-white shadow-md shadow-amber-500/30",
    tagBg: "bg-amber-100 text-amber-900",
  },
  {
    icon: Trophy,
    tag: "Exam Ready",
    title: "Ensure Academic Excellence",
    description: "Provide structured Board Support and Foundation training to improve academic performance.",
    cardBg: "bg-gradient-to-br from-purple-500/15 via-violet-500/5 to-card border-purple-200/80 hover:border-purple-400 hover:shadow-purple-500/20",
    iconBg: "bg-purple-600 text-white shadow-md shadow-purple-500/30",
    tagBg: "bg-purple-100 text-purple-700",
  },
  {
    icon: ShieldCheck,
    tag: "Fear-Free Prep",
    title: "Build Confidence",
    description: "Help students overcome examination fear through regular assessments, mentoring and personalised guidance.",
    cardBg: "bg-gradient-to-br from-rose-500/15 via-pink-500/5 to-card border-rose-200/80 hover:border-rose-400 hover:shadow-rose-500/20",
    iconBg: "bg-rose-500 text-white shadow-md shadow-rose-500/30",
    tagBg: "bg-rose-100 text-rose-700",
  },
];

function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-pattern text-navy-foreground">
        <div className="container-ace grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-gold-foreground uppercase tracking-widest">
              <Sparkles className="size-3.5" aria-hidden /> Admissions Open · {contact.admissionYear}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              From Concepts <span className="italic text-gold">to Confidence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-90">
              At <AceWord dark /> Education, Hubballi, we believe that every student has the potential to excel when guided with the right knowledge, mentorship and learning environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5"
              >
                Enquire for admission <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold transition hover:border-gold hover:text-gold"
              >
                <Phone className="size-4" aria-hidden /> {contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative fade-up [animation-delay:150ms]">
            <img
              src={study}
              alt="Students studying science and maths together"
              width={1280}
              height={960}
              className="rounded-3xl border-4 border-gold/70 object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-card p-4 text-card-foreground shadow-lift">
              <p className="font-display text-3xl font-bold text-primary">
                <RollingNumber value="500+" />
              </p>
              <p className="text-xs font-semibold text-muted-foreground">students guided since 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b bg-card">
        <div className="container-ace grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="fade-up" delay={i * 80} className="text-center">
              <p className="font-display text-4xl font-bold text-primary">
                <RollingNumber value={s.value} />
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── About Us Section ── */}
      <section id="about" className="container-ace scroll-mt-24 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal variant="slide-left">
            <SectionHeading
              eyebrow={<>About Us – <AceWord /> Education, Hubballi</>}
              title={<>Academic Excellence &amp; <span className="italic text-primary">Beyond Classroom Learning</span></>}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Established in 2022, <AceWord /> has grown into a dedicated learning centre, having guided and supported 500+ students on their academic journey. We are committed to nurturing young minds through quality education, personalised mentoring and a strong foundation in essential academic concepts.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We specialise in Foundation Programmes and Board Examination Support for Classes 8, 9 and 10, with a focus on building conceptual clarity, strengthening analytical abilities and developing problem-solving skills.
            </p>
          </Reveal>

          <Reveal variant="slide-right">
            <div className="space-y-6">
              <div className="group rounded-2xl border-2 border-sky-border/40 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-border hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <Sparkles className="size-5 text-gold" aria-hidden />
                  </span>
                  <span className="rounded-full bg-sky px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-sky-border/30">
                    Interactive Learning
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">
                  Beyond Textbooks &amp; Classroom Teaching
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  At <AceWord />, education goes beyond textbooks and classroom teaching. We integrate interactive teaching methodologies, experiment-based learning, practical activities and skill development to make learning meaningful, engaging and effective.
                </p>
              </div>

              <div className="group rounded-2xl border-2 border-sky-border/40 bg-sky/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-border hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-gold text-gold-foreground shadow-sm">
                    <Trophy className="size-5" aria-hidden />
                  </span>
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                    Future Readiness
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">
                  Preparing for Future Academic Challenges
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our approach focuses not just on helping students score better marks but also on developing confidence, discipline, critical thinking and independent learning abilities that prepare them for future academic challenges.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Everything you need for your Exam at one place (Bento Grid) ── */}
      <ExamReadySection />

      {/* ── Vision & Mission ── */}
      <section className="container-ace py-20">
        <Reveal variant="fade-up">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Our Vision &amp; Mission"
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <Reveal variant="slide-left">
            <div className="h-full rounded-3xl bg-navy-pattern p-8 text-navy-foreground border-2 border-gold/40 shadow-lift flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Vision</p>
                <h3 className="mt-3 text-2xl font-bold">Nurturing Confident Learners</h3>
                <p className="mt-4 text-base leading-relaxed opacity-90">
                  To nurture confident, knowledgeable and independent learners by creating an enriching academic environment that inspires curiosity, builds competence and prepares students for a successful future.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal variant="slide-right">
            <div className="h-full rounded-3xl border-2 border-sky-border bg-sky p-8 shadow-lift flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border">Our Mission</p>
                <h3 className="mt-3 text-2xl font-bold text-primary">Empowering Academic Excellence</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To deliver quality education through innovative teaching, strong conceptual foundations, individual attention and holistic skill development, empowering every student to achieve their academic goals and excel beyond the classroom.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="bg-navy-pattern py-16 text-navy-foreground">
        <Reveal variant="zoom-in" className="container-ace flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold"><AceWord dark /> Education</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Your Ambition, <span className="italic text-gold">Our Foundation.</span>
          </h2>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-foreground bg-gold px-6 py-2 rounded-full mt-1">
            Learn. Lead. Excel.
          </p>
          <p className="max-w-xl opacity-85 mt-2">
            Discover the right programme for your child and take the first step towards stronger concepts, sharper thinking and greater confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5"
            >
              Explore programmes <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold transition hover:border-gold hover:text-gold"
            >
              Enquire now
            </a>
          </div>
        </Reveal>
      </section>

      <ContactSection />
    </>
  );
}
