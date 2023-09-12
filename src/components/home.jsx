import Typewriter from "typewriter-effect";
import {
  GitHub,
  LinkedIn,
  Mail,
  Public,
  Phone,
  DarkMode,
} from "@mui/icons-material";
import Icon from "./Icon";
import Li from "./headerList";

function Home() {
  return (
    <section className="h-screen">
      <header className="flex justify-between items-center px-20 py-9">
        <div>
          {/* <video src=''></video> */}
        </div>

        <div className=" flex justify-center items-center">
          <nav className="flex justify-center items-center list-none gap-10">
            <Li title={'Skills'} />
            <Li title={'Projects'} />
            <Li title={'Contact'} />
            <Li title={'Resume'} />
            <li>
              <DarkMode />
            </li>
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
            <nav className="flex items-center list-none gap-4 my-6">
              <Icon
                lable={"github"}
                url={"https://github.com/Sohel-786"}
                element={<GitHub />}
              />

              <Icon
                lable={"linkedin"}
                url={"https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"}
                element={<LinkedIn />}
              />

              <Icon
                lable={"mail"}
                url={"mailto:sohel.shaikh27100@gmail.com"}
                element={<Mail />}
              />

              <Icon
                lable={"public"}
                url={
                  "https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.414927,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu"
                }
                element={<Public />}
              />

              <Icon
                lable={"phone"}
                url={"tel:+919664701106"}
                element={<Phone />}
              />
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
