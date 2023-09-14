import Tools from "./Tools";

function Skills() {
  return (
    <section
      className="flex flex-col justify-center my-14 w-full"
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

      <div className="flex flex-wrap justify-center gap-16 items-center px-28 py-12">

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
