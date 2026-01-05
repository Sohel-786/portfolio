import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MdOutlineWork,
  MdSchool,
  MdOutlineSchool,
} from "react-icons/md";
import TimelineElement from "./TimelineElement";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const experiences = [
  {
    id: 1,
    icon: <MdOutlineWork />,
    title: "MERN Stack Developer",
    company: "Fenix Digitech",
    duration: "December 2025 – Present",
    description:
      "Currently working as a MERN Stack Developer, developing and maintaining full-stack applications using React.js, Node.js, Express.js, MongoDB, and modern web technologies. Building scalable web solutions and digital products for clients.",
    type: "work",
  },
  {
    id: 2,
    icon: <MdOutlineWork />,
    title: "MERN Stack Developer",
    company: "Empiric Infotech",
    duration: "June 2024 – September 2025",
    description:
      "Developed and maintained full-stack applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, Next.js, and Electron.js. Implemented reusable front-end components, optimized state management with Redux, and ensured seamless integration of client and server-side logic.",
    type: "work",
  },
  {
    id: 3,
    icon: <MdOutlineWork />,
    title: "Freelance MERN Stack Developer",
    company: "Self Employed",
    duration: "January 2024 – June 2024",
    description:
      "Delivered multiple MERN-based applications for international clients. Built authentication systems, dashboards, and payment integrations while managing communication, requirements, and code delivery independently.",
    type: "work",
  },
  {
    id: 4,
    icon: <MdOutlineWork />,
    title: "MERN Stack Intern",
    company: "PW Skills",
    duration: "January 2023 – Oct 2023",
    description:
      "Built multiple practice and real-client web applications using React, Node.js, and MongoDB. Gained hands-on experience in RESTful APIs, authentication, and project deployment workflows.",
    type: "work",
  },
  {
    id: 5,
    icon: <MdOutlineWork />,
    title: "Business Analyst",
    company: "Aira Euro Automation Pvt. Ltd.",
    duration: "March 2019 – January 2023",
    description:
      "Coordinated end-to-end execution of software projects, ensuring timely delivery and quality. Reduced delays by streamlining communication and strengthened skills in project delivery, requirement analysis, and team management.",
    type: "work",
  },
  {
    id: 6,
    icon: <MdSchool />,
    title: "Diploma in Information Technology",
    company: "R.C. Technical Institute, Ahmedabad, Gujarat",
    duration: "2015 – 2018",
    description: "",
    type: "education",
  },
  {
    id: 7,
    icon: <MdOutlineSchool />,
    title: "Completed Secondary School",
    company: "Pragati School, Maninagar, Ahmedabad, Gujarat",
    duration: "March 2015",
    description: "",
    type: "education",
  },
];

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 lg:py-32 px-5 lg:px-20 relative"
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
            Experience & Education
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
            }}
          />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 transform lg:-translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, var(--gradient-start), var(--gradient-end))",
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <TimelineElement
                key={exp.id}
                experience={exp}
                index={index}
                variants={containerVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
