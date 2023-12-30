import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/Container'
import Heading from 'components/foundation/Heading'
import Typograph from 'components/foundation/Typography'
import Skill from 'components/Skill'

import styles from './About.module.scss'

import aboutImage from '../../../public/images/about.svg'
import data from './data'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <Container className={styles.about__container}>
        <div className={styles.about__infos}>
          <Heading>Quem sou eu</Heading>
          <Typograph>{data.about}</Typograph>
          <div className={styles.about__social}>
            {data.socialLinks.map(({ link, title }) => (
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
          {data.skills.map((skill) => {
            const { title, content } = skill
            return <Skill key={skill.title} title={title} content={content} />
          })}
        </div>
      </Container>
    </section>
  )
}

export default About
