import { nanoid } from "nanoid";
import Button from "./Button";
import { IoMdArrowDropright } from "react-icons/io";

function ProjectCard({ url, alt, title, points, tools, liveUrl, gitUrl }) {
  return (
    <section
      className="flex flex-col py-4 sm:py-7 px-5 gap-3 h-[550px] hover:scale-105 transition-all ease-in-out duration-300 justify-center items-center rounded-2xl border-2 border-sky-200 sm:h-[485px] sm:gap-6 sm:flex-row sm:m-5"
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-3/5 gap-3 sm:h-full sm:w-7/12 sm:gap-6">
        <div
          data-aos="fade-right"
          className="w-full rounded-2xl overflow-hidden shadow-md shadow-sky-300 h-5/6"
        >
          <img className="w-full h-full" src={url} alt={alt} />
        </div>

        <div
          className="flex justify-center items-center flex-wrap w-full gap-2 sm:w-auto sm:flex-nowrap sm:gap-4"
        >
          {tools.map((el, i) => {
            return (
              <img
                className="w-7 sm:h-12 sm:w-1/5"
                key={nanoid()}
                src={`/src/assets/icons/${el}.svg`}
                alt={el}
              />
            );
          })}
        </div>
      </div>

      <div
        className="w-full h-2/5 flex flex-col sm:py-5 sm:w-5/12 sm:h-full"
        style={{
          color: "var(--clr-mode-text)",
        }}
      >
        <h1
        data-aos ='fade-right'
          className="text-lg font-bold font-sans sm:text-4xl"
          style={{
            color: "var(--clr-mode)",
          }}
        >
          {title}
        </h1>
        <ul className="flex flex-col my-1 gap-1 sm:my-8 sm:gap-3">
          {points.map((el) => {
            return (
              <div className="flex gap-1 sm:gap-2"  key={nanoid()}>

                <div data-aos='fade-left' className="text-xs p-0.5 text-sky-500 sm:text-xl sm:pt-1">
                  <IoMdArrowDropright />
                </div>
                <li data-aos='fade-right' className="text-xs font-bold font-mono sm:text-xl">
                  {el}
                </li>
              </div>
            );
          })}
        </ul>

        <Button live={liveUrl} git={gitUrl} />
      </div>
    </section>
  );
}

export default ProjectCard;
