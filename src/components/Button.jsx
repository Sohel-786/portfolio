function Button({ live, git }) {
  return (
    <div className="flex gap-5 pl-7">
      <a href={live}>{btn("See This Live")}</a>
      <a href={git}>{btn("View Code")}</a>
    </div>
  );
}

function btn(value) {
  return (
      <span type='button' className="border-2 block relative border-blue-500 py-3 px-4 font-bold text-sm hover:text-white before:content-[''] before:right-full before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-blue-500 before:-z-10 before:transition-all before:ease-in-out hover:before:right-0">
        {value}
      </span>
  );
}

export default Button;
