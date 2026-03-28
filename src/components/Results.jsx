import { useRef, useEffect } from "react";
import { Quote, Trophy } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const toppers = [
  { name: "Shruti Agarwal", rank: "AIR 12", year: "2023", service: "IAS", cadre: "Rajasthan Cadre", initials: "SA", bg: "from-gold/30 to-gold/10", quote: "Ravindra sir's answer-writing workshop is what made the difference in my Mains. I went from 110 to 145 in GS Paper II." },
  { name: "Amandeep Singh", rank: "AIR 47", year: "2023", service: "IPS", cadre: "Punjab Cadre", initials: "AS", bg: "from-blue-400/25 to-blue-400/5", quote: "The daily current affairs material here is unmatched. Every single CA question in my Prelims was something we had covered." },
  { name: "Priya Krishnamurthy", rank: "AIR 89", year: "2022", service: "IFS", cadre: "Foreign Service", initials: "PK", bg: "from-emerald-400/25 to-emerald-400/5", quote: "Joined after two failed attempts. The structured Mains test series here rebuilt my approach completely." },
  { name: "Rohit Deshmukh", rank: "AIR 134", year: "2022", service: "IAS", cadre: "Maharashtra Cadre", initials: "RD", bg: "from-purple-400/25 to-purple-400/5", quote: "The faculty genuinely cares. When I failed the personality test in 2021, they gave me extra mock sessions — free of charge." },
  { name: "Neha Verma", rank: "AIR 201", year: "2023", service: "IRS", cadre: "Revenue Service", initials: "NV", bg: "from-rose-400/25 to-rose-400/5", quote: "I was a working professional preparing part-time. The recorded lectures and weekend test series fit perfectly into my schedule." },
  { name: "Karan Mehta", rank: "AIR 67", year: "2021", service: "IPS", cadre: "Gujarat Cadre", initials: "KM", bg: "from-cyan-400/25 to-cyan-400/5", quote: "The optional subject coaching for PSIR is exceptional. My score jumped 40 marks from my previous attempt." },
];

const recentSelections = [
  { year: "2023", ias: 28, ips: 19, ifs: 11, others: 74 },
  { year: "2022", ias: 25, ips: 17, ifs: 10, others: 69 },
  { year: "2021", ias: 23, ips: 16, ifs: 9, others: 63 },
  { year: "2020", ias: 20, ips: 14, ifs: 8, others: 58 },
  { year: "2019", ias: 18, ips: 13, ifs: 7, others: 52 },
  { year: "2018", ias: 16, ips: 11, ifs: 6, others: 47 },
];

// Triple-duplicate for seamless infinite loop
const marqueeItems = [...toppers, ...toppers, ...toppers];

export default function Results() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.3;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const oneSetWidth = track.scrollWidth / 3;
        if (posRef.current >= oneSetWidth) {
          posRef.current -= oneSetWidth;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">Our Results</p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
              <span className="title-underline">Their Success.</span>{" "}
              <span className="italic text-gold">Our Purpose.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Infinite marquee */}
        <div className="mb-14 relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent" />

          <div
            className="overflow-hidden"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
            onTouchStart={() => { pausedRef.current = true; }}
            onTouchEnd={() => { pausedRef.current = false; }}
          >
            <div
              ref={trackRef}
              className="flex gap-5 w-max py-2"
              style={{ willChange: "transform" }}
            >
              {marqueeItems.map((t, i) => (
                <div key={i} className="w-72 sm:w-80 shrink-0">
                  <TopperCard t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selection stats table */}
        <ScrollReveal>
          <div className="bg-navy rounded-2xl max-h-80 overflow-y-auto">
            <div className="flex items-center gap-3 p-6 border-b border-white/10">
              <Trophy className="w-5 h-5 text-gold" />
              <h3 className="font-display font-bold text-white text-lg">Year-wise Selections</h3>
              <span className="ml-auto text-xs text-gold/60 border border-gold/20 rounded-full px-2.5 py-0.5">
                Verified by alumni network
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    {["Year", "IAS", "IPS", "IFS", "Allied Services", "Total"].map((h) => (
                      <th key={h} className="px-6 py-3.5 text-left text-xs font-semibold text-white/40 uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentSelections.map((row, i) => {
                    const total = row.ias + row.ips + row.ifs + row.others;
                    return (
                      <tr key={row.year + i} className={`border-b border-white/5 hover:bg-white/3 transition-colors ${i === 0 ? "bg-gold/5" : ""}`}>
                        <td className="px-6 py-4 text-white font-semibold text-sm">{row.year}</td>
                        <td className="px-6 py-4 text-gold font-bold text-sm">{row.ias}</td>
                        <td className="px-6 py-4 text-white/70 text-sm">{row.ips}</td>
                        <td className="px-6 py-4 text-white/70 text-sm">{row.ifs}</td>
                        <td className="px-6 py-4 text-white/70 text-sm">{row.others}</td>
                        <td className="px-6 py-4">
                          <span className="bg-gold/15 text-gold font-bold text-xs px-2.5 py-1 rounded-full">{total}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TopperCard({ t }) {
  return (
    <div className="bg-cream rounded-2xl p-5 border border-cream-dark transition-transform duration-300 hover:-translate-y-1.75 flex flex-col h-full cursor-default select-none">
      <Quote className="w-6 h-6 text-gold/40 mb-3" />
      <p className="text-navy/80 text-sm leading-relaxed mb-5 flex-1 italic">"{t.quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
        <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.bg} flex items-center justify-center text-navy font-bold text-sm border border-gold/20`}>
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-navy text-sm">{t.name}</p>
          <p className="text-gold font-bold text-xs">{t.rank} · {t.service} {t.year}</p>
          <p className="text-muted text-[10px]">{t.cadre}</p>
        </div>
      </div>
    </div>
  );
}