function Tools({ url, title }) {
  return (
    <div
      className="p-3 cursor-pointer rounded-xl flex justify-center items-center flex-col"
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="w-24 h-28 border-2 border-red-700">
        <img className="w-full h-full" src={url} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Tools;
