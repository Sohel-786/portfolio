import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  MdOutlineWork,
  MdSchool,
  MdOutlineSchool,
  MdStars,
} from "react-icons/md";
import TimelineElement from "./TimelineElement";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Timeline() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="flex items-center flex-col mt-2"
      style={{
        color: "var(--clr-mode-text)",
      }}
    >
      <h1
        data-aos="fade-left"
        className="text-2xl font-bold leading-9 tracking-wide my-10 lg:text-3xl lg:my-12"
      >
        My{" "}
        <span
          style={{
            color: "var(--nav-msg-clr)",
          }}
        >
          Timeline
        </span>{" "}
        💫
      </h1>
      <VerticalTimeline lineColor={theme === "light" ? "black" : "white"}>
        <TimelineElement
          p={`Developing user-facing features using React.js, ensuring appealing and responsive user interfaces.Building efficient and scalable server-side systems using Node.js and Express.js. Integrating front-end components with server-side logic, ensuring seamless communication between the two.Implementing data storage solutions using MongoDB and other relevant technologies.`}
          h3={"MERN Stack Developer"}
          h4={"Freelance (Self employed)"}
          d={"December 2022 - Present"}
          pos={"left"}
        >
          <MdOutlineWork />
        </TimelineElement>

        <TimelineElement
          p={
            "Determinig and overseeing consistent testing, evaluation, and troubleshooting of software in all stages of completion. Implementer & training provider, Runtime mistakes and problems Solver, Assess management and user's need and provide them with software solutions."
          }
          h3={"Software Project Coordinator"}
          h4={"Aira Euro Automation Private Limited"}
          d={"March 2019 - November 2022"}
          pos={"right"}
        >
          <MdOutlineWork />
        </TimelineElement>

        <TimelineElement
          h3={"Diploma In Information Technology"}
          p={"R. C. Technical Institute, Ahmedabad, Gujarat"}
          d={"August 2015 - July 2018"}
          pos={"left"}
        >
          <MdSchool />
        </TimelineElement>

        <TimelineElement
          h3={"Completed Secondary School"}
          p={"Pragati School, Maninagar, Ahmedabad, Gujarat"}
          d={"March 2015"}
          pos={"right"}
        >
          <MdOutlineSchool />
        </TimelineElement>

        <VerticalTimelineElement
          icon={<MdStars />}
          iconStyle={{
            backgroundColor: `var(--bg-clr)`,
            color: `var(--clr-mode)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
