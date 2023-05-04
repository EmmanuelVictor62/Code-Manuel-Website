import { useState } from "react";
import { contactField } from "../../Utils/constants";
import "./_contact.scss";
import emailjs from "emailjs-com";

export interface ContactProps {
  toggle?: boolean;
}

const Contact: React.FC<ContactProps> = ({ toggle }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [toggleAlert, setToggleAlert] = useState(false);
  const [type, setType] = useState<string>("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    emailjs
      .sendForm(
        "service_ydox7am",
        "template_qzlo23p",
        e.currentTarget,
        "3Kp0OppuErcqCxX2C"
      )
      .then((res) => {
        console.log(res);
        setType("delivered");
        setStatusMessage(
          "Your message has been received, thank you for reaching out."
        );
        setToggleAlert(true);
      })

      .catch((err) => {
        console.log(err);
        setType("error");
        setStatusMessage(`Oops, something went wrong. Please try again later.`);
        setToggleAlert(true);
      });
  };

  const handleAlertToggle = () => {
    setToggleAlert(!toggleAlert);
  };

  return (
    <div className="contact" id="contact" data-toggle={toggle}>
      <div className="contact-sidebar">
        <h3 className="contact-sidebar__heading">Let's get in touch</h3>
        <p className="contact-sidebar__subheading">
          Have a project in mind? Let's talk about how I can help. Send me a
          message today.
        </p>
        {contactField.map((element, index) => {
          return (
            <div className="contact-sidebar__info-container" key={index + 1}>
              <div className="contact-sidebar__icon-wrapper">
                <i className={`${element.className}`}></i>
              </div>
              <div className="contact-sidebar__info">
                {element.name}:{" "}
                <a href={`${element.content}`}>{element.content}</a>
              </div>
            </div>
          );
        })}
      </div>
      <form className="contact__form-container" onSubmit={sendEmail}>
        <h2>Get in touch</h2>
        <div className="contact__form">
          <div className="contact__form-name-container">
            <input
              type="text"
              className="contact__form-input"
              name="name"
              id="name"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={Name}
              required
            />

            <input
              type="text"
              className="contact__form-input "
              name="user-email"
              id="user-email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={Email}
              required
            />
          </div>

          <input
            type="text"
            className="contact__form-input contact__form-input--subject"
            name="Subject"
            id="Subject"
            placeholder="Subject"
            onChange={(event) => setSubject(event.target.value)}
            value={Subject}
          />

          <textarea
            className="contact__form-input contact__form-input--textarea"
            name="Message"
            id="Message"
            placeholder="Message"
            cols={30}
            rows={7}
            onChange={(event) => setMessage(event.target.value)}
            value={Message}
            required
          />
          {toggleAlert ? (
            <div className="contact__form-alert">
              <button onClick={handleAlertToggle}>
                <i className=" fa-solid fa-xmark"></i>
              </button>
              <p className="contact__form-alert-message" data-type={type}>
                {statusMessage}
              </p>
            </div>
          ) : null}

          <button type="submit" value="send" className="contact__form-button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
