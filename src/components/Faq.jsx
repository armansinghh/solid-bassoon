import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const faqs = [
  { q:"Who is the primary faculty at Ravindra IAS?",          a:"Our core team includes Sh. Ravindra Kumar (IAS, 2001 Batch), three subject specialists with 10+ years of UPSC coaching, and guest faculty from the IFS and IPS cadres. You get first-hand experience, not just academic perspective." },
  { q:"Is the course available online or only in Delhi?",      a:"We offer fully hybrid programmes. Every class is live-streamed in HD and recorded for later access. Students from across India — Jammu, Chennai, Bhopal — participate at par with classroom students." },
  { q:"When does the next batch start?",                       a:"Our Integrated CSE batch starts on the 1st of each month. The Prelims Crash Course runs twice a year. We recommend registering early — batches are capped at 60 to maintain quality interactions." },
  { q:"Do you offer EMI or fee concessions?",                  a:"Yes. We have 0% EMI partnerships with major banks and offer scholarship-based fee waivers for economically weaker aspirants. Fill the enrolment form and our counsellor will guide you through options." },
  { q:"How is your test series different from others?",        a:"We don't just give marks — we give feedback. Each test comes with a written evaluation from an examiner highlighting structural issues, factual gaps, and presentation improvements. It's like a personal writing coach." },
  { q:"What happens if I fail in one attempt?",                a:"We stand behind our students. If you complete our programme and do not clear Prelims, you receive access to the next batch's study material and tests at no additional cost. We're invested in your success." },
  { q:"Is there support for the Interview / Personality Test?",a:"Absolutely. Our Personality Test Prep programme includes 15+ mock interview sessions with retired civil servants, detailed DAF analysis, and communication coaching." },
  { q:"Can I switch from online to offline midway?",           a:"Yes, with prior notice. Our administration team can facilitate the transition. If you're travelling to Delhi, you're always welcome to sit in our classroom. We believe in flexibility." },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? "border-gold/40 shadow-sm shadow-gold/10" : "border-cream-dark hover:border-navy/20"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left bg-white"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm leading-snug transition-colors ${isOpen ? "text-navy" : "text-navy/80"}`}>
          {faq.q}
        </span>
        <ChevronDown className={`w-4 h-4 shrink-0 mt-0.5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-cream-dark pt-4">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  const left  = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
              <span className="title-underline title-underline-center">We've Heard It All</span>
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto mt-8">
              Honest answers to the questions every aspirant asks before enrolling.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop 2-col */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4 mb-10">
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-4">
              {left.map((faq, i) => (
                <FAQItem key={faq.q} faq={faq} isOpen={openIndex === i * 2} onToggle={() => toggle(i * 2)} />
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4">
              {right.map((faq, i) => (
                <FAQItem key={faq.q} faq={faq} isOpen={openIndex === i * 2 + 1} onToggle={() => toggle(i * 2 + 1)} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile single col */}
        <div className="flex lg:hidden flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>

        {/* Contact prompt */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <MessageSquare className="w-4 h-4 text-gold" />
            <p className="text-muted text-sm">
              Still have questions?{" "}
              <a href="tel:+919876543210" className="text-gold font-semibold hover:underline">
                Call +91 98765 43210
              </a>{" "}
              — Mon–Sat, 9 AM to 7 PM.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}