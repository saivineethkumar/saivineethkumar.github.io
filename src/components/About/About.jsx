import React from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../utils"
import skills from "../../data/skills.json"
import about from "../../data/about.json"
import { useState } from 'react'


const About = () => {
    const [showAbout, setShowAbout] = useState(true);
    const [showHireMe, setShowHireMe] = useState(false);
    const [showHobbies, setShowHobbies] = useState(false);
    function handleClick(subsec){
        subsec.tag === "about" && setShowAbout(!showAbout) 
        subsec.tag === "hireme" && setShowHireMe(!showHireMe) 
        subsec.tag === "hobbies" && setShowHobbies(!showHobbies);
    };

  return (
    <section className={styles.container} id="about">
        <div className={styles.aboutContainer}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.aboutContent}>
                {about.map((subsec, id) => {
                    return (
                        <>
                            <h3 className={styles.subsecTitle} 
                                onClick={() => handleClick(subsec)} >
                                {subsec.title}  {((subsec.tag === "hireme" && !showHireMe || subsec.tag === "hobbies" && !showHobbies) && String.fromCharCode(8595)) || 
                                ((subsec.tag === "hireme" && showHireMe || subsec.tag === "hobbies" && showHobbies) && String.fromCharCode(8593))}
                            </h3>
                            {((subsec.tag === "hireme" && showHireMe) || (subsec.tag === "hobbies" && showHobbies) || (subsec.tag ==="about")) && (<div className={styles.subsecContent}>
                                {subsec.description.map((para, id) => {
                                    return (
                                        <p className={styles.aboutPara} key={id}>{para}</p>
                                    )
                                })}
                            </div>)}
                        </>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default About