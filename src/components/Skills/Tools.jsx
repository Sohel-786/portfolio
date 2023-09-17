import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Tools({ url, title, fade }) {
  const { theme } = useContext(ThemeContext);
  const clr = theme === "dark" ? { color: "white" } : {};

  return (
    <div
      data-aos={fade}
      className="flex justify-center items-center flex-col hover:text-sky-500 hover:font-bold hover:text-lg text-sm hover:font-sans h-24 font-semibold font-mono lg:h-36 lg:text-xl lg:hover:text-2xl"
      style={clr}
    >
      <div
        id="techstack"
        className="w-full h-16 ease-in hover:h-20 transition-all flex flex-col justify-center items-center lg:h-28 lg:hover:h-36"
      >
        <img className="w-full h-full" src={url} alt={title} />
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Tools;
