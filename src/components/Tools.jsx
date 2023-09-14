function Tools({ url, title }) {
  return (
    <div
      className="flex justify-center items-center flex-col hover:text-blue-500 h-36 text-xl font-semibold font-mono hover:text-2xl hover:font-bold transition-all"
    >
      <div className="w-full h-28 ease-in hover:h-36 transition-all">
        <img className="w-full h-full" src={url} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Tools;
