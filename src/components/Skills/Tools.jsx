import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Tools({ url, title, fade }) {
  const { theme } = useContext(ThemeContext);
  const clr = theme === "dark" ? { color: "white" } : {};

  return (
    <div
      data-aos={fade}
      className="flex justify-center items-center flex-col w-24 hover:text-sky-500 text-sm  h-24 font-semibold font-mono lg:h-28 lg:text-xl sm:w-auto"
      style={clr}
    >
      <div
        id="techstack"
        className="h-16 ease-in transition-all flex flex-col justify-center items-center hover:scale-110 lg:h-28 lg:hover:scale-125 sm:w-full"
      >
        <img className="w-full h-full" src={url} alt={title} />
        <div className="mt-1 md:mt-2">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Tools;
