import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * ScrollReveal (Competition-safe)
 * - Always visible by default
 * - Animates only if observer works
 * - No risk of hidden content
 */

export default function ScrollReveal({
  children,
  delay = "",
  direction = "up",
  className = "",
}) {
  const { ref, visible } = useScrollReveal();

  const base = "transition-all duration-700 ease-out";

  const hiddenMap = {
    up: "opacity-0 translate-y-8",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
  };

  const hidden = hiddenMap[direction] || hiddenMap.up;

  const shown = "opacity-100 translate-x-0 translate-y-0";

  // 🔥 CRITICAL FIX: fallback to visible if observer fails
  const isVisible = visible ?? true;

  return (
    <div
      ref={ref}
      className={`${base} ${delay} ${
        isVisible ? shown : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}