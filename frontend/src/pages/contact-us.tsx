import React, { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Zap,
  MessageCircle,
  Building2,
  Headphones,
  CheckCircle2,
  Sparkles,
  X,
  BatteryCharging,
  Globe2,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/Common/BackToTop";
import SectionHeading from "../components/Common/SectionHeading";

const ContactUs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const faqs = [
    {
      question: "What EV charging solutions does EV Dock provide?",
      answer:
        "EV Dock provides charging solutions for public locations, homes, businesses, fleets and other EV infrastructure requirements.",
    },
    {
      question: "Can EV Dock help me choose the right charger?",
      answer:
        "Yes. Our team can understand your location, usage requirements and charging needs and help you identify a suitable solution.",
    },
    {
      question: "Do you work with businesses and property owners?",
      answer:
        "Yes. EV Dock works with businesses, commercial properties, operators and partners looking to deploy or expand EV charging infrastructure.",
    },
    {
      question: "Can I become an EV Dock partner?",
      answer:
        "Yes. You can explore partnership opportunities with EV Dock through our Partner With Us page.",
    },
    {
      question: "How do I get started?",
      answer:
        "Fill in the enquiry form with your requirements and our team can get in touch with you regarding the next steps.",
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Talk to Sales",
      description:
        "Discuss your charging project, requirements and deployment plans with our team.",
      label: "Start a conversation",
      href: "#contact-form",
      number: "01",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Already using EV Dock? Get help with your charging setup and requirements.",
      label: "Get support",
      href: "#contact-form",
      number: "02",
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description:
        "Explore opportunities to build, deploy and grow EV charging infrastructure.",
      label: "Explore partnership",
      href: "/partner",
      number: "03",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSuccess(true);
    form.reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F9FC] text-slate-950">
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#07111F]">
          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
            <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Hero content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">
                    EV Dock · Let's connect
                  </span>
                </div>
                <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-[56px]">
                   Let's power

                  <span className="block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
                    your next move.
                  </span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                  Have an EV charging project in mind? Tell us what you're
                  building and we'll help you find the right way forward.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#contact-form"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Start a conversation
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="mailto:evdockin@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <Mail size={15} />
                    Email us
                  </a>
                </div>

                {/* Trust points */}
                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">
                      Reliable infrastructure
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">
                      Quick response
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">
                      EV-ready solutions
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="relative mx-auto w-full max-w-[500px]">
                <div className="absolute -inset-8 rounded-[50px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-3xl" />

                <div className="relative rounded-[34px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  {/* Dashboard */}
                  <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0B1727]">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
                          <Zap className="h-5 w-5 text-white" />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            EV Dock
                          </p>
                          <p className="text-sm font-bold text-white">
                            Smart charging
                          </p>
                        </div>
                      </div>

                      <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Online
                      </span>
                    </div>

                    {/* Charging visual */}
                    <div className="relative m-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#10253D] to-[#081321] p-6">
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                      <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                              Your project
                            </p>

                            <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                              Let's build it.
                            </h3>
                          </div>

                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                            <Sparkles className="h-5 w-5 text-cyan-300" />
                          </div>
                        </div>

                        <div className="mt-8 space-y-2.5">
                          {[
                            "Public charging",
                            "Home charging",
                            "Fleet charging",
                            "Business charging",
                          ].map((item, index) => (
                            <div
                              key={item}
                              className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.035] px-4 py-3 transition hover:border-cyan-400/20 hover:bg-white/[0.06]"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                                </span>

                                <span className="text-xs font-medium text-slate-300">
                                  {item}
                                </span>
                              </div>

                              <span className="text-[9px] font-bold text-slate-600">
                                0{index + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom stats */}
                    <div className="grid grid-cols-2 gap-px bg-white/10">
                      <div className="bg-[#0B1727] p-5">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                          Infrastructure
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          Connected
                        </p>
                      </div>

                      <div className="bg-[#0B1727] p-5">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                          Support
                        </p>
                        <p className="mt-1 text-sm font-bold text-cyan-300">
                          Ready to help
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#101D2D] px-4 py-3 shadow-2xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                      <BatteryCharging className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Ready
                      </p>
                      <p className="text-xs font-bold text-white">
                        Powering tomorrow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT OPTIONS
        ========================================================== */}
        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="How can we help?"
                title="One conversation."
                highlight="Multiple ways forward."
                description="Choose the path that matches your requirement and let's start
                building the right EV charging solution."
              />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {contactOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                  >
                    <div className="absolute right-5 top-5 text-[11px] font-black tracking-widest text-slate-200 transition group-hover:text-blue-100">
                      {item.number}
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-7 text-xl font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-black text-slate-900">
                      {item.label}

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT FORM
        ========================================================== */}
        <section
          id="contact-form"
          className="relative overflow-hidden bg-[#F1F5F9] px-5 py-20 md:px-10 md:py-28"
        >
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/50 blur-[130px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/40 blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
           {/* Left */}
            <div className="lg:pt-8">
              <SectionHeading
                eyebrow="Send an enquiry"
                title="Tell us what"
                highlight="you're building."
                description="Share a few details about your project. Our team can understand
                your requirements and help determine the right next step."
              />

              <div className="mt-10 space-y-3">
                {/* Email */}
                <a
                  href="mailto:evdockin@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      evdockin@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919903910391"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-violet-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Phone className="h-4 w-4 text-violet-600" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      +91 9903910391
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50">
                    <MapPin className="h-4 w-4 text-pink-600" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Thane, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-7">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Follow EV Dock
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/ev.dock"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 hover:shadow-lg"
                  >
                    <FaInstagram className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>

                  <a
                    href="https://www.facebook.com/people/EV-Dock/61591772826693/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg"
                  >
                    <FaFacebookF className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>

                  <a
                    href="https://in.linkedin.com/company/-evdock"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg"
                  >
                    <FaLinkedinIn className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>

                  <a
                    href="https://www.youtube.com/@tritanevdock"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-lg"
                  >
                    <FaYoutube className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
              </div>
              </div>
            </div>

            {/* Form */}
            <form
  onSubmit={handleSubmit}
  className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
>
  {/* Top accent */}
  <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-violet-600" />

  {/* Header */}
  <div className="border-b border-slate-100 px-6 py-6 md:px-8">
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600">
            Contact EV Dock
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-slate-950 md:text-3xl">
          Let's talk.
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-slate-400">
          Tell us about your project and we'll take it from there.
        </p>
      </div>

      <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 shadow-lg sm:flex">
        <Zap className="h-5 w-5 text-cyan-300" />
      </div>
    </div>

    {/* Progress indicator */}
    <div className="mt-6 flex items-center gap-3">
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-1/3 rounded-full bg-blue-600" />
      </div>

      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
        Quick enquiry
      </span>
    </div>
  </div>

  {/* Form body */}
  <div className="px-6 py-7 md:px-8 md:py-8">
    <div className="grid gap-6 md:grid-cols-2">
      {/* Full Name */}
      <div className="group">
        <label
          htmlFor="fullName"
          className="flex items-center gap-2 text-xs font-bold text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-[9px] font-black text-blue-600">
            01
          </span>
          Full Name <span className="text-blue-600">*</span>
        </label>

        <div className="relative mt-2.5">
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Enter your name"
            className="peer w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

          <div className="pointer-events-none absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-blue-600 transition-transform duration-300 peer-focus:scale-x-100" />
        </div>
      </div>

      {/* Company */}
      <div className="group">
        <label
          htmlFor="company"
          className="flex items-center gap-2 text-xs font-bold text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-50 text-[9px] font-black text-violet-600">
            02
          </span>
          Company
        </label>

        <div className="relative mt-2.5">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className="peer w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
          />

          <div className="pointer-events-none absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-violet-600 transition-transform duration-300 peer-focus:scale-x-100" />
        </div>
      </div>

      {/* Email */}
      <div className="group">
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-xs font-bold text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-50 text-[9px] font-black text-cyan-600">
            03
          </span>
          Email Address <span className="text-blue-600">*</span>
        </label>

        <div className="relative mt-2.5">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className="peer w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
          />

          <div className="pointer-events-none absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-cyan-500 transition-transform duration-300 peer-focus:scale-x-100" />
        </div>
      </div>

      {/* Phone */}
      <div className="group">
        <label
          htmlFor="phone"
          className="flex items-center gap-2 text-xs font-bold text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-50 text-[9px] font-black text-emerald-600">
            04
          </span>
          Phone Number <span className="text-blue-600">*</span>
        </label>

        <div className="relative mt-2.5">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+91 00000 00000"
            className="peer w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
          />

          <div className="pointer-events-none absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-emerald-500 transition-transform duration-300 peer-focus:scale-x-100" />
        </div>
      </div>

      {/* Requirement */}
      <div className="md:col-span-2">
        <label
          htmlFor="requirement"
          className="flex items-center gap-2 text-xs font-bold text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-orange-50 text-[9px] font-black text-orange-600">
            05
          </span>
          What do you need? <span className="text-blue-600">*</span>
        </label>

        <div className="relative mt-2.5">
          <select
            id="requirement"
            name="requirement"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 pr-10 text-sm font-medium text-slate-600 outline-none transition-all duration-200 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="" disabled>
              Select your requirement
            </option>
            <option value="public-charging">Public Charging</option>
            <option value="home-charging">Home Charging</option>
            <option value="fleet-charging">Fleet Charging</option>
            <option value="business-charging">Business Charging</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>

          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-xs font-bold text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-pink-50 text-[9px] font-black text-pink-600">
            06
          </span>
          Tell us about your project{" "}
          <span className="text-blue-600">*</span>
        </label>

        <div className="relative mt-2.5">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your location, charging requirements, fleet size, installation plans..."
            className="peer w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-500/10"
          />

          <div className="pointer-events-none absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-pink-500 transition-transform duration-300 peer-focus:scale-x-100" />
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-7 border-t border-slate-100 pt-6">
      <button
        type="submit"
        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20"
      >
        {/* Button shine */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative">Send Enquiry</span>

        <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </button>

      <div className="mt-4 flex items-center justify-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />

        <p className="text-[10px] text-slate-400">
          Your information is secure and will only be used to respond to your
          enquiry.
        </p>
      </div>
    </div>
  </div>
</form>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section className="bg-white px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionHeading
              eyebrow="FAQ"
              title=" Questions?"
              highlight="We've got answers."
              description="A few things people commonly ask about EV Dock and our
                charging solutions."
              />
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600">
                <MessageCircle className="h-3.5 w-3.5 text-blue-600" />
                Still have a question?
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50/40 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`text-[10px] font-black ${
                            isOpen
                              ? "text-blue-600"
                              : "text-slate-300"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <span className="text-sm font-bold leading-6 text-slate-900 md:text-[15px]">
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 pl-[58px] pr-12 text-sm leading-7 text-slate-500 md:px-6 md:pl-[68px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="bg-white px-5 pb-20 md:px-10 md:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#07111F] px-7 py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-violet-600/15 blur-[120px]" />

            <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                    <Zap className="h-4 w-4 text-cyan-300" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-300">
                    EV Dock
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.045em] text-white md:text-5xl">
                  Ready to move
                  <span className="text-cyan-300"> electric?</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
                  Let's turn your EV charging requirements into a practical,
                  connected solution.
                </p>
              </div>

              <a
                href="#contact-form"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Start a conversation

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BackToTop />

      {/* =========================================================
          SUCCESS MODAL
      ========================================================== */}
      {isSuccess && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020817]/70 px-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={() => setIsSuccess(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-[30px] border border-white/20 bg-white p-7 shadow-[0_40px_120px_rgba(0,0,0,0.25)] sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close success message"
              onClick={() => setIsSuccess(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] bg-emerald-50">
                <div className="absolute inset-0 rounded-[24px] bg-emerald-100/70 blur-xl" />

                <CheckCircle2 className="relative h-10 w-10 text-emerald-600" />
              </div>

              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-600">
                Enquiry received
              </p>

              <h2
                id="success-title"
                className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950"
              >
                Thank you!
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Your enquiry has been submitted successfully. Our team will
                review your requirements and get back to you soon.
              </p>

              <div className="mt-7 flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-800">
                    EV Dock
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-400">
                    We'll be in touch regarding your enquiry.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-600"
              >
                Continue browsing
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;