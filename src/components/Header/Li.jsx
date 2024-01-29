import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function Li({ title }) {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      id={theme === "dark" ? "dark" : "light"}
      className="text-lg hover:text-sky-500 relative font-bold pb-1 cursor-pointer before:absolute before:h-1 before:w-0 before:bottom-0 before:bg-black hover:before:w-full focus:before:w-full hover:before:duration-300 before:ease-in before:duration-300 before:rounded-sm"
    >
      {title}
    </li>
  );
}

export default Li;
