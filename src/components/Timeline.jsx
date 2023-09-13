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

function Timeline() {
  return (
    <section
      className="flex items-center flex-col"
      style={{
        color: "var(--clr-mode-text)",
      }}
    >
      <h1
        data-aos="fade-left"
        className="text-3xl font-bold leading-9 tracking-wide my-7"
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
      <VerticalTimeline lineColor={"black"}>
        <VerticalTimelineElement
          date={"January 2023 - Present"}
          contentStyle={{
            boxShadow: "var(--shadow)",
            backgroundColor: `var(--card-bg-left)`,
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `white`,
            color: `rgb(33, 150, 243)`,
          }}
          icon={<MdSchool />}
        >
          <h3
            className="vertical-timeline-element-title text-blue-500 font-bold"
            data-aos="fade-right"
          >
            Student
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            PW Skills (Remote)
          </h4>
          <p data-aos="fade-right">
            Mentoring and clearing student's conceptual doubts via
            standups,reviewing student's projects, reporting to the instructor.
            Helping students to start their career in Tech.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={"April 2021 - October 2021"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Student
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Masai School (Remote)
          </h4>
          <p data-aos="fade-right">
            Joined the Military style Bootcamp to learn Software Development and
            Data Structures. Also learned many soft skills in the process.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"2014 - 2017"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Bachelor of Science, Zoology Honors
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          ></h4>
          <p data-aos="fade-right">
            North Bengal St. Xavier's College, Rajganj
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"March 2014"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Completed Higher Secondary - Science
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          ></h4>
          <p data-aos="fade-right">
            Jalpaiguri Zilla School, Jalpaiguri, West Bengal
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdStars />}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
