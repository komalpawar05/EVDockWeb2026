import React from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cookie,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contents = [
  ["01", "Privacy commitment", "privacy"],
  ["02", "Cookies", "cookies"],
  ["03", "Children under 18", "children"],
  ["04", "App privacy", "app"],
  ["05", "Website privacy", "website"],
  ["06", "Data types", "data"],
];

const dataTypes = [
  "Contact info",
  "Health & fitness",
  "Financial info",
  "Location",
  "Sensitive info",
  "Customer support",
  "Browsing history",
  "Search history",
  "Identifiers",
  "Purchase history",
  "Usage data",
  "Diagnostics",
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#071321]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 pb-24 pt-32 md:px-12 md:pb-28 lg:px-20">
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#3B82F6]/10 blur-[160px]" />

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
                Privacy
                <span className="block text-[#6FA8FF]">Policy.</span>
              </h1>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-400 md:text-base">
                Your privacy matters to EV Dock. This policy explains how we
                collect, use, maintain and protect your personal information.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#6FA8FF]">
                  <LockKeyhole size={16} />
                </div>

                <span className="text-xs font-medium text-slate-300">
                  Your data. Your trust. Our responsibility.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-slate-200 bg-white px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Info
            number="01"
            title="Privacy first"
            text="We take the protection of personal data seriously."
          />

          <Info
            number="02"
            title="Transparency"
            text="Understand what information may be collected and why."
          />

          <Info
            number="03"
            title="Your control"
            text="You can make informed choices about your information."
          />
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">
          
          {/* STICKY NAV */}
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

            {/* PRIVACY */}
            <PolicySection
              id="privacy"
              number="01"
              title="Privacy commitment"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                Tritan EV Dock Private Limited is committed to protecting the
                privacy and security of your personal data. The protection of
                your privacy in the processing of your personal data is an
                important concern to which we pay special attention in our
                business processes.
              </p>

              <p>
                We process personal data collected during visits to our
                websites according to the legal provisions valid for the
                countries in which the websites are maintained.
              </p>

              <p>
                This privacy notice describes the information about you that
                Tritan EV Dock Private Limited collects through this website,
                how that information is used, maintained, shared and protected.
              </p>
            </PolicySection>

            {/* COOKIES */}
            <PolicySection
              id="cookies"
              number="02"
              title="Cookies"
              icon={<Cookie size={18} />}
            >
              <p>
                From time to time, we may use a standard technology called a
                “cookie”. A cookie is a small text file that is placed on a
                computer or other device and is used to identify the user or
                device and to collect information.
              </p>

              <p>
                Cookies are typically assigned to one of four categories:
                necessary cookies, performance cookies, functional cookies and
                cookies for marketing purposes.
              </p>

              <div className="mt-7 border-l-2 border-[#6FA8FF] bg-blue-50 px-5 py-4">
                <p className="text-sm leading-6 text-slate-600">
                  You can configure your browser to inform you when a cookie is
                  being placed and decide whether to accept it.
                </p>
              </div>
            </PolicySection>

            {/* CHILDREN */}
            <PolicySection
              id="children"
              number="03"
              title="Children Under 18 Years Of Age"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                We do not provide services directly to children or proactively
                collect their personal information. Parents or guardians may
                authorize children under 18 years old to use the Tritan EV Dock
                Private Limited site provided they assume responsibility and
                legal liability for the conduct of such child.
              </p>

              <p>
                If Tritan EV Dock Private Limited learns that personal data of
                a person under 13 years old has been collected without
                verifiable parental consent, appropriate steps may be taken to
                delete such information.
              </p>
            </PolicySection>

            {/* APP */}
            <PolicySection
              id="app"
              number="04"
              title="App Privacy"
              icon={<Smartphone size={18} />}
            >
              <p>
                The developer, Tritan EV Dock Private Limited, indicated that
                the app’s privacy practices may include handling of data as
                described below. For more information, see the EV Dock privacy
                policy.
              </p>

              <div className="mt-8 flex gap-4 border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0B1220] text-[#6FA8FF]">
                  <LockKeyhole size={17} />
                </div>

                <p className="text-sm leading-6 text-slate-500">
                  EV Dock is sensitive to privacy issues on the Internet. We
                  believe it is important you know how we treat the information
                  we receive from you.
                </p>
              </div>
            </PolicySection>

            {/* WEBSITE */}
            <PolicySection
              id="website"
              number="05"
              title="Website Privacy"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                In general, you can visit EV DOCK on the World Wide Web without
                telling us who you are or revealing any information about
                yourself. Our Web servers collect the domain names, not the
                e-mail addresses, of visitors.
              </p>

              <p>
                EV DOCK uses this information to measure the use of our site
                and to improve the content of our site. There are times,
                however, when we may need information from you, such as your
                name and address.
              </p>

              <p>
                Usually, the personal information we collect is used only by us
                to respond to your inquiry, process an order or allow you to
                access specific account information.
              </p>

              <p>
                EV DOCK&apos;s website may contain links to other sites such as
                EV DOCK partners and affiliates. We are not responsible for the
                content or privacy practices employed by other sites.
              </p>
            </PolicySection>

            {/* DATA */}
            <PolicySection
              id="data"
              number="06"
              title="Data Types"
              icon={<ShieldCheck size={18} />}
            >
              <p>
                The privacy material describes a range of data categories that
                may be relevant to app usage.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {dataTypes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white px-5 py-4 text-sm font-medium text-slate-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={11} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Data linked to you
                </p>

                <p className="mt-4">
                  Data that is linked to your identity via your account, device
                  or other details may be included in the App Privacy section.
                </p>
              </div>
            </PolicySection>

            {/* FINAL NOTE */}
            <div className="mt-20 border-t border-slate-200 pt-10">
              <div className="flex items-start gap-4">
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-blue-600"
                />

                <p className="text-sm leading-7 text-slate-500">
                  For additional information about data use, advertising,
                  marketing, analytics and other purposes, refer to the complete
                  privacy material supplied by EV Dock.
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
    className="scroll-mt-28 border-b border-slate-200 pb-16 pt-2 first:pt-0"
  >
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

    <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600">
      {children}
    </div>
  </section>
);

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

export default PrivacyPolicy;