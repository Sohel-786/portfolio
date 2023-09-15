import { nanoid } from "nanoid";
import Button from "./Button";

function ProjectCard({ url, alt, title, points, tools, liveUrl, gitUrl }) {
  return (
    <div className="flex gap-6 h-[500px] py-7 px-5 justify-center items-center rounded-2xl border-2 border-red-400">

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

      <div className="w-6/12 h-full flex flex-col py-7" style={{
        color : 'var(--clr-mode-text)'
      }}>

        <h1 className="text-4xl font-bold font-sans text-purple-500">{title}</h1>
        <ul className="flex flex-col gap-3 my-8">
          {points.map((el) => {
            return <li className="text-xl font-bold font-mono" key={nanoid()}>{el}</li>;
          })}
        </ul>

        <Button live={liveUrl} git={gitUrl} />
      </div>
    </div>
  );
}

export default ProjectCard;
