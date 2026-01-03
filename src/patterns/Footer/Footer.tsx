import Link from 'next/link'

import Container from 'components/Container'
import Logo from 'components/Logo'
import SocialLinks from 'components/SocialLinks'

import { socialLinks } from 'patterns/About/data'

import styles from './Footer.module.scss'

import { navigation, profile } from 'config/profile'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
              <SocialLinks
                links={socialLinks}
                containerClassName={styles.footer__social}
                linkClassName={styles.footer__socialLink}
              />
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
