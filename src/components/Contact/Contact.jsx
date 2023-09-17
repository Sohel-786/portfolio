import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import ContactIcon from "./ContactIcon";
import { FaSmileBeam } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-20 flex flex-col items-center justify-center py-5 gap-16  pb-16 mt-11"
    >
      <div style={{
        color : 'var(--clr-mode-text)'
      }} data-aos='flip-up' className="flex justify-center items-center text-2xl gap-2 font-sans font-bold sm:text-3xl sm:gap-5">
        <h1>Lets Work <span className="text-sky-500">Together</span></h1>
        <div style={{
          color : 'var(--nav-msg-clr)'
        }}  className="text-3xl sm:text-4xl"><FaSmileBeam /></div>
      </div>

      <section className="flex items-center sm:gap-20">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="w-72 h-72 flex justify-center items-center overflow-hidden"
        >
          <img
            className="animate-[spin_15s_linear_infinite] w-10/12 h-5/6 rounded-full"
            src="src\assets\PngItem_700567.png"
            alt="contact"
          />
        </div>

        <div className="flex flex-col gap-4 h-full">
          <ContactIcon
            url={"https://github.com/Sohel-786"}
            text={"https://github.com/Sohel-786"}
          >
            <FaGithubSquare />
          </ContactIcon>

          <ContactIcon
            url={"https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"}
            text={"https://www.linkedin.com/in/sohel-shaikh-8ba7a9110/"}
          >
            <FaLinkedin />
          </ContactIcon>

          <ContactIcon
            url={"mailto:sohel.shaikh27100@gmail.com"}
            text={"sohel.shaikh27100@gmail.com"}
          >
            <GrMail />
          </ContactIcon>

          <ContactIcon url={"tel:+919664701106"} text={"+919664701106"}>
            <BiSolidPhoneCall />
          </ContactIcon>
        </div>
      </section>
    </section>
  );
}

export default Contact;
