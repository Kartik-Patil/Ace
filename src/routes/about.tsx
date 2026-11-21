import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, Compass, Lightbulb, Trophy, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ace/blocks";
import { ContactSection } from "@/components/ace/ContactSection";
import { Reveal } from "@/components/ace/Reveal";
import { RollingNumber } from "@/components/ace/RollingNumber";
import { ExamReadySection } from "@/components/ace/ExamReadySection";
import { ProgramFeaturesSection } from "@/components/ace/ProgramFeaturesSection";
import { AceWord } from "@/components/ace/AceWord";
import { VisionMissionValuesSection } from "@/components/ace/VisionMissionValuesSection";
import aboutBanner from "@/assets/about-banner.jpg";

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
      {/* ── Hero Banner (Full width edge-to-edge, zero negative space) ── */}
      <section className="w-full bg-navy-pattern overflow-hidden">
        <img
          src={aboutBanner}
          alt="Academic Centre for Eduxcellence – Foundation for Class 7, 8, 9 & 10"
          width={1024}
          height={344}
          className="w-full h-auto block"
          loading="eager"
        />
      </section>

      {/* ── About Us Editorial Narrative & WHY ACE? (No cards, reduced negative space, flowing paragraphs) ── */}
      <section className="bg-background py-10 sm:py-14 border-b border-border">
        <div className="container-ace">
          {/* Badges */}
          <div className="border-b-2 border-border/80 pb-4">
            <p className="text-base sm:text-lg font-bold text-muted-foreground flex flex-wrap items-center gap-x-3.5 gap-y-1.5">
              <span className="text-primary font-bold">Established in 2018</span>
              <span className="text-gold font-black text-lg">|</span>
              <span className="text-primary font-bold">1000+ Students</span>
            </p>
          </div>

          {/* Flowing Narrative Paragraphs */}
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90 font-medium text-justify">
            <p className="text-base sm:text-lg font-semibold text-primary leading-snug border-l-3 border-gold pl-3.5 py-0.5 text-justify">
              At <AceWord /> we believe that every student has the potential to excel when guided with the right knowledge, mentorship and learning environment.
            </p>
            <p>
              Established in 2018, <AceWord /> has grown into a dedicated learning centre, having guided and supported 1000+ students on their academic journey. We are committed to nurturing young minds through quality education, personalised mentoring and a strong foundation in essential academic concepts.
            </p>
            <p>
              We specialise in <strong className="text-primary font-bold">Foundation Programmes and Board Examination Support</strong> for Classes 7, 8, 9 and 10, with a focus on building conceptual clarity, strengthening analytical abilities and developing problem-solving skills.
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
                WHY <AceWord />
              </h3>
              <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-primary/90">
                At <AceWord />, we strive to:
              </p>
            </div>

            <ul className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90 font-medium">
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
                  <strong className="text-primary font-bold text-base sm:text-lg">Nurture Essential Skills:</strong>{" "}
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
                  <strong className="text-primary font-bold text-base sm:text-lg">Develop Confidence:</strong>{" "}
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
                <RollingNumber value="2018" />
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Established</p>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={80}>
            <div>
              <p className="font-display text-3xl font-bold text-primary">
                <RollingNumber value="1000+" />
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">Students Guided</p>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={160}>
            <div>
              <p className="font-display text-3xl font-bold text-primary">Classes 7, 8, 9 &amp; 10</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground"></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Everything you need for your Exam at one place (Bento Grid) - Commented Out ── */}
      {/* <ExamReadySection /> */}

      {/* ── Our Vision, Mission & Values (Curved Infographic Design) ── */}
      <VisionMissionValuesSection />

      {/* ── Features of the Program: Education Beyond the Classroom ── */}
      <ProgramFeaturesSection />

      {/* ── Closing Banner & Contact Section (Commented out as requested) ── */}
      {/* <section className="bg-navy-pattern py-16 text-navy-foreground">
        <Reveal variant="zoom-in" className="container-ace flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold"><AceWord dark /> Education</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Your Ambition, <span className="italic text-gold">Our Foundation.</span>
          </h2>
          <p className="text-base font-bold uppercase tracking-[0.2em] text-gold-foreground bg-gold px-6 py-2 rounded-full mt-2">
            Explore. Experience. Excel.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card"
            >
              Enquire Now
            </a>
          </div>
        </Reveal>
      </section> */}

      {/* <ContactSection /> */}
    </>
  );
}
