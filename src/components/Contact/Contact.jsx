import React from 'react'
import styles from "./Contact.module.css"
import {getImageUrl} from "../../utils"


export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email icon'/>
                <a href='mailto:sdara@umass.edu'>sdara@umass.edu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='Linkedin icon'/>
                <a href='https://www.linkedin.com/in/saivineethkumar/'>linkedin.com/saivineethkumar</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github icon'/>
                <a href='https://github.com/saivineethkumar'>github.com/saivineethkumar</a>
            </li>
        </ul>
    </footer>
  )
}
