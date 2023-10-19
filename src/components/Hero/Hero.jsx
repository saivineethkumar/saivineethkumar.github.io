import React from 'react'
import {getImageUrl} from "../../utils"

import styles from "./Hero.module.css"
import misc from "../../data/misc.json"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <span className={styles.hello}>Hello,</span>
          <span className={styles.introText}>
            I'm <span className={styles.introName}>{misc.name}</span> <br /> {misc.intro_role}{" "}
          </span>
            <p className={styles.description}>
            {misc.intro_summary}
            </p>
            <div className={styles.buttons}>
              <a href='#contact' className={styles.contactBtn}>Contact Me</a>
              <a href={misc.resume_link} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download CV</a>
            </div>
        </div>
        <img src={getImageUrl("intro/profileImage.png")} alt='Image of me' className={styles.heroImg}/>
    </section>
  )
}

export default Hero