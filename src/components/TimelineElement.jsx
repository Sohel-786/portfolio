import { VerticalTimelineElement } from "react-vertical-timeline-component";

function TimelineElement({h3,h4,p,d,children, pos}) {
  return (
    <VerticalTimelineElement
      date={d}
      contentStyle={{
        boxShadow: "var(--shadow)",
        backgroundColor: `var(--card-bg-${pos})`,
        textAlign: "center",
      }}
      contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
      iconStyle={{
        backgroundColor: `white`,
        color: `rgb(33, 150, 243)`,
      }}
      icon={children}
    >
      <h3
        className="vertical-timeline-element-title font-bold"
        data-aos="fade-right"
        style={{
          color: "var(--clr-mode)",
        }}
      >
        {h3}
      </h3>
      <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
        {h4}
      </h4>
      <p data-aos="fade-right">
        {p}
      </p>
    </VerticalTimelineElement>
  );
}

export default TimelineElement;