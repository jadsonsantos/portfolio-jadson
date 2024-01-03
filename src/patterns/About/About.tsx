import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/Container'
import CustomLink from 'components/CustomLink'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'
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
          <Typography className={styles.about__text}>{data.about}</Typography>
          <Typography>
            <Link href="/cv.pdf">Acesse meu currículo</Link>
          </Typography>
          <div className={styles.about__social}>
            {data.socialLinks.map(({ link, title }) => (
              <CustomLink href={link} target="_blank" key={title}>
                <Image
                  src={`images/${title}.svg`}
                  width={28}
                  height={28}
                  alt={`Ícone do ${title}`}
                />
              </CustomLink>
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
