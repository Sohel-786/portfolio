import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import ContactIcon from "./ContactIcon";

function Contact() {
  return (
    <section id="contact" className="h-80 px-20 flex items-center">
      <div data-aos="fade-right" data-aos-duration="1500" className="w-fit">
        <img
          className="animate-[spin_15s_linear_infinite] w-64 h-64"
          src="src\assets\PngItem_700567.png"
          alt="contact"
        />
      </div>

      <div
        className="flex flex-col gap-4"
        style={{
          color: "var(--clr-mode-text)",
        }}
      >
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
  );
}

export default Contact;
