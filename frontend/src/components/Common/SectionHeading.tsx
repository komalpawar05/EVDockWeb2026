import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;

  centered?: boolean;
  dark?: boolean;
  stacked?: boolean;

  // Animation
  animate?: boolean;

  // Custom styling
  containerClassName?: string;
  titleClassName?: string;
  highlightClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,

  centered = false,
  dark = false,
  stacked = true,

  animate = true,

  containerClassName = "",
  titleClassName,
  highlightClassName,
  descriptionClassName,
  eyebrowClassName,
}) => {
  /* =========================================================
     ANIMATION VARIANTS
  ========================================================== */

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =========================================================
     CONTENT
  ========================================================== */

  const content = (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      } ${containerClassName}`}
    >

      {/* =====================================================
          EYEBROW
      ====================================================== */}

      {eyebrow && (
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2"
        >
          <Zap
            size={12}
            className="text-blue-600"
          />

          <span
            className={`text-[9px] font-black uppercase tracking-[0.2em] ${
              eyebrowClassName || "text-blue-600"
            }`}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}


      {/* =====================================================
          HEADING
      ====================================================== */}

      <motion.h2
        variants={itemVariants}
        className={`mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl ${
          titleClassName ||
          (dark ? "text-white" : "text-slate-950")
        }`}
      >

        <span className={stacked ? "block" : "inline"}>
          {title}
        </span>

        {highlight && (
          <>
            {!stacked && " "}

            <span
              className={
                highlightClassName ||
                (dark
                  ? "bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent")
              }
            >
              {highlight}
            </span>
          </>
        )}

      </motion.h2>


      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-4 max-w-2xl text-base leading-7 ${
            centered ? "mx-auto" : ""
          } ${
            descriptionClassName ||
            (dark ? "text-slate-400" : "text-slate-500")
          }`}
        >
          {description}
        </motion.p>
      )}

    </div>
  );


  /* =========================================================
     ANIMATED / STATIC VERSION
  ========================================================== */

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {content}
    </motion.div>
  );
};

export default SectionHeading;