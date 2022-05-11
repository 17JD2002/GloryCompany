import "./contact.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Us</h1>
      <div className="contact-links">
        <a
          href="https://twitter.com/17Dic2002"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineTwitter className="icon" />
          <h2>
           Twitter <span>@17Dic2002</span>
          </h2>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=573008760587&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Whatsapp <span>+57 300 876 0587</span>
                     <span>+57 312 886 8956</span>
          </h2>
        </a>

        <a href="https://instagram.com/17dic2002?igshid=YmMyMTA2M2Y=" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram <span>@GloryCompanySoftware</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
