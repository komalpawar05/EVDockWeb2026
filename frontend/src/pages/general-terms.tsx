import React from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  FileText,
  Gavel,
  ShieldCheck,
  UserCheck,
  Wallet,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contents = [
  ["01", "Definitions", "definitions"],
  ["02", "Eligibility & agreement", "eligibility"],
  ["03", "Account & responsibilities", "account"],
  ["04", "Charging & payments", "payments"],
  ["05", "Wallet", "wallet"],
  ["06", "Complaints", "complaints"],
  ["07", "Service terms", "service"],
  ["08", "Liability & law", "legal"],
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#071321]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 pb-24 pt-32 md:px-12 md:pb-28 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-[#3B82F6]/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#6FA8FF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6FA8FF]">
              EV Dock / Legal
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_390px] lg:items-end">
            <div>
              <h1 className="text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-white md:text-7xl lg:text-[92px]">
                Terms &
                <span className="block text-[#6FA8FF]">
                  Conditions.
                </span>
              </h1>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-400 md:text-base">
                Please read these terms carefully before accessing or using
                the EV Dock application, website and charging services.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#6FA8FF]">
                  <FileText size={16} />
                </div>

                <span className="text-xs leading-5 text-slate-300">
                  Your use of EV Dock constitutes acceptance of these terms.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK OVERVIEW
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-4">
          <Summary
            icon={<UserCheck size={17} />}
            title="Eligibility"
            text="Users must meet the applicable eligibility requirements."
          />

          <Summary
            icon={<Zap size={17} />}
            title="Charging"
            text="Charging fees are based on the applicable configured rates."
          />

          <Summary
            icon={<Wallet size={17} />}
            title="Wallet"
            text="Wallet funds are used for eligible EV charging services."
          />

          <Summary
            icon={<ShieldCheck size={17} />}
            title="Responsibility"
            text="Users are responsible for proper use of the services."
          />
        </div>
      </section>

      {/* =====================================================
          MAIN
      ====================================================== */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          {/* CONTENT NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
                On this page
              </p>

              <nav>
                {contents.map(([number, title, id]) => (
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

            {/* =================================================
                01 DEFINITIONS
            ================================================== */}
            <PolicySection
              id="definitions"
              number="01"
              title="Definitions"
              icon={<FileText size={18} />}
            >
              <p>
                All of the defined and capitalized terms in these User Terms
                will have the meaning assigned to them below.
              </p>

              <div className="overflow-hidden border border-slate-200 bg-white">
                <Definition
                  term="Account"
                  text="The account created by the Customer on the Mobile Application for availing the Services provided by Tritan EV Dock Private Limited."
                />

                <Definition
                  term="Application"
                  text='The mobile application named "Tritan EV Dock Private Limited / EV Dock" updated by Tritan EV Dock Private Limited from time to time.'
                />

                <Definition
                  term="Customer / User / EV Driver"
                  text="A person who has an Account on the Application."
                />

                <Definition
                  term="E-Wallet"
                  text="A prepaid instrument which can be used to make payments."
                />

                <Definition
                  term="EV Charging Session"
                  text="The duration between when a user starts and stops charging an electric vehicle."
                />

                <Definition
                  term="Fare"
                  text="The amount in Indian Rupees reflected on the Application as payable for energy consumed during an EV Charging Session."
                />

                <Definition
                  term="Registration Data"
                  text="Information such as the user's valid name, email ID, phone number and other information required for registration."
                />

                <Definition
                  term="Charging Station"
                  text="A location where one or more Charge Spots are installed."
                />

                <Definition
                  term="Service"
                  text="The facilitation of EV Charging services through the Application or other channels provided by Tritan EV Dock Private Limited."
                />
              </div>

              <div className="mt-7 border-l-2 border-[#6FA8FF] bg-blue-50/60 px-5 py-5">
                <p className="text-sm leading-7 text-slate-600">
                  Where the term “EV Dock” is mentioned, it shall be read as
                  “Tritan EV Dock Private Limited.”
                </p>
              </div>
            </PolicySection>

            {/* =================================================
                02 ELIGIBILITY
            ================================================== */}
            <PolicySection
              id="eligibility"
              number="02"
              title="Eligibility & Agreement"
              icon={<UserCheck size={18} />}
            >
              <p>
                You will be eligible to use the Services only when you fulfill
                the applicable requirements.
              </p>

              <div className="mt-7 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                <RuleCard
                  title="Age requirement"
                  text="You must have attained at least 18 years of age."
                />

                <RuleCard
                  title="Legal capacity"
                  text="You must be competent to enter into a contract under applicable laws."
                />

                <RuleCard
                  title="Local requirements"
                  text="You must comply with age and contractual restrictions applicable in your jurisdiction."
                />

                <RuleCard
                  title="Agreement"
                  text="By accessing or using the Services, you agree to be bound by these User Terms."
                />
              </div>

              <p>
                Please read the EV Dock Account Agreement carefully before
                accessing or using the Services. If you do not accept these
                User Terms, you should not use the Application, Site or
                Services.
              </p>

              <p>
                Your agreement to these User Terms operates as a binding
                agreement between you and Tritan EV Dock Private Limited in
                respect of the use of the Application, Site and Services.
              </p>
            </PolicySection>

            {/* =================================================
                03 ACCOUNT
            ================================================== */}
            <PolicySection
              id="account"
              number="03"
              title="Account & Responsibilities"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                You are responsible for the information associated with your
                account and for the use of the EV Dock Application under your
                user name.
              </p>

              <div className="overflow-hidden border border-slate-200 bg-white">
                {[
                  "Use your EV Dock Card and Mobile Application only according to EV Dock instructions.",
                  "Comply with applicable laws, regulations and station-owner policies.",
                  "Keep your registration and payment information updated.",
                  "Remain responsible for Session Fees billed to your account until applicable changes are reported.",
                  "Immediately report a lost or stolen Card or mobile device with the EV Dock Application installed.",
                ].map((item) => (
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

              <div className="mt-8 border border-amber-200 bg-amber-50 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-700">
                  Lost / stolen access
                </p>

                <p className="mt-3 text-sm leading-7 text-amber-900/70">
                  You remain liable for Session Fees initiated through your
                  Card or EV Dock Mobile Application until the loss or theft
                  has been reported.
                </p>
              </div>
            </PolicySection>

            {/* =================================================
                04 PAYMENTS
            ================================================== */}
            <PolicySection
              id="payments"
              number="04"
              title="Charging & Payments"
              icon={<CreditCard size={18} />}
            >
              <p>
                Card or EV Dock Mobile Application may be used to pay Session
                Fees at publicly accessible EV Dock Enabled Charging Stations
                and at private EV Dock Enabled Charging Stations where you are
                authorized to charge.
              </p>

              <p>
                Before initiation of a charging session, the Application may
                provide an estimated amount based on your charging requirement.
                The final Session Fee is charged according to the applicable
                price and actual consumption.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <PaymentCard
                  icon={<CreditCard size={17} />}
                  title="Payment Gateway"
                  text="Payments may be processed through an authorized payment gateway or processor."
                />

                <PaymentCard
                  icon={<Wallet size={17} />}
                  title="E-Wallet"
                  text="Users may pay eligible EV Charging Service Fees through the EV Dock Wallet."
                />
              </div>

              <p>
                You shall provide appropriate payment information to enable
                EV Dock to receive the applicable amount and create a valid
                invoice for the transaction.
              </p>

              <div className="mt-8 border-l-2 border-[#6FA8FF] bg-blue-50/60 px-5 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Charging balance
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For a charging session to be successfully initiated, the
                  account must have the applicable minimum balance required
                  under the EV Dock payment terms.
                </p>
              </div>
            </PolicySection>

            {/* =================================================
                05 WALLET
            ================================================== */}
            <PolicySection
              id="wallet"
              number="05"
              title="EV Dock Wallet"
              icon={<Wallet size={18} />}
            >
              <p>
                You may choose to pay for the Total EV Charging Service Fee
                through the Tritan EV Dock Private Limited Wallet.
              </p>

              <div className="relative mt-8 overflow-hidden bg-[#0B1220] p-7 md:p-9">
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#6FA8FF]">
                    <Wallet size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
                      EV Dock Wallet
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      Charging payments
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Amount deposited into the EV Dock Wallet can be used for
                      eligible EV Charging Service payments according to the
                      applicable terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <RuleCard
                  title="Offers & referrals"
                  text="Amounts received from offers and referrals are credited to the Wallet."
                />

                <RuleCard
                  title="Refundable amounts"
                  text="Refundable amounts are credited to the Wallet according to the applicable refund process."
                />
              </div>
            </PolicySection>

            {/* =================================================
                06 COMPLAINTS
            ================================================== */}
            <PolicySection
              id="complaints"
              number="06"
              title="Complaints & Transactions"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                If you wish to submit a complaint regarding a particular
                transaction charged to your EV Dock Account, you should notify
                EV Dock within 7 days of the transaction.
              </p>

              <div className="mt-8 border border-slate-200 bg-white p-6 md:p-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Complaint channel
                </p>

                <a
                  href="mailto:evdockin@gmail.com"
                  className="mt-3 block text-lg font-semibold text-[#071321] transition hover:text-blue-600"
                >
                  evdockin@gmail.com
                </a>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Your complaint should clearly indicate the type of error
                  associated with the transaction.
                </p>
              </div>

              <p>
                Complaints regarding incorrect charging costs are processed
                and determined by EV Dock according to the applicable
                complaint process.
              </p>
            </PolicySection>

            {/* =================================================
                07 SERVICE
            ================================================== */}
            <PolicySection
              id="service"
              number="07"
              title="Service & Application"
              icon={<Zap size={18} />}
            >
              <p>
                EV Dock provides technology and charging infrastructure
                services that facilitate locating charging stations, charging
                electric vehicles and making payments for charging sessions.
              </p>

              <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                <RuleCard
                  title="Locate"
                  text="Find EV charging stations within the EV Dock charging network."
                />

                <RuleCard
                  title="Charge"
                  text="Use available EV Dock Enabled Charging Stations for EV charging."
                />

                <RuleCard
                  title="Pay"
                  text="Make payments for applicable charging sessions through supported payment mechanisms."
                />

                <RuleCard
                  title="Network"
                  text="EV Dock's network may support public, residential, commercial and fleet charging use cases."
                />
              </div>

              <p>
                EV Dock may provide information through the Mobile Application
                that can change frequently. EV Dock does not guarantee that
                all information displayed will always be completely current,
                accurate or complete.
              </p>

              <div className="mt-8 border border-slate-200 bg-white p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Service availability
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Your use of the Services is at your sole risk. The Cards,
                  EV Dock Enabled Charging Stations and Mobile Application are
                  provided on an “as is” and “as available” basis, subject to
                  the applicable terms.
                </p>
              </div>
            </PolicySection>

            {/* =================================================
                08 LEGAL
            ================================================== */}
            <PolicySection
              id="legal"
              number="08"
              title="Liability & Governing Law"
              icon={<Gavel size={18} />}
            >
              <p>
                You agree to indemnify and hold harmless EV Dock and the
                applicable indemnified parties from liability arising from
                misuse or misapplication of the Services, damage to charging
                stations or premises, or breach of the Agreement.
              </p>

              <p>
                To the maximum extent allowed by law, the applicable
                limitations of liability and release provisions contained in
                the Agreement shall apply to the Services.
              </p>

              <div className="mt-8 border border-slate-200 bg-white p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Gavel size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      Governing law
                    </p>

                    <h3 className="mt-3 text-lg font-semibold">
                      Laws of India
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      The Agreement is to be construed according to the laws
                      of India. Disputes arising out of or in connection with
                      the Agreement shall be finally settled by arbitration
                      to be held in Mumbai.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            {/* =================================================
                CONTACT
            ================================================== */}
            <div className="mt-16 overflow-hidden bg-[#0B1220] p-7 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
                    Questions?
                  </p>

                  <h3 className="mt-3 text-2xl font-medium text-white">
                    Need clarification?
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Contact EV Dock if you have questions regarding these
                    terms or your charging service.
                  </p>
                </div>

                <a
                  href="mailto:evdockin@gmail.com"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#071321] transition hover:bg-[#6FA8FF] hover:text-white"
                >
                  Contact EV Dock
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ===============================================================
   POLICY SECTION
=============================================================== */

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

/* ===============================================================
   DEFINITION
=============================================================== */

const Definition = ({
  term,
  text,
}: {
  term: string;
  text: string;
}) => (
  <div className="border-b border-slate-100 p-6 last:border-0 md:grid md:grid-cols-[190px_1fr] md:gap-8">
    <h3 className="text-sm font-semibold text-[#071321]">
      “{term}”
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-500 md:mt-0">
      {text}
    </p>
  </div>
);

/* ===============================================================
   RULE CARD
=============================================================== */

const RuleCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div className="bg-white p-6">
    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
      EV Dock
    </p>

    <h3 className="mt-3 text-sm font-semibold">
      {title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      {text}
    </p>
  </div>
);

/* ===============================================================
   PAYMENT CARD
=============================================================== */

const PaymentCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="border border-slate-200 bg-white p-6">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
      {icon}
    </div>

    <h3 className="mt-5 text-sm font-semibold">
      {title}
    </h3>

    <p className="mt-2 text-xs leading-6 text-slate-500">
      {text}
    </p>
  </div>
);

/* ===============================================================
   SUMMARY
=============================================================== */

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
      <h3 className="text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  </div>
);

export default TermsConditions;