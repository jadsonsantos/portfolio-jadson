import Image from 'next/image'

import Container from 'components/Container'
import Typography from 'components/foundation/Typography'

import styles from './Hero.module.scss'

import heroArrow from '../../../public/images/hero-arrow.svg'
import heroIllustration from '../../../public/images/hero-illustration-1.svg'
import profilePicture from '../../../public/images/profile-jadson-white.png'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__infos}>
            <Image src={heroIllustration} alt="Ilustração de uma barra" />
            <h4 className={styles.hero__presentation}>Olá, eu sou o</h4>
            <h2 className={styles.hero__title}>Jadson Gonçalves</h2>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </Typography>
          </div>
          <Image src={profilePicture} width={350} alt="Foto do Jadson" />
        </div>
        <Image
          src={heroArrow}
          width={17}
          alt="Seta voltada para baixo"
          className={styles.hero__arrow}
        />
      </Container>
    </section>
  )
}

export default Hero
