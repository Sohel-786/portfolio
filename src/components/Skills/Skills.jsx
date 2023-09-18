import Tools from "./Tools";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center my-4 lg:my-9"
    >
      <div data-aos="flip-right" className="mt-8 flex lg:block justify-center items-center">
        <h1
          className="lg:text-4xl text-2xl font-bold font-serif leading-9 tracking-wide my-5 lg:ml-16"
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

      <div className="flex flex-wrap justify-center gap-7 items-center py-3 lg:gap-16 lg:px-28 lg:py-12">

        <Tools url={`//assets/icons/html-5.svg`} title={'HTML5'} fade={"fade-down-right"} />
        <Tools url={`//assets/icons/css3.svg`} title={'CSS3'} fade={"fade-right"}/>
        <Tools url={`//assets/icons/javascript.svg`} title={'JAVASCRIPT'} fade={'fade-up'} />
        <Tools url={`//assets/icons/reactjs.svg`} title={'REACT'} fade={"fade-left"} />
        <Tools url={`//assets/icons/redux.svg`} title={'REDUX'} fade={"fade-down-left"}/>

        <Tools url={`//assets/icons/tailwindcss.svg`} title={'TAILWIND CSS'} fade={"fade-down-right"}/>
        <Tools url={`//assets/icons/nodejs.svg`} title={'NODE JS'} fade={"fade-right"} />
        <Tools url={`//assets/icons/mongodb.svg`} title={'MONGODB'} fade={"fade-up"}/>
        <Tools url={`//assets/icons/express.svg`} title={'EXPRESS'} fade={"fade-left"} />
        <Tools url={`//assets/icons/mysql.svg`} title={'MYSQL'} fade={"fade-down-left"} />

      </div>
    </section>
  );
}

export default Skills;
