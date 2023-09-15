function ContactIcon({ url, children, text }) {
  return (
    <div className="flex gap-10">
      <div className="text-4xl cursor-pointer text-blue-500 hover:text-blue-800">
        <a href={url} target="_blank" rel="noreferrer">
          {children}
        </a>
      </div>

      <div
        title="Copy"
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
        className="text-xl font-mono text-sky-500 hover:text-blue-600 cursor-copy active:font-bold"
      >
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default ContactIcon;
