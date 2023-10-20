import React from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../utils"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building websites and optimised sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='server icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience in building websites and optimised sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='UI icon' />
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>I'm a UI developer with experience in building websites and optimised sites.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

  )
}

export default About