import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillItem from "./SkillItem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "TailwindCSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "expressjs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Electron.js", icon: "electron" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "git-icon" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
    ],
  },
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 lg:py-32 px-5 lg:px-20"
      style={{
        backgroundColor: "var(--bg-clr)",
      }}
    >
      <div className="max-width mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--clr-mode-text)" }}
          >
            Skills & Technologies
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
            }}
          />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--clr-mode-text-muted)" }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="space-y-6"
              variants={containerVariants}
            >
              <h3
                className="text-xl lg:text-2xl font-bold"
                style={{ color: "var(--clr-mode)" }}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 lg:gap-8">
                {category.skills.map((skill, index) => (
                  <SkillItem
                    key={`${category.id}-${skill.name}-${index}`}
                    skill={skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
