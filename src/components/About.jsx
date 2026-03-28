import { BookOpen, Shield, Target } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const pillars = [
  { icon: Target,   title: "Mission-Driven Approach",   desc: "Every lesson is mapped to the UPSC syllabus — no fluff, no filler. Pure exam-relevant content." },
  { icon: BookOpen, title: "Expert-Crafted Curriculum",  desc: "Designed by former IAS officers and UPSC toppers who understand what the board actually tests." },
  { icon: Shield,   title: "Proven Track Record",        desc: "350+ selections across IAS, IPS, IFS and allied services over two decades of coaching." },
];

const delays = ["delay-100", "delay-200", "delay-300"];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">Who We Are</p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <ScrollReveal direction="left">
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl leading-tight mb-6">
              Two Decades of Turning{" "}
              <span className="text-gold italic">Aspirants</span>{" "}
              into Officers
            </h2>
            <p className="text-muted text-base leading-relaxed mb-5">
              Ravindra IAS was founded in 2003 with a singular conviction — that every sincere aspirant
              deserves world-class UPSC guidance, regardless of their background. What started as a small
              classroom in Delhi has grown into one of India's most respected coaching institutions.
            </p>
            <p className="text-muted text-base leading-relaxed mb-10">
              Our faculty includes serving and retired IAS, IPS, and IFS officers who bring real
              administrative insight into every class — not just academic knowledge.
            </p>

            <div className="flex flex-col gap-4">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <div key={title}>
                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-cream-dark hover:border-gold/30 card-lift group cursor-default">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-sm mb-1">{title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Founder card */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/25 rounded-2xl" />
              <div className="relative bg-navy rounded-2xl p-8 sm:p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mb-5">
                  <span className="font-display text-3xl font-bold text-gold">R</span>
                </div>

                <blockquote className="font-display italic text-white/90 text-lg sm:text-xl leading-relaxed mb-6">
                  "UPSC tests not just knowledge, but character. Our job is to build both."
                </blockquote>

                <div>
                  <p className="font-semibold text-white text-sm">Sh. Ravindra Kumar</p>
                  <p className="text-gold/70 text-xs mt-0.5">Founder & Director · Former IAS Officer (2001 Batch)</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  {[["22+","Years Teaching"],["350+","Selections"],["4.9★","Avg Rating"]].map(([val, lab]) => (
                    <div key={lab}>
                      <p className="font-display font-bold text-gold text-xl">{val}</p>
                      <p className="text-white/40 text-xs mt-0.5">{lab}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}