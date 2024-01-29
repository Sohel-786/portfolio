import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { FaHandPeace } from "react-icons/fa6";
import { ThemeContext } from "../../Context/ThemeContext";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const js = "javascript";
  const html = "html-5";
  const css = "css3";
  const ex = "express";
  const mongo = "mongodb";
  const node = "nodejs";
  const react = "reactjs";
  const redux = "redux";
  const tailwind = "tailwindcss";

  return (
    <section
      id="projects"
      className="flex w-full flex-col my-16 mb-0 justify-center items-center px-5 lg:px-10"
    >
      <div
        data-aos="zoom-out-up"
        className="text-2xl font-bold font-sans leading-9 tracking-wide text-sky-400 flex justify-center items-center my-4 mb-7 gap-4 lg:gap-6 lg:mb-11 lg:my-6 lg:text-5xl"
      >
        <h1>Built By Me</h1>
        <div id={theme === "dark" ? "dark" : "light"} className="text-blue-500">
          <FaHandPeace />
        </div>
      </div>

      <div className="flex flex-col w-full gap-9 justify-center items-center lg:gap-5">
        <ProjectCard
          title={"Classroom"}
          desc={"Learning Management System"}
          url={
            "https://github.com/Sohel-786/LMS/raw/main/client/public/githubReadme/homepage.png"
          }
          tools={[react, redux, ex, mongo, node, tailwind]}
          points={[
            "SignUp and Login, Authentication with JWT and Authorization using custom Middleware.",
            "User Can update profile (Picture, Name except Email), Change password or Get Email to reset password if forgotten.",
            "User can subscribe for the course through Payment Gateway. Lectures access will be there after subscribtion.",
            "User can raise a ticket to contact and will get a confirmation email.",
            "Admin Dashboard, admin can view total of Registered and Subscribed User and total Revenue.",
            "Admin can Create/Update/Delete Course. Admin can Delete/Add Lectures.",
          ]}
          alt={"classroom"}
          liveUrl={"https://classroom-react.netlify.app"}
          gitUrl={"https://github.com/Sohel-786/LMS"}
          responsive={true}
        />

        <ProjectCard
          title={"My Store"}
          desc={"Ecommerce Web Application"}
          url={
            "https://github.com/Sohel-786/myStore/blob/main/client/public/githubReadme/landingPage.png?raw=true"
          }
          tools={[react, redux, ex, mongo, node, tailwind]}
          points={[
            "User can Login/SignUp/Logout, Authentication & Authorization",
            "Create and edit profile, and add, update, delete addresses",
            "view orders which are in process",
            "add, remove products in bag and in wishlist to buy it later",
            "Filter products through brand, price and discount",
            "Change and reset password",
            "Admin can Add/Update/Delete Products",
            "Admin can view Orders and details of any order which are InProcess and Orders which are Delivered",
            "Admin can update the status of an order from InProcess to Delivered",
          ]}
          alt={"My Store"}
          liveUrl={"https://mystore-app-react.netlify.app/"}
          gitUrl={"https://github.com/Sohel-786/myStore"}
          responsive={false}
        />

        <ProjectCard
          title={"Pokedex"}
          desc={"Pokedex clone from www.pokemon.com"}
          url={
            "https://github.com/Sohel-786/pokedex/blob/main/public/githubReadme/homePage.png?raw=true"
          }
          tools={[react, redux, node, tailwind]}
          points={[
            "Debouncing effect on the search box.",
            "Advance Search available Depend on Ability, Height, Weight, Type, Weakness and sub-string of Pokemon Name and Between pokedex-number Range.",
            "Pokemon Details Page with all varieties, stats, evolution chain and other characteristics of selected Pokemon.",
            "Auto-suggest of Pokemons on the Pokedex page and a pagination like functionality",
          ]}
          alt={"pokedex"}
          liveUrl={"https://react-project-pokedex.netlify.app"}
          gitUrl={"https://github.com/Sohel-786/pokedex"}
          responsive={false}
        />
      </div>
    </section>
  );
}

export default Projects;
