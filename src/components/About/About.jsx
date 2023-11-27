import React from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../utils"
import skills from "../../data/skills.json"
import about from "../../data/about.json"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.aboutContainer}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.aboutContent}>
                {about.map((para, id) => {
                    return (
                        <p className={styles.aboutPara} key={id}>{para}</p>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default About