import ProjectCard from "./ProjectCard";

function Projects() {
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
      className="flex flex-col my-16 justify-center items-center px-10"
    >
      <div data-aos="zoom-out-up">
        <h1 className="text-5xl font-bold font-sans leading-9 tracking-wide my-8 text-sky-500 mb-14">
          Projects
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <ProjectCard
          title={"Mailchimp Replica"}
          url={
            "https://raw.githubusercontent.com/harshchaturvedi1/mailChimp-clone/master/public/githubReadme/home.png"
          }
          tools={[html, css, js, node, ex, mongo]}
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
