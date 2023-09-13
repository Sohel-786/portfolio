import Home from "./components/home"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Timeline from "./components/Timeline";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Home />
      <Timeline />
    </>
  )
}

export default App
