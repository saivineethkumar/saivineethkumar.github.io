import React from 'react'
import {getImageUrl} from "../../utils"

import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vineeth</h1>
            <p className={styles.description}>I'm a Software Developer with 2 years of experience in developing applications from end to end. Reach out if you'd like to learn more.</p>
            <a href='mailto:sdara@umass.edu' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Image of me' className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero