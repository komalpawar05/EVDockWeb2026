import React from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  HelpCircle,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  ["01", "Refund policy", "refund"],
  ["02", "Refund eligibility", "eligibility"],
  ["03", "Refund process", "process"],
  ["04", "Refund destination", "wallet"],
  ["05", "Need help?", "support"],
];

const eligibility = [
  "The amount added to the wallet is non-refundable unless a charger technical issue occurs.",
  "If a charging session cannot be completed due to a confirmed charger technical issue, the applicable amount may be eligible for refund.",
  "Refund eligibility may depend on verification of the charging transaction and the issue reported.",
];

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#071321]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 pb-24 pt-32 md:px-12 md:pb-28 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#3B82F6]/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#6FA8FF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6FA8FF]">
              EV Dock / Refund Policy
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_390px] lg:items-end">
            <h1 className="text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-white md:text-7xl lg:text-[92px]">
              Refund
              <span className="block text-[#6FA8FF]">
                Policy.
              </span>
            </h1>

            <div>
              <p className="text-sm leading-7 text-slate-400 md:text-base">
                Information about refunds related to EV charging payments,
                wallet transactions and confirmed charger issues.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#6FA8FF]">
                  <Wallet size={16} />
                </div>

                <span className="text-xs leading-5 text-slate-300">
                  Simple and transparent refund information.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="border-b border-slate-200 bg-white px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-3">
          <Summary
            icon={<Zap size={17} />}
            title="Charging issue"
            text="Refunds may apply when a confirmed technical issue prevents charging."
          />

          <Summary
            icon={<Wallet size={17} />}
            title="Wallet"
            text="Approved refunds are credited to the EV Dock wallet."
          />

          <Summary
            icon={<ShieldCheck size={17} />}
            title="Verification"
            text="Transactions and reported issues may be reviewed before processing."
          />
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          {/* NAVIGATION */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
                On this page
              </p>

              <nav>
                {sections.map(([number, title, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="group flex items-center justify-between border-b border-slate-200 py-3 text-xs text-slate-500 transition hover:text-blue-600"
                  >
                    <span>
                      <span className="mr-3 text-[9px] text-slate-300">
                        {number}
                      </span>

                      {title}
                    </span>

                    <ChevronRight
                      size={13}
                      className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="max-w-4xl">

            {/* 01 */}
            <PolicySection
              id="refund"
              number="01"
              title="Refund Policy"
              icon={<Wallet size={18} />}
            >
              <p>
                EV Dock provides refunds for eligible charging transactions
                where a confirmed technical issue with the charger prevents
                the charging service from being completed.
              </p>

              <p>
                Refund requests may be reviewed against the relevant charging
                transaction and station information before being processed.
              </p>

              <div className="mt-8 border-l-2 border-[#6FA8FF] bg-blue-50/60 px-5 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Important
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The amount added to the wallet is non-refundable unless a
                  charger technical issue occurs.
                </p>
              </div>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              id="eligibility"
              number="02"
              title="Refund Eligibility"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                Refund eligibility is determined based on the circumstances
                of the charging transaction and the issue reported.
              </p>

              <div className="mt-8 overflow-hidden border border-slate-200 bg-white">
                {eligibility.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-slate-100 px-6 py-5 last:border-0"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={12} />
                    </span>

                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 03 */}
            <PolicySection
              id="process"
              number="03"
              title="Refund Process"
              icon={<CreditCard size={18} />}
            >
              <p>
                If you experience a technical issue while using an EV Dock
                charging station, contact EV Dock support and provide the
                relevant charging and transaction details.
              </p>

              <div className="mt-8 border border-slate-200 bg-white">
                <Step
                  number="01"
                  title="Report the issue"
                  text="Contact EV Dock support and explain the charging issue."
                />

                <Step
                  number="02"
                  title="Transaction review"
                  text="The relevant charging transaction and station information may be reviewed."
                />

                <Step
                  number="03"
                  title="Refund decision"
                  text="If the issue is confirmed and the transaction is eligible, the refund will be processed."
                />
              </div>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              id="wallet"
              number="04"
              title="Refund Destination"
              icon={<Wallet size={18} />}
            >
              <p>
                Where a refund has been approved, the amount will be credited
                to the Tritan EV Dock Private Limited wallet.
              </p>

              <div className="relative mt-8 overflow-hidden bg-[#0B1220] p-7 md:p-9">
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#6FA8FF]">
                    <Wallet size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
                      Refund destination
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      EV Dock Wallet
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Approved refunds are credited to the user's EV Dock
                      wallet according to the applicable refund process.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              id="support"
              number="05"
              title="Need Help?"
              icon={<HelpCircle size={18} />}
            >
              <p>
                If you believe you are eligible for a refund or experience a
                problem with a charging transaction, please contact EV Dock
                customer support with the relevant details.
              </p>

              <div className="mt-8 overflow-hidden bg-[#0B1220] p-7 md:p-9">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
                  EV Dock Support
                </p>

                <h3 className="mt-3 text-2xl font-medium text-white">
                  Have a charging issue?
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  Share your charging station and transaction details with
                  our support team so the issue can be reviewed.
                </p>

                <a
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#071321] transition hover:bg-[#6FA8FF] hover:text-white"
                >
                  Contact support

                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </PolicySection>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* SECTION */

const PolicySection = ({
  id,
  number,
  title,
  icon,
  children,
}: {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="scroll-mt-28 border-b border-slate-200 py-16 first:pt-0"
  >
    <div className="flex items-start gap-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
          {number} / EV DOCK
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
          {title}
        </h2>
      </div>
    </div>

    <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600">
      {children}
    </div>
  </section>
);

/* STEP */

const Step = ({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) => (
  <div className="flex gap-5 border-b border-slate-100 p-6 last:border-0">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1220] text-[10px] font-bold text-white">
      {number}
    </span>

    <div>
      <h3 className="text-sm font-semibold text-[#071321]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  </div>
);

/* SUMMARY */

const Summary = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex gap-4 border-l border-slate-200 pl-5">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
      {icon}
    </div>

    <div>
      <h3 className="text-sm font-semibold">{title}</h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  </div>
);

export default RefundPolicy;