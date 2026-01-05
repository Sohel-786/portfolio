import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Icon({ url, element, label }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.li
      className="relative"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href={url}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className="block text-2xl lg:text-3xl transition-colors duration-300 relative group"
        style={{
          color: "var(--clr-mode)",
        }}
      >
        <span className="relative z-10">{element}</span>
        <span
          className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
          style={{
            backgroundColor: "var(--clr-mode)",
          }}
        />
      </a>
    </motion.li>
  );
}

export default Icon;
