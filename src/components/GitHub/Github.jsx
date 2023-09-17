import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { ThemeContext } from "../../Context/ThemeContext";

function Github() {
  const colourThemeLight = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

  const colourThemeDark = ["#06150d", "#0e4429", "#006d32", "#26a641", "#39d353"];

  const { theme } = useContext(ThemeContext);
  const id = theme === "dark" ? "dark" : "light";

  return (
    <section
      className="flex flex-col justify-center items-center my-20 px-5 gap-7 sm:gap-14"
      style={{
        color: "var(--clr-mode-text)",
      }}
    >
      <div className="flex justify-center items-center gap-4 sm:gap-7">
        <h1 data-aos="fade-right" className=" font-sans font-bold text-2xl sm:text-4xl">
          <span id={id}>D</span>ays I <span id={id}>C</span>ode
        </h1>
        <div data-aos="zoom-in-down" id={id} className="text-4xl sm:text-6xl">
          <LiaLaptopCodeSolid />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="font-bold font-mono"
        style={{
          color: "var(--clr-mode-text)",
        }}
      >
        <GitHubCalendar
          username="Sohel-786"
          // fontSize={10}
          blockSize={15}
          blockMargin={5}
          theme={{ light: theme === 'light' ? colourThemeLight : colourThemeDark}}
        />
      </div>
    </section>
  );
}

export default Github;
