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
      className="flex justify-between items-center sm:px-20 sm:pr-14 py-4 px-6"
    >
      <div
        data-aos="zoom-in-down"
        className=" flex justify-center items-center sm:text-lg text-sm font-mono font-semibold"
        style={{
          color: "var(--nav-msg-clr)",
        }}
      >
        <img
          className="sm:w-14 w-9 mr-2"
          src="src\assets\robo.png"
          alt="welcome"
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString("Hello!").start();
          }}
        />
      </div>

      <div
        onClick={handleNav}
        className="sm:hidden z-50 absolute right-6 text-xl"
        style={{
          color: "var(--clr-mode-text)",
          position : nav ? "fixed" : "absolute"
        }}
      >
        {nav ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      {nav ? (
        <div className="sm:hidden fixed top-0 right-0 w-screen h-screen flex flex-col justify-center items-center py-11 z-40" style={{
          backgroundColor : 'var(--bg-clr)',
          color : 'var(--clr-mode-text)'
        }}>
          <ul className="text-xl tracking-wider font-bold flex flex-col justify-center items-center w-full h-full gap-7">
            <a onClick={handleNav} href="#skills">
              <li>Skills</li>
            </a>
            <a onClick={handleNav} href="#projects">
              <li>Projects</li>
            </a>
            <a onClick={handleNav} href="#contact">
              <li>Contact</li>
            </a>
            <a>
              <li>Resume</li>
            </a>
          </ul>
        </div>
      ) : null}

      <div className="hidden sm:flex justify-center items-center">
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
