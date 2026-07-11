import React from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Smartphone,
  CreditCard,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const Features = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6FA8FF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F28BB5]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="px-5 py-2 rounded-full bg-[#F5F7FF] text-[#7A3FAF] font-semibold">
            EV Dock Features
          </span>

          <h2 className="mt-6 text-5xl lg:text-7xl font-black text-slate-900">
            Charging Made
            <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#7A3FAF] to-[#E04578] bg-clip-text text-transparent">
              Smarter & Faster
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Experience next-generation EV charging with speed,
            convenience and reliability.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Large Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-2 bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] rounded-[32px] p-10 text-white min-h-[320px]"
          >
            <BatteryCharging size={50} />
            <h3 className="mt-8 text-4xl font-bold">
              Ultra Fast Charging
            </h3>
            <p className="mt-4 text-white/80 text-lg">
              Power your EV quickly with intelligent high-speed
              charging infrastructure.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#F8FAFC] rounded-[32px] p-8"
          >
            <Clock3 className="text-[#7A3FAF]" size={40} />
            <h3 className="mt-6 text-2xl font-bold">
              24/7 Access
            </h3>
            <p className="mt-3 text-slate-600">
              Charge anytime without interruptions.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#F8FAFC] rounded-[32px] p-8"
          >
            <CreditCard className="text-[#E04578]" size={40} />
            <h3 className="mt-6 text-2xl font-bold">
              Secure Payments
            </h3>
            <p className="mt-3 text-slate-600">
              Multiple payment methods with complete security.
            </p>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-2 bg-[#F8FAFC] rounded-[32px] p-8"
          >
            <Smartphone className="text-[#1E5FA8]" size={40} />
            <h3 className="mt-6 text-3xl font-bold">
              Mobile App Control
            </h3>
            <p className="mt-3 text-slate-600">
              Start, stop and monitor charging directly from your smartphone.
            </p>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-2 bg-gradient-to-r from-[#F5F7FF] to-[#FFF1F5] rounded-[32px] p-8"
          >
            <ShieldCheck className="text-[#7A3FAF]" size={40} />
            <h3 className="mt-6 text-3xl font-bold">
              Reliable Charging Network
            </h3>
            <p className="mt-3 text-slate-600">
              Smart monitoring ensures maximum uptime and consistent performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;