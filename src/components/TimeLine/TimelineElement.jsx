import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function TimelineElement({ experience, index }) {
  const { theme } = useContext(ThemeContext);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
      variants={isEven ? itemVariantsRight : itemVariants}
    >
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-2xl lg:text-3xl shadow-lg"
        style={{
          backgroundColor: "var(--bg-clr)",
          color: "var(--clr-mode)",
          border: `3px solid var(--clr-mode)`,
        }}
      >
        {experience.icon}
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 ml-6 lg:ml-0 lg:w-5/12 ${
          isEven ? "lg:mr-6 lg:text-right" : "lg:ml-6"
        }`}
      >
        <motion.div
          className="p-6 rounded-xl backdrop-blur-sm"
          style={{
            backgroundColor: "var(--card-bg)",
            boxShadow: "var(--shadow-lg)",
            border: `1px solid var(--border-clr)`,
          }}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="text-xs lg:text-sm font-semibold mb-2 uppercase tracking-wider"
            style={{ color: "var(--clr-mode)" }}
          >
            {experience.duration}
          </div>
          <h3
            className="text-xl lg:text-2xl font-bold mb-2"
            style={{ color: "var(--clr-mode-text)" }}
          >
            {experience.title}
          </h3>
          <h4
            className="text-base lg:text-lg font-semibold mb-3"
            style={{ color: "var(--clr-mode)" }}
          >
            {experience.company}
          </h4>
          {experience.description && (
            <p
              className="text-sm lg:text-base leading-relaxed"
              style={{ color: "var(--clr-mode-text-muted)" }}
            >
              {experience.description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
}

export default TimelineElement;
