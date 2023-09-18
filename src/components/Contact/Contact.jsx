import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import ContactIcon from "./ContactIcon";
import { FaSmileBeam } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-5 flex flex-col items-center justify-center py-5 gap-5 pb-24 lg:pb-16 mt-6 lg:mt-11 lg:gap-16 lg:px-20"
    >
      <div
        style={{
          color: "var(--clr-mode-text)",
        }}
        data-aos="flip-up"
        className="flex justify-center items-center text-2xl gap-2 font-sans font-bold lg:text-3xl lg:gap-5"
      >
        <h1>
          Lets Work <span className="text-sky-500">Together</span>
        </h1>
        <div
          style={{
            color: "var(--nav-msg-clr)",
          }}
          className="text-3xl lg:text-4xl"
        >
          <FaSmileBeam />
        </div>
      </div>

      <section className="flex p-3 w-full flex-col gap-5 md:justify-center md:gap-4 md:flex-row items-center lg:gap-20 lg:flex-row lg:p-0">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="w-44 h-36 flex justify-center items-center overflow-hidden lg:w-72 lg:h-72"
        >
          <img
            className="animate-[spin_15s_linear_infinite] w-10/12 aspect-square rounded-full"
            src="/assets/earth.webp"
            alt="contact"
          />
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 h-full">
          <ContactIcon
            url={"https://github.com/Sohel-786"}
            text={"https://github.com/Sohel-786"}
            lable="git"
          >
            <FaGithubSquare />
          </ContactIcon>

          <ContactIcon
            url={"https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"}
            text={"https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"}
            lable="linkedin"
          >
            <FaLinkedin />
          </ContactIcon>

          <ContactIcon
            url={"mailto:sohel.shaikh27100@gmail.com"}
            text={"sohel.shaikh27100@gmail.com"}
            lable="mail"
          >
            <GrMail />
          </ContactIcon>

          <ContactIcon
            url={"tel:+919664701106"}
            text={"+919664701106"}
            lable="phone"
          >
            <BiSolidPhoneCall />
          </ContactIcon>
        </div>
      </section>
    </section>
  );
}

export default Contact;
