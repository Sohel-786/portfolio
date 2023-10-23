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
      <VerticalTimeline lineColor={theme === 'light' ?"black" : 'white'}>

        <TimelineElement
          p={
            "Joined the One Stop Tech Solution to learn Full Stack Web Development (MERN Stack). Also learned many soft skills in the process."
          }
          h3={"Student"}
          h4={"PW Skills (Remote)"}
          d={"January 2023 - October 2023"}
          pos={'left'}
        >
          <MdSchool />
        </TimelineElement>

        <TimelineElement
          p={
            "Determinig and overseeing consistent testing, evaluation, and troubleshooting of software in all stages of completion. Implementer & training provider, Runtime mistakes and problems Solver, Assess management and user's need and provide them with software solutions."
          }
          h3={"Software Project Coordinator"}
          h4={"Aira Euro Automation Private Limited"}
          d={"March 2019 - November 2022"}
          pos={'right'}

        >
          <MdOutlineWork />
        </TimelineElement>

        <TimelineElement
          h3={"Diploma In Information Technology"}
          p={"R. C. Technical Institute, Ahmedabad, Gujarat"}
          d={"August 2015 - July 2018"}
          pos={'left'}

        >
          <MdSchool />
        </TimelineElement>

        <TimelineElement
          h3={"Completed Secondary School"}
          p={"Pragati School, Maninagar, Ahmedabad, Gujarat"}
          d={"March 2015"}
          pos={'right'}

        >
          <MdOutlineSchool/>
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
