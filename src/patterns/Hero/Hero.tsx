'use client'

import Link from 'next/link'

import Container from 'components/Container'
import SocialLinks from 'components/SocialLinks'

import { socialLinks } from 'patterns/About/data'

import styles from './Hero.module.scss'

import { profile } from 'config/profile'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>
            <span className={styles.hero__badgeIcon}>★</span>
            Front-End Developer
          </div>

          <h1 className={styles.hero__title}>
            Desenvolvedor
            <br />
            <span className={styles.hero__highlight}>Front-End</span>
            <br />
          </h1>

          <p className={styles.hero__description}>{profile.description.hero}</p>

          <div className={styles.hero__buttons}>
            <Link href="#cases" className={styles.hero__buttonPrimary}>
              Conhecer projetos
            </Link>
            <Link href="#about" className={styles.hero__buttonOutline}>
              Ver portfólio
            </Link>
          </div>

          <div className={styles.hero__stats}>
            <div className={styles.hero__stat}>
              <span className={styles.hero__statNumber}>
                {profile.stats.yearsExperience}
              </span>
              <span className={styles.hero__statLabel}>
                Anos de experiência
              </span>
            </div>
            <div className={styles.hero__stat}>
              <span className={styles.hero__statNumber}>
                {profile.stats.projectsCompleted}
              </span>
              <span className={styles.hero__statLabel}>
                Projetos concluídos
              </span>
            </div>
            <div className={styles.hero__stat}>
              <span className={styles.hero__statNumber}>
                {profile.stats.satisfiedClients}
              </span>
              <span className={styles.hero__statLabel}>
                Lojas VTEX implementadas
              </span>
            </div>
          </div>
        </div>

        <div className={styles.hero__cardWrapper}>
          <div className={styles.hero__card}>
            <div className={styles.hero__cardAvatar}>
              <span className={styles.hero__cardInitial}>
                {profile.initial}
              </span>
            </div>
            <span className={styles.hero__cardRole}>{profile.role}</span>
          </div>

          <SocialLinks
            links={socialLinks}
            containerClassName={styles.hero__socialSide}
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
