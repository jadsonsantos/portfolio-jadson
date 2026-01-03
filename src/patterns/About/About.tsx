import Link from 'next/link'

import Container from 'components/Container'

import styles from './About.module.scss'

import { languages, socialLinks, tools } from './data'

import { Github, Linkedin, Mail } from 'lucide-react'

const AboutComponent = () => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Github: <Github size={20} />,
      Linkedin: <Linkedin size={20} />,
      Mail: <Mail size={20} />
    }
    return icons[iconName] || null
  }

  return (
    <section className={styles.about} id="about">
      <Container className={styles.about__container}>
        <div className={styles.about__left}>
          <h2 className={styles.about__title}>Quem sou eu</h2>
          <p className={styles.about__text}>
            Sou Jadson Santos, desenvolvedor Front-End focado na criação de
            interfaces web responsivas, acessíveis e com código bem estruturado.
          </p>
          <p className={styles.about__text}>
            Com mais de 5 anos de experiência, atuei em agências e empresas de
            tecnologia, desenvolvendo soluções para produtos digitais e
            e-commerces, sempre com atenção à performance, usabilidade e
            necessidades reais do negócio.
          </p>
          <div className={styles.about__social}>
            {socialLinks.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                target="_blank"
                className={styles.about__socialLink}
                aria-label={item.title}
              >
                {getIcon(item.icon)}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.about__right}>
          <div className={styles.about__skillGroup}>
            <h3 className={styles.about__skillTitle}>
              Linguagens & Frameworks
            </h3>
            <div className={styles.about__badges}>
              {languages.map((lang) => (
                <span key={lang} className={styles.about__badge}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.about__skillGroup}>
            <h3 className={styles.about__skillTitle}>
              Ferramentas & Tecnologias
            </h3>
            <div className={styles.about__badges}>
              {tools.map((tool) => (
                <span key={tool} className={styles.about__badge}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutComponent
