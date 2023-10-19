import React, { useRef } from "react";
import styles from "./Contact.module.css"
import emailjs from "@emailjs/browser";
import {getImageUrl} from "../../utils"
import misc from "../../data/misc.json"

const SERVICE_ID = misc.SERVICE_ID;
const TEMPLATE_ID = misc.TEMPLATE_ID;
const PUBLIC_KEY = misc.PUBLIC_KEY;

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
    <section className={styles.contactPage} id="contact">
        <h1 className={styles.contactPageTitle}>Contact Me</h1>
        <span className={styles.contactDesc}>
          Feel free to reach out me using the form below.
        </span>
        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className={styles.name}
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className={styles.email}
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className={styles.msg}
            row="5"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <button type="submit" value="send" className={styles.submitBtn}>
            Submit
          </button>
          {/* <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div> */}
          <ul className={styles.links}>
            <li className={styles.link}>   
                <a href={`mailto:${misc.email}`} target="_blank" rel="noopener noreferrer"><img src={getImageUrl("contact/emailIcon.png")} alt='Email icon' className={styles.platformImage}/></a>
            </li>
            <li className={styles.link}>
                <a href={misc.linedin_link}  target="_blank" rel="noopener noreferrer"><img src={getImageUrl("contact/linkedinIcon.png")} alt='Linkedin icon' className={styles.platformImage}/></a>
            </li>
            <li className={styles.link}>
                <a href={misc.github_link}  target="_blank" rel="noopener noreferrer"><img src={getImageUrl("contact/githubIcon.png")} alt='Github icon' className={styles.platformImage}/></a>
            </li>
        </ul>
        </form>
    </section>
  );
}
