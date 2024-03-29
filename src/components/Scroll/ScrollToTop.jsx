import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <a href="#top">
      <div
        type="button"
        data-aos="fade-right"
        className="text-3xl fixed right-5 bottom-12 cursor-pointer hover:bg-sky-500 p-2 rounded-full hover:transition-all hover:duration-300 hover:text-white hover:shadow-zinc-700 hover:shadow-md z-20 text-gray-500"
      >
        <RiArrowUpSLine />
      </div>
    </a>
  ) : null;
}

export default ScrollToTop;
