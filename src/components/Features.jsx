import { Users, Video, FileText, MessageCircle, BarChart, Globe, Zap, HeartHandshake } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const features = [
  { icon: Users,          title: "Expert-Only Faculty",         desc: "Every teacher is either a serving officer, a topper, or a subject matter expert — no compromises." },
  { icon: Video,          title: "Hybrid Learning",             desc: "Attend in-class or online — same quality, same faculty, same test access from anywhere in India." },
  { icon: FileText,       title: "Test Series That Works",      desc: "Weekly tests modelled exactly on the UPSC pattern, with in-depth feedback from evaluators." },
  { icon: MessageCircle,  title: "Doubt Resolution Within 24h", desc: "Dedicated faculty office hours and a student Telegram channel — no doubt goes unanswered." },
  { icon: BarChart,       title: "Progress Analytics",          desc: "Track your mock scores, topic-wise accuracy, and improvement trajectory on your dashboard." },
  { icon: Globe,          title: "Current Affairs Coverage",    desc: "Daily CA mapped to the UPSC syllabus, monthly compendiums, and a pre-Prelims revision module." },
  { icon: Zap,            title: "Answer Writing Lab",          desc: "Dedicated sessions where you write, get evaluated, and improve — week after week." },
  { icon: HeartHandshake, title: "Interview Mentoring",         desc: "Retired board members and IAS officers simulate the real thing — no sugar-coating." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">Why Ravindra IAS</p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-4">
              <span className="title-underline title-underline-center">Built Different. Built to Win.</span>
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto mt-8">
              Other platforms give you content. We give you a system — structured, accountable, and results-obsessed.
            </p>
          </div>
        </ScrollReveal>

        {/* Staggered feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={title}>
              <div className="bg-white rounded-2xl p-5 border border-cream-dark card-lift group text-left h-full">
                <div className="w-11 h-11 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-navy text-base mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <ScrollReveal>
          <div className="relative bg-navy rounded-2xl px-8 py-12 text-center overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/8 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-gold/6 blur-2xl" />
            <p className="relative text-gold font-semibold text-xs tracking-widest uppercase mb-3">
              Limited Seats · New Batch Starting Soon
            </p>
            <h3 className="relative font-display font-bold text-white text-2xl sm:text-3xl mb-4">
              Ready to Begin Your UPSC Journey?
            </h3>
            <p className="relative text-white/50 text-sm max-w-md mx-auto mb-8">
              Our next integrated batch starts next month. Seats fill fast. Register today — no commitment required.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior:"smooth" })}
                className="gold-glow inline-flex items-center justify-center bg-gold hover:bg-gold-light text-navy font-semibold px-7 py-3 rounded-xl transition-all active:scale-95 text-sm"
              >
                Reserve My Seat — Free
              </button>
              <button
                onClick={() => document.querySelector("#courses")?.scrollIntoView({ behavior:"smooth" })}
                className="inline-flex items-center justify-center border border-white/20 text-white hover:border-gold/40 hover:text-gold px-7 py-3 rounded-xl transition-all text-sm font-medium"
              >
                View All Courses
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}