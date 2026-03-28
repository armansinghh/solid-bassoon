import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Returns a ref to attach to any element + a boolean `visible`.
 * Once the element enters the viewport, visible stays true (one-shot).
 *
 * @param {number} threshold - 0–1, how much of element must be visible
 * @param {string} rootMargin - e.g. "0px 0px -80px 0px" to trigger early
 */
export function useScrollReveal(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}