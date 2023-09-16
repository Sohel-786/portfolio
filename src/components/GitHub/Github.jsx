import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { ThemeContext } from "../../Context/ThemeContext";

function Github() {
  const {theme} = useContext(ThemeContext);
  const id = theme === 'dark' ? 'dark' : 'light';
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <section className="flex flex-col justify-center items-center my-20 gap-14" style={{
      color : 'var(--clr-mode-text)'
    }}>
      <div className="flex justify-center items-center gap-7">
        <h1 data-aos="fade-right" className="text-4xl font-sans font-bold">
          <span id={id}>D</span>ays I{" "}
          <span id={id}>C</span>ode
        </h1>
        <div data-aos="zoom-in-down" id={id} className="text-6xl">
          <LiaLaptopCodeSolid />
        </div>
      </div>
      <div data-aos='fade-up' className="font-bold font-mono" style={{
        color : 'var(--clr-mode-text)'
      }}>
        <GitHubCalendar
          username="Sohel-786"
          fontSize={18}
          blockSize={15}
          blockMargin={5}
        />
      </div>
    </section>
  );
}

export default Github;
