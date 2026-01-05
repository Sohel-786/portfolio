import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Header from "./components/Header/Header";
const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Timeline = React.lazy(() => import("./components/TimeLine/Timeline"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Github = React.lazy(() => import("./components/GitHub/Github"));
const Projects = React.lazy(() => import("./components/Project/Projects"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const ScrollToTop = React.lazy(() => import("./components/Scroll/ScrollToTop"));

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={theme === "light" ? "light" : "dark"}
      style={{
        backgroundColor: "var(--bg-clr)",
        minHeight: "100vh",
      }}
    >
      <div className="max-width overflow-hidden mx-auto">
        <Header />
        <React.Suspense
          fallback={
            <div
              className="flex items-center justify-center min-h-screen"
              style={{ color: "var(--clr-mode-text)" }}
            >
              Loading...
            </div>
          }
        >
          <Home />
          <About />
          <Timeline />
          <Skills />
          <Github />
          <Projects />
          <Contact />
        </React.Suspense>
        <ScrollToTop />
      </div>
    </section>
  );
}

export default App;
