import React from "react";
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import InstagramIcon from "../../assets/instagram.png"
import YoutubeIcon from "../../assets/youtube.png"
import "./contact.css"

export default function Contact(){
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please reachout me by using the form below.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" row="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        <img src={YoutubeIcon} alt="Youtube" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}