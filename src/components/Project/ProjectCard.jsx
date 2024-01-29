import { nanoid } from "nanoid";
import Button from "./Button";
import { IoMdArrowDropright } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { DiResponsive } from "react-icons/di";

function ProjectCard({
  url,
  desc,
  alt,
  title,
  points,
  tools,
  liveUrl,
  gitUrl,
  responsive,
}) {
  return (
    <section
      className="flex flex-col py-4 md:py-2 lg:py-7 px-1 gap-3 h-[580px] md:h-[680px] hover:scale-105 transition-all ease-in-out duration-300 justify-center items-center rounded-2xl border-2 border-sky-200 lg:h-[510px] lg:gap-6 lg:flex-row w-[98%] md:px-3 lg:px-5 lg:m-5"
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-3/5 gap-3 md:h-[68%] lg:h-full lg:w-7/12 lg:gap-6">
        <div
          data-aos="fade-right"
          className="w-full rounded-2xl overflow-hidden shadow-md shadow-sky-300 h-5/6"
        >
          <img className="w-full h-full" src={url} alt={alt} />
        </div>

        <div className="flex justify-center items-center flex-wrap w-full gap-2 lg:w-auto lg:flex-nowrap lg:gap-4">
          {tools.map((el, i) => {
            return (
              <img
                className="w-7 h-full lg:h-12 lg:w-1/5"
                key={nanoid()}
                src={`/assets/icons/${el}.svg`}
                alt={el}
              />
            );
          })}
        </div>
      </div>

      <div
        data-aos="fade-right"
        className="w-full h-2/5 md:h-[32%] flex px-2 sm:px-0 flex-col lg:py-1 lg:w-5/12 lg:h-full"
        style={{
          color: "var(--project-points)",
        }}
      >
        <h1
          className="text-lg font-bold font-sans lg:text-4xl"
          style={{
            color: "var(--clr-mode)",
          }}
        >
          {title}
        </h1>
        <p
          className="text-sm font-semibold font-sans md:mt-1 lg:mt-2 flex items-center "
          style={{
            color: "var(--clr-mode-text)",
          }}
        >
          {"(" + desc + ")"}{" "}
          <span
            className={`${
              responsive ? "text-[#19cd19]" : "text-[#ff1c1c]"
            } font-bold text-base ml-1 flex tracking-wide`}
          >
            <BsDot /> {responsive ? "Responsive" : "Not Responsive"}
          </span>
        </p>
        <ul className="flex h-[50%] md:h-[40%] lg:h-[60%] overflow-y-auto scroll scroll-smooth flex-col my-2 gap-3 lg:my-8 lg:gap-5">
          {points.map((el) => {
            return (
              <li className="flex gap-1 lg:gap-2" key={nanoid()}>
                <div className="text-xs p-0.5 text-sky-500 lg:text-xl lg:pt-1">
                  <IoMdArrowDropright />
                </div>
                <p className="text-xs font-bold font-mono lg:text-xl">{el}</p>
              </li>
            );
          })}
        </ul>

        <Button live={liveUrl} git={gitUrl} />
      </div>
    </section>
  );
}

export default ProjectCard;
