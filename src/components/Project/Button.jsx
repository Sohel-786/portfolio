function Button({ live, git }) {
  return (
    <div data-aos='fade-up' className="flex gap-5 pl-5 mt-3 sm:pl-7 sm:m-0">
      <a href={live}>{btn("See This Live")}</a>
      <a href={git}>{btn("View Code")}</a>
    </div>
  );
}

function btn(value) {
  return (
      <span type='button' className="border-2 block relative border-sky-400 px-3 py-2 font-bold text-xs hover:text-white before:content-[''] before:right-full before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-sky-400 before:-z-10 before:transition-all before:ease-in-out hover:before:right-0 sm:py-3 sm:px-4 sm:text-sm">
        {value}
      </span>
  );
}

export default Button;
