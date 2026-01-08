import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projects = [
  {
    id: 1,
    title: "Rapid Personal Loans",
    description:
      "Mobile-first personal loan platform with seamless application experience",
    longDescription:
      "RapidPersonalLoans.com is a mobile-first personal loan site providing a seamless application experience. It features a user-friendly landing page, optimized web form, fast load times, and smooth navigation. The platform includes infinite scroll with lazy loading for better content access and high performance. A multi-step form guides users with real-time validation and autofill. The form is customizable using JSON configurations. By focusing on responsive design and SEO, RapidPersonalLoans.com delivers an engaging experience for personal loan seekers.",
    image: "/assets/project/rapid_personal_loan.png",
    liveUrl: "https://rapidpersonalloans.com/en",
    gitUrl: null,
    techStack: [
      "nextjs2",
      "typescript",
      "javascript",
      "html5",
      "css3",
      "tailwindcss",
    ],
    features: [
      "Mobile-first responsive design",
      "Multi-step form with real-time validation",
      "Infinite scroll with lazy loading",
      "JSON-configurable form system",
      "SEO optimized",
      "Fast load times and smooth navigation",
    ],
    responsive: true,
  },
  {
    id: 2,
    title: "Fenix Digitech",
    description: "Modern IT solutions company portfolio website",
    longDescription:
      "Fenix Digitech is a modern IT solutions company delivering reliable web, mobile, and digital products designed to scale with your business goals. This is a portfolio website showcasing their services, solutions, and work process. The site features a clean, professional design with smooth animations and clear call-to-actions. Currently, only the desktop version is prepared, demonstrating modern web development practices and design principles.",
    image: "/assets/project/fenix_digitech.png",
    liveUrl: "https://fenix-portfolio-website.vercel.app/",
    gitUrl: null,
    techStack: [
      "nextjs2",
      "typescript",
      "javascript",
      "html5",
      "css3",
      "tailwindcss",
    ],
    features: [
      "Modern portfolio design",
      "Service showcase",
      "Professional UI/UX",
      "Desktop-first approach",
    ],
    responsive: false,
  },
  {
    id: 3,
    title: "Classroom",
    description: "Learning Management System",
    longDescription:
      "A comprehensive Learning Management System built with MERN stack. Features user authentication, course subscription with payment gateway integration, lecture access management, ticket system for support, and a complete admin dashboard for course and user management.",
    image:
      "https://github.com/Sohel-786/LMS/raw/main/client/public/githubReadme/homepage.png",
    liveUrl: "https://classroom-react.netlify.app",
    gitUrl: "https://github.com/Sohel-786/LMS",
    techStack: [
      "reactjs",
      "redux",
      "express",
      "mongodb",
      "nodejs",
      "tailwindcss",
    ],
    features: [
      "SignUp and Login with JWT Authentication and Authorization",
      "User profile management (Picture, Name, Password reset)",
      "Course subscription through Payment Gateway",
      "Lecture access after subscription",
      "Ticket system for user support",
      "Admin Dashboard with revenue tracking",
      "Admin can Create/Update/Delete Courses and Lectures",
    ],
    responsive: true,
  },
  {
    id: 4,
    title: "My Store",
    description: "Ecommerce Web Application",
    longDescription:
      "A full-featured ecommerce platform with user authentication, product management, shopping cart, wishlist, order tracking, and comprehensive admin panel for product and order management.",
    image:
      "https://res.cloudinary.com/da3zef4f0/image/upload/v1709138596/lms/landingPage_bts5av.png",
    liveUrl: "https://mystore-app-react.netlify.app/",
    gitUrl: "https://github.com/Sohel-786/myStore",
    techStack: [
      "reactjs",
      "redux",
      "express",
      "mongodb",
      "nodejs",
      "tailwindcss",
    ],
    features: [
      "User Login/SignUp/Logout with Authentication & Authorization",
      "Profile management and address management",
      "Shopping bag and wishlist functionality",
      "Product filtering (brand, price, discount)",
      "Order tracking and management",
      "Admin product management (Add/Update/Delete)",
      "Admin order status management",
    ],
    responsive: false,
  },
  {
    id: 5,
    title: "Pokedex",
    description: "Pokedex clone from www.pokemon.com",
    longDescription:
      "A feature-rich Pokedex application with advanced search capabilities, detailed Pokemon information, evolution chains, and an intuitive user interface. Built with React and Redux for state management.",
    image:
      "https://res.cloudinary.com/da3zef4f0/image/upload/v1709138595/lms/homePage_1_avbf7u.png",
    liveUrl: "https://react-project-pokedex.netlify.app",
    gitUrl: "https://github.com/Sohel-786/pokedex",
    techStack: ["reactjs", "redux", "nodejs", "tailwindcss"],
    features: [
      "Debouncing effect on search box",
      "Advanced search (Ability, Height, Weight, Type, Weakness, Name, Pokedex number range)",
      "Detailed Pokemon information page",
      "Evolution chain visualization",
      "Auto-suggest functionality",
      "Pagination-like functionality",
    ],
    responsive: false,
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 lg:py-32 px-5 lg:px-20"
      style={{
        backgroundColor: "var(--bg-clr-alt)",
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
            Featured Projects
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
            A collection of projects I've built, showcasing my skills in
            full-stack development, UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
