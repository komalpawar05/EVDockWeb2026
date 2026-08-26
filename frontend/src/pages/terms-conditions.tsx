import React from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contents = [
  ["01", "Registration & Account", "registration"],
  ["02", "Services", "services"],
];

const serviceRules = [
  "You will only use the Service or download the Application for Your sole, personal use and will not resell or assign it to a third party.",
  "You will not use an account that is subject to any rights of a person other than You without appropriate authorization.",
  "You will not use the Service or Site/Application for unlawful purposes.",
  "You will not try to harm the Service, Site, Application or our network in any way whatsoever.",
  "You will provide Tritan EV Dock Private Limited with such information and documents which Tritan EV Dock Private Limited may reasonably request.",
  "You will only use an authorized network to avail the Service.",
  "You will comply with all Applicable Law from Your country of domicile and residence and the country, state and/or city in which You are present while using the Site, Application or Service.",
  "You are aware of and shall comply with the Information Technology Act, 2000 and the rules, regulations and guidelines notified there under.",
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#071321]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 pb-24 pt-32 md:px-12 md:pb-28 lg:px-20">
        {/* Technical grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#3B82F6]/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#6FA8FF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6FA8FF]">
              EV Dock / Legal
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-white md:text-7xl lg:text-[92px]">
                Terms &
                <span className="block text-[#6FA8FF]">
                  Conditions.
                </span>
              </h1>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-400 md:text-base">
                The terms that govern your use of EV Dock services,
                applications and accounts.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#6FA8FF]">
                  <FileText size={16} />
                </div>

                <span className="text-xs font-medium text-slate-300">
                  Please read these terms carefully.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK OVERVIEW
      ========================================================== */}
      <section className="border-b border-slate-200 bg-white px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Info
            number="01"
            title="Your account"
            text="You are responsible for maintaining the confidentiality of your account."
          />

          <Info
            number="02"
            title="Your usage"
            text="Services and applications must be used only for permitted purposes."
          />

          <Info
            number="03"
            title="Your responsibility"
            text="You must provide accurate information and comply with applicable law."
          />
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          {/* STICKY CONTENTS */}
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

            {/* =====================================================
                REGISTRATION
            ====================================================== */}
            <section
              id="registration"
              className="scroll-mt-28 border-b border-slate-200 pb-16"
            >
              <SectionHeader
                number="01"
                title="Registration and Account"
                icon={<LockKeyhole size={18} />}
              />

              <div className="mt-9 space-y-6 text-[15px] leading-8 text-slate-600">

                <p>
                  You are solely responsible for maintaining the
                  confidentiality of Your Registration Data and will be liable
                  for all activities and transactions that occur through Your
                  Account, whether initiated by you or any third party. Your
                  Account cannot be transferred, assigned or sold to a third
                  party. We shall not be liable for any loss that you may incur
                  as a result of someone else using Your password or Account,
                  either with or without your knowledge.
                </p>

                <p>
                  We reserve the right to suspend or terminate Your Account
                  with immediate effect and for an indefinite period, if We
                  have a reason to believe that the Registration Data or any
                  other data provided by You is incorrect or false, or that
                  the security of Your Account has been compromised in any way,
                  or for any other reason We may find just or equitable.
                </p>

                <p>
                  Except for the Registration Data or any other data submitted
                  by You during the use of any other service offered through
                  Application (“Permitted Information”), Tritan EV Dock
                  Private Limited does not want You to, and You should not,
                  send any confidential or proprietary information to Tritan EV
                  Dock Private Limited on the Application or otherwise, unless
                  otherwise is required by Applicable Laws.
                </p>

                <p>
                  In accepting these User Terms You agree that any information
                  or materials that You or individuals acting on Your behalf
                  provide to Tritan EV Dock Private Limited other than the
                  Permitted Information will not be considered confidential or
                  proprietary.
                </p>

                {/* DEVICE NOTICE */}
                <Notice
                  icon={<Smartphone size={17} />}
                  title="Application compatibility"
                >
                  It is your responsibility to check to ensure that you
                  download the correct application for Your device. We are not
                  liable if you do not have a compatible mobile device or if
                  you download the wrong version of the Application for Your
                  mobile device.
                </Notice>

                <p>
                  We reserve the right to terminate the Service and the use of
                  the Application should you be using the Service or
                  Application with an incompatible or unauthorized device.
                </p>

                {/* ACCOUNT LIMIT */}
                <div className="border border-slate-200 bg-white p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#071321]">
                        Account limitation
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        We allow you to open only one Account in association
                        with the Registration Data provided by you.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  In case of any unauthorized use of Your Account please
                  immediately reach us at{" "}
                  <a
                    href="mailto:customercare@evdock.app"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    customercare@evdock.app
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* =====================================================
                SERVICES
            ====================================================== */}
            <section
              id="services"
              className="scroll-mt-28 border-b border-slate-200 py-16"
            >
              <SectionHeader
                number="02"
                title="Services"
                icon={<Zap size={18} />}
              />

              <div className="mt-9 space-y-6 text-[15px] leading-8 text-slate-600">

                <p>
                  By using the Application or the Service, You further agree
                  that:
                </p>

                {/* SERVICE RULES */}
                <div className="overflow-hidden border border-slate-200 bg-white">
                  {serviceRules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-b border-slate-100 px-5 py-5 last:border-0 md:px-6"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check size={12} />
                      </span>

                      <p className="text-sm leading-7 text-slate-600">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>

                <p>
                  Tritan EV Dock Private Limited reserves the right to
                  immediately terminate the Service and the use of the
                  Application in the event of non-compliance with any of the
                  above requirements.
                </p>

                <p>
                  Further, Tritan EV Dock Private Limited will store the
                  information provided by you or record your calls for
                  contacting you for all Service related matters. You shall
                  promptly inform Tritan EV Dock Private Limited on any change
                  in the information provided by you.
                </p>

                {/* COMMUNICATION */}
                <Notice
                  icon={<Smartphone size={17} />}
                  title="Service communications"
                >
                  Tritan EV Dock Private Limited or an authorized
                  representative may provide information regarding services,
                  offers, discounts and promotions by SMS or email to Your
                  registered mobile number or registered email ID.
                </Notice>

                <p>
                  You also have the option to discontinue receiving such
                  information at any point of time by visiting the specific
                  link provided in the Application or Website.
                </p>

                {/* INFORMATION RIGHTS */}
                <p>
                  You agree to grant Tritan EV Dock Private Limited a
                  non-exclusive, worldwide, perpetual, irrevocable,
                  royalty-free, sub-licensable (through multiple tiers) right
                  to exercise the copyright, publicity, database rights or any
                  other rights You have in your information, in any media now
                  known or not currently known, with respect to Your
                  information.
                </p>

                <p>
                  You agree and permit Tritan EV Dock Private Limited to share
                  your information and/or permitted information, with third
                  parties.
                </p>

                <p>
                  You agree and permit Tritan EV Dock Private Limited to share
                  any information provided by you with third parties in order
                  to facilitate provision of certain value-added services
                  offered by such third parties to you and/or to provide
                  certain value-added services to you by Tritan EV Dock Private
                  Limited.
                </p>

                <p>
                  You hereby expressly consent to receive communications from
                  Tritan EV Dock Private Limited / third parties offering
                  value-added services to You through Your registered phone
                  number and/or e-mail id and/or the Application.
                </p>

                {/* ACCOUNT ACCESS */}
                <div className="border-l-2 border-[#6FA8FF] bg-blue-50/60 px-5 py-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    Account access
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    In case you are unable to access Your Account, please
                    inform us at{" "}
                    <a
                      href="mailto:customercare@evdock.app"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      customercare@evdock.app
                    </a>{" "}
                    and make a written request for blocking Your Account.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    We will not be liable for any unauthorized transactions
                    made through Your Account.
                  </p>
                </div>
              </div>
            </section>

            {/* END */}
            <div className="flex items-start gap-4 pt-10">
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-blue-600"
              />

              <p className="text-sm leading-7 text-slate-500">
                Please read these terms carefully before using the EV Dock
                Application or Service.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ===============================================================
   SECTION HEADER
=============================================================== */

const SectionHeader = ({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-start gap-5">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
      {icon}
    </div>

    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
        {number} / EV DOCK
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
        {title}
      </h2>
    </div>
  </div>
);

/* ===============================================================
   NOTICE
=============================================================== */

const Notice = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border border-slate-200 bg-white p-6 md:p-7">
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B1220] text-[#6FA8FF]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#071321]">
          {title}
        </h3>

        <div className="mt-2 text-sm leading-7 text-slate-500">
          {children}
        </div>
      </div>
    </div>
  </div>
);

/* ===============================================================
   QUICK INFO
=============================================================== */

const Info = ({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) => (
  <div className="border-l border-slate-200 pl-5">
    <p className="text-[9px] font-bold tracking-[0.2em] text-blue-600">
      {number}
    </p>

    <h3 className="mt-3 text-sm font-semibold text-[#071321]">
      {title}
    </h3>

    <p className="mt-2 text-xs leading-6 text-slate-500">
      {text}
    </p>
  </div>
);

export default TermsConditions;