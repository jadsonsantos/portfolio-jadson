import Container from 'components/Container'

import styles from './About.module.scss'

import { About } from './index'

const AboutComponent = () => {
  return (
    <section className={styles.about} id="about">
      <Container className={styles.about__container}>
        <About.Infos />
        <About.Illustration />
        <About.Skills />
      </Container>
    </section>
  )
}

export default AboutComponent
