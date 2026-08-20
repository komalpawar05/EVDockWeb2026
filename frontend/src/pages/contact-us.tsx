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
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/Common/BackToTop";

const ContactUs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  return (
    <div className="min-h-screen bg-white text-slate-950">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">

          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(30,95,168,0.10),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(122,63,175,0.10),transparent_30%)]" />

          <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[120px]" />

          <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-100/50 blur-[100px]" />

          <div className="mx-auto max-w-7xl">

            <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr]">

              {/* Left */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                  <span className="h-2 w-2 rounded-full bg-[#1E5FA8]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E5FA8]">
                    GET IN TOUCH
                  </span>

                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl">

                  Let’s move

                  <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent">
                    electric mobility
                  </span>

                  forward.

                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                  Have a charging project in mind? Tell us what you're
                  building and let's find the right EV Dock solution for you.
                </p>

              </div>


              {/* Right Mini Card */}

              <div className="relative hidden lg:block">

                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950">
                        <Zap className="h-5 w-5 text-white" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          EV DOCK
                        </p>

                        <p className="text-sm font-bold">
                          Charging Solutions
                        </p>
                      </div>

                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-600">
                      CONNECTED
                    </span>

                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                    <p className="text-xs font-medium text-slate-400">
                      Start your project
                    </p>

                    <p className="mt-2 text-xl font-bold tracking-tight">
                      Tell us what you need.
                    </p>

                    <div className="mt-5 space-y-3">

                      {[
                        "Public charging",
                        "Home charging",
                        "Fleet charging",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#1E5FA8]" />

                          <span className="text-sm text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT OPTIONS
        ====================================================== */}

        <section className="px-5 pb-20 md:px-10 md:pb-28">

          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">

            {/* Sales */}

            <div className="group rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(30,95,168,0.10)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <MessageCircle className="h-5 w-5 text-[#1E5FA8]" />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Talk to Sales
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Discuss your charging requirements with our team.
              </p>

              <a
                href="#contact-form"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1E5FA8]"
              >
                Start a conversation
                <ArrowRight size={15} />
              </a>

            </div>


            {/* Support */}

            <div className="group rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(122,63,175,0.10)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">
                <Headphones className="h-5 w-5 text-[#7A3FAF]" />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Customer Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Need help with your existing EV Dock setup?
              </p>

              <a
                href="#contact-form"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#7A3FAF]"
              >
                Get support
                <ArrowRight size={15} />
              </a>

            </div>


            {/* Partnership */}

            <div className="group rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_50px_rgba(201,60,143,0.10)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50">
                <Building2 className="h-5 w-5 text-[#C93C8F]" />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Partner With Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore opportunities to grow with EV Dock.
              </p>

              <a
                href="/partner"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C93C8F]"
              >
                Explore partnership
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT FORM
        ====================================================== */}

        <section
          id="contact-form"
          className="bg-slate-50 px-5 py-20 md:px-10 md:py-28"
        >

          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Left */}

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E5FA8]">
                SEND AN ENQUIRY
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] md:text-5xl">

                Let's talk about

                <span className="block text-[#1E5FA8]">
                  your project.
                </span>

              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                Complete the form and share some details about your
                requirements. Our team can help you determine the next step.
              </p>


              <div className="mt-9 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Mail className="h-4 w-4 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Your email address
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Phone className="h-4 w-4 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Your phone number
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <MapPin className="h-4 w-4 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      India
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Form */}

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="text-xs font-bold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>


                <div>
                  <label className="text-xs font-bold text-slate-700">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>


                <div>
                  <label className="text-xs font-bold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>


                <div>
                  <label className="text-xs font-bold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>


                <div className="md:col-span-2">

                  <label className="text-xs font-bold text-slate-700">
                    What do you need?
                  </label>

                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10">

                    <option value="">
                      Select your requirement
                    </option>

                    <option>
                      Public Charging
                    </option>

                    <option>
                      Home Charging
                    </option>

                    <option>
                      Fleet Charging
                    </option>

                    <option>
                      Business Charging
                    </option>

                    <option>
                      Partnership
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </div>


                <div className="md:col-span-2">

                  <label className="text-xs font-bold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1E5FA8] focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

              </div>


              <button className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1E5FA8]">

                Send Enquiry

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

              <p className="mt-4 text-center text-[11px] text-slate-400">
                We’ll use your information only to respond to your enquiry.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="px-5 py-20 md:px-10 md:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E5FA8]">
                FAQ
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-5xl">

                Got questions?

                <span className="block bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] bg-clip-text text-transparent">
                  We've got answers.
                </span>

              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                A few things people commonly ask about EV Dock.
              </p>

            </div>


            <div className="mx-auto mt-12 max-w-4xl space-y-3">

              {faqs.map((faq, index) => {

                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border transition ${
                      isOpen
                        ? "border-blue-200 bg-blue-50/40"
                        : "border-slate-200 bg-white"
                    }`}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    >

                      <span className="text-sm font-bold text-slate-900 md:text-base">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-[#1E5FA8] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >

                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
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

                        <p className="px-6 pb-6 pr-16 text-sm leading-7 text-slate-500">
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


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-5 pb-20 md:px-10 md:pb-28">

          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-slate-950 px-7 py-12 text-center md:px-12">

            <div className="absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Zap className="h-5 w-5 text-blue-300" />
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">
                Have a charging project in mind?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Let's turn your EV charging requirements into a practical
                solution.
              </p>

              <a
                href="#contact-form"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
              >
                Start a Conversation
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

      <BackToTop />

    </div>
  );
};

export default ContactUs;