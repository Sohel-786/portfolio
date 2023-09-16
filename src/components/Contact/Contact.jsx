import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import ContactIcon from "./ContactIcon";
import { FaSmileBeam } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-20 flex flex-col items-center justify-center py-5 gap-16 mb-12 mt-11"
    >
      <div data-aos='flip-up' className="flex justify-center items-center gap-5 text-3xl font-sans font-bold">
        <h1>Lets Work <span className="text-sky-500">Together</span></h1>
        <div className="text-4xl text-sky-400"><FaSmileBeam /></div>
      </div>
      <section className="flex items-center gap-20">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="w-64 h-64 rounded-full overflow-hidden"
        >
          <img
            className="animate-[spin_15s_linear_infinite] w-full h-full"
            src="src\assets\PngItem_700567.png"
            alt="contact"
          />
        </div>

        <div className="flex flex-col gap-4">
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
