import GitHubCalendar from "react-github-calendar";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function Github() {
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
    <section className="flex flex-col justify-center items-center my-16 gap-14">
      <div className="flex justify-center items-center gap-7">
        <h1 data-aos="fade-right" className="text-4xl font-sans font-bold">
          <span className="text-sky-500 ">D</span>ays I{" "}
          <span className="text-sky-500">C</span>ode
        </h1>
        <div data-aos="zoom-in-down" className="text-6xl text-sky-500 ">
          <LiaLaptopCodeSolid />
        </div>
      </div>
      <div data-aos='fade-left' className="font-bold font-mono" style={{
        color : 'var(--clr-mode-text)'
      }}>
        <GitHubCalendar
          username="sohel-786"
          fontSize={18}
          blockSize={15}
          blockMargin={5}
        />
      </div>
    </section>
  );
}

export default Github;
