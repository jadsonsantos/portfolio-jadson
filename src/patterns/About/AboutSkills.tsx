import Skill from 'components/Skill'

import styles from './About.module.scss'

import data from './data'

const AboutSkills = () => {
  return (
    <div className={styles.about__skills}>
      {data.skills.map((skill) => {
        return <Skill key={skill.title} skill={skill} />
      })}
    </div>
  )
}

export default AboutSkills
