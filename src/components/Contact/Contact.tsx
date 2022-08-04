import "./Contact.scss";
import { images } from "../../constants";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bn4qol6",
        "contact_form",
        form.current,
        process.env.REACT_APP_CONTACT_KEY
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="app__wrapper app__primarybg">
      <motion.div
        id="demo-text"
        whileInView={{
          opacity: [0, 1],
          scale: [7, 1],
          y: [50, 0],
        }}
      >
        <h1>Please, leave me a message</h1>
      </motion.div>

      <motion.div
        className="contact-wrapper-container"
        whileInView={{
          opacity: [0, 1],
          x: [300, 0],
        }}
      >
        <div className="contact__formheading-contact">
          <div className="contact-profilepic">
            <div id="peter">
              <img src={images.profile} alt="Piotr Rzadkowolski" />
            </div>
          </div>
          <div className="contact__formheading-details">
            <div className="contact-formheading-heading">
              <h1>Piotr Rzadkowolski</h1>
            </div>
            <div className="contact__formheading-email">
              <HiOutlineMail className="c-icons" />
              <p className="p-text">p.rzadkowolski@gmail.com</p>
            </div>
            <div className="contact__formheading-phone">
              <HiOutlinePhone className="c-icons" />
              <p className="p-text">505-933-394</p>
            </div>
          </div>
        </div>
        <div className="contact__form-container">
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-form-status"></div>
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="user_name"
              placeholder="Your name..."
            />

            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              name="user_email"
              placeholder="Your email address..."
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
