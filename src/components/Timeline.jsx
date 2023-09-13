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
            className="vertical-timeline-element-title font-bold"
            data-aos="fade-right"
            style={{
              color: "var(--clr-mode)",
            }}
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
          date={"March 2019 - November 2022"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--card-bg-right)`,
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `white`,
            color: `rgb(33, 150, 243)`,
          }}
          icon={<MdOutlineWork />}
        >
          <h3
            className="vertical-timeline-element-title font-bold"
            data-aos="fade-right"
            style={{
              color: "var(--clr-mode)",
            }}
          >
            Software Project Coordinator
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Aira Euro Automation Private Limited
          </h4>
          <p data-aos="fade-right">
            Joined the Military style Bootcamp to learn Software Development and
            Data Structures. Also learned many soft skills in the process.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"August 2015 - July 2018"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
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
            className="vertical-timeline-element-title font-bold"
            data-aos="fade-right"
            style={{
              color: "var(--clr-mode)",
            }}
          >
            Diploma In Information Technology
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          ></h4>
          <p data-aos="fade-right">
            R. C. Technical Institute, Ahmedabad, Gujarat
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"March 2014"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--card-bg-right)`,
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `white`,
            color: `rgb(33, 150, 243)`,
          }}
          icon={<MdOutlineSchool />}
        >
          <h3
            className="vertical-timeline-element-title font-bold"
            data-aos="fade-right"
            style={{
              color: "var(--clr-mode)",
            }}
          >
            Completed Secondary School
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          ></h4>
          <p data-aos="fade-right">
            Pragati School, Maninagar, Ahmedabad, Gujarat
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdStars />}
          iconStyle={{
            backgroundColor: `white`,
            color: `rgb(33, 150, 243)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
