import React from 'react'
import styles from "./Skills.module.css"
import {getImageUrl} from "../../utils"
import skills from "../../data/skills.json"

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <div className={styles.skillsContainer}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillsContent}>
                {skills.map((skillCat, id) => {
                    return ( skillCat.show ===1 &&
                        <div className={styles.categoryItem}>
                            <h3 className={styles.categoryTitle}>{`${skillCat.category}`}</h3>
                            <div className={styles.categoryList}>
                                {skillCat.list.map((skill, id) => {
                                    return <button key={id} className={styles.skillItem}>{skill}</button>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills