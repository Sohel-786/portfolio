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
        {/* Empiric Infotech */}
        <TimelineElement
          p={`Developed and maintained full-stack applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, Next.js, and Electron.js. Implemented reusable front-end components, optimized state management with Redux, and ensured seamless integration of client and server-side logic.`}
          h3={"MERN Stack Developer"}
          h4={"Empiric Infotech"}
          d={"June 2024 – September 2025"}
          pos={"left"}
        >
          <MdOutlineWork />
        </TimelineElement>

        {/* Freelance */}
        <TimelineElement
          p={`Delivered multiple MERN-based applications for international clients. Built authentication systems, dashboards, and payment integrations while managing communication, requirements, and code delivery independently.`}
          h3={"Freelance MERN Stack Developer"}
          h4={"Self Employed"}
          d={"January 2024 – June 2024"}
          pos={"right"}
        >
          <MdOutlineWork />
        </TimelineElement>

        {/* Project Coordinator */}
        <TimelineElement
          p={`Coordinated end-to-end execution of software projects, ensuring timely delivery and quality. Reduced delays by streamlining communication and strengthened skills in project delivery, requirement analysis, and team management.`}
          h3={"Software Project Coordinator"}
          h4={"Aira Euro Automation Pvt. Ltd."}
          d={"March 2019 – January 2023"}
          pos={"left"}
        >
          <MdOutlineWork />
        </TimelineElement>

        {/* Diploma */}
        <TimelineElement
          h3={"Diploma in Information Technology"}
          p={"R.C. Technical Institute, Ahmedabad, Gujarat"}
          d={"2015 – 2018"}
          pos={"right"}
        >
          <MdSchool />
        </TimelineElement>

        {/* Secondary School */}
        <TimelineElement
          h3={"Completed Secondary School"}
          p={"Pragati School, Maninagar, Ahmedabad, Gujarat"}
          d={"March 2015"}
          pos={"left"}
        >
          <MdOutlineSchool />
        </TimelineElement>

        <VerticalTimelineElement
          icon={<MdStars />}
          iconStyle={{
            backgroundColor: `var(--bg-clr)`,
            color: `var(--clr-mode)`,
          }}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
