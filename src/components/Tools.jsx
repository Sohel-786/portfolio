function Tools({ url, title }) {
    
  return (
    <div>
      <div>
        <img src={url} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Tools;

