import Tools from "./Tools";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center my-4 sm:my-9"
    >
      <div data-aos="flip-right" className="mt-8 flex sm:block justify-center items-center">
        <h1
          className="sm:text-4xl text-2xl font-bold font-serif leading-9 tracking-wide my-5 sm:ml-16"
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

      <div className="flex flex-wrap justify-center gap-7 items-center py-3 sm:gap-16 sm:px-28 sm:py-12">

        <Tools url={`/src/assets/icons/html-5.svg`} title={'HTML5'} fade={"fade-down-right"} />
        <Tools url={`/src/assets/icons/css3.svg`} title={'CSS3'} fade={"fade-right"}/>
        <Tools url={`/src/assets/icons/javascript.svg`} title={'JAVASCRIPT'} fade={'fade-up'} />
        <Tools url={`/src/assets/icons/reactjs.svg`} title={'REACT'} fade={"fade-left"} />
        <Tools url={`/src/assets/icons/redux.svg`} title={'REDUX'} fade={"fade-down-left"}/>

        <Tools url={`/src/assets/icons/tailwindcss.svg`} title={'TAILWIND CSS'} fade={"fade-down-right"}/>
        <Tools url={`/src/assets/icons/nodejs.svg`} title={'NODE JS'} fade={"fade-right"} />
        <Tools url={`/src/assets/icons/mongodb.svg`} title={'MONGODB'} fade={"fade-up"}/>
        <Tools url={`/src/assets/icons/express.svg`} title={'EXPRESS'} fade={"fade-left"} />
        <Tools url={`/src/assets/icons/mysql.svg`} title={'MYSQL'} fade={"fade-down-left"} />

      </div>
    </section>
  );
}

export default Skills;
