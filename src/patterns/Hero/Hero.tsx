import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './Hero.module.scss'

import profilePicture from '../../../public/images/about.svg'
import heroArrow from '../../../public/images/hero-arrow.svg'
import heroIllustration from '../../../public/images/hero-illustration-1.svg'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__infos}>
            <Image
              src={heroIllustration}
              alt="Ilustração de uma barra"
              priority
            />
            <h4 className={styles.hero__presentation}>Olá, eu sou o</h4>
            <Heading>Jadson Santos</Heading>
            <Typography>
              Desenvolvedor Front-End apaixonado por criar experiências web
              excepcionais que sejam rápidas e responsivas.
            </Typography>
          </div>
          <Image src={profilePicture} alt="Foto do Jadson" priority />
        </div>
        <Link className={styles.hero__arrow} href="#about">
          <Image src={heroArrow} width={17} alt="Seta voltada para baixo" />
        </Link>
      </Container>
    </section>
  )
}

export default Hero
