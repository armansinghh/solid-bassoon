import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";

const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Courses",   href: "#courses" },
  { label: "Resources", href: "#resources" },
  { label: "Results",   href: "#results" },
  { label: "FAQ",       href: "#faq" },
  { label: "Contact",   href: "#contact" },
];

/** Returns the id of the section currently in view */
function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" } // middle band of viewport
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-navy/80 backdrop-blur-md shadow-lg shadow-navy/20" : "bg-transparent"
      }`}
      // leave 3px for the ScrollProgress bar above
      style={{ marginTop: "3px" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center shadow-md group-hover:shadow-gold/40 transition-shadow">
              <GraduationCap className="w-5 h-5 text-navy" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <span className="block font-display font-bold text-lg text-white tracking-tight">
                Ravindra <span className="text-gold">IAS</span>
              </span>
              <span className="block text-[10px] text-gold/60 tracking-widest uppercase font-body font-medium -mt-0.5">
                UPSC Coaching
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative text-sm font-body font-medium transition-colors duration-200 group ${
                    isActive ? "text-gold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                  {/* Hover underline */}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-1.5 text-gold/80 hover:text-gold text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => handleNav("#contact")}
              className="hidden sm:block gold-glow bg-gold hover:bg-gold-light text-navy text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
            >
              Enrol Now
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-white/70 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/8 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left text-base py-2.5 border-b border-white/5 font-medium transition-colors ${
                  isActive ? "text-gold" : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-3 w-full bg-gold text-navy font-semibold py-3 rounded-lg text-sm active:scale-95 transition-transform"
          >
            Enrol Now — It's Free to Enquire
          </button>
        </nav>
      </div>
    </header>
  );
}