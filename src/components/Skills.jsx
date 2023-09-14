import Tools from "./Tools";

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

      <div className="flex flex-wrap justify-center items-center gap-14 px-28 py-12">
        <Tools url={`/src/assets/icons/html-5.svg`} title={'HTML5'}/>
        <Tools url={`/src/assets/icons/css3.svg`} title={'CSS3'}/>
        <Tools url={`/src/assets/icons/javascript.svg`} title={'JAVASCRIPT'}/>
        <Tools url={`/src/assets/icons/reactjs.svg`} title={'REACT'}/>
        <Tools url={`/src/assets/icons/redux.svg`} title={'REDUX'}/>
        <Tools url={`/src/assets/icons/tailwindcss.svg`} title={'TAILWIND CSS'}/>
        <Tools url={`/src/assets/icons/nodejs.svg`} title={'NODE JS'}/>
        <Tools url={`/src/assets/icons/mongodb.svg`} title={'MONGODB'}/>
        <Tools url={`/src/assets/icons/express.svg`} title={'EXPRESS'}/>
        <Tools url={`/src/assets/icons/mysql.svg`} title={'MYSQL'}/>
      </div>
    </section>
  );
}

export default Skills;
