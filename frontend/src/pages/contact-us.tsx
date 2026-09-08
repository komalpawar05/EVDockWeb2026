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
} from "lucide-react";

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
      description: "Discuss your charging project with our team.",
      href: "#contact-form",
      label: "Start a conversation",
      iconClass: "bg-blue-50 text-[#1E5FA8]",
      hoverClass: "hover:border-blue-200",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Need help with your existing EV Dock setup?",
      href: "#contact-form",
      label: "Get support",
      iconClass: "bg-violet-50 text-[#7A3FAF]",
      hoverClass: "hover:border-violet-200",
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description: "Explore opportunities to grow with EV Dock.",
      href: "/partner",
      label: "Explore partnership",
      iconClass: "bg-pink-50 text-[#C93C8F]",
      hoverClass: "hover:border-pink-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative overflow-hidden border-b border-slate-100">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[5%] top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-[110px]" />
            <div className="absolute right-[5%] top-10 h-80 w-80 rounded-full bg-violet-100/60 blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-100/40 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left */}
              <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E5FA8] opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1E5FA8]" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Get in touch
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-black leading-[0.98] tracking-[-0.055em]">
                Let's move
                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent">
                  electric mobility
                </span>
                forward.
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-6 text-slate-500 md:text-base md:leading-7">
                Have a charging project in mind? Tell us what you're building and
                let's find the right EV Dock solution for you.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1E5FA8]"
                >
                  Start a conversation
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="mailto:evdockin@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <Mail size={14} />
                  Email us
                </a>
              </div>
          </div>

              {/* Right visual */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-100/60 via-transparent to-violet-100/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950">
                        <Zap className="h-4 w-4 text-white" />
                      </div>

                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                          EV Dock
                        </p>

                        <p className="text-sm font-bold text-slate-900">
                          Charging Platform
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Connected
                    </span>
                  </div>

                  {/* Main visual */}
                  <div className="relative mt-5 overflow-hidden rounded-2xl bg-slate-950 p-6">
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                            Your project
                          </p>

                          <p className="mt-2 text-xl font-bold tracking-tight text-white">
                            Let's build it.
                          </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                          <Sparkles className="h-4 w-4 text-blue-300" />
                        </div>
                      </div>

                      <div className="mt-7 space-y-3">
                        {[
                          "Public charging",
                          "Home charging",
                          "Fleet charging",
                          "Business charging",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2.5"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />

                            <span className="text-xs font-medium text-slate-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between px-1">
                    <p className="text-[10px] text-slate-400">
                      Smart infrastructure
                    </p>

                    <p className="text-[10px] font-semibold text-slate-600">
                      EV Dock
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT OPTIONS
        ========================================================== */}

        <section className="px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-7xl">
            
              <div className="py-8">
                <SectionHeading
                 centered
                  eyebrow="How can we help?"
                  title="Choose where "
                  highlight="to start."
                  description="Whether you're planning a new installation or exploring a partnership, we're here to help."
                />
              </div>
            

            <div className="grid gap-3 md:grid-cols-3">
              {contactOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] ${item.hoverClass}`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconClass}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-900"
                      />
                    </div>

                    <h3 className="mt-5 text-base font-bold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <span className="mt-4 inline-block text-xs font-bold text-slate-700">
                      {item.label}
                    </span>
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
          className="relative overflow-hidden border-y border-slate-100 bg-[#F8FAFC] px-5 py-16 md:px-10 md:py-24"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-100/40 blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Left */}
            <div className="lg:pt-3">
              <SectionHeading
                  eyebrow="Send an enquiry"
                  title="Tell us what."
                  highlight="you're building."
                  description="Share a few details about your requirements. Our team can understand your needs and help you determine the right next step."
                  />

              {/* Contact details */}
              <div className="mt-9 space-y-4">
                <a
                  href="mailto:evdockin@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    <Mail className="h-4 w-4 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800 transition group-hover:text-[#1E5FA8]">
                      evdockin@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919903910391"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    <Phone className="h-4 w-4 text-[#7A3FAF]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800 transition group-hover:text-[#7A3FAF]">
                      +91 9903910391
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    <MapPin className="h-4 w-4 text-[#C93C8F]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Thane, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;
                if (!form.checkValidity()) {
                  form.reportValidity();
                  return;
                }

                setIsSuccess(true);
                form.reset();
              }}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.07)] md:p-7"
            >
              <div className="mb-7 flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    Project enquiry
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Fields marked with * are required.
                  </p>
                </div>

                <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-slate-50 sm:flex">
                  <Zap className="h-4 w-4 text-[#1E5FA8]" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-xs font-bold text-slate-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="text-xs font-bold text-slate-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-slate-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold text-slate-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Requirement */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="requirement"
                    className="text-xs font-bold text-slate-700"
                  >
                    What do you need? *
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="" disabled>
                      Select your requirement
                    </option>
                    <option value="public-charging">
                      Public Charging
                    </option>
                    <option value="home-charging">Home Charging</option>
                    <option value="fleet-charging">Fleet Charging</option>
                    <option value="business-charging">
                      Business Charging
                    </option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-slate-700"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#1E5FA8]"
              >
                Send Enquiry

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
                We'll use your information only to respond to your enquiry.
              </p>
            </form>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}

        <section className="px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              {/* Heading */}
              <div>
                <SectionHeading
                eyebrow="FAQ"
                title="Questions?"
                highlight="We've got answers."
                description="A few things people commonly ask about EV Dock and our charging solutions."
                />
              </div>

              {/* FAQ */}
              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-blue-200 bg-blue-50/30"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                      >
                        <span className="text-sm font-bold leading-6 text-slate-900 md:text-[15px]">
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-[#1E5FA8] text-white"
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
                          <p className="px-5 pb-5 pr-14 text-sm leading-7 text-slate-500">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="px-5 pb-16 md:px-10 md:pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-slate-950 px-6 py-12 md:px-12 md:py-14">
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-500/15 blur-[100px]" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-300" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                    EV Dock
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl font-black tracking-[-0.045em] text-white md:text-4xl">
                  Have a charging project in mind?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Let's turn your EV charging requirements into a practical,
                  connected solution.
                </p>
              </div>

              <a
                href="#contact-form"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-blue-50"
              >
                Start a conversation

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BackToTop />

      {/* SUCCESS MODAL */}
      {isSuccess && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={() => setIsSuccess(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/20 bg-white p-7 shadow-[0_30px_100px_rgba(15,23,42,0.25)] sm:p-9"
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
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                <div className="absolute inset-0 rounded-2xl bg-emerald-100/60 blur-xl" />
                <CheckCircle2 className="relative h-8 w-8 text-emerald-600" />
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-600">
                Enquiry received
              </p>

              <h2
                id="success-title"
                className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950"
              >
                Thank you!
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Your enquiry has been submitted successfully. Our team will
                review your requirements and get back to you soon.
              </p>

              <div className="mt-6 flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Zap className="h-4 w-4 text-[#1E5FA8]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    EV Dock
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    We’ll be in touch regarding your enquiry.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1E5FA8]"
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