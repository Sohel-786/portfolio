function Skills() {
  return (
    <section
      className="flex flex-col justify-center my-14 w-full"
      data-aos="fade-right"
    >
      <div data-aos="flip-right">
        <h1
          className="text-4xl font-bold font-serif leading-9 tracking-wide my-5 ml-16"
          style={{
            color: "var(--clr-mode-text)",
          }}
        >
          <span
            style={{
              color: "var(--clr-mode)",
            }}
          >
            Tools
          </span>{" "}
          I Use
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center"></div>
    </section>
  );
}

export default Skills;
