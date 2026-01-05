import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpSLine } from "react-icons/ri";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
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
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 lg:right-8 lg:bottom-8 z-50 p-3 rounded-full text-2xl shadow-lg transition-all duration-300"
          style={{
            backgroundColor: "var(--clr-mode)",
            color: "white",
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <RiArrowUpSLine />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
