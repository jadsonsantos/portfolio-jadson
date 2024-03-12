import Typography from 'components/foundation/Typography'

import styles from './Skill.module.scss'

interface SkillProps {
  skill: Skill
}

type Skill = {
  title: string
  content: string
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <section className={styles.skill}>
      <Typography className={styles.skill__title}>{skill.title}</Typography>
      <Typography>{skill.content}</Typography>
    </section>
  )
}

export default Skill
