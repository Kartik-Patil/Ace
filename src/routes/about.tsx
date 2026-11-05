import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, Compass, Lightbulb, Trophy, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { RollingNumber } from "@/components/ace/RollingNumber";
import { ExamReadySection } from "@/components/ace/ExamReadySection";
import { ProgramFeaturesSection } from "@/components/ace/ProgramFeaturesSection";
import { AceWord } from "@/components/ace/AceWord";
import study from "@/assets/study-illustration.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | ACE Education, Hubballi" },
      {
        name: "description",
        content:
          "About Us – ACE Education, Hubballi. From Concepts to Confidence. Established in 2022 | 500+ Students | Academic Excellence & Beyond Classroom Learning.",
      },
    ],
  }),
  component: AboutPage,
});

const whyAceStrivePoints = [
  {
    icon: BookOpen,
    iconColor: "#e11d48",
    title: "Build Strong Foundations",
    description: "Develop conceptual understanding in Physics, Chemistry, Mathematics and Biology.",
    tag: "PCMB Conceptual Clarity",
  },
  {
    icon: Compass,
    iconColor: "#0d9488",
    title: "Promote Beyond Classroom Learning",
    description: "Encourage experiential, activity-based and application-oriented learning.",
    tag: "Hands-on Practical Science",
  },
  {
    icon: Lightbulb,
    iconColor: "#d97706",
    title: "Develop Essential Skills",
    description: "Strengthen communication, analytical thinking, creativity and problem-solving abilities.",
    tag: "Critical Thinking & Reasoning",
  },
  {
    icon: Trophy,
    iconColor: "#1b365d",
    title: "Ensure Academic Excellence",
    description: "Provide structured Board Support and Foundation training to improve academic performance.",
    tag: "Board & Foundation Mastery",
  },
  {
    icon: ShieldCheck,
    iconColor: "#7c3aed",
    title: "Build Confidence",
    description: "Help students overcome examination fear through regular assessments, mentoring and personalised guidance.",
    tag: "Zero Examination Anxiety",
  },
];

