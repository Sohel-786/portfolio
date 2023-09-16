import { nanoid } from "nanoid";
import Button from "./Button";
import { IoMdArrowDropright } from "react-icons/io";

function ProjectCard({ url, alt, title, points, tools, liveUrl, gitUrl }) {
  return (
    <section
      className=" flex gap-6 h-[485px] py-7 px-5 m-5 hover:scale-105 transition-all ease-in-out duration-300 justify-center items-center rounded-2xl border-2 border-sky-200 "
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-7/12 h-full">
        <div
          data-aos="fade-right"
          className="rounded-2xl overflow-hidden shadow-md shadow-sky-300 h-5/6"
        >
          <img className="w-full h-full" src={url} alt={alt} />
        </div>

        <div
          className="flex justify-center items-center gap-4"
        >
          {tools.map((el, i) => {
            return (
              <img
                className="w-1/5 h-12"
                key={nanoid()}
                src={`/src/assets/icons/${el}.svg`}
                alt={el}
              />
            );
          })}
        </div>
      </div>

      <div
        className=" h-full flex flex-col py-5 w-5/12"
        style={{
          color: "var(--clr-mode-text)",
        }}
      >
        <h1
        data-aos ='fade-right'
          className="text-4xl font-bold font-sans"
          style={{
            color: "var(--clr-mode)",
          }}
        >
          {title}
        </h1>
        <ul className="flex flex-col gap-3 my-8">
          {points.map((el) => {
            return (
              <div className="flex gap-2"  key={nanoid()}>
                <div data-aos='fade-left' className="text-xl pt-1 text-sky-500">
                  <IoMdArrowDropright />
                </div>
                <li data-aos='fade-right' className="text-xl font-bold font-mono">
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
