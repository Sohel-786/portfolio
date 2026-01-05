import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { ThemeContext } from "../../Context/ThemeContext";

function Github() {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colourThemeLight = [
    "#ebedf0",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ];

  const colourThemeDark = [
    "#06150d",
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353",
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 px-5 lg:px-20"
      style={{
        backgroundColor: "var(--bg-clr)",
        color: "var(--clr-mode-text)",
      }}
    >
      <div className="max-width mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-4 lg:gap-6 mb-4">
            <h2
              className="text-3xl lg:text-5xl font-bold"
              style={{ color: "var(--clr-mode-text)" }}
            >
              Days I Code
            </h2>
            <motion.div
              className="text-4xl lg:text-6xl"
              style={{ color: "var(--clr-mode)" }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <LiaLaptopCodeSolid />
            </motion.div>
          </div>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow: "var(--shadow)",
            }}
          >
            <GitHubCalendar
              username="Sohel-786"
              fontSize={13}
              blockSize={15}
              blockMargin={5}
              theme={{
                light: theme === "light" ? colourThemeLight : colourThemeDark,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Github;
