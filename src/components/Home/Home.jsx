import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import Icon from "./Icon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function Home() {
  return (
    <section
      id="home"
      className="md:flex-row flex flex-col mt-20 lg:mt-0 gap-5 lg:gap-0 justify-center items-center md:h-[550px] lg:h-[600px] px-5 lg:px-24"
      style={{
        backgroundColor: "var(--bg-clr)",
        minHeight: "100vh",
      }}
    >
      <motion.div
        className="lg:w-7/12 w-full lg:px-0 px-5 lg:mt-0 mt-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ color: "var(--clr-mode-text)" }}
      >
        <motion.h1
          variants={itemVariants}
          className="lg:text-5xl text-4xl font-extrabold lg:font-bold mb-4"
          style={{ color: "var(--clr-mode-text)" }}
        >
          Hi, I am{" "}
          <span style={{ color: "var(--clr-mode)" }}>Sohel Shaikh</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="lg:text-3xl text-lg font-bold font-mono my-7 max-h-20"
        >
          <Typewriter
            options={{
              strings: [
                "A Full Stack Web Developer",
                "A MERN Stack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="leading-7 tracking-wide text-lg lg:text-lg font-medium font-sans mb-6"
          style={{ color: "var(--clr-mode-text-muted)" }}
        >
          I enjoy developing websites and web applications. I am equipped with a
          variety of technologies and tools to help me build the best possible
          product.
        </motion.p>

        <motion.div variants={itemVariants}>
          <nav>
            <ul className="flex items-center list-none gap-4 my-4 sm:mx-0">
              <Icon
                url="https://github.com/Sohel-786"
                element={<FaGithub />}
                label="GitHub"
              />
              <Icon
                url="https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"
                element={<FaLinkedin />}
                label="LinkedIn"
              />
              <Icon
                url="mailto:sohel.shaikh27100@gmail.com"
                element={<MdMail />}
                label="Email"
              />
              <Icon
                url="tel:+919664701106"
                element={<MdPhone />}
                label="Phone"
              />
              <Icon
                url="https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.414927,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu"
                element={<MdLocationOn />}
                label="Location"
              />
            </ul>
          </nav>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-5/12 w-full sm:mt-0 mt-6 flex justify-center items-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-[400px] h-[400px] lg:max-w-[500px] lg:max-h-[500px] lg:w-[500px] lg:h-[500px] rounded-3xl bg-cover overflow-hidden"
          style={{
            boxShadow: "var(--shadow-lg)",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="w-full h-full object-cover"
            src="/assets/mine.png"
            alt="Sohel Shaikh"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