function AboutPage() {
  return (
    <>
      {/* ── Hero: About Us – ACE Education, Hubballi ── */}
      <section className="bg-navy-pattern text-navy-foreground">
        <div className="container-ace grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2.5 rounded-full bg-gold px-5 py-2.5 text-base sm:text-lg font-extrabold text-gold-foreground uppercase tracking-wider shadow-md">
              <Sparkles className="size-5" aria-hidden /> About Us – <AceWord dark /> Education, Hubballi
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.08] md:text-6xl lg:text-7xl">
              From Concepts <span className="italic text-gold">to Confidence</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed opacity-90">
              At <AceWord dark /> Education, Hubballi, we believe that every student has the potential to excel when guided with the right knowledge, mentorship and learning environment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-wider text-gold">
              <span className="rounded-full border-2 border-gold/50 px-4 py-2 bg-navy/60">
                Established in 2022
              </span>
              <span className="rounded-full border-2 border-gold/50 px-4 py-2 bg-navy/60">
                500+ Students
              </span>
              <span className="rounded-full border-2 border-gold/50 px-4 py-2 bg-navy/60">
                Academic Excellence &amp; Beyond Classroom Learning
              </span>
            </div>
          </div>
          <div className="relative fade-up [animation-delay:150ms]">
            <img
              src={study}
              alt="ACE Education students learning together"
              width={1280}
              height={960}
              className="rounded-3xl border-4 border-gold/70 shadow-lift object-cover"
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

      {/* ── About Us Editorial Narrative & WHY ACE? (No cards, reduced negative space, flowing paragraphs) ── */}
      <section className="bg-background py-10 sm:py-14 border-b border-border">
        <div className="container-ace max-w-4xl mx-auto">
          {/* Header & Badges */}
          <div className="border-b-2 border-border/80 pb-6">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary flex flex-wrap items-center gap-3">
              <span className="h-1 w-8 bg-gold inline-block rounded-full" />
              1. About Us – <AceWord /> Education, Hubballi
            </h2>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary">
              From Concepts <span className="italic text-gold">to Confidence</span>
            </h3>
            <p className="mt-3 text-base sm:text-lg font-bold text-muted-foreground flex flex-wrap items-center gap-x-3.5 gap-y-1.5">
              <span className="text-primary font-bold">Established in 2022</span>
              <span className="text-gold font-black text-lg">|</span>
              <span className="text-primary font-bold">500+ Students</span>
              <span className="text-gold font-black text-lg">|</span>
              <span className="text-primary font-bold">Academic Excellence &amp; Beyond Classroom Learning</span>
            </p>
          </div>

          {/* Flowing Narrative Paragraphs */}
          <div className="mt-6 space-y-3.5 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
            <p className="text-base sm:text-lg font-semibold text-primary leading-snug border-l-3 border-gold pl-3.5 py-0.5">
              At <AceWord /> Education, Hubballi, we believe that every student has the potential to excel when guided with the right knowledge, mentorship and learning environment.
            </p>
            <p>
              Established in 2022, <AceWord /> has grown into a dedicated learning centre, having guided and supported 500+ students on their academic journey. We are committed to nurturing young minds through quality education, personalised mentoring and a strong foundation in essential academic concepts.
            </p>
            <p>
              We specialise in <strong className="text-primary font-bold">Foundation Programmes and Board Examination Support</strong> for Classes 8, 9 and 10, with a focus on building conceptual clarity, strengthening analytical abilities and developing problem-solving skills.
            </p>
            <p>
              At <AceWord />, education goes beyond textbooks and classroom teaching. We integrate interactive teaching methodologies, experiment-based learning, practical activities and skill development to make learning meaningful, engaging and effective.
            </p>
            <p>
              Our approach focuses not just on helping students score better marks but also on developing confidence, discipline, critical thinking and independent learning abilities that prepare them for future academic challenges.
            </p>
          </div>

          {/* ── WHY ACE? Strive List (Noticeable Large Headings, clean bulleted format, no cards) ── */}
          <div className="mt-10 border-t-2 border-border/80 pt-8">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-primary flex items-center gap-3">
                <span className="h-1 w-8 bg-gold inline-block rounded-full" />
                WHY <span className="text-gold"><AceWord />?</span>
              </h3>
              <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-primary/90">
                At <AceWord />, we strive to:
              </p>
            </div>

            <ul className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span>
                  <strong className="text-primary font-bold text-base sm:text-lg">Build Strong Foundations:</strong>{" "}
                  Develop conceptual understanding in Physics, Chemistry, Mathematics and Biology.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span>
                  <strong className="text-primary font-bold text-base sm:text-lg">Promote Beyond Classroom Learning:</strong>{" "}
                  Encourage experiential, activity-based and application-oriented learning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span>
                  <strong className="text-primary font-bold text-base sm:text-lg">Develop Essential Skills:</strong>{" "}
                  Strengthen communication, analytical thinking, creativity and problem-solving abilities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span>
                  <strong className="text-primary font-bold text-base sm:text-lg">Ensure Academic Excellence:</strong>{" "}
                  Provide structured Board Support and Foundation training to improve academic performance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span>
                  <strong className="text-primary font-bold text-base sm:text-lg">Build Confidence:</strong>{" "}
                  Help students overcome examination fear through regular assessments, mentoring and personalised guidance.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Key Highlights Strip (Established & Students Guided) ── */}
      <section className="border-b bg-card">
        <div className="container-ace grid grid-cols-1 gap-6 py-8 sm:grid-cols-3 text-center">
          <Reveal variant="fade-up" delay={0}>
            <div>
              <p className="font-display text-3xl font-bold text-primary">
                <RollingNumber value="2022" />
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Established</p>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={80}>
            <div>
              <p className="font-display text-3xl font-bold text-primary">
                <RollingNumber value="500+" />
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Students Guided</p>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={160}>
            <div>
              <p className="font-display text-3xl font-bold text-primary">Classes 8, 9 &amp; 10</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Foundation &amp; Board Support</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Everything you need for your Exam at one place (Bento Grid) - Commented Out ── */}
      {/* <ExamReadySection /> */}

      {/* ── Our Vision & Our Mission ── */}
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

      {/* ── Features of the Program: Education Beyond the Classroom ── */}
      <ProgramFeaturesSection />

      {/* ── Closing Banner: ACE Education – Your Ambition, Our Foundation. Learn. Lead. Excel. ── */}
      <section className="bg-navy-pattern py-16 text-navy-foreground">
        <Reveal variant="zoom-in" className="container-ace flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold"><AceWord dark /> Education</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Your Ambition, <span className="italic text-gold">Our Foundation.</span>
          </h2>
          <p className="text-base font-bold uppercase tracking-[0.2em] text-gold-foreground bg-gold px-6 py-2 rounded-full mt-2">
            Learn. Lead. Excel.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5"
            >
              Explore our programmes <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold transition hover:border-gold hover:text-gold"
            >
              Enquire Now
            </a>
          </div>
        </Reveal>
      </section>

      <ContactSection />
    </>
  );
}
