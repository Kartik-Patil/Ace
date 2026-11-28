import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Languages,
  BookOpenCheck,
  Volume2,
  PenTool,
  Layers,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Compass,
  FileText,
  Award,
} from "lucide-react";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import { ContactSection } from "@/components/ace/ContactSection";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import languageAssistanceBanner from "@/assets/LanguageAssistance-Banner.png";

export const Route = createFileRoute("/language-assistance")({
  head: () => ({
    meta: [
      { title: "Language Assistance (Kannada & Hindi) | Classes VII–X | ACE Hubballi" },
      {
        name: "description",
        content:
          "Dedicated Kannada and Hindi language assistance for Classes VII to X at ACE Hubballi. Strengthen grammar, reading fluency, essay writing and board examination performance.",
      },
    ],
  }),
  component: LanguageAssistancePage,
});

const kannadaCurriculum = [
  {
    step: "01",
    title: "Grammar & Vocabulary Development",
    scriptTag: "ವ್ಯಾಕರಣ ಮತ್ತು ಶಬ್ದಕೋಶ",
    description: "Grammar and vocabulary development ( ವ್ಯಾಕರಣ ಮತ್ತು ಶಬ್ದಕೋಶ ). Building strong roots in linguistic fundamentals.",
    icon: BookOpenCheck,
    badge: "ವ್ಯಾಕರಣ",
  },
  {
    step: "02",
    title: "Reading Fluency & Pronunciation",
    scriptTag: "ಓದುವಿಕೆ ಮತ್ತು ಉಚ್ಚಾರಣೆ",
    description: "Reading fluency, comprehension and accurate pronunciation practice through guided reading sessions.",
    icon: Volume2,
    badge: "ಉಚ್ಚಾರಣೆ",
  },
  {
    step: "03",
    title: "Written Composition",
    scriptTag: "ಪ್ರಬಂಧ ಮತ್ತು ಪತ್ರ ಲೇಖನ",
    description: "Essay writing, letter writing and paragraph construction with structured formatting and clear expression.",
    icon: PenTool,
    badge: "ಬರವಣಿಗೆ",
  },
  {
    step: "04",
    title: "Language Mechanics",
    scriptTag: "ಸಂಧಿ, ಸಮಾಸ ಮತ್ತು ಗಾದೆಗಳು",
    description: "In-depth practice in Sandhi, Samasa, proverbs and meaningful sentence formation.",
    icon: Layers,
    badge: "ಭಾಷಾ ಜ್ಞಾನ",
  },
  {
    step: "05",
    title: "Textbook & Exam Preparation",
    scriptTag: "ಪಠ್ಯಪುಸ್ತಕ ಮತ್ತು ಪರೀಕ್ಷಾ ಸಿದ್ಧತೆ",
    description: "Textbook lesson explanations, question answers and comprehensive school exam preparation.",
    icon: GraduationCap,
    badge: "ಪರೀಕ್ಷಾ ಸಿದ್ಧತೆ",
  },
];

const hindiCurriculum = [
  {
    step: "01",
    title: "Hindi Grammar & Vocabulary",
    scriptTag: "हिंदी व्याकरण एवं शब्दावली",
    description: "Hindi grammar and vocabulary (हिंदी व्याकरण एवं शब्दावली) to establish solid foundational fluency.",
    icon: BookOpenCheck,
    badge: "व्याकरण",
  },
  {
    step: "02",
    title: "Reading & Pronunciation",
    scriptTag: "पठन, बोಧ एवं उच्चारण",
    description: "Reading, comprehension and pronunciation practice to speak and comprehend with ease and accuracy.",
    icon: Volume2,
    badge: "उच्चारण",
  },
  {
    step: "03",
    title: "Creative Writing Skills",
    scriptTag: "निबंध, पत्र एवं अनुच्छेद लेखन",
    description: "Essay, letter and paragraph writing (निबंध, पत्र एवं अनुच्छेद लेखन) with proper structure and vocabulary.",
    icon: PenTool,
    badge: "लेखन कला",
  },
  {
    step: "04",
    title: "Grammar Mechanics",
    scriptTag: "संज्ञा, सर्वनाम, विशेषण, क्रिया, काल",
    description: "Intensive practice in संज्ञा, सर्वनाम, विशेषण, क्रिया, काल, पर्यायवाची and विलोम शब्द.",
    icon: Layers,
    badge: "अभ्यास",
  },
  {
    step: "05",
    title: "Textbook & Exam Practice",
    scriptTag: "पाठ्यपुस्तक एवं परीक्षा तैयारी",
    description: "Textbook lesson explanations, question answers and exam-oriented exercises for high scores.",
    icon: GraduationCap,
    badge: "परीक्षा तैयारी",
  },
];

