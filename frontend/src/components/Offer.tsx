import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  House,
  MapPin,
  PlugZap,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SectionHeading from "./Common/SectionHeading";

const Offer: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-10  max-w-lg text-center sm:mb-12">
          <SectionHeading 
            centered
            eyebrow="WHAT WE OFFER"
            title="Power for"
            highlight="every journey"
            description="Charging solutions designed for life on the road and at home."
          />
        </div>

        {/* =========================
            CARDS
        ========================== */}
        <div className="grid gap-5 lg:grid-cols-2">

            {/* =========================================================
                PUBLIC CHARGING
            ========================================================== */}

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-slate-200/80
                bg-white
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                transition-all duration-500
                hover:-translate-y-1.5
                hover:border-slate-300
                hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]
              "
            >

              {/* Accent */}

              <div
                className="
                  pointer-events-none absolute
                  -right-20 -top-20
                  h-44 w-44
                  rounded-full
                  bg-blue-100/50
                  blur-3xl
                  transition-all duration-700
                  group-hover:bg-blue-200/70
                "
              />

              <div className="relative p-6 sm:p-7">

                {/* TOP ROW */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-2xl
                        bg-blue-50
                        text-blue-600
                        transition-all duration-300
                        group-hover:bg-blue-600
                        group-hover:text-white
                      "
                    >
                      <PlugZap
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-slate-950
                        "
                      >
                        Public Charging
                      </p>

                      <div className="mt-1.5 flex items-center gap-1.5">

                        <span
                          className="
                            h-1.5 w-1.5
                            rounded-full
                            bg-emerald-500
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-medium
                            text-slate-400
                          "
                        >
                          DC Fast
                        </span>

                      </div>

                    </div>

                  </div>

                  <Link
                    to="/public-charger"
                    aria-label="Explore public charging"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-500
                      transition-all duration-300
                      hover:border-slate-950
                      hover:bg-slate-950
                      hover:text-white
                    "
                  >
                    <ArrowUpRight size={15} />
                  </Link>

                </div>


                {/* CONTENT */}

                <div
                  className="
                    mt-7
                    grid items-center gap-6
                    sm:grid-cols-[1fr_180px]
                  "
                >

                  {/* COPY */}

                  <div>

                    <p
                      className="
                        mb-2.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-blue-600
                      "
                    >
                      On the road
                    </p>

                    <h3
                      className="
                        text-[25px]
                        font-bold
                        leading-[1.15]
                        tracking-[-0.035em]
                        text-slate-950
                      "
                    >
                      Charge. Go. Repeat.
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-[280px]
                        text-[11px]
                        font-medium
                        leading-[1.7]
                        text-slate-500
                      "
                    >
                      Fast, dependable charging wherever your journey
                      takes you.
                    </p>


                    {/* MINI FEATURES */}

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">

                      <div className="flex items-center gap-1.5">

                        <MapPin
                          size={13}
                          strokeWidth={1.8}
                          className="text-slate-400"
                        />

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                          "
                        >
                          Nearby
                        </span>

                      </div>

                      <div className="flex items-center gap-1.5">

                        <BatteryCharging
                          size={13}
                          strokeWidth={1.8}
                          className="text-slate-400"
                        />

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                          "
                        >
                          Live status
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* PRODUCT VISUAL */}

                  <div
                    className="
                      relative h-[210px]
                      overflow-hidden
                      rounded-[22px]
                      border border-slate-100
                      bg-[#F5F8FC]
                    "
                  >

                    {/* Soft grid */}

                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(#E5EDF7 1px, transparent 1px), linear-gradient(90deg, #E5EDF7 1px, transparent 1px)",
                        backgroundSize: "26px 26px",
                      }}
                    />

                    {/* Glow */}

                    <div
                      className="
                        absolute left-1/2 top-1/2
                        h-36 w-36
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-blue-200/40
                        blur-3xl
                      "
                    />

                    {/* Ground */}

                    <div
                      className="
                        absolute bottom-7 left-1/2
                        h-3 w-24
                        -translate-x-1/2
                        rounded-full
                        bg-slate-300/30
                        blur-lg
                      "
                    />


                    {/* Charger */}

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute left-1/2 top-1/2
                        z-10
                        h-[135px] w-[72px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-[18px]
                        bg-[#101827]
                        p-[3px]
                        shadow-[0_20px_35px_rgba(15,23,42,0.22)]
                      "
                    >

                      <div
                        className="
                          relative h-full w-full
                          overflow-hidden
                          rounded-[15px]
                          bg-gradient-to-b
                          from-blue-600
                          to-blue-700
                        "
                      >

                        {/* Display */}

                        <div
                          className="
                            absolute left-1/2 top-4
                            h-7 w-10
                            -translate-x-1/2
                            rounded-[6px]
                            bg-[#07111F]
                          "
                        >

                          <div
                            className="
                              absolute left-1/2 top-1/2
                              h-1 w-4
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              bg-cyan-300
                            "
                          />

                        </div>


                        {/* Bolt */}

                        <Zap
                          size={25}
                          strokeWidth={2}
                          fill="currentColor"
                          className="
                            absolute left-1/2 top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            text-white
                          "
                        />


                        {/* Status */}

                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="
                            absolute bottom-4 left-1/2
                            h-1.5 w-1.5
                            -translate-x-1/2
                            rounded-full
                            bg-emerald-300
                            shadow-[0_0_8px_rgba(110,231,183,0.8)]
                          "
                        />

                      </div>

                    </motion.div>


                    {/* Product tag */}

                    <div
                      className="
                        absolute bottom-3 left-3
                        rounded-full
                        border border-white/70
                        bg-white/85
                        px-2.5 py-1.5
                        shadow-sm
                        backdrop-blur
                      "
                    >

                      <span
                        className="
                          text-[7px]
                          font-bold
                          tracking-[0.14em]
                          text-slate-500
                        "
                      >
                        DC FAST
                      </span>

                    </div>


                    {/* Power */}

                    <div
                      className="
                        absolute right-3 top-3
                        flex items-center gap-1
                        rounded-full
                        bg-white/85
                        px-2.5 py-1.5
                        shadow-sm
                        backdrop-blur
                      "
                    >

                      <Zap
                        size={9}
                        className="text-blue-600"
                      />

                      <span
                        className="
                          text-[7px]
                          font-bold
                          tracking-wide
                          text-slate-500
                        "
                      >
                        HIGH POWER
                      </span>

                    </div>

                  </div>

                </div>


                {/* CTA */}

                <div
                  className="
                    mt-6
                    flex justify-end
                    border-t border-slate-100
                    pt-4
                  "
                >

                  <Link
                    to="/public-charger"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-slate-950
                      px-4 py-2.5
                      text-[10px]
                      font-bold
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:bg-blue-600
                      hover:px-5
                    "
                  >
                    Explore

                    <ArrowUpRight size={12} />

                  </Link>

                </div>

              </div>

            </motion.article>


            {/* =========================================================
                HOME CHARGING
            ========================================================== */}

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-slate-200/80
                bg-white
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                transition-all duration-500
                hover:-translate-y-1.5
                hover:border-slate-300
                hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]
              "
            >

              {/* Accent */}

              <div
                className="
                  pointer-events-none absolute
                  -bottom-20 -right-20
                  h-44 w-44
                  rounded-full
                  bg-violet-100/50
                  blur-3xl
                  transition-all duration-700
                  group-hover:bg-violet-200/70
                "
              />

              <div className="relative p-6 sm:p-7">

                {/* TOP ROW */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-2xl
                        bg-violet-50
                        text-violet-600
                        transition-all duration-300
                        group-hover:bg-violet-600
                        group-hover:text-white
                      "
                    >

                      <House
                        size={18}
                        strokeWidth={1.8}
                      />

                    </div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-slate-950
                        "
                      >
                        Home Charging
                      </p>

                      <div className="mt-1.5 flex items-center gap-1.5">

                        <span
                          className="
                            h-1.5 w-1.5
                            rounded-full
                            bg-emerald-500
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-medium
                            text-slate-400
                          "
                        >
                          Smart AC
                        </span>

                      </div>

                    </div>

                  </div>


                  <Link
                    to="/home-charger"
                    aria-label="Explore home charging"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-500
                      transition-all duration-300
                      hover:border-slate-950
                      hover:bg-slate-950
                      hover:text-white
                    "
                  >
                    <ArrowUpRight size={15} />
                  </Link>

                </div>


                {/* CONTENT */}

                <div
                  className="
                    mt-7
                    grid items-center gap-6
                    sm:grid-cols-[1fr_180px]
                  "
                >

                  {/* COPY */}

                  <div>

                    <p
                      className="
                        mb-2.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-violet-600
                      "
                    >
                      At your place
                    </p>

                    <h3
                      className="
                        text-[25px]
                        font-bold
                        leading-[1.15]
                        tracking-[-0.035em]
                        text-slate-950
                      "
                    >
                      Charge while you rest.
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-[280px]
                        text-[11px]
                        font-medium
                        leading-[1.7]
                        text-slate-500
                      "
                    >
                      Smart, convenient AC charging designed around
                      your everyday routine.
                    </p>


                    {/* MINI FEATURES */}

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">

                      <div className="flex items-center gap-1.5">

                        <House
                          size={13}
                          strokeWidth={1.8}
                          className="text-slate-400"
                        />

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                          "
                        >
                          Easy install
                        </span>

                      </div>


                      <div className="flex items-center gap-1.5">

                        <BatteryCharging
                          size={13}
                          strokeWidth={1.8}
                          className="text-slate-400"
                        />

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            text-slate-500
                          "
                        >
                          Smart power
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* PRODUCT VISUAL */}

                  <div
                    className="
                      relative h-[210px]
                      overflow-hidden
                      rounded-[22px]
                      border border-violet-100
                      bg-[#FAF8FF]
                    "
                  >

                    {/* Grid */}

                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(#EEEAF8 1px, transparent 1px), linear-gradient(90deg, #EEEAF8 1px, transparent 1px)",
                        backgroundSize: "26px 26px",
                      }}
                    />


                    {/* Glow */}

                    <div
                      className="
                        absolute left-1/2 top-1/2
                        h-36 w-36
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-violet-200/40
                        blur-3xl
                      "
                    />


                    {/* Ground */}

                    <div
                      className="
                        absolute bottom-7 left-1/2
                        h-3 w-24
                        -translate-x-1/2
                        rounded-full
                        bg-slate-300/25
                        blur-lg
                      "
                    />


                    {/* Charger */}

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute left-1/2 top-1/2
                        z-10
                        h-[138px] w-[74px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-[18px]
                        bg-[#101827]
                        p-[3px]
                        shadow-[0_20px_35px_rgba(15,23,42,0.20)]
                      "
                    >

                      <div
                        className="
                          relative h-full w-full
                          overflow-hidden
                          rounded-[15px]
                          bg-gradient-to-b
                          from-violet-600
                          to-blue-600
                        "
                      >

                        {/* Display */}

                        <div
                          className="
                            absolute left-1/2 top-4
                            flex h-7 w-10
                            -translate-x-1/2
                            items-center justify-center
                            rounded-[6px]
                            bg-white/15
                          "
                        >

                          <Zap
                            size={14}
                            fill="currentColor"
                            className="text-white"
                          />

                        </div>


                        {/* Cable */}

                        <Cable
                          size={28}
                          strokeWidth={1.8}
                          className="
                            absolute left-1/2 top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            text-white
                          "
                        />


                        {/* Status */}

                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="
                            absolute bottom-4 left-1/2
                            h-1.5 w-1.5
                            -translate-x-1/2
                            rounded-full
                            bg-emerald-300
                            shadow-[0_0_8px_rgba(110,231,183,0.8)]
                          "
                        />

                      </div>

                    </motion.div>


                    {/* Product tag */}

                    <div
                      className="
                        absolute bottom-3 left-3
                        rounded-full
                        border border-white/70
                        bg-white/85
                        px-2.5 py-1.5
                        shadow-sm
                        backdrop-blur
                      "
                    >

                      <span
                        className="
                          text-[7px]
                          font-bold
                          tracking-[0.14em]
                          text-slate-500
                        "
                      >
                        SMART AC
                      </span>

                    </div>


                    {/* Safety */}

                    <div
                      className="
                        absolute right-3 top-3
                        flex items-center gap-1
                        rounded-full
                        bg-white/85
                        px-2.5 py-1.5
                        shadow-sm
                        backdrop-blur
                      "
                    >

                      <ShieldCheck
                        size={10}
                        className="text-violet-600"
                      />

                      <span
                        className="
                          text-[7px]
                          font-bold
                          tracking-wide
                          text-slate-500
                        "
                      >
                        SMART & SAFE
                      </span>

                    </div>

                  </div>

                </div>


                {/* CTA */}

                <div
                  className="
                    mt-6
                    flex justify-end
                    border-t border-slate-100
                    pt-4
                  "
                >

                  <Link
                    to="/home-charger"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-slate-950
                      px-4 py-2.5
                      text-[10px]
                      font-bold
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:bg-violet-600
                      hover:px-5
                    "
                  >
                    Explore

                    <ArrowUpRight size={12} />

                  </Link>

                </div>

              </div>

            </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Offer;