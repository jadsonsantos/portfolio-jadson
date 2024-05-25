import Image from 'next/image'

import CustomLink from 'components/CustomLink'

import styles from './About.module.scss'

import * as data from './data'

const AboutSocial = () => {
  return (
    <div className={styles.about__social}>
      {data.socialLinks.map(({ link, title }) => (
        <CustomLink href={link} key={title}>
          <Image
            src={`icons/${title}.svg`}
            width={28}
            height={28}
            alt={`Ícone do ${title}`}
          />
        </CustomLink>
      ))}
    </div>
  )
}

export default AboutSocial
