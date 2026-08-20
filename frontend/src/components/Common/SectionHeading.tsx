import React from "react";
import { Zap } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;

  // Alignment
  centered?: boolean;

  // Theme
  dark?: boolean;

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

  containerClassName = "",
  titleClassName,
  highlightClassName,
  descriptionClassName,
  eyebrowClassName,
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      } ${containerClassName}`}
    >
      {/* Badge */}
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2">
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
        </div>
      )}

      {/* Heading */}
    <h2
      className={`mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl ${
        titleClassName ||
        (dark ? "text-white" : "text-slate-950")
      }`}
    >
      <span className="block">{title}</span>

      {highlight && (
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
      )}
    </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 ${
            centered ? "mx-auto" : ""
          } ${
            descriptionClassName ||
            (dark ? "text-slate-400" : "text-slate-500")
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;