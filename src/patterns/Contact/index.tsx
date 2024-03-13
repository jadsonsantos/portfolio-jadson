import Image from 'next/image'

import Container from 'components/Container'
import CustomLink from 'components/CustomLink'
import Button from 'components/foundation/Button'
import Heading from 'components/foundation/Heading'
import Typography from 'components/foundation/Typography'

import styles from './Contact.module.scss'

import ContactImage from '../../../public/images/contact-illustration.svg'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container className={styles.contact__container}>
        <article className={styles.contact__infos}>
          <Heading>Contato</Heading>
          <Typography className={styles.contact__paragraph}>
            Interessado em criar um projeto? Entre em contato comigo.
          </Typography>
          <Button>
            <CustomLink href={process.env.WHATSAPP_URL!}>
              Começar um projeto
            </CustomLink>
          </Button>
        </article>
        <Image alt="Illustração da seção de contato" src={ContactImage} />
      </Container>
    </section>
  )
}

export default Contact