function LanguageAssistancePage() {
  const { openModal } = useEnquiryModal();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ── Top Navigation Bar ── */}
      <div className="border-b border-slate-100 bg-slate-50/70">
        <div className="container-ace py-4 flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Courses
          </Link>

        </div>
      </div>

      {/* ── Hero Banner Section (Full width edge-to-edge, zero negative space) ── */}
      <section className="w-full bg-navy-pattern overflow-hidden">
        <img
          src={languageAssistanceBanner}
          alt="Language Assistance – Kannada & Hindi"
          className="w-full h-auto block"
          width={2048}
          height={768}
          loading="eager"
        />
      </section>

      {/* ── Hero Overview Section ── */}
      <section className="container-ace pt-6 sm:pt-8 pb-12">
        <Reveal variant="fade-up">
          <div className="w-full space-y-6">
            <div className="space-y-3 text-center">

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Language Assistance – Kannada &amp; Hindi
              </h1>
              <p className="text-lg sm:text-xl font-bold text-gold">

              </p>
            </div>

            {/* Overview Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium text-justify">
              At <AceWord />, we provide dedicated language assistance in Kannada and Hindi to help students strengthen their holistic academic performance. Through structured lessons, grammar practice, reading, writing and comprehension activities, students develop better language proficiency, communication skills and confidence. Our focused guidance helps students prepare effectively for school examinations while building a strong foundation in both languages.
            </p>
            {/* Course Detail Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#course-details"
                className="rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2 text-base group"
              >
                <span>Course Details</span>
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <button
                type="button"
                onClick={() => openModal("Language Support")}
                className="rounded-full border-2 border-primary/30 px-8 py-3.5 font-bold text-primary hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Course Details Section ── */}
      <section id="course-details" className="scroll-mt-16 container-ace py-14 sm:py-20 border-t border-slate-100 bg-slate-50/50">
        <Reveal variant="fade-up">
          <div className="w-full space-y-6">
            <div className="w-full mb-12 sm:mb-16 text-center">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">
                Course Details
              </h2>

              <p className="mt-4 w-full text-base sm:text-lg text-slate-600 font-medium leading-relaxed text-justify">
                At <AceWord />, we provide dedicated Kannada and Hindi language support to help students improve their language proficiency, strengthen grammar and excel in school examinations. Our structured approach focuses on developing reading, writing, comprehension and communication skills through guided practice and individual attention.
              </p>
            </div>

            {/* ── Two Language Columns: Kannada & Hindi ── */}
            <div className="grid gap-10 lg:grid-cols-2">
              {/* ── Kannada Support Track ── */}
              <div className="space-y-6">
                {/* Track Header Card */}
                <div className="flex items-center justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 text-primary shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-[#fdb435] hover:shadow-lift">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gold font-display text-2xl font-black text-navy shadow-sm">
                      ಕ
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold">

                      </span>
                      <h3 className="rounded-xl bg-[#2a2273] px-4 py-1.5 font-display text-2xl font-extrabold text-[#fdb435] shadow-xs">
                        Kannada
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-[#2a2273]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    ಕನ್ನಡ ಭಾಷೆ
                  </span>
                </div>

                {/* 5 Kannada Cards */}
                <div className="space-y-4">
                  {kannadaCurriculum.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.step} variant="fade-up" delay={idx * 60}>
                        <div className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="flex items-center gap-2.5 rounded-xl bg-[#2a2273] px-3.5 py-2 font-display font-bold text-[#fdb435] text-base sm:text-lg shadow-xs">
                              <Icon className="size-4 shrink-0 text-[#fdb435]" aria-hidden />
                              <span>{item.title}</span>
                            </h4>
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600 shrink-0">
                              {item.badge}
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium text-justify">
                            {item.description}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* ── Hindi Support Track ── */}
              <div className="space-y-6">
                {/* Track Header Card */}
                <div className="flex items-center justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 text-primary shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-[#fdb435] hover:shadow-lift">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gold font-display text-2xl font-black text-navy shadow-sm">
                      अ
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-border">

                      </span>
                      <h3 className="rounded-xl bg-[#2a2273] px-4 py-1.5 font-display text-2xl font-extrabold text-[#fdb435] shadow-xs">
                        Hindi
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-[#2a2273]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    हिंदी भाषा
                  </span>
                </div>

                {/* 5 Hindi Cards */}
                <div className="space-y-4">
                  {hindiCurriculum.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.step} variant="fade-up" delay={idx * 60}>
                        <div className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="flex items-center gap-2.5 rounded-xl bg-[#2a2273] px-3.5 py-2 font-display font-bold text-[#fdb435] text-base sm:text-lg shadow-xs">
                              <Icon className="size-4 shrink-0 text-[#fdb435]" aria-hidden />
                              <span>{item.title}</span>
                            </h4>
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600 shrink-0">
                              {item.badge}
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium text-justify">
                            {item.description}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Our Focus Vision Banner ── */}
      <section className="container-ace py-14 sm:py-20">
        <Reveal variant="zoom-in">
          <div className="w-full rounded-3xl border-2 border-gold/60 bg-navy-pattern p-8 sm:p-14 text-navy-foreground shadow-lift relative overflow-hidden text-center">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                <Compass className="size-4" /> Our Core Focus
              </span>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-center max-w-3xl mx-auto leading-tight">
                “Building language confidence, improving written expression and helping every student perform better in Kannada and Hindi examinations.”
              </h3>



              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal("Language Support")}
                  className="rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
                >
                  Enquire Now <ArrowRight className="size-4" />
                </button>
                <Link
                  to="/courses"
                  className="rounded-full border-2 border-white/40 px-8 py-3.5 font-bold text-white hover:border-gold hover:text-gold transition-colors"
                >
                  Explore All Courses
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      {/* ── Contact Section ── */}
      <div id="enquire">
        <ContactSection title="Enquire for Language Assistance (Kannada & Hindi)" variant="white" />
      </div>
    </div>
  );
}
