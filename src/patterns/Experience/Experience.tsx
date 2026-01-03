import Container from 'components/Container'

import styles from './Experience.module.scss'

import { experiences } from '../About/data'

import { Briefcase } from 'lucide-react'

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <Container>
        <h2 className={styles.experience__title}>Experiência Profissional</h2>
        <p className={styles.experience__subtitle}>
          Trajetória de crescimento contínuo e impacto em projetos
        </p>

        <div className={styles.experience__timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.experience__item}>
              <div className={styles.experience__iconWrapper}>
                <div className={styles.experience__icon}>
                  <Briefcase size={20} />
                </div>
                <div className={styles.experience__line} />
              </div>

              <div className={styles.experience__content}>
                <div className={styles.experience__header}>
                  <div>
                    <h3 className={styles.experience__role}>{exp.title}</h3>
                    <span className={styles.experience__company}>
                      {exp.company}
                    </span>
                  </div>
                  <span className={styles.experience__period}>
                    {exp.period}
                  </span>
                </div>

                <p className={styles.experience__description}>
                  {exp.description}
                </p>

                <div className={styles.experience__tags}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.experience__tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
