import { nanoid } from "nanoid";
import Button from "./Button";
import { IoMdArrowDropright } from "react-icons/io";

function ProjectCard({ url, alt, title, points, tools, liveUrl, gitUrl }) {
  return (
    <section
      className="flex flex-col py-4 lg:py-7 px-5 gap-3 h-[550px] hover:scale-105 transition-all ease-in-out duration-300 justify-center items-center rounded-2xl border-2 border-sky-200 lg:h-[485px] lg:gap-6 lg:flex-row lg:m-5"
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-3/5 gap-3 lg:h-full lg:w-7/12 lg:gap-6">
        <div
          data-aos="fade-right"
          className="w-full rounded-2xl overflow-hidden shadow-md shadow-sky-300 h-5/6"
        >
          <img className="w-full aspect-[2.07]" src={url} alt={alt} />
        </div>

        <div
          className="flex justify-center items-center flex-wrap w-full gap-2 lg:w-auto lg:flex-nowrap lg:gap-4"
        >
          {tools.map((el, i) => {
            return (
              <img
                className="w-7 lg:h-12 lg:w-1/5"
                key={nanoid()}
                src={`/assets/icons/${el}.svg`}
                alt={el}
              />
            );
          })}
        </div>
      </div>

      <div
        className="w-full h-2/5 flex flex-col lg:py-5 lg:w-5/12 lg:h-full"
        style={{
          color: "var(--clr-mode-text)",
        }}
      >
        <h1
        data-aos ='fade-right'
          className="text-lg font-bold font-sans lg:text-4xl"
          style={{
            color: "var(--clr-mode)",
          }}
        >
          {title}
        </h1>
        <ul className="flex flex-col my-1 gap-1 lg:my-8 lg:gap-3">
          {points.map((el) => {
            return (
              <li className="flex gap-1 lg:gap-2"  key={nanoid()}>

                <div data-aos='fade-left' className="text-xs p-0.5 text-sky-500 lg:text-xl lg:pt-1">
                  <IoMdArrowDropright />
                </div>
                <p data-aos='fade-right' className="text-xs font-bold font-mono lg:text-xl">
                  {el}
                </p>
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
