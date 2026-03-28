import { useState } from "react";
import { ArrowRight, Clock, Users, BarChart2, CheckCircle } from "lucide-react";

const allCourses = [
  {
    tag: "Prelims",
    title: "GS Prelims Crash Course",
    desc: "Intensive 3-month program covering all GS Paper I topics with weekly tests and answer evaluation.",
    duration: "3 Months",
    students: "480 enrolled",
    level: "Beginner–Intermediate",
    price: "₹18,000",
    popular: false,
    features: ["300+ hours of content", "Weekly mock tests", "Video lectures", "Doubt sessions"],
  },
  {
    tag: "Mains",
    title: "GS Mains Complete",
    desc: "Deep-dive into all 4 GS papers with essay writing, answer structuring, and peer review.",
    duration: "6 Months",
    students: "310 enrolled",
    level: "Intermediate",
    price: "₹35,000",
    popular: true,
    features: ["500+ hours of content", "Essay workshops", "PYQ analysis", "1-on-1 mentoring"],
  },
  {
    tag: "Full Course",
    title: "CSE Integrated Program",
    desc: "End-to-end coaching from Prelims through Mains to Interview — one programme, one journey.",
    duration: "18 Months",
    students: "620 enrolled",
    level: "All Levels",
    price: "₹75,000",
    popular: false,
    features: ["All stages covered", "Interview prep", "Current affairs daily", "Alumni network"],
  },
  {
    tag: "Interview",
    title: "Personality Test Prep",
    desc: "Mock interviews with retired IAS officers, DAF analysis, and presentation coaching.",
    duration: "45 Days",
    students: "180 enrolled",
    level: "Post-Mains",
    price: "₹12,000",
    popular: false,
    features: ["15 mock interviews", "DAF deep dive", "Body language coaching", "Board simulation"],
  },
  {
    tag: "Optional",
    title: "Optional Subject (PSIR)",
    desc: "Political Science & IR — one of the highest-scoring optional subjects, taught by experts.",
    duration: "4 Months",
    students: "210 enrolled",
    level: "Intermediate–Advanced",
    price: "₹22,000",
    popular: false,
    features: ["Full syllabus coverage", "Topper notes", "PYQ practice", "Answer writing drills"],
  },
  {
    tag: "Prelims",
    title: "CSAT Mastery",
    desc: "Crack CSAT Paper II with logical reasoning, comprehension, and maths refreshers.",
    duration: "2 Months",
    students: "390 enrolled",
    level: "Beginner",
    price: "₹8,000",
    popular: false,
    features: ["Math from scratch", "Comprehension speed", "Mock CSAT tests", "Shortcuts & tricks"],
  },
];

const tabs = ["All", "Prelims", "Mains", "Full Course", "Interview", "Optional"];

function CourseCard({ course }) {
  return (
    <div
      className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col card-lift ${
        course.popular
          ? "border-gold shadow-lg shadow-gold/10"
          : "border-cream-dark"
      }`}
    >
      {course.popular && (
        <div className="absolute top-0 inset-x-0 bg-gold text-navy text-xs font-bold text-center py-1.5 tracking-wide">
          ★ MOST POPULAR
        </div>
      )}

      <div className={`p-6 flex flex-col flex-1 ${course.popular ? "pt-9" : ""}`}>
        {/* Tag + level */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-navy/6 text-navy text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
            {course.tag}
          </span>
          <span className="text-muted text-[10px] flex items-center gap-1">
            <BarChart2 className="w-3 h-3" />
            {course.level}
          </span>
        </div>

        <h3 className="font-display font-bold text-navy text-lg mb-2">{course.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{course.desc}</p>

        {/* Meta */}
        <div className="flex gap-4 text-xs text-muted mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" /> {course.students}
          </span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-1.5 mb-6">
          {course.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-navy/80">
              <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-cream-dark">
          <div>
            <p className="font-display font-bold text-navy text-xl">{course.price}</p>
            <p className="text-muted text-[10px]">EMI options available</p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 bg-navy text-gold text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-navy/80 transition-colors group"
          >
            Enrol
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? allCourses
      : allCourses.filter((c) => c.tag === activeTab);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">
            Programs
          </p>
          <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-4">
            <span className="title-underline title-underline-center">
              Every Stage. Every Aspirant.
            </span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto mt-6">
            Pick the programme that matches your stage of preparation — 
            or go all-in with our integrated offering.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-navy text-gold shadow-md"
                  : "bg-cream-dark text-navy/70 hover:bg-cream hover:text-navy"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted text-sm mt-10">
          Not sure which course to pick?{" "}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-gold font-semibold hover:underline"
          >
            Book a free counselling session →
          </button>
        </p>
      </div>
    </section>
  );
}
