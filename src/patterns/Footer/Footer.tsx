import Container from 'components/Container'
import Logo from 'components/Logo'

import AboutSocial from 'patterns/About/AboutSocial'

import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container className={style.footer__container}>
        <Logo />
        <AboutSocial />
      </Container>
    </footer>
  )
}

export default Footer
