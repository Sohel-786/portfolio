import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import ContactIcon from "./ContactIcon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const contactLinks = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    url: "https://github.com/Sohel-786",
    text: "github.com/Sohel-786",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/",
    text: "linkedin.com/in/sohel-shaikh-8ba7a9110",
  },
  {
    icon: <MdMail />,
    label: "Email",
    url: "mailto:sohel.shaikh27100@gmail.com",
    text: "sohel.shaikh27100@gmail.com",
  },
  {
    icon: <MdPhone />,
    label: "Phone",
    url: "tel:+919664701106",
    text: "+91 9664701106",
  },
  {
    icon: <MdLocationOn />,
    label: "Location",
    url: "https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.414927,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu",
    text: "Ahmedabad, Gujarat, India",
  },
];

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 px-5 lg:px-20 relative overflow-hidden"
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--clr-mode-text)" }}
            >
              Let's Work Together
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{
                background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
              }}
            />
            <p
              className="text-lg lg:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--clr-mode-text-muted)" }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's connect!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {contactLinks.map((link, index) => (
              <ContactIcon
                key={index}
                icon={link.icon}
                label={link.label}
                url={link.url}
                text={link.text}
              />
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 pt-8"
          >
            <motion.div
              className="inline-block p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--shadow-lg)",
                border: `1px solid var(--border-clr)`,
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3
                className="text-xl lg:text-2xl font-bold mb-4"
                style={{ color: "var(--clr-mode-text)" }}
              >
                Ready to start a project?
              </h3>
              <p
                className="text-base mb-6"
                style={{ color: "var(--clr-mode-text-muted)" }}
              >
                Drop me a line and let's discuss how we can work together.
              </p>
              <motion.a
                href="mailto:sohel.shaikh27100@gmail.com"
                className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                }}
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-lg)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <p
              className="text-sm"
              style={{ color: "var(--clr-mode-text-muted)" }}
            >
              © {new Date().getFullYear()} Sohel Shaikh. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
