import { nanoid } from "nanoid";
import Button from "./Button";
import { IoMdArrowDropright } from "react-icons/io";

function ProjectCard({ url, alt, title, points, tools, liveUrl, gitUrl }) {
  return (
    <div
      className=" flex gap-6 h-[500px] py-7 px-5 justify-center items-center rounded-2xl border-2 border-sky-200 "
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-9/12 h-full">
        <div className="rounded-2xl overflow-hidden shadow-md shadow-sky-300 h-5/6">
          <img className="w-full h-full" src={url} alt={alt} />
        </div>

        <div className="flex justify-center items-center gap-4">
          {tools.map((el) => {
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
        className="w-6/12 h-full flex flex-col py-5 "
        style={{
          color: "var(--clr-mode-text)",
        }}
      >
        <h1
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
              <div className="flex gap-2">
                <div className="text-xl pt-1 text-sky-500">
                  <IoMdArrowDropright />
                </div>
                <li className="text-xl font-bold font-mono" key={nanoid()}>
                  {el}
                </li>
              </div>
            );
          })}
        </ul>

        <Button live={liveUrl} git={gitUrl} />
      </div>
    </div>
  );
}

export default ProjectCard;
