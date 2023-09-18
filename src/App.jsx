import Aos from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect } from "react";
const Timeline = React.lazy(() => import("./components/TimeLine/Timeline"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
import Header from "./components/Header/Header";
const Github = React.lazy(() => import("./components/GitHub/Github"));
const Projects = React.lazy(() => import("./components/Project/Projects"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const ScrollToTop = React.lazy(() => import("./components/Scroll/ScrollToTop"));
import Home from "./components/Home/Home";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <section
      className={theme === "light" ? "light" : "dark"}
      style={{
        backgroundColor: "var(--bg-clr)",
      }}
    >
      <div className="max-width overflow-hidden mx-auto">
        <Header />
        <ScrollToTop />
        <Home />
        <Timeline />
        <Skills />
        <Github />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}

export default App;
