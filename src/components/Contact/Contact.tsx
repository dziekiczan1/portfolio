import "./Contact.scss";
import { images } from "../../constants";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<any>();
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
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
          setIsSend(true);
          e.target.reset();
        },
        (error: any) => {
          setIsError(true);
        }
      );
  };

  return (
    <div id="contact" className="app__wrapper app__primarybg">
      <motion.div
        className="heading-text"
        whileInView={{
          opacity: [0, 1],
          scale: [7, 1],
          y: [50, 0],
        }}
      >
        <motion.div
          whileInView={{
            width: [0, 300],
          }}
        ></motion.div>
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
            <motion.div
              id="peter"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeInOut" }}
            >
              <img
                src={images.profilesm}
                alt="Piotr Rzadkowolski"
                width={134}
                height={200}
              />
            </motion.div>
          </div>
          <div className="contact__formheading-details">
            <div className="contact-formheading-heading">
              <h1>Piotr Rzadkowolski</h1>
            </div>
            <div className="contact__formheading-email">
              <a href="mailto:p.rzadkowolski@gmail.com" className="p-text">
                <HiOutlineMail className="c-icons" />
                p.rzadkowolski@gmail.com
              </a>
            </div>
            <div className="contact__formheading-phone">
              <a href="tel:+48505933394" className="p-text">
                <HiOutlinePhone className="c-icons" />
                505-933-394
              </a>
            </div>
          </div>
        </div>
        <div className="contact__form-container app__flex">
          {isSend ? (
            <div className="contact-form-status">
              Your message has been successfully sent!
            </div>
          ) : isError ? (
            <div className="contact-form-status error">
              There was a problem with sending your message. Try again!
            </div>
          ) : null}
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
