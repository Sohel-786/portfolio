import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function ContactIcon({ url, children, text }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex gap-10 items-center">
      <div
        id={theme === "light" ? "light" : "dark"}
        data-aos="zoom-in-left"
        className="text-4xl cursor-pointer "
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
        className="text-xl font-mono cursor-copy active:font-bold"
      >
        <h1 data-aos="fade-right">{text}</h1>
      </div>
    </div>
  );
}

export default ContactIcon;
