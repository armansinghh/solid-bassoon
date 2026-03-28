import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const courses = [
  "GS Prelims Crash Course",
  "GS Mains Complete",
  "CSE Integrated Program",
  "Personality Test Prep",
  "Optional Subject (PSIR)",
  "CSAT Mastery",
  "Not Sure — Need Guidance",
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Centre",
    value: "14-A, Mukherjee Nagar, Delhi – 110009",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98XXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admissions@ravindraias.in",
    href: "mailto:admissions@ravindraias.in",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", course: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number";
    if (!form.email.includes("@"))    e.email = "Enter a valid email";
    if (!form.course)                  e.course = "Please select a course";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">
            Enrolment
          </p>
          <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-4">
            <span className="title-underline title-underline-center">
              Take the First Step Today
            </span>
          </h2>
          <p className="text-muted text-base max-w-lg mx-auto mt-6">
            Fill the form below and our counsellor will call you within 24 hours — 
            no pressure, just clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            <div className="bg-navy rounded-2xl p-7 flex flex-col gap-6">
              <div>
                <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-2">
                  Reach Us Directly
                </p>
                <p className="text-white/50 text-sm">
                  Prefer to talk? We're reachable through any channel below.
                </p>
              </div>

              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/25 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-5 border border-cream-dark">
              <p className="font-semibold text-navy text-sm mb-3">Office Hours</p>
              <div className="flex flex-col gap-1.5 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Monday – Saturday</span>
                  <span className="text-navy font-medium">9 AM – 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-navy font-medium">10 AM – 2 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-cream-dark p-7 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl">
                  Enquiry Received!
                </h3>
                <p className="text-muted text-sm max-w-xs">
                  Our counsellor will call you within 24 hours. 
                  Check your email for a confirmation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",course:"",message:"" }); }}
                  className="mt-2 text-gold text-sm font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <h3 className="font-display font-bold text-navy text-lg mb-1">
                  Free Counselling Enquiry
                </h3>

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={inputCls(errors.name)}
                    />
                  </Field>
                  <Field label="Mobile Number" error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="Your Mobile Number"
                      value={form.phone}
                      maxLength={10}
                      onChange={(e) => handleChange("phone", e.target.value.replace(/\D/, ""))}
                      className={inputCls(errors.phone)}
                    />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputCls(errors.email)}
                  />
                </Field>

                {/* Course dropdown */}
                <Field label="Course You're Interested In" error={errors.course}>
                  <select
                    value={form.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    className={inputCls(errors.course) + " bg-white"}
                  >
                    <option value="">Select a course…</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field label="Message (Optional)">
                  <textarea
                    rows={3}
                    placeholder="Tell us where you are in your preparation…"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={inputCls() + " resize-none"}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/85 disabled:opacity-60 text-gold font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg active:scale-95 text-sm"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry — It's Free
                    </>
                  )}
                </button>

                <p className="text-center text-muted text-xs">
                  No spam. No pressure. Just a conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Helper sub-components --- */
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-navy/70 text-xs font-semibold">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

function inputCls(error) {
  return `w-full text-sm text-navy placeholder-muted/60 border rounded-lg px-3.5 py-2.5 outline-none transition-all focus:ring-2 focus:ring-gold/30 focus:border-gold ${
    error
      ? "border-red-400 bg-red-50/30"
      : "border-cream-dark hover:border-navy/20 focus:border-gold"
  }`;
}