import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ace/Reveal";
import { AceWord } from "@/components/ace/AceWord";
import asetBanner from "@/assets/ASETpage-banner.png";

export const Route = createFileRoute("/aset-test")({
  head: () => ({
    meta: [
      { title: "ASET 2027 | ACE Scholarship & Entrance Test – Hubballi" },
      {
        name: "description",
        content:
          "ACE Scholarship & Entrance Test (ASET 2027) test pattern, marks, duration and scholarship opportunities up to 100% for Classes 8, 9 & 10 at ACE Hubballi.",
      },
    ],
  }),
  component: AsetTestPage,
});

const testPatternData = [
  {
    className: "Foundation Class 10",
    questions: 60,
    marks: 60,
    duration: "75 Min",
    fee: "Rs. 100",
  },
  {
    className: "Foundation Class 9",
    questions: 25,
    marks: 25,
    duration: "35 Min",
    fee: "Rs. 50",
  },
  {
    className: "Foundation Class 8",
    questions: 20,
    marks: 20,
    duration: "30 Min",
    fee: "Rs. 50",
  },
  {
    className: "Board Prep Class 8, 9 & 10",
    questions: 30,
    marks: 30,
    duration: "40 Min",
    fee: "Rs. 50",
  },
];

const whyTakeAset = [
  {
    number: "01",
    title: "Unlock Scholarship Opportunities",
    description: (
      <>
        Get an opportunity to earn scholarships of{" "}
        <strong className="text-primary font-bold">up to 100%*</strong> and
        make quality education more accessible.
      </>
    ),
  },
  {
    number: "02",
    title: "Evaluate Your Academic Readiness",
    description:
      "Understand your current level of preparation and assess your strengths across key academic subjects.",
  },
  {
    number: "03",
    title: "Discover Your Learning Pathway",
    description:
      "Explore the right academic programme based on your interests, abilities and future aspirations.",
  },
  {
    number: "04",
    title: (
      <span>
        Experience the{" "}
        <img

          className="inline-block h-5 sm:h-6 w-auto align-middle mx-1"
        />{" "}
        Learning Approach
      </span>
    ),
    description: (
      <>
        Get introduced to <AceWord />
        &apos;s student-centric teaching methodology, concept-based learning and
        academic mentoring.
      </>
    ),
  },
  {
    number: "05",
    title: "Plan Your Academic Journey",
    description: (
      <>
        Get an early opportunity to explore suitable programmes and plan your
        learning journey with <AceWord />.
      </>
    ),
  },
  {
    number: "06",
    title: "Take the First Step Towards Excellence",
    description: (
      <>
        Begin your journey towards stronger concepts, sharper thinking and
        greater confidence with <AceWord /> Foundation Programmes.
      </>
    ),
  },
];

function AsetTestPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ── Top Bar ── */}
      <div className="border-b border-slate-100 bg-slate-50/70">
        <div className="container-ace py-3 flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Courses
          </Link>

        </div>
      </div>

      {/* ── Hero Poster Banner ── */}
      <section className="w-full bg-[#edf5fa] overflow-hidden border-b border-slate-200/60">
        <img
          src={asetBanner}
          alt="ASET 2027 – ACE Scholarship & Entrance Test"
          width={1518}
          height={508}
          className="w-full h-auto block"
          loading="eager"
        />
      </section>

      {/* ── Main Content: Test Pattern & Why Take ASET (No negative space on sides) ── */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-24 space-y-14 sm:space-y-20">
        {/* ── Section 1: Test Pattern (Exact Reference Layout, Wide with No Negative Space) ── */}
        <section aria-labelledby="test-pattern-heading" className="w-full">
          <Reveal variant="fade-up">
            <div className="text-center mb-6 sm:mb-8">
              <h2
                id="test-pattern-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center"
              >
                Test Pattern
              </h2>
            </div>

            {/* Clean open table matching reference layout with generous width */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-slate-300 text-sm sm:text-base font-bold text-slate-900">
                    <th scope="col" className="py-3.5 sm:py-4 px-4 sm:px-8 font-bold text-left">
                      Student Category
                    </th>
                    <th scope="col" className="py-3.5 sm:py-4 px-4 sm:px-6 font-bold text-center">
                      Questions
                    </th>
                    <th scope="col" className="py-3.5 sm:py-4 px-4 sm:px-6 font-bold text-center">
                      Marks
                    </th>
                    <th scope="col" className="py-3.5 sm:py-4 px-4 sm:px-6 font-bold text-center">
                      Duration
                    </th>
                    <th scope="col" className="py-3.5 sm:py-4 px-4 sm:px-8 font-bold text-center">
                      Registration Fee
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                  {testPatternData.map((row) => (
                    <tr
                      key={row.className}
                      className="transition-colors hover:bg-slate-50/70"
                    >
                      <td className="py-4 sm:py-5 px-4 sm:px-8 font-medium text-slate-800">
                        {row.className}
                      </td>
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center text-slate-700">
                        {row.questions}
                      </td>
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center text-slate-700">
                        {row.marks}
                      </td>
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center text-slate-700">
                        {row.duration}
                      </td>
                      <td className="py-4 sm:py-5 px-4 sm:px-8 text-center font-medium text-slate-900">
                        {row.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ── Section 2: Why Take ASET 2027? (Exact Reference Layout) ── */}
        <section aria-labelledby="why-take-aset-heading" className="w-full">
          <Reveal variant="fade-up">
            <div className="text-center mb-10 sm:mb-14">
              <h2
                id="why-take-aset-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center"
              >
                Why ASET ?
              </h2>
              <p className="mt-2.5 text-base sm:text-lg font-bold text-[#fdb435]">
                Your Potential Deserves an Opportunity to Excel!
              </p>
            </div>

            {/* 2-Column Grid matching reference screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 sm:gap-y-12">
              {whyTakeAset.map((item, idx) => (
                <Reveal key={item.number} variant="fade-up" delay={idx * 40}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Bold Number matching ACE logo color */}
                    <span className="font-display text-2xl sm:text-3xl font-black text-[#2a2273] shrink-0 select-none tracking-tight pt-0.5">
                      {item.number}
                    </span>

                    <div>
                      {/* Title */}
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
