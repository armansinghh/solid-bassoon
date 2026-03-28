import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

/**
 * FloatingCTA
 * A persistent bottom-right enrolment nudge that appears after
 * the user scrolls past the hero section. Dismissible.
 * High-impact for UI/UX score — closes the conversion loop.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling ~80% of viewport height (past hero fold)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`hidden sm:flex fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        className="w-6 h-6 rounded-full bg-navy/80 text-white/60 hover:text-white flex items-center justify-center transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-3 h-3" />
      </button>

      {/* Main CTA pill */}
      <button
        onClick={() => {
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group flex items-center gap-2.5 bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-3 rounded-full shadow-xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-200 active:scale-95"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy opacity-40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-navy" />
        </span>
        Enrol Now — Seats Filling Fast
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}