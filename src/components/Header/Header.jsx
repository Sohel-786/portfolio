import Li from "./Li";
import Typewriter from "typewriter-effect";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
  const { handleTheme, theme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(nav ? false : true);
  }

  return (
    <header
      id="top"
      className="flex justify-between items-center lg:px-20 lg:pr-14 py-4 px-6"
    >
      <div
        className=" flex justify-center items-center lg:text-lg text-base font-mono font-semibold"
        style={{
          color: "var(--nav-msg-clr)",
        }}
      >
        <img
          rel="preload"
          fetchpriority="high"
          className="lg:w-14 w-9 h-full mr-2"
          src="/assets/robo.svg"
          alt="welcome"
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(0).typeString("Hello!").start();
          }}
        />
      </div>

      <div
        onClick={handleNav}
        className="lg:hidden z-50 absolute right-6 text-2xl"
        style={{
          color: "var(--clr-mode-text)",
          position: nav ? "fixed" : "absolute",
        }}
      >
        {nav ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      {nav ? (
        <div
          className="lg:hidden fixed top-0 right-0 w-screen h-screen flex flex-col justify-center items-center py-11 z-40"
          style={{
            backgroundColor: "var(--bg-clr)",
            color: "var(--clr-mode-text)",
          }}
        >
          <ul className="text-2xl tracking-wider font-bold flex flex-col justify-center items-center w-full h-full gap-7">
            <a onClick={handleNav} href="#skills">
              <li>Skills</li>
            </a>
            <a onClick={handleNav} href="#projects">
              <li>Projects</li>
            </a>
            <a onClick={handleNav} href="#contact">
              <li>Contact</li>
            </a>
            <a
              href="https://drive.google.com/file/d/1Dg9xZm28TXXNxcEM22jiMIgTn6gn-wUX/view?usp=sharing"
              onClick={handleNav}
              target="_blank"
              rel="noreferrer"
            >
              <li>Resume</li>
            </a>
          </ul>
        </div>
      ) : null}

      <div className="hidden lg:flex justify-center items-center mr-10">
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
        </nav>
      </div>

      <button
        aria-label="theme"
        onClick={handleTheme}
        className="cursor-pointer absolute right-16 text-2xl text-sky-400 hover:bg-sky-500 p-2 rounded-full hover:transition-all hover:duration-300 hover:text-white hover:shadow-zinc-700 hover:shadow-md lg:right-11"
      >
        {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
      </button>
    </header>
  );
}

export default Header;
