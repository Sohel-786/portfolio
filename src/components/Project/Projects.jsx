import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { FaHandPeace } from "react-icons/fa6";
import { ThemeContext } from "../../Context/ThemeContext";

function Projects() {
  const {theme} = useContext(ThemeContext);

  const js = "javascript";
  const html = "html-5";
  const css = "css3";
  const ex = "express";
  const mongo = "mongodb";
  const node = "nodejs";
  const react = "reactjs";
  const redux = "reduxjs";
  const tailwind = "tailwindcss";

  return (
    <section
      id="projects"
      className="flex flex-col my-16 mb-0 justify-center items-center px-5 lg:px-10"
    >
      <div data-aos="zoom-out-up" className="text-2xl font-bold font-sans leading-9 tracking-wide text-sky-400 flex justify-center items-center my-4 mb-7 gap-4 lg:gap-6 lg:mb-11 lg:my-6 lg:text-5xl">
        <h1 >
          Built By Me
        </h1>
        <div id={theme === 'dark' ? 'dark' : 'light'} className="text-blue-500"><FaHandPeace /></div>
      </div>

      <div className="flex flex-col gap-9 justify-center items-center lg:gap-5">
        <ProjectCard
          title={"Classroom (Learning Management System)"}
          url={"https://github.com/Sohel-786/LMS/raw/main/client/public/githubReadme/homepage.png"}
          tools={[react, redux, ex, mongo, node, tailwind]}
          points={[
            ,
          ]}
          alt={"classroom"}
          liveUrl={"https://classroom-react.netlify.app"}
          gitUrl={"https://github.com/Sohel-786/LMS"}
        />
      </div>
    </section>
  );
}

export default Projects;
