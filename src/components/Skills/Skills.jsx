import Tools from "./Tools";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center my-4 lg:my-9"
    >
      <div
        data-aos="flip-right"
        className="mt-8 flex lg:block justify-center items-center"
      >
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

      <div className="flex flex-wrap justify-center gap-2 md:gap-5 items-center py-3 lg:gap-16 lg:px-28 lg:py-12">

        {/* Frontend */}
        <Tools url={`/assets/icons/html-5.svg`} title={"HTML5"} fade={"fade-down-right"} />
        <Tools url={`/assets/icons/css3.svg`} title={"CSS3"} fade={"fade-right"} />
        <Tools url={`/assets/icons/javascript.svg`} title={"JavaScript"} fade={"fade-up"} />
        <Tools url={`/assets/icons/reactjs.svg`} title={"React"} fade={"fade-left"} />
        <Tools url={`/assets/icons/redux.svg`} title={"Redux"} fade={"fade-down-left"} />
        <Tools url={`https://cdn.simpleicons.org/nextdotjs`} title={"Next.js"} fade={"fade-down"} />
        <Tools url={`/assets/icons/tailwindcss.svg`} title={"TailwindCSS"} fade={"fade-down-right"} />

        {/* Backend */}
        <Tools url={`/assets/icons/nodejs.svg`} title={"Node.js"} fade={"fade-right"} />
        <Tools url={`/assets/icons/express.svg`} title={"Express.js"} fade={"fade-left"} />
        <Tools url={`https://cdn.simpleicons.org/electron`} title={"Electron.js"} fade={"fade-up"} />
        <Tools url={`https://cdn.simpleicons.org/nestjs`} title={"NestJS"} fade={"fade-down-left"} />

        {/* Databases */}
        <Tools url={`/assets/icons/mongodb.svg`} title={"MongoDB"} fade={"fade-up"} />
        <Tools url={`https://cdn.simpleicons.org/postgresql`} title={"PostgreSQL"} fade={"fade-left"} />
        <Tools url={`/assets/icons/mysql.svg`} title={"MySQL"} fade={"fade-down-left"} />

        {/* Tools & Others */}
        <Tools url={`https://cdn.simpleicons.org/git`} title={"Git"} fade={"fade-down-right"} />
        <Tools url={`https://cdn.simpleicons.org/github`} title={"GitHub"} fade={"fade-up"} />
        <Tools url={`https://cdn.simpleicons.org/docker`} title={"Docker"} fade={"fade-left"} />
        <Tools url={`https://cdn.simpleicons.org/amazonwebservices`} title={"AWS (ECR, ECS)"} fade={"fade-down"} />
        <Tools url={`https://cdn.simpleicons.org/n8n`} title={"n8n"} fade={"fade-right"} />
        <Tools url={`https://cdn.simpleicons.org/prisma`} title={"Prisma"} fade={"fade-up"} />
        <Tools url={`/assets/icons/api.svg`} title={"REST APIs"} fade={"fade-left"} /> {/* Placeholder */}

      </div>
    </section>
  );
}

export default Skills;
