import Link from 'next/link'

import Container from 'components/Container'
import Logo from 'components/Logo'

import styles from './Footer.module.scss'

import { navigation, profile } from 'config/profile'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const social = [
    { icon: Github, href: profile.social.github, label: 'Github' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' }
  ]

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <Logo />
            <p className={styles.footer__description}>
              {profile.description.short}
            </p>
          </div>

          <div className={styles.footer__columns}>
            <div className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>Navegação</h4>
              <ul className={styles.footer__list}>
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={styles.footer__link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>Social</h4>
              <div className={styles.footer__social}>
                {social.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className={styles.footer__socialLink}
                    aria-label={item.label}
                  >
                    <item.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            © {currentYear} {profile.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
