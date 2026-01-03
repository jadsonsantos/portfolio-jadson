import Link from 'next/link'

import Container from 'components/Container'

import styles from './Contact.module.scss'

import { profile } from 'config/profile'
import { Mail, MapPin, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: profile.email,
    link: `mailto:${profile.email}`
  },
  {
    icon: MessageCircle,
    title: 'Whatsapp',
    value: profile.whatsapp.number,
    link: profile.whatsapp.url
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: profile.location,
    link: null
  }
]

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Container className={styles.contact__container}>
        <div className={styles.contact__header}>
          <h2 className={styles.contact__title}>Vamos trabalhar juntos?</h2>
          <p className={styles.contact__subtitle}>
            {profile.description.contact}
          </p>
        </div>

        <div className={styles.contact__cards}>
          {contactInfo.map((info) => (
            <div key={info.title} className={styles.contact__card}>
              <div className={styles.contact__cardIcon}>
                <info.icon size={24} />
              </div>
              <h3 className={styles.contact__cardTitle}>{info.title}</h3>
              {info.link ? (
                <Link href={info.link} className={styles.contact__cardValue}>
                  {info.value}
                </Link>
              ) : (
                <span className={styles.contact__cardValue}>{info.value}</span>
              )}
            </div>
          ))}
        </div>

        <Link
          href={`mailto:${profile.email}`}
          className={styles.contact__button}
        >
          Enviar mensagem
        </Link>
      </Container>
    </section>
  )
}

export default Contact
