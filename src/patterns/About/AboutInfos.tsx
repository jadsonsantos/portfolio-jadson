import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './About.module.scss'

import AboutSocial from './AboutSocial'
import data from './data'

const AboutInfos = () => {
  return (
    <div className={styles.about__infos}>
      <Heading>Quem sou eu</Heading>
      <Typography className={styles.about__text}>{data.about}</Typography>
      <AboutSocial />
    </div>
  )
}

export default AboutInfos
