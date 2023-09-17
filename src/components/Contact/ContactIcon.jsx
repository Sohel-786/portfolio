import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function ContactIcon({ url, children, text }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex gap-2 items-center lg:gap-10">
      <div
        id={theme === "light" ? "light" : "dark"}
        data-aos="zoom-in-left"
        className="text-2xl cursor-pointer lg:text-4xl"
      >
        <a href={url} target="_blank" rel="noreferrer">
          {children}
        </a>
      </div>

      <div
        id={theme === "light" ? "light" : "dark"}
        title="Copy"
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
        className="text-xs font-mono cursor-copy active:font-bold lg:text-xl"
      >
        <h1 className="flex-shrink" data-aos="fade-right">{text}</h1>
      </div>
    </div>
  );
}

export default ContactIcon;
