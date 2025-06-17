import Pyramid from "../ui/Pyramid";
import { contactInfo } from "../data";
import SocialHandles from "./SocialHandles";
import { BsFillSendFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import { SEND_NOW } from "../uiContants";

const Contact = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        serviceID,
        templateID,
        e.target,
        publicKey,
      )
      .then(
        (result) => {
          alert("Message sent successfully!", result);
        },
        (error) => {
          alert("Failed to send message. Try again later.", error);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">greate project</span>{" "}
              together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt={contact.title} />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="flex__center btn"
                    >
                      <span className="btn__shine text">Message</span>
                      <div
                        className="flex__center icon"
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your full email"
              name="email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn flex__center submit__btn">
              <div className="icon">
                <BsFillSendFill />
              </div>
              <span>{SEND_NOW}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
