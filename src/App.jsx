import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Timeline from "./components/TimeLine/Timeline";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Github from "./components/GitHub/Github";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <section className={ theme==='light' ? 'light' : 'dark'} style={{
      backgroundColor : 'var(--bg-clr)'
    }}>
      <Header />
      <ScrollToTop />
      <Home />
      <Timeline />
      <Skills />
      <Github />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
