import Typography from 'components/foundation/Typography'

import styles from './Skill.module.scss'

type Props = {
  title: string
  content: string
}

const Skill = (props: Props) => {
  const { title, content } = props

  return (
    <section className={styles.skill}>
      <Typography className={styles.skill__title}>{title}</Typography>
      <Typography>{content}</Typography>
    </section>
  )
}

export default Skill
