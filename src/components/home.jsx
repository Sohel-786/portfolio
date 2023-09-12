import Typewriter from "typewriter-effect";
import { GitHub, LinkedIn, Mail, Public } from "@mui/icons-material";

function Home() {
  return (
    <section className="h-screen">
      <header className="flex justify-between items-center px-8 py-5">
        <div>
          <img src="" alt="logo" />
        </div>

        <div className=" flex justify-center items-center">
          <nav className="flex justify-center items-center list-none gap-8">
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
            <li></li>
          </nav>
        </div>
      </header>

      <section className="flex justify-center items-center h-5/6 ">
        <div className="w-7/12 px-24">
          <h1 className="text-5xl font-bold">Hi, I am Sohel Shaikh</h1>

          <div className="text-3xl font-mono my-5">
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Web Developer",
                  "A MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 60,
              }}
            />
          </div>

          <p className="leading-7 tracking-wide text-lg font-medium font-sans">
            I enjoy developing websites and web applications. I am equipped with
            a variety of technologies and tools to help me build the best
            possible product.
          </p>

          <div>
            <nav className="flex items-center list-none gap-5 my-6  ">
              <li className="text-blue-400 hover:text-blue-600">
                <a
                  href="https://github.com/Sohel-786"
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sohel-786"
                  aria-label="email"
                  target="_blank"
                  rel="noreferrer"
                  className="link link--icon"
                >
                  <Mail />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sohel-786"
                  aria-label="public"
                  target="_blank"
                  rel="noreferrer"
                  className="link link--icon"
                >
                  <Public />
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-5/12 h-full flex justify-center items-center">
          <div
            className="w-7/12 h-4/6 rounded-3xl bg-cover"
            style={{
              backgroundImage:
                "url('https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/c/5/e/medium-anime-boy-cool-anime-well-made-matte-finish-poster-original-imag8gayfhwhyuab.jpeg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </section>
    </section>
  );
}

export default Home;
