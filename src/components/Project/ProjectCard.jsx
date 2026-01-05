import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from "react-icons/fa";
import { nanoid } from "nanoid";

function ProjectCard({ project }) {
  const getTechIcon = (tech) => {
    const iconMap = {
      react: "react",
      reactjs: "react",
      javascript: "javascript",
      html5: "html5",
      html: "html5",
      css3: "css3",
      css: "css3",
      tailwindcss: "tailwindcss",
      nodejs: "nodejs",
      node: "nodejs",
      express: "expressjs",
      expressjs: "expressjs",
      mongodb: "mongodb",
      mysql: "mysql",
      postgresql: "postgresql",
      redux: "redux",
      nextjs: "nextjs2",
      nextjs2: "nextjs2",
      typescript: "typescript",
      nestjs: "nestjs",
      electron: "electron",
    };

    const iconName = iconMap[tech.toLowerCase()] || tech.toLowerCase();
    return `/assets/techstack/${iconName}.svg`;
  };

  return (
    <motion.div
      className="group relative h-full rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "var(--card-bg)",
        boxShadow: "var(--shadow)",
        border: `1px solid var(--border-clr)`,
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Image/Preview */}
      <div className="relative h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
              const parent = e.target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><div class="text-4xl font-bold opacity-20" style="color: var(--clr-mode)">${project.title.charAt(0)}</div></div>`;
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="text-4xl font-bold opacity-20"
              style={{ color: "var(--clr-mode)" }}
            >
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3
              className="text-xl lg:text-2xl font-bold mb-2"
              style={{ color: "var(--clr-mode-text)" }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm lg:text-base font-medium"
              style={{ color: "var(--clr-mode)" }}
            >
              {project.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {project.responsive && (
              <span
                className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  color: "#22c55e",
                }}
              >
                <FaCheckCircle className="text-xs" />
                Responsive
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-3"
          style={{ color: "var(--clr-mode-text-muted)" }}
        >
          {project.longDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.techStack.map((tech) => {
            const iconPath = getTechIcon(tech);
            return (
              <motion.div
                key={nanoid()}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-clr-alt)",
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                title={tech}
              >
                <img
                  src={iconPath}
                  alt={tech}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Features */}
        <div className="space-y-2 max-h-32 overflow-y-auto scroll">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--clr-mode-text-muted)" }}
          >
            Key Features:
          </p>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={nanoid()}
                className="text-xs lg:text-sm flex items-start gap-2"
                style={{ color: "var(--project-points)" }}
              >
                <span
                  className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--clr-mode)" }}
                />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t"
          style={{ borderColor: "var(--border-clr)" }}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
              style={{
                backgroundColor: "var(--clr-mode)",
                color: "white",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </motion.a>
          )}
          {project.gitUrl && (
            <motion.a
              href={project.gitUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
              style={{
                color: "var(--clr-mode)",
                border: `2px solid var(--clr-mode)`,
              }}
              whileHover={{ scale: 1.05, backgroundColor: "var(--clr-mode)", color: "white" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
