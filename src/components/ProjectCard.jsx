import { nanoid } from "nanoid";
import Button from "./Button";

function ProjectCard({ url, alt, title, points, tools, liveUrl, gitUrl }) {
  return (
    <div className="flex py-3 px-4 justify-center items-center rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div>
        <div>
            <img
          src={url}
          alt={alt}
        /> 
        </div>
        <div>
            {
                tools.map((el) => {
                    return <img key={nanoid()} src={`/src/assets/icons/${el}.svg`} alt={el} />
                })
            }
        </div>
       
      </div>

      <div>
        <h1>{title}</h1>
        <ul>
            {
                points.map((el) => {
                    return <li key={nanoid()}>{el}</li>
                })      
            }
        </ul>
            
        <Button live={liveUrl} git={gitUrl} />
      </div>
    </div>
  );
}

export default ProjectCard;
