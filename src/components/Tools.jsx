function Tools({ url, title }) {
  return (
    <div
      className="p-3 w-1/5 rounded-xl flex justify-center items-center flex-col hover:shadow-lg hover:shadow-red-700"
      style={{
        boxShadow: "var(--shadow-tools)",
      }}
    >
      <div className="w-full h-28">
        <img className="w-full h-full" src={url} alt={title} />
      </div>
      <div>
        <h1 className="text-xl font-semibold font-mono">{title}</h1>
      </div>
    </div>
  );
}

export default Tools;
