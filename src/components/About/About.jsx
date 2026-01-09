import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-32 px-5 lg:px-20"
      style={{
        backgroundColor: "var(--bg-clr-alt)",
      }}
    >
      <div className="max-width mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--clr-mode-text)" }}
            >
              About Me
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
              }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg leading-relaxed"
            style={{ color: "var(--clr-mode-text-muted)" }}
          >
            <p>
              I'm a{" "}
              <strong style={{ color: "var(--clr-mode-text)" }}>
                Full Stack Developer
              </strong>{" "}
              with a passion for building scalable web applications and digital
              experiences. Currently working as a{" "}
              <strong style={{ color: "var(--clr-mode-text)" }}>
                MERN Stack Developer
              </strong>{" "}
              at{" "}
              <strong style={{ color: "var(--clr-mode-text)" }}>
                Fenix Digitech
              </strong>
              , where I develop and maintain full-stack applications using
              modern technologies.
            </p>

            <p>
              My expertise spans the entire development lifecycle—from designing
              intuitive user interfaces with React and Next.js to building
              robust backend systems with Node.js, Express, and various
              databases. I specialize in creating reusable components,
              optimizing state management, and ensuring seamless integration
              between client and server-side logic.
            </p>

            <p>
              Beyond coding, I focus on delivering solutions that make a real
              impact. Whether it's streamlining business processes, improving
              user experiences, or solving complex technical challenges, I
              approach each project with attention to detail and a commitment to
              quality.
            </p>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow)",
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--clr-mode)" }}
                >
                  Frontend
                </h3>
                <p style={{ color: "var(--clr-mode-text-muted)" }}>
                  React, Next.js, TypeScript, TailwindCSS
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow)",
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--clr-mode)" }}
                >
                  Backend
                </h3>
                <p style={{ color: "var(--clr-mode-text-muted)" }}>
                  Node.js, Express, NestJS, RESTful APIs
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow)",
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--clr-mode)" }}
                >
                  Databases
                </h3>
                <p style={{ color: "var(--clr-mode-text-muted)" }}>
                  MongoDB, PostgreSQL, MySQL
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
