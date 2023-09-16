import Li from "./Li";
import Typewriter from "typewriter-effect";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Header() {
  const { handleTheme, theme } = useContext(ThemeContext);

  return (
    <header id="top" className="flex justify-between items-center px-20 pr-14 py-4">
      <div
        data-aos="zoom-in-down"
        className=" flex justify-center items-center text-lg font-mono font-semibold"
        style={{
          color: "var(--nav-msg-clr)",
        }}
      >
        <img className="w-14 mr-2" src="src\assets\robo.png" alt="welcome" />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString("Hello!").start();
          }}
        />
      </div>

      <div className=" flex justify-center items-center">
        <nav className="flex justify-center items-center list-none gap-10 px-4 py-2">
          <a href="#skills">
            <Li title={"Skills"} />
          </a>
          <a href="#projects">
            <Li title={"Projects"} />
          </a>
          <a href="#contact">
            <Li title={"Contact"} />
          </a>
          <Li title={"Resume"} />
          <button
            onClick={handleTheme}
            className="cursor-pointer text-lg text-sky-400 hover:bg-sky-500 p-2 rounded-full hover:transition-all hover:duration-300 hover:text-white hover:shadow-zinc-700 hover:shadow-md "
          >
            {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
