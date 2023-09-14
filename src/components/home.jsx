import Typewriter from "typewriter-effect";
import Icon from "./Icon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";

function Home() {
  return (
    <section className="flex justify-center items-center h-[500px]">
      <div className="w-7/12 px-24" style={{ color: "var(--clr-mode-text)" }}>
        <h1 data-aos="fade-right" className="text-5xl font-bold">
          Hi, I am{" "}
          <span style={{ color: "var(--clr-mode)" }}>Sohel Shaikh</span>
        </h1>

        <div data-aos="flip-left" className="text-3xl font-mono my-5">
          <Typewriter
            options={{
              strings: ["A Full Stack Web Developer", "A MERN Stack Developer"],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </div>

        <p
          data-aos="fade-up"
          className="leading-7 tracking-wide text-lg font-medium font-sans"
        >
          I enjoy developing websites and web applications. I am equipped with a
          variety of technologies and tools to help me build the best possible
          product.
        </p>

        <div>
          <nav className="flex items-center list-none gap-4 my-6">
            <Icon
              duration={"1600"}
              lable={"github"}
              url={"https://github.com/Sohel-786"}
              element={<FaGithub />}
            />

            <Icon
              duration={"1900"}
              lable={"linkedin"}
              url={"https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"}
              element={<FaLinkedin />}
            />

            <Icon
              duration={"2200"}
              lable={"mail"}
              url={"mailto:sohel.shaikh27100@gmail.com"}
              element={<MdMail />}
            />

            <Icon
              duration={"2500"}
              lable={"phone"}
              url={"tel:+919664701106"}
              element={<MdPhone />}
            />

            <Icon
              duration={"2800"}
              lable={"public"}
              url={
                "https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.414927,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu"
              }
              element={<MdLocationOn />}
            />
          </nav>
        </div>
      </div>
      <div className="w-5/12 h-full flex justify-center items-center overflow-hidden">
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
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
  );
}

export default Home;
