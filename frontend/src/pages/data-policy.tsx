import React from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Database,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  ["01", "Personal data", "personal-data"],
  ["02", "How we use it", "use-data"],
  ["03", "When we share it", "sharing"],
  ["04", "Where we process it", "processing"],
  ["05", "How we secure it", "security"],
  ["06", "Your rights", "rights"],
];

const rights = [
  ["Access", "Request the information we hold about you."],
  ["Correct", "Update information that is incomplete or incorrect."],
  ["Erase", "Request deletion where applicable."],
  ["Object", "Request that we stop processing your data."],
  ["Portability", "Request transfer of certain data to another controller."],
  ["Withdraw", "Withdraw consent where processing is based on consent."],
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#071321]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 pb-24 pt-32 md:px-12 md:pb-32 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#3B82F6]/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#6FA8FF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6FA8FF]">
              EV Dock / Privacy
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px] lg:items-end">
            <h1 className="text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-white md:text-7xl lg:text-[100px]">
              Your data.
              <span className="block text-[#6FA8FF]">
                Our responsibility.
              </span>
            </h1>

            <div>
              <p className="text-sm leading-7 text-slate-400 md:text-base">
                Learn how Tritan EV Dock Private Limited collects, uses,
                shares, processes and protects personal data.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#6FA8FF]">
                  <LockKeyhole size={16} />
                </div>

                <span className="text-xs text-slate-300">
                  Privacy built into the experience.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY PRINCIPLES */}
      <section className="border-b border-slate-200 bg-white px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Principle
            icon={<ShieldCheck size={18} />}
            title="Protect"
            text="We use appropriate technologies and procedures to protect personal data."
          />

          <Principle
            icon={<Database size={18} />}
            title="Use responsibly"
            text="Personal data is used only where there is a proper reason for doing so."
          />

          <Principle
            icon={<UserRound size={18} />}
            title="Respect your rights"
            text="You can access, correct, erase or object to processing where applicable."
          />
        </div>
      </section>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          {/* INDEX */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Contents
              </p>

              <nav>
                {sections.map(([num, title, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="group flex items-center justify-between border-b border-slate-200 py-3 text-xs text-slate-500 transition hover:text-blue-600"
                  >
                    <span>
                      <span className="mr-3 text-[9px] text-slate-300">
                        {num}
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
              id="personal-data"
              number="01"
              title="Personal Data"
              icon={<UserRound size={18} />}
            >
              <p>
                Personal data refers to data that lets Tritan EV Dock Private
                Limited know the specifics of who you are and which may be used
                to identify, contact or locate you.
              </p>

              <p>
                We collect your personal data when you provide it in scenarios
                such as responding to a survey, registering for events,
                registering for personalized services, requesting product
                information, using our services or requesting customer
                support.
              </p>

              <p>
                We may ask for information such as your name, address, zip
                code, phone number, email address, IP Address, location data
                and information about your device.
              </p>

              <div className="mt-8 border border-slate-200 bg-white p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Third-party sources
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Personal data may also come from employers, organizations,
                  partners, service providers and publicly available websites.
                </p>
              </div>

              <p>
                Tritan EV Dock Private Limited websites may contain links to
                other websites. Tritan EV Dock Private Limited shall not be
                responsible for the privacy notices or content of such
                websites.
              </p>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              id="use-data"
              number="02"
              title="How We Use Your Personal Data"
              icon={<Database size={18} />}
            >
              <p>
                We can only use your personal data if we have a proper reason
                for doing so.
              </p>

              <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {[
                  "To fulfill a contract we have with you",
                  "To meet a legal duty",
                  "When we have your consent",
                  "For legitimate business interests",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 bg-white p-5 text-sm leading-6 text-slate-600"
                  >
                    <Check
                      size={15}
                      className="mt-1 shrink-0 text-blue-600"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <p>
                The use of your information is subject to the privacy notice
                in effect at the time of our use.
              </p>

              <p>
                Tritan EV Dock Private Limited uses information provided to us
                for general business use, including responding to requests,
                providing services and customer support, communicating about
                services and promotions, supporting career opportunities,
                ensuring that our site and services function effectively, and
                measuring advertising and outreach effectiveness.
              </p>

              <div className="border-l-2 border-[#6FA8FF] bg-blue-50/60 px-5 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Marketing & events
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Marketing and event communications may be delivered through
                  email, telephone, text messaging, direct mail and online.
                  Marketing emails include instructions for opting out.
                </p>
              </div>

              <p>
                We may also use and retain personal information for legal and
                compliance reasons, including prevention, detection or
                investigation of crime, loss prevention, fraud, audits and
                information security.
              </p>
            </PolicySection>

            {/* 03 */}
            <PolicySection
              id="sharing"
              number="03"
              title="When We Share Personal Data"
              icon={<Globe2 size={18} />}
            >
              <p>
                Tritan EV Dock Private Limited shares or discloses personal
                data when necessary to provide services or conduct our
                business operations.
              </p>

              <p>
                If personal data is transferred outside, Tritan EV Dock
                Private Limited shall take steps to ensure that privacy rights
                continue to be protected and adequate safeguards are in place.
              </p>

              <div className="mt-8 space-y-px overflow-hidden border border-slate-200 bg-slate-200">
                {[
                  [
                    "Our teams",
                    "Personal information may be made available where necessary for services, account administration, sales and marketing, support, and business development.",
                  ],
                  [
                    "Business partners",
                    "Partners may collect and share information when collaborating on services, content or events.",
                  ],
                  [
                    "Service providers",
                    "Providers may receive personal data only when necessary for services such as software, cloud hosting, advertising or support.",
                  ],
                  [
                    "Legal reasons",
                    "Personal data may be shared to comply with legal obligations, respond to government requests or protect rights, users, systems and services.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="bg-white p-6 md:grid md:grid-cols-[170px_1fr] md:gap-8"
                  >
                    <h3 className="text-sm font-semibold text-[#071321]">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500 md:mt-0">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              id="processing"
              number="04"
              title="Where We Store & Process Personal Data"
              icon={<Globe2 size={18} />}
            >
              <p>
                As an Indian origin organization, Tritan EV Dock Private
                Limited takes steps to ensure that information collected is
                processed according to this privacy notice and applicable law
                wherever the data is located.
              </p>

              <p>
                Tritan EV Dock Private Limited has networks, databases,
                servers, systems, support and help desks located throughout
                offices around the world. We also collaborate with cloud
                hosting services, suppliers and technology support providers.
              </p>

              <div className="relative overflow-hidden bg-[#0B1220] p-7 md:p-9">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
                    Data protection
                  </p>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white">
                    Tritan EV Dock Private Limited will not sell or rent your
                    personal data to anyone.
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                    When information is transferred to countries where
                    applicable laws may not provide the same level of privacy
                    protection, appropriate measures are taken to provide
                    appropriate protection.
                  </p>
                </div>
              </div>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              id="security"
              number="05"
              title="How We Secure Personal Data"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                Tritan EV Dock Private Limited uses appropriate technologies
                and procedures to protect your personal data. Information
                security policies and procedures are reviewed regularly and
                updated as necessary.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {[
                  "Reasonable technological, physical and operational security procedures",
                  "Appropriate restrictions on access to personal data",
                  "Security measures and controls for storing and transferring data",
                  "Regular privacy and information-security training",
                  "Employee and contractor compliance with security policies",
                  "Security requirements and reviews for third-party providers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 bg-white p-5 text-sm leading-7 text-slate-600"
                  >
                    <Check
                      size={15}
                      className="mt-1 shrink-0 text-blue-600"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 06 */}
            <PolicySection
              id="rights"
              number="06"
              title="Your Rights & Your Personal Data"
              icon={<UserRound size={18} />}
            >
              <p>
                We respect your right to access and control your information.
                Where applicable, we will correct, amend or delete your
                personal information. We may need proof of identity before
                exercising these rights.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {rights.map(([title, text]) => (
                  <div
                    key={title}
                    className="bg-white p-6"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      Your right
                    </p>

                    <h3 className="mt-2 text-sm font-semibold">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Requests concerning access to information are addressed within
                one month according to the supplied privacy notice. Additional
                requests for the same data may be subject to an administrative
                fee.
              </p>

              <p>
                You may also have the right to lodge a complaint with the Data
                Protection Representative.
              </p>
            </PolicySection>

            {/* FOOT NOTE */}
            <div className="mt-16 border-t border-slate-200 pt-10">
              <div className="flex items-start gap-4">
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-blue-600"
                />

                <p className="text-sm leading-7 text-slate-500">
                  This page presents the privacy information in a structured
                  reading format. For legal purposes, retain the complete
                  approved privacy notice and its applicable wording.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

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

const Principle = ({
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

      <p className="mt-2 text-xs leading-6 text-slate-500">
        {text}
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;