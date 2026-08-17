import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 z-50
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-white/20
            bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF]
            text-white
            shadow-[0_10px_35px_rgba(30,95,168,0.35)]
            backdrop-blur-xl
            transition-all duration-300
            hover:shadow-[0_14px_45px_rgba(122,63,175,0.45)]
            md:bottom-8 md:right-8
          "
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;