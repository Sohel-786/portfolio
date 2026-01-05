import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function SkillItem({ skill }) {
  const { theme } = useContext(ThemeContext);
  const iconPath = `/assets/techstack/${skill.icon}.svg`;

  return (
    <motion.div
      className="flex flex-col items-center justify-center group cursor-pointer"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mb-2 transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-clr-alt)",
          boxShadow: "var(--shadow)",
        }}
      >
        <motion.img
          src={iconPath}
          alt={skill.name}
          className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
          whileHover={{ scale: 1.1 }}
          onError={(e) => {
            e.target.style.display = "none";
            const parent = e.target.parentElement;
            if (parent) {
              parent.innerHTML = `<div style="color: var(--clr-mode); font-weight: bold; font-size: 1.5rem;">${skill.name.charAt(0)}</div>`;
            }
          }}
        />
      </div>
      <span
        className="text-xs lg:text-sm font-medium text-center mt-1 transition-colors duration-300"
        style={{ color: "var(--clr-mode-text-muted)" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default SkillItem;

