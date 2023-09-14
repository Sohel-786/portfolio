import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Header from "./components/Header";
import Github from "./components/Github";
import Projects from "./components/Projects";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Timeline />
      <Skills />
      <Github />
      <Projects />
    </>
  )
}

export default App
