import React, { useRef } from "react";
import FacebookIcon from "../../assets_old/facebook-icon.png";
import TwitterIcon from "../../assets_old/twitter.png";
import InstagramIcon from "../../assets_old/instagram.png";
import YoutubeIcon from "../../assets_old/youtube.png";
import "./contact.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ronge0s";
const TEMPLATE_ID = "template_hmz8i7h";
const PUBLIC_KEY = "5sVjILnw5w-JP2wTl";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert("Email sent. Thank you!");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please reachout me by using the form below.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            row="5"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}
