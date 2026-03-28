import { GraduationCap } from "lucide-react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const footerLinks = {
  "Courses": [
    "Prelims Crash Course",
    "GS Mains Complete",
    "CSE Integrated Program",
    "Interview Prep",
    "Optional Subject",
  ],
  "Resources": [
    "Daily Current Affairs",
    "PYQ Bank",
    "Free Video Lectures",
    "Topper Notes",
    "UPSC Syllabus",
  ],
  "Institute": [
    "About Us",
    "Our Faculty",
    "Results & Selections",
    "Blog",
    "Careers",
  ],
  "Support": [
    "Contact Us",
    "Fee & EMI Options",
    "Privacy Policy",
    "Terms of Use",
    "Refund Policy",
  ],
};

const socials = [
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-navy" strokeWidth={2.2} />
              </div>
              <div>
                <span className="block font-display font-bold text-lg text-white tracking-tight">
                  Ravindra <span className="text-gold">IAS</span>
                </span>
                <span className="block text-[10px] text-gold/60 tracking-widest uppercase -mt-0.5">
                  UPSC Coaching
                </span>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-5 max-w-50">
              Shaping India's civil servants since 2003. Delhi's most trusted UPSC preparation institute.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-gold/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-white/60 hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-gold/80 text-[10px] font-bold uppercase tracking-widest mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/45 text-xs hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Ravindra IAS Coaching Institute. All rights reserved.</p>
          <p>Designed with purpose · Built for aspirants</p>
        </div>
      </div>
    </footer>
  );
}