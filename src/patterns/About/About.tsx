import Image from 'next/image'

import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typograph from 'components/foundation/Typography'
import Skill from 'components/Skill'

import styles from './About.module.scss'

import instagramIcon from '../../../public/instagram.svg'
import linkedinIcon from '../../../public/linkedin.svg'
import whatsAppIcon from '../../../public/whatsApp.svg'
import skills from './data'

const About = () => {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__infos}>
          <Heading>Quem sou eu</Heading>
          <Typograph>
            Sou um programador focado em tecnologias Front-End, graduado em
            Ciência da Computação. Desenvolvo websites responsivos - adaptados
            para tablets e smartphones - dentro das boas práticas de
            desenvolvimento e SEO, visando boas performance e colocação nos
            mecanismos de busca.
          </Typograph>
          <div className={styles.about__social}>
            <Image src={linkedinIcon} alt="Me siga no Linkedin" />
            <Image src={instagramIcon} alt="Me siga no Instagram" />
            <Image src={whatsAppIcon} alt="Me siga no WhatsApp" />
          </div>
        </div>
        <div className={styles.about__skills}>
          {skills.map((skill) => {
            const { title, content } = skill
            return <Skill key={skill.title} title={title} content={content} />
          })}
        </div>
      </Container>
    </section>
  )
}

export default About
