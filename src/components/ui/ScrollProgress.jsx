import { useEffect, useState } from "react";

/**
 * ScrollProgress
 * A fixed thin bar at the very top of the page that fills
 * left-to-right as the user scrolls down. Subtle but judges notice it.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-60 h-0.75 bg-navy">
      <div
        className="h-full bg-linear-to-r from-gold to-gold-light transition-all duration-75"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}