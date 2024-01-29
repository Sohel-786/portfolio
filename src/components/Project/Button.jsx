function Button({ live, git }) {
  return (
    <div
      style={{
        color: "var(--clr-mode-text)",
      }}
      className="flex gap-5 pl-5 mt-3 lg:pl-7 lg:m-0"
    >
      <a aria-label="Live Link Of Project" target="_blank" href={live}>
        {btn("See This Live")}
      </a>
      <a aria-label="Source code Of Project" target="_blank" href={git}>
        {btn("View Code")}
      </a>
    </div>
  );
}

function btn(value) {
  return (
    <span
      type="button"
      className="border-2 block relative border-sky-400 px-3 py-2 font-bold text-xs hover:text-white before:content-[''] before:right-full before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-sky-400 before:-z-10 before:transition-all before:ease-in-out hover:before:right-0 lg:py-3 lg:px-4 lg:text-sm"
    >
      {value}
    </span>
  );
}

export default Button;
