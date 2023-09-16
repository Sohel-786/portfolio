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
      className="flex flex-col my-16 mb-0 justify-center items-center px-10"
    >
      <div data-aos="zoom-out-up" className="text-5xl font-bold font-sans leading-9 tracking-wide my-6 text-sky-400 mb-11 flex justify-center items-center gap-6">
        <h1 >
          Built By Me
        </h1>
        <div id={theme === 'dark' ? 'dark' : 'light'} className="text-blue-500"><FaHandPeace /></div>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center ">
        <ProjectCard
          title={"Mailchimp Replica"}
          url={"https://shahnawaz-malek.netlify.app/images/mailchimp1.jpg"}
          tools={[html, css, js, node, mongo, ex]}
          points={[
            "Signup/Login with backend support",
            "Starting campaigns with multiple user data",
            "Sending emails in bulk and Tracking record of previous campaigns",
          ]}
          alt={"Mailchimp"}
          liveUrl={""}
          gitUrl={""}
        />

        <ProjectCard
          title={"Mailchimp Replica"}
          url={"https://shahnawaz-malek.netlify.app/images/mailchimp1.jpg"}
          tools={[html, css, js, node, mongo, ex]}
          points={[
            "Signup/Login with backend support",
            "Starting campaigns with multiple user data",
            "Sending emails in bulk and Tracking record of previous campaigns",
          ]}
          alt={"Mailchimp"}
          liveUrl={""}
          gitUrl={""}
        />
      </div>
    </section>
  );
}

export default Projects;
