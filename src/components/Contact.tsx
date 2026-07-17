import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:prathamdesai0904@gmail.com" data-cursor="disable">
                prathamdesai0904@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916354103021" data-cursor="disable">
                +91 63541 03021
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/lord-weirdo/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prathamdesai635410/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://discord.com/users/1072456491094769744"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Discord <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/daudh_daayo?igsh=MWNlcnJzODR5cnd3NQ=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pratham Desai</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
