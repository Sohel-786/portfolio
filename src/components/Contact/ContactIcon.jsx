function ContactIcon({ url, children, text }) {
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className="text-4xl cursor-pointer text-blue-600 flex"
    >
      <a href={url}>{children}</a>
      <h1 title="Copy" className="text-xl font-mono" style={{
        color : 'var(--clr-mode-text)'
      }}>
        {text}
      </h1>
    </div>
  );
}

export default ContactIcon;
