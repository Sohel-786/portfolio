import { motion } from "framer-motion";

function ContactIcon({ icon, label, url, text }) {
  return (
    <motion.a
      href={url}
      target={url.startsWith("mailto:") || url.startsWith("tel:") ? "_self" : "_blank"}
      rel="noreferrer"
      className="block p-6 rounded-xl transition-all duration-300"
      style={{
        backgroundColor: "var(--card-bg)",
        boxShadow: "var(--shadow)",
        border: `1px solid var(--border-clr)`,
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-xl lg:text-2xl flex-shrink-0"
          style={{
            backgroundColor: "var(--bg-clr-alt)",
            color: "var(--clr-mode)",
          }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: "var(--clr-mode-text-muted)" }}
          >
            {label}
          </div>
          <div
            className="text-sm lg:text-base font-medium truncate"
            style={{ color: "var(--clr-mode-text)" }}
          >
            {text}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default ContactIcon;
