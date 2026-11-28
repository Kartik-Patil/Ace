import { createFileRoute, Link, redirect } from "@tanstack/react-router";
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
import { ProgramFeaturesSection } from "@/components/ace/ProgramFeaturesSection";
import { AceWord } from "@/components/ace/AceWord";
import { VisionMissionValuesSection } from "@/components/ace/VisionMissionValuesSection";
import { contact } from "@/data/ace";
import aboutBanner from "@/assets/Aboutus-banner.png";

export const Route = createFileRoute("/home")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
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
            <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-center">
              From Concepts <span className="italic text-gold">to Confidence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-90 text-justify">
              At <AceWord dark /> Education, Hubballi, we believe that every student has the potential to excel when guided with the right knowledge, mentorship and learning environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5"
              >
                Enquire Now <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-7 py-3.5 font-bold transition hover:border-gold hover:text-gold"
              >
                <Phone className="size-4 text-emerald-400" aria-hidden /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative fade-up [animation-delay:150ms]">
            <img
              src={aboutBanner}
              alt="Academic Centre for Eduxcellence – Foundation for Class 7, 8, 9 & 10"
              width={1024}
              height={344}
              className="rounded-3xl border-4 border-gold/70 object-cover shadow-lift w-full h-auto"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl border-2 border-slate-200/80 bg-white p-4 text-card-foreground shadow-lift transition-all duration-300 hover:scale-[1.03] hover:border-[#fdb435]">
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

      {/* ── About Us Section (Clean editorial paragraphs, minimal negative space, no cards) ── */}
      <section id="about" className="container-ace scroll-mt-24 py-12 sm:py-16">
        <div className="w-full">
          {/* Header & Badges */}
          <div className="border-b-2 border-border/80 pb-6 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
              About Us – <AceWord /> Education, Hubballi
            </h2>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
              From Concepts <span className="italic text-gold">to Confidence</span>
            </h3>
            <p className="mt-3 text-base sm:text-lg font-bold text-muted-foreground flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5">
              <span className="text-primary font-bold">Established in 2022</span>
              <span className="text-gold font-black text-lg">|</span>
              <span className="text-primary font-bold">500+ Students</span>
              <span className="text-gold font-black text-lg">|</span>
              <span className="text-primary font-bold">Academic Excellence &amp; Beyond Classroom Learning</span>
            </p>
          </div>

          {/* Flowing Narrative Paragraphs */}
          <div className="mt-6 space-y-3.5 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium text-justify">
            <p className="text-base sm:text-lg font-semibold text-primary leading-snug border-l-3 border-gold pl-3.5 py-0.5 text-justify">
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
            <div className="text-center">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-primary text-center">
                WHY <AceWord />
              </h3>
              <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-primary/90 text-center">
                At <AceWord />, we strive to:
              </p>
            </div>

            <ul className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span className="text-justify w-full">
                  <strong className="text-primary font-bold text-base sm:text-lg">Build Strong Foundations:</strong>{" "}
                  Develop conceptual understanding in Physics, Chemistry, Mathematics and Biology.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span className="text-justify w-full">
                  <strong className="text-primary font-bold text-base sm:text-lg">Promote Beyond Classroom Learning:</strong>{" "}
                  Encourage experiential, activity-based and application-oriented learning.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span className="text-justify w-full">
                  <strong className="text-primary font-bold text-base sm:text-lg">Develop Essential Skills:</strong>{" "}
                  Strengthen communication, analytical thinking, creativity and problem-solving abilities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span className="text-justify w-full">
                  <strong className="text-primary font-bold text-base sm:text-lg">Ensure Academic Excellence:</strong>{" "}
                  Provide structured Board Support and Foundation training to improve academic performance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                <span className="text-justify w-full">
                  <strong className="text-primary font-bold text-base sm:text-lg">Build Confidence:</strong>{" "}
                  Help students overcome examination fear through regular assessments, mentoring and personalised guidance.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Everything you need for your Exam at one place (Bento Grid) - Commented Out ── */}
      {/* <ExamReadySection /> */}

      {/* ── Vision, Mission & Values (Curved Infographic Design) ── */}
      <VisionMissionValuesSection />

      {/* ── Features of the Program: Education Beyond the Classroom ── */}
      <ProgramFeaturesSection />

      {/* ── CTA band ── */}
      <section className="bg-navy-pattern py-16 text-navy-foreground">
        <Reveal variant="zoom-in" className="container-ace flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold"><AceWord dark /> Education</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
            Your Ambition, <span className="italic text-gold">Our Foundation.</span>
          </h2>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-foreground bg-gold px-6 py-2 rounded-full mt-1">
            Explore. Experience. Excel.
          </p>
          <p className="max-w-xl opacity-85 mt-2">
            Discover the right programme for your child and take the first step towards stronger concepts, sharper thinking and greater confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card"
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
