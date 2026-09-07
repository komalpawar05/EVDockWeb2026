import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Common/SectionHeading";
import {
  BatteryCharging,
  Smartphone,
  CreditCard,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24/7 Access",
    description: "Charge anytime, day or night.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Fast and secure payment options.",
  },
  {
    icon: Smartphone,
    title: "Mobile Control",
    description: "Control your charging from anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Network",
    description: "Smart monitoring for dependable uptime.",
  },
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#6FA8FF]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#E04578]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center lg:mb-14"
        >
          <SectionHeading
            centered
            eyebrow="EV Dock Features"
            title="Designed for"
            highlight="better charging."
            description="Everything you need for a faster, smarter and more reliable EV charging experience."
          />
        </motion.div>

        {/* Features */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* =========================================
              FEATURED CARD
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.45 }}
            className="
              group
              relative
              min-h-[310px]
              overflow-hidden
              rounded-[26px]
              bg-gradient-to-br
              from-[#1E5FA8]
              via-[#4B4FAE]
              to-[#6F45AD]
              p-7
              text-white
              shadow-[0_20px_60px_rgba(30,95,168,0.16)]
              sm:p-8
              lg:col-span-6
              lg:p-9
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#E04578]/25
                blur-[70px]
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -left-20
                h-64
                w-64
                rounded-full
                bg-[#6FA8FF]/25
                blur-[70px]
              "
            />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute right-[-45px] top-[-45px] h-40 w-40 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-[-25px] top-[-25px] h-28 w-28 rounded-full border border-white/10" />

            <div className="relative flex h-full flex-col justify-between">
              {/* Top */}
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      backdrop-blur-md
                    "
                  >
                    <BatteryCharging size={22} strokeWidth={1.8} />
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/10
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-white/70
                    "
                  >
                    <Zap size={11} />
                    Smart Power
                  </div>
                </div>

                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Core Technology
                </p>

                <h3
                  className="
                    max-w-lg
                    text-[30px]
                    font-semibold
                    leading-[1.08]
                    tracking-[-0.035em]
                    sm:text-[34px]
                  "
                >
                  Ultra-fast charging,
                  <span className="block text-white/55">
                    intelligently delivered.
                  </span>
                </h3>
              </div>

              {/* Bottom */}
              <div className="mt-9 flex items-end justify-between gap-5">
                <p className="max-w-sm text-[13px] leading-5 text-white/60">
                  High-speed charging infrastructure built for modern EV
                  drivers.
                </p>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-[#4B4FAE]
                  "
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              SMALL FEATURE CARDS
          ========================================= */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    group
                    min-h-[148px]
                    rounded-[22px]
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition-all
                    duration-300
                    hover:border-[#1E5FA8]/20
                    hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]
                  "
                >
                  <div className="flex h-full flex-col">
                    {/* Icon + arrow */}
                    <div className="flex items-center justify-between">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#1E5FA8]/[0.07]
                          text-[#1E5FA8]
                          transition-all
                          duration-300
                          group-hover:bg-[#1E5FA8]
                          group-hover:text-white
                        "
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="
                          text-slate-300
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-[#1E5FA8]
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-auto pt-7">
                      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1.5 text-[12px] leading-5 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.95 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mx-auto
            mt-8
            h-px
            max-w-3xl
            bg-gradient-to-r
            from-transparent
            via-[#1E5FA8]/15
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default Features;

