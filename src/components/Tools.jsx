function Tools({ url, title }) {
  return (
    <div
      className="flex justify-center items-center flex-col hover:text-blue-500"
    >
      <div className="w-full h-28 hover:h-36 transition ease-in delay-500 duration-300 ">
        <img className="w-full h-full" src={url} alt={title} />
      </div>
      <div>
        <h1 className="text-xl font-semibold font-mono ">{title}</h1>
      </div>
    </div>
  );
}

export default Tools;
