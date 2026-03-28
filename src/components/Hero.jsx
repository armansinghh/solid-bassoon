import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  CalendarDays,
} from "lucide-react";

/* ── Animated counter ── */
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ icon: Icon, value, suffix, label, delay }) {
  const { count, ref } = useCounter(value);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-1 animate-fade-up ${delay}`}
    >
      <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-1">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <p className="font-display text-3xl font-bold text-white">
        {count.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="text-white/45 text-xs font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

/* ── Countdown tile ── */
function CountTile({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 border border-white/15 rounded-lg px-2.5 py-2 min-w-10 text-center">
        <span className="font-display font-bold text-gold text-lg tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-white/35 text-[9px] uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}

/* ── Live batch countdown ── */
function BatchCountdown() {
  const getTarget = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 1, 9, 0, 0);
  };

  const calc = () => {
    const diff = Math.max(0, getTarget() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="animate-fade-up delay-600 inline-flex items-center gap-2 bg-white/6 border border-white/12 rounded-2xl px-3 sm:px-5 py-3 backdrop-blur-sm w-full sm:w-auto">
      <CalendarDays className="w-4 h-4 text-gold shrink-0" />
      <span className="text-white/60 text-xs font-medium shrink-0">
        Next batch in
      </span>
      <div className="flex items-center gap-1.5 sm:gap-2 ml-auto sm:ml-0">
        <CountTile value={time.d} label="Days" />
        <span className="text-white/30 font-bold text-sm -mt-3">:</span>
        <CountTile value={time.h} label="Hrs" />
        <span className="text-white/30 font-bold text-sm -mt-3">:</span>
        <CountTile value={time.m} label="Min" />
        <span className="text-white/30 font-bold text-sm -mt-3">:</span>
        <CountTile value={time.s} label="Sec" />
      </div>
    </div>
  );
}

/* ── MAIN HERO ── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Infinite scrolling image background ── */}
      {/* overflow-hidden clips the strip; animate-scroll-bg is on the INNER flex div */}
      {/* ── Infinite scrolling image background ── */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="flex h-full"
          style={{
            width: "200%",
            animation: "scroll-bg 30s linear infinite",
          }}
        >
          <img
            src="/images/bg-ias2.jpeg"
            className="w-1/2 h-full object-cover"
            alt=""
          />
          <img
            src="/images/bg-ias3.jpeg"
            className="w-1/2 h-full object-cover"
            alt=""
          />
        </div>
      </div>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-[2px]" />

      {/* ── Animated blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-pulse absolute top-1/4 -left-40 w-125 h-125 rounded-full bg-gold/7 blur-3xl" />
        <div
          className="blob-pulse absolute bottom-1/4 -right-40 w-125 h-125 rounded-full bg-gold/5 blur-3xl"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#C9A84C 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold font-semibold px-3.5 py-1.5 rounded-full mb-7 tracking-wider uppercase">
            <Star className="w-3 h-3 fill-gold" />
            <span className="text-xs">
              India's Most Trusted UPSC Coaching · Est. 2003
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.07] mb-5">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              Your Journey to
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl italic text-gold">
              IAS Starts Here.
            </span>
          </h1>

          <p className="text-white/55 text-lg max-w-xl mb-8">
            Structured coaching for Prelims, Mains & Interview — designed by
            rank-holders, for aspirants who mean business.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mb-8">
            <button className="bg-gold text-navy px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/20 text-white px-6 py-3 rounded-xl">
              About Ravindra IAS
            </button>
          </div>

          <BatchCountdown />
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
          <StatCard icon={Award} value={350} suffix="+" label="Selections" delay="delay-100" />
          <StatCard icon={Users} value={15000} suffix="+" label="Students" delay="delay-200" />
          <StatCard icon={TrendingUp} value={22} suffix=" Yrs" label="Exp" delay="delay-300" />
          <StatCard icon={Star} value={98} suffix="%" label="Satisfaction" delay="delay-400" />
        </div>
      </div>
    </section>
  );
}