import React from 'react'
import {getImageUrl} from "../../utils"

import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <span className={styles.hello}>Hello,</span>
          <span className={styles.introText}>
            I'm <span className={styles.introName}>Vineeth</span> <br /> Software Developer{" "}
          </span>
            <p className={styles.description}>
            I am an experienced Software Developer, intrested in developing products that can change the world for better.
            </p>
            <div className={styles.buttons}>
              <a href='#contact' className={styles.contactBtn}>Contact Me</a>
              <a href='' className={styles.downloadBtn}>Download CV</a>
            </div>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Image of me' className={styles.heroImg}/>
    </section>
  )
}

export default Hero