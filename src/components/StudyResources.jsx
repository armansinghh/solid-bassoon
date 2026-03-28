import { FileText, Video, Newspaper, Download, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const resources = [
  {
    icon: FileText,
    title: "PYQ Bank",
    desc: "25 years of Previous Year Questions — sorted by topic, paper, and difficulty with model answers.",
    tag: "Free",
    tagColor: "bg-emerald-50 text-emerald-700",
    cta: "Browse PYQs",
  },
  {
    icon: Video,
    title: "Free Video Lectures",
    desc: "100+ hours of foundation-level lectures for GS Paper I–IV, available without login.",
    tag: "Free",
    tagColor: "bg-emerald-50 text-emerald-700",
    cta: "Watch Now",
  },
  {
    icon: Newspaper,
    title: "Daily Current Affairs",
    desc: "UPSC-filtered CA digest — concise, examiner-mapped, delivered every morning.",
    tag: "Daily",
    tagColor: "bg-blue-50 text-blue-700",
    cta: "Read Today's",
  },
  {
    icon: Download,
    title: "Topper Notes",
    desc: "Handwritten and digital notes from our IAS selections — available as free PDF downloads.",
    tag: "PDF",
    tagColor: "bg-amber-50 text-amber-700",
    cta: "Download Free",
  },
];

const syllabusSections = [
  { name: "General Studies I", topics: "History, Geography, Culture, Society" },
  { name: "General Studies II", topics: "Polity, Governance, IR, Constitution" },
  { name: "General Studies III", topics: "Economy, Tech, Environment, Disaster Mgmt" },
  { name: "General Studies IV", topics: "Ethics, Integrity & Aptitude" },
  { name: "Essay Paper", topics: "Philosophical, Social, Economic themes" },
  { name: "Optional Subject", topics: "35+ optionals — choose your strength" },
];

// ✅ SAFE delay mapping
const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function StudyResources() {
  return (
    <section id="resources" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">
              Study Material
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl max-w-lg leading-tight">
                Everything You Need,{" "}
                <span className="text-gold italic">All in One Place</span>
              </h2>
              <p className="text-muted text-sm max-w-xs">
                Quality resources shouldn't be gated. Much of what we offer is free — always.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Resource cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {resources.map(({ icon: Icon, title, desc, tag, tagColor, cta }, i) => (
            <div key={title}>
              <div className="bg-white rounded-2xl p-5 border border-cream-dark card-lift group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>

                  {/* Tag */}
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tagColor}`}>
                    {tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-navy text-base mb-1.5">
                  {title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => alert(`${title} coming soon!`)}
                  className="mt-auto inline-flex items-center gap-1 text-gold text-xs font-semibold hover:gap-2 transition-all"
                >
                  {cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus */}
        <ScrollReveal>
          <div className="bg-navy rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-gold/70 text-xs uppercase tracking-widest font-semibold mb-1">
                  Syllabus Tracker
                </p>
                <h3 className="font-display font-bold text-white text-xl sm:text-2xl">
                  UPSC Mains GS Paper Coverage
                </h3>
              </div>

              <button className="inline-flex items-center gap-2 border border-gold/30 text-gold text-sm font-medium px-4 py-2 rounded-lg hover:bg-gold/10 transition-colors shrink-0">
                Download Syllabus PDF
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {syllabusSections.map(({ name, topics }) => (
                <div
                  key={name}
                  className="flex gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/25 transition-all cursor-default"
                >
                  <div className="w-1.5 min-h-9 rounded-full bg-gold/60 shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-white/40 text-xs mt-0.5 leading-relaxed">
                      {topics}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}