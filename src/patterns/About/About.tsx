import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typograph from 'components/foundation/Typography'
import Skill from 'components/Skill'

import styles from './About.module.scss'

import aboutImage from '../../../public/images/about.svg'
import { skills, socialLinks } from './data'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <Container className={styles.about__container}>
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
            {socialLinks.map(({ link, title }) => (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferer"
                key={title}
              >
                <Image
                  src={`images/${title}.svg`}
                  width={28}
                  height={28}
                  alt={`Ícone do ${title}`}
                />
              </Link>
            ))}
          </div>
        </div>
        <Image src={aboutImage} alt="Imagem da seção sobre" />
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
